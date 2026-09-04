import React from "react";
import "../styles/ServicesSection.css";

export default function ServicesSection({
    topText,
    locationTitle,
    zipCodes,
    title,
    subtitle,
    services = [],
}) {
    return (
        <section className="creative-services">
            <div className="services-container">

                {/* === Dynamic City Header === */}
                {locationTitle && (
                    <div className="location-header">
                        <h1 dangerouslySetInnerHTML={{ __html: locationTitle }} />
                        {zipCodes && <p className="zip-codes">Serviced ZIP Codes: {zipCodes}</p>}
                    </div>
                )}

                {/* === Optional Top Label === */}
                {topText && <p className="section-top-text">{topText}</p>}

                {/* === Section Header === */}
                <div className="services-header">
                    <h2>{title}</h2>
                    <p>{subtitle}</p>
                </div>

                {/* === Services Grid === */}
                <div className="service-grid">
                    {services.map((s, i) => (
                        <a href={s.link} className="service-card-link" key={i}>
                            <div className="service-card">
                                <div className="service-img">
                                    <img src={s.img} alt={s.title} />
                                    {s.tags && (
                                        <div className="service-tags">
                                            {s.tags.map((tag, index) => (
                                                <span key={index} className="tag">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <div className="service-content">
                                    <h3>{s.title}</h3>
                                    <p>{s.desc}</p>
                                    <span className="details-link">Explore Details →</span>
                                </div>
                            </div>
                        </a>
                    ))}

                    {/* === Promo Card === */}
                    <a href="/projects" className="service-card-link">
                        <div className="service-card promo-card">
                            <div className="promo-overlay">
                                <h3>Check our more than 2000+ finished projects</h3>
                                <span className="btn-portfolio">View Portfolio →</span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}
