import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import "../styles/DeckHeader.css";

const PhoneIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
            d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.3 1.3.4 2.6.6 4 .6.7 0 1.2.5 1.2 1.2v3.5c0 .7-.5 1.2-1.2 1.2C10.8 21.4 2.6 13.2 2.6 3.4c0-.7.5-1.2 1.2-1.2h3.5c.7 0 1.2.5 1.2 1.2 0 1.4.2 2.8.6 4 .1.4 0 .9-.3 1.2l-2.2 2.2Z"
            fill="currentColor"
        />
    </svg>
);

const ShieldIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
            d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
        />
        <path d="m9 12 2 2 4-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

export default function DeckHeader({
    logoSrc = "/YellowstoneR.jpg",
    logoAlt = "Yellowstone Renovation",
    logoLink = "/deck-local/",

    phoneDisplay = "(859) 765-7267",
    phoneTel = "8597657267",

    emailTo = "info@yellowstonerenovation.com",
    nextUrl = "https://yellowstonerenovation.com/thank-you/",
    subject = "New Deck Estimate Request",
}) {
    const [formOpen, setFormOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [pagePath, setPagePath] = useState("");

    useEffect(() => {
        if (typeof window !== "undefined") {
            setPagePath(window.location.pathname);
        }
    }, []);

    useEffect(() => {
        if (!formOpen && !menuOpen) return;

        const onKey = (e) => {
            if (e.key === "Escape") {
                setFormOpen(false);
                setMenuOpen(false);
            }
        };

        const oldOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        document.addEventListener("keydown", onKey);

        return () => {
            document.body.style.overflow = oldOverflow;
            document.removeEventListener("keydown", onKey);
        };
    }, [formOpen, menuOpen]);

    const formAction = `https://formsubmit.co/${emailTo}`;

    const openForm = () => {
        setMenuOpen(false);
        setFormOpen(true);
    };

    return (
        <>
            <div className="dh-topbar">
                <span></span>
                <b>LIMITED TIME:</b> Free 3D Design + $1,500 Off Your Project
            </div>

            <header className="dh-header">
                <div className="dh-header-main">
                    <Link to={logoLink} className="dh-logo" aria-label="Yellowstone Renovation">
                        <img src={logoSrc} alt={logoAlt} />
                    </Link>

                    <div className="dh-trust-row">
                        <div className="dh-trust-item dh-stars">
                            <b>★★★★★</b>
                            <span>64+ 5-Star Reviews</span>
                        </div>

                        <div className="dh-trust-item">
                            <ShieldIcon />
                            <span>Fully Insured</span>
                        </div>

                        <div className="dh-trust-item dh-warranty">
                            <ShieldIcon />
                            <span>36-Month Warranty</span>
                        </div>
                    </div>

                    <div className="dh-header-actions">
                        <a href={`tel:${phoneTel}`} className="dh-phone">
                            <PhoneIcon />
                            {phoneDisplay}
                        </a>

                        <button type="button" className="dh-header-cta" onClick={openForm}>
                            Schedule Free Estimate <span>→</span>
                        </button>

                        <button
                            type="button"
                            className="dh-menu-btn"
                            onClick={() => setMenuOpen(true)}
                            aria-label="Open menu"
                        >
                            <i></i>
                            <i></i>
                            <i></i>
                        </button>
                    </div>
                </div>

                <nav className="dh-nav" aria-label="Main navigation">
                    <Link to="/deck-local/#reviews">Reviews</Link>
                    <Link to="/deck-local/#projects">Projects</Link>
                    <Link to="/deck-local/#benefits">Benefits</Link>
                    <Link to="/deck-local/#process">Process</Link>
                    <button type="button" onClick={openForm}>
                        Contact Us
                    </button>
                </nav>
            </header>

            {menuOpen && (
                <div className="dh-drawer-overlay" onClick={() => setMenuOpen(false)}>
                    <aside className="dh-drawer" onClick={(e) => e.stopPropagation()}>
                        <div className="dh-drawer-head">
                            <img src={logoSrc} alt={logoAlt} />

                            <button
                                type="button"
                                className="dh-drawer-close"
                                onClick={() => setMenuOpen(false)}
                                aria-label="Close menu"
                            >
                                ×
                            </button>
                        </div>

                        <div className="dh-drawer-promo">
                            Free 3D Design + <b>$1,500 Off</b>
                        </div>

                        <nav className="dh-drawer-links" aria-label="Mobile navigation">
                            <Link to="/deck-local/#reviews" onClick={() => setMenuOpen(false)}>
                                Reviews
                            </Link>

                            <Link to="/deck-local/#projects" onClick={() => setMenuOpen(false)}>
                                Projects
                            </Link>

                            <Link to="/deck-local/#benefits" onClick={() => setMenuOpen(false)}>
                                Benefits
                            </Link>

                            <Link to="/deck-local/#process" onClick={() => setMenuOpen(false)}>
                                Process
                            </Link>

                            <button type="button" onClick={openForm}>
                                Get Free Estimate
                            </button>

                            <a href={`tel:${phoneTel}`}>
                                <PhoneIcon />
                                {phoneDisplay}
                            </a>
                        </nav>
                    </aside>
                </div>
            )}

            {formOpen && (
                <div className="dh-modal-overlay" onClick={() => setFormOpen(false)}>
                    <div className="dh-modal" onClick={(e) => e.stopPropagation()}>
                        <button
                            type="button"
                            className="dh-modal-close"
                            onClick={() => setFormOpen(false)}
                            aria-label="Close form"
                        >
                            ×
                        </button>

                        <div className="dh-modal-head">
                            <h3>
                                Get Your <b>Free Deck Estimate</b>
                            </h3>
                            <p>Fast on-site estimate. No waiting weeks for a price.</p>
                        </div>

                        <form className="dh-form" action={formAction} method="POST">
                            <input type="hidden" name="_next" value={nextUrl} />
                            <input type="hidden" name="_captcha" value="false" />
                            <input type="hidden" name="_subject" value={subject} />
                            <input type="hidden" name="_template" value="table" />
                            <input type="hidden" name="Page" value={pagePath} />

                            <div className="dh-form-grid">
                                <input name="First Name" placeholder="First Name" required />
                                <input name="Last Name" placeholder="Last Name" required />
                                <input name="Email" type="email" placeholder="Email" required />
                                <input name="Phone" placeholder="Phone" required />
                                <textarea
                                    name="Project Details"
                                    placeholder="Tell us about your deck project"
                                    rows="5"
                                />
                            </div>

                            <button type="submit" className="dh-form-btn">
                                Get My Free Estimate
                            </button>

                            <p className="dh-form-note">
                                No spam. By submitting this form, you agree to receive calls and texts.
                                Message and data rates may apply.
                            </p>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}