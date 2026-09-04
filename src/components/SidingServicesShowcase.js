import React from "react";
import "../styles/SidingServicesShowcase.css";

export default function SidingServicesShowcase({
    accent = "#0a923d",
    services = [],
    title = "Our Siding Services in Lexington, KY",
    subtitle = "Explore high-quality siding options designed to protect, beautify, and increase the value of your home.",
}) {
    return (
        <section className="showcase-section">
            <div className="showcase-container">
                <h2 className="showcase-main-title" style={{ color: accent }}>
                    {title}
                </h2>
                <p className="showcase-subtitle">{subtitle}</p>

                <div className="showcase-grid">
                    {services.map((item, i) => (
                        <div
                            key={i}
                            className={`showcase-item ${i % 2 === 0 ? "normal" : "reverse"}`}
                        >
                            <div className="showcase-text">
                                <h3 style={{ color: accent }}>{item.title}</h3>
                                <p>{item.text}</p>
                                <a href={item.link || "#"} className="showcase-btn">
                                    Explore Details →
                                </a>
                            </div>

                            <div className="showcase-image">
                                <img src={item.image} alt={item.title} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
