import React from "react";
import "../styles/Hero1.css";

export default function Hero1({
    topText = "YOUR TRUSTED LOCAL EXPERTS",
    title = "Transforming Homes with Quality & Care",
    description = "At Yellowstone Remodeling, we combine design, craftsmanship, and precision to create spaces that fit your lifestyle. Whether it’s a simple update or a complete home renovation, we bring your vision to life.",
    buttonText = "GET STARTED TODAY",
    buttonLink = "/contact",
    backgroundImage = "/images/house-bg.webp",
    overlayOpacity = 0.6,
}) {
    return (
        <section
            className="hero1-section"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div
                className="hero1-overlay"
                style={{ backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})` }}
            ></div>

            <div className="hero1-container">
                <p className="hero1-top">{topText}</p>
                <h1 className="hero1-title">{title}</h1>
                <p className="hero1-desc">{description}</p>
                <a href={buttonLink} className="hero1-btn">
                    {buttonText}
                </a>
            </div>
        </section>
    );
}