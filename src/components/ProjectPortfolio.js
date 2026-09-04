import * as React from "react";
import Layout from "../components/Layout";
import "../styles/ProjectsPage.css";

export default function ProjectsPage() {
    const [filter, setFilter] = React.useState("All");

    const categories = ["All", "Kitchen", "Bathroom", "Siding", "Windows", "Decking"];

    const projects = [
        {
            title: "Whole-House Siding Renovation",
            category: "Siding",
            image: "/images/remodler1.webp",
            location: "Pleasant Hill, CA 94523",
        },
        {
            title: "Custom Home Build",
            category: "Decking",
            image: "/images/remodler2.webp",
            location: "Pennyn, CA 95663",
        },
        {
            title: "New Construction Home Build",
            category: "Decking",
            image: "/images/remodler3.webp",
            location: "Paradise, CA 95969",
        },
        {
            title: "Siding Replacement & New Deck Railing Installation",
            category: "Siding",
            image: "/images/remodler4.webp",
            location: "Richmond, CA 94801",
        },
        {
            title: "James Hardie Siding Transformation",
            category: "Siding",
            image: "/images/remodler5.webp",
            location: "Clayton, CA 94517",
        },
        {
            title: "James Hardie Siding, Anlin Panoramic Windows & Decking",
            category: "Windows",
            image: "/images/remodler6.webp",
            location: "Sacramento, CA 95831",
        },
        {
            title: "Siding, Windows & Deck Replacement",
            category: "Siding",
            image: "/images/remodler7.webp",
            location: "Dixon, CA 95620",
        },
        {
            title: "Full Exterior Siding & Window Renovation",
            category: "Siding",
            image: "/images/remodler8.webp",
            location: "Crockett, CA 94525",
        },
        {
            title: "Luxury Kitchen Makeover",
            category: "Kitchen",
            image: "/images/remodler9.webp",
            location: "Petaluma, CA 94954",
        },
    ];

    const filtered =
        filter === "All" ? projects : projects.filter((p) => p.category === filter);

    return (
        <Layout>
            <section className="portfolio-section">
                <div className="portfolio-container">
                    <h2>Our Project Portfolio</h2>
                    <p className="portfolio-subtitle">
                        See how we’ve transformed homes inside and out — with expert craftsmanship,
                        design, and lasting quality.
                    </p>

                    <div className="portfolio-filters">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`filter-btn ${filter === cat ? "active" : ""}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <p className="portfolio-count">
                        Showing {filtered.length} of {projects.length} projects
                    </p>

                    <div className="portfolio-grid">
                        {filtered.map((project, i) => (
                            <div key={i} className="project-card">
                                <img src={project.image} alt={project.title} />
                                <div className="project-info">
                                    <h4>{project.title}</h4>
                                    <p>📍 {project.location}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
}
