import React from "react";
import "../styles/AboutSection.css";

export default function AboutSection() {
    return (
        <section className="about-section">
            <div className="about-container">
                {/* LEFT LOGO */}
                <div className="about-left">
                    <img
                        src="/icons/elite.png"
                        alt="James Hardie Alliance Select Contractor"
                        className="about-logo"
                    />
                </div>

                {/* RIGHT TEXT */}
                <div className="about-right">
                    <h2 className="about-title">
                        <span className="about-accent">//</span> About Us
                    </h2>

                    <p className="about-text">
                        Yellowstone Renovation is a small, local company made up of a few hardworking people who truly care about what we do.
                        We’re not a big corporation — just a team that takes pride in every project and aims to deliver honest, high-quality work
                        for every client.
                    </p>

                    <p className="about-text">
                        Whether you need new deck, a siding, or a full exterior renovation, we’ll make it happen.
                        From start to finish, we focus on clear communication, fair pricing, and craftsmanship that lasts.
                        When you rely on us, you can count on real people who stand behind their work and care about your home.
                    </p>
                    <div className="about-highlight">
                        <span className="about-check">✔</span>
                        <strong>65 projects completed last year</strong>
                    </div>
                </div>
            </div>

            {/* LICENSE / INSURANCE / UBI BOXES */}
            <div className="about-credentials">
                <div className="about-cred-item">
                    <span className="cred-icon">📄</span>
                    <span>
                        License{" "}
                        <a
                            href="/files/ubi.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            #IDSID17960T
                        </a>
                    </span>
                </div>


            </div>
        </section>
    );
}
