import React, { useEffect, useState } from "react";
import "../styles/HeroSplit1.css";

const PhoneIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
            d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.3 1.3.4 2.6.6 4 .6.7 0 1.2.5 1.2 1.2v3.5c0 .7-.5 1.2-1.2 1.2C10.8 21.4 2.6 13.2 2.6 3.4c0-.7.5-1.2 1.2-1.2h3.5c.7 0 1.2.5 1.2 1.2 0 1.4.2 2.8.6 4 .1.4 0 .9-.3 1.2l-2.2 2.2Z"
            fill="currentColor"
        />
    </svg>
);

const CalendarIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
            d="M7 2v3M17 2v3M4 9h16M6 5h12c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
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

const ToolsIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
            d="m14.5 6.5 3-3 3 3-3 3-3-3ZM3 21l8.2-8.2M7 3l4 4M4 6l6 6M13 11l8 8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const UsersIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
            d="M16 21v-2c0-2.2-1.8-4-4-4H7c-2.2 0-4 1.8-4 4v2M9.5 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM21 21v-2c0-1.9-1.3-3.5-3-3.9M16 3.1a4 4 0 0 1 0 7.8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
        />
    </svg>
);

const CheckIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="m5 12 4 4 10-10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
);

const GiftIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
            d="M20 12v9H4v-9M2 7h20v5H2V7ZM12 21V7M12 7H8.5C7.1 7 6 5.9 6 4.5S7.1 2 8.5 2C11 2 12 7 12 7ZM12 7h3.5C16.9 7 18 5.9 18 4.5S16.9 2 15.5 2C13 2 12 7 12 7Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
        />
    </svg>
);

