import React, { useState, useEffect } from "react";
import "../styles/PromoSection.css";
import { FaArrowRight } from "react-icons/fa";

export default function PromoSection({ title, slides }) {
    const [current, setCurrent] = useState(0);
    const curr = slides[current];

    const next = () => setCurrent((prev) => (prev + 1) % slides.length);

    // ✅ Auto slide
    useEffect(() => {
        const timer = setInterval(next, 4000);
        return () => clearInterval(timer);
    }, [current]);

    return (
        <section className="promo-section">
            {title && <h2 className="promo-title">{title}</h2>}

            <div className="promo-container">

                {/* Background */}
                <div
                    className="promo-bg fade"
                    style={{ backgroundImage: `url(${curr.image})` }}
                />

                {/* Left CTA */}
                <div className="promo-left">
                    {curr.tag && <span className="promo-tag">{curr.tag}</span>}
                    <h3 className="promo-heading">{curr.heading}</h3>
                    <p className="promo-desc">{curr.description}</p>

                    <a href={curr.link} className="promo-btn">
                        {curr.button} <FaArrowRight />
                    </a>
                </div>

                {/* Right Project Card */}
                <div className="promo-project-card">
                    <img src={curr.projectImage} alt="Project Showcase" />

                    <div className="promo-project-top">
                        {curr.projectLocation && (
                            <span className="badge">{curr.projectLocation}</span>
                        )}
                        {curr.projectInfo1 && (
                            <span className="badge">{curr.projectInfo1}</span>
                        )}
                        {curr.projectInfo2 && (
                            <span className="badge">{curr.projectInfo2}</span>
                        )}
                    </div>

                    <div className="promo-project-bottom">
                        <p className="project-title">{curr.projectName}</p>
                        {curr.projectPrice && (
                            <p className="project-price">${curr.projectPrice}</p>
                        )}
                    </div>
                </div>

                {/* ✅ Slide Indicator Dots */}
                <div className="promo-dots">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            className={`promo-dot ${current === i ? "active" : ""}`}
                            onClick={() => setCurrent(i)}
                        ></button>
                    ))}
                </div>
            </div>
        </section>
    );
}
