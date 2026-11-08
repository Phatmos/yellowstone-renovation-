import React, { useEffect, useRef, useState } from 'react';
import { navigate } from 'gatsby';
import LocalKyEstimate from './LocalKyEstimate';
import reviewData from '../data/customer-reviews.json';
import { HEADLINES, headlineVariant, KY_EMAIL, KY_PHONE, kyTrack } from './localKyLead';

const PHONE_HREF = 'tel:+18597657267';
const photos = [
  { file: 'project-1', full: '/local-deck/img/gallery/full/woodland-composite-deck.webp', title: 'Room for everyday living', place: 'Central Kentucky', alt: 'Finished brown composite deck with matching railing beside a brick home' },
  { file: 'project-2', full: '/local-deck/img/gallery/full/photo_19_2026-11-06_09-32-37.webp', title: 'A backyard made for gathering', place: 'Central Kentucky', alt: 'Completed composite deck with black railing and stairs leading to a landscaped backyard' },
  { file: 'project-3', full: '/local-deck/img/gallery/full/photo_44_2026-10-23_13-33-17.webp', title: 'Clean lines. A fresh start.', place: 'Central Kentucky', alt: 'Gray composite deck with black aluminum railing and wide backyard steps' },
  { file: 'project-4', full: '/local-deck/img/gallery/full/img_1020.webp', title: 'The details that make it yours', place: 'Central Kentucky', alt: 'Composite deck with a picture frame border and white railing' },
  { file: 'project-5', full: '/local-deck/img/gallery/full/photo_27_2026-10-23_13-33-17.webp', title: 'More space to enjoy outside', place: 'Central Kentucky', alt: 'Elevated deck with white railing above a finished patio' },
  { file: 'project-6', full: '/local-deck/img/g/d39.webp', title: 'Space for the whole family', place: 'Lexington, KY', alt: 'Multi-level deck and outdoor living space in Lexington, Kentucky' },
];
const selectedReviews = ['574642226272010244', '572936596854513664', 'bbb-Chris M'].map(id => reviewData.reviews.find(review => review.id === id));
const reviewPhotos = ['review-carmella', 'review-margarita'];
const highlights = ['Permits, scheduling & communication', 'A respectful crew & a sturdy deck', 'A project manager who made it easy'];

export function KyCall({ placement = 'page', children = KY_PHONE }) {
  return <a href={PHONE_HREF} className="ky-call" onClick={() => kyTrack('phone_click', { placement })}>{children}</a>;
}
export function KyEstimateLink({ placement, className = '' }) {
  return <a className={`ky-button ${className}`} href="#estimate" data-ky-cta={placement} onClick={() => kyTrack('estimate_cta_click', { placement })}>Get My Free Estimate<span aria-hidden="true">→</span></a>;
}
export function KyClickVideo({ youtube = false, title, poster, source, portrait = false }) {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);
  const media = useRef(null);
  useEffect(() => {
    if (!open || !media.current || typeof IntersectionObserver === 'undefined') return undefined;
    const pause = () => {
      const video = media.current?.querySelector('video');
      video?.pause();
      media.current?.querySelector('iframe')?.contentWindow?.postMessage(JSON.stringify({ event: 'command', func: 'pauseVideo', args: [] }), 'https://www.youtube.com');
    };
    const observer = new IntersectionObserver(entries => { if (!entries[0].isIntersecting) pause(); }, { threshold: .1 });
    observer.observe(media.current);
    const onVisibility = () => { if (document.hidden) pause(); };
    document.addEventListener('visibilitychange', onVisibility);
    return () => { observer.disconnect(); document.removeEventListener('visibilitychange', onVisibility); pause(); };
  }, [open]);
  return <div className={`ky-video ${portrait ? 'ky-video-portrait' : ''}`} ref={media}>
    {!open ? <button type="button" className="ky-video-start" aria-label={`Play ${title}`} onClick={() => { setOpen(true); setError(false); kyTrack('video_start', { video: youtube ? 'intro' : 'homeowner-story' }); }}>
      <img src={poster} alt="" loading="lazy" decoding="async" width={portrait ? 707 : 1920} height={portrait ? 1536 : 1080} />
      <span className="ky-video-play" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="m8 5 11 7-11 7z" /></svg></span><span className="ky-video-label">{title}<small>Tap to watch with sound</small></span>
    </button> : youtube ? <iframe title={title} src={`https://www.youtube.com/embed/9XcXhPwMEYE?autoplay=1&controls=1&playsinline=1&rel=0&enablejsapi=1&origin=${encodeURIComponent(typeof window !== 'undefined' ? window.location.origin : '')}`} allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" /> : <video src={source} poster={poster} controls autoPlay playsInline preload="metadata" aria-label={title} onError={() => setError(true)} />}
    {error && <div className="ky-video-error" role="status"><p>The video couldn’t load.</p><button type="button" onClick={() => setOpen(false)}>Try again</button></div>}
  </div>;
}

