import * as React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import "../styles/global.css";
import "../styles/Success.css";

export default function SuccessPage() {
    const [user, setUser] = React.useState({ name: "", email: "", service: "" });

    React.useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        setUser({
            name: params.get("name") || "",
            email: params.get("email") || "",
            service: params.get("service") || "",
        });
    }, []);

    const requestId = Math.floor(Math.random() * 90000 + 10000);

    return (
        <Layout>
            <SEO
                title="Thank You | Yellowstone Renovation"
                description="We’ve received your request and will contact you within 24 hours."
                pathname="/success"
            />

            <section className="success-modern">
                <div className="success-card">
                    {/* ✅ Animated Checkmark */}
                    <div className="checkmark">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 52 52"
                            className="checkmark-svg"
                        >
                            <circle
                                className="checkmark-circle"
                                cx="26"
                                cy="26"
                                r="25"
                                fill="none"
                            />
                            <path
                                className="checkmark-check"
                                fill="none"
                                d="M14 27l7 7 16-16"
                            />
                        </svg>
                    </div>

                    <h1>Thank You{user.name ? `, ${user.name}` : ""}!</h1>
                    <p className="success-subtitle">Your request has been successfully submitted.</p>

                    <div className="success-details">
                        <p>
                            <strong>Service:</strong> {user.service || "Not specified"}
                        </p>
                        <p>
                            <strong>Email:</strong> {user.email || "No email provided"}
                        </p>
                        <p>
                            <strong>Request ID:</strong> #{requestId}
                        </p>
                    </div>

                    <p className="success-message">
                        A confirmation has been sent to your email. <br />
                        Our team will reach out within 24 hours to discuss your project.
                    </p>

                    <a className="success-home-btn" href="/">
                        ⟵ Back to Home
                    </a>
                </div>
            </section>
        </Layout>
    );
}
