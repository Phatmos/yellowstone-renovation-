import React, { useState, useRef } from "react";
import "../styles/HeroModern.css";

export default function HeroModern({
    bgImage = "/images/modern-home.jpg",
    subtitle = "Luxury Home Remodeling",
    title = "Crafted for Modern Living",
    description = "Transform your home with expert remodeling and custom design. We blend functionality, comfort, and beauty — delivering exceptional results on time, every time.",
    cardImage = "/images/project-preview.jpg",
    location = "Lexington, KY",
    tags = ["Kitchen", "Bath"],
    projectTitle = "Urban Elegance",
    projectPrice = "$45,000",
    accentColor = "#0a923d",
}) {
    const [showPopup, setShowPopup] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        address: "",
        phone: "",
    });
    const [error, setError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const formRef = useRef();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const response = await fetch("/api/lead", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: formData.fullName,
                    email: formData.email,
                    address: formData.address,
                    phone: formData.phone,
                    message: "New remodeling quote request from Yellowstone Renovation",
                }),
            });

            if (response.ok) {
                window.location.href = "/thank-you";
            } else {
                setError("Error submitting form. Please try again.");
            }
        } catch (err) {
            console.error(err);
            setError("Network error. Please try again later.");
        }
    };

    const handleQuoteClick = () => {
        if (!formData.phone || formData.phone.trim().length < 7) {
            setPhoneError("Please enter a valid phone number.");
            return;
        }
        setPhoneError("");
        setShowPopup(true);
    };

    return (
        <>
            {/* === HERO SECTION === */}
            <section
                className="hero-modern"
                style={{ backgroundImage: `url('${bgImage}')` }}
            >
                <div className="hero-overlay"></div>

                <div className="hero-container">
                    {/* === LEFT SIDE === */}
                    <div className="hero-left">
                        <p className="hero-subtitle">{subtitle}</p>
                        <h1>{title}</h1>
                        <p className="hero-desc">{description}</p>

                        {/* PHONE INPUT + BUTTON */}
                        <div className="hero-modern-form">
                            <div className="hero-modern-phone-group">
                                <div className="hero-modern-flag-select">
                                    <img
                                        src="/flags/us.svg"
                                        alt="U.S. flag"
                                        className="hero-modern-flag-icon"
                                    />
                                    <span className="hero-modern-country-code">+1</span>
                                </div>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Your phone number"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="hero-modern-phone-input"
                                    required
                                />
                            </div>

                            <button
                                className="hero-modern-quote-btn"
                                style={{ backgroundColor: accentColor }}
                                onClick={handleQuoteClick}
                            >
                                Request a Free Quote
                            </button>
                        </div>

                        {phoneError && (
                            <p style={{ color: "orange", marginTop: "8px", fontSize: "0.95rem" }}>
                                {phoneError}
                            </p>
                        )}
                    </div>

                    {/* === RIGHT FLOATING CARD === */}
                    <a href="/projects" className="hero-card">
                        <img src={cardImage} alt={projectTitle} />
                        <div className="card-content">
                            <div className="card-top">
                                <span className="card-location" style={{ color: accentColor }}>
                                    {location}
                                </span>
                                <div className="card-tags">
                                    {tags.map((tag, i) => (
                                        <span key={i}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="card-bottom">
                                <h4>{projectTitle}</h4>
                                <p style={{ color: accentColor }}>{projectPrice}</p>
                            </div>
                        </div>
                    </a>
                </div>
            </section>

            {/* === POPUP === */}
            {showPopup && (
                <div className="hero-modern-popup-overlay" onClick={() => setShowPopup(false)}>
                    <div
                        className="hero-modern-popup-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="hero-modern-popup-close"
                            onClick={() => setShowPopup(false)}
                        >
                            ×
                        </button>

                        <h2>Request Your Free Estimate</h2>
                        <p>
                            Complete the form below and our remodeling team will contact you within one business day.
                        </p>

                        {error && <p className="hero-modern-popup-error">{error}</p>}

                        <form ref={formRef} className="hero-modern-popup-form" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="fullName"
                                placeholder="Full name"
                                value={formData.fullName}
                                onChange={handleInputChange}
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                            <input
                                type="text"
                                name="address"
                                placeholder="Project address (optional)"
                                value={formData.address}
                                onChange={handleInputChange}
                            />
                            <button
                                type="submit"
                                className="hero-modern-popup-btn"
                                style={{ backgroundColor: accentColor }}
                            >
                                Submit Request
                            </button>
                        </form>

                        <p className="hero-modern-popup-note">
                            Your information will only be used to provide your estimate — never shared or sold.
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}
