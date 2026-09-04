import React from "react";
import "../styles/FloorHero.css";

export default function FloorHero({
    title = "Flawless Flooring. Built to Last.",
    subtitle = "Transform your home with luxury flooring designed for beauty, comfort, and durability.",
    backgroundImage = "/images/flooring-modern.jpg",
    buttonText = "Request Your Free Estimate",
    buttonLink = "#",
    stat1 = "15+ Years Experience",
    stat2 = "5-Star Rated Contractor",
    stat3 = "Premium Materials",
    formTitle = "Request a Free Estimate",
    overlayOpacity = 0.45,
}) {
    return (
        <section
            className="floorhero-new"
            style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,${overlayOpacity}), rgba(0,0,0,${overlayOpacity})), url(${backgroundImage})`,
            }}
        >
            <div className="floorhero-inner">
                {/* === LEFT TEXT === */}
                <div className="floorhero-left">
                    <div className="floorhero-tagline">LEXINGTON FLOORING EXPERTS</div>
                    <h1>{title}</h1>
                    <p>{subtitle}</p>

                    <div className="floorhero-stats">
                        <span>🏆 {stat1}</span>
                        <span>⭐ {stat2}</span>
                        <span>🪵 {stat3}</span>
                    </div>

                    <a href={buttonLink} className="floorhero-btn">
                        {buttonText}
                    </a>
                </div>

                {/* === FLOATING FORM === */}
                <div className="floorhero-floating-form">
                    <h3>{formTitle}</h3>
                    <form>
                        <input type="text" placeholder="Full Name" required />
                        <input type="tel" placeholder="Phone Number" required />
                        <select required>
                            <option value="">Select Flooring Type</option>
                            <option>Hardwood</option>
                            <option>Luxury Vinyl</option>
                            <option>Laminate</option>
                            <option>Tile</option>
                            <option>Carpet</option>
                        </select>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
}
