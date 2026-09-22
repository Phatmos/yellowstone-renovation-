import * as React from "react";
import { Link } from "gatsby";
import SEO from "../components/SEO";
import "../styles/ThankYou.css";

export default function ThankYou() {
    return (
        <section className="thankyou-section">
            <SEO title="Thank You | Yellowstone Renovation" description="Your request has been received." pathname="/thank-you/" noIndex />
            <div className="thankyou-container">
                <div className="thankyou-icon">✔</div>
                <h1>Thank You!</h1>
                <p>
                    Your deck estimate request has been successfully submitted.
                    Our team will contact you within 24 hours to discuss your project
                    in <strong>Lexington and the surrounding areas</strong>.
                </p>

                <Link to="/" className="thankyou-home-btn">
                    ← Back to Home
                </Link>
            </div>
        </section>
    );
}
