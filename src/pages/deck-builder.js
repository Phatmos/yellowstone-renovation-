import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import BeforeAfter from "../components/BeforeAfter";
import GallerySection from "../components/GallerySection";
import TestimonialsSection from "../components/TestimonialsSection";
import SEO from "../components/SEO";
import QuoteSection from "../components/QuoteSection";
import ScrollToTop from "../components/ScrollToTop";
import "../styles/ScrollToTop.css";
import MainSectionSideBar from "../components/MainSectionSideBar";
import DeckBuildingSteps from "../components/DeckBuildingSteps";



export default function IndexPage() {
    return (
        <Layout>
            {/* ✅ SEO Core */}
            <SEO
                title="Yellowstone Renovation — Expert Remodeling, Siding & Deck Builders in Kentucky"
                description="Transform your home with Yellowstone Renovation — specialists in siding, decks, kitchens, and complete exterior remodeling across Lexington, Nicholasville, and Central Kentucky."
                pathname="/"
                image="https://yellowstonerenovation.com/images/house-bg.webp"
            />

            {/* ✅ Extra Meta / Schema */}
            <Helmet>
                {/* ======================= */}
                {/* 🔥 ADVANCED COMBINED SCHEMA */}
                {/* ======================= */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            /* -------------------------------------------------- */
                            /* 1️⃣ Local Business Schema (Primary) */
                            /* -------------------------------------------------- */
                            {
                                "@type": "HomeAndConstructionBusiness",
                                "@id": "https://yellowstonerenovation.com/#localbusiness",
                                "name": "Yellowstone Renovation",
                                "url": "https://yellowstonerenovation.com/",
                                "logo": "https://yellowstonerenovation.com/icons/logo.webp",
                                "image": "https://yellowstonerenovation.com/images/house-bg.webp",
                                "telephone": "859-765-7267",
                                "priceRange": "$$",
                                "address": {
                                    "@type": "PostalAddress",
                                    "streetAddress": "120 Tina Way",
                                    "addressLocality": "Nicholasville",
                                    "addressRegion": "KY",
                                    "postalCode": "40356",
                                    "addressCountry": "US"
                                },
                                "serviceType": [
                                    "Deck Construction",
                                    "Exterior Remodeling",
                                    "Siding Installation",
                                    "Kitchen Remodeling",
                                    "Bathroom Remodeling"
                                ],
                                "areaServed": [
                                    "Lexington, KY",
                                    "Nicholasville, KY",
                                    "Georgetown, KY",
                                    "Richmond, KY",
                                    "Winchester, KY"
                                ],
                                "sameAs": [
                                    "https://www.facebook.com/p/Yellowstone-Renovation-61551123481170/",
                                    "https://www.instagram.com/yellowstone_renovation/",
                                    "https://maps.google.com/?q=Yellowstone+Renovation+Nicholasville+KY"
                                ]
                            },

                            /* -------------------------------------------------- */
                            /* 2️⃣ Organization Schema */
                            /* -------------------------------------------------- */
                            {
                                "@type": "Organization",
                                "@id": "https://yellowstonerenovation.com/#organization",
                                "name": "Yellowstone Renovation",
                                "url": "https://yellowstonerenovation.com/",
                                "logo": "https://yellowstonerenovation.com/icons/logo.webp",
                                "contactPoint": {
                                    "@type": "ContactPoint",
                                    "telephone": "859-765-7267",
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

                            /* -------------------------------------------------- */
                            /* 3️⃣ Product Schema — ⭐ Enables Review Stars */
                            /* -------------------------------------------------- */
                            {
                                "@type": "Product",
                                "@id": "https://yellowstonerenovation.com/#product",
                                "name": "Yellowstone Renovation Remodeling Services",
                                "image": {
                                    "@type": "ImageObject",
                                    "url": "https://yellowstonerenovation.com/images/house-bg.webp",
                                    "width": 1200,
                                    "height": 800
                                },
                                "description": "Professional exterior remodeling, siding installation, and custom deck construction across Central Kentucky.",
                                "brand": {
                                    "@type": "Brand",
                                    "name": "Yellowstone Renovation"
                                },
                                "aggregateRating": {
                                    "@type": "AggregateRating",
                                    "ratingValue": "4.9",
                                    "reviewCount": "87"
                                },
                                "offers": {
                                    "@type": "Offer",
                                    "priceCurrency": "USD",
                                    "price": "1",
                                    "availability": "https://schema.org/InStock",
                                    "url": "https://yellowstonerenovation.com/"
                                }
                            },

                            /* -------------------------------------------------- */
                            /* 4️⃣ Service Schema – Deck Page Targeting */
                            /* -------------------------------------------------- */
                            {
                                "@type": "Service",
                                "@id": "https://yellowstonerenovation.com/#deckservice",
                                "serviceType": [
                                    "Custom Deck Construction",
                                    "Deck Design",
                                    "Backyard Outdoor Living",
                                    "Composite & Wood Decks"
                                ],
                                "provider": {
                                    "@id": "https://yellowstonerenovation.com/#localbusiness"
                                },
                                "areaServed": [
                                    "Lexington, KY",
                                    "Nicholasville, KY",
                                    "Georgetown, KY",
                                    "Winchester, KY",
                                    "Richmond, KY"
                                ],
                                "image": "https://yellowstonerenovation.com/images/deck10.webp",
                                "url": "https://yellowstonerenovation.com/custom-decks/"
                            },

                            /* -------------------------------------------------- */
                            /* 5️⃣ FAQ Schema — Appears as dropdown FAQ in Google */
                            /* -------------------------------------------------- */
                            {
                                "@type": "FAQPage",
                                "@id": "https://yellowstonerenovation.com/#faq",
                                "mainEntity": [
                                    {
                                        "@type": "Question",
                                        "name": "How much does a custom deck cost in Lexington?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Custom decks typically range from $45–$95 per sq.ft depending on design complexity, elevation, materials, and railing choices."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Do you design decks with lighting, seating, and grill stations?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Yes — we offer complete deck design including outdoor kitchens, pergolas, privacy walls, built-in seating, and LED lighting."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Do you offer free design consultations?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Yes — free estimates with layout options, material samples, and optional 3D design previews."
                                        }
                                    }
                                ]
                            }
                        ]
                    })}
                </script>
            </Helmet>


            {/* ✅ Page Content Only (Header/Footer handled by Layout) */}
            <HeroSection
                backgroundImage="/images/deck-builder13.webp"
                customerImage="/images/customer-hero1.png"
                city="Lexington"
                projectCount="87+ projects completed in past year"
            />

            <AboutSection />
            <ScrollToTop />
            <BeforeAfter
                title="Deck Before & After Transformations"
                description="Watch how we replace old, unsafe decks with beautiful, long-lasting outdoor spaces perfect for relaxing, grilling, and entertaining. Built strong for Kentucky weather."
                buttonText="See More Deck Projects"
                buttonLink="/projects"
                accentColor="#0a923d"
                images={[
                    {
                        before: "/images/deckafter3.webp",
                        after: "/images/deckbefore3.webp",
                    },
                    {
                        before: "/images/deckafter1.webp",
                        after: "/images/deckbefore1.webp",
                    },
                ]}
            />

            <GallerySection
                title="DECK BUILDER GALLERY"
                subtitle="From custom wood decks to composite installations — explore our best outdoor transformations"
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
            <DeckBuildingSteps />

            <TestimonialsSection />

            <QuoteSection />
        </Layout>
    );
}