export default function HeroSplit1({
    img,
    heroImage = "/images/deck-builder12.webp",
    alt = "Deck builder in Lexington KY",

    eyebrow = "Lexington, KY’s Trusted Deck Builder",
    reviews = "64+ 5-Star Reviews",
    title1 = "Lexington’s",
    titleGreen = "Deck Builder",
    title2 = "Custom Composite & Wood Decks Built to Last",
    text = "Beautiful composite decks, pressure-treated wood decks, and deck replacement built for your home, your family, and Kentucky weather.",
    promo = "Free On site Estimate + $1,500 Off",

    btnText = "Schedule Free Estimate",
    phoneDisplay = "(859) 765-7267",
    phoneTel = "8597657267",

    emailTo = "info@yellowstonerenovation.com",
    nextUrl = "https://yellowstonerenovation.com/thank-you/",
    subject = "New Deck Estimate Request",
}) {
    const [formOpen, setFormOpen] = useState(false);
    const [pagePath, setPagePath] = useState("");

    useEffect(() => {
        if (typeof window !== "undefined") {
            setPagePath(window.location.pathname);
        }
    }, []);

    useEffect(() => {
        if (!formOpen) return;

        const onKey = (e) => {
            if (e.key === "Escape") setFormOpen(false);
        };

        const oldOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        document.addEventListener("keydown", onKey);

        return () => {
            document.body.style.overflow = oldOverflow;
            document.removeEventListener("keydown", onKey);
        };
    }, [formOpen]);

    const finalImage = img || heroImage;
    const formAction = "/api/lead";

    return (
        <>
            <section className="heroSplit1">
                <div className="heroSplit1__inner">
                    <div className="heroSplit1__copy">
                        <div className="heroSplit1__eyebrow">
                            <span></span>
                            {eyebrow}
                        </div>

                        <h1>
                            <span>{title1}</span>
                            <strong>{titleGreen}</strong>
                        </h1>

                        <h2>{title2}</h2>

                        <p>{text}</p>

                        <div className="heroSplit1__promo">
                            <GiftIcon />
                            <b>Limited Time:</b>
                            <span>{promo}</span>
                        </div>

                        <div className="heroSplit1__mobileProof">
                            <span>
                                <CheckIcon /> Local, Family-Owned & Trusted
                            </span>
                            <em></em>
                            <span>{reviews}</span>
                            <b>★★★★★</b>
                        </div>

                        <div className="heroSplit1__checks">
                            <div>
                                <CheckIcon />
                                Local, Family-Owned & Operated
                            </div>
                            <div>
                                <CheckIcon />
                                Full-Service: Design, Materials, Permits & Installation
                            </div>
                            <div>
                                <CheckIcon />
                                On-Site Estimates With No Waiting Weeks for a Price
                            </div>
                            <div>
                                <CheckIcon />
                                Clean Process, Clear Communication, No Surprise Costs
                            </div>
                        </div>

                        <div className="heroSplit1__benefits">
                            <div className="heroSplit1__benefit">
                                <div className="heroSplit1__benefitIcon">
                                    <CalendarIcon />
                                </div>
                                <div>
                                    <b>On-Site Estimates</b>
                                    <span>No Waiting Weeks for Estimate</span>
                                </div>
                            </div>

                            <div className="heroSplit1__benefit">
                                <div className="heroSplit1__benefitIcon">
                                    <ToolsIcon />
                                </div>
                                <div>
                                    <b>Full-Service</b>
                                    <span>Design, Materials, Permits & Installation</span>
                                </div>
                            </div>

                            <div className="heroSplit1__benefit">
                                <div className="heroSplit1__benefitIcon">
                                    <ShieldIcon />
                                </div>
                                <div>
                                    <b>36-Month Workmanship Warranty</b>
                                    <span>Built to Last. Guaranteed.</span>
                                </div>
                            </div>

                            <div className="heroSplit1__benefit">
                                <div className="heroSplit1__benefitIcon">
                                    <UsersIcon />
                                </div>
                                <div>
                                    <b>Local, Family-Owned & Trusted</b>
                                    <span>Proudly Serving Lexington & Nearby Areas</span>
                                </div>
                            </div>
                        </div>

                        <div className="heroSplit1__actions">
                            <button type="button" className="heroSplit1__btn" onClick={() => setFormOpen(true)}>
                                <CalendarIcon />
                                <span>{btnText}</span>
                                <em>→</em>
                            </button>

                            <a href={`tel:${phoneTel}`} className="heroSplit1__phone">
                                <PhoneIcon />
                                {phoneDisplay}
                            </a>
                        </div>
                    </div>

                    <div className="heroSplit1__imageWrap">
                        <img src={finalImage} alt={alt} loading="eager" />
                        <div className="heroSplit1__fade"></div>

                        <div className="heroSplit1__offer">
                            <div>Limited Time Offer</div>
                            <b>Free 3D Design</b>
                            <strong>+</strong>
                            <h3>$1,500 Off</h3>
                            <span>Your Project</span>
                        </div>
                    </div>
                </div>
            </section>

            {formOpen && (
                <div className="heroSplit1__modalOverlay" onClick={() => setFormOpen(false)}>
                    <div className="heroSplit1__modal" onClick={(e) => e.stopPropagation()}>
                        <button
                            type="button"
                            className="heroSplit1__modalClose"
                            onClick={() => setFormOpen(false)}
                            aria-label="Close form"
                        >
                            ×
                        </button>

                        <div className="heroSplit1__modalHead">
                            <h3>
                                Get Your <b>Free Deck Estimate</b>
                            </h3>
                            <p>Fast on-site estimate. No waiting weeks for a price.</p>
                        </div>

                        <form className="heroSplit1__form" action={formAction} method="POST">
                            <input type="hidden" name="_next" value={nextUrl} />
                            <input type="hidden" name="_captcha" value="false" />
                            <input type="hidden" name="_subject" value={subject} />
                            <input type="hidden" name="_template" value="table" />
                            <input type="hidden" name="Page" value={pagePath} />

                            <div className="heroSplit1__formGrid">
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

                            <button type="submit" className="heroSplit1__formBtn">
                                Get My Free Estimate
                            </button>

                            <p className="heroSplit1__formNote">
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