import React from "react";
import Layout from "../components/Layout";
import GallerySection from "../components/GallerySection";
import Services from "../components/Services.js"
import DealerBanner from "../components/DealerBanner";
import HeroModern from "../components/HeroModern";
import MainSectionSideBar from "../components/MainSectionSideBar";
import SEO from "../components/SEO";
import BeforeAfter from "../components/BeforeAfter";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import TestimonialsSection from "../components/TestimonialsSection";
import QuoteSection from "../components/QuoteSection";
import DeckBuildingSteps from "../components/DeckBuildingSteps";
import HeroRoofingSection from "../components/HeroRoofingSection";


export default function DeckBuilderPage() {
    return (
        <Layout>
            <Helmet>
                {/* ✅ SEO Keywords */}
                <meta
                    name="keywords"
                    content="Deck builder Lexington KY, Composite decks Kentucky, Covered decks contractor, Wood deck construction Lexington, Outdoor living spaces Central Kentucky"
                />

                {/* ✅ Social Media OpenGraph */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Deck Builder in Lexington, KY | Composite & Wood Decks | Free Estimates" />
                <meta property="og:description" content="Custom decks built for Kentucky weather — wood, composite, elevated & covered decks. 4.9★ rated deck contractor. Call for a fast quote!" />
                <meta property="og:image" content="https://yellowstonerenovation.com/images/deck1.webp" />
                <meta property="og:url" content="https://yellowstonerenovation.com/decking/" />
                <meta property="og:site_name" content="Yellowstone Renovation" />

                {/* ✅ Twitter Cards */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Top Deck Builder in Lexington, KY — Custom Composite & Wood Decks" />
                <meta name="twitter:description" content="Design + build services for backyard decks, covered patios & outdoor living upgrades. Free estimates!" />
                <meta name="twitter:image" content="https://yellowstonerenovation.com/images/deck1.webp" />
            </Helmet>

            {/* ✅ Primary SEO Component */}
            <SEO
                title="Deck Builder in Lexington, KY | Composite + Wood Deck Construction"
                description="Transform your backyard with a custom-built deck designed for comfort, style & durability. Expert builders serving Lexington, Nicholasville, Georgetown, Winchester & Richmond."
                pathname="/decking/"
                image="https://yellowstonerenovation.com/images/deck1.webp"
            />

            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            /* ------------------------------------------------------
                               LOCAL BUSINESS
                            ------------------------------------------------------ */
                            {
                                "@type": "LocalBusiness",
                                "@id": "https://yellowstonerenovation.com/#localbusiness",
                                "name": "Yellowstone Renovation",
                                "url": "https://yellowstonerenovation.com",
                                "logo": "https://yellowstonerenovation.com/icons/logo.webp",
                                "image": "https://yellowstonerenovation.com/images/og-home.jpg",
                                "telephone": "(859) 765-7267",
                                "priceRange": "$$",
                                "address": {
                                    "@type": "PostalAddress",
                                    "streetAddress": "120 Tina Way",
                                    "addressLocality": "Nicholasville",
                                    "addressRegion": "KY",
                                    "postalCode": "40356",
                                    "addressCountry": "US"
                                }
                            },

                            /* ------------------------------------------------------
                               ORGANIZATION
                            ------------------------------------------------------ */
                            {
                                "@type": "Organization",
                                "@id": "https://yellowstonerenovation.com/#organization",
                                "name": "Yellowstone Renovation",
                                "url": "https://yellowstonerenovation.com/",
                                "logo": "https://yellowstonerenovation.com/icons/logo.webp",
                                "contactPoint": {
                                    "@type": "ContactPoint",
                                    "telephone": "(859) 765-7267",
                                    "contactType": "customer support"
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

                            /* ------------------------------------------------------
                               MULTIPLE PRODUCT SCHEMA (GVD STYLE — 4 items)
                            ------------------------------------------------------ */
                            {
                                "@type": "Product",
                                "name": "Yellowstone Renovation",
                                "aggregateRating": {
                                    "@type": "AggregateRating",
                                    "ratingValue": "4.9",
                                    "reviewCount": "87"
                                }
                            },
                            {
                                "@type": "Product",
                                "name": "Yellowstone Renovation Deck Building",
                                "aggregateRating": {
                                    "@type": "AggregateRating",
                                    "ratingValue": "4.9",
                                    "reviewCount": "87"
                                }
                            },
                            {
                                "@type": "Product",
                                "name": "Yellowstone Renovation Siding Services",
                                "aggregateRating": {
                                    "@type": "AggregateRating",
                                    "ratingValue": "4.9",
                                    "reviewCount": "87"
                                }
                            },
                            {
                                "@type": "Product",
                                "name": "Yellowstone Renovation & Remodeling",
                                "aggregateRating": {
                                    "@type": "AggregateRating",
                                    "ratingValue": "4.9",
                                    "reviewCount": "87"
                                }
                            }
                        ]
                    })}
                </script>
            </Helmet>


            <HeroRoofingSection
                background="/images/deck/deck-lexington39.webp"
                title="Top Deck Builder in Lexington, KY"
                subtitle="From custom wood decks to modern composite designs — Yellowstone Renovation builds strong, beautiful outdoor spaces made to last. Expert craftsmanship, clean installations, and trusted 4.9★ service across Central Kentucky."
                ratingText="⭐⭐⭐⭐⭐ 4.9 | #1 Local Deck Experts"
                placeholder="Enter your ZIP code"
                buttonText="Get a quick quote"
            />

            <Services
                title="Deck & Outdoor Services"
                subtitle="Build your dream outdoor space — durable, stylish, and made to enjoy every season."
                accentColor="#0a923d"
                bgImage="/images/deck-bg.jpg"
                services={[
                    {
                        title: "Custom Decks",
                        description:
                            "From design to build — we craft beautiful, long-lasting decks that fit your lifestyle.",
                        image: "/images/deck11.webp",
                        link: "/custom-decks",
                    },
                    {
                        title: "Composite Decking",
                        description:
                            "Low-maintenance, fade-resistant composite decks with a sleek, modern look.",
                        image: "/images/deck7.webp",
                        link: "/composite-decks",
                    },
                    {
                        title: "Wood Decks",
                        description:
                            "Natural wood decks with rich textures and timeless appeal, built with expert precision.",
                        image: "/images/deck-builder20.webp",
                        link: "/wood-decks",
                    },
                    {
                        title: "Pergolas & Railings",
                        description:
                            "Add elegance and shade to your outdoor living area with custom pergolas and railings.",
                        image: "/images/deck-builder6.webp",
                        link: "/contact",
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
            <DealerBanner
                title="Complete Service Premier Deck Builders"
                highlight="Premier Deck Builders"
                description="When you choose our all-in-one deck building service, you’re not just getting a deck — you’re investing in a complete outdoor transformation. From selecting premium, durable materials to expert design and flawless craftsmanship, we handle every step of the process"
                backgroundColor="#ffffff"
                highlightColor="#247704"
            />
            <BeforeAfter
                title="Deck Before & After Transformations"
                description="Watch how we replace old, unsafe decks with beautiful, long-lasting outdoor spaces perfect for relaxing, grilling, and entertaining. Built strong for Kentucky weather."
                buttonText="See More Deck Projects"
                buttonLink="/projects"
                accentColor="#0a923d"
                images={[
                    {
                        before: "/images/deckafter3.webp",
                        after: "/images/deckbefore3.webp"
                    },
                    {
                        before: "/images/deckafter1.webp",
                        after: "/images/deckbefore1.webp"
                    }
                ]}
            />
            <MainSectionSideBar
                title="Deck builder in Lexington, KY"
                sections={[
                    { heading: "Deck Builder in Lexington, KY — Custom Outdoor Living Experts", text: `Yellowstone Renovation is the leading deck builder in Lexington KY offering professional deck installation, replacement, and repair services for homeowners throughout Central Kentucky. We create durable, stylish outdoor living spaces using composite, wood, and PVC materials engineered to withstand Kentucky’s climate. Our team specializes in custom deck construction, multi-level decks, and complete backyard transformations. Every deck we build is designed for comfort, strength, and long-term value. We handle everything from design and permits to installation and finishing, ensuring every detail meets our quality standards. Our decks enhance property value, add usable space, and bring beauty and relaxation to your home year-round. When searching for “deck builder near me in Lexington KY,” trust Yellowstone Renovation for craftsmanship, reliability, and a result you’ll love.` },
                    { heading: "Custom Deck Installation Lexington KY", text: `Our Lexington deck installation services combine design creativity and precise construction. Each deck is custom-built to fit your home’s layout and style while maximizing outdoor functionality. We work closely with homeowners to design decks that match both modern and traditional homes, using materials like composite, cedar, and pressure-treated wood. Whether you want a wraparound deck, pool deck, or rooftop terrace, our installation process ensures flawless alignment, clean edges, and lasting strength. Every component—from railing posts to joist spacing—is engineered to local building codes. With professional project management, transparent pricing, and efficient scheduling, we deliver exceptional results without delays or hidden costs.` },
                    { heading: "Composite Decking Installation in Lexington KY", text: `Composite decking is the top choice for homeowners who want low maintenance and lasting durability. Our composite deck systems are resistant to rot, mold, fading, and warping, making them perfect for humid Kentucky summers. These decks maintain color and texture for decades without sanding, sealing, or staining. We offer high-quality materials from brands like Trex, TimberTech, and AZEK to guarantee performance and visual appeal. Composite decks come in multiple finishes that mimic real wood, offering a clean, modern look while being eco-friendly and safe for families and pets. If you want a long-term investment with minimal upkeep, composite decking is ideal for your Lexington home.` },
                    { heading: "Wood Deck Builder in Lexington KY", text: `Wood decks bring warmth, natural beauty, and timeless charm. We offer installation using cedar, redwood, and pressure-treated lumber designed to resist moisture, termites, and decay. Our wood decks are hand-finished and sealed for long-term protection and easy maintenance. Whether you want a rustic cabin feel or a sleek contemporary design, wood remains one of the most customizable materials available. We also provide annual maintenance services to keep your wood deck looking beautiful year after year. Each project is carefully planned and built to deliver reliable performance and lasting comfort.` },
                    { heading: "Deck Replacement and Remodeling Services", text: `If your old deck is unsafe or outdated, Yellowstone Renovation provides complete deck replacement in Lexington KY. We remove existing structures, inspect foundations, and rebuild with stronger, more efficient framing and updated materials. Our remodeling services allow you to upgrade from wood to composite or add new features like built-in seating, steps, or privacy panels. We ensure your new deck meets all modern building requirements while improving comfort and style. A well-executed deck replacement adds curb appeal, increases resale value, and enhances your home’s overall usability.` },
                    { heading: "Multi-Level and Custom Deck Designs", text: `Our team specializes in multi-level decks and complex outdoor structures. We design and build decks that seamlessly connect to patios, balconies, and outdoor kitchens. Multi-level decks add depth and dimension to your property, providing distinct zones for lounging, dining, and entertainment. Using advanced 3D visualization and structural planning, we ensure a perfect fit with your home’s exterior. We also integrate lighting, railing systems, and pergolas for a cohesive, modern outdoor experience. Every design is unique, functional, and tailored to your space.` },
                    { heading: "Outdoor Living Solutions and Add-Ons", text: `Yellowstone Renovation turns simple decks into complete outdoor living areas. We install pergolas, gazebos, stairs, built-in benches, and custom railing systems that elevate usability and comfort. Our experts can also integrate LED lighting, ceiling fans, privacy screens, and weatherproof storage. These additions make your outdoor area ideal for relaxation and gatherings while maintaining visual harmony with your home. We focus on durability, precision, and detail to ensure every element performs beautifully through every season.` },
                    { heading: "Why Choose Yellowstone Renovation Deck Builders Lexington KY", text: `Our company stands out through experience, transparency, and genuine commitment to quality. We are fully licensed, insured, and locally operated, serving Lexington, Nicholasville, Georgetown, Richmond, and Versailles. Our clients appreciate our clear communication, fair pricing, and clean job sites. We use only high-grade materials and skilled craftsmen to guarantee structural integrity and flawless results. Hundreds of satisfied homeowners have trusted Yellowstone Renovation for projects that combine craftsmanship, reliability, and beauty. When you search “deck contractor Lexington KY,” our name stands among the top because we deliver excellence every time.` },
                    { heading: "Schedule Your Free Deck Consultation in Lexington KY", text: `Ready to enhance your home with a new deck? Contact Yellowstone Renovation today for a free consultation and estimate. Our team will guide you through every stage—from material selection and budgeting to final walkthrough. We pride ourselves on delivering projects on time, on budget, and beyond expectations. Call now or request an online quote to start your deck project with Lexington’s most trusted builders. Experience the comfort, elegance, and value that only Yellowstone Renovation can deliver for your home.` }
                ]}

                offers={[
                    {
                        image: "/images/deck1.webp",
                        text: "Get $1500 OFF Your New Deck Installation — Limited Time Offer",
                        button: "Claim Discount",
                        link: "/contact",
                    },
                    {
                        image: "/images/deck2.webp",
                        text: "Explore Over 20 Completed Deck Projects in Lexington",
                        button: "View Gallery",
                        link: "/projects",
                    },
                ]}
                whyUs={[
                    "Expert deck builders serving Lexington and Central Kentucky",
                    "Custom designs to fit your home and lifestyle",
                    "Top-quality materials — composite, wood, or hybrid options",
                    "Licensed, insured, and trusted by local homeowners",
                    "Fast, clean installations with no delays or hidden costs",
                ]}
                projects={[
                    { image: "/images/deck4.webp", title: "Backyard Deck" },
                    { image: "/images/deck5.webp", title: "Luxury Patio" },
                    { image: "/images/deck6.webp", title: "Composite Steps" },
                    { image: "/images/deck7.webp", title: "Wood Rail Deck" },
                ]}
                findUs={[
                    { name: "Yelp", rating: "4.6/5", logo: "/icons/yelp.webp" },
                    { name: "Google", rating: "4.9/5", logo: "/icons/google-reviews.webp" },
                ]}
                blog={[
                    {
                        title: "Choosing the Right Deck Material for Kentucky Weather",
                        date: "April 12th, 2025",
                        author: "Vasyl",
                        image: "/images/deck6.webp",
                    },
                    {
                        title: "Top 5 Deck Design Ideas for Lexington Homes",
                        date: "May 20th, 2025",
                        author: "Peter",
                        image: "/images/deck7.webp",
                    },
                    {
                        title: "The Long-Term Value of Adding a Custom Deck",
                        date: "June 5th, 2025",
                        author: "Vasyl",
                        image: "/images/deck8.webp",
                    },
                ]}
                partners={["/icons/jameshardie.webp", "/icons/yelp.webp"]}
            />

            <TestimonialsSection />
            <DeckBuildingSteps />
            <QuoteSection />
        </Layout>
    );
}
