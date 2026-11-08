import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import DeckLocalIntake from '../components/DeckLocalIntake';
import { intakeTrack } from '../components/deckIntakeState';
import reviewData from '../data/customer-reviews.json';
import '../styles/deck-local-ky.css';

const phone = 'tel:+18597657267';
const stories = [
  { id: 'team', eyebrow: '01 / Meet your builders', title: 'Before we build, meet your team.', description: 'A quick hello from Yellowstone Renovation, and a look at how we bring your deck to life.', poster: '/local-deck/img/hero-intro-sharp.jpg', youtube: true },
  { id: 'perryville', eyebrow: '02 / A homeowner’s experience', title: 'Their backyard. Their story.', description: 'Hear about the project directly from a Yellowstone homeowner.', poster: '/local-deck/img/story-perryville-hd.webp', source: '/local-deck/video/story-perryville-hd.mp4' },
  { id: 'lexington', eyebrow: '03 / A Lexington homeowner', title: 'A deck to enjoy, every day.', description: 'A finished white-rail deck, and the homeowner who gets to enjoy it.', poster: '/local-deck/img/story-lexington-hd.webp', source: '/local-deck/video/story-lexington-hd.mp4' },
];
const reviews = ['574642226272010244', '572936596854513664'].map(id => reviewData.reviews.find(review => review.id === id));

