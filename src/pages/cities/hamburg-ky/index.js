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

export default function HamburgKY() {
    return (
        <Layout>
            <Helmet>
                {/* Local Hamburg Keywords */}
                <meta
                    name="keywords"
                    content="Deck Builder Hamburg KY, Siding Contractor Hamburg Lexington, Composite Deck Installation Hamburg, James Hardie Hamburg KY, Vinyl Siding Hamburg Kentucky, LP SmartSide Hamburg"
                />

                {/* Social Sharing */}
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Deck and Siding Contractor in Hamburg, KY | Premium Exterior Remodeling"
                />
                <meta
                    property="og:description"
                    content="Yellowstone Renovation installs custom decks and premium siding in Hamburg, KY. Composite decks, wood decks, Hardie siding, LP SmartSide, and vinyl siding — built with clean craftsmanship and designed for Lexington weather."
                />
                <meta
                    property="og:url"
                    content="https://yellowstonerenovation.com/cities/hamburg-ky/"
                />
                <meta property="og:site_name" content="Yellowstone Renovation" />
                <meta
                    property="og:image"
                    content="https://yellowstonerenovation.com/images/remodler13.webp"
                />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Deck and Siding Contractor in Hamburg, KY | Yellowstone Renovation"
                />
                <meta
                    name="twitter:description"
                    content="Upgrade your Hamburg home with long-lasting siding and beautifully crafted custom decks. Serving Hamburg Pavilion, Polo Club, Pleasant Ridge, Andover & East Lexington."
                />
                <meta
                    name="twitter:image"
                    content="https://yellowstonerenovation.com/images/remodler13.webp"
                />
            </Helmet>

            <SEO
                title="Deck and Siding Contractor in Hamburg, KY | Premium Craftsmanship"
                description="Yellowstone Renovation installs composite decks, wood decks, James Hardie siding, LP SmartSide, and vinyl siding in Hamburg, KY. Designed for durability, curb appeal, and East Lexington weather."
                pathname="/cities/hamburg-ky/"
                image="https://yellowstonerenovation.com/images/remodler13.webp"
            />

            <Helmet>
                {/* Local Business Schema — Hamburg */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HomeAndConstructionBusiness",
                        "name": "Yellowstone Renovation",
                        "url": "https://yellowstonerenovation.com",
                        "image": "https://yellowstonerenovation.com/images/remodler13.webp",
                        "logo": "https://yellowstonerenovation.com/icons/logo.webp",
                        "telephone": "859-545-7020",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Hamburg",
                            "addressRegion": "KY",
                            "postalCode": "40509",
                            "addressCountry": "US"
                        },
                        "areaServed": [
                            "Hamburg, KY",
                            "Lexington, KY",
                            "Polo Club, KY",
                            "Andover Hills, KY",
                            "Pleasant Ridge, KY",
                            "East Lexington"
                        ],
                        "sameAs": [
                            "https://www.facebook.com/p/Yellowstone-Renovation-61551123481170/",
                            "https://www.instagram.com/yellowstone_renovation/",
                            "https://maps.google.com/?q=Yellowstone+Renovation+Hamburg+KY"
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

                {/* Hamburg Local SEO FAQs */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "How much does siding cost in Hamburg, KY?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Vinyl siding in Hamburg typically ranges from $7.25–$10.50 per sq.ft. installed. LP SmartSide ranges from $9.75–$14.00 per sq.ft. James Hardie siding usually costs $11.50–$17.00 per sq.ft. depending on trim and architectural design."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do you build composite decks in Hamburg?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes. We install Trex, TimberTech, and Fiberon composite deck systems throughout Hamburg, Polo Club, Andover, and all of East Lexington. Free estimates available year-round."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do you provide free estimates in Hamburg, KY?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes — all siding and deck projects include a free consultation, inspection, and detailed quote for Hamburg and East Lexington homeowners."
                                }
                            }
                        ]
                    })}
                </script>
            </Helmet>

            <HeroSection
                backgroundImage="/images/deck-builder12.webp"
                customerImage="/images/customer-hero1.png"
                title="Deck and Siding Contractor in Hamburg, KY"
                subtitle="Transform your Hamburg home with durable siding and custom-built decks — designed to handle Kentucky weather while improving beauty, efficiency, and long-term value."
                projectCount="3+ exterior projects completed in East Lexington"
                city="Hamburg"
                emailTo="yellowstonerenovation@gmail.com"
            />

            <AboutSection />

            <GallerySection
                title="DECK BUILDER GALLERY"
                subtitle="Explore our recently completed deck projects — built with precision, durability, and clean craftsmanship."
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
                title="Exterior Remodeling Services in Hamburg, KY"
                subtitle="We deliver high-quality siding, decking, and exterior upgrades for homeowners throughout Hamburg and East Lexington."
                accentColor="#0a923d"
                bgImage="/images/deck-bg.jpg"
                services={[
                    {
                        title: "Custom Deck Design & Construction",
                        description:
                            "We build long-lasting, visually stunning decks tailored for Hamburg homes. Choose low-maintenance composite or classic natural wood — both engineered for comfort and performance.",
                        image: "/images/deck11.webp",
                        link: "/cities/hamburg-ky/deck-builder/",
                    },
                    {
                        title: "Composite & Wood Deck Installation",
                        description:
                            "Trex, TimberTech, cedar, and pressure-treated lumber — installed with clean craftsmanship and engineered for Lexington's weather.",
                        image: "/images/deck7.webp",
                        link: "/cities/hamburg-ky/composite-deck-installation/",
                    },
                    {
                        title: "James Hardie® & Vinyl Siding Installation",
                        description:
                            "Upgrade your home with premium siding materials. We install Hardie fiber cement, LP SmartSide, and durable vinyl siding — backed by manufacturer and workmanship warranties.",
                        image: "/images/remodler1.webp",
                        link: "/cities/hamburg-ky/vinyl-siding-installation/",
                    },
                    {
                        title: "Windows & Exterior Trim Upgrades",
                        description:
                            "Improve energy efficiency and exterior appearance with professional window and trim replacement for Hamburg homeowners.",
                        image: "/images/remodler6.webp",
                        link: "/windows",
                    },
                ]}
            />

            <SidingPageSection
                city="Hamburg"
                layoutOrder={[
                    "hero",
                    "deck",
                    "styles",
                    "types",
                    "cost",
                    "extra",
                    "cta",
                ]}

                heroTitle="Hamburg’s Trusted Deck and Siding Specialists"
                heroText1="Yellowstone Renovation provides durable siding installation and custom deck construction throughout Hamburg and East Lexington."
                heroText2="We install James Hardie, LP SmartSide, vinyl siding, cedar siding, and composite decking — built with precision and supported by strong warranties."
                heroImage="/images/deck-builder12.webp"
                heroBottomText="Proudly serving Hamburg Pavilion, Polo Club, Pleasant Ridge, Andover Hills, Tuscany, and all East Lexington neighborhoods."

                deckHeroTitle="Custom Decks in Hamburg, KY — Built for Outdoor Living"
                deckHeroText1="A professionally designed deck adds comfort, value, and outdoor living space to your Hamburg home."
                deckHeroText2="Choose from low-maintenance composite options or traditional wood decks — all installed with premium craftsmanship."
                deckHeroImage="/images/deck-builder6.webp"
                deckServicesTitle="Deck Services We Provide in Hamburg:"
                deckServices={[
                    "Trex and TimberTech composite decks",
                    "Cedar and pressure-treated wood decks",
                    "Multi-level and elevated decks",
                    "Screened porches & covered deck structures",
                    "Deck resurfacing and repairs",
                    "Custom railings, stairs, and lighting",
                    "Permits & inspections included"
                ]}
                deckCostTitle="Deck Cost in Hamburg, KY"
                deckCostText="Composite decks in Hamburg typically range from $50–$80 per sq. ft. depending on design features, elevation, and material upgrades. Wood decks generally range from $30–$55 per sq. ft. Pricing includes labor, materials, fasteners, and cleanup — no hidden fees."
                deckImages={[
                    "/images/deck-builder.webp",
                    "/images/deck-builder7.webp",
                    "/images/deck-builder8.webp",
                ]}

                stylesTitle="Popular Siding Styles in Hamburg"
                stylesIntro="Hamburg homes often feature modern designs, farmhouse styles, and upscale exterior architecture — making these siding styles especially popular:"
                styles={[
                    {
                        name: "Lap Siding",
                        text: "A clean and timeless style that works well on most Hamburg homes. Available in vinyl, fiber cement, and engineered wood.",
                        image: "/images/Lap-Siding.jpg",
                    },
                    {
                        name: "Board and Batten",
                        text: "A modern vertical siding option popular in East Lexington, offering a bold exterior appearance and strong curb appeal.",
                        image: "/images/Board-Batten.jpg",
                    },
                    {
                        name: "Shakes & Shingles",
                        text: "Ideal for gables and accent areas — adding texture, dimension, and warmth to your exterior design.",
                        image: "/images/Shakes-Shingles.jpg",
                    },
                ]}

                sidingTypesTitle="Siding Materials We Install in Hamburg, KY"
                sidingTypesIntro="We offer durable, long-lasting siding materials chosen for their performance in Kentucky's climate:"
                sidingTypes={[
                    { name: "James Hardie Fiber Cement", image: "/images/hardie.jpg" },
                    { name: "LP SmartSide Engineered Wood", image: "/images/SmartSide.jpg" },
                    { name: "Vinyl Siding", image: "/images/Vinyl-Siding.jpg" },
                    { name: "Cedar Siding", image: "/images/Cedar-Siding.jpg" },
                ]}

                costTitle="Siding Installation Cost in Hamburg, KY"
                costIntro="Siding prices vary based on square footage, trim upgrades, and material selection. Typical Hamburg siding costs include:"
                costTable={[
                    { material: "Vinyl Siding", price: "$7.25 – $10.50 per sq. ft." },
                    { material: "Fiber Cement (James Hardie)", price: "$11.50 – $17.00 per sq. ft." },
                    { material: "Engineered Wood (LP SmartSide)", price: "$9.75 – $14.00 per sq. ft." },
                    { material: "Cedar Wood Siding", price: "$13.50 – $20.00 per sq. ft." },
                    { material: "Metal Siding", price: "$9.50 – $15.00 per sq. ft." },
                ]}

                extraSectionTitle="Why Hamburg Homeowners Choose Yellowstone Renovation"
                extraSectionText="Hamburg residents value clean craftsmanship, durable materials, and clear communication — and that’s exactly what our team delivers on every project."
                extraPoints={[
                    "⭐ High-quality craftsmanship with premium materials",
                    "⭐ Local experts serving East Lexington for years",
                    "⭐ Licensed, insured, and transparent with pricing",
                    "⭐ 5-year workmanship warranty included",
                    "⭐ Clean job sites and dependable communication"
                ]}

                ctaTitle="Get Your Free Deck or Siding Quote in Hamburg, KY"
                ctaText="Ready to upgrade your home with beautiful siding or a custom-built deck? Contact Yellowstone Renovation for a free estimate in Hamburg and East Lexington."
                ctaImage="/images/deck-builder13.webp"
            />

            <TestimonialsSection />
            <QuoteSection />
        </Layout>
    );
}
