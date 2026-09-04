import React from "react";
import "../styles/Services.css";

export default function Services({
  title = "Our Remodeling & Construction Services",
  subtitle = "Explore our full range of professional home improvement and remodeling services built with premium craftsmanship, modern materials, and long-term durability.",
  accentColor = "#0AAA3D",
  services = [
    {
      title: "Deck Construction",
      description:
        "Custom-built decks designed to elevate your outdoor living with durability, beauty, and clean structural craftsmanship.",
      image: "/images/deck1.webp",
      link: "/decking",
    },
    {
      title: "Siding Installation",
      description:
        "Premium vinyl, James Hardie, and engineered siding systems that improve curb appeal and weather protection.",
      image: "/images/deck2.webp",
      link: "/siding",
    },
    {
      title: "Window Replacement",
      description:
        "Energy-efficient windows designed for better comfort, cleaner aesthetics, and improved home performance.",
      image: "/images/deck3.webp",
      link: "/windows",
    },
    {
      title: "Exterior Painting",
      description:
        "Professional exterior painting with long-lasting finishes that protect your investment and transform appearance.",
      image: "/images/deck4.webp",
      link: "/painting",
    },
  ],
}) {
  const firstWord = title.split(" ")[0];
  const restWords = title.split(" ").slice(1).join(" ");

  return (
    <section className="simple-services">
      <div className="simple-bg-glow"></div>

      <div className="simple-header">
        <span className="simple-eyebrow">Premium Services</span>

        <h2>
          {firstWord}{" "}
          <span style={{ color: accentColor }}>
            {restWords}
          </span>
        </h2>

        <p>{subtitle}</p>
      </div>

      <div className="simple-grid">
        {services.map((service, i) => (
          <a href={service.link} className="simple-card" key={i}>
            <div className="simple-img">
              <img src={service.image} alt={service.title} loading="lazy" />
              <div className="simple-overlay"></div>
            </div>

            <div className="simple-info">
              <h3>{service.title}</h3>
              <p>{service.description}</p>

              <div className="learn-btn">
                Learn More
                <span>→</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}