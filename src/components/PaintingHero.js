import React, { useState } from "react";
import "../styles/PaintingHero.css";
import { FaPhoneAlt, FaUser, FaEnvelope } from "react-icons/fa";

export default function PaintingHero({
    title = "Premium House Painting Services in Lexington, KY",
    subtitle = "Interior • Exterior • Cabinets — Fast quotes, flawless results.",
    background = "/images/remodler1.webp",
}) {
    const [loading, setLoading] = useState(false);

    return (
        <section
            className="painting-hero"
            style={{ backgroundImage: `url(${background})` }}
        >
            <div className="hero-overlay"></div>

            <div className="hero-body">

                {/* LEFT SIDE */}
                <div className="hero-left">
                    <span className="estimate-badge">📌 FREE ESTIMATE</span>
                    <h1>{title}</h1>
                    <p>{subtitle}</p>
                    <div className="trust-row">⭐⭐⭐⭐⭐ Rated #1 Local Experts</div>
                </div>

                {/* ✅ Simple Working Contact Form */}
                <form
                    className="contact-box slide-in-right"
                    method="POST"
                    action="https://formsubmit.co/renovationyellowstone@gmail.com"
                    onSubmit={() => setLoading(true)}
                >
                    {/* ✅ Required hidden fields */}
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_next" value="https://yellowstonerenovation.com/success" />
                    <input type="hidden" name="_subject" value="New Painting Lead Request" />

                    {/* Honeypot for bots */}
                    <input type="text" name="company" style={{ display: "none" }} />

                    <div className="field">
                        <FaUser />
                        <input name="name" placeholder="Full Name" required />
                    </div>

                    <div className="field">
                        <FaPhoneAlt />
                        <input type="tel" name="phone" placeholder="Phone Number" required />
                    </div>

                    <div className="field">
                        <FaEnvelope />
                        <input type="email" name="email" placeholder="Email (Optional)" />
                    </div>

                    <button type="submit" disabled={loading} className={loading ? "loading" : ""}>
                        {loading ? "Sending..." : "Submit Request"}
                    </button>

                    <div className="review-logos">
                        <img src="/icons/google-reviews.webp" alt="Google" />
                        <img src="/icons/yelp.webp" alt="Yelp" />
                    </div>
                </form>
            </div>
        </section>
    );
}
