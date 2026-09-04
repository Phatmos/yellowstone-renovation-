import React from "react";
import Layout from "../../components/Layout";
import ProjectTemplate from "../../components/ProjectTemplate";
import GallerySection from "../../components/GallerySection";
import SEO from "../../components/SEO";
import OtherCompletedProjects from "../../components/OtherCompletedProjects";
import { Helmet } from "react-helmet";

const NicholasvilleWoodFencePage = () => {
    const pageUrl =
        "https://yellowstonerenovation.com/projects/nicholasville-ky-wood-cap-fence/";
    const heroImage ="https://yellowstonerenovation.com/images/projects/nicholasville/nch1.webp";

    return (
        <Layout>
            <Helmet>
                <meta
                    name="keywords"
                    content="wood fence Nicholasville KY, privacy fence Nicholasville KY, fence builder Nicholasville KY, fence contractor Nicholasville Kentucky, wood cap fence Kentucky, backyard fence installation Nicholasville, metal post fence Nicholasville KY, Yellowstone Renovation fence"
                />

                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Wood Privacy Fence Builder in Nicholasville, KY | Yellowstone Renovation"
                />
                <meta
                    property="og:description"
                    content="Completed 260 LF wood privacy fence project in Nicholasville, KY by Yellowstone Renovation. Built with metal posts, concrete footings, pressure-treated wood, top cap detail, and custom gate."
                />
                <meta property="og:image" content={heroImage} />
                <meta property="og:url" content={pageUrl} />
                <meta property="og:site_name" content="Yellowstone Renovation" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Nicholasville KY Wood Privacy Fence Project"
                />
                <meta
                    name="twitter:description"
                    content="See this completed 260 ft wood privacy fence project in Nicholasville, KY with metal posts, concrete footings, wood cap detail, and custom gate."
                />
                <meta name="twitter:image" content={heroImage} />

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
                            "addressLocality": "Nicholasville",
                            "addressRegion": "KY",
                            "postalCode": "40356",
                            "addressCountry": "US"
                        },
                        "areaServed": [
                            "Nicholasville, KY",
                            "Jessamine County, KY",
                            "Wilmore, KY",
                            "Keene, KY",
                            "Lexington, KY"
                        ],
                        "serviceType": [
                            "Wood Fence Installation",
                            "Privacy Fence Construction",
                            "Fence Replacement",
                            "Metal Post Fence Installation",
                            "Wood Gate Installation"
                        ],
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": "4.9",
                            "reviewCount": 87
                        }
                    })}
                </script>

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Product",
                        "name": "260 LF Wood Privacy Fence in Nicholasville, KY",
                        "image": heroImage,
                        "description":
                            "Completed 260 linear foot wood privacy fence project in Nicholasville, KY with metal posts, concrete footings, pressure-treated framing, top cap detail, and custom gate.",
                        "brand": {
                            "@type": "Brand",
                            "name": "Yellowstone Renovation"
                        },
                        "sku": "FENCE-NICHOLASVILLE-260LF",
                        "mpn": "FENCE-NICHOLASVILLE-260LF",
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

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "CreativeWork",
                        "name": "260 LF Wood Privacy Fence in Nicholasville, KY",
                        "description":
                            "Completed wood cap privacy fence installation in Nicholasville, Kentucky by Yellowstone Renovation.",
                        "image": heroImage,
                        "author": {
                            "@type": "Organization",
                            "name": "Yellowstone Renovation"
                        },
                        "locationCreated": {
                            "@type": "Place",
                            "address": {
                                "@type": "PostalAddress",
                                "addressLocality": "Nicholasville",
                                "addressRegion": "KY",
                                "postalCode": "40356",
                                "addressCountry": "US"
                            }
                        },
                        "datePublished": "2025"
                    })}
                </script>
            </Helmet>

            <SEO
                title="Wood Privacy Fence Builder in Nicholasville, KY — 260 LF Fence Project"
                description="See a completed 260 LF wood privacy fence project in Nicholasville, KY by Yellowstone Renovation. Built with metal posts, concrete footings, pressure-treated wood, top cap detail, and custom gate."
                pathname="/projects/nicholasville-ky-wood-cap-fence/"
                image={heroImage}
            />

            <ProjectTemplate
                title="260 LF Wood Privacy Fence in Nicholasville, KY 40356"
                location="Nicholasville, KY"
                yearBuilt="2025"
                area="260 linear ft"
                style="Wood Cap Privacy Fence"
                rails="Pressure-treated rails"
                covre="-"
                description="This project includes a full installation of a 260 linear foot wood privacy fence with a clean cap finish, metal posts, and a custom-built gate system."
                detailsText="The scope included full layout and fence line preparation, installation of heavy-duty metal posts set in concrete, pressure-treated wood framing, vertical privacy pickets, horizontal support rails, and a top cap detail for a clean finished look. The project also included a custom wood gate with black hardware, ensuring durability, security, and a modern appearance."
                highlights={[
                    "260 linear feet of wood privacy fence",
                    "6 ft tall fence design",
                    "Metal posts set in concrete for strength",
                    "Pressure-treated wood pickets and rails",
                    "Top cap finish for clean look",
                    "Custom wood gate with black hardware",
                    "Reinforced structure for long-term durability",
                    "Straight and clean fence line installation",
                    "Backyard privacy improvement",
                    "Full installation and cleanup included",
                ]}
                heroImage="/images/projects/nicholasville/nch3.webp"
                sideImages={[
                    "/images/projects/nicholasville/nch2.webp",
                    "/images/projects/nicholasville/nch3.webp",
                    "/images/projects/nicholasville/nch7.webp",
                    "/images/projects/nicholasville/nch11.webp",
                    "/images/projects/nicholasville/nch12.webp",
                    "/images/projects/nicholasville/nch13.webp",
                    "/images/projects/nicholasville/nch14.webp",
                    "/images/projects/nicholasville/nch16.webp",
                ]}
                ctaTitle="Need a Fence Like This?"
                ctaText="Contact Yellowstone Renovation today for a free estimate. We build strong, clean, and long-lasting fences across Central Kentucky."
            />

            <div id="project-gallery">
                <GallerySection
                    title="Wood Privacy Fence in Nicholasville, KY"
                    subtitle="Take a look at this 260 ft wood privacy fence project completed by Yellowstone Renovation."
                    highlight="FENCE BUILDER"
                    background="#ffffff"
                    images={[
                        "/images/projects/nicholasville/nch1.webp",
                        "/images/projects/nicholasville/nch2.webp",
                        "/images/projects/nicholasville/nch3.webp",
                        "/images/projects/nicholasville/nch7.webp",
                        "/images/projects/nicholasville/nch11.webp",
                        "/images/projects/nicholasville/nch12.webp",
                        "/images/projects/nicholasville/nch13.webp",
                        "/images/projects/nicholasville/nch14.webp",
                        "/images/projects/nicholasville/nch16.webp",
                        "/images/projects/nicholasville/nch17.webp",
                        "/images/projects/nicholasville/nch18.webp",

                    ]}
                />
            </div>

            <OtherCompletedProjects currentProject="/projects/nicholasville-ky-wood-cap-fence/" />
        </Layout>
    );
};

export default NicholasvilleWoodFencePage;