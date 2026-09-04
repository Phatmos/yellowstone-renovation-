import React from "react";
import "../styles/ProcessStepsDeck.css";

function Icon({ type }) {
    // simple inline SVG icons (no images needed)
    const common = { width: 34, height: 34, viewBox: "0 0 24 24", fill: "none" };

    switch (type) {
        case "consult":
            return (
                <svg {...common}>
                    <path
                        d="M4 5.5C4 4.12 5.12 3 6.5 3h11C18.88 3 20 4.12 20 5.5v7C20 13.88 18.88 15 17.5 15H10l-4 4v-4H6.5C5.12 15 4 13.88 4 12.5v-7Z"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M7.5 7.7h9M7.5 10.7h6"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                    />
                </svg>
            );
        case "design":
            return (
                <svg {...common}>
                    <path
                        d="M4 20h16"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                    />
                    <path
                        d="M6 17V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v10"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M9 9h6M9 12h6"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                    />
                </svg>
            );
        case "manage":
            return (
                <svg {...common}>
                    <path
                        d="M7 7h10M7 12h10M7 17h7"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                    />
                    <path
                        d="M5 4h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinejoin="round"
                    />
                </svg>
            );
        default: // build
            return (
                <svg {...common}>
                    <path
                        d="M3 21h18"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                    />
                    <path
                        d="M6 21V10l6-4 6 4v11"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M10 21v-6h4v6"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinejoin="round"
                    />
                </svg>
            );
    }
}

export default function ProcessStepsDeck({
    title = "How Your New Deck Project",
    highlight = "Gets Done",
    subtitle =
    "From the first consultation to the final walkthrough, our proven process keeps your deck build on time, on budget, and built to last.",
    steps = [
        {
            num: "1.",
            title: "Design Consultation",
            text:
                "We meet at your home to measure, discuss layout, railing, stairs, and materials — and answer every question.",
            foot: "Fast, Flexible Scheduling",
            icon: "consult",
        },
        {
            num: "2.",
            title: "Estimate & 3D Design",
            text:
                "You get a clear, detailed estimate and a 3D concept so you can visualize boards, colors, and upgrades before we start.",
            icon: "design",
        },
        {
            num: "3.",
            title: "Expert Management",
            text:
                "Your dedicated project manager coordinates materials, permits, inspections, and updates you at every step.",
            icon: "manage",
        },
        {
            num: "4.",
            title: "Quality Installation",
            text:
                "Our in-house crew builds with precision and finishes strong — then we do a final walkthrough to ensure you love it.",
            icon: "build",
        },
    ],
}) {
    return (
        <section className="psd">
            <div className="psd-wrap">
                <h2 className="psd-title">
                    {title} <span className="psd-green">{highlight}</span>
                </h2>
                <p className="psd-sub">{subtitle}</p>

                <div className="psd-row">
                    {steps.map((s, idx) => (
                        <React.Fragment key={idx}>
                            <div className="psd-step">
                                <div className="psd-circle" aria-hidden="true">
                                    <Icon type={s.icon} />
                                </div>

                                <div className="psd-stepTitle">
                                    <span className="psd-num">{s.num}</span> {s.title}
                                </div>

                                <div className="psd-stepText">{s.text}</div>

                                {s.foot ? <div className="psd-foot">{s.foot}</div> : null}
                            </div>

                            {idx !== steps.length - 1 && (
                                <div className="psd-arrow" aria-hidden="true">
                                    <span />
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
}
