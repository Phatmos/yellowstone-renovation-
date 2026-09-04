import React, { useMemo, useState } from "react";
import "./projects-showcase.css";

const projectData = [
    {
        id: 1,
        title: "Modern Deck Build",
        category: "Decking",
        location: "Lexington, KY",
        size: "420 sq ft",
        feature1: "Composite",
        feature2: "Picture Frame",
        image:
            "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
    },
    {
        id: 2,
        title: "Wood Privacy Fence",
        category: "Fencing",
        location: "Nicholasville, KY",
        size: "180 lf",
        feature1: "6 ft Privacy",
        feature2: "PT Wood",
        image:
            "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1400&q=80",
    },
    {
        id: 3,
        title: "Hardie Siding Project",
        category: "Siding",
        location: "Georgetown, KY",
        size: "2,100 sq ft",
        feature1: "Hardie",
        feature2: "Full Exterior",
        image:
            "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80",
    },
    {
        id: 4,
        title: "Window Replacement",
        category: "Windows",
        location: "Frankfort, KY",
        size: "14 Windows",
        feature1: "Energy Efficient",
        feature2: "Black Trim",
        image:
            "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1400&q=80",
    },
    {
        id: 5,
        title: "Covered Backyard Deck",
        category: "Decking",
        location: "Richmond, KY",
        size: "510 sq ft",
        feature1: "Covered",
        feature2: "Composite",
        image:
            "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1400&q=80",
    },
    {
        id: 6,
        title: "Horizontal Fence Project",
        category: "Fencing",
        location: "Nicholasville, KY",
        size: "220 lf",
        feature1: "Modern Style",
        feature2: "Stained Wood",
        image:
            "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1400&q=80",
    },
    {
        id: 7,
        title: "Board & Batten Siding",
        category: "Siding",
        location: "Lexington, KY",
        size: "1,860 sq ft",
        feature1: "Board & Batten",
        feature2: "Trim Detail",
        image:
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80",
    },
    {
        id: 8,
        title: "Full Window Upgrade",
        category: "Windows",
        location: "Versailles, KY",
        size: "18 Windows",
        feature1: "Low-E Glass",
        feature2: "White Frame",
        image:
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1400&q=80",
    },
    {
        id: 9,
        title: "Custom Poolside Deck",
        category: "Decking",
        location: "Georgetown, KY",
        size: "640 sq ft",
        feature1: "Composite",
        feature2: "Custom Layout",
        image:
            "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
    },
];

const tabs = ["All", "Decking", "Fencing", "Siding", "Windows"];

export default function ProjectsShowcasePage() {
    const [activeTab, setActiveTab] = useState("All");

    const filteredProjects = useMemo(() => {
        if (activeTab === "All") return projectData;
        return projectData.filter(item => item.category === activeTab);
    }, [activeTab]);

    return (
        <main className="projects-page">
            <div className="projects-wrap">
                <section className="projects-hero">
                    <img
                        src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=2000&q=80"
                        alt="Completed exterior projects"
                        className="projects-hero-image"
                    />
                    <div className="projects-hero-overlay" />

                    <div className="projects-hero-content">
                        <span className="projects-badge">Completed Projects</span>
                        <h1>Our Exterior Projects</h1>
                        <p>
                            Decking, fencing, siding and window projects built with precision,
                            curb appeal and long-term quality.
                        </p>

                        <div className="projects-hero-buttons">
                            <a href="#projects-grid" className="projects-btn projects-btn-solid">
                                View Projects
                            </a>
                            <a href="/contact/" className="projects-btn projects-btn-outline">
                                Free Consultation
                            </a>
                        </div>
                    </div>
                </section>

                <section className="projects-filter-section">
                    <div className="projects-tabs">
                        {tabs.map(tab => (
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

                <section className="projects-grid" id="projects-grid">
                    {filteredProjects.map(item => (
                        <article className="project-card" key={item.id}>
                            <div className="project-card-image-wrap">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="project-card-image"
                                />
                            </div>

                            <div className="project-card-body">
                                <div className="project-card-head">
                                    <h3>{item.title}</h3>
                                    <span className="project-card-arrow">↗</span>
                                </div>

                                <p className="project-location">{item.location}</p>

                                <div className="project-meta">
                                    <span>{item.size}</span>
                                    <span>{item.feature1}</span>
                                    <span>{item.feature2}</span>
                                </div>
                            </div>
                        </article>
                    ))}
                </section>
            </div>
        </main>
    );
}