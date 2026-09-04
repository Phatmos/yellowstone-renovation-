import * as React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import "../styles/LegalPages.css"

export default function PrivacyPolicy() {
    return (
        <Layout>
            <SEO
                title="Privacy Policy | We Protect Your Information"
                description="Learn how we protect and use your information when visiting our website or requesting service estimates."
                pathname="/privacy-policy"
            />

            <section className="legal-wrapper">
                <h1>Privacy Policy</h1>
                <p className="updated">Last updated: {new Date().toLocaleDateString()}</p>

                <p>
                    This Privacy Policy explains how we collect, use, and protect your personal
                    information when you visit our website, communicate with us, or request our
                    home improvement services.
                </p>

                <h2>1. Information We Collect</h2>
                <p>We may collect personal details including:</p>
                <ul>
                    <li>Name and contact information (phone, email, address)</li>
                    <li>Project details you voluntarily submit through forms</li>
                    <li>Website usage analytics such as pages visited and device type</li>
                </ul>

                <h2>2. How We Use Your Information</h2>
                <p>We use submitted information to:</p>
                <ul>
                    <li>Provide service estimates and respond to inquiries</li>
                    <li>Schedule and complete home improvement work</li>
                    <li>Improve our website and customer service experience</li>
                    <li>Send updates or promotions (only with your consent)</li>
                </ul>

                <h2>3. Sharing Your Information</h2>
                <p>
                    We do not sell personal information. We may share data only with
                    trusted partners required to provide services — such as
                    manufacturers, financing partners, or local installers.
                </p>

                <h2>4. Cookies & Tracking Technology</h2>
                <p>
                    We use cookies and analytics (like Google Analytics) to understand
                    website performance and improve user experience. You may disable
                    cookies in your browser settings.
                </p>

                <h2>5. Data Security</h2>
                <p>
                    We take reasonable precautions to protect your information from
                    unauthorized access or misuse. However, no system is 100% secure.
                </p>

                <h2>6. External Links</h2>
                <p>
                    Our website may include links to third-party sites. We are not
                    responsible for their content or privacy practices.
                </p>

                <h2>7. Your Rights</h2>
                <p>You may request to:</p>
                <ul>
                    <li>Update or correct your information</li>
                    <li>Opt-out of promotional communication</li>
                    <li>Request deletion of your stored data</li>
                </ul>

                <h2>8. Children’s Privacy</h2>
                <p>
                    Our website and services are not directed toward children under 13.
                    We do not knowingly collect information from minors.
                </p>

                <h2>9. Changes to This Privacy Policy</h2>
                <p>
                    We may update this policy periodically. Continued website use
                    indicates acceptance of the latest version.
                </p>

                <p className="contact-note">
                    For privacy requests or questions, please{" "}
                    <a href="/contact">contact us</a>.
                </p>
            </section>
        </Layout>
    );
}
