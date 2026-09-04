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

export default function WilmoreKY() {
    return (
        <Layout>
            <Helmet>
                {/* Local Wilmore Keywords */}
                <meta
                    name="keywords"
                    content="Deck Builder Wilmore KY, Siding Contractor Wilmore KY, Composite Deck Installation Wilmore, James Hardie Wilmore KY, LP SmartSide Wilmore Kentucky, Vinyl Siding Wilmore KY"
                />

                {/* Social Sharing */}
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Deck and Siding Contractor in Wilmore, KY | Trusted Exterior Remodelers"
                />
                <meta
                    property="og:description"
                    content="Yellowstone Renovation installs custom decks and premium siding in Wilmore, KY. Composite decks, wood decks, Hardie siding, SmartSide, and vinyl siding — built with precision and made for Kentucky weather."
                />
                <meta
                    property="og:url"
                    content="https://yellowstonerenovation.com/cities/wilmore-ky/"
                />
                <meta property="og:site_name" content="Yellowstone Renovation" />
                <meta
                    property="og:image"
                    content="https://yellowstonerenovation.com/images/remodler3.webp"
                />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Deck and Siding Contractor in Wilmore, KY | Yellowstone Renovation"
                />
                <meta
                    name="twitter:description"
                    content="Upgrade your Wilmore home with long-lasting siding and custom-built decks. Serving Asbury University area, Rice Road, and all of Jessamine County."
                />
                <meta
                    name="twitter:image"
                    content="https://yellowstonerenovation.com/images/remodler3.webp"
                />
            </Helmet>

            <SEO
                title="Deck and Siding Contractor in Wilmore, KY | Premium Craftsmanship"
                description="Yellowstone Renovation installs composite decks, wood decks, vinyl siding, James Hardie, and LP SmartSide in Wilmore, KY. Durable workmanship and clean installation backed by warranties."
                pathname="/cities/wilmore-ky/"
                image="https://yellowstonerenovation.com/images/remodler3.webp"
            />

            <Helmet>
                {/* Local Business Schema — Wilmore */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HomeAndConstructionBusiness",
                        "name": "Yellowstone Renovation",
                        "url": "https://yellowstonerenovation.com",
                        "image": "https://yellowstonerenovation.com/images/remodler3.webp",
                        "logo": "https://yellowstonerenovation.com/icons/logo.webp",
                        "telephone": "859-545-7020",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Wilmore",
                            "addressRegion": "KY",
                            "postalCode": "40390",
                            "addressCountry": "US"
                        },
                        "areaServed": [
                            "Wilmore, KY",
                            "Nicholasville, KY",
                            "Harrodsburg Road Corridor",
                            "Jessamine County, KY",
                            "Asbury University Area"
                        ],
                        "sameAs": [
                            "https://www.facebook.com/p/Yellowstone-Renovation-61551123481170/",
                            "https://www.instagram.com/yellowstone_renovation/",
                            "https://maps.google.com/?q=Yellowstone+Renovation+Wilmore+KY"
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

                {/* Wilmore Local SEO FAQs */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "How much does siding cost in Wilmore, KY?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Vinyl siding in Wilmore ranges from $7.00–$10.25 per sq.ft. installed. LP SmartSide ranges from $9.50–$13.75 per sq.ft. James Hardie siding typically costs $11.25–$16.50 per sq.ft. depending on trim package and home size."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do you build decks in Wilmore?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes — we install wood and composite decks throughout Wilmore, Asbury University neighborhoods, Rice Road, and all of Jessamine County."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do you offer free estimates in Wilmore, KY?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Absolutely. All siding, deck, and exterior remodeling projects in Wilmore include a free, no-obligation quote and inspection."
                                }
                            }
                        ]
                    })}
                </script>
            </Helmet>

            <HeroSection
                backgroundImage="/images/deck-builder12.webp"
                customerImage="/images/customer-hero1.png"
                title="Deck and Siding Contractor in Wilmore, KY"
                subtitle="Transform your Wilmore home with clean, durable exterior upgrades — from premium siding to beautiful custom-built decks."
                projectCount="3+ exterior projects completed in Jessamine County"
                city="Wilmore"
                emailTo="yellowstonerenovation@gmail.com"
            />

            <AboutSection />

            <GallerySection
                title="DECK BUILDER GALLERY"
                subtitle="Explore our deck projects across Central Kentucky — built for strength, beauty, and long-term outdoor living."
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
                title="Exterior Remodeling Services in Wilmore, KY"
                subtitle="We deliver high-quality siding, decking, and exterior upgrades for homeowners throughout Wilmore and Jessamine County."
                accentColor="#0a923d"
                bgImage="/images/deck-bg.jpg"
                services={[
                    {
                        title: "Custom Deck Design & Construction",
                        description:
                            "Your deck is built specifically for your Wilmore home — no prefabricated layouts. Choose composite or natural wood for a long-lasting outdoor space.",
                        image: "/images/deck11.webp",
                        link: "/cities/wilmore-ky/deck-builder/",
                    },
                    {
                        title: "Composite & Wood Deck Installation",
                        description:
                            "We install Trex, TimberTech, cedar, and pressure-treated decks — engineered for strength and Kentucky humidity.",
                        image: "/images/deck7.webp",
                        link: "/cities/wilmore-ky/composite-deck-installation/",
                    },
                    {
                        title: "James Hardie® & Vinyl Siding Installation",
                        description:
                            "Protect your home with Hardie fiber cement, LP SmartSide, or premium vinyl siding — each installed with clean craftsmanship and strong warranties.",
                        image: "/images/remodler1.webp",
                        link: "/cities/wilmore-ky/vinyl-siding-installation/",
                    },
                    {
                        title: "Windows & Exterior Trim Upgrades",
                        description:
                            "Boost appearance and efficiency with professional window and trim installation — built for curb appeal and long-term protection.",
                        image: "/images/remodler6.webp",
                        link: "/windows",
                    },
                ]}
            />

            <SidingPageSection
                city="Wilmore"
                layoutOrder={[
                    "hero",
                    "deck",
                    "styles",
                    "types",
                    "cost",
                    "extra",
                    "cta",
                ]}

                heroTitle="Wilmore’s Trusted Deck and Siding Specialists"
                heroText1="Yellowstone Renovation provides reliable siding installation and high-quality deck construction throughout Wilmore, KY."
                heroText2="We install James Hardie, LP SmartSide, vinyl, cedar siding, and composite decking — all built to withstand Kentucky weather."
                heroImage="/images/deck-builder12.webp"
                heroBottomText="Proudly serving Wilmore, Nicholasville, Rice Road, High Bridge, and all neighborhoods surrounding Asbury University."

                deckHeroTitle="Custom Decks in Wilmore, KY — Built for Outdoor Living"
                deckHeroText1="A custom-built deck provides valuable outdoor living space, perfect for family gatherings, grilling, or relaxing in Wilmore’s peaceful neighborhoods."
                deckHeroText2="Choose between low-maintenance composite or classic wood — installed with structural precision and clean craftsmanship."
                deckHeroImage="/images/deck-builder6.webp"
                deckServicesTitle="Deck Services We Provide in Wilmore:"
                deckServices={[
                    "Trex and TimberTech composite decks",
                    "Pressure-treated & cedar wood decks",
                    "Multi-level and elevated decks",
                    "Screened porches & covered structures",
                    "Deck resurfacing and repairs",
                    "Custom railings, lighting, and stairs",
                    "Permits & inspections included"
                ]}
                deckCostTitle="Deck Cost in Wilmore, KY"
                deckCostText="Composite decks in Wilmore typically range from $48–$75 per sq. ft., depending on design, elevation, and material upgrades. Wood decks generally cost $28–$50 per sq. ft. Pricing includes labor, materials, hardware, cleanup, and warranty."
                deckImages={[
                    "/images/deck-builder.webp",
                    "/images/deck-builder7.webp",
                    "/images/deck-builder8.webp",
                ]}

                stylesTitle="Popular Siding Styles in Wilmore"
                stylesIntro="Wilmore residents love clean, classic home designs — making these siding styles especially popular:"
                styles={[
                    {
                        name: "Lap Siding",
                        text: "A versatile choice suitable for most Wilmore homes — available in vinyl, fiber cement, and engineered wood.",
                        image: "/images/Lap-Siding.jpg",
                    },
                    {
                        name: "Board and Batten",
                        text: "A modern vertical style that enhances farmhouse and traditional home architecture across Jessamine County.",
                        image: "/images/Board-Batten.jpg",
                    },
                    {
                        name: "Shakes & Shingles",
                        text: "Perfect for accent areas such as gables — adding warmth, depth, and character to your exterior.",
                        image: "/images/Shakes-Shingles.jpg",
                    },
                ]}

                sidingTypesTitle="Siding Materials We Install in Wilmore, KY"
                sidingTypesIntro="We install durable, low-maintenance siding materials designed for Kentucky’s four-season climate:"
                sidingTypes={[
                    { name: "James Hardie Fiber Cement", image: "/images/hardie.jpg" },
                    { name: "LP SmartSide Engineered Wood", image: "/images/SmartSide.jpg" },
                    { name: "Vinyl Siding", image: "/images/Vinyl-Siding.jpg" },
                    { name: "Cedar Siding", image: "/images/Cedar-Siding.jpg" },
                ]}

                costTitle="Siding Installation Cost in Wilmore, KY"
                costIntro="Siding costs depend on home size, architectural details, and chosen material. Typical Wilmore siding pricing includes:"
                costTable={[
                    { material: "Vinyl Siding", price: "$7.00 – $10.25 per sq. ft." },
                    { material: "Fiber Cement (James Hardie)", price: "$11.25 – $16.50 per sq. ft." },
                    { material: "Engineered Wood (LP SmartSide)", price: "$9.50 – $13.75 per sq. ft." },
                    { material: "Cedar Wood Siding", price: "$13.00 – $19.00 per sq. ft." },
                    { material: "Metal Siding", price: "$9.00 – $15.00 per sq. ft." },
                ]}

                extraSectionTitle="Why Wilmore Homeowners Choose Yellowstone Renovation"
                extraSectionText="Wilmore residents trust our team for transparent pricing, dependable workmanship, and clean installation from start to finish."
                extraPoints={[
                    "⭐ Local Jessamine County exterior specialists",
                    "⭐ Premium craftsmanship with durable products",
                    "⭐ Licensed, insured, and service-focused",
                    "⭐ 5-year workmanship warranty",
                    "⭐ Clean job sites and reliable communication"
                ]}

                ctaTitle="Get Your Free Deck or Siding Quote in Wilmore, KY"
                ctaText="Ready to upgrade your home’s exterior? Contact Yellowstone Renovation for a free estimate on siding or deck installation in Wilmore and surrounding communities."
                ctaImage="/images/deck-builder13.webp"
            />

            <TestimonialsSection />
            <QuoteSection />
        </Layout>
    );
}