function ProjectPhotos() {
  const [selected, setSelected] = useState(null);
  const closeButton = useRef(null);
  const returnFocus = useRef(null);
  const overlay = useRef(null);
  const isOpen = selected !== null;
  useEffect(() => {
    if (!isOpen) return undefined;
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButton.current.focus();
    const key = event => {
      if (event.key === 'Escape') setSelected(null);
      if (['ArrowLeft','ArrowRight'].includes(event.key)) { event.preventDefault(); setSelected(index => (index + (event.key === 'ArrowRight' ? 1 : -1) + photos.length) % photos.length); }
      if (event.key === 'Tab') {
        const buttons = [...overlay.current.querySelectorAll('button')];
        event.preventDefault(); buttons[(buttons.indexOf(document.activeElement) + (event.shiftKey ? -1 : 1) + buttons.length) % buttons.length].focus();
      }
    };
    document.addEventListener('keydown', key);
    return () => { document.body.style.overflow = oldOverflow; document.removeEventListener('keydown', key); returnFocus.current?.focus({ preventScroll: true }); };
  }, [isOpen]);
  return <>
    <div className="ky-photo-grid">{photos.map((photo, index) => <button key={photo.file} type="button" onClick={event => { returnFocus.current = event.currentTarget; setSelected(index); }} aria-label={`View ${photo.title}`}>
      <img src={`/local-ky/img/${photo.file}.webp`} alt={photo.alt} loading="lazy" decoding="async" width={800} height={600} /><span><small>{photo.place}</small><strong>{photo.title}</strong><i aria-hidden="true">↗</i></span>
    </button>)}</div>
    {isOpen && <div className="ky-lightbox" ref={overlay} role="dialog" aria-modal="true" aria-label="Project photo" onClick={event => { if (event.target === event.currentTarget) setSelected(null); }}>
      <img src={photos[selected].full} alt={photos[selected].alt} /><p>{selected + 1} / {photos.length} · {photos[selected].title}</p>
      <button type="button" className="ky-lightbox-close" ref={closeButton} aria-label="Close photo" onClick={() => setSelected(null)}>×</button>
      <button type="button" className="ky-lightbox-prev" aria-label="Previous photo" onClick={() => setSelected(index => (index + photos.length - 1) % photos.length)}>‹</button>
      <button type="button" className="ky-lightbox-next" aria-label="Next photo" onClick={() => setSelected(index => (index + 1) % photos.length)}>›</button>
    </div>}
  </>;
}

function Comparison() {
  const [position, setPosition] = useState(50);
  return <div className="ky-comparison-layout">
    <div className="ky-comparison" style={{ '--position': `${position}%` }}>
      <img src="/local-ky/img/before.webp" alt="Before: the original weathered wood deck and stairs" loading="lazy" width={1000} height={1333} />
      <img className="ky-comparison-after" src="/local-ky/img/after.webp" alt="After: the same home with a rebuilt deck, stairs, dark railing and lattice" loading="lazy" width={1000} height={1333} />
      <span className="ky-comparison-tag ky-before-tag">Before</span><span className="ky-comparison-tag ky-after-tag">After</span><span className="ky-comparison-handle" aria-hidden="true">↔</span>
      <input type="range" min={0} max={100} value={position} onChange={event => setPosition(Number(event.target.value))} aria-label="Reveal the before and after deck photos" aria-valuetext={`${position}% before, ${100-position}% after`} />
    </div>
    <div className="ky-comparison-copy"><span className="ky-eyebrow">One home. A fresh start.</span><h3>From weathered wood to a backyard worth coming home to.</h3><p>New decking, a finished stairway and thoughtful details. Move the slider to see this real Yellowstone transformation.</p><KyEstimateLink placement="before-after" /></div>
  </div>;
}

