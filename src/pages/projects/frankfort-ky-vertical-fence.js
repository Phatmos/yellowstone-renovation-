import React from "react";
import Layout from "../../components/Layout";
import ProjectTemplate from "../../components/ProjectTemplate";
import GallerySection from "../../components/GallerySection";
import SEO from "../../components/SEO";
import OtherCompletedProjects from "../../components/OtherCompletedProjects";
import { Helmet } from "react-helmet";

const FrankfortVerticalFencePage = () => {
    const pageUrl = "https://yellowstonerenovation.com/projects/frankfort-ky-vertical-fence/";
    const heroImage = "https://yellowstonerenovation.com//images/projects/frankfort/frn25.webp";


    return (
        <Layout>
            <Helmet>
                {/* KEYWORDS */}
                <meta
                    name="keywords"
                    content="vertical wood fence Frankfort KY, privacy fence Frankfort KY, fence builder Frankfort KY, wood fence contractor Frankfort Kentucky, backyard fence installation Frankfort, Yellowstone Renovation fence"
                />

                {/* OG */}
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Vertical Wood Fence Builder in Frankfort, KY | Yellowstone Renovation"
                />
                <meta
                    property="og:description"
                    content="Completed vertical wood privacy fence project in Frankfort, KY by Yellowstone Renovation. Built with pressure-treated wood, strong framing, and clean modern design."
                />
                <meta property="og:image" content={heroImage} />
                <meta property="og:url" content={pageUrl} />
                <meta property="og:site_name" content="Yellowstone Renovation" />

                {/* TWITTER */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Frankfort KY Vertical Wood Fence Project"
                />
                <meta
                    name="twitter:description"
                    content="See this completed vertical wood privacy fence in Frankfort, KY with strong structure and clean alignment."
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
                            "Wood Fence Installation",
                            "Privacy Fence Construction",
                            "Fence Replacement",
                            "Vertical Fence Installation"
                        ],
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": "4.9",
                            "reviewCount": 87
                        }
                    })}
                </script>

                {/* =========================
        🔥 PRODUCT / PROJECT SCHEMA
    ========================== */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Product",
                        "name": "Vertical Wood Fence in Frankfort, KY",
                        "image": heroImage,
                        "description":
                            "Completed vertical wood privacy fence project in Frankfort, KY built with pressure-treated lumber, strong framing, and clean modern layout.",
                        "brand": {
                            "@type": "Brand",
                            "name": "Yellowstone Renovation"
                        },
                        "sku": "FENCE-FRANKFORT-VERTICAL-001",
                        "mpn": "FENCE-FRANKFORT-VERTICAL-001",
                        "url": pageUrl,
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
        🔥 CREATIVE WORK (PROJECT PAGE)
    ========================== */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "CreativeWork",
                        "name": "Vertical Wood Fence Installation in Frankfort, KY",
                        "description":
                            "Completed vertical privacy fence installation in Frankfort, Kentucky by Yellowstone Renovation.",
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
                                "postalCode": "40601",
                                "addressCountry": "US"
                            }
                        },
                        "datePublished": "2025"
                    })}
                </script>
            </Helmet>

            <SEO
                title="Vertical Wood Fence Builder in Frankfort, KY — Privacy Fence Project"
                description="See a completed vertical wood privacy fence project in Frankfort, KY by Yellowstone Renovation."
                pathname="/projects/frankfort-ky-vertical-fence/"
                image={heroImage}
            />
            <ProjectTemplate
                title="Vertical Wood Fence Installation in Frankfort, KY 40601"
                location="Frankfort, KY"
                yearBuilt="2025"
                area="~280 linear ft"
                style="Privacy Wood Fence"
                rails="3-rail system with vertical boards"
                covre="-"
                description="This project features a full installation of a vertical wood privacy fence, designed to provide security, clean aesthetics, and long-lasting durability for the homeowner."
                detailsText="The scope included full layout planning, post hole digging, concrete setting, installation of pressure-treated posts, 3-rail horizontal framing, and vertical picket installation. The fence was built to ensure straight lines, proper spacing, and a strong structural foundation for long-term performance."
                highlights={[
                    "Full fence layout and planning",
                    "Post hole digging and concrete installation",
                    "Pressure-treated 4x4 posts",
                    "3-rail horizontal framing system",
                    "Vertical privacy fence boards",
                    "Clean straight alignment across property",
                    "Secure and durable installation",
                ]}
                heroImage="/images/projects/frankfort/frn25.webp"
                sideImages={[
                    "/images/projects/frankfort/frn1.webp",
                    "/images/projects/frankfort/frn2.webp",
                    "/images/projects/frankfort/frn3.webp",
                    "/images/projects/frankfort/frn4.webp",
                    "/images/projects/frankfort/frn5.webp",
                    "/images/projects/frankfort/frn6.webp",
                    "/images/projects/frankfort/frn7.webp",
                    "/images/projects/frankfort/frn8.webp",
                    "/images/projects/frankfort/frn9.webp",
                    "/images/projects/frankfort/frn10.webp",
                ]}
                ctaTitle="Need a Fence Like This?"
                ctaText="Contact Yellowstone Renovation today for a free estimate and let us build a fence that adds privacy, security, and value to your home."
            />

            <div id="project-gallery">
                <GallerySection
                    title="Fence Installation Gallery in Frankfort, KY"
                    subtitle="See this vertical wood fence project completed by Yellowstone Renovation."
                    highlight="FENCE BUILDER"
                    background="#ffffff"
                    images={[
                        "/images/projects/frankfort/frn1.webp",
                        "/images/projects/frankfort/frn2.webp",
                        "/images/projects/frankfort/frn3.webp",
                        "/images/projects/frankfort/frn4.webp",
                        "/images/projects/frankfort/frn6.webp",
                        "/images/projects/frankfort/frn7.webp",
                        "/images/projects/frankfort/frn8.webp",
                        "/images/projects/frankfort/frn9.webp",
                        "/images/projects/frankfort/frn10.webp",
                        "/images/projects/frankfort/frn11.webp",
                        "/images/projects/frankfort/frn12.webp",
                        "/images/projects/frankfort/frn13.webp",
                        "/images/projects/frankfort/frn14.webp",
                        "/images/projects/frankfort/frn15.webp",
                        "/images/projects/frankfort/frn16.webp",
                        "/images/projects/frankfort/frn17.webp",
                        "/images/projects/frankfort/frn18.webp",
                        "/images/projects/frankfort/frn19.webp",
                        "/images/projects/frankfort/frn20.webp",
                        "/images/projects/frankfort/frn21.webp",
                        "/images/projects/frankfort/frn22.webp",
                        "/images/projects/frankfort/frn23.webp",
                        "/images/projects/frankfort/frn24.webp",
                        "/images/projects/frankfort/frn25.webp",
                        "/images/projects/frankfort/frn26.webp",
                        "/images/projects/frankfort/frn27.webp",
                        "/images/projects/frankfort/frn28.webp",
                        "/images/projects/frankfort/frn29.webp",
                    ]}
                />
            </div>

            <OtherCompletedProjects currentProject="/projects/frankfort-ky-vertical-fence/" />
        </Layout>
    );
};

export default FrankfortVerticalFencePage;