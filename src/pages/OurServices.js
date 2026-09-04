import React from "react";
import "../styles/OurServices.css";
import SEO from "../components/SEO";

const servicesData = [
  {
    title: "Window Installation",
    image: "/images/window.jpg",
  },
  {
    title: "Custom Building",
    image: "/images/custom-building.jpg",
  },
  {
    title: "Garden Lounge",
    image: "/images/garden-lounge.jpg",
  },
  {
    title: "Interior Remodeling",
    image: "/images/interior-remodeling.jpg",
  },
  {
    title: "Roofing Services",
    image: "/images/roofing.jpg",
  },
];

const OurServices = ({ title = "Our Services", services = servicesData }) => {
  return (
    <section className="our-services">
      <div className="container">
        <h2 className="section-title">{title}</h2>
        <div className="services-scroll">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-image">
                <img src={service.image} alt={service.title} />
              </div>
              <p className="service-title">{service.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
