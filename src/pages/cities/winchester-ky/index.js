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

export default function WinchesterKY() {
    return (
        <Layout>
            <Helmet>
                {/* ✅ Local Winchester Keywords */}
                <meta
                    name="keywords"
                    content="Deck Builder Winchester KY, Siding Contractor Winchester KY, James Hardie Winchester, Composite Decks Clark County, Vinyl Siding Winchester Kentucky"
                />

                {/* ✅ Social Sharing — Facebook / iMessage / LinkedIn */}
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Deck and Siding Contractor in Winchester, KY | Exterior Builder You Can Trust"
                />
                <meta
                    property="og:description"
                    content="Reliable deck and siding contractor in Winchester, KY. Yellowstone Renovation installs composite decks, wood decks, and premium siding built for Kentucky weather. Free estimates in Clark County."
                />
                <meta
                    property="og:url"
                    content="https://yellowstonerenovation.com/cities/winchester-ky/"
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
                    content="Deck and Siding Contractor in Winchester, KY | Yellowstone Renovation"
                />
                <meta
                    name="twitter:description"
                    content="Upgrade your Winchester home with durable siding and custom decks. Exterior builder you can trust — free quotes across Clark County."
                />
                <meta
                    name="twitter:image"
                    content="https://yellowstonerenovation.com/images/remodler1.webp"
                />
            </Helmet>

            <SEO
                title="Deck and Siding Contractor in Winchester, KY | Exterior Builder You Can Trust"
                description="Yellowstone Renovation provides professional siding installation and custom deck construction in Winchester, KY. We install composite, wood, vinyl, and James Hardie siding — designed for Kentucky’s weather. Free estimates across Clark County."
                pathname="/cities/winchester-ky/"
                image="https://yellowstonerenovation.com/images/remodler1.webp"
            />

            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            /* -----------------------------------------------------
                               1) Local Business — Winchester Version
                            ----------------------------------------------------- */
                            {
                                "@type": "LocalBusiness",
                                "@id": "https://yellowstonerenovation.com/#localbusiness",
                                "name": "Yellowstone Renovation",
                                "url": "https://yellowstonerenovation.com",
                                "logo": "https://yellowstonerenovation.com/icons/logo.webp",
                                "image": "https://yellowstonerenovation.com/images/remodler1.webp",
                                "telephone": "(859) 765-7267",
                                "priceRange": "$$",
                                "address": {
                                    "@type": "PostalAddress",
                                    "addressLocality": "Winchester",
                                    "addressRegion": "KY",
                                    "postalCode": "40391",
                                    "addressCountry": "US"
                                },
                                "areaServed": [
                                    "Winchester, KY",
                                    "Lexington, KY",
                                    "Mount Sterling, KY",
                                    "Clark County, KY"
                                ],
                                "sameAs": [
                                    "https://www.facebook.com/p/Yellowstone-Renovation-61551123481170/",
                                    "https://www.instagram.com/yellowstone_renovation/",
                                    "https://maps.google.com/?q=Yellowstone+Renovation+Winchester+KY"
                                ],
                                "serviceType": [
                                    "Vinyl Siding Installation",
                                    "James Hardie Fiber Cement",
                                    "Composite Decks",
                                    "Wood Decks",
                                    "Replacement Windows",
                                    "Exterior Repairs"
                                ]
                            },

                            /* -----------------------------------------------------
                               2) Organization Schema
                            ----------------------------------------------------- */
                            {
                                "@type": "Organization",
                                "@id": "https://yellowstonerenovation.com/#organization",
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
                            },

                            /* -----------------------------------------------------
                               3) Product (Review Snippets) — Enables Stars in Google
                            ----------------------------------------------------- */
                            {
                                "@type": "Product",
                                "@id": "https://yellowstonerenovation.com/#product",
                                "name": "Yellowstone Renovation Services",
                                "image": {
                                    "@type": "ImageObject",
                                    "url": "https://yellowstonerenovation.com/images/remodler1.webp",
                                    "width": 1200,
                                    "height": 800
                                },
                                "aggregateRating": {
                                    "@type": "AggregateRating",
                                    "ratingValue": "4.9",
                                    "reviewCount": "87"
                                }
                            },

                            /* -----------------------------------------------------
                               4) FAQ Schema — Winchester
                            ----------------------------------------------------- */
                            {
                                "@type": "FAQPage",
                                "@id": "https://yellowstonerenovation.com/#winchester-faq",
                                "mainEntity": [
                                    {
                                        "@type": "Question",
                                        "name": "How much does siding cost in Winchester?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text":
                                                "In Winchester, vinyl siding usually ranges from $7–$11 per sq.ft. installed. James Hardie® fiber cement siding often runs between $14–$21 per sq.ft. depending on trim, layout, and home size."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Do you work outside Winchester?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text":
                                                "Yes. We serve Winchester, Lexington, Mount Sterling, Paris, and all of Clark County with deck building, siding replacement, and exterior renovations."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Do you offer free estimates in Winchester?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text":
                                                "Yes — we provide free, detailed, no-pressure estimates for all siding and deck projects in Winchester and surrounding areas."
                                        }
                                    }
                                ]
                            }
                        ]
                    })}
                </script>
            </Helmet>


            <HeroSection
                backgroundImage="/images/deck-builder3.webp"
                customerImage="/images/customer-hero1.png"
                title="Deck and Siding Contractor in Winchester, KY"
                subtitle="Give your Winchester home a fresh exterior with custom-built decks and durable siding — designed for long-term performance in Kentucky’s climate."
                projectCount="30+ deck and siding projects completed this year across Central Kentucky"
                city="Winchester"
                emailTo="yellowstonerenovation@gmail.com"
            />

            <AboutSection />

            <GallerySection
                title="DECK BUILDER GALLERY"
                subtitle="Browse our deck projects — crafted for Kentucky homes with a focus on strength, comfort, and clean finishes."
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
                title="Exterior Remodeling Services in Winchester, KY"
                subtitle="From siding replacement to custom decks, we help Winchester homeowners improve curb appeal, comfort, and protection."
                accentColor="#0a923d"
                bgImage="/images/deck-bg.jpg"
                services={[
                    {
                        title: "Custom Deck Design & Construction",
                        description:
                            "We design and build decks that fit Winchester homes and yards — from simple backyard platforms to multi-level outdoor living spaces.",
                        image: "/images/deck11.webp",
                        link: "/cities/winchester-ky/deck-builder/",
                    },
                    {
                        title: "Composite & Wood Deck Installation",
                        description:
                            "Choose low-maintenance composite or classic wood decking. Our builds are engineered for Kentucky wind, sun, and rain.",
                        image: "/images/deck7.webp",
                        link: "/cities/winchester-ky/composite-deck-installation/",
                    },
                    {
                        title: "James Hardie® & Vinyl Siding Installation",
                        description:
                            "Protect your home with durable siding. We install James Hardie fiber cement and quality vinyl siding for long-lasting performance.",
                        image: "/images/remodler1.webp",
                        link: "/cities/winchester-ky/vinyl-siding-installation/",
                    },
                    {
                        title: "Windows & Exterior Trim Upgrades",
                        description:
                            "Refresh your home’s exterior with new windows and detailed trim work that ties everything together.",
                        image: "/images/remodler6.webp",
                        link: "/windows",
                    },
                ]}
            />

            <SidingPageSection
                city="Winchester"
                layoutOrder={[
                    "hero",
                    "deck",
                    "styles",
                    "types",
                    "cost",
                    "extra",
                    "cta",
                ]}

                heroTitle="Winchester’s Trusted Deck and Siding Team"
                heroText1="Yellowstone Renovation helps Winchester homeowners upgrade their exteriors with professional siding installation and carefully built decks."
                heroText2="We install James Hardie, LP SmartSide, vinyl, cedar, and metal siding — plus composite and wood decks tailored to your home and budget."
                heroImage="/images/deck-builder12.webp"
                heroBottomText="Serving Winchester, Lexington, Mount Sterling, Paris, and the rest of Clark County with complete exterior remodeling."

                deckHeroTitle="Custom Decks in Winchester, KY — Built for Everyday Living"
                deckHeroText1="Enjoy more time outside with a deck built for cookouts, family gatherings, and relaxing evenings."
                deckHeroText2="From composite to pressure-treated lumber, we match the right materials to your Winchester property and lifestyle."
                deckHeroImage="/images/deck-builder8.webp"
                deckServicesTitle="Deck Services We Provide in Winchester:"
                deckServices={[
                    "Custom deck design & layout planning",
                    "Trex and TimberTech composite deck installation",
                    "Cedar and pressure-treated wood decks",
                    "Covered decks, pergolas, and screened porches",
                    "Deck resurfacing and structural repairs",
                    "Stair, railing, and lighting upgrades",
                    "Permitting and inspections handled start-to-finish"
                ]}
                deckCostTitle="Deck Cost in Winchester, KY"
                deckCostText="Composite decks in Winchester typically range from $45–$65 per sq. ft., depending on height, layout, and railing options. Wood decks usually range from $30–$50 per sq. ft. Every project includes labor, materials, cleanup, and inspections."
                deckImages={[
                    "/images/deck-builder.webp",
                    "/images/deck-builder6.webp",
                    "/images/deck-builder7.webp",
                ]}

                stylesTitle="Siding Styles Popular in Winchester"
                stylesIntro="Whether you prefer a modern farmhouse look or a traditional Kentucky style, we help Winchester homeowners choose siding that looks great and protects the home."
                styles={[
                    {
                        name: "Lap Siding",
                        text: "A classic, durable option that suits many Winchester neighborhoods — available in fiber cement, engineered wood, and vinyl.",
                        image: "/images/Lap-Siding.jpg",
                    },
                    {
                        name: "Board and Batten",
                        text: "Vertical siding that adds height and a fresh, modern feel — popular on newer homes and additions.",
                        image: "/images/Board-Batten.jpg",
                    },
                    {
                        name: "Shakes & Shingles",
                        text: "Ideal for gables and accent walls, giving your home a warm, handcrafted appearance.",
                        image: "/images/Shakes-Shingles.jpg",
                    },
                ]}

                sidingTypesTitle="Siding Materials We Install in Winchester"
                sidingTypesIntro="We install siding products built to handle Kentucky’s humidity, storms, and temperature swings."
                sidingTypes={[
                    { name: "James Hardie Fiber Cement", image: "/images/hardie.jpg" },
                    { name: "LP SmartSide Engineered Wood", image: "/images/SmartSide.jpg" },
                    { name: "Vinyl Siding", image: "/images/Vinyl-Siding.jpg" },
                    { name: "Cedar Siding", image: "/images/Cedar-Siding.jpg" },
                ]}

                costTitle="Siding Installation Cost in Winchester, KY"
                costIntro="Pricing depends on home size, material choice, and trim details. These ranges are typical for full siding projects in Winchester:"
                costTable={[
                    { material: "Vinyl Siding", price: "$6.50 – $9.00 per sq. ft." },
                    { material: "Fiber Cement (James Hardie)", price: "$10.00 – $14.00 per sq. ft." },
                    { material: "Engineered Wood (LP SmartSide)", price: "$9.00 – $12.00 per sq. ft." },
                    { material: "Cedar Wood Siding", price: "$12.00 – $18.00 per sq. ft." },
                    { material: "Metal Siding", price: "$8.00 – $13.00 per sq. ft." },
                ]}

                extraSectionTitle="Why Winchester Homeowners Choose Yellowstone Renovation"
                extraSectionText="We focus on clear communication, detailed workmanship, and clean job sites — so your project feels organized from start to finish."
                extraPoints={[
                    "⭐ Local Kentucky crew — no random subcontractors",
                    "⭐ Licensed, insured, and experienced installers",
                    "⭐ 5-year workmanship warranty on all projects",
                    "⭐ Hundreds of deck and siding projects completed in Central Kentucky",
                    "⭐ Free, detailed, no-pressure estimates"
                ]}

                ctaTitle="Get Your Free Deck or Siding Quote in Winchester"
                ctaText="Ready to update your home’s exterior? Contact Yellowstone Renovation for a free, no-obligation estimate in Winchester and surrounding Clark County."
                ctaImage="/images/deck-builder13.webp"
            />

            <TestimonialsSection />
            <QuoteSection />
        </Layout>
    );
}
