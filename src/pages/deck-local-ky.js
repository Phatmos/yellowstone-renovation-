import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import ScrollVideo from '../components/ScrollVideo';
import DeckLocalIntake from '../components/DeckLocalIntake';
import { intakeTrack } from '../components/deckIntakeState';
import reviewData from '../data/customer-reviews.json';
import '../styles/deck-local-ky.css';

const phone = 'tel:+18597657267';
const stories = [
  { id: 'team', title: 'Meet your Yellowstone team.', poster: '/local-deck/img/hero-intro-sharp.webp', youtube: true },
  { id: 'perryville', title: 'A homeowner’s experience.', poster: '/local-deck/img/story-perryville-hd.webp', source: '/local-deck/video/story-perryville-hd.mp4' },
  { id: 'lexington', title: 'A Lexington homeowner’s story.', poster: '/local-deck/img/story-lexington-hd.webp', source: '/local-deck/video/story-lexington-hd.mp4' },
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
      {!story.youtube ? <ScrollVideo src={story.source} poster={story.poster} title={story.title} /> : !open ? <button type="button" className="dky-story-start" aria-label={`Play ${story.title}`} onClick={() => { setActive(story.id); setError(false); intakeTrack('video_start', { video: story.id }); }}>
        <img src={story.poster} alt={story.youtube ? 'Yellowstone Renovation video introduction' : 'Homeowner and completed Yellowstone deck'} width={story.youtube ? 707 : 1920} height={story.youtube ? 1536 : 1080} loading="lazy" decoding="async" />
        <span className="dky-play" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="m9 5 11 7-11 7z" /></svg></span>
      </button> : story.youtube ? <iframe title="Meet Yellowstone Renovation" src={`https://www.youtube.com/embed/9XcXhPwMEYE?autoplay=1&controls=1&playsinline=1&rel=0&enablejsapi=1&origin=${encodeURIComponent(typeof window !== 'undefined' ? window.location.origin : '')}`} allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" /> : <video controls autoPlay playsInline preload="metadata" src={story.source} poster={story.poster} aria-label={story.title} onError={() => setError(true)} />}
      {error && <div className="dky-media-error" role="alert"><p>The video couldn’t load.</p><button type="button" onClick={() => setActive(null)}>Try again</button></div>}
    </div>
    <div className="dky-story-copy"><h3>{story.title}</h3></div>
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
      <section className="dky-hero" aria-labelledby="dky-heading"><div className="dky-hero-background" aria-hidden="true"><img src="/local-deck/img/gallery/full/photo_44_2026-10-23_13-33-17.webp" alt="" width={2560} height={1920} /></div><div className="dky-wrap dky-hero-grid">
        <div className="dky-hero-copy"><span className="dky-location">Deck builders · Central Kentucky</span><h1 id="dky-heading">Let’s plan<br /><span>your new deck.</span></h1><p className="dky-hero-intro">Your ideas. Our craftsmanship.<br />Free design visit. Clear estimate.</p><ul className="dky-proof"><li><span aria-hidden="true">✓</span>Free on-site 3D design</li><li><span aria-hidden="true">✓</span>Family-owned</li></ul><img className="dky-hero-photo" src="/local-deck/img/g/d15.webp" alt="Completed Yellowstone composite deck with black aluminum railing" width={960} height={640} fetchPriority="high" /></div>
        <DeckLocalIntake />
      </div></section>
      <section className="dky-process" aria-label="What happens next"><ol className="dky-wrap">{[['1', 'Request your free visit.', 'Your contact details and project address.'], ['2', 'Tell us about your deck.', 'A few quick details to help us prepare.'], ['3', 'Get your free design visit.', 'We come to you with options and a clear estimate.']].map(([n, title, text]) => <li key={n}><span>{n}</span><div><h2>{title}</h2><p>{text}</p></div></li>)}</ol></section>
      <section id="deck-stories" className="dky-stories" aria-labelledby="dky-stories-title"><div className="dky-wrap"><div className="dky-section-heading"><h2 id="dky-stories-title">Meet your builders.<br /><span>Hear from homeowners.</span></h2></div><div className="dky-stories-grid">{stories.map(story => <Story key={story.id} story={story} active={activeStory} setActive={setActiveStory} />)}</div>
      <details id="deck-reviews" className="dky-reviews-details"><summary>Read homeowner reviews<span aria-hidden="true">+</span></summary><div className="dky-reviews">{reviews.map(review => <article key={review.id}><div className="dky-review-head"><span aria-label="5 out of 5 stars">★★★★★</span><small>{review.platform} · {review.date}</small></div><p>{review.summary}</p><div><strong>{review.name}</strong><a href={review.url} target="_blank" rel="noopener noreferrer">Read original ↗</a></div><small className="dky-review-summary">Review summary</small></article>)}</div></details>
      <div className="dky-stories-bottom"><a href="#deck-estimate" className="dky-button" onClick={() => intakeTrack('estimate_cta_click', { placement: 'stories' })}>Get My Free Estimate<span aria-hidden="true">↑</span></a></div></div></section>
    </main>
    <footer className="dky-footer"><div className="dky-wrap"><div><strong>Yellowstone Renovation</strong><p>Lexington &amp; Central Kentucky.</p></div><div className="dky-footer-contact"><a href={phone} onClick={() => intakeTrack('phone_click', { placement: 'footer' })}>(859) 765-7267</a><a href="mailto:info@yellowstonerenovation.com">info@yellowstonerenovation.com</a></div><div className="dky-footer-bottom"><span>© {new Date().getFullYear()} Yellowstone Renovation</span><a href="/privacy-policy/">Privacy policy</a></div></div></footer>
  </div></>;
}
