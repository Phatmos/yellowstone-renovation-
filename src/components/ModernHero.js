import React from "react";
import "../styles/ModernHero.css";

export default function ModernHero({
    title = "Kentucky’s Most Trusted Full-Service Remodeler",
    subtitle = "At Yellowstone Renovation, we’re more than builders — we’re craftsmen dedicated to transforming Kentucky homes with honesty, precision, and lasting quality.",
    stats = [
        { number: "10+", label: "Years of Experience" },
        { number: "250+", label: "Completed Projects" },
        { number: "5★", label: "Client Rating" },
    ],
    buttonText = "Learn More About Us",
    buttonLink = "/contact",
    image = "/images/Yellowstone-Team.webp",
}) {
    return (
        <section className="modern-hero-wrapper">
            <div className="modern-hero-container">
                {/* LEFT TEXT BLOCK */}
                <div className="modern-hero-left">
                    <div className="text-content">
                        <h1>{title}</h1>
                        <p className="subtitle">{subtitle}</p>

                        <a href={buttonLink} className="main-btn">
                            {buttonText}
                        </a>

                        <div className="stats">
                            {stats.map((stat, index) => (
                                <div key={index} className="stat-item">
                                    <h3>{stat.number}</h3>
                                    <p>{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* RIGHT IMAGE BLOCK */}
                <div className="modern-hero-right">
                    <img src={image} alt="Yellowstone Renovation Project" />
                </div>
            </div>
        </section>
    );
}