const faqs = [
  ['Do you offer financing?', 'Ask us about the current financing options during your free visit. We’ll explain what is available and any terms before you decide.'],
  ['How much does a new deck cost?', 'Your price depends on the size, height, materials and condition of the existing structure. We measure your space, talk through the options and give you a clear written estimate at your free visit.'],
  ['What happens during the free visit?', 'We listen to your ideas, measure the space, look at access and the existing structure, and show you a 3D design with an estimate. There’s no pressure to commit.'],
  ['Do I need to be home while you work?', 'We’ll discuss access, work hours and any times you need to be available before construction starts. You’ll have one point of contact throughout the project.'],
  ['How long will my deck take?', 'It depends on the design, materials, permits and site conditions. Your project plan includes a realistic schedule before we start, and we keep you informed along the way.'],
  ['Do you handle permits and inspections?', 'Yes. Our team coordinates the permits and inspections your project needs, so you don’t have to figure out the process alone.'],
  ['Can you replace, repair or resurface my deck?', 'Yes. We inspect the existing structure and explain whether a repair, resurface or full replacement makes sense. We work with composite, pressure-treated wood and cedar.'],
  ['What does the 36-month warranty cover?', 'We back our workmanship for 36 months. Your written project agreement explains the coverage; product warranties vary by the materials you choose.'],
];

