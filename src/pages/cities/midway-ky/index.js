import React from "react";
import CityHeader from "../../../components/CityHeader";

const IndexPage = () => {
    const citySlides = [
        {
            id: "slide-1",
            tabLabel: "Bedroom 1",
            title: "Sacramento Deck Builder",
            description: "There is a siding, windows doors and fencing.",
            image:
                "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=80",
        },
        {
            id: "slide-2",
            tabLabel: "Bedroom 2",
            title: "Sacramento Exterior Improvements",
            description:
                "From fresh siding to custom window and door replacements, everything is planned for your city lot.",
            image:
                "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1800&q=80",
        },
        {
            id: "slide-3",
            tabLabel: "Bedroom 3",
            title: "Sacramento Fencing & Finish Work",
            description:
                "Fencing, trim, and deck details that keep the whole property consistent and polished.",
            image:
                "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1800&q=80",
        },
    ];

    return (
        <main>
            <CityHeader
                cityName="Sacramento"
                serviceName="Deck Builder"
                slides={citySlides}
                autoPlayMs={6000}
                primaryAction={{ label: "Get Your Free Estimate", href: "#estimate" }}
                secondaryAction={{ label: "View Latest Projects", href: "#projects" }}
            />
        </main>
    );
};

export default IndexPage;

export const Head = () => <title>City Header Demo</title>;