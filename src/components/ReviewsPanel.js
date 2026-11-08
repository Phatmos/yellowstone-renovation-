import React, { useEffect, useMemo, useRef, useState } from "react";
import reviewData from "../data/customer-reviews.json";
import "../styles/reviews-panel.css";

const reviews = reviewData.reviews;
const platforms = ['All', 'Google', 'Thumbtack', 'BBB', 'Angi', 'BuildZoom'];
const matches = (r, platform) => platform === 'All' || (platform === 'Google' ? r.origin.startsWith('Google') : r.platform === platform);
const initials = name => name.split(/\s+/).slice(0, 2).map(n => n[0]).join('');
function Stars({ rating = 5 }) { return <span className="rp-stars" aria-label={`${rating} out of 5 stars`}>{'★'.repeat(rating)}{'☆'.repeat(5 - rating)}</span>; }
function ReviewCard({ review: r, onPhoto }) {
  const [expanded, setExpanded] = useState(false);
  return <article className="rp-card">
    <div className="rp-person"><span className="rp-avatar">{r.avatar ? <img src={r.avatar} alt="" loading="lazy" referrerPolicy="no-referrer" onError={e => { e.currentTarget.style.display = 'none'; }} /> : null}<span>{initials(r.name)}</span></span><div><h3>{r.name}</h3><p>{r.date}</p></div><span className={`rp-source rp-${r.platform.toLowerCase()}`}>{r.platform}</span></div>
    <div className="rp-card-rating"><Stars rating={r.rating} /><span>{r.topic}</span></div>
    <span className="rp-summary-label">Review summary</span>
    <p className={`rp-review-text ${expanded ? '' : 'rp-clamped'}`}>{r.summary}</p>
    {r.summary.length > 180 && <button className="rp-text-button" aria-expanded={expanded} onClick={() => setExpanded(!expanded)}>{expanded ? 'Show less' : 'Read more'}</button>}
    {r.photos.length > 0 && <div className="rp-photos">{r.photos.map((photo, i) => <button key={photo} aria-label={`Open ${r.name} review photo ${i + 1}`} onClick={() => onPhoto({ url: photo, name: r.name })}><img src={photo} alt={`Photo attached to ${r.name}’s review`} loading="lazy" referrerPolicy="no-referrer" /><span>View photo ↗</span></button>)}</div>}
    <div className="rp-card-footer"><span>{r.origin}</span><a href={r.url} target="_blank" rel="noopener noreferrer">Read original ↗</a></div>
  </article>;
}
export function ReviewsPreview() {
  return <section id="reviews" className="rp-preview"><div className="wrap"><span className="kick g">From the people we build for</span><h2 className="h2">Their homes. Their stories.</h2><p className="lead">Explore homeowner feedback from independent review platforms.</p><div className="rp-preview-grid">{reviews.filter(r => ['bbb-Chris M','574642226272010244','572936596854513664'].includes(r.id)).map(r => <article key={r.id}><Stars rating={r.rating} /><p>{r.summary}</p><small>Review summary · {r.name} · {r.platform}</small></article>)}</div><button type="button" className="btn btn-g btn-lg" data-reviews-open>Read homeowner reviews <span aria-hidden="true">↗</span></button></div></section>;
}
export default function ReviewsPanel() {
  const [open, setOpen] = useState(false), [platform, setPlatform] = useState('All'), [search, setSearch] = useState(''), [sort, setSort] = useState('newest'), [photoOnly, setPhotoOnly] = useState(false), [photo, setPhoto] = useState(null);
  const dialog = useRef(null), closeButton = useRef(null), returnFocus = useRef(null);
  const close = () => { setPhoto(null); setOpen(false); };
  useEffect(() => {
    const activate = event => {
      const trigger = event.target.closest('[data-reviews-open],[data-pf],a[href="#reviews"]');
      if (!trigger) return;
      event.preventDefault(); event.stopPropagation();
      returnFocus.current = trigger;
      const requested = trigger.dataset.pf;
      setPlatform(platforms.find(p => p.toLowerCase() === requested) || 'All');
      setSearch(''); setPhotoOnly(false); setPhoto(null); setOpen(true);
    };
    document.addEventListener('click', activate, true);
    return () => document.removeEventListener('click', activate, true);
  }, []);
  useEffect(() => {
    if (!open) return;
    const root = dialog.current.closest('.local-deck-page');
    root.classList.add('has-modal');
    root.querySelectorAll('video').forEach(v => v.pause());
    const frame = root.querySelector('#hvid iframe');
    frame?.contentWindow?.postMessage(JSON.stringify({ event: 'command', func: 'pauseVideo', args: [] }), 'https://www.youtube.com');
    (photo ? dialog.current.querySelector('.rp-lightbox button') : closeButton.current).focus();
    const keydown = event => {
      if (event.key === 'Escape') { event.preventDefault(); event.stopPropagation(); if (photo) setPhoto(null); else close(); }
      if (event.key !== 'Tab') return;
      const focusRoot = photo ? dialog.current.querySelector('.rp-lightbox') : dialog.current;
      const focusables = [...focusRoot.querySelectorAll('button:not([disabled]),input,select,a[href]')].filter(el => el.getClientRects().length);
      const first = focusables[0], last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener('keydown', keydown, true);
    return () => { root.classList.remove('has-modal'); document.removeEventListener('keydown', keydown, true); returnFocus.current?.focus({ preventScroll: true }); };
  }, [open, photo]);
  const filtered = useMemo(() => reviews.filter(r => matches(r, platform) && (!photoOnly || r.photos.length) && `${r.name} ${r.topic} ${r.summary}`.toLowerCase().includes(search.toLowerCase())).sort((a,b) => sort === 'oldest' ? new Date(a.date) - new Date(b.date) : sort === 'photos' ? b.photos.length - a.photos.length || new Date(b.date) - new Date(a.date) : new Date(b.date) - new Date(a.date)), [platform, photoOnly, search, sort]);
  return <>
    <button type="button" className="rp-launcher" data-reviews-open aria-label="Open homeowner reviews" aria-haspopup="dialog"><span className="rp-launcher-star" aria-hidden="true">★</span><span><b>Reviews</b><small>Homeowner stories</small></span><span aria-hidden="true">↗</span></button>
    {open && <div className="rp-overlay" onMouseDown={e => { if (e.target === e.currentTarget) close(); }}><div className="rp-dialog" role="dialog" aria-modal="true" aria-labelledby="rp-title" ref={dialog}>
      <header className="rp-header"><div><span className="rp-eyebrow">YELLOWSTONE RENOVATION</span><h2 id="rp-title">Good work. Real feedback.</h2><p>Homeowner reviews, all in one place.</p></div><button ref={closeButton} className="rp-close" aria-label="Close reviews" onClick={close}>×</button></header>
      <div className="rp-layout"><aside className="rp-sidebar"><span className="rp-eyebrow">EXPLORE REVIEWS</span><nav aria-label="Filter review platform">{platforms.map(p => <button key={p} aria-pressed={platform === p} onClick={() => setPlatform(p)}><span>{p === 'All' ? 'All platforms' : p === 'Google' ? 'Google via Thumbtack' : p}</span><small>{reviews.filter(r => matches(r,p)).length}</small></button>)}</nav><div className="rp-note"><b>Every story has a source.</b><p>Cards summarize published customer reviews. Open the original to read the full review. Photos appear only where attached to that review.</p></div><a className="rp-call" href="tel:+18597657267">Talk about your project ↗<small>(859) 765-7267</small></a></aside>
      <div className="rp-main"><div className="rp-tools"><label className="rp-search"><span aria-hidden="true">⌕</span><input type="search" aria-label="Search homeowner reviews" placeholder="Search decks, siding, a name…" value={search} onChange={e => setSearch(e.target.value)} /></label><select aria-label="Sort reviews" value={sort} onChange={e=>setSort(e.target.value)}><option value="newest">Newest first</option><option value="oldest">Oldest first</option><option value="photos">Photos first</option></select></div><div className="rp-results"><span role="status">{filtered.length} {filtered.length === 1 ? 'review' : 'reviews'}</span><label><input type="checkbox" checked={photoOnly} onChange={e=>setPhotoOnly(e.target.checked)} /> With photos</label></div>
      <div className="rp-grid">{filtered.map(r => <ReviewCard key={r.id} review={r} onPhoto={setPhoto} />)}</div>{!filtered.length && <div className="rp-empty"><h3>No matching reviews</h3><p>Try a different search or review platform.</p><button onClick={()=>{setSearch('');setPlatform('All');setPhotoOnly(false);}}>Show all reviews</button></div>}<p className="rp-updated">Selected public reviews · Sources checked November 7, 2026</p></div></div>
      {photo && <div className="rp-lightbox"><button className="rp-close" aria-label="Close review photo" onClick={()=>setPhoto(null)}>×</button><img src={photo.url} alt={`Photo attached to ${photo.name}’s review`} referrerPolicy="no-referrer" /><p>Photo from {photo.name}’s review</p></div>}
    </div></div>}
  </>;
}
