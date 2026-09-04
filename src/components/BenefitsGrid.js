// src/components/BenefitsGrid.js
import React from "react";
import "../styles/BenefitsGrid.css";

export default function BenefitsGrid({
    title = "Your Deck, Protected & Built to Last",
    subtitle =
    "Join Kentucky homeowners who trust our team for decks that look great, stay strong, and increase home value.",
    cards = [
        {
            img: "/images/deck/deck-lexington101.webp", // put your deck image here
            heading: "Expert Design & Consultation",
            text: "Plan the perfect layout, materials, and finish before we build.",
            bullets: [
                "On-site measuring & design help",
                "Material options: composite or wood",
                "3D-style planning (if needed)",
                "Railings, stairs & lighting guidance",
            ],
        },
        {
            img: "/images/deck/deck-lexington41.webp", // replace with deck close-up image
            heading: "Premium Materials & Installation",
            text: "Built with precision for long-term performance and clean finishes.",
            bullets: [
                "Footings & framing done right",
                "Composite, cedar, treated lumber options",
                "Hidden fasteners & clean edges",
                "Manufacturer-backed warranties (when available)",
            ],
        },
        {
            img: "/images/deck/deck-lexington49.webp", // replace with finished deck photo
            heading: "Built for Kentucky Homes",
            text: "Weather-ready builds that handle heat, rain, and seasonal changes.",
            bullets: [
                "Moisture-resistant materials",
                "Proper drainage & ventilation",
                "Safe code-compliant rails & stairs",
                "Boost curb appeal & home value",
            ],
        },
    ],
}) {
    return (
        <section className="bg">
            <div className="bg-wrap">
                <h2 className="bg-title">
                    {title.split("Protected").length > 1 ? (
                        <>
                            {title.split("Protected")[0]}
                            <span className="bg-green">Protected</span>
                            {title.split("Protected")[1]}
                        </>
                    ) : (
                        title
                    )}
                </h2>

                <p className="bg-sub">{subtitle}</p>

                <div className="bg-grid">
                    {cards.map((c, idx) => (
                        <div className="bg-card" key={idx}>
                            <div className="bg-imgWrap">
                                <img className="bg-img" src={c.img} alt={c.heading} loading="lazy" />
                            </div>

                            <div className="bg-body">
                                <h3 className="bg-heading">{c.heading}</h3>
                                <p className="bg-text">{c.text}</p>

                                <ul className="bg-list">
                                    {c.bullets.map((b, i) => (
                                        <li className="bg-li" key={i}>
                                            <span className="bg-check">✓</span>
                                            <span>{b}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
