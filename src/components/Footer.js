import React from "react";
import "../styles/Footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-inner">
                {/* === Column 1: Logo & Contact === */}
                <div className="footer-col">
                    <a href="/" className="footer-logo-link">
                        <img
                            src="/images/logo.png"
                            alt="Yellowstone Renovation"
                            className="footer-logo"
                        />
                    </a>
                    <p className="footer-about">
                        <strong>Licensed & Insured</strong><br />
                        Contractor License<br /><br />

                        <strong>Contact Us</strong><br />
                        <a href="tel:8597657267">(859) 765-7267</a><br />
                        <a href="mailto:renovationyellowstone@gmail.com">
                            renovationyellowstone@gmail.com
                        </a><br /><br />

                        <strong>Location</strong><br />
                        Lexington City & Nearby Areas
                    </p>
                </div>

                {/* === Column 2: Why Us === */}
                <div className="footer-col">
                    <h4>Why Us</h4>
                    <ul>
                        <li>✔️ Licensed & Insured Experts</li>
                        <li>✔️ Fast Estimates & Transparent Pricing</li>
                        <li>✔️ High-Quality Workmanship</li>
                        <li>✔️ Family-Owned & Locally Trusted</li>
                        <li>✔️ 5-Star Rated Remodeling Team</li>
                    </ul>
                </div>

                {/* === Column 3: Services === */}
                <div className="footer-col">
                    <h4>Our Services</h4>
                    <ul>
                        <li><a href="/siding-replacement">Siding Installation</a></li>
                        <li><a href="/james-hardie-siding">James Hardie Siding</a></li>
                        <li><a href="/windows">Window Replacement</a></li>
                        <li><a href="/painting">Painting </a></li>
                        <li><a href="/decking">Deck Builder</a></li>
                        <li><a href="/custom-decks">Custom Decks</a></li>
                    </ul>
                </div>

                {/* === Column 4: Areas Served === */}
                <div className="footer-col">
                    <h4>Areas Served</h4>
                    <ul>
                        <li><a href="/cities/lexington-ky">Lexington, KY</a></li>
                        <li><a href="/cities/richmond-ky">Richmond, KY</a></li>
                        <li><a href="/cities/nicholasville-ky">Nicholasville, KY</a></li>
                        <li><a href="/cities/georgetown-ky">Georgetown, KY</a></li>
                        <li><a href="/cities/versailles-ky">Versailles, KY</a></li>
                        <li><a href="/cities/winchester-ky">Winchester, KY</a></li>
                        <li><a href="/cities/">View Full Service Area</a></li>
                    </ul>
                </div>
            </div>

            {/* === Review Logos === */}
            <div className="footer-logos">
                <a href="" target="_blank" rel="noopener noreferrer">
                    <img src="/icons/bbb-logo.webp" alt="BBB" />
                </a>
                <a href="https://www.google.com/maps/place/Yellowstone+Renovation" target="_blank" rel="noopener noreferrer">
                    <img src="/icons/google-reviews.webp" alt="Google" />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                    <img src="/icons/yelp.webp" alt="Yelp" />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                    <img src="/icons/angi.webp" alt="Angi" />
                </a>
            </div>

            {/* === Bottom Bar === */}
            <div className="footer-bottom">
                <p>
                    © {new Date().getFullYear()} Yellowstone Renovation. All Rights Reserved. |{" "}
                    <a href="/privacy-policy">Privacy Policy</a> |{" "}
                    <a href="/terms-of-service">Terms of Service</a>
                </p>
                
            </div>
        </footer>
    );
}
