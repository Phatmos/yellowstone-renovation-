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

export default function BracktownKY() {
    return (
        <Layout>
            <Helmet>
                {/* Local Bracktown Keywords */}
                <meta
                    name="keywords"
                    content="Deck Builder Bracktown KY, Siding Contractor Bracktown Kentucky, James Hardie Bracktown KY, Composite Deck Installation Bracktown, Vinyl Siding Bracktown KY, LP SmartSide Bracktown KY"
                />

                {/* Social Sharing */}
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Deck and Siding Contractor in Bracktown, KY | Local Exterior Experts"
                />
                <meta
                    property="og:description"
                    content="Yellowstone Renovation installs premium siding and builds long-lasting custom decks in Bracktown, KY. Composite decks, wood decks, vinyl siding, LP SmartSide, and James Hardie installation — built for Kentucky weather."
                />
                <meta property="og:url" content="https://yellowstonerenovation.com/cities/bracktown-ky/" />
                <meta property="og:site_name" content="Yellowstone Renovation" />
                <meta property="og:image" content="https://yellowstonerenovation.com/images/remodler11.webp" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Deck and Siding Contractor in Bracktown, KY | Yellowstone Renovation"
                />
                <meta
                    name="twitter:description"
                    content="Upgrade your Bracktown home with durable siding and custom-built decks. Serving North Lexington, Masterson Station, and all of Fayette County."
                />
                <meta
                    name="twitter:image"
                    content="https://yellowstonerenovation.com/images/remodler11.webp"
                />
            </Helmet>

            <SEO
                title="Deck and Siding Contractor in Bracktown, KY | Exterior Renovation Experts"
                description="Yellowstone Renovation builds composite and wood decks and installs premium siding including James Hardie, LP SmartSide, and vinyl in Bracktown, KY. Free estimates throughout North Lexington & Fayette County."
                pathname="/cities/bracktown-ky/"
                image="https://yellowstonerenovation.com/images/remodler11.webp"
            />

            <Helmet>
                {/* Local Business Schema — Bracktown */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HomeAndConstructionBusiness",
                        "name": "Yellowstone Renovation",
                        "url": "https://yellowstonerenovation.com",
                        "image": "https://yellowstonerenovation.com/images/remodler11.webp",
                        "logo": "https://yellowstonerenovation.com/icons/logo.webp",
                        "telephone": "859-545-7020",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Bracktown",
                            "addressRegion": "KY",
                            "postalCode": "40511",
                            "addressCountry": "US"
                        },
                        "areaServed": [
                            "Bracktown, KY",
                            "Lexington, KY",
                            "Masterson Station, KY",
                            "Fayette County, KY"
                        ],
                        "sameAs": [
                            "https://www.facebook.com/p/Yellowstone-Renovation-61551123481170/",
                            "https://www.instagram.com/yellowstone_renovation/",
                            "https://maps.google.com/?q=Yellowstone+Renovation+Bracktown+KY"
                        ],
                        "serviceType": [
                            "Vinyl Siding Installation",
                            "James Hardie Fiber Cement",
                            "LP SmartSide Siding",
                            "Composite Decks",
                            "Wood Decks",
                            "Replacement Windows",
                            "Exterior Repairs"
                        ]
                    })}
                </script>

                {/* Bracktown Local SEO FAQs */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "How much does siding cost in Bracktown, KY?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "In Bracktown and North Lexington, vinyl siding typically ranges from $6.75–$9.75 per sq.ft. installed. James Hardie fiber cement averages $10.75–$15.25 per sq.ft., depending on trim and accents. LP SmartSide is usually $9.50–$13.50 per sq.ft. installed."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do you install composite decks in Bracktown?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes — we install premium composite decks using Trex, TimberTech, and Fiberon. Composite options provide low maintenance, fade resistance, and long-term durability ideal for Kentucky’s year-round weather."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do you offer free deck and siding estimates in Bracktown, KY?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Absolutely. We offer free, detailed estimates for all siding, deck building, and exterior renovation projects in Bracktown and surrounding Lexington communities."
                                }
                            }
                        ]
                    })}
                </script>
            </Helmet>

            <HeroSection
                backgroundImage="/images/deck-builder3.webp"
                customerImage="/images/customer-hero1.png"
                title="Deck and Siding Contractor in Bracktown, KY"
                subtitle="Enhance your Bracktown home with durable siding and beautifully crafted decks — installed by local experts serving North Lexington and all of Fayette County."
                projectCount="2+ exterior projects completed in Central Kentucky"
                city="Bracktown"
                emailTo="yellowstonerenovation@gmail.com"
            />

            <AboutSection />

            <GallerySection
                title="DECK BUILDER GALLERY"
                subtitle="Explore real deck projects completed in Lexington neighborhoods — built with premium materials and expert craftsmanship."
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
                title="Exterior Remodeling Services in Bracktown, KY"
                subtitle="Premium siding systems and custom-built decks designed to improve comfort, durability, and home value."
                accentColor="#0a923d"
                bgImage="/images/deck-bg.jpg"
                services={[
                    {
                        title: "Custom Deck Design & Construction",
                        description:
                            "We create long-lasting decks tailored for Bracktown homes — from modern composite systems to classic wood designs, built for everyday use and harsh weather conditions.",
                        image: "/images/deck11.webp",
                        link: "/cities/bracktown-ky/deck-builder/",
                    },
                    {
                        title: "Composite & Wood Deck Installation",
                        description:
                            "Choose from Trex, TimberTech, Fiberon, or premium wood decking. Every installation includes reinforced framing, drainage solutions, and professional finishing.",
                        image: "/images/deck7.webp",
                        link: "/cities/bracktown-ky/composite-deck-installation/",
                    },
                    {
                        title: "James Hardie®, LP SmartSide & Vinyl Siding Installation",
                        description:
                            "We install durable siding materials engineered for Lexington weather — including James Hardie fiber cement, LP SmartSide wood-engineered siding, and premium vinyl panels.",
                        image: "/images/remodler1.webp",
                        link: "/cities/bracktown-ky/vinyl-siding-installation/",
                    },
                    {
                        title: "Windows & Exterior Trim Upgrades",
                        description:
                            "Boost curb appeal and energy efficiency with professional window replacement and exterior trim enhancements for Bracktown homes.",
                        image: "/images/remodler6.webp",
                        link: "/windows",
                    },
                ]}
            />

            <SidingPageSection
                city="Bracktown"
                layoutOrder={[
                    "hero",
                    "deck",
                    "styles",
                    "types",
                    "cost",
                    "extra",
                    "cta",
                ]}

                heroTitle="Your Trusted Deck & Siding Experts in Bracktown, KY"
                heroText1="Yellowstone Renovation provides high-quality siding and deck installation for homeowners across Bracktown, Masterson Station, and North Lexington."
                heroText2="We use materials built for durability: James Hardie, LP SmartSide, premium vinyl, cedar siding, and composite decking engineered for long-term performance."
                heroImage="/images/deck-builder12.webp"
                heroBottomText="Proudly serving Bracktown, Georgetown Road, Masterson Station, and all of North Lexington."

                deckHeroTitle="Custom Decks in Bracktown, KY — Built for Kentucky Living"
                deckHeroText1="A well-constructed deck improves outdoor comfort, increases home value, and expands your entertainment space."
                deckHeroText2="With composite and wood deck options, we create backyard spaces perfect for gatherings, grilling, relaxation, or family time."
                deckHeroImage="/images/deck-builder8.webp"
                deckServicesTitle="Deck Services We Provide in Bracktown:"
                deckServices={[
                    "Trex & TimberTech composite decks",
                    "Cedar and treated lumber decks",
                    "Two-level and elevated decks",
                    "Screened rooms & covered outdoor areas",
                    "Deck resurfacing & structural repairs",
                    "Railing, lighting & stair upgrades",
                    "Permitting, inspections & project management",
                ]}
                deckCostTitle="Deck Cost in Bracktown, KY"
                deckCostText="Composite decks in Bracktown typically cost $48–$75 per sq. ft., depending on railings, elevation, and design complexity. Wood decks generally range from $30–$55 per sq. ft. Composite systems offer 25–50 year warranties, while wood provides a lower upfront cost with periodic staining required."
                deckImages={[
                    "/images/deck-builder.webp",
                    "/images/deck-builder6.webp",
                    "/images/deck-builder7.webp",
                ]}

                stylesTitle="Popular Siding Styles for Bracktown Homes"
                stylesIntro="Homes in Bracktown range from traditional Lexington architecture to newer modern builds. These siding styles complement both classic and updated designs:"
                styles={[
                    {
                        name: "Lap Siding",
                        text: "Strong horizontal lines that offer classic curb appeal, available in vinyl, fiber cement, and engineered wood.",
                        image: "/images/Lap-Siding.jpg",
                    },
                    {
                        name: "Board and Batten",
                        text: "A bold vertical look that is extremely popular for modern farmhouse and renovated homes in the Bracktown area.",
                        image: "/images/Board-Batten.jpg",
                    },
                    {
                        name: "Shakes & Shingles",
                        text: "Great for accent walls and gables — durable, textured, and visually appealing.",
                        image: "/images/Shakes-Shingles.jpg",
                    },
                ]}

                sidingTypesTitle="Siding Materials We Install in Bracktown, KY"
                sidingTypesIntro="We offer premium siding materials designed for longevity, beauty, and temperature resistance in Lexington:"
                sidingTypes={[
                    { name: "James Hardie Fiber Cement", image: "/images/hardie.jpg" },
                    { name: "LP SmartSide Engineered Wood", image: "/images/SmartSide.jpg" },
                    { name: "Vinyl Siding", image: "/images/Vinyl-Siding.jpg" },
                    { name: "Cedar Siding", image: "/images/Cedar-Siding.jpg" },
                ]}

                costTitle="Siding Installation Cost in Bracktown, KY"
                costIntro="Below are typical siding prices for Bracktown homes. Pricing varies based on home size, trim, insulation, and architectural detail:"
                costTable={[
                    { material: "Vinyl Siding", price: "$6.75 – $9.75 per sq. ft." },
                    { material: "Fiber Cement (James Hardie)", price: "$10.75 – $15.25 per sq. ft." },
                    { material: "Engineered Wood (LP SmartSide)", price: "$9.50 – $13.50 per sq. ft." },
                    { material: "Cedar Siding", price: "$13.50 – $19.00 per sq. ft." },
                    { material: "Metal Siding", price: "$8.75 – $14.50 per sq. ft." },
                ]}

                extraSectionTitle="Why Bracktown Residents Choose Yellowstone Renovation"
                extraSectionText="Homeowners in Bracktown rely on our experienced team for quality craftsmanship, clear communication, and long-lasting exterior upgrades."
                extraPoints={[
                    "⭐ Local Lexington deck & siding specialists",
                    "⭐ Premium materials and clean installation",
                    "⭐ Licensed, insured, experienced crews",
                    "⭐ 5-year workmanship warranty",
                    "⭐ Transparent estimates with no hidden fees",
                ]}

                ctaTitle="Get Your Free Deck or Siding Quote in Bracktown, KY"
                ctaText="Ready to upgrade your home’s exterior? Contact Yellowstone Renovation for a free estimate — proudly serving Bracktown and all North Lexington neighborhoods."
                ctaImage="/images/deck-builder13.webp"
            />

            <TestimonialsSection />
            <QuoteSection />
        </Layout>
    );
}
