import React, { useRef } from "react";
import "../styles/Hero2.css";

export default function Hero2({
  topText,
  title,
  description,
  backgroundImage,
  overlayOpacity = 0.55,

  // ✅ Dynamic form values
  formTitle = "Free Wood Siding Estimate",
  formSubtitle = "Fill out the form below and our expert team will contact you within 24 hours!",
  selectLabel = "Select Wood Siding Service",
  selectOptions = [
    "Full Wood Siding Replacement",
    "Cedar Siding Installation",
    "Wood Siding Repair",
    "Painting & Staining",
  ],
  ctaText = "Get My Estimate",
  successRedirect = "/success", // ✅ Local success page
  emailTo = "renovationyellowstone@gmail.com",
}) {
  const formRef = useRef(null);

  // 🧠 Auto-generate expiration date (last day of current month)
  const currentDate = new Date();
  const monthName = currentDate.toLocaleString("default", { month: "long" });
  const year = currentDate.getFullYear();
  const lastDay = new Date(year, currentDate.getMonth() + 1, 0).getDate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = formRef.current;
    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const service = form.service.value.trim();
    const message = form.message.value.trim();

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          service,
          message,
        }),
      });

      if (!response.ok) throw new Error("Lead submission failed");

      const query = new URLSearchParams({
        name: `${firstName} ${lastName}`,
        email,
        service,
      }).toString();
      window.location.href = `${successRedirect}?${query}`;
    } catch (error) {
      console.error("Form submit error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section
      className="hero2-section"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* 🔲 Overlay */}
      <div
        className="hero2-overlay"
        style={{ backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})` }}
      ></div>

      <div className="hero2-container">
        {/* ==== LEFT CONTENT ==== */}
        <div className="hero2-left">
          {topText && <p className="hero2-top">{topText}</p>}
          <h1 className="hero2-title">{title}</h1>
          <p className="hero2-desc">{description}</p>

          <div className="hero2-rating">⭐⭐⭐⭐⭐ Rated #1 Local Exterior Experts</div>

          <div className="hero2-logos">
            <img src="/icons/bbb-logo.webp" alt="BBB" />
            <img src="/icons/google-reviews.webp" alt="Google Reviews" />
            <img src="/icons/yelp.webp" alt="Yelp" />
          </div>
        </div>

        {/* ==== RIGHT FORM CARD ==== */}
        <div className="hero2-form-card">
          <div className="hero2-offer-tag">
            {monthName.toUpperCase()} {year} SPECIAL
          </div>

          <h3 className="hero2-form-title">{formTitle}</h3>
          <p className="hero2-form-sub">{formSubtitle}</p>

          <form ref={formRef} className="hero2-form" onSubmit={handleSubmit}>
            {/* 🧍 Name Fields */}
            <div className="hero2-row">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                required
              />
            </div>

            {/* ✉️ Contact Info */}
            <div className="hero2-row">
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                required
              />
            </div>

            {/* 🧱 Dropdown */}
            <select name="service" required>
              <option value="">{selectLabel}</option>
              {selectOptions.map((o, i) => (
                <option key={i}>{o}</option>
              ))}
            </select>

            {/* 📝 Message */}
            <textarea
              rows="3"
              name="message"
              placeholder="Please describe your project"
            ></textarea>

            {/* 🟢 Submit Button */}
            <button type="submit">{ctaText}</button>

            {/* 🕓 Expiration Date */}
            <p className="hero2-expire-text">
              Offer expires {monthName} {lastDay}, {year}.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
