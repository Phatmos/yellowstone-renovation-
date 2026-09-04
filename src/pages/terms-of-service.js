import * as React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import "../styles/LegalPages.css"

export default function TermsOfService() {
    return (
        <Layout>
            <SEO
                title="Terms of Service | Exterior Remodeling Services"
                description="Terms of Service for website visitors and customers of our home improvement services."
                pathname="/terms-of-service"
            />

            <section className="legal-wrapper">
                <h1>Terms of Service</h1>
                <p className="updated">Last updated: {new Date().toLocaleDateString()}</p>

                <h2>1. Acceptance of Terms</h2>
                <p>
                    By accessing or using this website, you agree to comply with these Terms of Service.
                    If you do not agree, please discontinue use of the site.
                </p>

                <h2>2. Services Provided</h2>
                <p>
                    We provide exterior home improvement services including siding installation,
                    replacement windows, decking, gutters and related remodeling work.
                    All pricing and project details are subject to change without notice.
                </p>

                <h2>3. Estimates & Contracts</h2>
                <p>
                    Free estimates are based on the information provided.
                    Final project pricing requires a written contract.
                </p>

                <h2>4. Content Accuracy</h2>
                <p>
                    Product images, project photos, pricing and descriptions are for informational purposes only.
                    Some product options may vary by location.
                </p>

                <h2>5. Customer Responsibilities</h2>
                <p>
                    Customers agree to provide safe access to the work site and accurate details
                    about their home or project conditions prior to installation.
                </p>

                <h2>6. Payments</h2>
                <p>
                    Payments must follow the terms outlined in the written agreement.
                    Late or missed payments may result in delays or additional charges.
                </p>

                <h2>7. Warranties</h2>
                <p>
                    Manufacturer and workmanship warranty details will be outlined in the service agreement.
                </p>

                <h2>8. Limitation of Liability</h2>
                <p>
                    We are not liable for indirect, incidental, or consequential damages related to
                    use of our website or services. Liability is limited to the amount paid under
                    the signed project agreement.
                </p>

                <h2>9. Privacy</h2>
                <p>
                    Information submitted through this website is handled according to our
                    <a href="/privacy-policy"> Privacy Policy</a>.
                </p>

                <h2>10. Modifications</h2>
                <p>
                    We may update these Terms of Service at any time. Continued use of the website
                    indicates acceptance of updated terms.
                </p>

                <p className="contact-note">
                    Have questions? <a href="/contact">Contact us</a> anytime.
                </p>
            </section>
        </Layout>
    );
}
