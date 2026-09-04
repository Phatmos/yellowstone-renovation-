import React from "react";
import Layout from "../../components/Layout";
import ProjectTemplate from "../../components/ProjectTemplate";
import GallerySection from "../../components/GallerySection";
import SEO from "../../components/SEO";
import OtherCompletedProjects from "../../components/OtherCompletedProjects";
import { Helmet } from "react-helmet";
const FrankfortCompositeDeckPage = () => {
    const pageUrl = "https://yellowstonerenovation.com/projects/frankfort-composite-deck/";
    const heroImage = "https://yellowstonerenovation.com/images/projects/frankfort/fr20.webp";

    return (
        <Layout>
            <Helmet>
                {/* KEYWORDS */}
                <meta
                    name="keywords"
                    content="composite deck Frankfort KY, deck builder Frankfort KY, Trex deck Frankfort, composite decking Kentucky, deck replacement Frankfort KY, deck contractor Frankfort Kentucky, Yellowstone Renovation deck"
                />

                {/* OG */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Composite Deck Builder in Frankfort, KY | Yellowstone Renovation" />
                <meta
                    property="og:description"
                    content="Custom composite deck installation in Frankfort, KY by Yellowstone Renovation. Modern outdoor living space with picture-frame decking, stairs, and premium finishes."
                />
                <meta property="og:image" content={heroImage} />
                <meta property="og:url" content={pageUrl} />
                <meta property="og:site_name" content="Yellowstone Renovation" />

                {/* TWITTER */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Frankfort KY Composite Deck Project" />
                <meta
                    name="twitter:description"
                    content="See this custom composite deck built in Frankfort, KY with premium materials and expert craftsmanship."
                />
                <meta name="twitter:image" content={heroImage} />

                {/* =========================
        🔥 LOCAL BUSINESS SCHEMA
    ========================== */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HomeAndConstructionBusiness",
                        "name": "Yellowstone Renovation",
                        "url": "https://yellowstonerenovation.com",
                        "image": heroImage,
                        "telephone": "(859) 765-7267",
                        "priceRange": "$$",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Frankfort",
                            "addressRegion": "KY",
                            "postalCode": "40601",
                            "addressCountry": "US"
                        },
                        "areaServed": [
                            "Frankfort, KY",
                            "Franklin County, KY",
                            "Lawrenceburg, KY",
                            "Versailles, KY"
                        ],
                        "serviceType": [
                            "Composite Deck Installation",
                            "Deck Construction",
                            "Deck Replacement",
                            "Outdoor Living Design"
                        ],
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": "4.9",
                            "reviewCount": 87
                        }
                    })}
                </script>

                {/* =========================
        🔥 PROJECT / PRODUCT SCHEMA
    ========================== */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Product",
                        "name": "Composite Deck Project in Frankfort, KY",
                        "image": heroImage,
                        "description":
                            "Modern composite deck rebuild in Frankfort, KY featuring picture-frame decking, stairs, and premium finishes installed by Yellowstone Renovation.",
                        "brand": {
                            "@type": "Brand",
                            "name": "Yellowstone Renovation"
                        },
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": "4.9",
                            "reviewCount": 87
                        },
                        "offers": {
                            "@type": "Offer",
                            "priceCurrency": "USD",
                            "price": "1",
                            "availability": "https://schema.org/InStock",
                            "url": pageUrl
                        }
                    })}
                </script>

                {/* =========================
        🔥 PROJECT PAGE SCHEMA (VERY IMPORTANT)
    ========================== */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "CreativeWork",
                        "name": "Composite Deck & Concrete Upgrade in Frankfort, KY",
                        "description":
                            "Completed composite deck and concrete project in Frankfort, Kentucky by Yellowstone Renovation.",
                        "image": heroImage,
                        "author": {
                            "@type": "Organization",
                            "name": "Yellowstone Renovation"
                        },
                        "locationCreated": {
                            "@type": "Place",
                            "address": {
                                "@type": "PostalAddress",
                                "addressLocality": "Frankfort",
                                "addressRegion": "KY",
                                "postalCode": "40601"
                            }
                        },
                        "datePublished": "2025"
                    })}
                </script>
            </Helmet>

            <SEO
                title="Composite Deck & Concrete Upgrade in Frankfort, KY | Yellowstone Renovation"
                description="Custom composite deck rebuild in Frankfort, KY with 4000-PSI concrete, picture-frame decking, modern railing, wrapped posts, stairs, gutters, and clean exterior finishes."
                pathname="/projects/frankfort-composite-deck/"
                image={heroImage}
            />

            <ProjectTemplate
                title="Composite Deck & Concrete Upgrade in Frankfort, KY 40601"
                location="Frankfort, KY"
                yearBuilt="2025"
                area="420 sq ft"
                style="Modern Composite Deck"
                rails="White railing with black caps and pickets"
                covre="-"
                description="This project includes a full rebuild of an existing 30' x 14' deck with new composite decking, upgraded concrete areas, a reinforced block wall, and a clean modern railing system."
                detailsText="The scope includes demolition and removal of the existing deck, removal of old concrete sections, new 4000-PSI concrete, a reinforced block wall, a pressure-treated deck frame, composite decking with hidden fasteners, full picture-frame border, wide stairs, white fascia, wrapped posts, gutter installation, and a white-and-black railing system."
                highlights={[
                    "Demolition and removal of existing 30' x 14' deck",
                    "New 4000-PSI concrete in designated areas",
                    "Reinforced block wall with 8-inch top cap",
                    "Pressure-treated deck frame with joist tape",
                    "Composite decking with hidden fasteners",
                    "Full picture-frame border",
                    "4 ft wide stairs with picture-framed treads",
                    "White fascia and Hardie-wrapped posts",
                    "White railing with black caps and pickets",
                    "Gutter system and flashing/apron installation",
                ]}
                heroImage="/images/projects/frankfort/fr20.webp"
                sideImages={[
                    "/images/projects/frankfort/fr2.webp",
                    "/images/projects/frankfort/fr13.webp",
                    "/images/projects/frankfort/fr14.webp",
                    "/images/projects/frankfort/fr15.webp",
                    "/images/projects/frankfort/fr16.webp",
                    "/images/projects/frankfort/fr17.webp",
                    "/images/projects/frankfort/fr18.webp",
                ]}
                ctaTitle="Ready to Upgrade Your Outdoor Space?"
                ctaText="Contact Yellowstone Renovation today for a free estimate and let us help you design a deck that is built to last."
            />

            <div id="project-gallery">
                <GallerySection
                    title="Composite Deck Gallery in Frankfort, KY"
                    subtitle="See this custom composite deck and concrete upgrade project completed by Yellowstone Renovation."
                    highlight="COMPOSITE DECK BUILDER"
                    background="#ffffff"
                    images={[
                        "/images/projects/frankfort/fr13.webp",
                        "/images/projects/frankfort/fr14.webp",
                        "/images/projects/frankfort/fr15.webp",
                        "/images/projects/frankfort/fr16.webp",
                        "/images/projects/frankfort/fr17.webp",
                        "/images/projects/frankfort/fr18.webp",
                        "/images/projects/frankfort/fr12.webp",
                        "/images/projects/frankfort/fr11.webp",
                        "/images/projects/frankfort/fr10.webp",
                        "/images/projects/frankfort/fr9.webp",
                        "/images/projects/frankfort/fr8.webp",
                        "/images/projects/frankfort/fr7.webp",
                        "/images/projects/frankfort/fr6.webp",
                        "/images/projects/frankfort/fr5.webp",
                        "/images/projects/frankfort/fr4.webp",
                        "/images/projects/frankfort/fr3.webp",
                        "/images/projects/frankfort/fr19.webp",
                        "/images/projects/frankfort/fr20.webp",
                        "/images/projects/frankfort/fr21.webp",
                        "/images/projects/frankfort/fr23.webp",
                        "/images/projects/frankfort/fr2.webp",
                    ]}
                />
            </div>
            <OtherCompletedProjects currentProject="/projects/frankfort-ky-composite-deck/" />

        </Layout>
    );
};

export default FrankfortCompositeDeckPage;