import React from "react";
import "../styles/DeckBuildingSteps.css";

export default function DeckBuildingSteps() {
    const steps = [
        {
            number: "1",
            title: "Consultation & Design",
            image: "/icons/step1.png",
            description:
                "We begin with a free on-site consultation to understand your needs, style, and budget. Our team takes measurements and discusses materials, layouts, and finishes. Using 3D visualization tools, we create a realistic preview of your new deck before construction begins."
        },
        {
            number: "2",
            title: "Material Selection & Planning",
            image: "/icons/step2.png",
            description:
                "After finalizing the design, we help you select the best materials — from composite boards to natural wood. We confirm permits, timelines, and all preparation work to ensure your project starts smoothly."
        },
        {
            number: "3",
            title: "Framing & Structural Setup",
            image: "/icons/step3.png",
            description:
                "Our crew constructs a sturdy frame using treated lumber or steel supports, ensuring perfect alignment and load-bearing strength. Every beam and joist is built to code for long-lasting durability and safety."
        },
        {
            number: "4",
            title: "Decking Installation & Finishing",
            image: "/icons/step4.png",
            description:
                "We install your chosen decking material with precision — from hidden fasteners to custom borders and railings. Once installed, we complete sealing, trim work, and aesthetic detailing for a flawless finish."
        },
        {
            number: "5",
            title: "Final Inspection & Cleanup",
            image: "/icons/step5.png",
            description:
                "After installation, we perform a full inspection and final walkthrough with you. Our team cleans the site, checks every detail, and ensures your deck is ready to enjoy immediately."
        }
    ];

    return (
        <section className="deck-steps-section">
            <div className="deck-steps-container">
                <h2 className="deck-steps-title">
                    <span className="accent">//</span> Deck Building Process: What To Expect
                </h2>
                <p className="deck-steps-intro">
                    From consultation to final walkthrough, our process ensures a smooth, efficient,
                    and high-quality build. Here’s what you can expect when you hire Yellowstone
                    Renovation to design and construct your new deck.
                </p>

                <div className="deck-steps-list">
                    {steps.map((step) => (
                        <div className="deck-step" key={step.number}>
                            <div className="deck-step-image">
                                <img src={step.image} alt={step.title} loading="lazy" />
                            </div>

                            <div className="deck-step-content">
                                <div className="deck-step-number">Step {step.number}</div>
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
