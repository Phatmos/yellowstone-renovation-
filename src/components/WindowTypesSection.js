import React from "react";
import "../styles/WindowTypesSection.css";

export default function WindowTypesSection({
    title = "Modern Types of Replacement Windows",
    windowTypes = [
        { title: "Single Hung Windows", image: "/images/single-hung.webp", link: "#" },
        { title: "Double Hung Windows", image: "/images/double-hung.webp", link: "#" },
        { title: "Casement Windows", image: "/images/casement.webp", link: "#" },
        { title: "Awning Windows", image: "/images/awning.webp", link: "#" },
        { title: "Hopper Windows", image: "/images/hopper.webp", link: "#" },
        { title: "Slider Windows", image: "/images/slider.webp", link: "#" },
        { title: "Picture Windows", image: "/images/picture.webp", link: "#" },
        { title: "Specialty Windows", image: "/images/specialty.webp", link: "#" },
        { title: "Bow & Bay Windows", image: "/images/bow-bay.webp", link: "#" },
        { title: "Sliding Patio Doors", image: "/images/sliding-door.webp", link: "#" },
    ],
}) {
    return (
        <section className="window-types">
            <div className="container">
                <h2>{title}</h2>

                <div className="window-grid">
                    {windowTypes.map((w, i) => (
                        <a key={i} href={w.link} className="window-item">
                            <img src={w.image} alt={w.title} />
                            <span>{w.title}</span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
