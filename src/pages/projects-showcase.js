import React, { useMemo, useState } from "react";
import Layout from "../components/Layout";
import "../styles/projects-showcase.css";

const projectData = [
    {
        id: 1,
        title: "Trex Backyard Deck",
        type: "decking",
        category: "Decking",
        location: "Lexington, KY",
        size: "420 SQFT",
        feature1: "TimberTech Composite",
        feature2: "Fascia",
        image: "/images/projects/frankfort/fr20.webp",
        link: "/projects/frankfort-ky-composite-deck/"
    },
    {
        id: 2,
        title: "Wood Cap Privacy Fence",
        type: "fencing",
        category: "Fencing",
        location: "Nicholasville, KY",
        size: "260 LF",
        feature1: "Wood Cap Privacy Fence",
        feature2: "Metal Posts + Concrete",
        image: "/images/projects/nicholasville/nch3.webp",
        link: "/projects/nicholasville-ky-wood-cap-fence/"
    },
    {
        id: 3,
        title: "Vertical Wood Privacy Fence",
        type: "fencing",
        category: "Fencing",
        location: "Frankfort, KY",
        size: "360 LF",
        feature1: "Vertical Privacy Fence",
        feature2: "Pressure Treated Wood",
        image: "/images/projects/frankfort/frn25.webp",
        link: "/projects/frankfort-ky-vertical-fence/"
    },
    {
        id: 4,
        title: "Black Frame Windows",
        type: "windows",
        category: "Windows",
        location: "Frankfort, KY",
        size: "12 Windows",
        feature1: "Energy Efficient",
        feature2: "Black Frame",
        image: "/images/projects/window-1.webp"
    },
    {
        id: 5,
        title: "Elevated Composite Deck",
        type: "decking",
        category: "Decking",
        location: "Richmond, KY",
        size: "420 SQFT",
        feature1: "Trex Enhance",
        feature2: "Stairs + Railing",
        image: "/images/projects/deck-3.webp"
    },
    {
        id: 6,
        title: "Board-on-Board Fence",
        type: "fencing",
        category: "Fencing",
        location: "Nicholasville, KY",
        size: "210 LF",
        feature1: "Board-on-Board",
        feature2: "Premium Wood",
        image: "/images/projects/Fence-2.webp"
    },
    {
        id: 7,
        title: "Vinyl Siding Upgrade",
        type: "siding",
        category: "Siding",
        location: "Versailles, KY",
        size: "1850 SQFT",
        feature1: "Vinyl Siding",
        feature2: "Trim Package",
        image: "/images/projects/siding-2.webp"
    },
    {
        id: 8,
        title: "Commercial Window Install",
        type: "windows",
        category: "Windows",
        location: "Louisville, KY",
        size: "9 Windows + 1 Door",
        feature1: "Low-E Glass",
        feature2: "Custom Fit",
        image: "/images/projects/window-2.webp"
    },
    {
        id: 9,
        title: "Custom Wood Deck",
        type: "decking",
        category: "Decking",
        location: "Lexington, KY",
        size: "510 SQFT",
        feature1: "Wood Railing",
        feature2: "Pressure Treated",
        image: "/images/projects/deck-4.webp"
    },
    {
        id: 10,
        title: "Board-on-Board Fence",
        type: "fencing",
        category: "Fencing",
        location: "Lexington, KY",
        size: "160 LF",
        feature1: "Board-on-Board",
        feature2: "Premium Wood",
        image: "/images/projects/Fence-3.webp"
    },
    {
        id: 11,
        title: "Trex Backyard Deck",
        type: "decking",
        category: "Decking",
        location: "Lexington, KY",
        size: "520 SQFT",
        feature1: "Trex Composite",
        feature2: "Picture Frame",
        image: "/images/projects/Deck-1.webp"
    },
    {
        id: 12,
        title: "Horizontal Privacy Wood Fence",
        type: "fencing",
        category: "Fencing",
        location: "Frankfort, KY",
        size: "280 LF",
        feature1: "Horizontal Privacy Fence",
        feature2: "Pressure Treated",
        image: "/images/projects/Fence-1.webp"
    },
    {
        id: 13,
        title: "James Hardie Siding",
        type: "siding",
        category: "Siding",
        location: "Georgetown, KY",
        size: "2400 SQFT",
        feature1: "Board & Batten + Shake",
        feature2: "Full Replacement",
        image: "/images/projects/siding-1.webp"
    },
];


const tabs = ["All", "Decking", "Fencing", "Siding", "Windows"];

export default function ProjectsShowcasePage() {
    const [activeTab, setActiveTab] = useState("All");

    const filteredProjects = useMemo(() => {
        if (activeTab === "All") return projectData;
        return projectData.filter((item) => item.category === activeTab);
    }, [activeTab]);

    return (
        <Layout>
            <main className="projects-page">

                {/* HERO */}
                <section className="projects-hero">
                    <img
                        src="/images/projects/team-1.webp"
                        alt="Completed exterior remodeling projects"
                        className="projects-hero-image"
                    />
                    <div className="projects-hero-overlay" />

                    <div className="projects-hero-inner">
                        <div className="projects-hero-content">
                            <span className="projects-badge">Completed Projects</span>

                            <h1>Our Completed Exterior Remodeling Projects</h1>

                            <p>
                                Explore real decking, fencing, siding, and window projects
                                completed by our team with clean craftsmanship and quality materials.
                            </p>

                            <div className="projects-hero-buttons">
                                <a href="/contact/" className="projects-btn projects-btn-light">
                                    Book Free Consultation
                                </a>
                                <a href="#projects-grid" className="projects-btn projects-btn-dark">
                                    View Projects
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FILTER */}
                <div className="projects-container">
                    <section className="projects-tabs-section">
                        <div className="projects-tabs">
                            {tabs.map((tab) => (
                                <button
                                    key={tab}
                                    type="button"
                                    className={`projects-tab ${activeTab === tab ? "active" : ""}`}
                                    onClick={() => setActiveTab(tab)}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </section>

                    {/* GRID */}
                    <section className="projects-grid" id="projects-grid">
                        {filteredProjects.map((item) => (
                            <a href={item.link || "#"} className="project-card" key={item.id}>
                                <div className="project-card-image-wrap">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="project-card-image"
                                    />
                                </div>

                                <div className="project-card-body">
                                    <div className="project-card-top">
                                        <h3>{item.title}</h3>
                                        <span className="project-card-arrow" aria-hidden="true">
                                            <span>↗</span>
                                        </span>
                                    </div>

                                    <p className="project-card-location">{item.location}</p>

                                    <div className="project-card-meta">
                                        <span>{item.size}</span>
                                        <span>{item.feature1}</span>
                                        <span>{item.feature2}</span>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </section>
                </div>
            </main>
        </Layout>
    );
}