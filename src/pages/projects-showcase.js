import React, { useMemo, useState } from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import "../styles/projects-showcase.css";

const projectData = [
    {
        id: 1,
        title: "Composite Deck & Concrete Upgrade",
        type: "decking",
        category: "Decking",
        location: "Frankfort, KY",
        size: "420 SQFT",
        feature1: "Composite Deck",
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

];


const tabs = ["All", "Decking", "Fencing"];

export default function ProjectsShowcasePage() {
    const [activeTab, setActiveTab] = useState("All");

    const filteredProjects = useMemo(() => {
        if (activeTab === "All") return projectData;
        return projectData.filter((item) => item.category === activeTab);
    }, [activeTab]);

    return (
        <Layout>
            <SEO title="Project Showcase | Decks & Fences in Central Kentucky | Yellowstone Renovation" description="Explore completed deck and fence projects by Yellowstone Renovation in Frankfort and Nicholasville, KY, and watch homeowners share their experiences." pathname="/projects-showcase/" image="/images/projects/frankfort/fr20.webp" />
            <main className="projects-page">

                {/* HERO */}
                <section className="projects-hero">
                    <img
                        src="/images/projects/team-1.webp"
                        alt="Yellowstone Renovation project showcase"
                        className="projects-hero-image"
                    />
                    <div className="projects-hero-overlay" />

                    <div className="projects-hero-inner">
                        <div className="projects-hero-content">
                            <span className="projects-badge">Completed Projects</span>

                            <h1>Our Completed Exterior Remodeling Projects</h1>

                            <p>
                                See completed deck and fence projects in Central Kentucky, with photos and details from each job.
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
                    <section className="projects-customer-stories" aria-labelledby="projects-stories-title">
                        <div className="projects-customer-stories-heading">
                            <span>FROM OUR HOMEOWNERS</span>
                            <h2 id="projects-stories-title">Watch the stories behind the decks</h2>
                        </div>
                        <div className="projects-customer-stories-grid">
                            <article id="august-deck-story" className="projects-customer-story">
                                <video controls playsInline preload="none" poster="/videos/testimonials/august-deck-poster.jpg" aria-label="Perryville deck customer story">
                                    <source src="/videos/testimonials/august-deck-desktop.mp4" type="video/mp4" />
                                </video>
                                <div><span className="projects-customer-story-stars" aria-hidden="true">★★★★★</span><h3>Deck Build in Perryville, KY</h3><p>Hear from the homeowner and see the finished deck.</p></div>
                            </article>
                            <article id="white-deck-story" className="projects-customer-story">
                                <video controls playsInline preload="none" poster="/videos/testimonials/white-deck-poster.jpg" src="/videos/testimonials/white-deck-story.mp4" aria-label="Lexington deck customer story" />
                                <div><span className="projects-customer-story-stars" aria-hidden="true">★★★★★</span><h3>Deck Build in Lexington, KY</h3><p>See the finished outdoor space and hear the experience firsthand.</p></div>
                            </article>
                        </div>
                    </section>
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
                            <a href={item.link} className="project-card" key={item.id}>
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
