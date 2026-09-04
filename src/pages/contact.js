import * as React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { Helmet } from "react-helmet";
import "../styles/ContactPage.css";

export default function ContactPage() {
    const [submitting, setSubmitting] = React.useState(false);
    const formRef = React.useRef(null);
    const emailTo = "renovationyellowstone@gmail.com";

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = formRef.current;

        const formData = {
            firstName: form.firstName.value.trim(),
            lastName: form.lastName.value.trim(),
            email: form.email.value.trim(),
            phone: form.phone.value.trim(),
            service: form.service.value,
            message: form.message.value.trim(),
        };

        if (!formData.email || !formData.phone) {
            alert("Please fill in all required fields.");
            return;
        }

        setSubmitting(true);

        try {
            const response = await fetch("/api/lead", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const query = new URLSearchParams({
                    name: `${formData.firstName} ${formData.lastName}`,
                    email: formData.email,
                    service: formData.service,
                }).toString();
                window.location.href = `/success?${query}`;
            } else {
                alert("Something went wrong. Please try again later.");
            }
        } catch (error) {
            console.error("Form submission error:", error);
            alert("Network error. Please check your connection and try again.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <Layout>
            <Helmet>
                <title>Contact Yellowstone Renovation | Free Estimate in Lexington</title>
                <meta
                    name="description"
                    content="Contact Yellowstone Renovation for siding, decks, painting, and full exterior remodeling in Lexington and Central Kentucky."
                />
            </Helmet>

            <SEO
                title="Contact Us | Yellowstone Renovation | Free Estimate in Lexington, KY"
                description="Reach out to Yellowstone Renovation for professional siding, deck building, windows, and full exterior remodeling in Central Kentucky."
                pathname="/contact/"
            />

            {/* === KEEP CURRENT HERO === */}
            <section className="video-hero">
                <video
                    className="video-bg"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    poster="/images/deck-builder28.webp"
                >
                    <source src="/videos/deck-builder.mp4" type="video/mp4" />
                </video>
                <div className="video-overlay"></div>
                <div className="video-content">
                    <h2>
                        Let’s Bring Your <span>Dream Project</span> to Life
                    </h2>
                    <p>
                        Our team specializes in transforming homes across Central Kentucky —
                        from stunning decks and siding to complete exterior makeovers.
                    </p>
                </div>
            </section>

            {/* === NEW REDESIGNED CONTACT AREA === */}
            <section className="contact-modern">
                <div className="contact-grid">
                    {/* === LEFT INFO === */}
                    <div className="info-side">
                        <h2>Get In Touch</h2>
                        <p>
                            We respond quickly and would love to learn more about your
                            remodeling goals. Reach out today to schedule your free estimate!
                        </p>

                        <div className="info-block">
                            <img src="/icons/phone-green.png" alt="Phone" />
                            <div>
                                <h4>Phone</h4>
                                <a href="tel:8597657267">(859) 765-7267</a>
                            </div>
                        </div>

                        <div className="info-block">
                            <img src="/icons/email-green.png" alt="Email" />
                            <div>
                                <h4>Email</h4>
                                <a href="mailto:renovationyellowstone@gmail.com">
                                    renovationyellowstone@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="info-block">
                            <img src="/icons/location-green.png" alt="Location" />
                            <div>
                                <h4>Office</h4>
                                <p>Lexington, Kentucky</p>
                            </div>
                        </div>

                        <div className="info-block">
                            <img src="/icons/clock-green.png" alt="Hours" />
                            <div>
                                <h4>Business Hours</h4>
                                <p>Mon–Sat: 8 AM – 6 PM</p>
                            </div>
                        </div>

                        <div className="contact-social">
                            <a
                                href="https://www.bbb.org/us/ky/nicholasville/profile/home-improvement/yellowstone-renovation-0402-235919743"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src="/icons/bbb-logo.webp" alt="BBB" />
                            </a>
                            <a
                                href="https://www.yelp.com/biz/yellowstone-renovation-nicholasville"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src="/icons/yelp.webp" alt="Yelp" />
                            </a>
                            <a
                                href="https://maps.app.goo.gl/2jFZ8SX23aumT1f36"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src="/icons/google-reviews.webp" alt="Google Reviews" />
                            </a>
                        </div>
                    </div>

                    {/* === RIGHT FORM === */}
                    <div className="form-side">
                        <h2>Request a Free Estimate</h2>
                        <form ref={formRef} onSubmit={handleSubmit}>
                            <div className="form-row">
                                <input type="text" name="firstName" placeholder="First Name" required />
                                <input type="text" name="lastName" placeholder="Last Name" required />
                            </div>

                            <div className="form-row">
                                <input type="email" name="email" placeholder="Email" required />
                                <input type="tel" name="phone" placeholder="Phone" required />
                            </div>

                            <select name="service" required>
                                <option value="">Select Service</option>
                                <option>Siding Installation</option>
                                <option>James Hardie® Siding</option>
                                <option>Deck Construction</option>
                                <option>Window Replacement</option>
                                <option>Exterior Painting</option>
                                <option>Gutters & Soffits</option>
                                <option>Full Exterior Remodeling</option>
                            </select>

                            <textarea
                                name="message"
                                rows="5"
                                placeholder="Tell us about your project"
                                required
                            ></textarea>

                            <button type="submit" disabled={submitting}>
                                {submitting ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
