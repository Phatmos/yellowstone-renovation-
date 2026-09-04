import React from "react";
import "../styles/AboutUs.css";

export default function AboutUs() {
    return (
        <section className="about-page">
            <div className="about-container">
                {/* LEFT COLUMN */}
                <div className="about-left">
                    <h2>About Yellowstone Renovation</h2>
                    <h3>Kentucky’s Most-Trusted Full-Service Remodeler</h3>

                    <div className="about-hero">
                        <img
                            src="/images/Yellowstone-Team.webp"
                            alt="Yellowstone Renovation Team"
                        />
                    </div>

                    <p>
                        At <strong>Yellowstone Renovation</strong>, we’ve built our reputation on
                        exceptional craftsmanship, transparent communication, and high-quality
                        results. From <strong>Lexington</strong> to <strong>Richmond</strong> and
                        across Central Kentucky, homeowners choose us for one reason — we make
                        remodeling easy, beautiful, and built to last.
                    </p>

                    <p>
                        While many contractors rely on subcontractors or offer limited services, we
                        do it all under one roof — with in-house experts handling design, materials,
                        construction, and project management. When you work with Yellowstone, you’re
                        choosing a partner that takes full ownership of your project — ensuring
                        consistent quality and results that speak for themselves.
                    </p>

                    <h3>Our Story</h3>
                    <p>
                        Yellowstone Renovation was founded on one clear goal —{" "}
                        <em>to treat every home as if it were our own.</em> What began as a small,
                        local operation has grown into a trusted remodeling company serving Central
                        Kentucky homeowners with professionalism, pride, and integrity.
                    </p>

                    <h3>Our Accreditations & Awards</h3>
                    <ul className="about-list">
                        <li>✅ James Hardie® Preferred Contractor</li>
                        <li>✅ Certified Deck Builder (Composite & Wood)</li>
                        <li>✅ EPA Lead-Safe Certified Firm</li>
                        <li>✅ BBB Accredited Business (A+ Rating)</li>
                        <li>✅ Licensed & Insured in Kentucky</li>
                        <li>✅ 5-Star Google & Yelp Reviews</li>
                        <li>✅ HomeAdvisor Elite Service & Top Rated</li>
                    </ul>

                    <h3>Member of Reputable Organizations</h3>
                    <div className="org-logos">
                        <img src="/images/nari-logo.png" alt="NARI" />
                        <img src="/images/bbb-logo.png" alt="BBB" />
                        <img src="/images/hardie-logo.png" alt="James Hardie" />
                    </div>

                    <h3>Your Home Deserves the Best — We Deliver It</h3>
                    <p>
                        Whether it’s siding, decks, kitchens, or full remodels — our mission is to
                        deliver unmatched craftsmanship, transparent communication, and results you’ll
                        be proud to showcase.
                    </p>

                    <h3>Free No-Obligation Quote</h3>
                    <p>
                        Schedule your free estimate today. Our team will evaluate your home, discuss
                        your vision, and provide a detailed, no-pressure quote.
                    </p>

                    <div className="about-bottom">
                        <p>
                            <strong>Yellow Stone Renovation</strong> is your trusted, locally owned and
                            operated home remodeling company serving <strong>Lexington, KY</strong>.
                        </p>
                        <p>
                            We offer comprehensive remodeling services under one roof — siding,
                            decking, kitchen & bath, and full-scale home renovations — all completed
                            with care and precision.
                        </p>
                    </div>
                </div>

                {/* RIGHT COLUMN */}
                <aside className="about-right">
                    {/* Experts Card */}
                    <div className="sidebar-card">
                        <h4>Yellowstone Experts</h4>
                        <ul>
                            <li>✔ Quality Craftsmanship Team</li>
                            <li>✔ Licensed & Insured Contractors</li>
                            <li>✔ Local Service Across Central KY</li>
                            <li>✔ Free Estimates & Consultations</li>
                        </ul>
                    </div>

                    {/* Certifications Card */}
                    <div className="sidebar-card">
                        <h4>Certifications</h4>
                        <img src="/images/nari-cert.webp" alt="Certification" />
                        <p>
                            Fully insured with worker’s compensation and general liability coverage —
                            safeguarding you and your home throughout every project.
                        </p>
                    </div>

                    {/* Find Us On */}
                    <div className="sidebar-card">
                        <h4>Find Us On</h4>
                        <div className="review-icons">
                            <img src="/images/google-stars.png" alt="Google Reviews" />
                            <img src="/images/yelp.png" alt="Yelp" />
                            <img src="/images/facebook.png" alt="Facebook" />
                        </div>
                        <a href="/reviews" className="btn-green">
                            Read All Reviews
                        </a>
                    </div>

                    {/* Offer */}
                    <div className="sidebar-card offer">
                        <div className="offer-content">
                            <h4>$1,000 OFF Any Remodel</h4>
                            <a href="/offers" className="btn-green">
                                CLAIM OFFER
                            </a>
                        </div>
                    </div>

                    {/* Why Us */}
                    <div className="sidebar-card whyus">
                        <h4>Why Choose Us</h4>
                        <ul>
                            <li>✔ Full-Service Remodeling Team</li>
                            <li>✔ Licensed & Insured</li>
                            <li>✔ Premium Materials & Finishes</li>
                            <li>✔ Transparent Pricing & Process</li>
                            <li>✔ Locally Owned & Operated</li>
                        </ul>
                    </div>
                </aside>
            </div>
        </section>
    );
}
