import React from "react";
import "../styles/SidingServicesSection.css";

export default function SidingServicesSection() {
    const services = [
        {
            title: "Siding Installation",
            description:
                "Top-rated Lexington siding contractor near you offering superior products, expert installation, and long-lasting protection for every remodel. From fiber cement to vinyl, we deliver unmatched quality and precision.",
            image: "/images/siding-installation.jpg",
            link: "/siding-installation",
        },
        {
            title: "Vinyl Siding",
            description:
                "Durable and low-maintenance vinyl siding options designed to enhance your home’s beauty, insulation, and weather resistance. Choose from a wide range of colors and textures for timeless curb appeal.",
            image: "/images/vinyl-siding.jpg",
            link: "/vinyl-siding",
        },
        {
            title: "James Hardie Siding",
            description:
                "As certified James Hardie installers in Lexington, we bring you premium fiber cement siding built to withstand Kentucky’s toughest weather. Exceptional durability, energy efficiency, and a 30-year warranty.",
            image: "/images/james-hardie.jpg",
            link: "/james-hardie-siding",
        },
        {
            title: "Replacement Windows",
            description:
                "Boost your home’s energy efficiency with modern replacement windows. Our products reduce heating and cooling costs, improve insulation, and add a fresh, elegant look to your exterior.",
            image: "/images/replacement-windows.jpg",
            link: "/replacement-windows",
        },
        {
            title: "Deck Building & Exteriors",
            description:
                "Transform your outdoor living with custom-built decks and exterior finishes. We combine premium materials and structural integrity for a backyard space that’s both functional and beautiful.",
            image: "/images/deck-builder.jpg",
            link: "/deck-builder",
        },
        {
            title: "Soffit & Fascia Systems",
            description:
                "Protect your roof and siding with expertly installed soffit and fascia. Our precision work ensures proper ventilation and long-term protection against moisture and pests.",
            image: "/images/soffit-fascia.jpg",
            link: "/soffit-fascia",
        },
    ];

    const awards = [
        { title: "HomeAdvisor Top Rated", image: "/images/award-homeadvisor.webp" },
        { title: "James Hardie Preferred Contractor", image: "/images/award-hardie.webp" },
        { title: "BBB Accredited Business", image: "/images/award-bbb.webp" },
        { title: "Angi Super Service Award", image: "/images/award-angi.webp" },
    ];

    return (
        <section className="siding-section">
            <div className="siding-container">
                <h2 className="siding-title">
                    Lexington’s Trusted <span>Siding & Exterior Experts</span>
                </h2>
                <p className="siding-subtext">
                    At Yellowstone Renovation, we specialize in siding installation, replacement, and repair throughout Lexington, KY.
                    Our experienced team combines top-grade materials with exceptional workmanship to deliver results that last decades.
                    Whether you’re upgrading your vinyl, installing James Hardie, or refreshing your exterior design — we’ve got you covered.
                </p>

                {/* ===== Service Grid ===== */}
                <div className="siding-grid">
                    {services.map((service, index) => (
                        <div key={index} className="siding-card">
                            <div className="siding-img">
                                <img src={service.image} alt={service.title} />
                            </div>
                            <div className="siding-content">
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                                <a href={service.link} className="siding-link">
                                    Explore Details →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ===== Awards Section ===== */}
                <div className="awards-section">
                    <h3>Recognized for Excellence</h3>
                    <p>
                        Our work has been featured by top home improvement brands and trusted by hundreds of Lexington homeowners.
                    </p>
                    <div className="awards-grid">
                        {awards.map((award, i) => (
                            <div key={i} className="award-item">
                                <img src={award.image} alt={award.title} />
                                <p>{award.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
