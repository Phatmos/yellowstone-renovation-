import React, { useMemo, useRef, useState } from "react";
import "../styles/ReviewsSixGrid.css";

function Title({ title, highlight }) {
    if (!highlight) return <>{title}</>;
    const idx = title.toLowerCase().indexOf(highlight.toLowerCase());
    if (idx === -1) return <>{title}</>;
    return (
        <>
            {title.slice(0, idx)}
            <span className="rsg-green">{title.slice(idx, idx + highlight.length)}</span>
            {title.slice(idx + highlight.length)}
        </>
    );
}

function Stars({ rating = 5 }) {
    const r = Math.max(0, Math.min(5, Math.round(Number(rating) || 0)));
    return (
        <div className="rsg-stars" aria-label={`${r} out of 5 stars`}>
            {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className={i < r ? "on" : ""}>★</span>
            ))}
        </div>
    );
}

function SourceLabel({ source = "google" }) {
    const s = (source || "google").toLowerCase();
    const label = s === "facebook" ? "facebook" : s === "yelp" ? "yelp" : "Google";
    return <span className={`rsg-source ${s}`}>{label}</span>;
}

export default function ReviewsSixGrid({
    title = "Beautiful Remodels, Loved by Homeowners",
    highlight = "Remodels",
    subtitle =
    "Don’t just take our word for it — see why homeowners choose us for their most important investment",
    reviews = [],
}) {
    const base = useMemo(() => (Array.isArray(reviews) ? reviews.slice(0, 6) : []), [reviews]);

    // manual infinite (no autoplay) via clones
    const buffer = 3;
    const extended = useMemo(() => {
        if (!base.length) return [];
        const head = base.slice(0, buffer);
        const tail = base.slice(-buffer);
        return [...tail, ...base, ...head];
    }, [base]);

    const [pos, setPos] = useState(buffer);
    const [anim, setAnim] = useState(true);
    const reenableTimer = useRef(null);

    const cleanupTimer = () => {
        if (reenableTimer.current) clearTimeout(reenableTimer.current);
        reenableTimer.current = null;
    };

    const prev = () => {
        cleanupTimer();
        setAnim(true);
        setPos((p) => p - 1);
    };

    const next = () => {
        cleanupTimer();
        setAnim(true);
        setPos((p) => p + 1);
    };

    const onTransitionEnd = () => {
        if (!base.length) return;

        // moved into head clones
        if (pos >= base.length + buffer) {
            setAnim(false);
            setPos(buffer);
            cleanupTimer();
            reenableTimer.current = setTimeout(() => setAnim(true), 30);
            return;
        }

        // moved into tail clones
        if (pos < buffer) {
            setAnim(false);
            setPos(base.length + buffer - 1);
            cleanupTimer();
            reenableTimer.current = setTimeout(() => setAnim(true), 30);
        }
    };

    // swipe on mobile (manual)
    const startX = useRef(null);
    const onTouchStart = (e) => (startX.current = e.touches[0].clientX);
    const onTouchEnd = (e) => {
        if (startX.current == null) return;
        const dx = e.changedTouches[0].clientX - startX.current;
        startX.current = null;
        if (Math.abs(dx) < 45) return;
        if (dx > 0) prev();
        else next();
    };

    return (
        <section className="rsg">
            <div className="rsg-wrap">
                <h2 className="rsg-title">
                    <Title title={title} highlight={highlight} />
                </h2>
                <p className="rsg-sub">{subtitle}</p>

                <div className="rsg-viewport" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
                    <div
                        className={`rsg-track ${anim ? "is-anim" : "no-anim"}`}
                        style={{ transform: `translateX(-${pos * 33.333}%)` }}
                        onTransitionEnd={onTransitionEnd}
                    >
                        {extended.map((r, i) => (
                            <div className="rsg-slide" key={i}>
                                <article className="rsg-card">
                                    {r.image ? (
                                        <div className="rsg-imgWrap">
                                            <img
                                                src={r.image}
                                                alt={r.imageAlt || r.location || "Project photo"}
                                                className="rsg-img"
                                                loading="lazy"
                                            />
                                        </div>
                                    ) : null}

                                    <div className="rsg-body">
                                        <div className="rsg-top">
                                            <div className="rsg-meta">
                                                <SourceLabel source={r.source} />
                                                <span className="rsg-rate">{(r.rating ?? 5)}/5</span>
                                            </div>
                                            <Stars rating={r.rating ?? 5} />
                                        </div>

                                        <p className="rsg-text">“{r.text}”</p>

                                        <div className="rsg-divider" />

                                        <div className="rsg-footer">
                                            <div className="rsg-person">
                                                <div className="rsg-name">{r.name}</div>
                                                <div className="rsg-loc">{r.location}</div>
                                                {r.service ? <div className="rsg-service">{r.service}</div> : null}
                                            </div>
                                            {r.date ? <div className="rsg-date">{r.date}</div> : null}
                                        </div>
                                    </div>
                                </article>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Better arrows (clean, same size, no weird thick border) */}
                <div className="rsg-controls">
                    <button className="rsg-btn" type="button" onClick={prev} aria-label="Previous">
                        <span className="rsg-arrowIcon">‹</span>
                    </button>
                    <button className="rsg-btn" type="button" onClick={next} aria-label="Next">
                        <span className="rsg-arrowIcon">›</span>
                    </button>
                </div>
            </div>
        </section>
    );
}
