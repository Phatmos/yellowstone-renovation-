import React, { useState } from "react";
import "../styles/PromoSectionV2.css";
import { FaArrowRight } from "react-icons/fa";

export default function PromoSectionV2({ title, slides }) {
    const [current, setCurrent] = useState(0);
    const curr = slides[current];

    const next = () => setCurrent((current + 1) % slides.length);
    const prev = () => setCurrent(current === 0 ? slides.length - 1 : current - 1);

    return (
        <section className="promoV2-section">
            {title && <h2 className="promoV2-title">{title}</h2>}

            <div className="promoV2-container">
                <div className="promoV2-bg" style={{ backgroundImage: `url(${curr.image})` }} />

                {/* Left CTA */}
                <div className="promoV2-left">
                    {curr.tag && <span className="promoV2-tag">{curr.tag}</span>}
                    <h3 className="promoV2-heading">{curr.heading}</h3>
                    <p className="promoV2-desc">{curr.description}</p>
                    <a href={curr.link} className="promoV2-btn">
                        {curr.button} <FaArrowRight />
                    </a>
                </div>

                {/* Right — Recent Project */}
                <div className="promoV2-project-box">
                    <p className="promoV2-project-title">Recent Project</p>
                    <p className="promoV2-project-location">{curr.projectLocation}</p>
                </div>

                {/* Navigation */}
                <button className="promoV2-nav left" onClick={prev}>‹</button>
                <button className="promoV2-nav right" onClick={next}>›</button>
            </div>
        </section>
    );
}
