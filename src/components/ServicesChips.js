// src/components/ServicesChips.js
import React, { useEffect, useState } from "react";
import "../styles/ServicesChips.css";

export default function ServicesChips({
    title = "Everything You Need for a Perfect Deck",
    highlight = "Perfect Deck",
    subtitle =
    "No need to juggle multiple contractors or stress over logistics. We handle every detail from start to finish.",
    chips = [
        "Composite Decking",
        "Pressure-Treated Wood",
        "Cedar Decks",
        "Deck Framing & Footings",
        "Permits & Code Compliance",
        "Railings & Stairs",
        "Deck Lighting",
        "Deck Repair",
        "Resurfacing",
        "Covered Decks",
        "Screened-In Options",
        "Waterproofing (Under-Deck)",
    ],

    /* BUTTON */
    buttonText = "Get My Free Deck Estimate",

    /* EMAIL + REDIRECT */
    emailTo = "renovationyellowstone@gmail.com",
    nextUrl = "https://yellowstonerenovation.com/thank-you/",
    subject = "New Deck Estimate Request",
}) {
    const [open, setOpen] = useState(false);
    const [pagePath, setPagePath] = useState("");

    // SSR-safe page path
    useEffect(() => {
        if (typeof window !== "undefined") setPagePath(window.location.pathname);
    }, []);

    // lock scroll + ESC close
    useEffect(() => {
        if (!open) return;

        const onKey = (e) => {
            if (e.key === "Escape") setOpen(false);
        };
        document.addEventListener("keydown", onKey);

        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = prev;
        };
    }, [open]);

    const formAction = `https://formsubmit.co/${emailTo}`;

    const renderTitle = () => {
        if (!highlight) return title;
        const idx = title.toLowerCase().indexOf(highlight.toLowerCase());
        if (idx === -1) return title;

        return (
            <>
                {title.slice(0, idx)}
                <span className="sc-green">{title.slice(idx, idx + highlight.length)}</span>
                {title.slice(idx + highlight.length)}
            </>
        );
    };

    return (
        <>
            {/* SECTION */}
            <section className="sc">
                <div className="sc-wrap">
                    <h2 className="sc-title">{renderTitle()}</h2>
                    <p className="sc-sub">{subtitle}</p>

                    <div className="sc-grid">
                        {chips.map((c, i) => (
                            <span className="sc-chip" key={i}>
                                <span className="sc-check">✓</span>
                                <span>{c}</span>
                            </span>
                        ))}
                    </div>

                    {/* BUTTON -> OPEN MODAL */}
                    <button className="sc-btn" type="button" onClick={() => setOpen(true)}>
                        {buttonText} <span className="sc-arrow">→</span>
                    </button>

                    <div className="sc-note">
                        Schedule now and receive a free consultation + a clear estimate for your
                        project.
                    </div>
                </div>
            </section>

            {/* MODAL (same style pattern as HeroSplit) */}
            {open && (
                <div className="sc-modalOverlay" onClick={() => setOpen(false)}>
                    <div className="sc-modal" onClick={(e) => e.stopPropagation()}>
                        <button
                            className="sc-modalClose"
                            type="button"
                            onClick={() => setOpen(false)}
                            aria-label="Close"
                        >
                            ×
                        </button>

                        <div className="sc-modalHead">
                            <div className="sc-modalTitle">
                                Get Your <b>FREE</b> Estimate — <span>Fast & Easy</span>
                            </div>
                            <div className="sc-modalSub">We’ll call you shortly</div>
                        </div>

                        {/* FORM -> EMAIL + THANK YOU */}
                        <form action={formAction} method="POST">
                            <input type="hidden" name="_next" value={nextUrl} />
                            <input type="hidden" name="_captcha" value="false" />
                            <input type="hidden" name="_subject" value={subject} />
                            <input type="hidden" name="_template" value="table" />

                            <input type="hidden" name="Page" value={pagePath} />

                            <div className="sc-formGrid">
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

                            <button type="submit" className="sc-formBtn">
                                Get My Free Estimate
                            </button>

                            <div className="sc-formNote">
                                No spam • By submitting this form, you agree to receive calls and texts.
                                Msg/data rates may apply.
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
