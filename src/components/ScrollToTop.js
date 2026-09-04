import React, { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react"; // uses lucide-react icons (already available)

export default function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    // Show button after scrolling down
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 400) setVisible(true);
            else setVisible(false);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Smooth scroll back to top
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    if (!visible) return null;

    return (
        <button className="scroll-top-btn" onClick={scrollToTop} aria-label="Scroll to top">
            <ChevronUp size={26} strokeWidth={3} />
        </button>
    );
}
