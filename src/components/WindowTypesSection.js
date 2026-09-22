import React from "react";
import "../styles/WindowTypesSection.css";

export default function WindowTypesSection({
    title = "Modern Types of Replacement Windows",
    windowTypes = [
        { title: "Single Hung Windows", image: "/images/windows1.webp", link: "/contact/" },
        { title: "Double Hung Windows", image: "/images/double-hung.webp", link: "/contact/" },
        { title: "Casement Windows", image: "/images/casement.webp", link: "/contact/" },
        { title: "Awning Windows", image: "/images/awning.webp", link: "/contact/" },
        { title: "Hopper Windows", image: "/images/hopper.webp", link: "/contact/" },
        { title: "Slider Windows", image: "/images/slider.webp", link: "/contact/" },
        { title: "Picture Windows", image: "/images/picture.webp", link: "/contact/" },
        { title: "Specialty Windows", image: "/images/specialty.webp", link: "/contact/" },
        { title: "Bow & Bay Windows", image: "/images/bow-bay.webp", link: "/contact/" },
        { title: "Sliding Patio Doors", image: "/images/sliding-door.webp", link: "/contact/" },
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
