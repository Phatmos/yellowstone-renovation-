import React, { useState, useEffect } from "react";
import "../styles/WindowsPromoSection.css";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function WindowsPromoSection({ title, slides = [] }) {
    const [current, setCurrent] = useState(0);
    const curr = slides[current];

    const next = () => setCurrent((prev) => (prev + 1) % slides.length);
    const prev = () =>
        setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

    useEffect(() => {
        const timer = setInterval(next, 6000);
        return () => clearInterval(timer);
    }, [current]);

    if (!curr) return null;

    return (
        <section
            className="windows-hero"
            style={{
                backgroundImage: `url(${curr.image})`,
            }}
        >
            <div className="overlay"></div>

            {/* === LEFT TEXT === */}
            <div className="hero-content fade">
                {curr.tag && <span className="hero-tag">{curr.tag}</span>}
                <h2 className="hero-title">{curr.heading}</h2>
                <p className="hero-subtitle">{curr.description}</p>

                {curr.button && (
                    <a className="hero-btn" href={curr.link}>
                        {curr.button} <FaArrowRight className="icon" />
                    </a>
                )}
            </div>

            {/* === RIGHT PROJECT CARD === */}
            {curr.projectName && (
                <div className="product-card fade">
                    {curr.projectImage && (
                        <img src={curr.projectImage} alt={curr.projectName} />
                    )}

                    <div className="product-tags">
                        {curr.projectLocation && <span>{curr.projectLocation}</span>}
                        {curr.projectInfo1 && <span>{curr.projectInfo1}</span>}
                        {curr.projectInfo2 && <span>{curr.projectInfo2}</span>}
                    </div>

                    <div className="product-info">
                        <h4>{curr.projectName}</h4>
                        {curr.projectPrice && (
                            <p className="price">${curr.projectPrice}</p>
                        )}
                    </div>
                </div>
            )}



            {/* DOTS */}
            <div className="dots">
                {slides.map((_, i) => (
                    <div
                        key={i}
                        className={`dot ${current === i ? "active" : ""}`}
                        onClick={() => setCurrent(i)}
                    ></div>
                ))}
            </div>

            {/* SECTION TITLE ABOVE (OPTIONAL) */}
            {title && <h2 className="section-title">{title}</h2>}
        </section>
    );
}
