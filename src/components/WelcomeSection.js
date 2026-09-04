import React from "react";
import "../styles/WelcomeSection.css";

export default function WelcomeSection() {
    return (
        <section className="welcome-section">
            <div className="content">
                <div className="text">
                    <h2>WELCOME TO</h2>
                    <h3 className="main-title">
                        <span>Yellowstone Renovation</span> — Lexington’s Exterior Experts
                    </h3>
                    <p className="subtitle">
                        <strong>Trusted Deck & Siding Contractor Serving Central Kentucky</strong>
                    </p>
                    <p>
                        At Yellowstone Renovation, we specialize in transforming home exteriors that
                        stand the test of time. Our services include <strong>custom deck building,
                            siding replacement, window installation,</strong> and full exterior upgrades —
                        all completed by our experienced local craftsmen. With precision design, durable
                        materials, and clean job sites, we bring comfort, beauty, and value to every
                        Kentucky home we touch.
                    </p>
                    <button className="btn">VIEW OUR SERVICES</button>
                </div>

                <div className="image">
                    <img src="/images/3DHouse.webp" alt="3D House Exterior" />
                </div>
            </div>
        </section>
    );
}
