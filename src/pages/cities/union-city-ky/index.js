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

export default function UnionCityKY() {
    return (
        <Layout>
            <Helmet>
                <meta
                    name="keywords"
                    content="Deck Builder Union City KY, Siding Contractor Union City KY, Exterior Remodeling Union City TN-KY Area, Composite Deck Installation Obion County, Vinyl Siding Union City"
                />

                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Deck and Siding Contractor in Union City, KY | Local Exterior Remodeling Experts"
                />
                <meta
                    property="og:description"
                    content="Reliable deck and siding contractor serving Union City, KY. Yellowstone Renovation installs composite decks, wood decks, and high-performance siding designed for regional weather conditions. Free estimates available."
                />
                <meta
                    property="og:url"
                    content="https://yellowstonerenovation.com/cities/union-city-ky/"
                />
                <meta property="og:site_name" content="Yellowstone Renovation" />
                <meta
                    property="og:image"
                    content="https://yellowstonerenovation.com/images/remodler1.webp"
                />

                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Deck and Siding Contractor in Union City, KY | Yellowstone Renovation"
                />
                <meta
                    name="twitter:description"
                    content="Enhance your Union City property with durable siding and custom deck construction. Trusted craftsmanship, clear communication, and free exterior remodeling quotes."
                />
                <meta
                    name="twitter:image"
                    content="https://yellowstonerenovation.com/images/remodler1.webp"
                />
            </Helmet>

            <SEO
                title="Deck and Siding Contractor in Union City, KY | Exterior Renovation Specialists"
                description="Yellowstone Renovation delivers professional siding replacement and custom deck construction in Union City, KY. We install James Hardie, vinyl, composite, and wood systems built for long-term durability. Request a free estimate today."
                pathname="/cities/union-city-ky/"
                image="https://yellowstonerenovation.com/images/remodler1.webp"
            />

            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HomeAndConstructionBusiness",
                        "@id": "https://yellowstonerenovation.com/#localbusiness-unioncity",
                        "name": "Yellowstone Renovation",
                        "url": "https://yellowstonerenovation.com",
                        "image": "https://yellowstonerenovation.com/images/remodler1.webp",
                        "logo": "https://yellowstonerenovation.com/icons/logo.webp",
                        "telephone": "(859) 765-7267",
                        "priceRange": "$$",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "120 Tina Way",
                            "addressLocality": "Union City",
                            "addressRegion": "KY",
                            "postalCode": "42041",
                            "addressCountry": "US"
                        },
                        "areaServed": [
                            "Union City, KY",
                            "Hickman, KY",
                            "Fulton County, KY",
                            "Obion County, TN"
                        ],
                        "sameAs": [
                            "https://www.facebook.com/p/Yellowstone-Renovation-61551123481170/",
                            "https://www.instagram.com/yellowstone_renovation/",
                            "https://maps.google.com/?q=Yellowstone+Renovation+Union+City+KY"
                        ],
                        "serviceType": [
                            "Vinyl Siding Installation",
                            "Fiber Cement Siding",
                            "Composite Deck Construction",
                            "Wood Deck Construction",
                            "Replacement Windows",
                            "Exterior Renovation"
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
                        "@type": "Organization",
                        "@id": "https://yellowstonerenovation.com/#organization-unioncity",
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
                            "addressLocality": "Union City",
                            "addressRegion": "KY",
                            "postalCode": "42041",
                            "addressCountry": "US"
                        }
                    })}
                </script>

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Product",
                        "@id": "https://yellowstonerenovation.com/#product-unioncity",
                        "name": "Siding & Deck Services — Union City, KY",
                        "description": "Professional siding installation, deck building, and exterior renovation services in Union City and nearby communities.",
                        "image": "https://yellowstonerenovation.com/images/remodler1.webp",
                        "brand": {
                            "@type": "Brand",
                            "name": "Yellowstone Renovation"
                        },
                        "sku": "SERVICE-UNIONCITY-001",
                        "mpn": "SERVICE-UNIONCITY-001",
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

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "How much does siding installation cost in Union City, KY?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Most vinyl siding projects in Union City range from $7 to $12 per sq. ft. installed, while fiber cement options often range from $14 to $21 per sq. ft. depending on architecture and trim details."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do you build both composite and wood decks in Union City?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes. We design and build both composite and wood decks, including custom layouts, railings, stairs, and outdoor living features tailored to your property."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Are exterior remodeling estimates free?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Absolutely. We provide free, no-pressure estimates for siding replacement, deck construction, and exterior upgrades throughout Union City and surrounding areas."
                                }
                            }
                        ]
                    })}
                </script>
            </Helmet>

            <HeroSection
                backgroundImage="/images/deck-builder3.webp"
                customerImage="/images/customer-hero1.png"
                title="Deck and Siding Contractor in Union City, KY"
                subtitle="Improve your Union City home with custom deck construction and high-performance siding installation built for beauty, strength, and long-term value."
                projectCount="30+ deck and siding projects completed this year across Western Kentucky"
                city="Union City"
                emailTo="yellowstonerenovation@gmail.com"
            />

            <AboutSection />

            <GallerySection
                title="DECK BUILDER GALLERY"
                subtitle="See recent deck projects completed for Kentucky homeowners. Composite and wood systems designed for comfort and durability."
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
                title="Exterior Remodeling Services in Union City, KY"
                subtitle="From deck design to siding replacement, we deliver professional workmanship and reliable communication from start to finish."
                accentColor="#0a923d"
                bgImage="/images/deck-bg.jpg"
                services={[
                    {
                        title: "Custom Deck Design & Construction",
                        description:
                            "We build structurally sound, attractive decks tailored to Union City homes and family lifestyles.",
                        image: "/images/deck11.webp",
                        link: "/cities/union-city-ky/deck-builder/",
                    },
                    {
                        title: "Composite & Wood Deck Installation",
                        description:
                            "Choose low-maintenance composite or classic pressure-treated lumber. We build both for long-term durability.",
                        image: "/images/deck7.webp",
                        link: "/cities/union-city-ky/composite-deck-installation/",
                    },
                    {
                        title: "James Hardie® & Vinyl Siding Installation",
                        description:
                            "We install premium siding systems that improve curb appeal and protect your exterior year-round.",
                        image: "/images/remodler1.webp",
                        link: "/cities/union-city-ky/vinyl-siding-installation/",
                    },
                    {
                        title: "Windows & Exterior Trim Upgrades",
                        description:
                            "Boost efficiency and finish your exterior upgrade with modern windows and precision trim detailing.",
                        image: "/images/remodler6.webp",
                        link: "/windows",
                    },
                ]}
            />

            <SidingPageSection
                city="Union City"
                layoutOrder={[
                    "hero",
                    "deck",
                    "styles",
                    "types",
                    "cost",
                    "extra",
                    "cta",
                ]}
                heroTitle="Union City’s Go-To Team for Deck and Siding Projects"
                heroText1="Yellowstone Renovation helps Union City homeowners modernize and protect their properties with dependable exterior remodeling services."
                heroText2="We install James Hardie, LP SmartSide, vinyl, cedar, and metal siding alongside custom composite and wood deck systems."
                heroImage="/images/deck-builder12.webp"
                heroBottomText="Serving Union City, Hickman, and surrounding areas with full-service siding and deck installation from planning through final cleanup."
                deckHeroTitle="Custom Decks in Union City, KY — Designed for Everyday Living"
                deckHeroText1="A custom deck gives you more usable outdoor space for entertaining, relaxing, and enjoying your backyard year-round."
                deckHeroText2="We build wood and composite decks in Union City with quality framing, clean finishes, and long-term performance in mind."
                deckHeroImage="/images/deck-builder8.webp"
                deckServicesTitle="Deck Services We Provide in Union City:"
                deckServices={[
                    "Custom deck design and layout planning",
                    "Trex and TimberTech composite deck installation",
                    "Cedar and pressure-treated wood decks",
                    "Covered decks, pergolas, and screen additions",
                    "Deck resurfacing and structural repairs",
                    "Stair, railing, and lighting enhancements",
                    "Permit coordination and project management"
                ]}
                deckCostTitle="Deck Cost in Union City, KY"
                deckCostText="Composite decks in Union City generally range from $45 to $65 per sq. ft., while wood decks typically range from $30 to $50 per sq. ft. Final pricing depends on layout, elevation, and material selections."
                deckImages={[
                    "/images/deck-builder.webp",
                    "/images/deck-builder6.webp",
                    "/images/deck-builder7.webp",
                ]}
                stylesTitle="Popular Siding Styles in Union City"
                stylesIntro="Whether your home is traditional or modern, we help you choose siding profiles that improve appearance and weather resistance."
                styles={[
                    {
                        name: "Lap Siding",
                        text: "A reliable, timeless profile available in vinyl, engineered wood, and fiber cement options.",
                        image: "/images/Lap-Siding.jpg",
                    },
                    {
                        name: "Board and Batten",
                        text: "Vertical lines deliver clean curb appeal and are popular for farmhouse and transitional home designs.",
                        image: "/images/Board-Batten.jpg",
                    },
                    {
                        name: "Shakes & Shingles",
                        text: "Great for accent walls, peaks, and architectural detail where added texture is desired.",
                        image: "/images/Shakes-Shingles.jpg",
                    },
                ]}
                sidingTypesTitle="Siding Materials We Install in Union City"
                sidingTypesIntro="We recommend durable materials and install them with manufacturer-aligned best practices."
                sidingTypes={[
                    { name: "James Hardie Fiber Cement", image: "/images/hardie.jpg" },
                    { name: "LP SmartSide Engineered Wood", image: "/images/SmartSide.jpg" },
                    { name: "Vinyl Siding", image: "/images/Vinyl-Siding.jpg" },
                    { name: "Cedar Siding", image: "/images/Cedar-Siding.jpg" },
                ]}
                costTitle="Siding Installation Cost in Union City, KY"
                costIntro="Final siding costs depend on home size, complexity, trim package, and product line. Typical ranges include:"
                costTable={[
                    { material: "Vinyl Siding", price: "$6.50 – $9.00 per sq. ft." },
                    { material: "Fiber Cement (James Hardie)", price: "$10.00 – $14.00 per sq. ft." },
                    { material: "Engineered Wood (LP SmartSide)", price: "$9.00 – $12.00 per sq. ft." },
                    { material: "Cedar Wood Siding", price: "$12.00 – $18.00 per sq. ft." },
                    { material: "Metal Siding", price: "$8.00 – $13.00 per sq. ft." },
                ]}
                extraSectionTitle="Why Homeowners in Union City Choose Yellowstone Renovation"
                extraSectionText="Our team is known for accurate estimates, quality craftsmanship, and dependable project communication."
                extraPoints={[
                    "⭐ Experienced Kentucky-based installation crew",
                    "⭐ Licensed and insured for exterior remodeling work",
                    "⭐ 5-year workmanship warranty",
                    "⭐ High-quality products from trusted brands",
                    "⭐ Free, detailed, no-obligation estimates"
                ]}
                ctaTitle="Request a Free Deck or Siding Quote in Union City"
                ctaText="Planning a deck build or siding replacement? Contact Yellowstone Renovation for a free exterior remodeling estimate in Union City, KY."
                ctaImage="/images/deck-builder13.webp"
            />

            <TestimonialsSection />
            <QuoteSection />
        </Layout>
    );
}
