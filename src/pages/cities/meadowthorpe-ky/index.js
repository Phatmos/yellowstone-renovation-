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

export default function MeadowthorpeKY() {
    return (
        <Layout>
            <Helmet>
                {/* Local Meadowthorpe Keywords */}
                <meta
                    name="keywords"
                    content="Deck Builder Meadowthorpe KY, Siding Contractor Meadowthorpe Lexington, James Hardie Meadowthorpe KY, Composite Deck Meadowthorpe KY, Vinyl Siding Meadowthorpe KY, LP SmartSide Lexington KY"
                />

                {/* Social Sharing */}
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Deck and Siding Contractor in Meadowthorpe, KY | Exterior Remodeling Experts"
                />
                <meta
                    property="og:description"
                    content="Yellowstone Renovation installs premium siding and builds long-lasting custom decks in Meadowthorpe, KY. Composite decks, wood decks, vinyl siding, LP SmartSide, and James Hardie — built for Kentucky weather."
                />
                <meta property="og:url" content="https://yellowstonerenovation.com/cities/meadowthorpe-ky/" />
                <meta property="og:site_name" content="Yellowstone Renovation" />
                <meta property="og:image" content="https://yellowstonerenovation.com/images/remodler12.webp" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Deck and Siding Contractor in Meadowthorpe, KY | Yellowstone Renovation"
                />
                <meta
                    name="twitter:description"
                    content="Transform your Meadowthorpe home with durable siding and custom-built decks. Serving West Lexington and all of Fayette County."
                />
                <meta
                    name="twitter:image"
                    content="https://yellowstonerenovation.com/images/remodler12.webp"
                />
            </Helmet>

            <SEO
                title="Deck and Siding Contractor in Meadowthorpe, KY | Trusted Exterior Professionals"
                description="Yellowstone Renovation installs composite decks, wood decks, James Hardie, LP SmartSide, and vinyl siding in Meadowthorpe, KY. Strong warranties, detailed craftsmanship, and free estimates throughout Lexington's west side."
                pathname="/cities/meadowthorpe-ky/"
                image="https://yellowstonerenovation.com/images/remodler12.webp"
            />

            <Helmet>
                {/* Local Business Schema — Meadowthorpe */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HomeAndConstructionBusiness",
                        "name": "Yellowstone Renovation",
                        "url": "https://yellowstonerenovation.com",
                        "image": "https://yellowstonerenovation.com/images/remodler12.webp",
                        "logo": "https://yellowstonerenovation.com/icons/logo.webp",
                        "telephone": "859-545-7020",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Meadowthorpe",
                            "addressRegion": "KY",
                            "postalCode": "40504",
                            "addressCountry": "US"
                        },
                        "areaServed": [
                            "Meadowthorpe, KY",
                            "Lexington, KY",
                            "Beaumont, KY",
                            "Fayette County, KY"
                        ],
                        "sameAs": [
                            "https://www.facebook.com/p/Yellowstone-Renovation-61551123481170/",
                            "https://www.instagram.com/yellowstone_renovation/",
                            "https://maps.google.com/?q=Yellowstone+Renovation+Meadowthorpe+KY"
                        ],
                        "serviceType": [
                            "Vinyl Siding Installation",
                            "James Hardie Fiber Cement Installation",
                            "LP SmartSide Siding Installation",
                            "Composite Deck Installation",
                            "Wood Deck Construction",
                            "Exterior Repairs",
                            "Replacement Windows"
                        ]
                    })}
                </script>

                {/* Meadowthorpe FAQ Schema */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "How much does siding cost in Meadowthorpe, KY?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Vinyl siding in Meadowthorpe ranges from $6.75–$9.75 per sq.ft. installed. James Hardie fiber-cement siding averages $10.75–$15.50 per sq.ft., depending on trim detail. LP SmartSide engineered wood typically costs $9.50–$13.50 per sq.ft. installed."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do you install composite decks in Meadowthorpe?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes — we install composite decks using Trex, TimberTech, and Fiberon. Composite alternatives offer long lifespan, low maintenance, fade resistance, and excellent durability against Kentucky weather."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Are free estimates available in Meadowthorpe?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Absolutely. We provide free, no-pressure estimates for siding, decking, and exterior remodeling throughout Meadowthorpe, Beaumont, Cardinal Valley, and all of West Lexington."
                                }
                            }
                        ]
                    })}
                </script>
            </Helmet>

            <HeroSection
                backgroundImage="/images/deck-builder8.webp"
                customerImage="/images/customer-hero1.png"
                title="Deck and Siding Contractor in Meadowthorpe, KY"
                subtitle="Transform your Meadowthorpe home with durable siding and custom outdoor living spaces designed for comfort, style, and long-term value."
                projectCount="2+ exterior projects completed in Central Kentucky"
                city="Meadowthorpe"
                emailTo="yellowstonerenovation@gmail.com"
            />

            <AboutSection />

            <GallerySection
                title="DECK BUILDER GALLERY"
                subtitle="Browse our completed deck projects built across Lexington — quality craftsmanship, durable materials, and clean installation."
                highlight="DECK BUILDER"
                background="#ffffff"
                images={[
                    "/images/deck/deck-lexington01.webp",
                    "/images/deck/deck-lexington87.webp",
                    "/images/deck/deck-lexington35.webp",
                    "/images/deck/deck-lexington21.webp",
                    "/images/deck/deck-lexington65.webp",
                    "/images/deck/deck-lexington13.webp",
                ]}
            />

            <Services
                title="Exterior Remodeling Services in Meadowthorpe, KY"
                subtitle="From premium siding systems to custom-designed decks, we deliver reliable workmanship for Meadowthorpe homeowners."
                accentColor="#0a923d"
                bgImage="/images/deck-bg.jpg"
                services={[
                    {
                        title: "Custom Deck Design & Construction",
                        description:
                            "We design and build handcrafted decks tailored for Meadowthorpe properties. Choose low-maintenance composite or the warmth of natural wood — built for long-term comfort and durability.",
                        image: "/images/deck11.webp",
                        link: "/cities/meadowthorpe-ky/deck-builder/",
                    },
                    {
                        title: "Composite & Wood Deck Installation",
                        description:
                            "Trex, TimberTech, cedar, and pressure-treated lumber — installed with precision. Every deck includes reinforced framing, drainage planning, and long-lasting construction.",
                        image: "/images/deck7.webp",
                        link: "/cities/meadowthorpe-ky/composite-deck-installation/",
                    },
                    {
                        title: "James Hardie®, LP SmartSide & Vinyl Siding Installation",
                        description:
                            "Upgrade your Meadowthorpe home with durable siding materials engineered to withstand Kentucky weather — including Hardie, SmartSide, and premium vinyl systems.",
                        image: "/images/remodler1.webp",
                        link: "/cities/meadowthorpe-ky/vinyl-siding-installation/",
                    },
                    {
                        title: "Windows & Exterior Trim Upgrades",
                        description:
                            "Boost home efficiency and curb appeal with professionally installed windows and custom exterior trim solutions.",
                        image: "/images/remodler6.webp",
                        link: "/windows",
                    },
                ]}
            />

            <SidingPageSection
                city="Meadowthorpe"
                layoutOrder={[
                    "hero",
                    "deck",
                    "styles",
                    "types",
                    "cost",
                    "extra",
                    "cta",
                ]}

                heroTitle="Your Trusted Deck & Siding Specialists in Meadowthorpe, KY"
                heroText1="We install premium siding and build long-lasting custom decks for homeowners throughout Meadowthorpe and West Lexington."
                heroText2="Our products include James Hardie, LP SmartSide, vinyl siding, cedar siding, and composite decking — all installed with detailed craftsmanship and strong warranties."
                heroImage="/images/deck-builder12.webp"
                heroBottomText="Serving Meadowthorpe, Beaumont, Cardinal Valley, and all of West Lexington."

                deckHeroTitle="Custom Decks in Meadowthorpe, KY — Built for Comfort & Performance"
                deckHeroText1="A well-designed deck adds living space, improves backyard usability, and enhances property value."
                deckHeroText2="We create composite and wood decks built to last — engineered for structural integrity, drainage, and year-round comfort."
                deckHeroImage="/images/deck-builder6.webp"
                deckServicesTitle="Deck Services We Provide in Meadowthorpe:"
                deckServices={[
                    "Trex, TimberTech & Fiberon composite decks",
                    "Cedar and pressure-treated wood decks",
                    "Multi-level and raised deck construction",
                    "Screened rooms, pergolas & covered structures",
                    "Deck resurfacing and safety repairs",
                    "Railing, stair & lighting upgrades",
                    "Permits, inspections & project management",
                ]}
                deckCostTitle="Deck Cost in Meadowthorpe, KY"
                deckCostText="Composite decks in Meadowthorpe typically range from $48–$78 per sq. ft., depending on railing type, elevation, and design details. Wood decks range from $30–$55 per sq. ft. Composite offers long-term durability with minimal upkeep, while wood provides a lower initial investment with periodic staining required."
                deckImages={[
                    "/images/deck-builder7.webp",
                    "/images/deck-builder8.webp",
                    "/images/deck-builder.webp",
                ]}

                stylesTitle="Popular Siding Styles for Meadowthorpe Homes"
                stylesIntro="From classic Lexington architecture to modern renovations, Meadowthorpe homes benefit from durable, attractive siding options."
                styles={[
                    {
                        name: "Lap Siding",
                        text: "Traditional horizontal lines that offer a timeless profile — available in vinyl, Hardie, and LP SmartSide.",
                        image: "/images/Lap-Siding.jpg",
                    },
                    {
                        name: "Board and Batten",
                        text: "A modern, vertical style ideal for updated Meadowthorpe homes and farmhouse-inspired renovations.",
                        image: "/images/Board-Batten.jpg",
                    },
                    {
                        name: "Shakes & Shingles",
                        text: "Perfect for gables and accent areas — providing rich texture and strong visual appeal.",
                        image: "/images/Shakes-Shingles.jpg",
                    },
                ]}

                sidingTypesTitle="Siding Materials We Install in Meadowthorpe"
                sidingTypesIntro="Choose from durable, high-performance products built to withstand Lexington’s four-season climate:"
                sidingTypes={[
                    { name: "James Hardie Fiber Cement", image: "/images/hardie.jpg" },
                    { name: "LP SmartSide Engineered Wood", image: "/images/SmartSide.jpg" },
                    { name: "Premium Vinyl Siding", image: "/images/Vinyl-Siding.jpg" },
                    { name: "Cedar Siding", image: "/images/Cedar-Siding.jpg" },
                ]}

                costTitle="Siding Installation Cost in Meadowthorpe, KY"
                costIntro="Below are typical siding ranges for Meadowthorpe homes. Pricing varies by square footage, trim detail, soffit requirements, and insulation upgrades:"
                costTable={[
                    { material: "Vinyl Siding", price: "$6.75 – $9.75 per sq. ft." },
                    { material: "Fiber Cement (James Hardie)", price: "$10.75 – $15.50 per sq. ft." },
                    { material: "Engineered Wood (LP SmartSide)", price: "$9.50 – $13.50 per sq. ft." },
                    { material: "Cedar Siding", price: "$13.50 – $19.50 per sq. ft." },
                    { material: "Metal Siding", price: "$9.00 – $14.75 per sq. ft." },
                ]}

                extraSectionTitle="Why Meadowthorpe Homeowners Choose Yellowstone Renovation"
                extraSectionText="Our team is known for high-quality workmanship, clear communication, clean job sites, and strong material warranties — delivering beautiful, long-lasting results."
                extraPoints={[
                    "⭐ Trusted by West Lexington homeowners",
                    "⭐ Premium-grade materials & trained installers",
                    "⭐ Licensed, insured, and local to Lexington",
                    "⭐ 5-year workmanship warranty",
                    "⭐ Honest pricing with detailed written estimates",
                ]}

                ctaTitle="Get Your Free Deck or Siding Quote in Meadowthorpe, KY"
                ctaText="Ready to upgrade your home? Contact Yellowstone Renovation for a free estimate — serving Meadowthorpe, Beaumont, and all of West Lexington."
                ctaImage="/images/deck-builder13.webp"
            />

            <TestimonialsSection />
            <QuoteSection />
        </Layout>
    );
}
