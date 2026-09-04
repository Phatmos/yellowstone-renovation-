import React, { useState, useRef } from "react";
import "../styles/HeroSection.css";

export default function HeroSection({
  backgroundImage = "/images/deck-hero.webp",
  customerImage = "/images/deck-happy-clients.webp",
  title = "Deck Builder in Lexington",
  subtitle = "Get your free deck consultation today — we’ll help you plan the right design, materials, and budget for your home. Proudly serving homeowners in Lexington and the surrounding areas.",
  city = "Lexington and surrounding areas",
  projectCount = "132+ projects completed in the past year",
  emailTo = "renovationyellowstone@gmail.com",
  features = [
    {
      icon: "/icons/n1.svg",
      title: "Custom Deck Design & 3D Visualization",
      text: "We provide complimentary 3D renderings so you can preview your new outdoor living space before construction begins.",
    },
    {
      icon: "/icons/n3.svg",
      title: "Up to 2-Year Workmanship Warranty",
      text: "We stand behind every project with one of the strongest warranties in the region, ensuring your deck lasts for decades.",
    },
    {
      icon: "/icons/n2.svg",
      title: "Transparent Pricing — No Hidden Costs",
      text: "All materials, permits, and cleanup are included upfront. You’ll never encounter surprise fees or extra charges.",
    },
  ],
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

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${emailTo}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          address: formData.address,
          phone: formData.phone,
          message: `New quote request from ${title} page (${city})`,
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

  // Validate phone before opening popup
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
      {/* ===== HERO SECTION ===== */}
      <section
        className="hero-deck-section"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="hero-deck-overlay"></div>

        <div className="hero-deck-container">
          {/* LEFT IMAGE */}
          <div className="hero-deck-left">
            <img
              src={customerImage}
              alt="Happy homeowners on new deck"
              className="hero-deck-customer"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="hero-deck-right">
            <h1>{title}</h1>

            <div className="hero-deck-badge">
              <img
                src="/icons/business-svgrepo-com.svg"
                alt="Projects completed"
                className="hero-deck-badge-icon"
              />
              {projectCount}
            </div>

            <p className="hero-deck-subtext">{subtitle}</p>

            {/* PHONE INPUT */}
            <div className="hero-deck-form">
              <div className="hero-deck-phone-input-group">
                <div className="hero-deck-flag-select">
                  <img
                    src="/flags/us.svg"
                    alt="U.S. flag"
                    className="hero-deck-flag-icon"
                  />
                  <span className="hero-deck-country-code">+1</span>
                </div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your phone number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="hero-deck-phone-input"
                  required
                />
              </div>

              <button
                className="hero-deck-quote-btn orange-quote-btn"
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
        </div>

        {/* ===== FEATURES ===== */}
        <div className="hero-deck-features-section">
          <div className="hero-deck-features-container">
            {features.map((f, i) => (
              <div className="hero-deck-feature-card" key={i}>
                <div className="hero-deck-feature-icon">
                  <img src={f.icon} alt={f.title} />
                </div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            ))}
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

            <h2>Request Your Free Estimate</h2>
            <p>
              Complete the form below, and our team will contact you within one business day.
            </p>

            {error && <p className="hero-deck-popup-error">{error}</p>}

            <form
              ref={formRef}
              className="hero-deck-popup-form"
              onSubmit={handleSubmit}
            >
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
              <button type="submit" className="orange-quote-btn">
                Submit Request
              </button>
            </form>

            <p className="hero-deck-popup-note">
              Your information will only be used by Yellowstone Renovation to provide your estimate — never shared or sold.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
