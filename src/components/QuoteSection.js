import React, { useState } from "react";
import "../styles/QuoteSection.css";
import "../styles/HeroSection.css"; // reuse hero popup styles

export default function QuoteSection() {
    const [showPopup, setShowPopup] = useState(false);

    return (
        <>
            {/* ===== QUOTE SECTION ===== */}
            <section className="quote-section">
                <div className="quote-bg">
                    <div className="quote-container">
                        {/* LEFT IMAGE */}
                        <div className="quote-image">
                            <img
                                src="/images/worker.png" // ✅ Your requested worker image
                                alt="Yellowstone Renovation worker"
                                loading="lazy"
                            />
                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="quote-content">
                            <div className="quote-line"></div>
                            <h2>
                                Want to know the <span>exact cost</span> of your project?
                            </h2>
                            <p>
                                Get a fast, detailed estimate for your deck, siding, or exterior
                                renovation from our local Yellowstone Renovation team.
                            </p>
                            <button
                                className="quote-btn"
                                onClick={() => setShowPopup(true)}
                            >
                                Get a Free Quote
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== POPUP ===== */}
            {showPopup && (
                <div
                    className="hero-deck-popup-overlay"
                    onClick={() => setShowPopup(false)}
                >
                    <div
                        className="hero-deck-popup-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="hero-deck-popup-close"
                            onClick={() => setShowPopup(false)}
                        >
                            ×
                        </button>

                        <h2>Request Your Free Deck Estimate</h2>
                        <p>
                            Fill out the form below and our team will contact you within one
                            business day with your custom quote.
                        </p>

                        {/* ✅ FormSubmit works here with auto redirect */}
                        <form
                            className="hero-deck-popup-form"
                            action="/api/lead"
                            method="POST"
                        >
                            {/* redirect to thank-you page */}
                            <input
                                type="hidden"
                                name="_next"
                                value="https://yellowstonerenovation.com/thank-you/"
                            />

                            {/* disable captcha */}
                            <input type="hidden" name="_captcha" value="false" />

                            {/* email subject */}
                            <input
                                type="hidden"
                                name="_subject"
                                value="New Quote Request — Yellowstone Renovation"
                            />

                            {/* label the source */}
                            <input
                                type="hidden"
                                name="form_origin"
                                value="Quote Section Popup"
                            />

                            {/* form fields */}
                            <input
                                type="text"
                                name="fullName"
                                placeholder="Full name"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                required
                            />
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone number"
                                required
                            />
                            <input
                                type="text"
                                name="address"
                                placeholder="Project address (optional)"
                            />
                            <textarea
                                name="projectDetails"
                                placeholder="Tell us about your deck, siding or remodel (optional)"
                                rows="3"
                                style={{ resize: "vertical" }}
                            />

                            <button type="submit" className="orange-quote-btn">
                                Submit Request
                            </button>
                        </form>

                        <p className="hero-deck-popup-note">
                            Your info goes directly to Yellowstone Renovation.
                            No spam. No sharing. Just your custom quote.
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}
