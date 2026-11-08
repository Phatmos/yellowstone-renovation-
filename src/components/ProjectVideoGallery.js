import React, { useEffect, useRef, useState } from 'react';
import clips from '../data/localDeckVideos.json';
import { JobSiteClip } from './LocalDeckMarkup';

// The same muted, scroll-driven footage used on /local/. Never load hidden clips.
export default function ProjectVideoGallery({ heading = 'From framing to the finished deck.', description = 'Walk through real Yellowstone projects, including work in progress.' }) {
  const root = useRef(null);
  const [visible, setVisible] = useState(6);
  useEffect(() => {
    const container = root.current;
    const page = container.closest('.local-deck-page');
    const videos = [...container.querySelectorAll('video[data-jobsite]')];
    const listeners = [];
    let selected = new Set(), frame = 0;
    const listen = (target, event, handler, options) => {
      target.addEventListener(event, handler, options);
      listeners.push(() => target.removeEventListener(event, handler, options));
    };
    const load = video => { if (!video.getAttribute('src')) video.src = video.dataset.src; };
    const sync = () => {
      const candidates = [];
      if (!document.hidden && !page.matches('.has-modal,.has-gallery,.has-menu') && !document.fullscreenElement) {
        const top = page.querySelector('.topwrap')?.getBoundingClientRect().bottom || 0;
        videos.forEach(video => {
          if (video.closest('[hidden]')) return;
          const r = video.getBoundingClientRect();
          if (!r.width || !r.height) return;
          const height = Math.max(0, Math.min(r.bottom, window.innerHeight) - Math.max(r.top, top));
          const width = Math.max(0, Math.min(r.right, window.innerWidth) - Math.max(r.left, 0));
          const ratio = height * width / (r.height * r.width);
          if (ratio >= .1) candidates.push({ video, score: ratio - Math.abs((r.top + r.bottom) / 2 - (top + window.innerHeight) / 2) / window.innerHeight * .001 });
        });
      }
      candidates.sort((a, b) => b.score - a.score);
      selected = new Set((window.innerWidth > 980 ? candidates : candidates.slice(0, 1)).map(item => item.video));
      videos.forEach(video => {
        video.muted = video.defaultMuted = true;
        video.controls = false;
        video.playsInline = true;
        if (selected.has(video)) { load(video); if (video.paused) video.play().catch(() => {}); }
        else if (!video.paused) video.pause();
      });
    };
    const queue = () => { if (!frame) frame = window.requestAnimationFrame(() => { frame = 0; sync(); }); };
    const observer = new IntersectionObserver(entries => {
      entries.forEach(({ target, isIntersecting }) => { if (isIntersecting && !target.closest('[hidden]')) load(target); });
      sync();
    }, { rootMargin: '160px 0px', threshold: [0, .1, .5, 1] });
    const overlay = new MutationObserver(sync);
    overlay.observe(page, { attributes: true, attributeFilter: ['class'] });
    videos.forEach(video => {
      observer.observe(video);
      const card = video.closest('.jobsite-clip');
      listen(card, 'pointerenter', sync);
      listen(video, 'play', () => { video.muted = true; video.controls = false; if (!selected.has(video)) video.pause(); });
      listen(video, 'playing', () => { if (selected.has(video)) card.classList.add('video-playing'); else video.pause(); });
      ['pause', 'waiting', 'error', 'emptied'].forEach(event => listen(video, event, () => card.classList.remove('video-playing')));
      ['canplay', 'loadeddata'].forEach(event => listen(video, event, sync));
    });
    listen(window, 'scroll', queue, { passive: true });
    listen(window, 'resize', queue);
    listen(window, 'pageshow', sync);
    listen(document, 'visibilitychange', sync);
    listen(document, 'fullscreenchange', sync);
    listen(page, 'touchend', sync, { passive: true });
    sync();
    return () => { listeners.forEach(dispose => dispose()); observer.disconnect(); overlay.disconnect(); if (frame) window.cancelAnimationFrame(frame); videos.forEach(video => video.pause()); };
  }, [visible]);
  return <section className="jobsite-section" id="job-sites" ref={root} aria-labelledby="project-videos-title"><div className="wrap">
    <div className="head c"><span className="kick g">On our job sites</span><h2 className="h2" id="project-videos-title">{heading}</h2><p className="lead">{description}</p></div>
    <div className="jobsite-grid">{clips.map((clip, index) => <JobSiteClip key={clip.file} {...clip} more={index >= visible} />)}</div>
    <div className="jobsite-more"><p aria-live="polite">Showing {Math.min(visible, clips.length)} of {clips.length} project videos</p>{visible < clips.length && <button className="btn btn-w btn-lg" type="button" onClick={() => setVisible(count => Math.min(count + 3, clips.length))}>See more videos</button>}</div>
  </div></section>;
}
