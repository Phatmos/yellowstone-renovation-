import React from "react";
import ServiceAreasGrid from "../../components/ServiceAreasGrid";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import { Helmet } from "react-helmet";

export default function ServiceAreasPage() {
    return (
        <Layout>
            <Helmet>
                {/* ✅ Ranking Keywords */}
                <meta
                    name="keywords"
                    content="Service areas Lexington KY, Contractors near me Lexington, Siding contractor Nicholasville, Deck builder Georgetown, Exterior remodeling Winchester KY"
                />

                {/* ✅ Social Sharing */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Cities We Serve | Yellowstone Renovation" />
                <meta
                    property="og:description"
                    content="Yellowstone Renovation provides siding, decks, window installation & exterior remodeling in Lexington, Nicholasville, Georgetown, Winchester, Richmond & more."
                />
                <meta property="og:url" content="https://yellowstonerenovation.com/cities/" />
                <meta property="og:image" content="https://yellowstonerenovation.com/images/remodler1.webp" />
                <meta property="og:site_name" content="Yellowstone Renovation" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Cities We Serve | Lexington Exterior Contractors"
                />
                <meta
                    name="twitter:description"
                    content="Top-rated exterior remodeling serving Lexington & Central Kentucky. Free estimates!"
                />
                <meta
                    name="twitter:image"
                    content="https://yellowstonerenovation.com/images/remodler1.webp"
                />
            </Helmet>

            <SEO
                title="Service Areas | Cities We Serve | Yellowstone Renovation"
                description="Find a siding and deck contractor near you. Yellowstone Renovation proudly serves Lexington, Nicholasville, Georgetown, Richmond, Winchester & nearby communities in Central Kentucky."
                pathname="/cities/"
                image="https://yellowstonerenovation.com/images/remodler1.webp"
            />

            {/* ✅ Local Business Area Schema */}
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Exterior Remodeling in Central Kentucky",
                        "serviceType": [
                            "Siding Installation",
                            "Deck Construction",
                            "Replacement Windows",
                            "Exterior Painting",
                            "Gutters & Fascia"
                        ],
                        "areaServed": [
                            "Lexington, KY",
                            "Nicholasville, KY",
                            "Georgetown, KY",
                            "Winchester, KY",
                            "Richmond, KY",
                            "Versailles, KY",
                            "Frankfort, KY",
                            "Paris, KY"
                        ],
                        "provider": {
                            "@type": "HomeAndConstructionBusiness",
                            "name": "Yellowstone Renovation",
                            "telephone": "859-545-7020",
                            "url": "https://yellowstonerenovation.com"
                        }
                    })}
                </script>
            </Helmet>


            <ServiceAreasGrid accent="#0a923d" />
        </Layout>
    );
}
