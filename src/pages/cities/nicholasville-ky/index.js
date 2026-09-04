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

export default function NicholasvilleKY() {
    return (
        <Layout>
            <Helmet>
                {/* ✅ Local Nicholasville Keywords */}
                <meta
                    name="keywords"
                    content="Deck Builder Nicholasville KY, Siding Contractor Nicholasville KY, James Hardie Nicholasville, Composite Decks Jessamine County, Vinyl Siding Nicholasville"
                />

                {/* ✅ Social Sharing — Facebook / iMessage / LinkedIn */}
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Deck and Siding Contractor in Nicholasville, KY | Exterior Builder You Can Count On"
                />
                <meta
                    property="og:description"
                    content="Trusted deck and siding contractor in Nicholasville, KY. Yellowstone Renovation installs composite decks, wood decks, and premium siding built for Kentucky weather. Free estimates in Jessamine County."
                />
                <meta
                    property="og:url"
                    content="https://yellowstonerenovation.com/cities/nicholasville-ky/"
                />
                <meta property="og:site_name" content="Yellowstone Renovation" />
                <meta
                    property="og:image"
                    content="https://yellowstonerenovation.com/images/remodler1.webp"
                />

                {/* ✅ Twitter Preview */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Deck and Siding Contractor in Nicholasville, KY | Yellowstone Renovation"
                />
                <meta
                    name="twitter:description"
                    content="Upgrade your Nicholasville home with durable siding and custom-built decks. Exterior builder you can trust — free quotes across Jessamine County."
                />
                <meta
                    name="twitter:image"
                    content="https://yellowstonerenovation.com/images/remodler1.webp"
                />
            </Helmet>

            <SEO
                title="Deck and Siding Contractor in Nicholasville, KY | Exterior Builder You Can Trust"
                description="Yellowstone Renovation provides professional siding installation and custom deck construction in Nicholasville, KY. We install composite, wood, vinyl, and James Hardie siding — designed for Kentucky’s weather. Free estimates across Jessamine County."
                pathname="/cities/nicholasville-ky/"
                image="https://yellowstonerenovation.com/images/remodler1.webp"
            />

            <Helmet>

                {/* ⭐ LOCAL BUSINESS — Nicholasville KY */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HomeAndConstructionBusiness",
                        "@id": "https://yellowstonerenovation.com/#localbusiness-nicholasville",
                        "name": "Yellowstone Renovation",
                        "url": "https://yellowstonerenovation.com",
                        "image": "https://yellowstonerenovation.com/images/remodler1.webp",
                        "logo": "https://yellowstonerenovation.com/icons/logo.webp",
                        "telephone": "(859) 765-7267",
                        "priceRange": "$$",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "120 Tina Way",
                            "addressLocality": "Nicholasville",
                            "addressRegion": "KY",
                            "postalCode": "40356",
                            "addressCountry": "US"
                        },
                        "areaServed": [
                            "Nicholasville, KY",
                            "Wilmore, KY",
                            "Jessamine County, KY",
                            "Lexington, KY"
                        ],
                        "sameAs": [
                            "https://www.facebook.com/p/Yellowstone-Renovation-61551123481170/",
                            "https://www.instagram.com/yellowstone_renovation/",
                            "https://maps.google.com/?q=Yellowstone+Renovation+Nicholasville+KY"
                        ],
                        "serviceType": [
                            "Vinyl Siding Installation",
                            "James Hardie Fiber Cement",
                            "Composite Decks",
                            "Wood Decks",
                            "Replacement Windows",
                            "Exterior Repairs"
                        ],
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": "4.9",
                            "reviewCount": 87
                        }
                    })}
                </script>

                {/* ⭐ ORGANIZATION SCHEMA */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "@id": "https://yellowstonerenovation.com/#organization-nicholasville",
                        "name": "Yellowstone Renovation",
                        "url": "https://yellowstonerenovation.com",
                        "logo": "https://yellowstonerenovation.com/icons/logo.webp",
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "telephone": "(859) 765-7267",
                            "contactType": "customer support",
                            "areaServed": "US"
                        },
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "120 Tina Way",
                            "addressLocality": "Nicholasville",
                            "addressRegion": "KY",
                            "postalCode": "40356",
                            "addressCountry": "US"
                        }
                    })}
                </script>

                {/* ⭐ PRODUCT SCHEMA — RATING SHOWS IN GOOGLE */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Product",
                        "@id": "https://yellowstonerenovation.com/#product-nicholasville",
                        "name": "Siding & Deck Services — Nicholasville, KY",
                        "description": "Professional siding installation, deck building, and exterior renovation services in Nicholasville and Jessamine County.",
                        "image": "https://yellowstonerenovation.com/images/remodler1.webp",
                        "brand": {
                            "@type": "Brand",
                            "name": "Yellowstone Renovation"
                        },
                        "sku": "SERVICE-NICHOLASVILLE-001",
                        "mpn": "SERVICE-NICHOLASVILLE-001",
                        "url": "https://yellowstonerenovation.com",
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": "4.9",
                            "reviewCount": 87
                        },
                        "offers": {
                            "@type": "Offer",
                            "url": "https://yellowstonerenovation.com",
                            "priceCurrency": "USD",
                            "price": "1",
                            "availability": "https://schema.org/InStock"
                        }
                    })}
                </script>

                {/* ⭐ FAQ SCHEMA — Nicholasville KY */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "How much does siding cost in Nicholasville?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "In Nicholasville, vinyl siding typically ranges from $7–$12 per sq.ft. installed. James Hardie siding usually runs $14–$21 per sq.ft. depending on trim, layout, and home size."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do you work in Wilmore and Jessamine County?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes — we serve Nicholasville, Wilmore, Brannon Crossing, and all of Jessamine County with siding installation, deck building, and exterior remodeling."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Are estimates free in Nicholasville?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes — we provide free, no-obligation estimates for all siding and deck projects throughout Nicholasville and Jessamine County."
                                }
                            }
                        ]
                    })}
                </script>

            </Helmet>

            <HeroSection
                backgroundImage="/images/deck-builder3.webp"
                customerImage="/images/customer-hero1.png"
                title="Deck and Siding Contractor in Nicholasville, KY"
                subtitle="Upgrade your Nicholasville home with custom-built decks and durable siding — designed for long-term performance and curb appeal in Kentucky’s weather."
                projectCount="32+ deck and siding projects completed this year across Central Kentucky"
                city="Nicholasville"
                emailTo="yellowstonerenovation@gmail.com"
            />

            <AboutSection />

            <GallerySection
                title="DECK BUILDER GALLERY"
                subtitle="Browse our deck projects — uniquely crafted for Kentucky homes. Composite, wood, and custom designs built to last."
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
                title="Exterior Remodeling Services in Nicholasville, KY"
                subtitle="From decks to siding, we deliver clean workmanship, honest communication, and long-lasting results."
                accentColor="#0a923d"
                bgImage="/images/deck-bg.jpg"
                services={[
                    {
                        title: "Custom Deck Design & Construction",
                        description:
                            "We build strong, beautiful decks tailored to Nicholasville homes. From simple backyard platforms to multi-level outdoor spaces — built to last.",
                        image: "/images/deck11.webp",
                        link: "/cities/nicholasville-ky/deck-builder/",
                    },
                    {
                        title: "Composite & Wood Deck Installation",
                        description:
                            "Choose composite for low maintenance or wood for natural beauty. Our decks withstand Kentucky storms, humidity, and season changes.",
                        image: "/images/deck7.webp",
                        link: "/cities/nicholasville-ky/composite-deck-installation/",
                    },
                    {
                        title: "James Hardie® & Vinyl Siding Installation",
                        description:
                            "Protect your home with durable siding. We install James Hardie fiber cement and high-quality vinyl siding for long-term performance.",
                        image: "/images/remodler1.webp",
                        link: "/cities/nicholasville-ky/vinyl-siding-installation/",
                    },
                    {
                        title: "Windows & Exterior Trim Upgrades",
                        description:
                            "Improve curb appeal and energy efficiency with new windows and precision exterior trim work.",
                        image: "/images/remodler6.webp",
                        link: "/windows",
                    },
                ]}
            />

            <SidingPageSection
                city="Nicholasville"
                layoutOrder={[
                    "hero",
                    "deck",
                    "styles",
                    "types",
                    "cost",
                    "extra",
                    "cta",
                ]}

                heroTitle="Nicholasville’s Trusted Deck and Siding Specialists"
                heroText1="Yellowstone Renovation helps Nicholasville homeowners upgrade their exteriors with professional siding installation and beautifully crafted decks."
                heroText2="We install James Hardie, LP SmartSide, vinyl, cedar, and metal siding — plus Trex and TimberTech composite decks built for strength and beauty."
                heroImage="/images/deck-builder12.webp"
                heroBottomText="Serving Nicholasville, Wilmore, Brannon Crossing, and all of Jessamine County — from full siding replacement to outdoor living transformations."

                deckHeroTitle="Custom Decks in Nicholasville, KY — Built for Comfort & Longevity"
                deckHeroText1="A well-designed deck adds valuable outdoor living space for relaxing, cooking out, and spending time with family."
                deckHeroText2="We offer composite and wood options, tailored for Nicholasville homes and built to last."
                deckHeroImage="/images/deck-builder8.webp"
                deckServicesTitle="Deck Services We Provide in Nicholasville:"
                deckServices={[
                    "Custom deck design & layout planning",
                    "Trex and TimberTech composite deck installation",
                    "Cedar and pressure-treated wood decks",
                    "Covered decks, pergolas, and screened porches",
                    "Deck resurfacing and structural repairs",
                    "Stair, railing, and lighting upgrades",
                    "Permitting and inspections handled start-to-finish"
                ]}
                deckCostTitle="Deck Cost in Nicholasville, KY"
                deckCostText="Composite decks in Nicholasville typically cost $45–$65 per sq. ft., depending on layout and height. Wood decks range from $30–$50 per sq. ft. Every project includes materials, labor, cleanup, and inspections."
                deckImages={[
                    "/images/deck-builder.webp",
                    "/images/deck-builder6.webp",
                    "/images/deck-builder7.webp",
                ]}

                stylesTitle="Siding Styles Popular in Nicholasville"
                stylesIntro="From modern farmhouse styles to traditional Kentucky homes, we help Nicholasville homeowners choose siding designs that elevate curb appeal and provide long-term durability."
                styles={[
                    {
                        name: "Lap Siding",
                        text: "A timeless and durable style ideal for most Nicholasville homes. Available in fiber cement, vinyl, and engineered wood.",
                        image: "/images/Lap-Siding.jpg",
                    },
                    {
                        name: "Board and Batten",
                        text: "A vertical modern style that adds character and depth. Popular in newer Jessamine County builds.",
                        image: "/images/Board-Batten.jpg",
                    },
                    {
                        name: "Shakes & Shingles",
                        text: "Perfect for accent areas, gables, or full façades — offering a warm, handcrafted appearance.",
                        image: "/images/Shakes-Shingles.jpg",
                    },
                ]}

                sidingTypesTitle="Siding Materials We Install in Nicholasville"
                sidingTypesIntro="We install top-quality siding materials backed by strong warranties and clean craftsmanship."
                sidingTypes={[
                    { name: "James Hardie Fiber Cement", image: "/images/hardie.jpg" },
                    { name: "LP SmartSide Engineered Wood", image: "/images/SmartSide.jpg" },
                    { name: "Vinyl Siding", image: "/images/Vinyl-Siding.jpg" },
                    { name: "Cedar Siding", image: "/images/Cedar-Siding.jpg" },
                ]}

                costTitle="Siding Installation Cost in Nicholasville, KY"
                costIntro="Pricing depends on home size, trim options, material, and layout. These are typical siding price ranges for Nicholasville:"
                costTable={[
                    { material: "Vinyl Siding", price: "$6.50 – $9.00 per sq. ft." },
                    { material: "Fiber Cement (James Hardie)", price: "$10.00 – $14.00 per sq. ft." },
                    { material: "Engineered Wood (LP SmartSide)", price: "$9.00 – $12.00 per sq. ft." },
                    { material: "Cedar Wood Siding", price: "$12.00 – $18.00 per sq. ft." },
                    { material: "Metal Siding", price: "$8.00 – $13.00 per sq. ft." },
                ]}

                extraSectionTitle="Why Nicholasville Residents Choose Yellowstone Renovation"
                extraSectionText="We provide honest pricing, clean workmanship, and reliable communication — earning trust across Nicholasville and Jessamine County."
                extraPoints={[
                    "⭐ Local Kentucky crew — no random subcontractors",
                    "⭐ Licensed, insured, and highly experienced installers",
                    "⭐ 5-year workmanship warranty on all projects",
                    "⭐ Over 400 exterior projects completed in Central Kentucky",
                    "⭐ Free, detailed, no-pressure estimates"
                ]}

                ctaTitle="Get Your Free Deck or Siding Quote in Nicholasville"
                ctaText="Ready to transform your home’s exterior? Contact Yellowstone Renovation for a free estimate — serving Nicholasville, Wilmore, and all Jessamine County."
                ctaImage="/images/deck-builder13.webp"
            />

            <TestimonialsSection />
            <QuoteSection />
        </Layout>
    );
}
