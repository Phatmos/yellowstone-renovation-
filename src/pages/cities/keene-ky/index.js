import * as React from "react"
import Layout from "../../../components/Layout"

import "../../../styles/global.css"
import SEO from "../../../components/SEO";
import { Helmet } from "react-helmet";
import HeroSection from "../../../components/HeroSection";
import SidingPageSection from "../../../components/SidingPageSection";
import AboutSection from "../../../components/AboutSection";
import TestimonialsSection from "../../../components/TestimonialsSection";
import QuoteSection from "../../../components/QuoteSection";
import GallerySection from "../../../components/GallerySection"
import Services from "../../../components/Services.js"
import MainSectionSideBar from "../../../components/MainSectionSideBar";

export default function KeeneKY() {
    return (
        <Layout>
            <Helmet>
                {/* Local Keene Keywords */}
                <meta
                    name="keywords"
                    content="Deck Builder Keene KY, Siding Contractor Keene KY, Composite Deck Installation Keene, James Hardie Keene Kentucky, LP SmartSide Keene KY, Vinyl Siding Keene KY"
                />

                {/* Social Sharing */}
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Deck and Siding Contractor in Keene, KY | Trusted Exterior Remodeling"
                />
                <meta
                    property="og:description"
                    content="Yellowstone Renovation installs premium siding and builds long-lasting decks in Keene, KY. Composite decks, wood decks, Hardie siding, SmartSide, and vinyl siding for Keene and Jessamine County homes."
                />
                <meta
                    property="og:url"
                    content="https://yellowstonerenovation.com/cities/keene-ky/"
                />
                <meta property="og:site_name" content="Yellowstone Renovation" />
                <meta
                    property="og:image"
                    content="https://yellowstonerenovation.com/images/remodler4.webp"
                />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Deck and Siding Contractor in Keene, KY | Yellowstone Renovation"
                />
                <meta
                    name="twitter:description"
                    content="Upgrade your Keene home with durable siding and custom decks designed for Kentucky’s climate. Serving Keene Troy Pike, Catnip Hill, and all of Jessamine County."
                />
                <meta
                    name="twitter:image"
                    content="https://yellowstonerenovation.com/images/remodler4.webp"
                />
            </Helmet>

            <SEO
                title="Deck and Siding Contractor in Keene, KY | Premium Exterior Builder"
                description="Yellowstone Renovation installs vinyl siding, James Hardie, LP SmartSide, composite decks, and wood decks in Keene, KY. Expert exterior remodeling for homes across Jessamine County. Free estimates."
                pathname="/cities/keene-ky/"
                image="https://yellowstonerenovation.com/images/remodler4.webp"
            />

            <Helmet>
                {/* Local Business Schema — Keene */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HomeAndConstructionBusiness",
                        "name": "Yellowstone Renovation",
                        "url": "https://yellowstonerenovation.com",
                        "image": "https://yellowstonerenovation.com/images/remodler4.webp",
                        "logo": "https://yellowstonerenovation.com/icons/logo.webp",
                        "telephone": "859-545-7020",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Keene",
                            "addressRegion": "KY",
                            "postalCode": "40339",
                            "addressCountry": "US"
                        },
                        "areaServed": [
                            "Keene, KY",
                            "Nicholasville, KY",
                            "Catnip Hill, KY",
                            "Keene Troy Pike Area",
                            "Jessamine County, KY"
                        ],
                        "sameAs": [
                            "https://www.facebook.com/p/Yellowstone-Renovation-61551123481170/",
                            "https://www.instagram.com/yellowstone_renovation/",
                            "https://maps.google.com/?q=Yellowstone+Renovation+Keene+KY"
                        ],
                        "serviceType": [
                            "Composite Decks",
                            "Wood Decks",
                            "Vinyl Siding Installation",
                            "James Hardie Fiber Cement",
                            "LP SmartSide Siding",
                            "Replacement Windows",
                            "Exterior Repairs"
                        ]
                    })}
                </script>

                {/* Keene Local SEO FAQs */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "How much does siding cost in Keene, KY?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Vinyl siding in Keene ranges from $7.00–$10.25 per sq.ft. installed. LP SmartSide typically costs $9.50–$13.50 per sq.ft. James Hardie fiber cement ranges from $11.50–$16.50 per sq.ft. depending on trim, elevation, and architecture."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do you build decks in Keene, KY?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes — we install wood and composite decks for homes along Keene Troy Pike, Catnip Hill, and rural Jessamine County. Free estimates are available year-round."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do you offer free exterior remodeling estimates in Keene?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes. All siding, deck, and exterior projects in Keene include a free on-site estimate with detailed pricing."
                                }
                            }
                        ]
                    })}
                </script>
            </Helmet>

            <HeroSection
                backgroundImage="/images/deck-builder12.webp"
                customerImage="/images/customer-hero1.png"
                title="Deck and Siding Contractor in Keene, KY"
                subtitle="Upgrade your Keene home with durable siding and custom deck installation — engineered for strength, beauty, and long-term performance."
                projectCount="3+ exterior projects completed in Jessamine County"
                city="Keene"
                emailTo="yellowstonerenovation@gmail.com"
            />

            <AboutSection />

            <GallerySection
                title="DECK BUILDER GALLERY"
                subtitle="Explore our craftsmanship — clean lines, durable materials, and long-lasting deck structures for Kentucky homes."
                highlight="DECK BUILDER"
                background="#ffffff"
                images={[
                    "/images/deck/deck-lexington105.webp",
                    "/images/deck/deck-lexington104.webp",
                    "/images/deck/deck-lexington2.webp",
                    "/images/deck/deck-lexington01.webp",
                    "/images/deck/deck-lexington35.webp",
                    "/images/deck/deck-lexington13.webp",
                    "/images/deck/deck-lexington54.webp",
                    "/images/deck/deck-lexington23.webp",
                    "/images/deck/deck-lexington16.webp",
                    "/images/deck/deck-lexington87.webp",
                    "/images/deck/deck-lexington34.webp",
                    "/images/deck/deck-lexington65.webp",
                    "/images/deck/deck-lexington23.webp",
                    "/images/deck/deck-lexington87.webp",
                    "/images/deck/deck-lexington21.webp",
                    "/images/deck/deck-lexington68.webp",
                    "/images/deck/deck-lexington67.webp",
                    "/images/deck/deck-lexington82.webp",
                    "/images/deck/deck-lexington23.webp",
                    "/images/deck/deck-lexington7.webp",
                    "/images/deck/deck-lexington96.webp",
                ]}
            />

            <Services
                title="Exterior Remodeling Services in Keene, KY"
                subtitle="From premium siding materials to custom deck installation — our team brings quality, durability, and clean craftsmanship to every Keene project."
                accentColor="#0a923d"
                bgImage="/images/deck-bg.jpg"
                services={[
                    {
                        title: "Custom Deck Design & Construction",
                        description:
                            "Every deck we build in Keene is tailored to your home's layout and outdoor lifestyle. Choose between composite or natural wood built for Kentucky weather.",
                        image: "/images/deck11.webp",
                        link: "/cities/keene-ky/deck-builder/",
                    },
                    {
                        title: "Composite & Wood Deck Installation",
                        description:
                            "We install Trex, TimberTech, cedar, and pressure-treated decks — designed for long-term structural strength and visual appeal.",
                        image: "/images/deck7.webp",
                        link: "/cities/keene-ky/composite-deck-installation/",
                    },
                    {
                        title: "James Hardie® & Vinyl Siding Installation",
                        description:
                            "Protect and modernize your home with Hardie fiber cement, LP SmartSide, or high-quality vinyl siding — all installed with precision and clean workmanship.",
                        image: "/images/remodler1.webp",
                        link: "/cities/keene-ky/vinyl-siding-installation/",
                    },
                    {
                        title: "Windows & Exterior Trim Upgrades",
                        description:
                            "Improve energy efficiency and curb appeal with new window installation and upgraded exterior trim.",
                        image: "/images/remodler6.webp",
                        link: "/windows",
                    },
                ]}
            />

            <SidingPageSection
                city="Keene"
                layoutOrder={[
                    "hero",
                    "deck",
                    "styles",
                    "types",
                    "cost",
                    "extra",
                    "cta",
                ]}

                heroTitle="Keene’s Preferred Deck & Siding Experts"
                heroText1="Yellowstone Renovation provides siding installation and custom deck construction across Keene, Catnip Hill, and rural Jessamine County."
                heroText2="We install Hardie, LP SmartSide, vinyl siding, cedar, and premium composite decking — all backed by strong warranties and clean installation."
                heroImage="/images/deck-builder12.webp"
                heroBottomText="Serving Keene Troy Pike, Catnip Hill, Brannon Crossing area, and all nearby communities."

                deckHeroTitle="Custom Decks in Keene, KY — Built for Outdoor Living"
                deckHeroText1="Expand your outdoor space with a custom deck designed for long-term durability and everyday comfort."
                deckHeroText2="Choose from low-maintenance composite or traditional wood — each installed with structural precision, moisture protection, and premium finishes."
                deckHeroImage="/images/deck-builder7.webp"
                deckServicesTitle="Deck Services We Provide in Keene:"
                deckServices={[
                    "Trex and TimberTech composite deck installation",
                    "Cedar and pressure-treated wood decks",
                    "Multi-level and elevated deck builds",
                    "Screened porches & covered decks",
                    "Deck repairs and resurfacing",
                    "Custom railing, lighting, and stair systems",
                    "Full permit handling and inspections"
                ]}
                deckCostTitle="Deck Cost in Keene, KY"
                deckCostText="Composite decks in Keene typically range from $48–$75 per sq. ft., depending on height, layout, and material upgrades. Wood decks generally cost $28–$50 per sq. ft. All estimates include labor, materials, fasteners, cleanup, and warranty coverage."
                deckImages={[
                    "/images/deck-builder.webp",
                    "/images/deck-builder8.webp",
                    "/images/deck-builder6.webp",
                ]}

                stylesTitle="Popular Siding Styles in Keene"
                stylesIntro="Homes in Keene often feature classic farmhouse and modern rural styles. These siding profiles are the most popular choices:"
                styles={[
                    {
                        name: "Lap Siding",
                        text: "A timeless look available in vinyl, fiber cement, and engineered wood — ideal for both traditional and updated Keene homes.",
                        image: "/images/Lap-Siding.jpg",
                    },
                    {
                        name: "Board and Batten",
                        text: "A modern vertical style perfect for rural homes, barns, and farmhouse-style exteriors in Keene.",
                        image: "/images/Board-Batten.jpg",
                    },
                    {
                        name: "Shakes & Shingles",
                        text: "Ideal for accent areas like gables — providing a warm, textured appearance with low maintenance.",
                        image: "/images/Shakes-Shingles.jpg",
                    },
                ]}

                sidingTypesTitle="Siding Materials We Install in Keene, KY"
                sidingTypesIntro="All siding materials we install are hand-picked for durability, appearance, and weather resistance in Kentucky’s climate."
                sidingTypes={[
                    { name: "James Hardie Fiber Cement", image: "/images/hardie.jpg" },
                    { name: "LP SmartSide Engineered Wood", image: "/images/SmartSide.jpg" },
                    { name: "Vinyl Siding", image: "/images/Vinyl-Siding.jpg" },
                    { name: "Cedar Siding", image: "/images/Cedar-Siding.jpg" },
                ]}

                costTitle="Siding Installation Cost in Keene, KY"
                costIntro="Siding pricing varies based on home size, trim complexity, elevation, and material. Typical Keene siding costs include:"
                costTable={[
                    { material: "Vinyl Siding", price: "$7.00 – $10.25 per sq. ft." },
                    { material: "Fiber Cement (James Hardie)", price: "$11.50 – $16.50 per sq. ft." },
                    { material: "Engineered Wood (LP SmartSide)", price: "$9.50 – $13.50 per sq. ft." },
                    { material: "Cedar Wood Siding", price: "$13.50 – $19.00 per sq. ft." },
                    { material: "Metal Siding", price: "$9.00 – $15.00 per sq. ft." },
                ]}

                extraSectionTitle="Why Keene Homeowners Choose Yellowstone Renovation"
                extraSectionText="Keene residents trust our team for dependable craftsmanship, honest pricing, and clean installation — from start to finish."
                extraPoints={[
                    "⭐ Specializing in rural and suburban home exteriors",
                    "⭐ Premium materials and modern building standards",
                    "⭐ Licensed, insured, and highly rated in Jessamine County",
                    "⭐ Clean job sites and professional communication",
                    "⭐ 5-year workmanship warranty on all projects"
                ]}

                ctaTitle="Get Your Free Deck or Siding Quote in Keene, KY"
                ctaText="Ready to upgrade your home? Contact Yellowstone Renovation for a free estimate on siding or deck installation in Keene and surrounding Jessamine County neighborhoods."
                ctaImage="/images/deck-builder13.webp"
            />

            <TestimonialsSection />
            <QuoteSection />
        </Layout>
    );
}
