import React, { useEffect, useMemo, useState } from "react";
import "../styles/city-header.css";

const DEFAULT_INTERVAL = 6000;

const CityHeader = ({
    cityName = "Sacramento",
    serviceName = "Deck Builder",
    slides = [],
    autoPlayMs = DEFAULT_INTERVAL,
    primaryAction,
    secondaryAction,
}) => {
    const safeSlides = useMemo(() => {
        if (slides.length > 0) {
            return slides;
        }

        return [
            {
                id: "siding",
                tabLabel: "Bedroom 1",
                title: `${cityName} ${serviceName}`,
                description: "There is a siding, windows doors and fencing.",
                image:
                    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1800&q=80",
            },
            {
                id: "windows",
                tabLabel: "Bedroom 2",
                title: `${cityName} Home Exterior Upgrades`,
                description:
                    "Upgrade windows, add doors, and match every finish to your neighborhood style.",
                image:
                    "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=1800&q=80",
            },
            {
                id: "fencing",
                tabLabel: "Bedroom 3",
                title: `${cityName} Yard & Fencing Experts`,
                description:
                    "Clean layouts for fencing, siding details, and long-lasting exterior accents.",
                image:
                    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80",
            },
        ];
    }, [cityName, serviceName, slides]);

    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        if (safeSlides.length < 2 || autoPlayMs <= 0) {
            return undefined;
        }

        const timer = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % safeSlides.length);
        }, autoPlayMs);

        return () => clearInterval(timer);
    }, [autoPlayMs, safeSlides.length]);

    const currentSlide = safeSlides[activeSlide];

    return (
        <section className="city-header">
            <div className="city-header__image-layer" aria-hidden="true">
                {safeSlides.map((slide, index) => (
                    <img
                        key={slide.id || index}
                        src={slide.image}
                        alt=""
                        className={`city-header__image ${index === activeSlide ? "is-active" : ""}`}
                    />
                ))}
            </div>

            <div className="city-header__overlay" />

            <div className="city-header__content">
                <span className="city-header__eyebrow">Trusted by homeowners</span>
                <h1>{currentSlide.title}</h1>
                <p>{currentSlide.description}</p>

                <div className="city-header__actions">
                    {primaryAction && (
                        <a className="btn btn--light" href={primaryAction.href}>
                            {primaryAction.label}
                        </a>
                    )}

                    {secondaryAction && (
                        <a className="btn btn--dark" href={secondaryAction.href}>
                            {secondaryAction.label}
                        </a>
                    )}
                </div>

                <div className="city-header__tabs" role="tablist" aria-label="Header view switcher">
                    {safeSlides.map((slide, index) => (
                        <button
                            type="button"
                            key={slide.id || index}
                            role="tab"
                            aria-selected={index === activeSlide}
                            className={`city-header__tab ${index === activeSlide ? "is-active" : ""}`}
                            onClick={() => setActiveSlide(index)}
                        >
                            {slide.tabLabel || `Slide ${index + 1}`}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CityHeader;