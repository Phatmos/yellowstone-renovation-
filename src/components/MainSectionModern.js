import React from "react";
import "../styles/MainSectionModern.css";

export default function MainSectionModern({
    title = "Deck Builder in Lexington",
    sections = [],
    whyUs = [
        "Transform your home with expert craftsmanship",
        "High-quality materials & seamless design",
        "Competitive pricing with fast completion",
        "Family-owned & trusted local team",
        "Licensed, insured & experienced professionals",
    ],
    banners = [
        {
            image: "/images/deck-builder.webp",
            text: "Save $1000 on Your Deck Build",
            button: "Claim Offer",
            link: "#contact",
        },
        {
            image: "/images/deck-modern.jpg",
            text: "Check Out Our Latest Projects",
            button: "View Projects",
            link: "/projects",
        },
    ],
    projects = [
        { image: "/images/deck1.jpg", link: "#", title: "Modern Deck" },
        { image: "/images/deck2.jpg", link: "#", title: "Outdoor Retreat" },
        { image: "/images/deck3.jpg", link: "#", title: "Wood Finish Deck" },
        { image: "/images/deck4.jpg", link: "#", title: "Patio Upgrade" },
    ],
    callToAction = {
        image: "/images/deck-call.jpg",
        text: "Call Us Now and Get 7% Off Your Deck Build!",
        button: "Call Us",
        link: "tel:8597657267",
    },
    accentColor = "#0a923d",
    bgColor = "#f5f7f5",
}) {
    return (
        <section
            className="main-modern-section"
            style={{ background: bgColor }}
        >
            <div className="main-modern-container">
                {/* === LEFT SIDE === */}
                <div className="main-modern-left">
                    <h2>{title}</h2>

                    {sections.length > 0 ? (
                        sections.map((sec, i) => (
                            <div key={i} className="section-block">
                                {sec.heading && <h3>{sec.heading}</h3>}
                                {sec.text && (
                                    <p dangerouslySetInnerHTML={{ __html: sec.text }} />
                                )}
                            </div>
                        ))
                    ) : (
                        <p>
                            At <strong>Yellowstone Renovation</strong>, we build premium decks
                            designed for comfort, beauty, and durability. Whether you’re
                            replacing an old deck or designing a brand-new space, we’ll make
                            sure it’s built to last.
                        </p>
                    )}

                    <div className="whyus-modern">
                        <h3>Why Choose Us?</h3>
                        <ul>
                            {whyUs.map((item, i) => (
                                <li key={i}>
                                    <span style={{ color: accentColor }}>✔</span> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* === RIGHT SIDEBAR === */}
                <aside className="main-modern-right">
                    {/* === BANNERS === */}
                    {banners.map((b, i) => (
                        <div key={i} className="modern-banner">
                            <img src={b.image} alt={b.text} />
                            <div className="modern-banner-overlay">
                                <p>{b.text}</p>
                                <a
                                    href={b.link}
                                    className="modern-banner-btn"
                                    style={{ backgroundColor: accentColor }}
                                >
                                    {b.button}
                                </a>
                            </div>
                        </div>
                    ))}

                    {/* === PROJECTS === */}
                    <h4 className="projects-title">Our Recent Projects</h4>
                    <div className="modern-projects-grid">
                        {projects.map((p, i) => (
                            <a key={i} href={p.link} className="modern-project-card">
                                <img src={p.image} alt={p.title} />
                                <div className="modern-project-overlay">
                                    <p>{p.title}</p>
                                </div>
                            </a>
                        ))}
                    </div>

                    {/* === CALL TO ACTION === */}
                    {callToAction && (
                        <div className="modern-cta">
                            <img src={callToAction.image} alt="Call Us" />
                            <div className="modern-banner-overlay">
                                <p>{callToAction.text}</p>
                                <a
                                    href={callToAction.link}
                                    className="modern-banner-btn"
                                    style={{ backgroundColor: accentColor }}
                                >
                                    {callToAction.button}
                                </a>
                            </div>
                        </div>
                    )}
                </aside>
            </div>
        </section>
    );
}
