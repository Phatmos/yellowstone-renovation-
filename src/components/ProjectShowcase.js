// src/components/ProjectShowcase.js
import React, { useEffect, useMemo, useState } from "react";
import "../styles/ProjectShowcase.css";

export default function ProjectShowcase({
    titleTop = "From Old Project to",
    titleGreen = "Dream Project",
    titleEnd = "— See It Happen",
    text =
    "See real transformations that turn outdated spaces into clean, modern, highly functional results — and yours could be next.",
    ctaText = "Get My Free Consultation",
    smallText = "Free consultation & clear estimate for your project.",
    items = [
        {
            before: "/images/before1.jpg",
            after: "/images/after1.jpg",
            location: "Lexington, KY",
            label: "Transformation 1 of 6",
        },
        {
            before: "/images/before2.jpg",
            after: "/images/after2.jpg",
            location: "Nicholasville, KY",
            label: "Transformation 2 of 6",
        },
    ],

    /* FORM SETTINGS */
    emailTo = "renovationyellowstone@gmail.com",
    nextUrl = "https://yellowstonerenovation.com/thank-you/",
    subject = "New Consultation Request",
}) {
    const safeItems = useMemo(() => (items?.length ? items : []), [items]);
    const [index, setIndex] = useState(0);
    const [open, setOpen] = useState(false);

    const current = safeItems[index] || safeItems[0];

    const prev = () =>
        setIndex((v) => (v - 1 + safeItems.length) % safeItems.length);
    const next = () => setIndex((v) => (v + 1) % safeItems.length);

    // carousel keyboard arrows
    useEffect(() => {
        if (!safeItems.length) return;
        const onKey = (e) => {
            if (e.key === "ArrowLeft") prev();
            if (e.key === "ArrowRight") next();
        };
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [safeItems.length]);

    // modal: lock scroll + esc close
    useEffect(() => {
        if (!open) return;

        const onKey = (e) => {
            if (e.key === "Escape") setOpen(false);
        };
        document.addEventListener("keydown", onKey);

        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = prevOverflow;
        };
    }, [open]);

    if (!current) return null;

    const formAction = "/api/lead";

    return (
        <>
            <section className="ps">
                <div className="ps-wrap">
                    {/* LEFT */}
                    <div className="ps-left">
                        <h2 className="ps-title">
                            {titleTop} <span className="ps-green">{titleGreen}</span> {titleEnd}
                        </h2>

                        <p className="ps-text">{text}</p>

                        <div className="ps-ratingRow" aria-hidden="true">
                            <div className="ps-rating">
                                <span className="ps-star">★</span>
                                <span className="ps-small">4.9/5 Rating</span>
                            </div>
                            <div className="ps-rating">
                                <span className="ps-star">★</span>
                                <span className="ps-small">5/5 Rating</span>
                            </div>
                            <div className="ps-rating">
                                <span className="ps-star">★</span>
                                <span className="ps-small">4/5 Rating</span>
                            </div>
                        </div>

                        {/* CTA -> OPEN MODAL */}
                        <button type="button" className="ps-btn" onClick={() => setOpen(true)}>
                            {ctaText} <span className="ps-arrow">→</span>
                        </button>

                        <div className="ps-note">{smallText}</div>
                    </div>

                    {/* RIGHT */}
                    <div className="ps-right">
                        <div className="ps-cards">
                            {/* BEFORE */}
                            <div className="ps-card">
                                <div className="ps-imgWrap">
                                    <img
                                        className="ps-img"
                                        src={current.before}
                                        alt="Before project"
                                        loading="lazy"
                                    />
                                    <div className="ps-badge ps-badgeBefore">BEFORE</div>
                                </div>
                            </div>

                            {/* AFTER */}
                            <div className="ps-card">
                                <div className="ps-imgWrap">
                                    <img
                                        className="ps-img"
                                        src={current.after}
                                        alt="After project"
                                        loading="lazy"
                                    />
                                    <div className="ps-badge ps-badgeAfter">AFTER</div>
                                </div>
                            </div>
                        </div>

                        <div className="ps-footer">
                            <div className="ps-meta">
                                <div className="ps-metaTop">{current.label}</div>
                                <div className="ps-metaBottom">{current.location}</div>
                            </div>

                            <div className="ps-controls">
                                <button className="ps-nav" type="button" onClick={prev} aria-label="Previous">
                                    ‹
                                </button>

                                <div className="ps-dots" aria-label="carousel dots">
                                    {safeItems.map((_, d) => (
                                        <span
                                            key={d}
                                            className={`ps-dot ${d === index ? "is-active" : ""}`}
                                            onClick={() => setIndex(d)}
                                            role="button"
                                            tabIndex={0}
                                            onKeyDown={(e) => {
                                                if (e.key === "Enter") setIndex(d);
                                            }}
                                            aria-label={`Go to slide ${d + 1}`}
                                        />
                                    ))}
                                </div>

                                <button className="ps-nav" type="button" onClick={next} aria-label="Next">
                                    ›
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================== MODAL FORM ================== */}
            {open && (
                <div className="ps-modalOverlay" onClick={() => setOpen(false)}>
                    <div className="ps-modal" onClick={(e) => e.stopPropagation()}>
                        <button className="ps-modalClose" type="button" onClick={() => setOpen(false)}>
                            ×
                        </button>

                        <div className="ps-modalHead">
                            <div className="ps-modalTitle">
                                Get Your <b>FREE</b> Consultation — <span>Fast & Easy</span>
                            </div>
                            <div className="ps-modalPromo">+ $1,500 OFF Your Remodel</div>
                            <div className="ps-modalDesc">
                                Refresh your home’s exterior with new siding and a <b>FREE 3D design</b>{" "}
                                visualization and estimate — no stress, no surprises.
                            </div>
                        </div>

                        <form action={formAction} method="POST">
                            {/* redirect + settings */}
                            <input type="hidden" name="_next" value={nextUrl} />
                            <input type="hidden" name="_captcha" value="false" />
                            <input type="hidden" name="_subject" value={subject} />
                            <input type="hidden" name="_template" value="table" />

                            {/* page info */}
                            <input
                                type="hidden"
                                name="Page"
                                value={typeof window !== "undefined" ? window.location.pathname : ""}
                            />

                            <div className="ps-formGrid">
                                <input name="First Name" placeholder="First Name" required />
                                <input name="Last Name" placeholder="Last Name" required />
                                <input name="Email" type="email" placeholder="Email" required />
                                <input name="Phone" placeholder="Phone" required />
                                <textarea
                                    name="Project Details"
                                    placeholder="Tell us about your project"
                                    rows="4"
                                />
                            </div>

                            <button type="submit" className="ps-formBtn">
                                Get My Free Consultation
                            </button>

                            <div className="ps-formNote">
                                No spam, no pushy sales • By submitting this form, you consent to receive calls and
                                texts from us about your project. Msg/data rates may apply.
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
