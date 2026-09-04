import React, { useEffect, useState } from "react";
import "../styles/Layout.css";
import Header from "../components/Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const formatPhoneNumber = (value) => {
    const numbers = value.replace(/\D/g, "").slice(0, 10);

    if (numbers.length === 0) return "";
    if (numbers.length < 4) return `(${numbers}`;
    if (numbers.length < 7) {
      return `(${numbers.slice(0, 3)}) ${numbers.slice(3)}`;
    }

    return `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6, 10)}`;
  };

  const handlePhoneChange = (e) => {
    setPhone(formatPhoneNumber(e.target.value));
  };

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="layout">
      <Header />
      <main className="site-container">{children}</main>
      <Footer />

      {/* Mobile only sticky bar */}
      <div className="bottom-sticky-bar">
        <a href="tel:8597657267" className="bottom-call-btn">
          <span className="bottom-btn-label">Call Us</span>
          <span className="bottom-btn-value">(859) 765-7267</span>
        </a>

        <button
          type="button"
          className="bottom-quote-btn"
          onClick={() => setIsQuoteOpen(true)}
        >
          FREE Estimate
        </button>
      </div>

      {/* Popup */}
      {isQuoteOpen && (
        <div
          className="quote-popup-overlay"
          onClick={() => setIsQuoteOpen(false)}
        >
          <div
            className="quote-popup"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="quote-popup-close"
              onClick={() => setIsQuoteOpen(false)}
              aria-label="Close popup"
              type="button"
            >
              ×
            </button>

            <h3>Request a Free Estimate</h3>
            <p>Fill out a few details and our team will contact you shortly.</p>

            <form
              action="/api/lead"
              method="POST"
              className="quote-popup-form"
            >
              <input
                type="hidden"
                name="_subject"
                value="New Mobile Quote Request - Yellowstone Renovation"
              />
              <input
                type="hidden"
                name="_next"
                value="https://yellowstonerenovation.com/thank-you"
              />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input
                type="hidden"
                name="Source"
                value="Mobile Sticky Bar Popup"
              />
              <input
                type="hidden"
                name="Page URL"
                value={typeof window !== "undefined" ? window.location.href : ""}
              />

              <input
                type="text"
                name="Name"
                placeholder="Your Name"
                autoComplete="name"
                required
              />

              <select
                name="Service"
                value={service}
                onChange={(e) => setService(e.target.value)}
                required
              >
                <option value="">Select Service</option>
                <option value="Decking">Decking</option>
                <option value="Fencing">Fencing</option>
                <option value="Siding">Siding</option>
                <option value="Windows">Windows</option>
                <option value="Remodeling">Remodeling</option>
                <option value="Other">Other</option>
              </select>

              <input
                type="tel"
                name="Phone"
                placeholder="Phone Number"
                value={phone}
                onChange={handlePhoneChange}
                autoComplete="tel"
                inputMode="tel"
                required
              />

              <textarea
                name="Message"
                placeholder="Tell us a little about your project"
                rows="4"
              />

              <button type="submit">Get My Free Estimate</button>
            </form>
          </div>
        </div>
      )}

      {/* Scroll to top button - all pages, all devices */}
      <button
        type="button"
        className={`scroll-top-btn ${showScrollTop ? "show" : ""}`}
        onClick={handleScrollTop}
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </div>
  );
}