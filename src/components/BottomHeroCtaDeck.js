import React, { useEffect, useState } from "react";
import "../styles/BottomHeroCtaDeck.css";

export default function BottomHeroCtaDeck({
    bgImage = "/images/deck/deck-lexington47.webp",
    title = "Decks Built to Last, Beautiful, and Worry-Free.",
    subtitle = "Upgrade your outdoor space today — and enjoy it for years.",
    buttonText = "Get My Free Deck Estimate",
    phoneLine = "or Speak with a Deck Expert",
    phoneDisplay = "(859) 765-7267",
    phoneTel = "8597657267",

    // small strip under hero
    stripTitle = "Proudly Serving Lexington & Surrounding Areas",
    stripText =
    "Lexington • Nicholasville • Georgetown • Richmond • Frankfort • Versailles",

    // form submit
    emailTo = "renovationyellowstone@gmail.com",
    nextUrl = "https://yellowstonerenovation.com/thank-you/",
    subject = "New Deck Estimate Request",
}) {
    const [open, setOpen] = useState(false);
    const [pagePath, setPagePath] = useState("");

    useEffect(() => {
        if (typeof window !== "undefined") setPagePath(window.location.pathname);
    }, []);

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

    const formAction = "/api/lead";

    return (
        <>
            <section className="bhc">
                <div
                    className="bhc-bg"
                    style={{ backgroundImage: `url(${bgImage})` }}
                    role="img"
                    aria-label="Deck background"
                >
                    <div className="bhc-overlay" />

                    <div className="bhc-inner">
                        <h2 className="bhc-title">{title}</h2>
                        <p className="bhc-sub">{subtitle}</p>

                        <button className="bhc-btn" type="button" onClick={() => setOpen(true)}>
                            {buttonText} <span className="bhc-arrow">→</span>
                        </button>

                        <div className="bhc-phone">
                            <div className="bhc-phoneLine">{phoneLine}</div>
                            <a className="bhc-phoneNum" href={`tel:${phoneTel}`}>
                                {phoneDisplay}
                            </a>
                        </div>
                    </div>
                </div>

                <div className="bhc-strip">
                    <div className="bhc-stripInner">
                        <div className="bhc-stripTitle">{stripTitle}</div>
                        <div className="bhc-stripText">{stripText}</div>
                    </div>
                </div>
            </section>

            {/* MODAL FORM */}
            {open && (
                <div className="bhc-modalOverlay" onClick={() => setOpen(false)}>
                    <div className="bhc-modal" onClick={(e) => e.stopPropagation()}>
                        <button
                            className="bhc-close"
                            type="button"
                            onClick={() => setOpen(false)}
                            aria-label="Close"
                        >
                            ×
                        </button>

                        <div className="bhc-mHead">
                            <div className="bhc-mTitle">
                                Get Your <b>FREE</b> Deck Estimate — <span className="bhc-green">Fast & Easy</span>
                            </div>
                            <div className="bhc-mSub">We’ll call you shortly</div>
                        </div>

                        <form className="bhc-form" action={formAction} method="POST">
                            <input type="hidden" name="_next" value={nextUrl} />
                            <input type="hidden" name="_captcha" value="false" />
                            <input type="hidden" name="_subject" value={subject} />
                            <input type="hidden" name="_template" value="table" />
                            <input type="hidden" name="Page" value={pagePath} />

                            <div className="bhc-grid">
                                <input name="First Name" placeholder="First Name" required />
                                <input name="Last Name" placeholder="Last Name" required />
                                <input name="Email" type="email" placeholder="Email" required />
                                <input name="Phone" placeholder="Phone" required />
                                <textarea
                                    name="Project Details"
                                    placeholder="Tell us about your deck (size, materials, stairs/railings, repair or rebuild, etc.)"
                                    rows="4"
                                />
                            </div>

                            <button type="submit" className="bhc-submit">
                                Get My Free Deck Estimate
                            </button>

                            <div className="bhc-note">
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
