import initContactDraft from './localDeckContact';

export default function initLocalDeck(root) {
  const disposers = [];
  let active = true;
  const listen = (target, event, fn, opts) => {
    target.addEventListener(event, fn, opts);
    disposers.push(() => target.removeEventListener(event, fn, opts));
  };
  const setInterval = (fn, ms) => {
    const id = window.setInterval(fn, ms);
    disposers.push(() => window.clearInterval(id));
    return id;
  };
  const setTimeout = (fn, ms) => {
    const id = window.setTimeout(fn, ms);
    disposers.push(() => window.clearTimeout(id));
    return id;
  };
  const requestAnimationFrame = fn => active ? window.requestAnimationFrame(fn) : 0;
  const IntersectionObserver = function (...args) {
    const observer = new window.IntersectionObserver(...args);
    disposers.push(() => observer.disconnect());
    return observer;
  };
  const ResizeObserver = function (...args) {
    const observer = new window.ResizeObserver(...args);
    disposers.push(() => observer.disconnect());
    return observer;
  };
  const $ = s => root.querySelector(s),
    $$ = s => [...root.querySelectorAll(s)];
  const fullscreenElement = () => document.fullscreenElement || document.webkitFullscreenElement;
  const isFullscreen = element => {
    const current = fullscreenElement();
    return !!(current && (current === element || element.contains(current) || current.contains(element))) || !!element.querySelector('video')?.webkitDisplayingFullscreen;
  };
  const bindFullscreen = (button, target, video) => {
    const request = target.requestFullscreen || target.webkitRequestFullscreen;
    const nativeVideo = !request && video?.webkitEnterFullscreen;
    if (!request && !nativeVideo) return;
    button.hidden = false;
    target.classList.add('has-fullscreen');
    const label = button.getAttribute('aria-label');
    const status = target.querySelector('[data-fullscreen-status]');
    let wasFullscreen = false;
    const update = () => {
      const expanded = isFullscreen(target);
      target.classList.toggle('is-fullscreen', expanded);
      button.setAttribute('aria-label', expanded ? 'Exit full screen' : label);
      if (video) video.controls = expanded;
      if (wasFullscreen && !expanded) button.focus({ preventScroll: true });
      wasFullscreen = expanded;
    };
    listen(button, 'click', async () => {
      if (status) status.textContent = '';
      try {
        if (isFullscreen(target)) {
          const leave = document.exitFullscreen || document.webkitExitFullscreen;
          if (leave) await leave.call(document);
          else video?.webkitExitFullscreen?.();
        } else {
          // Load the original source within the tap gesture for iPhone playback.
          if (video) {
            if (!video.getAttribute('src')) video.src = video.dataset.src;
            video.dataset.userPaused = 'false';
            video.play().catch(() => {});
          }
          if (request) await request.call(target);
          else nativeVideo.call(video);
        }
        update();
      } catch (error) {
        if (status) status.textContent = 'Full screen is unavailable. You can still watch the video here.';
      }
    });
    listen(document, 'fullscreenchange', update);
    listen(document, 'webkitfullscreenchange', update);
    if (video) {
      listen(video, 'webkitbeginfullscreen', update);
      listen(video, 'webkitendfullscreen', update);
    }
  };
  const contactDraft = initContactDraft(root, { listen, later: setTimeout });
  // Measure the wrapped offer/header instead of assuming a fixed mobile height.
  const header = $('.topwrap');
  const measureHeader = () => root.style.setProperty('--top', `${header.getBoundingClientRect().height}px`);
  new ResizeObserver(measureHeader).observe(header);
  measureHeader();
  const setMenu = open => {
    $('#mnav').hidden = !open;
    $('#burger').setAttribute('aria-expanded', String(open));
    root.classList.toggle('has-menu', open);
    if (open) $('#mnavX').focus();
    else $('#burger').focus();
  };
  $('#burger').onclick = () => setMenu(true);
  $('#mnavX').onclick = () => setMenu(false);
  listen($('#mnav'), 'click', e => {
    if (e.target.closest('a,[data-open]')) setMenu(false);
  });
  listen(document, 'keydown', e => {
    if (e.key === 'Escape' && !$('#mnav').hidden) setMenu(false);
  });
  const sl = $$('#slides img');
  let si = 0;
  setInterval(() => {
    sl[si].classList.remove('on');
    si = (si + 1) % sl.length;
    const im = sl[si];
    void im.offsetWidth;
    im.classList.add('on');
    $('#slidecap').textContent = im.dataset.cap;
  }, 6500);
  const hw = $('#hvid');
  bindFullscreen($('#heroExpand'), hw);
  let heroPlayer = null;
  let heroVisible = false;
  let heroReady = false;
  let heroLoading = false;
  // Request audible autoplay. Browsers can require a user gesture first.
  let heroHasSound = true;
  let heroSoundBlocked = false;
  let heroAudioUnlocked = false;
  const heroCommand = method => {
    if (heroReady && heroPlayer && typeof heroPlayer[method] === 'function') heroPlayer[method]();
  };
  const pauseHero = () => heroCommand('pauseVideo');
  const loadYouTube = () => {
    if (window.YT?.Player) return Promise.resolve(window.YT);
    if (!window.__yellowstoneYouTubeReady) {
      window.__yellowstoneYouTubeReady = new Promise((resolve, reject) => {
        const previous = window.onYouTubeIframeAPIReady;
        window.onYouTubeIframeAPIReady = () => {
          try { previous?.(); } finally { resolve(window.YT); }
        };
        const script = document.createElement('script');
        script.src = 'https://www.youtube.com/iframe_api';
        script.async = true;
        script.onerror = () => { window.__yellowstoneYouTubeReady = null; reject(new Error('Video unavailable')); };
        document.head.appendChild(script);
      });
    }
    return window.__yellowstoneYouTubeReady;
  };
  const startHero = async (withSound = false) => {
    if (withSound) heroHasSound = true;
    if (heroReady) {
      if (heroHasSound) heroCommand('unMute');
      heroCommand('playVideo');
      return;
    }
    if (heroLoading) return;
    heroLoading = true;
    try {
      const YT = await loadYouTube();
      if (!active) return;
      // Set the referrer policy before navigation, including when the site
      // response carries a stricter policy. YouTube requires client identity.
      const mount = document.createElement('iframe');
      mount.id = 'hero-youtube';
      mount.title = 'Before you build your deck — Yellowstone Renovation';
      mount.referrerPolicy = 'strict-origin-when-cross-origin';
      mount.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
      mount.allowFullscreen = true;
      const params = new URLSearchParams({
        enablejsapi: '1', autoplay: '1', mute: '0', controls: '1',
        playsinline: '1', rel: '0', origin: window.location.origin,
      });
      mount.src = `https://www.youtube.com/embed/9XcXhPwMEYE?${params}`;
      $('#videoPlayer').appendChild(mount);
      heroPlayer = new YT.Player(mount, {
        videoId: '9XcXhPwMEYE',
        playerVars: { autoplay: 1, mute: 0, controls: 1, playsinline: 1, rel: 0, origin: window.location.origin },
        events: {
          onReady: event => {
            if (!active) return;
            heroReady = true;
            event.target.getIframe().title = 'Before you build your deck — Yellowstone Renovation';
            if (heroHasSound) event.target.unMute(); else event.target.mute();
            if ((heroVisible || isFullscreen(hw)) && !document.hidden && !root.classList.contains('has-modal')) event.target.playVideo();
          },
          onStateChange: event => {
            if (!active) return;
            if (event.data === YT.PlayerState.PLAYING) {
              hw.classList.add('on');
              if (heroHasSound && !event.target.isMuted()) {
                heroAudioUnlocked = true;
                heroSoundBlocked = false;
              }
              $$('.customer-story video').forEach(video => video.pause());
              // An iframe can finish starting after its card has left the screen.
              if ((!heroVisible && !isFullscreen(hw)) || document.hidden || root.classList.contains('has-modal')) pauseHero();
            }
          },
          onAutoplayBlocked: () => {
            if (!active) return;
            if (heroHasSound && (heroVisible || isFullscreen(hw)) && !document.hidden && !root.classList.contains('has-modal')) {
              heroHasSound = false;
              heroSoundBlocked = true;
              heroCommand('mute');
              heroCommand('playVideo');
              return;
            }
            hw.classList.remove('on');
          },
          onError: () => { hw.classList.remove('on'); $('#heroVideoStatus').textContent = 'Video unavailable. Please try again.'; }
        }
      });
    } catch (error) {
      heroLoading = false;
      $('#heroVideoStatus').textContent = 'Tap to retry the video.';
    }
  };
  listen($('#snd'), 'click', () => startHero(true));
  // Retry audio inside the first eligible real gesture, without an extra
  // sound overlay. Once sound plays, preserve the visitor's player controls.
  const unlockHeroAudio = event => {
    if (!event.isTrusted || heroAudioUnlocked || !heroSoundBlocked || !heroReady || !heroVisible || document.hidden || root.classList.contains('has-modal') || root.classList.contains('has-menu')) return;
    if (event.target.closest('button, a, input, textarea, select, [role="button"]')) return;
    if (event.type === 'keydown' && !['Enter', ' '].includes(event.key)) return;
    heroHasSound = true;
    heroSoundBlocked = false;
    heroCommand('unMute');
    heroCommand('playVideo');
  };
  listen(root, 'pointerup', unlockHeroAudio);
  listen(root, 'keydown', unlockHeroAudio);
  const heroObserver = new IntersectionObserver(entries => {
    const entry = entries[0];
    heroVisible = entry.isIntersecting && entry.intersectionRatio >= .55;
    if (heroVisible && !document.hidden && !root.classList.contains('has-modal')) startHero();
    else if (!isFullscreen(hw)) pauseHero();
  }, { threshold: [0, .25, .55, .8] });
  heroObserver.observe(hw);
  listen(document, 'visibilitychange', () => {
    if (document.hidden) pauseHero();
    else if (heroVisible && !root.classList.contains('has-modal')) startHero();
  });
  disposers.push(() => heroPlayer?.destroy());
  // Start within the tap gesture so Safari permits playback with sound.
  $$('.customer-story').forEach(card => {
    const video = card.querySelector('video');
    const button = card.querySelector('.story-start');
    listen(button, 'click', () => {
      $$('.customer-story video').forEach(other => { if (other !== video) other.pause(); });
      if (!video.getAttribute('src')) video.src = video.dataset.src;
      video.controls = true;
      video.muted = video.hasAttribute('data-silent');
      card.classList.add('playing');
      video.play().catch(() => {
        card.classList.remove('playing');
        video.controls = false;
      });
    });
    listen(video, 'play', () => {
      pauseHero();
      $$('.customer-story video').forEach(other => { if (other !== video) other.pause(); });
    });
    listen(video, 'ended', () => {
      card.classList.remove('playing');
      video.controls = false;
    });
    new IntersectionObserver(entries => {
      if (!entries[0].isIntersecting) video.pause();
    }, { threshold: .1 }).observe(card);
  });
  // Loop job-site footage only while visible; hidden "more" clips stay unloaded.
  const jobVideos = $$('video[data-jobsite]');
  const loadJobVideo = video => {
    if (!video.getAttribute('src')) video.src = video.dataset.src;
  };
  const jobLoad = new IntersectionObserver(entries => entries.forEach(({ target, isIntersecting }) => {
    if (isIntersecting && !target.closest('[hidden]')) loadJobVideo(target);
  }), { rootMargin: '160px 0px' });
  const jobPlay = new IntersectionObserver(entries => entries.forEach(({ target, isIntersecting }) => {
    target.dataset.visible = String(isIntersecting);
    if ((isIntersecting || isFullscreen(target.parentElement)) && !target.closest('[hidden]') && !document.hidden && target.dataset.userPaused !== 'true') {
      loadJobVideo(target);
      target.play().catch(() => {});
    } else target.pause();
  }), { threshold: .1 });
  jobVideos.forEach(video => {
    video.muted = true;
    video.controls = false;
    const card = video.closest('.jobsite-clip');
    bindFullscreen(card.querySelector('[data-film-expand]'), video.parentElement, video);
    const toggle = card.querySelector('[data-film-toggle]');
    const updatePlayback = () => {
      card.dataset.playing = String(!video.paused);
      toggle.setAttribute('aria-label', `${video.paused ? 'Play' : 'Pause'} video: ${video.getAttribute('aria-label')}`);
    };
    listen(video, 'play', updatePlayback);
    listen(video, 'pause', updatePlayback);
    listen(toggle, 'click', () => {
      if (video.paused) {
        video.dataset.userPaused = 'false';
        loadJobVideo(video);
        video.play().catch(() => {});
      } else {
        video.dataset.userPaused = 'true';
        video.pause();
      }
    });
    jobLoad.observe(video);
    jobPlay.observe(video);
  });
  listen(document, 'visibilitychange', () => {
    jobVideos.forEach(video => {
      if (!document.hidden && video.dataset.visible === 'true' && !video.closest('[hidden]') && video.dataset.userPaused !== 'true') {
        video.play().catch(() => {});
      } else video.pause();
    });
  });
  listen($('#jobsite-more'), 'click', () => {
    const hiddenCards = $$('[data-more-jobsite][hidden]');
    const next = hiddenCards.slice(0, 3);
    next.forEach(card => card.hidden = false);
    const count = $$('.jobsite-clip:not([hidden])').length;
    const remaining = $$('[data-more-jobsite][hidden]').length;
    $('#jobsite-count').textContent = `Showing ${count} of ${jobVideos.length} project videos`;
    $('#jobsite-more').setAttribute('aria-expanded', 'true');
    if (!remaining) $('#jobsite-more').hidden = true;
    // Move keyboard focus to the revealed group without jumping the page.
    if (next[0]) {
      next[0].tabIndex = -1;
      next[0].focus({ preventScroll: true });
    }
  });
  let thanksReturnFocus = null;
  const closeAll = () => {
    const wasThanks = !$('#m-thanks').hidden;
    root.classList.remove('has-modal');
    $$('.ov').forEach(o => o.hidden = true);
    if (wasThanks && thanksReturnFocus?.isConnected) thanksReturnFocus.focus({ preventScroll: true });
  };
  const open = id => {
    closeAll();
    const m = $('#m-' + id);
    if (m) {
      m.hidden = false;
      root.classList.add('has-modal');
      pauseHero();
      contactDraft.restore();
      if (id === 'est' && $('#estF [data-st]')) setEst(1);
    }
  };
  const showThanks = returnTo => {
    thanksReturnFocus = returnTo;
    open('thanks');
    $('#thanks-title').focus({ preventScroll: true });
  };
  listen($('#m-thanks'), 'keydown', event => {
    if (event.key !== 'Tab') return;
    const items = [...$('#m-thanks').querySelectorAll('button, a[href]')];
    const first = items[0], last = items[items.length - 1];
    if (event.shiftKey && (document.activeElement === first || document.activeElement === $('#thanks-title'))) {
      event.preventDefault(); last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault(); first.focus();
    }
  });
  listen(document, 'click', e => {
    const o = e.target.closest('[data-open]');
    if (o) {
      e.preventDefault();
      open(o.dataset.open);
      return;
    }
    if (e.target.closest('[data-close]') || e.target.classList.contains('ov')) closeAll();
  });
  listen(document, 'keydown', e => {
    if (e.key === 'Escape') {
      closeAll();
    }
  });
  $('#zipHero').addEventListener('submit', e => {
    e.preventDefault();
    const form = $('#estimate-top .inline-lead-form');
    contactDraft.remember({ zip: $('#zipIn').value });
    $('#estimate-top').scrollIntoView({ behavior: 'smooth', block: 'start' });
    form.elements.first_name.focus({ preventScroll: true });
  });
  $$('.inline-lead-form').forEach(form => {
    listen(form, 'submit', async event => {
      event.preventDefault();
      const status = form.querySelector('.inline-status');
      const button = form.querySelector('[type="submit"]');
      const values = Object.fromEntries(new FormData(form));
      status.textContent = '';
      if (!values.first_name.trim() || !values.last_name.trim()) {
        status.textContent = 'Please enter your first and last name.';
        form.elements[!values.first_name.trim() ? 'first_name' : 'last_name'].focus();
        return;
      }
      const digits = values.phone.replace(/\D/g, '');
      if (!/^(?:1)?\d{10}$/.test(digits)) {
        status.textContent = 'Enter a 10-digit phone number.';
        form.elements.phone.focus();
        return;
      }
      contactDraft.remember(values);
      button.disabled = true;
      button.textContent = 'Sending…';
      try {
        const response = await fetch('/api/lead', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({ ...values, submission_stage: 'contact', project_type: 'Deck building', source: 'local-deck', placement: form.dataset.placement, _subject: 'Local Deck Landing - Free Estimate', page: window.location.href })
        });
        const result = await response.json();
        if (!response.ok || result.success === false || result.ok === false) throw new Error('Submission failed');
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event: 'generate_lead', form: 'local-deck-inline-estimate', placement: form.dataset.placement });
        form.reset();
        contactDraft.restore();
        status.textContent = 'Request received! A deck specialist will call within one business day to arrange your free visit.';
        button.textContent = 'Send My Request';
        button.disabled = false;
        beginProjectDetails(values, button);
      } catch (error) {
        status.textContent = 'Could not send your request. Please try again or call (859) 765-7267.';
        button.disabled = false;
        button.textContent = 'Send My Request';
      }
    });
  });
  const BUDGETS = ['$10,000 – $20,000', '$20,000 – $30,000', '$30,000 – $40,000', '$40,000 – $100,000', '$100,000 – $150,000', '$150,000+', 'More than $150,000'];
  const bud = $('#bud');
  let budgetSelected = false;
  const setBudget = index => {
    budgetSelected = index !== null;
    if (budgetSelected) bud.value = String(index);
    else bud.value = '0';
    const label = budgetSelected ? BUDGETS[index] : 'No budget selected';
    $('#bval').textContent = label;
    bud.setAttribute('aria-valuetext', label);
    bud.style.setProperty('--budget-progress', `${budgetSelected ? index / 6 * 100 : 0}%`);
    $$('#estF [data-budget]').forEach(button => button.setAttribute('aria-pressed', String(budgetSelected && Number(button.dataset.budget) === index)));
  };
  listen(bud, 'input', () => setBudget(Number(bud.value)));
  // A tap at the initial slider position is still an explicit $10K selection.
  listen(bud, 'pointerup', () => setBudget(Number(bud.value)));
  $$('#estF [data-budget]').forEach(button => listen(button, 'click', () => setBudget(Number(button.dataset.budget))));
  listen($('#budgetClear'), 'click', () => setBudget(null));
  $$('#estF .chips').forEach(c => listen(c, 'click', e => {
    const b = e.target.closest('button');
    if (!b) return;
    const selected = b.getAttribute('aria-pressed') !== 'true';
    c.querySelectorAll('button').forEach(x => x.setAttribute('aria-pressed', x === b && selected));
  }));
  let est = 1;
  let contactSnapshot = null;
  let estimateReturnFocus = null;
  let sendingEstimate = false;
  function setEst(n) {
    est = n;
    $$('#estF [data-st]').forEach(d => d.hidden = +d.dataset.st !== n);
    $$('#estF .prog i').forEach((i, k) => i.classList.toggle('on', k < n));
    $('#estK').textContent = n === 1 ? 'Step 1 · Your contact details' : 'Request sent · Your deck (optional)';
    $('#estBack').hidden = true;
    $('#estNext').textContent = n === 1 ? 'Send & continue' : 'Save project details';
    $('#estSkip').hidden = n !== 2;
    $('#eErr').textContent = '';
    $('#m-est .modal').scrollTop = 0;
  }
  function resetProjectDetails() {
    setBudget(null);
    $$('#estF .chips button').forEach(button => button.setAttribute('aria-pressed', 'false'));
    $('#e-desc').value = '';
  }
  function beginProjectDetails(values, returnFocus) {
    contactSnapshot = { project_type: 'Deck building', source: 'local-deck', page: window.location.href, ...values, submission_stage: 'project_details' };
    estimateReturnFocus = returnFocus;
    resetProjectDetails();
    open('est');
    setEst(2);
    $('#estF .contact-saved').tabIndex = -1;
    $('#estF .contact-saved').focus({ preventScroll: true });
  }
  function finishEstimate() {
    $('#estF').reset();
    contactDraft.restore();
    resetProjectDetails();
    contactSnapshot = null;
    showThanks(estimateReturnFocus || $('.hbtn'));
  }
  listen($('#estSkip'), 'click', finishEstimate);
  $('#estF').addEventListener('submit', async e => {
    e.preventDefault();
    if (sendingEstimate) return;
    const er = $('#eErr');
    er.textContent = '';
    let data;
    const isContactStep = est === 1;
    if (isContactStep) {
      if (!$('#e-name').value.trim() || !$('#e-last-name').value.trim()) {
        er.textContent = 'Enter your first and last name.';
        $(!$('#e-name').value.trim() ? '#e-name' : '#e-last-name').focus();
        return;
      }
      if (!/^(?:1)?\d{10}$/.test($('#e-phone').value.replace(/\D/g, ''))) {
        er.textContent = 'Enter a 10-digit phone number.';
        $('#e-phone').focus();
        return;
      }
      if ($('#e-zip').value.trim() && !/^\d{5}$/.test($('#e-zip').value.trim())) {
        er.textContent = 'Enter a 5-digit ZIP code or leave it blank.';
        $('#e-zip').focus();
        return;
      }
      if ($('#e-email').value && !$('#e-email').validity.valid) {
        er.textContent = 'Enter a valid email or leave it blank.';
        $('#e-email').focus();
        return;
      }
      data = {
        first_name: $('#e-name').value.trim(), last_name: $('#e-last-name').value.trim(),
        phone: $('#e-phone').value.trim(), email: $('#e-email').value.trim(), zip: $('#e-zip').value.trim(),
        project_type: 'Deck building', source: 'local-deck', page: window.location.href,
        submission_stage: 'contact', timestamp: new Date().toISOString()
      };
      contactDraft.remember(data);
    } else {
      const pick = name => $(`#estF [data-name="${name}"] [aria-pressed="true"]`)?.textContent || '';
      const details = { project: pick('type'), material: pick('mat'), budget: budgetSelected ? BUDGETS[Number(bud.value)] : '', timeline: pick('when'), message: $('#e-desc').value.trim() };
      if (!Object.values(details).some(Boolean)) { finishEstimate(); return; }
      data = { ...contactSnapshot, ...details, submission_stage: 'project_details' };
    }
    sendingEstimate = true;
    $('#estNext').disabled = true;
    $('#estSkip').disabled = true;
    $('#estNext').textContent = 'Sending…';
    try {
      const response = await fetch('/api/lead', {
        method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(data)
      });
      const result = await response.json();
      if (!response.ok || result.success === false || result.ok === false) throw new Error('Submission failed');
      if (isContactStep) {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event: 'generate_lead', form: 'local-deck-estimate' });
        beginProjectDetails(data, $('.hbtn'));
      } else finishEstimate();
    } catch (error) {
      er.textContent = isContactStep ? 'Could not send your request. Please try again or call (859) 765-7267.' : 'Your contact details are saved. Could not save these extra details. Try again or skip this step.';
    } finally {
      sendingEstimate = false;
      $('#estNext').disabled = false;
      $('#estSkip').disabled = false;
      $('#estNext').textContent = est === 1 ? 'Send & continue' : 'Save project details';
    }
  });
  $('#catF').addEventListener('submit', async e => {
    e.preventDefault();
    const f = e.target,
      er = f.querySelector('.err');
    if (!$('#k-name').value.trim()) {
      er.textContent = 'Enter your name.';
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test($('#k-email').value)) {
      er.textContent = 'Enter a valid email.';
      return;
    }
    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          _subject: 'Local Deck Landing - Catalog Request',
          source: 'local-deck',
          name: $('#k-name').value.trim(),
          email: $('#k-email').value.trim(),
          page: window.location.href,
          timestamp: new Date().toLocaleString()
        })
      });
      if (!response.ok) throw new Error('Submission failed');
    } catch (error) {
      er.textContent = 'Could not send. Please try again or call (859) 765-7267.';
      return;
    }
    f.innerHTML = '<div class="ok"><img src="/local-deck/img/bear-thumbsup.webp" alt=""><h3 style="padding:0">You\'re on the list!</h3><p>We\'ll email the 2026 Deck Design Catalog to you.</p><button class="btn btn-w" type="button" data-close>Close</button></div>';
  });
  const DK = [{
    k: 'Ground-level',
    t: 'Ground-level decks',
    d: 'A low, step-out deck that turns a plain backyard into an outdoor room. Fewer stairs, faster builds and a clean fascia all around.',
    imgs: ['/local-deck/img/g/d15.webp', '/local-deck/img/g/d4.webp', '/local-deck/img/r/sunroom-deck-wide.webp', '/local-deck/img/r/white-rail-lattice.webp'],
    f: [['Best for', 'Flat yards, patios, sunrooms'], ['Height', '1–3 steps from the door'], ['Materials', 'Composite or pressure-treated'], ['Railing', 'Aluminum or composite']],
    t2: ['Footings & framing built to code', 'Picture-frame border & fascia', 'Skirting or lattice to finish the base']
  }, {
    k: 'Elevated',
    t: 'Elevated & second-story decks',
    d: 'Walk straight out from the kitchen onto a deck on heavy posts, with full stairs to the yard and a shaded patio underneath.',
    imgs: ['/local-deck/img/r/elevated-posts.webp', '/local-deck/img/r/elevated-stairs.webp', '/local-deck/img/g/d104.webp', '/local-deck/img/r/stairs-front.webp'],
    f: [['Best for', 'Walkout basements, sloped yards'], ['Height', 'Second story, full staircase'], ['Materials', 'Composite or pressure-treated'], ['Railing', 'Code-height aluminum rail']],
    t2: ['Heavy posts, beams & footings', 'Ledger bolted and flashed to the house', 'Permits and inspections handled']
  }, {
    k: 'Multi-level',
    t: 'Multi-level decks',
    d: 'Separate spaces for grilling, dining and lounging, stepped down the yard with a landing in between.',
    imgs: ['/local-deck/img/g/d39.webp', '/local-deck/img/g/d22.webp', '/local-deck/img/g/d41.webp', '/local-deck/img/g/d28.webp'],
    f: [['Best for', 'Big families, entertaining'], ['Layout', '2+ levels with landings'], ['Materials', 'Composite, mixed colors'], ['Extras', 'Lighting, planters, gates']],
    t2: ['Zones designed around how you live', 'Wide stairs between levels', 'Planned in 3D before we start']
  }, {
    k: 'Covered',
    t: 'Covered decks & porches',
    d: 'An outdoor room with a roof tied cleanly into your house, a finished ceiling, a fan and lights. Use it rain or shine.',
    imgs: ['/local-deck/img/g/d91.webp', '/local-deck/img/r/under-deck-patio.webp', '/local-deck/img/p/covered-porch-1.webp', '/local-deck/img/p/covered-porch-2.webp'],
    f: [['Best for', 'Shade, rainy days, evenings'], ['Roof', 'Gable or shed, tied to the house'], ['Ceiling', 'Finished, with lights & fan'], ['Floor', 'Composite or concrete patio']],
    t2: ['Roof framing tied into your house', 'Recessed lights & ceiling fan', 'Under-deck ceilings for patios below']
  }];
  let dCur = 0,
    dImg = 0;
  $('#dtabs').innerHTML = DK.map((d, i) => `<button class="dtab" role="tab" aria-selected="${i === 0}" data-i="${i}"><img src="${d.imgs[0]}" alt="">${d.k}</button>`).join('');
  const setImg = j => {
    dImg = j;
    const d = DK[dCur],
      im = $('#dimg');
    im.style.opacity = .2;
    setTimeout(() => {
      im.src = d.imgs[j];
      im.alt = d.t;
      im.style.opacity = 1;
    }, 140);
    $('#dcnt').textContent = `${j + 1} / ${d.imgs.length}`;
    $$('#dthumbs button').forEach((b, k) => b.setAttribute('aria-current', k === j));
  };
  const showD = i => {
    dCur = i;
    const d = DK[i];
    $('#dkick').textContent = d.k;
    $('#dtitle').textContent = d.t;
    $('#ddesc').textContent = d.d;
    $('#dfacts').innerHTML = d.f.map(([a, b]) => `<li><span>${a}</span><b>${b}</b></li>`).join('');
    $('#dticks').innerHTML = d.t2.map(x => `<li>${x}</li>`).join('');
    $('#dthumbs').innerHTML = d.imgs.map((s, k) => `<button aria-label="Photo ${k + 1}"><img src="${s}" alt="" loading="lazy"></button>`).join('');
    $$('#dtabs .dtab').forEach((b, j) => b.setAttribute('aria-selected', j === i));
    setImg(0);
  };
  $('#dtabs').addEventListener('click', e => {
    const b = e.target.closest('.dtab');
    if (b) showD(+b.dataset.i);
  });
  $('#dthumbs').addEventListener('click', e => {
    const b = e.target.closest('button');
    if (b) setImg([...b.parentNode.children].indexOf(b));
  });
  $('#dmain').addEventListener('click', () => setImg((dImg + 1) % DK[dCur].imgs.length));
  showD(0);
  const BA = [['Old wood deck to a clean new deck', 'Lexington, KY', 'A tired, gray wood deck replaced with new boards, railing and a fresh look.'], ['Screened porch to an open composite deck', 'Lexington, KY', 'An enclosed, worn porch opened up into a low composite deck with clean edges.'], ['Faded stairs to black aluminum rail', 'Central Kentucky', 'Weathered stairs and rail rebuilt with white risers and black aluminum railing.'], ['Front steps to a covered entry porch', 'Central Kentucky', 'Bare front steps turned into a covered porch with columns and new stairs.']];
  let bi = 0;
  const bas = $('#bas'),
    br = bas.querySelector('input');
  const setComparison = value => {
    const position = Math.max(0, Math.min(100, value));
    br.value = position;
    br.setAttribute('aria-valuetext', `${Math.round(position)}% before, ${Math.round(100 - position)}% after`);
    bas.style.setProperty('--pos', position + '%');
  };
  listen(br, 'input', () => setComparison(Number(br.value)));
  let comparisonPointer = null;
  const moveComparison = event => {
    const rect = bas.getBoundingClientRect();
    setComparison((event.clientX - rect.left) / rect.width * 100);
  };
  // Drag from anywhere on the picture; vertical swipes still scroll the page.
  listen(bas, 'pointerdown', event => {
    if (!event.isPrimary || event.button !== 0) return;
    event.preventDefault();
    comparisonPointer = event.pointerId;
    br.focus({ preventScroll: true });
    bas.setPointerCapture(event.pointerId);
    moveComparison(event);
  });
  listen(bas, 'pointermove', event => {
    if (event.pointerId === comparisonPointer) moveComparison(event);
  });
  const finishComparison = event => {
    if (event.pointerId !== comparisonPointer) return;
    comparisonPointer = null;
    if (bas.hasPointerCapture(event.pointerId)) bas.releasePointerCapture(event.pointerId);
  };
  listen(bas, 'pointerup', finishComparison);
  listen(bas, 'pointercancel', finishComparison);
  listen(bas, 'lostpointercapture', () => { comparisonPointer = null; });
  listen(bas, 'dragstart', event => event.preventDefault());
  $('#bathumbs').innerHTML = BA.map((_, k) => `<button type="button" aria-label="Show ${BA[k][0]}"><img src="/local-deck/img/g/ba${k + 1}a.webp" alt="" loading="lazy"></button>`).join('');
  const showBA = k => {
    bi = (k + BA.length) % BA.length;
    $('#baB').src = `/local-deck/img/g/ba${bi + 1}b.webp`;
    $('#baA').src = `/local-deck/img/g/ba${bi + 1}a.webp`;
    $('#baT').textContent = BA[bi][0];
    $('#baD').textContent = BA[bi][2];
    setComparison(50);
    $$('#bathumbs button').forEach((b, j) => b.setAttribute('aria-current', j === bi));
  };
  $('#baP').onclick = () => showBA(bi - 1);
  $('#baX').onclick = () => showBA(bi + 1);
  $('#bathumbs').addEventListener('click', e => {
    const b = e.target.closest('button');
    if (b) showBA([...b.parentNode.children].indexOf(b));
  });
  showBA(0);
  /* ===== 3D deck build: SketchUp-style canvas renderer ===== */
  const cv = $('#cv'),
    ctx = cv.getContext('2d'),
    stage = $('#stage');
  const STEPS = [['Layout & dig', 'We stake out the deck, run string lines and dig footing holes below the frost line.'], ['Concrete footings', 'Concrete is poured in every hole and post bases are set level and square.'], ['Posts & beams', 'Pressure-treated posts go on the footings, with doubled beams on top.'], ['Ledger & joists', 'The ledger is bolted and flashed to the house. Joists go in at 16″ on center.'], ['Decking', 'Boards go down one by one, then the picture-frame border and fascia.'], ['Stairs', 'Stringers, treads and risers down to a solid landing pad.'], ['Railing', 'Posts, rails and balusters at code height. Ready for your first cookout.']];
  const NST = STEPS.length;
  $('#sbar').innerHTML = STEPS.map((s, i) => `<button class="st" data-s="${i + 1}" title="${s[0]}"><i>${i + 1}</i><span>${s[0]}</span></button>`).join('') + '<button class="pl" id="playB">▶<span> Play</span></button>';
  const F = [],
    cnt = new Array(NST + 1).fill(0);
  const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]],
    crs = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]],
    nrm = a => {
      const m = Math.hypot(...a) || 1;
      return a.map(v => v / m);
    },
    dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
  const newell = p => {
    const n = [0, 0, 0];
    for (let i = 0; i < p.length; i++) {
      const a = p[i],
        b = p[(i + 1) % p.length];
      n[0] += (a[1] - b[1]) * (a[2] + b[2]);
      n[1] += (a[2] - b[2]) * (a[0] + b[0]);
      n[2] += (a[0] - b[0]) * (a[1] + b[1]);
    }
    return nrm(n);
  };
  const cen = p => {
    const c = [0, 0, 0];
    p.forEach(q => {
      c[0] += q[0];
      c[1] += q[1];
      c[2] += q[2];
    });
    return c.map(v => v / p.length);
  };
  function addFace(p, col, g, k, o, center) {
    let n = newell(p);
    if (center) {
      const c = cen(p);
      if (dot(n, sub(c, center)) < 0) n = n.map(v => -v);
    }
    F.push({
      p,
      n,
      col,
      g,
      k,
      e: o.e !== false,
      until: o.until || 99,
      decal: false,
      drop: o.drop == null ? 3 : o.drop
    });
  }
  function solid(c8, col, g, o = {}) {
    const k = cnt[g]++;
    const C = cen(c8);
    [[0, 1, 2, 3], [4, 5, 6, 7], [0, 1, 5, 4], [1, 2, 6, 5], [2, 3, 7, 6], [3, 0, 4, 7]].forEach(ix => addFace(ix.map(i => c8[i]), col, g, k, o, C));
  }
  function box(x0, y0, z0, x1, y1, z1, col, g, o) {
    solid([[x0, y0, z0], [x1, y0, z0], [x1, y0, z1], [x0, y0, z1], [x0, y1, z0], [x1, y1, z0], [x1, y1, z1], [x0, y1, z1]], col, g, o);
  }
  function beam(a, b, w, h, col, g, o) {
    const d = sub(b, a);
    let s = crs(d, [0, 1, 0]);
    if (Math.hypot(...s) < 1e-6) s = [1, 0, 0];
    s = nrm(s).map(v => v * w / 2);
    const u = nrm(crs(s, d)).map(v => v * h / 2);
    const P = (p, i, j) => [p[0] + s[0] * i + u[0] * j, p[1] + s[1] * i + u[1] * j, p[2] + s[2] * i + u[2] * j];
    solid([P(a, -1, -1), P(b, -1, -1), P(b, 1, -1), P(a, 1, -1), P(a, -1, 1), P(b, -1, 1), P(b, 1, 1), P(a, 1, 1)], col, g, o);
  }
  function prism(cx, cz, r, y0, y1, n, col, g, o = {}) {
    const k = cnt[g]++;
    const C = [cx, (y0 + y1) / 2, cz];
    const pt = (i, y) => [cx + Math.cos(i / n * 6.2832) * r, y, cz + Math.sin(i / n * 6.2832) * r];
    for (let i = 0; i < n; i++) addFace([pt(i, y0), pt(i + 1, y0), pt(i + 1, y1), pt(i, y1)], col, g, k, {
      ...o,
      e: false
    }, C);
    addFace(Array.from({
      length: n
    }, (_, i) => pt(i, y1)), col, g, k, o, C);
  }
  function decal(pts, col, g, o = {}) {
    const k = cnt[g]++;
    F.push({
      p: pts,
      n: [0, 1, 0],
      col,
      g,
      k,
      e: false,
      until: o.until || 99,
      decal: true,
      drop: 0
    });
  }
  const disc = (cx, cz, r, y, n = 14) => Array.from({
    length: n
  }, (_, i) => [cx + Math.cos(i / n * 6.2832) * r, y, cz + Math.sin(i / n * 6.2832) * r]);
  let seed = 7;
  const rnd = () => (seed = seed * 16807 % 2147483647) / 2147483647;
  const jit = (hex, a) => {
    const n = parseInt(hex.slice(1), 16);
    const f = 1 + (rnd() - .5) * a;
    return '#' + [n >> 16, n >> 8 & 255, n & 255].map(v => Math.max(0, Math.min(255, Math.round(v * f))).toString(16).padStart(2, '0')).join('');
  };
  const W = 16,
    D = 12,
    H = 3.2,
    X0 = -W / 2,
    X1 = W / 2,
    SX = 3.2,
    SW = 4.4,
    NS = 5,
    RISE = H / (NS + 1),
    RUN = .95;
  // house (group 0) — drawn in insertion order
  box(-15, 0, -13, 15, 1.2, 0, '#a8a29a', 0);
  box(-15, 1.2, -13, 15, 19, 0, '#e9ecea', 0);
  addFace([[-15, 19.1, 0], [-15, 25.4, -6], [-15, 19.1, -13]], '#e9ecea', 0, 0, {}, [0, 22, -6]);
  addFace([[15, 19.1, 0], [15, 19.1, -13], [15, 25.4, -6]], '#e9ecea', 0, 0, {}, [0, 22, -6]);
  addFace([[-15.9, 19.1, 1], [15.9, 19.1, 1], [15.9, 25.8, -6], [-15.9, 25.8, -6]], '#3a403e', 0, 0, {}, [0, 10, -6]);
  for (let y = 19.9; y < 25.6; y += .85) {
    const z = 1 - (y - 19.1) / 6.7 * 7;
    addFace([[-15.9, y, z], [15.9, y, z], [15.9, y + .06, z - .06], [-15.9, y + .06, z - .06]], '#2c3230', 0, 0, {
      e: false
    }, [0, 10, -6]);
  }
  for (let y = 1.9; y < 19; y += .7) box(-15, y, 0, 15, y + .07, .06, '#d3d9d6', 0, {
    e: false
  });
  box(-15.2, 1.2, -.05, -14.6, 19, .25, '#ffffff', 0);
  box(14.6, 1.2, -.05, 15.2, 19, .25, '#ffffff', 0);
  box(-15.6, 18.6, -.2, 15.6, 19.2, .7, '#ffffff', 0);
  const win = (cx, y0, w, h) => {
    box(cx - w / 2 - 1.1, y0 - .1, 0, cx - w / 2 - .45, y0 + h + .1, .16, '#2f4a3b', 0);
    box(cx + w / 2 + .45, y0 - .1, 0, cx + w / 2 + 1.1, y0 + h + .1, .16, '#2f4a3b', 0);
    box(cx - w / 2 - .38, y0 - .38, 0, cx + w / 2 + .38, y0 + h + .38, .2, '#ffffff', 0);
    box(cx - w / 2, y0, .2, cx + w / 2, y0 + h, .24, '#7da5bd', 0, {
      e: false
    });
    box(cx - .07, y0, .24, cx + .07, y0 + h, .3, '#ffffff', 0, {
      e: false
    });
    box(cx - w / 2, y0 + h / 2 - .07, .24, cx + w / 2, y0 + h / 2 + .07, .3, '#ffffff', 0, {
      e: false
    });
  };
  win(-9.5, 11.2, 3.2, 4.4);
  win(-2, 11.2, 3.2, 4.4);
  win(5.5, 11.2, 3.2, 4.4);
  win(11.6, 11.2, 2.4, 4.4);
  win(-10.5, 4.8, 3.2, 4.2);
  box(.4, H - .05, 0, 7.6, H + 7.2, .22, '#ffffff', 0);
  box(.8, H, .22, 7.2, H + 6.8, .27, '#6f97ae', 0, {
    e: false
  });
  box(3.93, H, .27, 4.07, H + 6.8, .32, '#ffffff', 0, {
    e: false
  });
  const cols = [X0 + .7, 0, X1 - .7],
    rows = [D * .5, D - .7];
  const FP = [];
  cols.forEach(x => rows.forEach(z => FP.push([x, z])));
  // 1 layout & dig
  FP.forEach(([x, z]) => decal(disc(x, z, .78, .02), '#3a2a1c', 1));
  [[X0 - 1, -.3], [X1 + 1, -.3], [X0 - 1, D + 1], [X1 + 1, D + 1]].forEach(([x, z]) => box(x - .08, 0, z - .08, x + .08, 1.4, z + .08, '#c79a5f', 1, {
    until: 3
  }));
  beam([X0 - 1, 1.15, D - .7], [X1 + 1, 1.15, D - .7], .05, .05, '#f26b21', 1, {
    until: 3,
    e: false,
    drop: 0
  });
  beam([X0 - .7, 1.15, -.3], [X0 - .7, 1.15, D + 1], .05, .05, '#f26b21', 1, {
    until: 3,
    e: false,
    drop: 0
  });
  beam([X1 + .7, 1.15, -.3], [X1 + .7, 1.15, D + 1], .05, .05, '#f26b21', 1, {
    until: 3,
    e: false,
    drop: 0
  });
  FP.forEach(([x, z]) => prism(x + 1.3, z + .5, .62, 0, .38, 9, '#7a5a3c', 1, {
    until: 1,
    e: false
  }));
  // 2 footings
  FP.forEach(([x, z]) => {
    prism(x, z, .64, -.05, .34, 14, '#c2bfb8', 2);
    box(x - .3, .34, z - .3, x + .3, .44, z + .3, '#6d7270', 2);
  });
  // 3 posts & beams
  FP.forEach(([x, z]) => box(x - .27, .44, z - .27, x + .27, H - 1.75, z + .27, '#b08a5e', 3));
  rows.forEach(z => {
    box(X0, H - 1.75, z - .32, X1, H - 1.0, z, '#9c7550', 3);
    box(X0, H - 1.75, z, X1, H - 1.0, z + .32, '#a37c56', 3);
  });
  // 4 ledger & joists
  box(X0, H - 1.0, 0, X1, H - .22, .25, '#9c7550', 4);
  box(X0, H - .2, 0, X1, H - .1, .4, '#596060', 4, {
    e: false
  });
  for (let x = X0 + .1; x < X1 - .2; x += 1.333) box(x, H - 1.0, .25, x + .16, H - .22, D - .2, jit('#b9905f', .1), 4);
  box(X1 - .18, H - 1.0, .25, X1, H - .22, D - .2, '#b9905f', 4);
  box(X0, H - 1.0, D - .2, X1, H - .22, D, '#a8804f', 4);
  for (let x = X0 + .26; x < X1 - 1; x += 1.333) box(x, H - .95, D / 2 - .08, x + 1.17, H - .3, D / 2 + .08, '#a8804f', 4, {
    e: false
  });
  // 5 decking
  const BC = '#8a5b3b',
    BF = '#4d3223';
  for (let z = .55; z < D - .6; z += .47) box(X0 + .55, H - .22, z, X1 - .55, H - .08, z + .42, jit(BC, .14), 5, {
    drop: 1.4
  });
  box(X0, H - .22, D - .55, X1, H - .06, D + .05, BF, 5);
  box(X0 - .05, H - .22, .05, X0 + .55, H - .06, D - .55, BF, 5);
  box(X1 - .55, H - .22, .05, X1 + .05, H - .06, D - .55, BF, 5);
  box(X0 - .06, H - 1.0, D, X1 + .06, H - .22, D + .08, BF, 5);
  box(X0 - .08, H - 1.0, 0, X0 - .01, H - .22, D, BF, 5);
  box(X1 + .01, H - 1.0, 0, X1 + .08, H - .22, D, BF, 5);
  // 6 stairs
  const S0 = D + .08,
    SL = S0 + NS * RUN;
  box(SX - SW / 2 - .6, -.05, SL - .1, SX + SW / 2 + .6, .16, SL + 2.2, '#c9c6bf', 6);
  [SX - SW / 2 + .12, SX, SX + SW / 2 - .12].forEach(x => beam([x, H - .75, S0 + .1], [x, .3, SL + .1], .16, .9, '#a37c56', 6));
  for (let i = 0; i < NS; i++) {
    const y = H - (i + 1) * RISE,
      z = S0 + i * RUN;
    box(SX - SW / 2, y - RISE + .03, z - .02, SX + SW / 2, y - .14, z + .06, BF, 6, {
      e: false
    });
    box(SX - SW / 2, y - .14, z, SX + SW / 2, y, z + RUN, jit(BC, .1), 6);
  }
  // 7 railing
  const RK = '#1b1e1d',
    RH = 3.0;
  const post = (x, z, y0, h) => box(x - .18, y0, z - .18, x + .18, y0 + h, z + .18, RK, 7);
  const run = (ax, az, bx, bz) => {
    const len = Math.hypot(bx - ax, bz - az);
    beam([ax, H + RH - .08, az], [bx, H + RH - .08, bz], .22, .14, RK, 7);
    beam([ax, H + .32, az], [bx, H + .32, bz], .12, .1, RK, 7, {
      e: false
    });
    const m = Math.floor(len / .4);
    for (let i = 1; i < m; i++) {
      const t = i / m,
        x = ax + (bx - ax) * t,
        z = az + (bz - az) * t;
      box(x - .035, H + .37, z - .035, x + .035, H + RH - .15, z + .035, RK, 7, {
        e: false,
        drop: 1
      });
    }
  };
  [[X0 + .25, .6], [X0 + .25, D / 2], [X0 + .25, D - .25], [-3, D - .25], [SX - SW / 2 - .1, D - .25], [SX + SW / 2 + .1, D - .25], [X1 - .25, D - .25], [X1 - .25, D / 2], [X1 - .25, .6]].forEach(([x, z]) => post(x, z, H - .08, RH + .2));
  run(X0 + .25, .6, X0 + .25, D / 2);
  run(X0 + .25, D / 2, X0 + .25, D - .25);
  run(X0 + .25, D - .25, -3, D - .25);
  run(-3, D - .25, SX - SW / 2 - .1, D - .25);
  run(SX + SW / 2 + .1, D - .25, X1 - .25, D - .25);
  run(X1 - .25, D - .25, X1 - .25, D / 2);
  run(X1 - .25, D / 2, X1 - .25, .6);
  [SX - SW / 2 - .1, SX + SW / 2 + .1].forEach(x => {
    const zb = SL + .1,
      yb = .16;
    post(x, zb, yb, RH + .5);
    beam([x, H + RH - .08, D - .25], [x, yb + RH + .25, zb], .2, .14, RK, 7);
    beam([x, H + .3, D - .05], [x, yb + .6, zb], .12, .1, RK, 7, {
      e: false
    });
    for (let i = 1; i < NS * 2; i++) {
      const t = i / (NS * 2),
        z = D - .15 + t * (zb - D + .15),
        yl = H + (yb + .3 - H) * t;
      box(x - .035, yl + .1, z - .035, x + .035, yl + RH - .2, z + .035, RK, 7, {
        e: false,
        drop: 1
      });
    }
  });
  F.forEach(f => {
    const c = cnt[f.g];
    f.k = c > 1 ? f.k / (c - 1) : 0;
  });
  // renderer
  const CAM = [{
    t: [1, 5, 5],
    d: 46,
    p: .36
  }, {
    t: [0, 1, 7.5],
    d: 36,
    p: .62
  }, {
    t: [0, 1, 7.5],
    d: 35,
    p: .6
  }, {
    t: [0, 1.5, 7],
    d: 36,
    p: .52
  }, {
    t: [0, 2, 7],
    d: 37,
    p: .52
  }, {
    t: [.5, 2.5, 7.5],
    d: 39,
    p: .5
  }, {
    t: [1.5, 2.5, 9],
    d: 41,
    p: .44
  }, {
    t: [1.5, 4, 7.5],
    d: 44,
    p: .38
  }];
  let shown = 0,
    prog = 1,
    yaw = .55,
    pitch = .36,
    dist = 44,
    tgt = [1, 5, 4],
    auto = true,
    drag = null,
    dpitch = 0,
    dyaw = .5;
  const L = nrm([.5, .85, .55]);
  let Wc = 0,
    Hc = 0;
  function resize() {
    const r = stage.getBoundingClientRect();
    const dpr = Math.min(devicePixelRatio || 1, 2);
    Wc = r.width;
    Hc = r.height;
    cv.width = Wc * dpr;
    cv.height = Hc * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  new ResizeObserver(resize).observe(stage);
  resize();
  const shade = (hex, k) => {
    const n = parseInt(hex.slice(1), 16);
    return `rgb(${Math.min(255, (n >> 16) * k) | 0},${Math.min(255, (n >> 8 & 255) * k) | 0},${Math.min(255, (n & 255) * k) | 0})`;
  };
  const poly = s => {
    ctx.beginPath();
    s.forEach((p, i) => i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]));
    ctx.closePath();
  };
  const TREES = [[-28, -12, 7.5], [25, -14, 8.5], [-36, -4, 6], [35, -6, 7], [-20, -24, 9], [14, -26, 8]];
  const SHRUBS = [[-13, 1.6], [-11.4, 1.4], [12.2, 1.5], [13.8, 1.7]];
  function render() {
    const cp = Math.cos(pitch);
    const eye = [tgt[0] + Math.sin(yaw) * cp * dist, tgt[1] + Math.sin(pitch) * dist, tgt[2] + Math.cos(yaw) * cp * dist];
    const f = nrm(sub(tgt, eye)),
      r = nrm([-f[2], 0, f[0]]),
      u = crs(r, f);
    const mob = Wc < 700,
      fl = Math.min(Wc * (mob ? 1.25 : 1.05), Hc * 1.45),
      cx = Wc * (mob ? .5 : .57),
      cy = Hc * (mob ? .57 : .55);
    const prj = p => {
      const v = sub(p, eye);
      const z = dot(v, f);
      return [cx + dot(v, r) * fl / z, cy - dot(v, u) * fl / z, z];
    };
    const ok = s => s.every(p => p[2] > .6);
    ctx.clearRect(0, 0, Wc, Hc);
    const hz = prj([eye[0] - Math.sin(yaw) * 4000, 0, eye[2] - Math.cos(yaw) * 4000])[1];
    ctx.fillStyle = '#9cc28a';
    ctx.beginPath();
    ctx.moveTo(0, hz + 1);
    for (let x = 0; x <= Wc + 20; x += Wc / 18) ctx.lineTo(x, hz - 10 - 12 * Math.abs(Math.sin(x * .013 + 1)));
    ctx.lineTo(Wc, hz + 1);
    ctx.fill();
    const gg = ctx.createLinearGradient(0, hz, 0, Hc);
    gg.addColorStop(0, '#a9cf8f');
    gg.addColorStop(1, '#7fb466');
    ctx.fillStyle = gg;
    ctx.fillRect(0, hz, Wc, Hc - hz);
    for (let z = -40; z < eye[2] - 3; z += 3) {
      if ((z + 40) / 3 % 2) continue;
      for (let x = -60; x < 60; x += 12) {
        const s = [[x, 0, z], [x + 12, 0, z], [x + 12, 0, z + 3], [x, 0, z + 3]].map(prj);
        if (!ok(s)) continue;
        ctx.fillStyle = 'rgba(255,255,255,.07)';
        poly(s);
        ctx.fill();
      }
    }
    let s = [[-15, 0, 0], [15, 0, 0], [15, 0, 1.8], [-15, 0, 1.8]].map(prj);
    if (ok(s)) {
      ctx.fillStyle = 'rgba(30,50,30,.16)';
      poly(s);
      ctx.fill();
    }
    if (shown >= 1) {
      const a = shown >= 5 ? .5 : 1;
      s = [[X0 - 1.2, .005, .2], [X1 + 1.2, .005, .2], [X1 + 1.2, .005, D + 1.2], [X0 - 1.2, .005, D + 1.2]].map(prj);
      if (ok(s)) {
        ctx.fillStyle = `rgba(150,118,82,${.55 * a})`;
        poly(s);
        ctx.fill();
      }
    }
    const tree = (x, z, h) => {
      const b = prj([x, 0, z]),
        t = prj([x, h * 2.1, z]);
      if (b[2] < 1) return;
      const rr = Math.abs(t[1] - b[1]) * .42;
      ctx.fillStyle = 'rgba(0,0,0,.09)';
      ctx.beginPath();
      ctx.ellipse(b[0] + rr * .3, b[1], rr * 1.2, rr * .24, 0, 0, 7);
      ctx.fill();
      ctx.fillStyle = '#6d5a45';
      ctx.fillRect(b[0] - rr * .07, t[1], rr * .14, b[1] - t[1]);
      [['#477f47', 0, 0, 1], ['#55934f', -.35, -.3, .62], ['#3f7442', .4, .15, .6]].forEach(([c, dx, dy, k]) => {
        ctx.fillStyle = c;
        ctx.beginPath();
        ctx.arc(t[0] + rr * dx, t[1] + rr * dy, rr * k, 0, 7);
        ctx.fill();
      });
    };
    TREES.forEach(t => tree(...t));
    if (shown >= 5) {
      s = [[X0 + .8, .01, 1.6], [X1 + .8, .01, 1.6], [X1 + .8, .01, D + 1.6], [X0 + .8, .01, D + 1.6]].map(prj);
      if (ok(s)) {
        ctx.fillStyle = 'rgba(20,35,20,.22)';
        poly(s);
        ctx.fill();
      }
    }
    const vis = [];
    for (const q of F) {
      if (q.g > shown || shown > q.until) continue;
      let e = 1;
      if (q.g === shown && q.g > 0) e = Math.max(0, Math.min(1, (prog - q.k * .72) / .28));
      if (e <= 0) continue;
      const dy = (1 - e) * (1 - e) * q.drop;
      let c0 = 0,
        c1 = 0,
        c2 = 0;
      for (const p of q.p) {
        c0 += p[0];
        c1 += p[1];
        c2 += p[2];
      }
      const n = q.p.length;
      c0 /= n;
      c1 = c1 / n + dy;
      c2 /= n;
      const vx = eye[0] - c0,
        vy = eye[1] - c1,
        vz = eye[2] - c2;
      if (!q.decal && q.n[0] * vx + q.n[1] * vy + q.n[2] * vz <= 0) continue;
      vis.push([q, dy, e, vx * vx + vy * vy + vz * vz]);
    }
    vis.sort((a, b) => a[0].decal !== b[0].decal ? a[0].decal ? -1 : 1 : a[0].g !== b[0].g ? a[0].g - b[0].g : a[0].g === 0 ? 0 : b[3] - a[3]);
    let shr = false;
    const drawShr = () => {
      shr = true;
      SHRUBS.forEach(([x, z]) => {
        const b = prj([x, 0, z]);
        if (b[2] < 1) return;
        const t = prj([x, 1.6, z]);
        const rr = Math.abs(t[1] - b[1]) * .75;
        ctx.fillStyle = '#3f7a45';
        ctx.beginPath();
        ctx.ellipse(b[0], b[1] - rr * .55, rr * 1.1, rr * .75, 0, 0, 7);
        ctx.fill();
        ctx.fillStyle = '#4f8f4f';
        ctx.beginPath();
        ctx.ellipse(b[0] - rr * .3, b[1] - rr * .8, rr * .6, rr * .45, 0, 0, 7);
        ctx.fill();
      });
    };
    for (const [q, dy, e] of vis) {
      if (!shr && !q.decal && q.g > 0) drawShr();
      const sp = q.p.map(p => prj([p[0], p[1] + dy, p[2]]));
      if (!ok(sp)) continue;
      const lam = q.decal ? 1 : .6 + .4 * Math.max(0, dot(q.n, L)) + (q.n[1] > .5 ? .05 : 0);
      ctx.globalAlpha = e < 1 ? .25 + .75 * e : 1;
      ctx.fillStyle = shade(q.col, lam);
      poly(sp);
      ctx.fill();
      if (q.e) {
        ctx.strokeStyle = 'rgba(18,20,19,.28)';
        ctx.lineWidth = .7;
        ctx.stroke();
      }
    }
    ctx.globalAlpha = 1;
    if (!shr) drawShr();
  }
  const btns = $$('#sbar .st'),
    pb = $('#playB');
  function setStep(n, instant) {
    const prev = shown;
    shown = n;
    prog = instant || n <= prev ? 1 : 0;
    btns.forEach((b, i) => {
      b.classList.toggle('on', i === n - 1);
      b.classList.toggle('done', i < n - 1);
    });
    $('#capS').textContent = `Step ${n} of ${NST}`;
    $('#capT').textContent = n ? STEPS[n - 1][0] : 'Your backyard today';
    $('#capP').textContent = n ? STEPS[n - 1][1] : 'Press play to watch your deck go up, step by step.';
    $('#capB').style.width = n / NST * 100 + '%';
  }
  let playT = null;
  const stopPlay = () => {
    clearInterval(playT);
    playT = null;
    pb.innerHTML = '▶<span> Play</span>';
  };
  btns.forEach(b => b.addEventListener('click', () => {
    stopPlay();
    const n = +b.dataset.s;
    if (n > shown + 1) setStep(n - 1, true);
    setStep(n);
  }));
  pb.onclick = () => {
    if (playT) {
      stopPlay();
      return;
    }
    if (shown >= NST) setStep(0, true);
    pb.innerHTML = '❚❚<span> Pause</span>';
    const tick = () => {
      if (shown >= NST) {
        stopPlay();
        return;
      }
      setStep(shown + 1);
      if (shown >= NST) stopPlay();
    };
    tick();
    playT = setInterval(tick, 2700);
  };
  stage.addEventListener('pointerdown', e => {
    if (e.target.closest('button')) return;
    drag = {
      x: e.clientX,
      y: e.clientY,
      yaw: yaw,
      pitch: dpitch
    };
    auto = false;
    stage.setPointerCapture(e.pointerId);
  });
  stage.addEventListener('pointermove', e => {
    if (!drag) return;
    dyaw = Math.max(-1.3, Math.min(1.3, drag.yaw - (e.clientX - drag.x) * .006));
    dpitch = Math.max(-.25, Math.min(.4, drag.pitch + (e.clientY - drag.y) * .004));
  });
  const up = () => drag = null;
  stage.addEventListener('pointerup', up);
  stage.addEventListener('pointercancel', up);
  let visS = true,
    started = false,
    last = performance.now();
  new IntersectionObserver(es => {
    visS = es[0].isIntersecting;
    if (visS && !started) {
      started = true;
      setTimeout(() => {
        if (shown === 0 && !playT) pb.click();
      }, 700);
    }
  }, {
    threshold: .35
  }).observe(stage);
  (function loop(t) {
    requestAnimationFrame(loop);
    const dt = Math.min(.05, Math.max(0, (t - last) / 1000));
    last = t;
    if (!visS) return;
    if (prog < 1) prog = Math.min(1, prog + dt / 1.9);
    const c = CAM[shown],
      mob = Wc < 700,
      k = 1 - Math.pow(.04, dt);
    tgt = tgt.map((v, i) => v + (c.t[i] - v) * k);
    dist += (c.d * (mob ? 1.12 : 1) - dist) * k;
    const ty = auto ? .42 * Math.sin(t / 8000) + .25 : dyaw;
    yaw += (ty - yaw) * (drag ? .6 : k);
    pitch += (c.p + dpitch - pitch) * k;
    render();
  })(last);
  window.__deck = {
    snap(n, y, p) {
      stopPlay();
      setStep(n, true);
      auto = false;
      dyaw = y;
      yaw = y;
      const c = CAM[n];
      tgt = c.t.slice();
      dist = c.d * (Wc < 700 ? 1.12 : 1);
      dpitch = p || 0;
      pitch = c.p + dpitch;
      render();
    }
  };
  return () => {
    active = false;
    disposers.forEach(fn => fn());
    root.querySelectorAll("video").forEach(v => v.pause());
    delete window.__deck;
  };
}
