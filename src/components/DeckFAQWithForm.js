import React, { useEffect, useState } from "react";
import "../styles/DeckFAQWithForm.css";

export default function DeckFAQWithForm({
    title = "Frequently Asked Questions",
    highlight = "Questions",
    subtitle = "Quick answers to help you choose the best deck with confidence.",
    phoneDisplay = "(859) 765-7267",
    phoneTel = "8597657267",
    ctaText = "Get My Free Deck Estimate",

    // formsubmit settings
    emailTo = "renovationyellowstone@gmail.com",
    nextUrl = "https://yellowstonerenovation.com/thank-you/",
    subject = "New Deck Estimate Request",

    faqs = [
        {
            q: "What happens at the in-home deck consultation?",
            a: "We measure your space, discuss your goals, show material options, and explain timeline + pricing. You’ll get clear next steps and a plan for your project.",
        },
        {
            q: "How long does a deck build take?",
            a: "Most decks take 1–2 weeks depending on size, materials, weather, and permit timing. We give you a clear schedule before we start.",
        },
        {
            q: "Do you handle permits and code compliance?",
            a: "Yes. If a permit is required, we can handle it and build to local code—footings, framing, railings, stairs, and inspections.",
        },
        {
            q: "Can you build composite or wood decks?",
            a: "Yes. We build composite (low maintenance) and wood decks (pressure-treated, cedar). We’ll help you choose based on budget, look, and durability.",
        },
        {
            q: "Do you offer repairs or full replacements?",
            a: "Yes. We can replace boards, repair framing, rebuild stairs/railings, or replace the entire deck if needed.",
        },
        {
            q: "Do you offer financing?",
            a: "We can discuss financing options during your consultation if available. Ask us and we’ll walk you through what’s currently offered.",
        },
    ],
}) {
    const [openIndex, setOpenIndex] = useState(-1);
    const [modalOpen, setModalOpen] = useState(false);
    const [pagePath, setPagePath] = useState("");

    // SSR-safe page path
    useEffect(() => {
        if (typeof window !== "undefined") setPagePath(window.location.pathname);
    }, []);

    // lock scroll + ESC close for modal
    useEffect(() => {
        if (!modalOpen) return;

        const onKey = (e) => {
            if (e.key === "Escape") setModalOpen(false);
        };
        document.addEventListener("keydown", onKey);

        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = prev;
        };
    }, [modalOpen]);

    const formAction = "/api/lead";

    const renderTitle = () => {
        if (!highlight) return title;
        const idx = title.toLowerCase().indexOf(highlight.toLowerCase());
        if (idx === -1) return title;
        return (
            <>
                {title.slice(0, idx)}
                <span className="dfq-green">{title.slice(idx, idx + highlight.length)}</span>
                {title.slice(idx + highlight.length)}
            </>
        );
    };

    return (
        <>
            <section className="dfq">
                <div className="dfq-wrap">
                    <h2 className="dfq-title">{renderTitle()}</h2>
                    <p className="dfq-sub">{subtitle}</p>

                    <div className="dfq-list">
                        {faqs.map((item, i) => {
                            const isOpen = openIndex === i;
                            return (
                                <div key={i} className={`dfq-item ${isOpen ? "open" : ""}`}>
                                    <button
                                        className="dfq-q"
                                        type="button"
                                        onClick={() => setOpenIndex(isOpen ? -1 : i)}
                                        aria-expanded={isOpen}
                                    >
                                        <span className="dfq-qText">{item.q}</span>
                                        <span className="dfq-chevron" aria-hidden="true">
                                            {isOpen ? "˄" : "˅"}
                                        </span>
                                    </button>

                                    {isOpen && <div className="dfq-a">{item.a}</div>}
                                </div>
                            );
                        })}
                    </div>

                    <div className="dfq-bottom">
                        <div className="dfq-help">Still have questions? We’re here to help!</div>

                        <div className="dfq-actions">
                            <a className="dfq-btnSolid" href={`tel:${phoneTel}`}>
                                Call {phoneDisplay}
                            </a>

                            <button className="dfq-btnOutline" type="button" onClick={() => setModalOpen(true)}>
                                {ctaText}
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* MODAL FORM */}
            {modalOpen && (
                <div className="dfq-overlay" onClick={() => setModalOpen(false)}>
                    <div className="dfq-modal" onClick={(e) => e.stopPropagation()}>
                        <button
                            className="dfq-close"
                            type="button"
                            onClick={() => setModalOpen(false)}
                            aria-label="Close"
                        >
                            ×
                        </button>

                        <div className="dfq-mHead">
                            <div className="dfq-mTitle">
                                Get Your <b>FREE</b> Deck Estimate — <span className="dfq-green">Fast & Easy</span>
                            </div>
                            <div className="dfq-mPromo">+ FREE Design + Clear, Upfront Pricing</div>
                            <div className="dfq-mSub">We’ll call you shortly</div>
                        </div>

                        <form className="dfq-form" action={formAction} method="POST">
                            <input type="hidden" name="_next" value={nextUrl} />
                            <input type="hidden" name="_captcha" value="false" />
                            <input type="hidden" name="_subject" value={subject} />
                            <input type="hidden" name="_template" value="table" />
                            <input type="hidden" name="Page" value={pagePath} />

                            <div className="dfq-grid">
                                <input name="First Name" placeholder="First Name" required />
                                <input name="Last Name" placeholder="Last Name" required />
                                <input name="Email" type="email" placeholder="Email" required />
                                <input name="Phone" placeholder="Phone" required />

                                <select name="Deck Type">
                                    <option value="">Deck Type (optional)</option>
                                    <option>Composite Deck</option>
                                    <option>Pressure-Treated Wood</option>
                                    <option>Cedar Deck</option>
                                    <option>Covered Deck</option>
                                    <option>Deck Repair</option>
                                    <option>Full Deck Replacement</option>
                                </select>

                                <select name="Timeline">
                                    <option value="">Timeline (optional)</option>
                                    <option>ASAP</option>
                                    <option>1–2 weeks</option>
                                    <option>1 month</option>
                                    <option>2–3 months</option>
                                    <option>Just planning</option>
                                </select>

                                <textarea
                                    name="Project Details"
                                    placeholder="Tell us about your deck (size, materials, stairs/railings, repair or rebuild, etc.)"
                                    rows="4"
                                />
                            </div>

                            <button type="submit" className="dfq-submit">
                                Get My Free Deck Estimate
                            </button>

                            <div className="dfq-note">
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
