import React from "react";
import "../styles/Hero.css";

export default function Hero({
    topText = "TOP HOME REMODELING CONTRACTOR IN LEXINGTON, KY",
    title = "Welcome to Yellowstone Renovation",
    description = "At Yellowstone Remodeling, we turn houses into thoughtfully designed, livable spaces tailored to your lifestyle. Whether you’re renovating a single room or transforming your home entirely, our team delivers expert workmanship and personalized service with every project.",
    offerTitle = "Book Now and Get 15% OFF Your Renovation Upgrade!",
    offerSubtitle = "Request a Free, No-Obligation Quote & Expert Advice Today!",
    backgroundImage = "/images/house-bg.webp",
}) {
    return (
        <section
            className="hero-section"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="hero-overlay"></div>

            <div className="hero-container">
                {/* LEFT SIDE */}
                <div className="hero-left">
                    <p className="hero-top">{topText}</p>
                    <h1>{title}</h1>
                    <p className="hero-desc">{description}</p>

                    <div className="buttons">
                        <a href="#" className="btn yellow">OUR SERVICES</a>
                        <a href="tel:8597657267" className="btn green">CALL US</a>
                        <a href="#" className="btn outline">TEXT US</a>
                    </div>

                    <div className="rating">⭐⭐⭐⭐⭐ Our Rating 4.9/5 Based On 65 Reviews</div>

                    <div className="logos">
                        <img src="../icons/bbb-logo.webp" alt="BBB" />
                        <img src="../icons/google-reviews.webp" alt="Google Reviews" />
                        <img src="../icons/jameshardie.webp.webp" alt="James Hardie" />
                        <img src="../icons/yelp.webp" alt="Yelp" />
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="hero-right">
                    <h3>{offerTitle}</h3>
                    <p>{offerSubtitle}</p>

                    <form className="hero-form">
                        <input type="text" placeholder="Full Name" required />
                        <input type="email" placeholder="Email" required />
                        <input type="tel" placeholder="Phone Number" required />
                        <select required>
                            <option value="">What service are you looking for?</option>
                            <option>Kitchen Remodeling</option>
                            <option>Bathroom Remodeling</option>
                            <option>Siding Installation</option>
                            <option>Deck Builder</option>
                        </select>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
}
