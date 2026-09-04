import React, { useState, useEffect } from "react";
import "../styles/FloorHeroSlider.css";

const slides = [
    {
        id: 1,
        title: "Luxury Vinyl Plank Flooring",
        subtitle:
            "Beautiful. Durable. Waterproof. Perfect for modern homes and high-traffic areas.",
        image: "/images/kitchen2.webp",
        offer: "$1,500 OFF + FREE 3D Floor Design Consultation",
        expiry: "OCT 2025 SPECIAL",
    },
    {
        id: 2,
        title: "Hardwood Flooring Installation",
        subtitle:
            "Add timeless warmth and elegance to your home with expert hardwood installation.",
        image: "/images/kitchen5.webp",
        offer: "FREE Estimate + 5-Year Labor Warranty",
        expiry: "OCT 2025 OFFER",
    },
    {
        id: 3,
        title: "Tile Flooring Experts",
        subtitle:
            "From kitchens to bathrooms — precision tile installation with flawless finishes.",
        image: "/images/kitchen7.webp",
        offer: "Up to 15% OFF Custom Tile Projects",
        expiry: "LIMITED-TIME DEAL",
    },
];

export default function FloorHeroSlider() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(
            () => setCurrent((prev) => (prev + 1) % slides.length),
            7000
        );
        return () => clearInterval(timer);
    }, []);

    const slide = slides[current];

    return (
        <section
            className="floorhero-full"
            style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${slide.image})`,
            }}
        >
            <div className="floorhero-container">
                {/* ==== LEFT CONTENT ==== */}
                <div className="floorhero-left modern">
                    <div className="left-tag">
                        <span className="highlight">Quality • Style • Durability</span>
                    </div>

                    <h1 className="modern-title">{slide.title}</h1>

                    <p className="modern-desc">
                        {slide.subtitle}
                    </p>

                    <div className="modern-buttons">
                        <a href="/projects/" className="btn-modern primary">
                            <span>View Projects</span>
                            <i className="arrow">→</i>
                        </a>
                        <a href="/contact/" className="btn-modern outline">
                            <span>Get a Quote</span>
                            <i className="arrow">→</i>
                        </a>
                    </div>

                    <div className="rating-bar">
                        <img src="/icons/yelp.webp" alt="Rating" />
                        <span>4.9/5 based on 60+ verified reviews</span>
                    </div>
                </div>


                {/* ==== RIGHT FORM ==== */}
                <div className="offer-form">
                    <div className="offer-badge">{slide.expiry}</div>
                    <h2>{slide.offer}</h2>
                    <p className="offer-sub">Request a FREE No-Obligation Quote & Expert Advice!</p>
                    <form>
                        <div className="form-row">
                            <input type="text" placeholder="First Name" required />
                            <input type="text" placeholder="Last Name" required />
                        </div>
                        <div className="form-row">
                            <input type="email" placeholder="Email" required />
                            <input type="tel" placeholder="Phone" required />
                        </div>
                        <textarea placeholder="Tell us about your project" rows="2"></textarea>
                        <button type="submit" className="get-estimate">
                            Get FREE Estimate →
                        </button>
                        <p className="form-note">
                            *By submitting this form, you consent to receive calls and texts
                            about your project. Msg/data rates may apply. Reply STOP to opt out.
                        </p>
                    </form>
                </div>
            </div>

            <div className="dots">
                {slides.map((_, i) => (
                    <span
                        key={i}
                        className={`dot ${i === current ? "active" : ""}`}
                        onClick={() => setCurrent(i)}
                    ></span>
                ))}
            </div>
        </section>
    );
}
