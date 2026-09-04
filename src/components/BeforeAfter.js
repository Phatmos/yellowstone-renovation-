import React, { useRef, useState, useEffect } from "react";
import "../styles/BeforeAfter.css";

const BeforeAfterSlider = ({ before, after, altBefore = "Before", altAfter = "After" }) => {
    const containerRef = useRef(null);
    const [position, setPosition] = useState(50);
    const [dragging, setDragging] = useState(false);

    const moveHandle = (clientX) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.min(Math.max(0, clientX - rect.left), rect.width);
        setPosition((x / rect.width) * 100);
    };

    useEffect(() => {
        const move = (e) => {
            if (!dragging) return;
            e.preventDefault(); // 🚫 Prevent vertical scroll
            e.stopPropagation();

            if (e.type === "mousemove") moveHandle(e.clientX);
            if (e.type === "touchmove") moveHandle(e.touches[0].clientX);
        };

        const stop = () => {
            setDragging(false);
            document.body.classList.remove("no-scroll");
        };

        const start = (e) => {
            setDragging(true);
            document.body.classList.add("no-scroll");
            if (e.type === "mousedown") moveHandle(e.clientX);
            if (e.type === "touchstart") moveHandle(e.touches[0].clientX);
        };

        const container = containerRef.current;

        container.addEventListener("mousedown", start);
        container.addEventListener("touchstart", start, { passive: false });

        window.addEventListener("mousemove", move);
        window.addEventListener("mouseup", stop);
        window.addEventListener("touchmove", move, { passive: false });
        window.addEventListener("touchend", stop);

        return () => {
            document.body.classList.remove("no-scroll");
            container.removeEventListener("mousedown", start);
            container.removeEventListener("touchstart", start);
            window.removeEventListener("mousemove", move);
            window.removeEventListener("mouseup", stop);
            window.removeEventListener("touchmove", move);
            window.removeEventListener("touchend", stop);
        };
    }, [dragging]);

    return (
        <div ref={containerRef} className="ba-container">
            <div className="ba-inner">
                <img src={before} alt={altBefore} className="ba-img before" />
                <img
                    src={after}
                    alt={altAfter}
                    className="ba-img after"
                    style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
                />
                <div className="ba-handle" style={{ left: `${position}%` }}>
                    <div className="ba-dot">
                        <span className="ba-arrow">◄</span>
                        <span className="ba-arrow">►</span>
                    </div>
                </div>
            </div>
            <span className="ba-tag ba-tag--left">Before</span>
            <span className="ba-tag ba-tag--right">After</span>
        </div>
    );
};

export default function BeforeAfter({
    title = "Before & After Transformations",
    description = "We love making homes look fantastic! Let us help you transform your home with durable Hardiplank siding and stylish exterior finishes.",
    buttonText = "See More Before & After Photos →",
    buttonLink = "/projects/",
    accentColor = "#0a923d",
    images = [
        { before: "/images/remodler2.webp", after: "/images/remodler1.webp" },
        { before: "/images/remodler4.webp", after: "/images/remodler5.webp" },
    ],
}) {
    return (
        <section className="ba-section">
            <div className="ba-container-outer">
                <div className="ba-left">
                    <h4 className="ba-green">Before & After Transformations</h4>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <a href={buttonLink} className="ba-btn" style={{ background: accentColor }}>
                        {buttonText}
                    </a>
                </div>

                <div className="ba-right">
                    <div className="ba-row">
                        {images.map((img, i) => (
                            <BeforeAfterSlider key={i} before={img.before} after={img.after} />
                        ))}
                    </div>
                    <p className="ba-hint">Drag arrows to see before & after</p>
                </div>
            </div>
        </section>
    );
}
