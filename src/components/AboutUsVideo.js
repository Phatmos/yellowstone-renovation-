import React, { useEffect, useMemo, useState } from "react";
import "../styles/AboutUsVideo.css";

function Stars({ count = 5, show = true }) {
    if (!show) return null;
    return (
        <div className="auv-stars" aria-label={`${count} out of 5 stars`}>
            {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className={i < count ? "on" : ""}>★</span>
            ))}
        </div>
    );
}

function toEmbedUrl(url) {
    if (!url) return "";

    const yt =
        url.match(/youtube\.com\/watch\?v=([^&]+)/i) ||
        url.match(/youtu\.be\/([^?]+)/i) ||
        url.match(/youtube\.com\/embed\/([^?]+)/i);

    if (yt) return `https://www.youtube.com/embed/${yt[1]}?autoplay=1&rel=0`;

    const vm =
        url.match(/vimeo\.com\/(\d+)/i) ||
        url.match(/player\.vimeo\.com\/video\/(\d+)/i);

    if (vm) return `https://player.vimeo.com/video/${vm[1]}?autoplay=1`;

    return url; // already embed or other
}

export default function AboutUsVideo({
    poster = "/images/aboutus-poster.jpg",
    posterAlt = "About us video cover",
    videoUrl = "",

    badge = "Watch Video",
    showStars = true,
    stars = 5,

    title = "See How Yellowstone Renovation Builds It Right",
    text =
    "We’re a local team specializing in exterior renovation — decks and siding. Clear pricing, clean jobsite, and a process built around communication.",
    bullets = [
        "Design + material guidance",
        "Permits + code compliance",
        "In-house installation crew",
        "Final walkthrough + punch list",
    ],

    pill = "Deck Builder & Siding",

    // small line under copy (optional)
    subline = "Serving Lexington & nearby areas",

    // Brand logos row
    logos = [
    

    ],
}) {
    const [open, setOpen] = useState(false);
    const embedUrl = useMemo(() => toEmbedUrl(videoUrl), [videoUrl]);

    // ESC + lock scroll
    useEffect(() => {
        if (!open) return;

        const onKey = (e) => e.key === "Escape" && setOpen(false);
        document.addEventListener("keydown", onKey);

        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = prev;
        };
    }, [open]);

    return (
        <>
            <section className="auv">
                <div className="auv-wrap">
                    <div className="auv-card">
                        {/* LEFT: poster + play */}
                        <button
                            className="auv-media"
                            type="button"
                            onClick={() => setOpen(true)}
                            aria-label="Play About Us video"
                        >
                            <img className="auv-img" src={poster} alt={posterAlt} />
                            <span className="auv-play" aria-hidden="true">
                                <span className="auv-playTri" />
                            </span>
                        </button>

                        {/* RIGHT: about-us copy */}
                        <div className="auv-content">
                            <div className="auv-top">
                                <span className="auv-badge">{badge}</span>
                                <Stars count={stars} show={showStars} />
                            </div>

                            <h3 className="auv-title">{title}</h3>
                            <p className="auv-text">{text}</p>

                            {bullets?.length ? (
                                <ul className="auv-bullets">
                                    {bullets.slice(0, 5).map((b, i) => (
                                        <li key={i}>
                                            <span className="auv-check">✓</span>
                                            <span>{b}</span>
                                        </li>
                                    ))}
                                </ul>
                            ) : null}

                            <div className="auv-bottom">
                                <div className="auv-subline">{subline}</div>
                                <div className="auv-pill">{pill}</div>
                            </div>
                        </div>
                    </div>

                    {/* Logos row */}
                    {logos?.length ? (
                        <div className="auv-logos" aria-label="Partner brands">
                            {logos.map((l, i) => (
                                <div className="auv-logo" key={i}>
                                    <img src={l.src} alt={l.alt} loading="lazy" />
                                </div>
                            ))}
                        </div>
                    ) : null}
                </div>
            </section>

            {/* VIDEO MODAL */}
            {open && (
                <div className="auv-modalOverlay" onClick={() => setOpen(false)}>
                    <div className="auv-modal" onClick={(e) => e.stopPropagation()}>
                        <button
                            className="auv-close"
                            type="button"
                            onClick={() => setOpen(false)}
                            aria-label="Close"
                        >
                            ×
                        </button>

                        <div className="auv-videoFrame">
                            {embedUrl ? (
                                <iframe
                                    title="About Us Video"
                                    src={embedUrl}
                                    frameBorder="0"
                                    allow="autoplay; encrypted-media; picture-in-picture"
                                    allowFullScreen
                                />
                            ) : (
                                <div className="auv-fallback">
                                    Please provide a videoUrl (YouTube/Vimeo/embed).
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
