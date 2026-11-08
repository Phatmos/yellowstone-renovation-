import React, { useEffect, useRef, useState } from 'react';
import '../styles/scroll-video.css';

// Start audible playback in the click itself, including on iOS.
export default function ScrollVideo({ src, poster, title, className = '' }) {
  const video = useRef(null);
  const [started, setStarted] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const media = video.current;
    let visible = false;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => {
      if (!visible || document.hidden) { media.pause(); return; }
      if (media.dataset.manual === 'true' || reduced.matches) return;
      media.muted = true;
      media.play().catch(() => {});
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting && entry.intersectionRatio >= .55;
      sync();
    }, { threshold: [0, .55] });
    observer.observe(media);
    document.addEventListener('visibilitychange', sync);
    return () => { observer.disconnect(); document.removeEventListener('visibilitychange', sync); media.pause(); };
  }, []);
  const play = () => {
    const media = video.current;
    document.querySelectorAll('video').forEach(other => { if (other !== media) other.pause(); });
    media.dataset.manual = 'true';
    media.muted = false;
    media.controls = true;
    if (media.error) media.load();
    setError(false);
    setStarted(true);
    media.play().catch(() => { setStarted(false); setError(true); });
  };
  return <div className={`scroll-video ${className}`}>
    <video ref={video} src={src} poster={poster} muted playsInline loop={!started} preload="metadata" controls={started} aria-label={title} onError={() => setError(true)} />
    {!started && <button type="button" className="scroll-video-play" aria-label={`Play ${title} with sound`} onClick={play}><svg aria-hidden="true" viewBox="0 0 24 24"><path d="m9 5 11 7-11 7z" /></svg></button>}
    {error && <button className="scroll-video-retry" type="button" onClick={play}>Retry video</button>}
  </div>;
}