function Story({ story, active, setActive }) {
  const media = useRef(null), [error, setError] = useState(false);
  const open = active === story.id;
  useEffect(() => {
    if (!open) return undefined;
    const pause = () => {
      media.current?.querySelector('video')?.pause();
      media.current?.querySelector('iframe')?.contentWindow?.postMessage(JSON.stringify({ event: 'command', func: 'pauseVideo', args: [] }), 'https://www.youtube.com');
    };
    const observer = typeof IntersectionObserver !== 'undefined' ? new IntersectionObserver(entries => { if (!entries[0].isIntersecting) pause(); }, { threshold: .1 }) : null;
    if (observer && media.current) observer.observe(media.current);
    const hidden = () => { if (document.hidden) pause(); };
    document.addEventListener('visibilitychange', hidden);
    return () => { observer?.disconnect(); document.removeEventListener('visibilitychange', hidden); pause(); };
  }, [open]);
  return <article className={`dky-story ${story.youtube ? 'dky-story-team' : ''}`}>
    <div className="dky-story-media" ref={media}>
      {!open ? <button type="button" className="dky-story-start" aria-label={`Play ${story.title}`} onClick={() => { setActive(story.id); setError(false); intakeTrack('video_start', { video: story.id }); }}>
        <img src={story.poster} alt={story.youtube ? 'Yellowstone Renovation video introduction' : 'Homeowner and completed Yellowstone deck'} width={story.youtube ? 707 : 1920} height={story.youtube ? 1536 : 1080} loading="lazy" decoding="async" />
        <span className="dky-play" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="m9 5 11 7-11 7z" /></svg></span><span className="dky-video-prompt">Watch with sound ↗</span>
      </button> : story.youtube ? <iframe title="Meet Yellowstone Renovation" src={`https://www.youtube.com/embed/9XcXhPwMEYE?autoplay=1&controls=1&playsinline=1&rel=0&enablejsapi=1&origin=${encodeURIComponent(typeof window !== 'undefined' ? window.location.origin : '')}`} allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" /> : <video controls autoPlay playsInline preload="metadata" src={story.source} poster={story.poster} aria-label={story.title} onError={() => setError(true)} />}
      {error && <div className="dky-media-error" role="alert"><p>The video couldn’t load.</p><button type="button" onClick={() => setActive(null)}>Try again</button></div>}
    </div>
    <div className="dky-story-copy"><span className="dky-eyebrow">{story.eyebrow}</span><h3>{story.title}</h3><p>{story.description}</p></div>
  </article>;
}

export default function DeckLocalKy() {
  const [activeStory, setActiveStory] = useState(null);
  useEffect(() => { intakeTrack('landing_view'); }, []);
  return <><Helmet>
    <title>Your Deck Starts Here | Free Design Visit in Central KY | Yellowstone Renovation</title>
    <meta name="description" content="Tell us where you’re planning your deck. Request your free on-site 3D design and estimate from Yellowstone Renovation, serving Lexington and Central Kentucky." />
    <meta name="robots" content="noindex,follow" />
    <link rel="canonical" href="https://yellowstonerenovation.com/deck-local-ky/" />
    <meta property="og:title" content="Your new deck starts here. | Yellowstone Renovation" />
    <meta property="og:description" content="A few quick details. A free design visit. Your own local team." />
    <meta property="og:url" content="https://yellowstonerenovation.com/deck-local-ky/" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="https://yellowstonerenovation.com/local-ky/img/hero.webp" />
    <meta name="twitter:card" content="summary_large_image" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" />
  </Helmet>
  <div className="dky-page">
    <a className="dky-skip" href="#deck-estimate">Skip to free estimate form</a>
    <header className="dky-header"><div className="dky-wrap"><a href="#dky-main" aria-label="Yellowstone Renovation"><img src="/local-deck/img/logo.webp" alt="Yellowstone Renovation" width={640} height={131} /></a><a className="dky-call" href={phone} onClick={() => intakeTrack('phone_click', { placement: 'header' })}><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M5 3h4l2 5-3 2a16 16 0 0 0 6 6l2-3 5 2v4c0 1-1 2-2 2C9 21 3 15 3 5c0-1 1-2 2-2Z" /></svg><span>(859) 765-7267</span></a></div></header>
    <main id="dky-main">
      <section className="dky-hero" aria-labelledby="dky-heading"><div className="dky-wrap dky-hero-grid">
        <div className="dky-hero-copy"><span className="dky-location"><i aria-hidden="true" />Lexington &amp; Central Kentucky</span><a className="dky-rating" href="#deck-reviews"><span aria-hidden="true">★★★★★</span><strong>4.9</strong> · 64+ homeowner reviews</a><h1 id="dky-heading">Your new deck.<br /><span>A simple first step.</span></h1><p className="dky-hero-intro">Answer a few quick questions. We’ll bring the design, material options and a clear estimate to your home.</p><ul className="dky-proof"><li><span aria-hidden="true">✓</span>Free on-site 3D design</li><li><span aria-hidden="true">✓</span>Family-owned, local team</li></ul><figure className="dky-hero-project"><img src="/local-ky/img/project-1.webp" alt="A real Yellowstone composite deck with brown boards and matching railing beside a brick home" width={800} height={600} /><figcaption><span aria-hidden="true">↗</span> Real work. Right here in Central KY.</figcaption></figure></div>
        <DeckLocalIntake />
      </div></section>
      <section className="dky-process" aria-label="What happens next"><ol className="dky-wrap">{[['01', 'Tell us about your home.', 'Your address and the best way to reach you.'], ['02', 'Share a little about your deck.', 'A few optional details to help us prepare.'], ['03', 'Meet us at your home.', 'Free 3D design. Clear estimate. No pressure.']].map(([n, title, text]) => <li key={n}><span>{n}</span><div><h2>{title}</h2><p>{text}</p></div></li>)}</ol></section>
      <section id="deck-stories" className="dky-stories" aria-labelledby="dky-stories-title"><div className="dky-wrap"><div className="dky-section-heading"><span className="dky-eyebrow">Good people. Real backyards.</span><h2 id="dky-stories-title">Meet us. Hear from<br /><span>your neighbors.</span></h2><p>Our team first. Then the homeowners who invited us into their backyards.</p></div><div className="dky-stories-grid">{stories.map(story => <Story key={story.id} story={story} active={activeStory} setActive={setActiveStory} />)}</div>
      <div id="deck-reviews" className="dky-reviews">{reviews.map(review => <article key={review.id}><div className="dky-review-head"><span aria-label="5 out of 5 stars">★★★★★</span><small>{review.platform} · {review.date}</small></div><p>{review.summary}</p><div><strong>{review.name}</strong><a href={review.url} target="_blank" rel="noopener noreferrer">Read original ↗</a></div><small className="dky-review-summary">Review summary</small></article>)}</div>
      <div className="dky-stories-bottom"><p>A clear plan starts with a quick hello.</p><a href="#deck-estimate" className="dky-button" onClick={() => intakeTrack('estimate_cta_click', { placement: 'stories' })}>Get My Free Estimate<span aria-hidden="true">↑</span></a></div></div></section>
    </main>
    <footer className="dky-footer"><div className="dky-wrap"><div><img src="/local-deck/img/logo.webp" alt="Yellowstone Renovation" width={640} height={131} loading="lazy" /><p>Family-owned. Built for your backyard.<br />Lexington &amp; Central Kentucky.</p></div><div className="dky-footer-contact"><a href={phone} onClick={() => intakeTrack('phone_click', { placement: 'footer' })}>(859) 765-7267</a><a href="mailto:info@yellowstonerenovation.com">info@yellowstonerenovation.com</a><small>Final scope and pricing are confirmed at your free on-site visit.</small></div><div className="dky-footer-bottom"><span>© {new Date().getFullYear()} Yellowstone Renovation</span><a href="/privacy-policy/">Privacy policy</a></div></div></footer>
  </div></>;
}
