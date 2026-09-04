import React from "react";
import "../styles/OurServices.css";

export default function OurServices({
    title = "Our Services",
    highlight = "Services",
    description = "Our organization features a broad team of over 1,500 skilled experts, each bringing unique talents and experience together. We deliver exceptional solutions tailored to our clients’ diverse needs.",
    highlightColor = "#f4b400",
    textColor = "#1f1f1f",
    backgroundColor = "#ffffff",
    services = [
        {
            name: "Window Installation",
            image: "/images/window.jpg",
        },
        {
            name: "Custom Building",
            image: "/images/building.jpg",
        },
        {
            name: "Garden Lounge",
            image: "/images/garden.jpg",
        },
        {
            name: "Interior Remodeling",
            image: "/images/interior.jpg",
        },
        {
            name: "Roofing Services",
            image: "/images/roofing.jpg",
        },
    ],
}) {
    return (
        <section
            className="our-services"
            style={{
                backgroundColor: backgroundColor,
                color: textColor,
            }}
        >
            <div className="our-services-container">
                <h2>
                    {title.split(highlight)[0]}
                    <span style={{ color: highlightColor }}>{highlight}</span>
                    {title.split(highlight)[1]}
                </h2>

                <p className="services-description">{description}</p>

                <div className="services-scroll">
                    {services.map((service, index) => (
                        <div className="service-card" key={index}>
                            <img src={service.image} alt={service.name} />
                            <h3>{service.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
