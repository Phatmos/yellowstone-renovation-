import React from "react";
import "../styles/RemodelingSection.css";

export default function RemodelingSection() {
    return (
        <section className="remodeling-section">
            <div className="remodeling-wrapper">
                <div className="remodeling-container">
                    {/* === LEFT COLUMN === */}
                    <div className="remodeling-left">
                        <h2>Home Remodeling Contractor in Lexington, KY</h2>

                        <p>
                            At <strong>Yellowstone Remodeling</strong>, we focus on quality in every aspect of our craft—from
                            the rich textures of natural materials to the timeless appeal of wood finishes. Our aim is to make
                            sure each detail of your siding installation enhances the personality and charm of your home.
                            Unlike standard contractors, we take the extra step to ensure every decision adds comfort, value,
                            and a true sense of home.
                        </p>

                        <p>
                            Well-known across Lexington, KY and neighboring communities for our reliability, competitive
                            pricing, and expert workmanship, we take on projects of all sizes—from minor exterior upgrades to
                            complete siding renovations. When it comes to siding and exterior remodeling, Yellowstone Remodeling
                            is the dependable name homeowners trust.
                        </p>

                        <h3>#1 Local Contractor for Siding & Flooring in Lexington</h3>
                        <p>
                            At Yellowstone Remodeling, we work alongside some of the most trusted professionals in the Lexington
                            area to deliver superior results. From exterior upgrades and electrical enhancements to detailed
                            craftsmanship, our team is committed to meeting the highest standards on every project.
                        </p>

                        <h3>Siding Installation Services in Lexington, KY</h3>
                        <p>
                            At <strong>Yellowstone Renovation</strong>, we provide expert siding installation that enhances both
                            the appearance and durability of your home or commercial space. Our skilled team installs a wide
                            range of siding options, including vinyl and fiber cement, with precision and care.
                        </p>

                        <h3>Professional Siding Repair & Replacement</h3>
                        <p>
                            Whether your siding has suffered damage or simply aged over time, we offer dependable repair and
                            full replacement solutions. From patching up minor sections to complete exterior overhauls,
                            Yellowstone Renovation ensures a smooth, efficient process.
                        </p>

                        <h3>Home Renovation Services in Lexington, KY</h3>
                        <p>
                            Our comprehensive home renovation services are designed to reimagine and renew your living spaces.
                            Whether you’re modernizing outdated interiors or designing entirely new layouts, we manage every
                            phase—from concept to completion.
                        </p>

                        <h3>Kitchen & Bathroom Remodeling</h3>
                        <p>
                            Kitchens and bathrooms are the heart of any home—and we specialize in transforming them into spaces
                            you’ll love. Whether it’s a sleek kitchen redesign or a spa-inspired bathroom makeover, Yellowstone
                            Renovation offers expert remodeling services tailored to your vision.
                        </p>

                        <h3>Lexington Siding Replacement & Installation</h3>
                        <p>
                            At Yellowstone Remodeling, we’re committed to bringing quality and visual appeal to every corner of
                            your home’s exterior. Whether it’s the rustic feel of wood textures or the refined look of stone-inspired
                            finishes, our goal is to ensure that every element of your siding enhances your property’s style and
                            personality.
                        </p>
                    </div>

                    <aside className="sidebar-showcase">
                        {/* WHY US */}
                        <div className="whyus-card">
                            <h3>WHY US ?</h3>
                            <ul>
                                <li>Transform your home with expert craftsmanship</li>
                                <li>Seamless designs, high-quality materials, and attention to detail</li>
                                <li>Competitive pricing & fast project completion</li>
                                <li>Family-owned & locally trusted team</li>
                                <li>Licensed, Insured & Experienced professionals</li>
                            </ul>
                        </div>

                        {/* FEATURED BANNERS */}
                        <div className="banner-card">
                            <img src="/images/remodler2.webp" alt="Projects" />
                            <div className="banner-overlay">
                                <p>CHECK OUR MORE THAN 20+ FINISHED PROJECTS</p>
                                <a href="#" className="btn-dark">SEE MORE HERE</a>
                            </div>
                        </div>

                        <div className="banner-card">
                            <img src="/images/remodler1.webp" alt="Siding Offer" />
                            <div className="banner-overlay">
                                <p>$1500 OFF SIDING INSTALLATION</p>
                                <a href="#" className="btn-dark">CLAIM</a>
                            </div>
                        </div>

                        <div className="banner-card">
                            <img src="/images/siding-installation.webp" alt="Van Promo" />
                            <div className="banner-overlay">
                                <p>LOCAL FAMILY-OWNED REMODELING TEAM</p>
                                <a href="#" className="btn-dark">LEARN MORE</a>
                            </div>
                        </div>

                        {/* RECENT PROJECTS */}
                        <h4 className="recent-title">Our Recent Projects</h4>
                        <div className="projects-grid">
                            <div className="project-item">
                                <img src="/images/kitchen-countertops.webp" alt="Project 1" />
                                <a href="#">SEE MORE HERE</a>
                            </div>
                            <div className="project-item">
                                <img src="/images/house-bg.webp" alt="Project 2" />
                                <a href="#">SEE MORE HERE</a>
                            </div>
                            <div className="project-item">
                                <img src="/images/deck-builder.webp" alt="Project 3" />
                                <a href="#">SEE MORE HERE</a>
                            </div>
                            <div className="project-item">
                                <img src="/images/3D House.webp" alt="Project 4" />
                                <a href="#">SEE MORE HERE</a>
                            </div>
                        </div>

                        <div className="banner-card">
                            <img src="/images/bathroom-remodeling.webp" alt="Call Offer" />
                            <div className="banner-overlay">
                                <p>GIVE US A CALL AND GET 7% OFF</p>
                                <a href="#" className="btn-dark">CALL US</a>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
}
