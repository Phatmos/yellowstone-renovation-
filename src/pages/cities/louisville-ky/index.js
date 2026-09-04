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

export default function LouisvilleKY() {
    return (
        <Layout>
            <Helmet>
                <meta
                    name="keywords"
                    content="Deck Builder Louisville KY, Siding Contractor Louisville KY, James Hardie Louisville, Composite Decks Louisville KY, Vinyl Siding Louisville, Exterior Remodeling Louisville KY"
                />

                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Deck and Siding Contractor in Louisville, KY | Yellowstone Renovation"
                />
                <meta
                    property="og:description"
                    content="Yellowstone Renovation provides professional deck building, composite deck installation, vinyl siding, and James Hardie siding services in Louisville, KY and surrounding areas."
                />
                <meta
                    property="og:url"
                    content="https://yellowstonerenovation.com/cities/louisville-ky/"
                />
                <meta property="og:site_name" content="Yellowstone Renovation" />
                <meta
                    property="og:image"
                    content="https://yellowstonerenovation.com/images/remodler1.webp"
                />

                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Deck and Siding Contractor in Louisville, KY | Yellowstone Renovation"
                />
                <meta
                    name="twitter:description"
                    content="Custom decks, composite decking, vinyl siding, James Hardie siding, and exterior remodeling services in Louisville, KY."
                />
                <meta
                    name="twitter:image"
                    content="https://yellowstonerenovation.com/images/remodler1.webp"
                />
            </Helmet>

            <SEO
                title="Deck and Siding Contractor in Louisville, KY | Yellowstone Renovation"
                description="Yellowstone Renovation provides deck building, composite deck installation, vinyl siding, James Hardie siding, and exterior remodeling services in Louisville, KY and nearby areas."
                pathname="/cities/louisville-ky/"
                image="https://yellowstonerenovation.com/images/remodler1.webp"
            />

            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HomeAndConstructionBusiness",
                        "@id": "https://yellowstonerenovation.com/#localbusiness-louisville",
                        "name": "Yellowstone Renovation",
                        "url": "https://yellowstonerenovation.com/cities/louisville-ky/",
                        "image": "https://yellowstonerenovation.com/images/remodler1.webp",
                        "logo": "https://yellowstonerenovation.com/icons/logo.webp",
                        "telephone": "(859) 765-7267",
                        "priceRange": "$$",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Louisville",
                            "addressRegion": "KY",
                            "addressCountry": "US"
                        },
                        "areaServed": [
                            "Louisville, KY",
                            "Jeffersontown, KY",
                            "St. Matthews, KY",
                            "Middletown, KY",
                            "Prospect, KY",
                            "Lyndon, KY",
                            "Shively, KY",
                            "Jefferson County, KY"
                        ],
                        "sameAs": [
                            "https://www.facebook.com/p/Yellowstone-Renovation-61551123481170/",
                            "https://www.instagram.com/yellowstone_renovation/"
                        ],
                        "serviceType": [
                            "Deck Construction",
                            "Composite Deck Installation",
                            "Wood Deck Installation",
                            "Vinyl Siding Installation",
                            "James Hardie Fiber Cement Siding",
                            "Exterior Remodeling",
                            "Window and Trim Upgrades"
                        ]
                    })}
                </script>

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "@id": "https://yellowstonerenovation.com/#organization-louisville",
                        "name": "Yellowstone Renovation",
                        "url": "https://yellowstonerenovation.com",
                        "logo": "https://yellowstonerenovation.com/icons/logo.webp",
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "telephone": "(859) 765-7267",
                            "contactType": "customer support",
                            "areaServed": "US"
                        }
                    })}
                </script>

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "@id": "https://yellowstonerenovation.com/cities/louisville-ky/#deck-siding-service",
                        "name": "Deck and Siding Services in Louisville, KY",
                        "description": "Professional deck building, composite decking, wood decks, vinyl siding, James Hardie siding, and exterior remodeling services in Louisville, KY.",
                        "provider": {
                            "@type": "Organization",
                            "name": "Yellowstone Renovation",
                            "url": "https://yellowstonerenovation.com"
                        },
                        "areaServed": {
                            "@type": "City",
                            "name": "Louisville",
                            "addressRegion": "KY",
                            "addressCountry": "US"
                        },
                        "serviceType": [
                            "Deck Builder",
                            "Siding Contractor",
                            "Composite Deck Installation",
                            "James Hardie Siding Installation",
                            "Vinyl Siding Installation"
                        ]
                    })}
                </script>

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "How much does a deck cost in Louisville, KY?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Deck pricing in Louisville depends on size, height, framing, stairs, railing, and material. Wood decks usually cost less, while composite decks cost more but require less maintenance."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do you build composite decks in Louisville?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes. Yellowstone Renovation builds composite decks in Louisville using low-maintenance decking options designed for Kentucky weather."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do you install siding in Louisville and nearby areas?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes. We install vinyl siding, James Hardie fiber cement siding, LP SmartSide, cedar siding, and exterior trim in Louisville and nearby communities."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Are estimates free in Louisville?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes. We provide free estimates for deck building, siding installation, and exterior remodeling projects in Louisville, KY."
                                }
                            }
                        ]
                    })}
                </script>
            </Helmet>

            <HeroSection
                backgroundImage="/images/deck-builder3.webp"
                customerImage="/images/customer-hero1.png"
                title="Deck and Siding Contractor in Louisville, KY"
                subtitle="Upgrade your Louisville home with a custom deck, durable siding, and exterior improvements built for Kentucky weather."
                projectCount="Custom deck and siding projects completed across Central Kentucky"
                city="Louisville"
                emailTo="yellowstonerenovation@gmail.com"
            />

            <AboutSection />

            <GallerySection
                title="LOUISVILLE DECK BUILDER GALLERY"
                subtitle="Browse our deck projects — composite, wood, railing, stairs, and custom outdoor living spaces built for Kentucky homes."
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
                    "/images/deck/deck-lexington21.webp",
                    "/images/deck/deck-lexington68.webp",
                    "/images/deck/deck-lexington67.webp",
                    "/images/deck/deck-lexington82.webp",
                    "/images/deck/deck-lexington7.webp",
                    "/images/deck/deck-lexington96.webp",
                ]}
            />

            <Services
                title="Exterior Remodeling Services in Louisville, KY"
                subtitle="Decks, siding, trim, windows, and exterior upgrades completed with clean workmanship and honest communication."
                accentColor="#0a923d"
                bgImage="/images/deck-bg.jpg"
                services={[
                    {
                        title: "Custom Deck Design & Construction",
                        description:
                            "We build strong, attractive decks for Louisville homes — from simple backyard platforms to larger outdoor living spaces with stairs, railings, and custom layouts.",
                        image: "/images/deck11.webp",
                        link: "/cities/louisville-ky/deck-builder/",
                    },
                    {
                        title: "Composite & Wood Deck Installation",
                        description:
                            "Choose composite decking for low maintenance or pressure-treated wood for a more budget-friendly option. We build decks designed for Kentucky rain, humidity, and seasonal changes.",
                        image: "/images/deck7.webp",
                        link: "/cities/louisville-ky/composite-deck-installation/",
                    },
                    {
                        title: "James Hardie® & Vinyl Siding Installation",
                        description:
                            "Protect your home with durable siding. We install James Hardie fiber cement, vinyl siding, LP SmartSide, and exterior trim systems.",
                        image: "/images/remodler1.webp",
                        link: "/cities/louisville-ky/vinyl-siding-installation/",
                    },
                    {
                        title: "Windows & Exterior Trim Upgrades",
                        description:
                            "Improve curb appeal, weather protection, and energy efficiency with replacement windows, exterior trim, fascia, and finish upgrades.",
                        image: "/images/remodler6.webp",
                        link: "/windows",
                    },
                ]}
            />

            <SidingPageSection
                city="Louisville"
                layoutOrder={[
                    "hero",
                    "deck",
                    "styles",
                    "types",
                    "cost",
                    "extra",
                    "cta",
                ]}

                heroTitle="Louisville’s Trusted Deck and Siding Specialists"
                heroText1="Yellowstone Renovation helps Louisville homeowners improve their exterior with custom deck construction, siding installation, and professional exterior remodeling."
                heroText2="We install composite decks, pressure-treated wood decks, vinyl siding, James Hardie, LP SmartSide, cedar, metal siding, exterior trim, and window upgrades."
                heroImage="/images/deck-builder12.webp"
                heroBottomText="Serving Louisville, Jeffersontown, St. Matthews, Middletown, Prospect, Lyndon, Shively, and nearby Jefferson County areas."

                deckHeroTitle="Custom Decks in Louisville, KY — Built Strong and Built Clean"
                deckHeroText1="A well-built deck gives your home more outdoor living space for grilling, relaxing, and spending time with family."
                deckHeroText2="We build composite and wood decks with strong framing, clean details, proper railings, safe stairs, and layouts that fit your home."
                deckHeroImage="/images/deck-builder8.webp"
                deckServicesTitle="Deck Services We Provide in Louisville:"
                deckServices={[
                    "Custom deck design and layout planning",
                    "Composite deck installation",
                    "Pressure-treated wood deck construction",
                    "Deck replacement and resurfacing",
                    "Deck stairs, railing, and fascia upgrades",
                    "Covered decks, pergolas, and screened porch options",
                    "Deck repair and structural improvement",
                    "Permit and inspection coordination when required"
                ]}
                deckCostTitle="Deck Cost in Louisville, KY"
                deckCostText="Deck cost in Louisville depends on size, height, stairs, railing, framing condition, and material choice. Composite decks usually cost more upfront but require less maintenance. Wood decks are more budget-friendly but need staining and ongoing care."
                deckImages={[
                    "/images/deck-builder.webp",
                    "/images/deck-builder6.webp",
                    "/images/deck-builder7.webp",
                ]}

                stylesTitle="Siding Styles Popular in Louisville"
                stylesIntro="Louisville homes range from traditional brick houses to modern remodels, so siding style matters. We help homeowners choose siding that improves curb appeal and protects the structure."
                styles={[
                    {
                        name: "Lap Siding",
                        text: "A clean, classic siding style that works well on most Louisville homes. Available in vinyl, fiber cement, engineered wood, and cedar.",
                        image: "/images/Lap-Siding.jpg",
                    },
                    {
                        name: "Board and Batten",
                        text: "A vertical siding style often used for modern farmhouse designs, gables, additions, and accent walls.",
                        image: "/images/Board-Batten.jpg",
                    },
                    {
                        name: "Shakes & Shingles",
                        text: "A strong option for gables, accent areas, and homes that need more texture and character.",
                        image: "/images/Shakes-Shingles.jpg",
                    },
                ]}

                sidingTypesTitle="Siding Materials We Install in Louisville"
                sidingTypesIntro="We install durable siding products designed to handle Kentucky weather, moisture, wind, and seasonal temperature changes."
                sidingTypes={[
                    { name: "James Hardie Fiber Cement", image: "/images/hardie.jpg" },
                    { name: "LP SmartSide Engineered Wood", image: "/images/SmartSide.jpg" },
                    { name: "Vinyl Siding", image: "/images/Vinyl-Siding.jpg" },
                    { name: "Cedar Siding", image: "/images/Cedar-Siding.jpg" },
                ]}

                costTitle="Siding Installation Cost in Louisville, KY"
                costIntro="Siding pricing depends on home size, number of stories, tear-off, trim details, material type, and wall layout. These are general installed price ranges:"
                costTable={[
                    { material: "Vinyl Siding", price: "$6.50 – $9.50 per sq. ft." },
                    { material: "Fiber Cement (James Hardie)", price: "$10.00 – $15.00 per sq. ft." },
                    { material: "Engineered Wood (LP SmartSide)", price: "$9.00 – $13.00 per sq. ft." },
                    { material: "Cedar Wood Siding", price: "$12.00 – $18.00 per sq. ft." },
                    { material: "Metal Siding", price: "$8.00 – $13.00 per sq. ft." },
                ]}

                extraSectionTitle="Why Louisville Homeowners Choose Yellowstone Renovation"
                extraSectionText="We focus on clear pricing, strong workmanship, clean job sites, and exterior projects that actually hold up after the crew leaves."
                extraPoints={[
                    "Local Kentucky crew with real exterior remodeling experience",
                    "Decks, siding, trim, windows, and exterior repairs handled professionally",
                    "Licensed and insured for residential exterior work",
                    "Clear communication from estimate to project completion",
                    "Detailed estimates with material and labor scope explained",
                    "Free, no-pressure estimates for Louisville homeowners"
                ]}

                ctaTitle="Get Your Free Deck or Siding Quote in Louisville"
                ctaText="Ready to upgrade your exterior? Contact Yellowstone Renovation for a free estimate on deck building, composite decking, siding installation, and exterior remodeling in Louisville, KY."
                ctaImage="/images/deck-builder13.webp"
            />

            <TestimonialsSection />
            <QuoteSection />
        </Layout>
    );
}