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
export default function AthensKY() {
    return (
        <Layout>
            <Helmet>
                {/* Local Athens Keywords */}
                <meta
                    name="keywords"
                    content="Deck Builder Athens KY, Siding Contractor Athens KY, James Hardie Athens Kentucky, Composite Deck Installation Athens, Vinyl Siding Athens KY"
                />

                {/* Social Sharing */}
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Deck and Siding Contractor in Athens, KY | Exterior Builder You Can Trust"
                />
                <meta
                    property="og:description"
                    content="Yellowstone Renovation builds durable decks and installs high-quality siding in Athens, KY. Composite decks, wood decks, vinyl siding, and James Hardie — built for Kentucky weather. Free estimates in Fayette County."
                />
                <meta
                    property="og:url"
                    content="https://yellowstonerenovation.com/cities/athens-ky/"
                />
                <meta property="og:site_name" content="Yellowstone Renovation" />
                <meta
                    property="og:image"
                    content="https://yellowstonerenovation.com/images/remodler9.webp"
                />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Deck and Siding Contractor in Athens, KY | Yellowstone Renovation"
                />
                <meta
                    name="twitter:description"
                    content="Upgrade your Athens home with long-lasting siding and beautifully crafted decks. Professional exterior remodelers serving Fayette County."
                />
                <meta
                    name="twitter:image"
                    content="https://yellowstonerenovation.com/images/remodler9.webp"
                />
            </Helmet>

            <SEO
                title="Deck and Siding Contractor in Athens, KY | Exterior Builder You Can Trust"
                description="Yellowstone Renovation installs composite decks, wood decks, vinyl siding, and James Hardie siding in Athens, KY. High-quality craftsmanship designed for Kentucky weather. Free estimates in Fayette County."
                pathname="/cities/athens-ky/"
                image="https://yellowstonerenovation.com/images/remodler9.webp"
            />
            <Helmet>

                {/* ⭐ LOCAL BUSINESS — Athens KY */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HomeAndConstructionBusiness",
                        "@id": "https://yellowstonerenovation.com/#localbusiness",
                        "name": "Yellowstone Renovation",
                        "url": "https://yellowstonerenovation.com",
                        "logo": "https://yellowstonerenovation.com/icons/logo.webp",
                        "image": "https://yellowstonerenovation.com/images/remodler9.webp",
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
                            "Athens, KY",
                            "Lexington, KY",
                            "Richmond, KY",
                            "Fayette County, KY"
                        ],
                        "serviceType": [
                            "Vinyl Siding Installation",
                            "James Hardie Fiber Cement",
                            "Composite Decks",
                            "Wood Decks",
                            "Replacement Windows",
                            "Exterior Repairs"
                        ],
                        "sameAs": [
                            "https://www.facebook.com/p/Yellowstone-Renovation-61551123481170/",
                            "https://www.instagram.com/yellowstone_renovation/",
                            "https://maps.google.com/?q=Yellowstone+Renovation+Athens+KY"
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
                    })}
                </script>

                {/* ⭐ PRODUCT + AGGREGATE RATING (Shows Google Stars) */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Product",
                        "@id": "https://yellowstonerenovation.com/#product",
                        "name": "Exterior Remodeling & Deck Building Services",
                        "description": "Professional siding installation, James Hardie fiber cement, vinyl siding, and custom deck construction in Athens and Lexington KY.",
                        "image": "https://yellowstonerenovation.com/images/remodler9.webp",
                        "brand": {
                            "@type": "Brand",
                            "name": "Yellowstone Renovation"
                        },
                        "sku": "SERVICE-ATHENS-001",
                        "mpn": "SERVICE-ATHENS-001",
                        "url": "https://yellowstonerenovation.com",
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": "4.9",
                            "reviewCount": 87
                        },
                        "offers": {
                            "@type": "Offer",
                            "url": "https://yellowstonerenovation.com",
                            "price": "1",
                            "priceCurrency": "USD",
                            "availability": "https://schema.org/InStock"
                        }
                    })}
                </script>

                {/* ⭐ FAQ SCHEMA — Athens KY */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "How much does siding cost in Athens, KY?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Vinyl siding in Athens typically ranges from $7–$11 per sq.ft installed. James Hardie siding ranges from $14–$22 depending on design, trim, and house layout."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do you build decks in Athens?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes — we build custom wood and composite decks throughout Athens, Lexington, and Fayette County. Free estimates available year-round."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do you offer free estimates in Athens, KY?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Absolutely. Yellowstone Renovation provides free quotes for siding, decks, windows, and exterior remodeling projects."
                                }
                            }
                        ]
                    })}
                </script>

            </Helmet>


            <HeroSection
                backgroundImage="/images/deck-builder12.webp"
                customerImage="/images/customer-hero1.png"
                title="Deck and Siding Contractor in Athens, KY"
                subtitle="Transform your Athens home with durable siding and custom-built decks — designed to withstand Kentucky’s climate while boosting curb appeal and value."
                projectCount="4+ exterior projects completed across Central Kentucky"
                city="Athens"
                emailTo="yellowstonerenovation@gmail.com"
            />

            <AboutSection />

            <GallerySection
                title="DECK BUILDER GALLERY"
                subtitle="View our completed deck projects across Kentucky — built with precision, durability, and clean craftsmanship."
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
                title="Exterior Remodeling Services in Athens, KY"
                subtitle="We deliver high-quality exterior upgrades — from durable siding to premium decking — for homeowners throughout Athens and Fayette County."
                accentColor="#0a923d"
                bgImage="/images/deck-bg.jpg"
                services={[
                    {
                        title: "Custom Deck Design & Construction",
                        description:
                            "Our team builds strong, long-lasting decks tailored to Athens homes. Choose composite or natural wood options built for comfort and performance.",
                        image: "/images/deck11.webp",
                        link: "/cities/athens-ky/deck-builder/",
                    },
                    {
                        title: "Composite & Wood Deck Installation",
                        description:
                            "Trex, TimberTech, and classic wood decking — installed with clean craftsmanship and engineered for Kentucky weather.",
                        image: "/images/deck7.webp",
                        link: "/cities/athens-ky/composite-deck-installation/",
                    },
                    {
                        title: "James Hardie® & Vinyl Siding Installation",
                        description:
                            "Protect your home with premium siding materials. We install Hardie fiber cement, LP SmartSide, and high-quality vinyl siding.",
                        image: "/images/remodler1.webp",
                        link: "/cities/athens-ky/vinyl-siding-installation/",
                    },
                    {
                        title: "Windows & Exterior Trim Upgrades",
                        description:
                            "Boost energy efficiency and curb appeal with professional window and trim replacement for Athens homeowners.",
                        image: "/images/remodler6.webp",
                        link: "/windows",
                    },
                ]}
            />

            <SidingPageSection
                city="Athens"
                layoutOrder={[
                    "hero",
                    "deck",
                    "styles",
                    "types",
                    "cost",
                    "extra",
                    "cta",
                ]}

                heroTitle="Athens’ Trusted Deck and Siding Specialists"
                heroText1="Yellowstone Renovation provides durable siding installation and high-quality deck construction throughout Athens, KY."
                heroText2="We offer James Hardie, LP SmartSide, vinyl siding, cedar siding, and composite decking — installed with precision and backed by strong warranties."
                heroImage="/images/deck-builder12.webp"
                heroBottomText="Proudly serving Athens, Lexington, Richmond, and all of Fayette County — from full siding replacement to custom deck builds."

                deckHeroTitle="Custom Decks in Athens, KY — Built for Outdoor Living"
                deckHeroText1="A well-designed deck adds comfort, value, and usable outdoor space to your Athens home."
                deckHeroText2="Whether you want a low-maintenance composite deck or a traditional wood design — we build every project with clean craftsmanship."
                deckHeroImage="/images/deck-builder8.webp"
                deckServicesTitle="Deck Services We Provide in Athens:"
                deckServices={[
                    "Trex and TimberTech composite decks",
                    "Pressure-treated and cedar wood decks",
                    "Multi-level and elevated decks",
                    "Screened porches & covered decks",
                    "Deck resurfacing and repairs",
                    "Custom railings, stairs, and lighting",
                    "Permits & inspections included"
                ]}
                deckCostTitle="Deck Cost in Athens, KY"
                deckCostText="Composite decks in Athens typically range from $45–$70 per sq. ft. depending on style, elevation, and materials. Wood decks generally range from $28–$50 per sq. ft. All estimates include materials, labor, fasteners, and cleanup."
                deckImages={[
                    "/images/deck-builder.webp",
                    "/images/deck-builder6.webp",
                    "/images/deck-builder7.webp",
                ]}

                stylesTitle="Popular Siding Styles in Athens"
                stylesIntro="Athens homeowners love modern farmhouse designs, traditional lap siding, and durable fiber-cement options. These siding styles offer long-term value and a clean, updated look."
                styles={[
                    {
                        name: "Lap Siding",
                        text: "A classic profile that works well on most Athens homes — available in vinyl, fiber cement, and engineered wood.",
                        image: "/images/Lap-Siding.jpg",
                    },
                    {
                        name: "Board and Batten",
                        text: "Perfect for modern and farmhouse-style homes — offering bold vertical lines and strong curb appeal.",
                        image: "/images/Board-Batten.jpg",
                    },
                    {
                        name: "Shakes & Shingles",
                        text: "Great for gables and accents — providing warmth and texture without heavy maintenance.",
                        image: "/images/Shakes-Shingles.jpg",
                    },
                ]}

                sidingTypesTitle="Siding Materials We Install in Athens, KY"
                sidingTypesIntro="We install top-quality siding products backed by manufacturer and workmanship warranties."
                sidingTypes={[
                    { name: "James Hardie Fiber Cement", image: "/images/hardie.jpg" },
                    { name: "LP SmartSide Engineered Wood", image: "/images/SmartSide.jpg" },
                    { name: "Vinyl Siding", image: "/images/Vinyl-Siding.jpg" },
                    { name: "Cedar Siding", image: "/images/Cedar-Siding.jpg" },
                ]}

                costTitle="Siding Installation Cost in Athens, KY"
                costIntro="Siding prices vary based on square footage, trim selections, and material type. Typical Athens siding costs include:"
                costTable={[
                    { material: "Vinyl Siding", price: "$6.75 – $9.50 per sq. ft." },
                    { material: "Fiber Cement (James Hardie)", price: "$10.50 – $14.50 per sq. ft." },
                    { material: "Engineered Wood (LP SmartSide)", price: "$9.25 – $12.75 per sq. ft." },
                    { material: "Cedar Wood Siding", price: "$13.00 – $18.00 per sq. ft." },
                    { material: "Metal Siding", price: "$8.50 – $14.00 per sq. ft." },
                ]}

                extraSectionTitle="Why Athens Homeowners Choose Yellowstone Renovation"
                extraSectionText="Residents across Athens and East Lexington rely on our team for quality craftsmanship, transparency, and reliable communication from start to finish."
                extraPoints={[
                    "⭐ Fayette County’s trusted exterior remodeling team",
                    "⭐ High-quality craftsmanship with no shortcuts",
                    "⭐ Licensed, insured, and local to Central Kentucky",
                    "⭐ 5-year workmanship warranty",
                    "⭐ Clear, detailed estimates with flexible scheduling"
                ]}

                ctaTitle="Get Your Free Deck or Siding Quote in Athens, KY"
                ctaText="Ready to upgrade your home? Contact Yellowstone Renovation for a free estimate on siding or deck installation in Athens and the greater Lexington area."
                ctaImage="/images/deck-builder13.webp"
            />

            <TestimonialsSection />
            <QuoteSection />
        </Layout>
    );
}
