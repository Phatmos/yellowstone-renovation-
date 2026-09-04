import * as React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import "../styles/SuccessOffer.css";

export default function SuccessOfferPage() {
    const [data, setData] = React.useState({
        offer: "",
        name: "",
        email: "",
    });

    React.useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        setData({
            offer: params.get("offer") || "",
            name: params.get("name") || "",
            email: params.get("email") || "",
        });
    }, []);

    const requestId = Math.floor(10000 + Math.random() * 90000);

    return (
        <Layout>
            <SEO
                title="Offer Submitted | Yellowstone Renovation"
                description="Thank you for claiming your Yellowstone Renovation offer! Our team will contact you soon to confirm your project details."
                pathname="/success-offer"
            />

            <section className="offer-success-section">
                <div className="offer-success-card">
                    <div className="offer-success-icon">✔</div>
                    <h1>
                        Thank You{data.name ? `, ${data.name}!` : "!"}
                    </h1>
                    <p className="subtitle">
                        Your offer has been successfully submitted.
                    </p>

                    {data.offer && (
                        <p className="offer-title">
                            <strong>Offer:</strong> <span>{data.offer}</span>
                        </p>
                    )}

                    {data.email && (
                        <p className="offer-title">
                            <strong>Email:</strong> <span>{data.email}</span>
                        </p>
                    )}

                    <p className="info">
                        A confirmation has been sent to your email.<br />
                        Our team will contact you within 24 hours to discuss your project.
                    </p>

                    <p className="request-id">Request ID: #{requestId}</p>

                    <a href="/" className="back-home">
                        ← Back to Home
                    </a>
                </div>
            </section>
        </Layout>
    );
}
