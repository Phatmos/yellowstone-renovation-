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

export default function AvonKY() {
    return (
        <Layout>
            <Helmet>
                {/* Local Avon Keywords */}
                <meta
                    name="keywords"
                    content="Deck Builder Avon KY, Siding Contractor Avon Kentucky, James Hardie Installer Avon KY, Composite Deck Installation Avon, Vinyl Siding Avon KY, LP SmartSide Avon KY"
                />

                {/* Social Sharing */}
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Deck and Siding Contractor in Avon, KY | Professional Exterior Remodeling"
                />
                <meta
                    property="og:description"
                    content="Yellowstone Renovation builds long-lasting decks and installs premium siding in Avon, KY. Composite decks, wood decks, vinyl siding, LP SmartSide, and James Hardie installation — backed by strong warranties and expert craftsmanship."
                />
                <meta property="og:url" content="https://yellowstonerenovation.com/cities/avon-ky/" />
                <meta property="og:site_name" content="Yellowstone Renovation" />
                <meta property="og:image" content="https://yellowstonerenovation.com/images/remodler10.webp" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Deck and Siding Contractor in Avon, KY | Yellowstone Renovation"
                />
                <meta
                    name="twitter:description"
                    content="Transform your Avon home with professional siding and custom-built composite or wood decks. Expert installers serving all of Fayette County."
                />
                <meta
                    name="twitter:image"
                    content="https://yellowstonerenovation.com/images/remodler10.webp"
                />
            </Helmet>

            <SEO
                title="Deck and Siding Contractor in Avon, KY | Exterior Builder You Can Trust"
                description="Yellowstone Renovation installs composite decks, wood decks, LP SmartSide, vinyl siding, and James Hardie siding in Avon, KY. Durable materials, clean craftsmanship, and strong warranties. Free estimates across Fayette County."
                pathname="/cities/avon-ky/"
                image="https://yellowstonerenovation.com/images/remodler10.webp"
            />

            <Helmet>

                {/* ⭐ LOCAL BUSINESS — Avon KY */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HomeAndConstructionBusiness",
                        "@id": "https://yellowstonerenovation.com/#localbusiness-avon",
                        "name": "Yellowstone Renovation",
                        "url": "https://yellowstonerenovation.com",
                        "image": "https://yellowstonerenovation.com/images/remodler10.webp",
                        "logo": "https://yellowstonerenovation.com/icons/logo.webp",
                        "telephone": "859-545-7020",
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
                            "Avon, KY",
                            "Athens, KY",
                            "Lexington, KY",
                            "Fayette County, KY"
                        ],
                        "serviceType": [
                            "Vinyl Siding Installation",
                            "James Hardie Fiber Cement",
                            "LP SmartSide Siding",
                            "Composite Decks",
                            "Wood Decks",
                            "Exterior Repairs",
                            "Replacement Windows"
                        ],
                        "sameAs": [
                            "https://www.facebook.com/p/Yellowstone-Renovation-61551123481170/",
                            "https://www.instagram.com/yellowstone_renovation/",
                            "https://maps.google.com/?q=Yellowstone+Renovation+Avon+KY"
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
                            "telephone": "859-545-7020",
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

                {/* ⭐ PRODUCT SCHEMA (Shows Stars in Google Results) */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Product",
                        "@id": "https://yellowstonerenovation.com/#product-avon",
                        "name": "Siding & Deck Remodeling Services in Avon, KY",
                        "description": "Professional siding installation, composite deck building, and exterior remodeling services in Avon, KY.",
                        "image": "https://yellowstonerenovation.com/images/remodler10.webp",
                        "brand": { "@type": "Brand", "name": "Yellowstone Renovation" },
                        "sku": "SERVICE-AVON-001",
                        "mpn": "SERVICE-AVON-001",
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

                {/* ⭐ FAQ SCHEMA — Avon KY */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "How much does siding installation cost in Avon, KY?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "In Avon, KY, vinyl siding ranges from $6.75–$9.50 per sq.ft installed. James Hardie averages $10.50–$15.00, and LP SmartSide runs about $9.00–$12.50 depending on trim and layout."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do you build composite and wood decks in Avon?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes — we build Trex, TimberTech, and wood decks with engineered framing, drainage solutions, and long-term durability."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do you provide free estimates in Avon, KY?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes — we offer free, detailed estimates for siding, deck construction, and exterior remodeling throughout Avon and Fayette County."
                                }
                            }
                        ]
                    })}
                </script>

            </Helmet>


            <HeroSection
                backgroundImage="/images/deck-builder12.webp"
                customerImage="/images/customer-hero1.png"
                title="Deck and Siding Contractor in Avon, KY"
                subtitle="Upgrade your Avon home with high-quality siding and beautifully designed, long-lasting decks — built to handle Kentucky weather and enhance curb appeal."
                projectCount="5+ exterior projects completed in Central Kentucky"
                city="Avon"
                emailTo="yellowstonerenovation@gmail.com"
            />

            <AboutSection />

            <GallerySection
                title="DECK BUILDER GALLERY"
                subtitle="Explore completed deck builds installed throughout Fayette County — built with precision and premium materials."
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
                title="Exterior Remodeling Services in Avon, KY"
                subtitle="From premium siding systems to fully customized decks, we deliver durable outdoor upgrades for Avon homeowners."
                accentColor="#0a923d"
                bgImage="/images/deck-bg.jpg"
                services={[
                    {
                        title: "Custom Deck Design & Construction",
                        description:
                            "We design and build custom decks specifically for Avon homeowners. Whether you prefer composite or real wood, every deck is engineered for longevity and comfort.",
                        image: "/images/deck11.webp",
                        link: "/cities/avon-ky/deck-builder/",
                    },
                    {
                        title: "Composite & Wood Deck Installation",
                        description:
                            "Choose top-tier composite brands like Trex and TimberTech or select cedar and pressure-treated lumber for a classic wood design. Installed to handle Fayette County climate conditions.",
                        image: "/images/deck7.webp",
                        link: "/cities/avon-ky/composite-deck-installation/",
                    },
                    {
                        title: "James Hardie®, LP SmartSide & Vinyl Siding Installation",
                        description:
                            "We install durable siding products that improve curb appeal and protect your home: Hardie fiber cement, LP SmartSide engineered wood, and premium vinyl siding.",
                        image: "/images/remodler1.webp",
                        link: "/cities/avon-ky/vinyl-siding-installation/",
                    },
                    {
                        title: "Windows & Exterior Trim Upgrades",
                        description:
                            "Enhance efficiency and style with professional window replacement and custom trim installations for Avon homes.",
                        image: "/images/remodler6.webp",
                        link: "/windows",
                    },
                ]}
            />

            <SidingPageSection
                city="Avon"
                layoutOrder={[
                    "hero",
                    "deck",
                    "styles",
                    "types",
                    "cost",
                    "extra",
                    "cta",
                ]}

                heroTitle="Your Trusted Deck & Siding Specialists in Avon, KY"
                heroText1="Yellowstone Renovation provides premium siding installation and custom deck construction throughout Avon and East Lexington."
                heroText2="Our materials include James Hardie fiber cement, LP SmartSide, vinyl siding, cedar siding, and high-performance composite decking — installed by trained professionals."
                heroImage="/images/deck-builder12.webp"
                heroBottomText="Serving Avon, Athens, Hamburg, Lexington, and all of Fayette County — from full siding replacement to complete outdoor living transformations."

                deckHeroTitle="Custom Decks in Avon, KY — Built for Everyday Living"
                deckHeroText1="Expand your home’s outdoor space with a professionally designed deck built around comfort, beauty, and durability."
                deckHeroText2="Our team builds composite and wood decks that withstand Kentucky weather and deliver long-term value."
                deckHeroImage="/images/deck-builder8.webp"
                deckServicesTitle="Deck Services We Provide in Avon:"
                deckServices={[
                    "Trex and TimberTech composite deck installation",
                    "Cedar and pressure-treated wood decks",
                    "Multi-level and elevated decks",
                    "Screened porches and covered decks",
                    "Deck resurfacing and structural repairs",
                    "Railing, stair, and lighting upgrades",
                    "Permitting and inspection management",
                ]}
                deckCostTitle="Deck Cost in Avon, KY"
                deckCostText="Composite decks in Avon range from $48–$75 per sq. ft. depending on elevation, railing type, and design features. Wood decks start around $30 per sq. ft. and range up to $55 depending on lumber type, staining, and custom options. All pricing includes labor, materials, hardware, and cleanup."
                deckImages={[
                    "/images/deck-builder.webp",
                    "/images/deck-builder6.webp",
                    "/images/deck-builder7.webp",
                ]}

                stylesTitle="Popular Siding Styles for Avon Homes"
                stylesIntro="Avon homes benefit from siding options that combine durability with visual appeal. These styles are especially popular in newer and updated Fayette County neighborhoods:"
                styles={[
                    {
                        name: "Lap Siding",
                        text: "Traditional horizontal panels that offer timeless appeal and excellent weather resistance.",
                        image: "/images/Lap-Siding.jpg",
                    },
                    {
                        name: "Board and Batten",
                        text: "A striking vertical design perfect for farmhouse-style or modern homes in the Avon area.",
                        image: "/images/Board-Batten.jpg",
                    },
                    {
                        name: "Shake Siding",
                        text: "Ideal for gables and accent walls — adding warmth, texture, and high-end curb appeal.",
                        image: "/images/Shakes-Shingles.jpg",
                    },
                ]}

                sidingTypesTitle="Siding Materials Installed in Avon, KY"
                sidingTypesIntro="Choose from industry-leading siding products designed for beauty, durability, and low maintenance."
                sidingTypes={[
                    { name: "James Hardie Fiber Cement", image: "/images/hardie.jpg" },
                    { name: "LP SmartSide Engineered Wood", image: "/images/SmartSide.jpg" },
                    { name: "Vinyl Siding", image: "/images/Vinyl-Siding.jpg" },
                    { name: "Cedar Wood Siding", image: "/images/Cedar-Siding.jpg" },
                ]}

                costTitle="Siding Installation Cost in Avon, KY"
                costIntro="Below are average siding price ranges for homes in Avon, KY. Costs vary based on square footage, trim complexity, insulation, and design details:"
                costTable={[
                    { material: "Vinyl Siding", price: "$6.75 – $9.75 per sq. ft." },
                    { material: "Fiber Cement (James Hardie)", price: "$10.50 – $15.00 per sq. ft." },
                    { material: "Engineered Wood (LP SmartSide)", price: "$9.25 – $13.25 per sq. ft." },
                    { material: "Cedar Wood Siding", price: "$13.50 – $19.00 per sq. ft." },
                    { material: "Metal Siding", price: "$8.75 – $14.50 per sq. ft." },
                ]}

                extraSectionTitle="Why Avon Homeowners Choose Yellowstone Renovation"
                extraSectionText="Homeowners in Avon trust our team because we combine premium workmanship with reliable communication and clean job sites. Every project is completed with precision and built to last."
                extraPoints={[
                    "⭐ Experienced deck and siding installers serving Fayette County",
                    "⭐ Premium materials with excellent warranties",
                    "⭐ Clean, respectful crews and no subcontractor surprises",
                    "⭐ 5-year workmanship warranty on all projects",
                    "⭐ Transparent pricing and detailed written estimates",
                ]}

                ctaTitle="Request a Free Deck or Siding Quote in Avon, KY"
                ctaText="Take the first step toward upgrading your home with durable siding or a custom-built deck. Contact Yellowstone Renovation today for a free estimate in Avon and East Lexington."
                ctaImage="/images/deck-builder13.webp"
            />

            <TestimonialsSection />
            <QuoteSection />
        </Layout>
    );
}
