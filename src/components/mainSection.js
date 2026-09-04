import React from "react";
import "../styles/MainSectionSideBar.css";

export default function MainSectionSideBar({
    title = "Deck Builder in Lexington, KY",
    sections = [],
    offers = [
        {
            image: "/images/project1.jpg",
            text: "CHECK OUR MORE THAN 20+ FINISHED PROJECTS",
            button: "SEE MORE HERE",
            link: "/projects",
        },
        {
            image: "/images/project2.jpg",
            text: "$1500 OFF SIDING Installation",
            button: "CLAIM",
            link: "/contact",
        },
    ],
    whyUs = [
        "Transform your home with expert craftsmanship.",
        "Seamless designs & attention to detail.",
        "Family-owned & trusted local contractor.",
        "Licensed, Insured, and Experienced.",
    ],
    findUs = [
        { name: "Yelp", rating: "4.6/5" },
        { name: "Google", rating: "4.9/5" },
        { name: "Facebook", rating: "5/5" },
        { name: "Houzz", rating: "5/5" },
    ],
    blog = [
        {
            title: "How Long Should You Wait on an Estimate?",
            date: "March 3rd, 2024",
            author: "Vasyl",
            image: "/images/blog1.jpg",
        },
        {
            title: "Why Your GFCI Outlet Won’t Reset",
            date: "Nov 21st, 2024",
            author: "Vasyl",
            image: "/images/blog2.jpg",
        },
        {
            title: "Why Smoke Detectors Go Off at Night",
            date: "June 17th, 2024",
            author: "Oleg",
            image: "/images/blog3.jpg",
        },
    ],
    partners = ["/images/yelp.webp", "/images/angi.webp", "/images/houzz.webp"],
    projects = [
        { image: "/images/deck1.jpg", title: "Composite Deck" },
        { image: "/images/deck2.jpg", title: "Wood Deck" },
        { image: "/images/deck3.jpg", title: "Backyard Patio" },
        { image: "/images/deck4.jpg", title: "Modern Porch" },
        { image: "/images/deck5.jpg", title: "Vinyl Siding Home" },
        { image: "/images/deck6.jpg", title: "Luxury Remodel" },
    ],
}) {
    return (
        <section className="main-sidebar-section">
            <div className="main-sidebar-container">
                {/* ==== LEFT SIDE (TEXT) ==== */}
                <div className="main-left">
                    <h2>{title}</h2>

                    {sections.length > 0 ? (
                        sections.map((sec, i) => (
                            <div key={i}>
                                {sec.heading && <h3>{sec.heading}</h3>}
                                {sec.text && <p>{sec.text}</p>}
                            </div>
                        ))
                    ) : (
                        <>
                            <h3>#1 Deck Installation & Replacement in Lexington</h3>
                            <p>
                                Our custom-built decks bring style, comfort, and durability to
                                your backyard. Whether you prefer natural wood or low-maintenance
                                composite, we make your outdoor space stand out.
                            </p>
                        </>
                    )}
                </div>

                {/* ==== RIGHT SIDEBAR ==== */}
                <aside className="main-sidebar-right">
                    {/* Offers */}
                    <div className="sidebar-offers">
                        {offers.map((offer, i) => (
                            <a
                                href={offer.link}
                                key={i}
                                className="offer-card"
                                style={{ backgroundImage: `url(${offer.image})` }}
                            >
                                <div className="offer-overlay">
                                    <p>{offer.text}</p>
                                    <span>{offer.button}</span>
                                </div>
                            </a>
                        ))}
                    </div>

                    {/* Why Us */}
                    <div className="whyus-modern">
                        <h3>Why Us?</h3>
                        <ul>
                            {whyUs.map((item, index) => (
                                <li key={index}>✅ {item}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Our Projects */}
                    <div className="projects-modern">
                        <h3>Our Projects</h3>
                        <div className="projects-grid">
                            {projects.map((p, i) => (
                                <div key={i} className="project-card">
                                    <img src={p.image} alt={p.title} />
                                    <p>{p.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Find Us */}
                    <div className="findus-card">
                        <h3>Find Us On</h3>
                        <div className="findus-grid">
                            {findUs.map((item, i) => (
                                <div key={i} className="findus-item">
                                    <span>{item.name}</span>
                                    <p>{item.rating}</p>
                                </div>
                            ))}
                        </div>
                        <a href="/reviews" className="btn-gradient">
                            Read All Reviews
                        </a>
                    </div>

                    {/* Blog */}
                    <div className="blog-card">
                        <h3>From The Blog</h3>
                        {blog.map((post, i) => (
                            <div key={i} className="blog-item">
                                <img src={post.image} alt={post.title} />
                                <div>
                                    <p className="blog-title">{post.title}</p>
                                    <small>
                                        {post.date} by {post.author}
                                    </small>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Partners */}
                    <div className="partners-card">
                        <h3>Our Partners</h3>
                        <div className="partners-grid">
                            {partners.map((logo, i) => (
                                <img key={i} src={logo} alt="Partner logo" />
                            ))}
                        </div>
                    </div>
                </aside>
            </div>
        </section>
    );
}
