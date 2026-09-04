import React from "react";
import "../styles/AboutHeroSimple.css";

export default function AboutHeroSimple({
    stars = "⭐⭐⭐⭐⭐",
    title = "CONSTRUCTION COMPANY",
    subtitle = "IN LEXINGTON, KY",
    description = "Our team of skilled professionals is dedicated to delivering high-quality workmanship and exceptional customer service on every project, no matter the size.",
    button1Text,
    button1Link,
    button2Text,
    button2Link,
    bgImage = "/images/Yellowstone-Team.webp",
    accentColor = "#1faa00", // default green
}) {
    const heroStyle = {
        background: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${bgImage}) center/cover no-repeat`,
    };

    return (
        <section className="about-hero-simple" style={heroStyle}>
            <div className="hero-overlay"></div>

            <div className="hero-container">
                <div className="hero-left">
                    <p className="stars">{stars}</p>

                    <h1>
                        {title} <br />
                        <span className="highlight" style={{ color: accentColor }}>
                            {subtitle}
                        </span>
                    </h1>

                    <p className="hero-desc">{description}</p>

                    {/* Buttons — show only if provided */}
                    <div className="buttons">
                        {button1Text && (
                            <a
                                href={button1Link}
                                className="btn primary"
                                style={{ background: accentColor }}
                            >
                                {button1Text}
                            </a>
                        )}
                        {button2Text && (
                            <a
                                href={button2Link}
                                className="btn outline"
                                style={{ borderColor: accentColor, color: accentColor }}
                            >
                                {button2Text}
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