export default function LocalKyLanding() {
  const [variant, setVariant] = useState('family');
  useEffect(() => {
    const next = headlineVariant(window.location.search);
    setVariant(next);
    kyTrack('landing_view', { hero_variant: next });
  }, []);
  return <div className="ky-page">
    <a className="ky-skip" href="#ky-main">Skip to content</a>
    <header className="ky-header"><div className="ky-wrap"><a href="#ky-main" aria-label="Yellowstone Renovation"><img src="/local-deck/img/logo.webp" alt="Yellowstone Renovation" width={640} height={131} /></a><div><KyCall placement="header" /><KyEstimateLink placement="header" /></div></div></header>
    <main id="ky-main">
      <section className="ky-hero"><div className="ky-wrap ky-hero-grid"><div>
        <span className="ky-eyebrow">Family-owned in Lexington · Serving Central KY</span><p className="ky-rating"><span aria-hidden="true">★★★★★</span><strong>4.9</strong> · 64+ reviews</p>
        <h1>{HEADLINES[variant]}</h1><p className="ky-hero-intro">We come to your home, show you your deck in 3D and give you a clear price on the spot. Permits handled. 36-month workmanship warranty.</p>
        <KyEstimateLink placement="hero" /><p className="ky-reassurance">or <KyCall placement="hero" /> · No pressure, no obligation.</p>
        <ul className="ky-hero-badges"><li>Free on-site 3D design</li><li>One clear written price</li><li>Our own local crew</li></ul>
      </div><figure className="ky-hero-photo"><img src="/local-ky/img/hero.webp" srcSet="/local-ky/img/hero-small.webp 700w, /local-ky/img/hero-medium.webp 1000w, /local-ky/img/hero.webp 1400w" sizes="(max-width: 900px) calc(100vw - 36px), 50vw" alt="A real Yellowstone Renovation elevated composite deck with stairs and a covered patio" width={1400} height={1050} fetchpriority="high" /><figcaption><span aria-hidden="true">↗</span> A real Yellowstone backyard. Yours could be next.</figcaption></figure></div></section>
      <section className="ky-platforms" aria-label="Homeowner review platforms"><div className="ky-wrap"><p>Built for neighbors.<br /><strong>Backed by their reviews.</strong></p><div>{[['google','4.9'],['angi','5.0'],['facebook','5.0'],['houzz','5.0']].map(([name, score]) => <a key={name} href="#ky-reviews" aria-label={`${name} homeowner reviews`}><img src={`/local-deck/img/platforms/${name}.svg`} alt={name} width={90} height={30} /><span>{score} <i aria-hidden="true">★</i></span></a>)}</div></div></section>
      <section className="ky-section ky-owners"><div className="ky-wrap ky-owners-grid"><div><span className="ky-eyebrow">A local family. Your own team.</span><h2>Hi, we’re<br /><span>Andrii and Peter.</span></h2><p>Andrii focuses on the build. Peter helps turn your ideas into a clear plan. You’ll know who to call, what your project costs and who’s working on your home.</p><ul className="ky-promises"><li><strong>The price, in writing.</strong> Clear scope before we start.</li><li><strong>A schedule you can follow.</strong> Updates from your project manager.</li><li><strong>Care for your home.</strong> A respectful crew and a clean job site.</li></ul><KyEstimateLink placement="owners" /></div><div className="ky-owner-media"><figure><img src="/local-ky/img/owners.webp" alt="Andrii and Peter, the owners of Yellowstone Renovation" width={1000} height={958} loading="lazy" /><figcaption>Andrii &amp; Peter<br /><span>Owners, Yellowstone Renovation</span></figcaption></figure><KyClickVideo youtube portrait title="Before you build your deck" poster="/local-deck/img/hero-intro-sharp.jpg" /></div></div></section>
      <section className="ky-section ky-reviews" id="ky-reviews"><div className="ky-wrap"><div className="ky-section-heading"><span className="ky-eyebrow">Real homeowners. Real experiences.</span><h2>What your neighbors say.</h2><p>A clear process, a respectful team and a backyard they’re happy to come home to.</p></div><div className="ky-review-grid">{selectedReviews.map((review, index) => <article className="ky-review" key={review.id}><div className="ky-review-stars" aria-label="5 out of 5 stars">★★★★★</div><h3>{highlights[index]}</h3><p>{review.summary}</p><small className="ky-review-summary-label">Review summary</small><div className="ky-review-author"><strong>{review.name}</strong><span>{review.date} · {review.platform}</span><a href={review.url} target="_blank" rel="noopener noreferrer">Read original review ↗</a></div>{reviewPhotos[index] && <figure><img src={`/local-ky/img/${reviewPhotos[index]}.webp`} alt={`Deck photo shared with ${review.name}’s review`} width={800} height={600} loading="lazy" /><figcaption>Photo shared with this review</figcaption></figure>}</article>)}</div><div className="ky-homeowner-story"><div><span className="ky-eyebrow">In her own words</span><h3>A finished deck.<br />A homeowner’s perspective.</h3><p>Hear about her Yellowstone experience and see the white-rail deck she enjoys today.</p></div><KyClickVideo title="A Lexington homeowner’s story" poster="/local-deck/img/story-lexington-hd.webp" source="/local-deck/video/story-lexington-hd.mp4" /></div><div className="ky-centered"><KyEstimateLink placement="reviews" /></div></div></section>
      <section className="ky-section ky-projects" id="ky-projects"><div className="ky-wrap"><div className="ky-section-heading"><span className="ky-eyebrow">Before, after & the details in between</span><h2>From tired to<br /><span>“why didn’t we do this sooner?”</span></h2><p>Real photos from our projects across Central Kentucky.</p></div><Comparison /><ProjectPhotos /></div></section>
      <section className="ky-section ky-why"><div className="ky-wrap"><div className="ky-section-heading"><span className="ky-eyebrow">The Yellowstone approach</span><h2>No surprises.<br />That’s the whole point.</h2></div><div className="ky-why-grid">{[['01','See it before you decide.','A 3D design and a clear estimate at your home.'],['02','One written price.','The scope and materials explained, with changes discussed before extra work.'],['03','One person to call.','A project manager from your first visit to the final walkthrough.'],['04','Our own local crew.','People who take pride in the work and respect your home.']].map(([number,title,text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div><div className="ky-compare-table"><div><span>What to look for</span><span>Your Yellowstone plan</span></div>{[['A quote that leaves you guessing','A clear written scope and price'],['Updates you have to chase','One project manager to contact'],['Permits left for you to figure out','Permits and inspections coordinated'],['A handoff with no walkthrough','A final walkthrough and 36-month workmanship warranty']].map(([question,answer]) => <div key={question}><span>{question}</span><strong><i aria-hidden="true">✓</i>{answer}</strong></div>)}</div><div className="ky-centered"><KyEstimateLink placement="why" /></div></div></section>
      <section className="ky-section ky-process"><div className="ky-wrap"><div className="ky-section-heading"><span className="ky-eyebrow">Your new deck, in three steps</span><h2>Easy to start.<br />Clear all the way through.</h2></div><ol>{[['Book your free visit.','Tell us your ZIP and what you have in mind. We’ll call to find a time that works.'],['See your deck. Know your price.','We measure, explore the options and build your 3D design with a clear estimate.'],['We take care of the build.','Permits, construction and the final walkthrough, with your project manager keeping you informed.']].map(([title,text],index) => <li key={title}><span>{index+1}</span><h3>{title}</h3><p>{text}</p></li>)}</ol><div className="ky-centered"><KyEstimateLink placement="process" /></div></div></section>
      <section className="ky-section ky-offer" id="estimate"><div className="ky-wrap ky-offer-grid"><div><span className="ky-eyebrow">Your first step is on us</span><h2>See the possibilities.<br /><span>Then make your decision.</span></h2><p>Your free visit brings the design, material options and estimate to your home.</p><ul className="ky-offer-list"><li>Free on-site 3D design</li><li>A clear price on the spot</li><li>36-month workmanship warranty</li><li>No pressure. No obligation.</li></ul><div className="ky-availability"><strong>90 free design visits each month.</strong><span>Across Lexington and Central Kentucky. We’ll confirm a time when we call.</span></div><p className="ky-offer-call">Prefer to talk? <KyCall placement="form" /></p></div><LocalKyEstimate variant={variant} onSuccess={receipt => navigate('/local-ky/thank-you/', { state: { receipt } })} /></div></section>
      <section className="ky-section ky-faq"><div className="ky-wrap ky-faq-grid"><div><span className="ky-eyebrow">Good questions. Straight answers.</span><h2>A little clarity<br />before we start.</h2><p>Still have a question?<br /><KyCall placement="faq" /></p></div><div>{faqs.map(([question,answer],index) => <details key={question} open={index === 0 ? true : undefined}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></div></section>
      <section className="ky-final"><div className="ky-wrap"><div><span className="ky-eyebrow">Let’s make room for better days.</span><h2>Ready to see<br />your new deck?</h2><p>We’ll call within one business day. Your free visit is the first step.</p><KyEstimateLink placement="final" /><p className="ky-reassurance">or <KyCall placement="final" /></p></div><img src="/local-ky/img/hero.webp" srcSet="/local-ky/img/hero-small.webp 700w, /local-ky/img/hero-medium.webp 1000w, /local-ky/img/hero.webp 1400w" sizes="(max-width: 900px) calc(100vw - 36px), 50vw" alt="A completed Yellowstone Renovation deck with an outdoor living space below" width={1400} height={1050} loading="lazy" /></div></section>
    </main>
    <footer className="ky-footer"><div className="ky-wrap"><div><img src="/local-deck/img/logo.webp" alt="Yellowstone Renovation" width={640} height={131} loading="lazy" /><p>Family-owned in Lexington, KY.<br />Building across Central Kentucky.</p></div><div><strong>Talk with your local team.</strong><KyCall placement="footer" /><a href={`mailto:${KY_EMAIL}`}>{KY_EMAIL}</a></div><div className="ky-footer-bottom"><span>© {new Date().getFullYear()} Yellowstone Renovation</span><div><a href="/privacy-policy/">Privacy policy</a><a href="/terms-of-service/">Terms</a></div></div></div></footer>
    <aside className="ky-mobile-bar" aria-label="Contact Yellowstone"><KyCall placement="mobile-bar">Call</KyCall><KyEstimateLink placement="mobile-bar" /></aside>
  </div>;
}
