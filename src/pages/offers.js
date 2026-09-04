import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO"; // ✅ PascalCase ok
import "../styles/offers.css";

export default function OffersPage() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOffer, setSelectedOffer] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const emailTo = "renovationyellowstone@gmail.com"; // your verified FormSubmit email

    // ✅ Auto-update expiry each month
    useEffect(() => {
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth() + 1;
        const lastDay = new Date(year, month, 0).getDate();
        const monthName = today.toLocaleString("default", { month: "long" });
        setExpiryDate(`${monthName} ${lastDay}`);
    }, []);

    const openForm = (offer) => {
        setSelectedOffer(offer);
        setIsOpen(true);
        setIsSubmitted(false);
    };

    const closeForm = () => setIsOpen(false);

    // ✅ FormSubmit handler
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;

        const formData = {
            name: form.name.value.trim(),
            email: form.email.value.trim(),
            phone: form.phone.value.trim(),
            message: form.message.value.trim(),
            offer: selectedOffer,
        };

        try {
            await fetch(`https://formsubmit.co/ajax/${emailTo}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            setTimeout(() => {
                const query = new URLSearchParams({
                    offer: selectedOffer,
                    name: form.name.value.trim(),
                    email: form.email.value.trim(),
                }).toString();

                window.location.href = `/success-offer?${query}`;
            }, 2000);
        } catch (error) {
            console.error("Form submission error:", error);
            alert("Submission failed. Please try again.");
        }
    };

    const offers = [
        {
            title: "$500 OFF Professional Deck Installation",
            description:
                "Transform your backyard with a new custom-built deck — now $500 OFF for a limited time. Quality materials, expert craftsmanship, and fast turnaround.",
            image: "/images/deck-builder.webp",
        },
        {
            title: "$1,000 OFF Complete Siding Replacement",
            description:
                "Get up to $1,000 OFF when replacing your home's siding with premium James Hardie products. Boost curb appeal and protect your home this season.",
            image: "/images/remodler1.webp",
        },
        {
            title: "$800 OFF Energy-Efficient Window Upgrade",
            description:
                "Save energy and enhance comfort with modern, double-pane windows — now $800 OFF your full home window installation.",
            image: "/images/windows1.webp",
        },
    ];

    return (
        <Layout>
            <SEO
                title="Special Offers | Yellowstone Renovation"
                description="Explore limited-time offers on kitchen remodeling, siding, and deck installations."
                pathname="/offers"
            />

            <section className="offers-section">
                <h1 className="offers-title">SPECIAL OFFERS FROM YELLOWSTONE RENOVATION</h1>
                <p className="offers-subtitle">
                    Exclusive promotions valid until <span>{expiryDate}</span>
                </p>

                <div className="offers-grid">
                    {offers.map((offer, index) => (
                        <div className="offer-card" key={index}>
                            <div className="offer-inner">
                                {/* FRONT */}
                                <div
                                    className="offer-front"
                                    style={{ backgroundImage: `url(${offer.image})` }}
                                >
                                    <div className="offer-expire">Expires {expiryDate}</div>
                                    <div className="offer-title-container">
                                        <h2>{offer.title}</h2>
                                        <div className="gold-line"></div>
                                    </div>
                                </div>

                                {/* BACK */}
                                <div className="offer-back">
                                    <div className="offer-back-content">
                                        <p>{offer.description}</p>
                                        <button onClick={() => openForm(offer.title)}>Get Offer</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ✅ Modal */}
            {isOpen && (
                <div
                    className="offer-modal"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Offer form"
                >
                    <div className="offer-modern-form">
                        {/* Close button accessible via keyboard */}
                        <span
                            className="close-btn"
                            role="button"
                            tabIndex={0}
                            onClick={closeForm}
                            onKeyDown={(e) => e.key === "Enter" && closeForm()}
                            aria-label="Close form"
                        >
                            &times;
                        </span>

                        {!isSubmitted ? (
                            <>
                                <h2 className="form-heading">Claim Your Offer</h2>
                                <p className="form-subtext">
                                    {selectedOffer} — Fill out your details below and we’ll contact you
                                    within 24 hours.
                                </p>

                                <form onSubmit={handleSubmit} className="modern-form-body">
                                    {/* ✅ Hidden FormSubmit Fields */}
                                    <input type="hidden" name="_template" value="table" />
                                    <input
                                        type="hidden"
                                        name="_subject"
                                        value="New Offer Submission - Yellowstone Renovation"
                                    />
                                    <input
                                        type="hidden"
                                        name="_next"
                                        value="https://yellowstonerenovation.com/success"
                                    />

                                    <div className="form-field">
                                        <label htmlFor="name">Your Name</label>
                                        <input id="name" type="text" name="name" placeholder="Full Name" required />
                                    </div>

                                    <div className="form-field">
                                        <label htmlFor="email">Email</label>
                                        <input id="email" type="email" name="email" placeholder="you@email.com" required />
                                    </div>

                                    <div className="form-field">
                                        <label htmlFor="phone">Phone</label>
                                        <input id="phone" type="tel" name="phone" placeholder="(123) 456-7890" required />
                                    </div>

                                    <div className="form-field">
                                        <label htmlFor="message">Message (optional)</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows="3"
                                            placeholder="Tell us more about your project..."
                                        ></textarea>
                                    </div>

                                    <button type="submit" className="form-submit">
                                        Submit Offer
                                    </button>
                                </form>
                            </>
                        ) : (
                            <div className="thank-you-message">
                                <div className="check-icon">✅</div>
                                <h2>Thank You!</h2>
                                <p>Your offer has been successfully applied.</p>
                                <p>We’ll contact you soon to confirm your project details.</p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </Layout>
    );
}
