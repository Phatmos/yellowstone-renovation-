import React, { useEffect, useRef, useState } from "react";
import photos from "../data/localDeckGallery.json";

const PAGE_SIZE = 20;

export default function LocalDeckGallery() {
  const [visible, setVisible] = useState(PAGE_SIZE);
  const [selected, setSelected] = useState(null);
  const gallery = useRef(null);
  const closeButton = useRef(null);
  const returnTo = useRef(null);
  const firstNew = useRef(null);
  const isOpen = selected !== null;

  useEffect(() => {
    if (firstNew.current !== null) {
      gallery.current.querySelectorAll("button")[firstNew.current]?.focus({ preventScroll: true });
      firstNew.current = null;
    }
  }, [visible]);

  useEffect(() => {
    if (!isOpen) return undefined;
    const root = gallery.current.closest(".local-deck-page");
    root.classList.add("has-gallery");
    closeButton.current.focus();
    const onKey = event => {
      if (event.key === "Escape") setSelected(null);
      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        event.preventDefault();
        setSelected(index => (index + (event.key === "ArrowRight" ? 1 : -1) + photos.length) % photos.length);
      }
      if (event.key === "Tab") {
        const buttons = [...root.querySelectorAll(".project-lightbox button")];
        const index = buttons.indexOf(document.activeElement);
        event.preventDefault();
        buttons[(index + (event.shiftKey ? -1 : 1) + buttons.length) % buttons.length].focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      root.classList.remove("has-gallery");
      document.removeEventListener("keydown", onKey);
      returnTo.current?.focus({ preventScroll: true });
    };
  }, [isOpen]);

  const photo = isOpen ? photos[selected] : null;
  const remaining = photos.length - visible;
  return <>
    <div className="gal" id="gal" ref={gallery}>
      {photos.slice(0, visible).map((item, index) => <button key={item.src} type="button" aria-label={`View photo ${index + 1}: ${item.alt}`} onClick={event => {
        returnTo.current = event.currentTarget;
        setSelected(index);
      }}>
        <img src={item.src} alt={item.alt} loading="lazy" decoding="async" width={item.width} height={item.height} />
        <span>{item.alt}</span>
      </button>)}
    </div>
    <div className="gallery-more">
      <p role="status" aria-live="polite">Showing {Math.min(visible, photos.length)} of {photos.length} photos</p>
      {remaining > 0 && <button className="btn btn-w btn-lg" type="button" aria-controls="gal" onClick={() => {
        firstNew.current = visible;
        setVisible(count => Math.min(count + PAGE_SIZE, photos.length));
      }}>Show {Math.min(PAGE_SIZE, remaining)} more photos <span aria-hidden="true">↓</span></button>}
    </div>
    {photo && <div className="lb project-lightbox" role="dialog" aria-modal="true" aria-label={`Project photo ${selected + 1} of ${photos.length}`} onClick={event => {
      if (event.target === event.currentTarget) setSelected(null);
    }}>
      <img src={photo.full || photo.src} alt={photo.alt} />
      <p className="lightbox-caption" aria-live="polite">{selected + 1} / {photos.length} · {photo.alt}</p>
      <button className="p" type="button" aria-label="Previous photo" onClick={() => setSelected(index => (index - 1 + photos.length) % photos.length)}>‹</button>
      <button className="n" type="button" aria-label="Next photo" onClick={() => setSelected(index => (index + 1) % photos.length)}>›</button>
      <button className="x" type="button" aria-label="Close photo" ref={closeButton} onClick={() => setSelected(null)}>×</button>
    </div>}
  </>;
}
