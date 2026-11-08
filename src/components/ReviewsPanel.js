import React, { useEffect, useRef, useState } from "react";
import reviewData from "../data/customer-reviews.json";
import websiteReviews from "../data/website-reviews";
import "../styles/reviews-panel.css";

const collectedReviews = websiteReviews.map((review, index) => ({
  id: `website-${index}`,
  name: review.author,
  rating: review.stars,
  text: review.text,
  photos: review.photos || [],
  avatar: null,
  // Relative dates in the older collection have no capture date. Do not
  // present them as current or invent calendar dates for those reviews.
  date: null,
}));
const seenReviews = new Set();
const reviews = [...reviewData.reviews, ...collectedReviews].filter(review => {
  const key = `${review.name.trim().toLowerCase()}|${(review.text || review.summary).trim().toLowerCase()}`;
  if (seenReviews.has(key)) return false;
  seenReviews.add(key);
  return true;
});
const initials = name => name.split(/\s+/).slice(0, 2).map(n => n[0]).join('');
function Stars({ rating = 5 }) {
  return <span className="rp-stars" aria-label={`${rating} out of 5 stars`}>{'★'.repeat(rating)}{'☆'.repeat(5 - rating)}</span>;
}
function ReviewCard({ review: r, onPhoto }) {
  return <article className="rp-card">
    <div className="rp-person">
      <span className="rp-avatar">{r.avatar && <img src={r.avatar} alt="" loading="lazy" referrerPolicy="no-referrer" onError={event => { event.currentTarget.style.display = 'none'; }} />}<span>{initials(r.name)}</span></span>
      <div><h3>{r.name}</h3>{r.date && <time>{r.date}</time>}</div>
      <Stars rating={r.rating} />
    </div>
    <p className="rp-review-text">{r.text || r.summary}</p>
    {r.photos.length > 0 && <div className="rp-photos">{r.photos.map((url, i) => <button type="button" key={url} aria-label={`Open ${r.name} review photo ${i + 1}`} onClick={() => onPhoto({ url, name: r.name })}><img src={url} alt={`Photo attached to ${r.name}’s review`} loading="lazy" referrerPolicy="no-referrer" /><span aria-hidden="true">⤢</span></button>)}</div>}
  </article>;
}
export function ReviewsPreview() {
  return <section id="reviews" className="rp-preview"><div className="wrap">
    <h2 className="h2">What homeowners say</h2>
    <div className="rp-preview-grid">{reviews.filter(r => ['bbb-Chris M', '574642226272010244', '572936596854513664'].includes(r.id)).map(r => <article key={r.id}><Stars rating={r.rating} /><p>{r.summary}</p><small>{r.name} · Review summary</small></article>)}</div>
    <button type="button" className="btn btn-g btn-lg" data-reviews-open>Read reviews</button>
  </div></section>;
}
export default function ReviewsPanel() {
  const [open, setOpen] = useState(false), [photo, setPhoto] = useState(null);
  const dialog = useRef(null), closeButton = useRef(null), returnFocus = useRef(null), photoTrigger = useRef(null);
  const close = () => { setPhoto(null); setOpen(false); };
  useEffect(() => {
    const activate = event => {
      const trigger = event.target.closest('[data-reviews-open],[data-pf],a[href="#reviews"]');
      if (!trigger) return;
      event.preventDefault(); event.stopPropagation();
      returnFocus.current = trigger;
      setPhoto(null); setOpen(true);
    };
    document.addEventListener('click', activate, true);
    return () => document.removeEventListener('click', activate, true);
  }, []);
  useEffect(() => {
    if (!open) return;
    const root = dialog.current.closest('.local-deck-page');
    root.classList.add('has-modal');
    root.querySelectorAll('video').forEach(video => video.pause());
    root.querySelector('#hvid iframe')?.contentWindow?.postMessage(JSON.stringify({ event: 'command', func: 'pauseVideo', args: [] }), 'https://www.youtube.com');
    closeButton.current.focus();
    return () => { root.classList.remove('has-modal'); returnFocus.current?.focus({ preventScroll: true }); };
  }, [open]);
  useEffect(() => {
    if (!open) return;
    if (photo) dialog.current.querySelector('.rp-lightbox button').focus();
    const keydown = event => {
      if (event.key === 'Escape') { event.preventDefault(); event.stopPropagation(); if (photo) { setPhoto(null); photoTrigger.current?.focus(); } else close(); }
      if (event.key !== 'Tab') return;
      const focusRoot = photo ? dialog.current.querySelector('.rp-lightbox') : dialog.current;
      const buttons = [...focusRoot.querySelectorAll('button:not([disabled])')].filter(button => button.getClientRects().length);
      const first = buttons[0], last = buttons[buttons.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener('keydown', keydown, true);
    return () => document.removeEventListener('keydown', keydown, true);
  }, [open, photo]);
  const openPhoto = item => { photoTrigger.current = document.activeElement; setPhoto(item); };
  const closePhoto = () => { setPhoto(null); photoTrigger.current?.focus(); };
  return <>
    <button type="button" className="rp-launcher" data-reviews-open aria-label="Open homeowner reviews" aria-haspopup="dialog"><img className="rp-google-mark" src="/local-deck/img/platforms/google.svg" alt="" width="22" height="22" /> Reviews</button>
    {open && <div className="rp-overlay" onMouseDown={event => { if (event.target === event.currentTarget) close(); }}>
      <div className="rp-dialog" role="dialog" aria-modal="true" aria-labelledby="rp-title" ref={dialog}>
        <header className="rp-header" aria-hidden={Boolean(photo)}><div><h2 id="rp-title">Reviews</h2><p>{reviews.length} homeowner reviews</p></div><button type="button" ref={closeButton} className="rp-close" aria-label="Close reviews" onClick={close}>×</button></header>
        <div className="rp-main" aria-hidden={Boolean(photo)}>{reviews.map(review => <ReviewCard key={review.id} review={review} onPhoto={openPhoto} />)}</div>
        {photo && <div className="rp-lightbox" role="dialog" aria-modal="true" aria-label="Review photo"><button type="button" className="rp-close" aria-label="Close review photo" onClick={closePhoto}>×</button><img src={photo.url} alt={`Photo attached to ${photo.name}’s review`} referrerPolicy="no-referrer" /><p>{photo.name}’s photo</p></div>}
      </div>
    </div>}
  </>;
}
