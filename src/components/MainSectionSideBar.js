import React from "react";
import "../styles/MainSectionSideBar.css";

export default function MainSectionSideBar({
    title = "Professional Remodeling Services",
    sections = [],
    offers = [],
    whyUs = [],
    findUs = [],
    blog = [],
    partners = [],
    projects = [],
}) {
    const mainOffer = offers?.[0];
    const secondOffer = offers?.[1];

    return (
        <section className="yr-content-section">
            <div className="yr-content-wrap">
                <article className="yr-article">
                    <div className="yr-article-hero">
                        <span className="yr-kicker">Yellowstone Renovation Local Guide</span>
                        <h2>{title}</h2>
                        <p>
                            Get a clear breakdown of materials, design options, project cost,
                            build quality, and what homeowners should know before hiring a
                            contractor.
                        </p>
                    </div>

                    {sections.map((s, i) => (
                        <div className="yr-article-block" key={i}>
                            <div className="yr-number">{String(i + 1).padStart(2, "0")}</div>
                            <div>
                                {s.heading && <h3>{s.heading}</h3>}
                                {s.text && <p>{s.text}</p>}
                            </div>
                        </div>
                    ))}

                    {projects.length > 0 && (
                        <div className="yr-featured-projects">
                            <div className="yr-section-head">
                                <span>Project Gallery</span>
                                <h3>Recent Work & Inspiration</h3>
                                <p>
                                    A cleaner look at real deck, siding, railing, and exterior
                                    remodeling ideas homeowners can use for their own project.
                                </p>
                            </div>

                            <div className="yr-featured-grid">
                                {projects.slice(0, 6).map((p, i) => (
                                    <a href={p.link || "/projects"} className="yr-featured-card" key={i}>
                                        <img src={p.image} alt={p.title || "Exterior remodeling project"} />
                                        <div>
                                            <span>View Project</span>
                                            <h4>{p.title}</h4>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}

                    {secondOffer && (
                        <div className="yr-bottom-cta">
                            <div>
                                <span>Ready to Start?</span>
                                <h3>{secondOffer.text}</h3>
                                <p>
                                    Schedule a free consultation and get a clear written estimate
                                    for your project.
                                </p>
                            </div>
                            <a href={secondOffer.link || "/contact"}>{secondOffer.button || "Get Free Quote"}</a>
                        </div>
                    )}
                </article>

                <aside className="yr-sidebar">
                    {mainOffer && (
                        <a
                            href={mainOffer.link || "/contact"}
                            className="yr-offer-main"
                            style={{ backgroundImage: `url(${mainOffer.image})` }}
                        >
                            <div>
                                <span>Limited Offer</span>
                                <h3>{mainOffer.text}</h3>
                                <p>{mainOffer.button || "Get Started"} →</p>
                            </div>
                        </a>
                    )}

                    {whyUs.length > 0 && (
                        <div className="yr-side-card yr-why">
                            <h3>Why Homeowners Choose Us</h3>
                            <ul>
                                {whyUs.map((item, i) => (
                                    <li key={i}>
                                        <span>✓</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    <div className="yr-side-card yr-trust">
                        <h3>Project Standards</h3>
                        <div className="yr-trust-grid">
                            <div>
                                <strong>Clear Scope</strong>
                                <small>No vague estimates</small>
                            </div>
                            <div>
                                <strong>Clean Work</strong>
                                <small>Organized job sites</small>
                            </div>
                            <div>
                                <strong>Strong Build</strong>
                                <small>Built for Kentucky weather</small>
                            </div>
                            <div>
                                <strong>Real Support</strong>
                                <small>Communication start to finish</small>
                            </div>
                        </div>
                    </div>

                    {findUs.length > 0 && (
                        <div className="yr-side-card">
                            <h3>Find Us Online</h3>
                            <div className="yr-findus">
                                {findUs.map((f, i) => (
                                    <div key={i}>
                                        <img src={f.logo} alt={f.name} />
                                        <strong>{f.name}</strong>
                                        <small>{f.rating}</small>
                                    </div>
                                ))}
                            </div>
                            <a href="/projects" className="yr-green-btn">View Reviews</a>
                        </div>
                    )}

                    {partners.length > 0 && (
                        <div className="yr-side-card">
                            <h3>Trusted Brands</h3>
                            <div className="yr-partners">
                                {partners.map((logo, i) => (
                                    <img src={logo} alt="Trusted remodeling brand" key={i} />
                                ))}
                            </div>
                        </div>
                    )}

                    {blog.length > 0 && (
                        <div className="yr-side-card">
                            <h3>Helpful Articles</h3>
                            <div className="yr-blog-list">
                                {blog.map((b, i) => (
                                    <a href={b.link || "/blog"} key={i}>
                                        <img src={b.image} alt={b.title} />
                                        <div>
                                            <strong>{b.title}</strong>
                                            <small>{b.date} by {b.author}</small>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}
                </aside>
            </div>
        </section>
    );
}