import React from "react";
import "../styles/NewHero.css";

export default function NewHero({
    backgroundImage = "/images/A_promotional_website_banner_for_Ideal_Siding®_Sea.png",
    city = "Seattle",
    projects = "2,000+ projects completed",
    phonePlaceholder = "Your phone number",
}) {
    return (
        <section
            className="newhero"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="newhero-overlay"></div>

            <div className="newhero-container">
                <div className="newhero-content">
                    <div className="newhero-text">
                        <h1>
                            Ideal Siding<sup>®</sup> <br />
                            <span>{city}</span>
                        </h1>

                        <div className="newhero-badge">
                            <span className="checkmark">✔</span> {projects}
                        </div>

                        <p className="newhero-sub">
                            Get your free consultation today – and enjoy 12 months with no
                            payments and 0% interest.
                        </p>

                        <div className="newhero-form">
                            <input
                                type="text"
                                placeholder={phonePlaceholder}
                                className="phone-input"
                            />
                            <button className="quote-btn">Request a quote</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
