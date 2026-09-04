import React, { useEffect, useState } from "react";
import "../styles/HeroSplit.css";

export default function HeroSplit({
    img = "/icons/elite.png",
    alt = "Project photo",
    reviews = "921 Verified 5-Star Reviews",
    title1 = "Your",
    titleGreen = "Dream Project,",
    title2 = "Delivered On Time and On Budget",
    promo = "Limited Time: FREE Consultation + Special Savings",
    btnText = "Get Free Deck Estimate",
    points = [
        "Local, Family-Owned & Trusted | A+ BBB Rating",
        "Full-Service: Design, Materials, Permits & Installation",
        "Dedicated Project Managers for Every Remodel",
        "Hassle-Free Process with No Surprise Costs",
    ],
    cardTitle = "Plan Your Project With Confidence",
    cardText = "Review materials and options — then visualize your project before work begins.",

    emailTo = "renovationyellowstone@gmail.com",
    nextUrl = "/thank-you/",
    subject = "New Deck Estimate Request",
}) {
    const [open, setOpen] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        if (!open) return;

        const onKey = (e) => {
            if (e.key === "Escape") setOpen(false);
        };

        document.addEventListener("keydown", onKey);

        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = prev;
        };
    }, [open]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;

        const formData = {
            subject,
            page: typeof window !== "undefined" ? window.location.href : "",
            firstName: form.firstName.value.trim(),
            lastName: form.lastName.value.trim(),
            email: form.email.value.trim(),
            phone: form.phone.value.trim(),
            projectDetails: form.projectDetails.value.trim(),
        };

        if (!formData.email || !formData.phone) {
            alert("Please fill in all required fields.");
            return;
        }

        setSubmitting(true);

        try {
            const response = await fetch(`https://formsubmit.co/ajax/${emailTo}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                window.location.href = nextUrl;
            } else {
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Form submission error:", error);
            alert("Network error. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <>
            <section className="hs">
                <div className="hs-wrap">
                    <div className="hs-left">
                        <div className="hs-rating">
                            <span className="hs-stars">★★★★★</span>
                            <span className="hs-reviews">{reviews}</span>
                        </div>

                        <div className="hs-insured">✓ Fully Insured</div>

                        <h1 className="hs-title">
                            {title1} <span className="hs-green">{titleGreen}</span>
                            <br />
                            {title2}
                        </h1>

                        <div className="hs-promo">{promo}</div>

                        <button type="button" className="hs-btn" onClick={() => setOpen(true)}>
                            {btnText} <span className="hs-arrow">→</span>
                        </button>

                        <ul className="hs-points">
                            {points.map((t, i) => (
                                <li key={i}>{t}</li>
                            ))}
                        </ul>

                        <div className="hs-card">
                            <div className="hs-card-pic" />
                            <div className="hs-card-body">
                                <div className="hs-card-title">{cardTitle}</div>
                                <div className="hs-card-text">{cardText}</div>
                            </div>
                        </div>
                    </div>

                    <div className="hs-right">
                        <img className="hs-img" src={img} alt={alt} loading="eager" />
                    </div>
                </div>
            </section>

            {open && (
                <div className="hs-modalOverlay" onClick={() => setOpen(false)}>
                    <div className="hs-modal" onClick={(e) => e.stopPropagation()}>
                        <button
                            className="hs-modalClose"
                            type="button"
                            onClick={() => setOpen(false)}
                        >
                            ×
                        </button>

                        <div className="hs-modalHead">
                            <div className="hs-modalTitle">
                                Get Your <b>FREE</b> Estimate — <span>Fast & Easy</span>
                            </div>
                            <div className="hs-modalSub">We’ll call you shortly</div>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="hs-formGrid">
                                <input name="firstName" placeholder="First Name" required />
                                <input name="lastName" placeholder="Last Name" required />
                                <input name="email" type="email" placeholder="Email" required />
                                <input name="phone" placeholder="Phone" required />
                                <textarea
                                    name="projectDetails"
                                    placeholder="Tell us about your project"
                                    rows="4"
                                />
                            </div>

                            <button type="submit" className="hs-formBtn" disabled={submitting}>
                                {submitting ? "Sending..." : "Get My Free Estimate"}
                            </button>

                            <div className="hs-formNote">
                                No spam • By submitting this form, you agree to receive calls and
                                texts. Msg/data rates may apply.
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}