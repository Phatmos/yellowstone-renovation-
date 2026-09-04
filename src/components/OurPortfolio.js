import React from "react";
import "../styles/OurPortfolio.css";

export default function OurPortfolio() {
    const projects = [
        {
            image: "/images/deck-builder1.webp",
            title: "Composite Deck Installation",
            description: "Custom low-maintenance deck built for year-round outdoor living.",
        },
        {
            image: "/images/sidingafter.webp",
            title: "James Hardie Siding Replacement",
            description: "Complete fiber cement siding upgrade with colorplus finish.",
        },
        {
            image: "/images/deck-builder27.webp",
            title: "Covered Patio Deck",
            description: "Elegant covered outdoor space with LED lighting and seating area.",
        },
        {
            image: "/images/remodler6.webp",
            title: "Window & Trim Upgrade",
            description: "Energy-efficient windows and exterior trim refinishing for modern curb appeal.",
        },
    ];

    return (
        <section className="our-portfolio">
            <div className="portfolio-container">
                <div className="portfolio-header">
                    <h2>
                        Our <span>Exterior Projects</span>
                    </h2>
                    <p>Explore recent deck and siding installations completed across Central Kentucky</p>
                </div>

                <div className="portfolio-grid">
                    {projects.map((p, i) => (
                        <div key={i} className="portfolio-item">
                            <img src={p.image} alt={p.title} />
                            <div className="portfolio-overlay">
                                <h4>{p.title}</h4>
                                <p>{p.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="portfolio-btn-wrap">
                    <a href="/projects" className="portfolio-btn">
                        View All Deck & Siding Projects
                    </a>
                </div>
            </div>
        </section>
    );
}
