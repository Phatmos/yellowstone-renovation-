import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import "../styles/NotFound.css";
import SEO from "../components/SEO";

export default function NotFoundPage() {
    return (
        <Layout>
            <SEO
                title="Page Not Found — Yellowstone Renovation"
                description="Oops! The page you're looking for isn't available. Try returning home to continue exploring."
                pathname="/404"
                noIndex={true}
            />
            <section className="nf-hero">
                <div className="nf-container">

                    <div className="nf-left">
                        <h1 className="nf-code">404</h1>
                        <p className="nf-text">
                            You missed the driveway, dewwwd. Let’s get back home!
                        </p>

                        <Link to="/" className="nf-btn">
                            Back Home
                        </Link>
                    </div>

                    <div className="nf-right">
                        <img
                            src="/images/hit-the-road.webp"
                            alt="Hit the road dewwwd!"
                            className="nf-img"
                        />
                    </div>

                </div>
            </section>
        </Layout>
    );
}
