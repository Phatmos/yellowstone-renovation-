import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../../../components/Layout";
import AboutSection from "../../../components/AboutSection";
import BeforeAfter from "../../../components/BeforeAfter";
import GallerySection from "../../../components/GallerySection";
import TestimonialsSection from "../../../components/TestimonialsSection";
import SEO from "../../../components/SEO";
import QuoteSection from "../../../components/QuoteSection";
import ScrollToTop from "../../../components/ScrollToTop";
import "../../../styles/ScrollToTop.css";
import DeckBuildingSteps from "../../../components/DeckBuildingSteps";
import MainSectionSideBar from "../../../components/MainSectionSideBar";
import Hero2 from "../../../components/Hero2";

export default function LouisvilleDeckBuilder() {
    return (
        <Layout>
            <SEO
                title="Deck Builder in Louisville KY — Composite & Wood Decks | Yellowstone Renovation"
                description="Yellowstone Renovation builds custom composite and wood decks in Louisville, KY. Deck replacement, deck repair, railings, stairs, covered decks, and outdoor living upgrades. Free estimates."
                pathname="/cities/louisville-ky/deck-builder"
                image="https://yellowstonerenovation.com/images/deck-builder8.webp"
            />

            <Helmet>
                <meta
                    name="keywords"
                    content="deck builder Louisville KY, composite deck Louisville, wood deck installation Louisville KY, deck repair Louisville, deck replacement Louisville KY, Trex deck builder Louisville"
                />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="Deck Builder in Louisville KY | Yellowstone Renovation" />
                <meta
                    property="og:description"
                    content="Custom deck construction in Louisville, KY — composite decks, wood decks, deck replacement, repairs, stairs, railings, and covered outdoor living spaces."
                />
                <meta
                    property="og:image"
                    content="https://yellowstonerenovation.com/images/deck-builder8.webp"
                />
                <meta
                    property="og:url"
                    content="https://yellowstonerenovation.com/cities/louisville-ky/deck-builder"
                />
                <meta property="og:site_name" content="Yellowstone Renovation" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Louisville KY Deck Builder | Composite & Wood Deck Construction"
                />
                <meta
                    name="twitter:description"
                    content="Build your outdoor space with Yellowstone Renovation — deck builders serving Louisville, Jeffersontown, St. Matthews, Middletown, Prospect, and nearby areas."
                />
                <meta
                    name="twitter:image"
                    content="https://yellowstonerenovation.com/images/deck-builder8.webp"
                />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HomeAndConstructionBusiness",
                        "@id": "https://yellowstonerenovation.com/#localbusiness-louisville-deck-builder",
                        "name": "Yellowstone Renovation",
                        "url": "https://yellowstonerenovation.com/cities/louisville-ky/deck-builder",
                        "logo": "https://yellowstonerenovation.com/icons/logo.webp",
                        "image": "https://yellowstonerenovation.com/images/deck-builder8.webp",
                        "telephone": "(859) 765-7267",
                        "priceRange": "$$",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Louisville",
                            "addressRegion": "KY",
                            "addressCountry": "US"
                        },
                        "serviceType": [
                            "Deck Construction",
                            "Composite Deck Installation",
                            "Wood Deck Builder",
                            "Deck Repair",
                            "Deck Replacement",
                            "Deck Stairs",
                            "Deck Railings",
                            "Covered Decks"
                        ],
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
                        ]
                    })}
                </script>

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "@id": "https://yellowstonerenovation.com/cities/louisville-ky/deck-builder/#service",
                        "name": "Deck Building Services in Louisville, KY",
                        "description": "Custom composite deck construction, wood deck installation, deck replacement, deck repair, stairs, railings, and outdoor living upgrades in Louisville, KY.",
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
                            "Composite Deck Installation",
                            "Wood Deck Installation",
                            "Deck Replacement",
                            "Deck Repair"
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
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "How much does a deck cost in Louisville, KY?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Deck cost in Louisville depends on size, height, framing, stairs, railing, and materials. Wood decks are usually more affordable, while composite decks cost more upfront but require less maintenance."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do you build composite decks in Louisville?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes. Yellowstone Renovation builds composite decks in Louisville using low-maintenance decking options such as Trex, TimberTech, and similar composite systems."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do you replace old decks in Louisville?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes. We provide deck replacement, deck resurfacing, framing repairs, railing upgrades, stair replacement, and full rebuilds for Louisville homeowners."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Are deck estimates free in Louisville?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes. We provide free deck estimates in Louisville and nearby areas including Jeffersontown, St. Matthews, Middletown, Prospect, Lyndon, and Shively."
                                }
                            }
                        ]
                    })}
                </script>
            </Helmet>

            <Hero2
                topText="Top-Rated Deck Builder in Louisville, KY"
                title="Deck Builder in Louisville, KY — Custom Composite & Wood Decks"
                description="Yellowstone Renovation builds strong, clean, and long-lasting decks for homeowners throughout Louisville and surrounding Jefferson County areas. From composite decking to pressure-treated wood, we build outdoor spaces that add comfort, function, and value to your home."
                backgroundImage="/images/deck/deck-lexington1.webp"
                overlayOpacity={0.65}
                formTitle="Get a Free Deck Estimate"
                selectLabel="Select Deck Service"
                selectOptions={[
                    "Custom Deck Design & Build",
                    "Composite Decks",
                    "Trex Deck Installation",
                    "Wood Deck Installation",
                    "Deck Replacement",
                    "Deck Repair & Resurfacing",
                    "Second-Story Decks",
                    "Covered Decks & Pergolas",
                    "Stairs & Railing Installation",
                    "Screened-In Decks & Porches",
                    "Full Backyard Deck Makeover",
                ]}
                ctaText="Get Free Quote"
            />

            <AboutSection />

            <BeforeAfter
                title="Louisville Deck Transformations"
                description="See how old, damaged, and outdated decks can be rebuilt into safe, modern, and comfortable outdoor living spaces."
                buttonText="Explore More Projects"
                buttonLink="/projects"
                accentColor="#0a923d"
                images={[
                    { before: "/images/deckafter3.webp", after: "/images/deckbefore3.webp" },
                    { before: "/images/deckafter1.webp", after: "/images/deckbefore1.webp" },
                ]}
            />

            <GallerySection
                title="LOUISVILLE DECK BUILDER GALLERY"
                subtitle="View completed deck projects — composite decks, wood decks, railings, stairs, and custom outdoor living spaces."
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

            <DeckBuildingSteps />
            <TestimonialsSection />

            <MainSectionSideBar
                title="Deck Builder in Louisville, KY — Custom Composite & Wood Decks"
                sections={[
                    {
                        heading: "Deck Builder Louisville KY — Strong Outdoor Spaces Built Right",
                        text: `Yellowstone Renovation provides professional deck construction for homeowners throughout Louisville, Kentucky. We build decks that are clean, strong, functional, and designed for long-term outdoor use.

Our team handles design, framing, decking, stairs, railings, fascia, and finishing details. Whether you want a simple backyard platform or a larger outdoor living space, we build with structure and durability first.`
                    },
                    {
                        heading: "Composite Deck Installation in Louisville, KY",
                        text: `Composite decking is a strong option for Louisville homeowners who want a low-maintenance deck that resists moisture, fading, insects, and warping.

We install composite deck systems with clean layouts, hidden fasteners, picture-frame borders, upgraded railings, and moisture-conscious framing details. Composite costs more upfront than wood, but it saves maintenance time over the years.`
                    },
                    {
                        heading: "Wood Deck Builder in Louisville, Kentucky",
                        text: `Pressure-treated wood decks are still one of the most practical choices for homeowners who want a strong deck at a more budget-friendly price.

We build wood decks with proper framing, safe stairs, solid railings, and clean board layout. Wood requires staining and maintenance, but it gives a natural look and excellent value when built correctly.`
                    },
                    {
                        heading: "Deck Replacement & Repair in Louisville, KY",
                        text: `If your deck is soft, rotted, unstable, outdated, or no longer safe, replacing it is usually smarter than patching the same problem over and over.

We handle deck tear-outs, framing repairs, full rebuilds, deck resurfacing, stair replacement, railing replacement, and structural upgrades. We check the frame before recommending whether repair or replacement makes sense.`
                    },
                    {
                        heading: "Our Deck Design & Construction Process",
                        text: `Every deck starts with a clear layout, material selection, and inspection of the existing structure or build area.

We discuss size, height, stairs, railing style, deck boards, fascia, lighting options, and any code or permit requirements. After approval, we build with organized scheduling, clean job sites, and clear communication from start to finish.`
                    },
                    {
                        heading: "Average Deck Cost in Louisville, KY",
                        text: `Deck pricing in Louisville depends on square footage, height, stairs, railing, access, demo, framing, and material choice.

Wood decks are usually the more affordable option. Composite decks usually cost more upfront but reduce maintenance. Large elevated decks, second-story decks, roof covers, and upgraded railings increase the price.`
                    },
                    {
                        heading: "Get a Free Deck Estimate in Louisville, KY",
                        text: `We provide free, no-pressure deck estimates in Louisville and surrounding areas.

Our team can review your space, discuss wood versus composite, explain what affects the price, and provide a clear written estimate for your project.`
                    },
                    {
                        heading: "Decking Contractor in Louisville, Kentucky",
                        text: `Choosing the right deck contractor matters because a deck is not just decoration — it is a structure people stand on every day.

Yellowstone Renovation focuses on solid framing, safe stairs, strong railing, clean cuts, proper fastening, and long-lasting materials. Cheap deck work usually becomes expensive later.`
                    },
                    {
                        heading: "Deck Installation Services in Louisville",
                        text: `We build backyard decks, composite decks, wood decks, second-story decks, pool decks, covered decks, pergola-ready decks, screened porch platforms, stair systems, and railing upgrades.

Every layout is built around the home, yard, access points, and how the homeowner actually plans to use the space.`
                    },
                    {
                        heading: "Professional Deck Construction in Louisville, KY",
                        text: `Our deck builds are designed for Kentucky weather, including rain, humidity, seasonal movement, and heavy use.

We pay attention to the parts most homeowners never see: framing layout, post support, stair structure, fastening, drainage, and the details that keep the deck stable over time.`
                    },
                    {
                        heading: "Working with a Local Louisville Deck Contractor",
                        text: `A local contractor understands Kentucky weather, soil conditions, common home layouts, and the problems that show up on older decks.

We keep the process direct: inspect, design, estimate, schedule, build, clean up, and finish the job properly.`
                    },
                    {
                        heading: "Choose Reliable Deck Installers in Louisville, KY",
                        text: `A deck should not feel shaky, rushed, or patched together. Our crews focus on structure, clean appearance, and realistic communication.

We help homeowners choose the right material, avoid unnecessary upgrades, and build a deck that fits the house instead of looking like an afterthought.`
                    },
                    {
                        heading: "Average Cost to Install a New Deck in Louisville",
                        text: `Most professional deck projects vary widely depending on size and complexity. A basic ground-level wood deck costs much less than a raised composite deck with stairs, aluminum railing, fascia, and lighting.

The right way to price it is after measuring the space and checking access, height, materials, and structural needs.`
                    },
                    {
                        heading: "Louisville Wood Decks — Natural Look and Practical Cost",
                        text: `Wood decks are a good choice for homeowners who want a strong outdoor space without the higher upfront cost of composite.

The tradeoff is maintenance. Wood needs staining, sealing, and regular care to keep it protected from moisture and sun exposure.`
                    },
                    {
                        heading: "Composite Decks in Louisville, KY",
                        text: `Composite decks are a better fit for homeowners who want less maintenance and a cleaner long-term appearance.

Composite boards resist rot, insects, and regular weather damage better than wood. They also work well with upgraded railings, picture-frame borders, fascia, and modern outdoor living designs.`
                    },
                    {
                        heading: "Deck Builder Near Me in Louisville, KY",
                        text: `Searching for “deck builder near me” in Louisville? Yellowstone Renovation serves Louisville, Jeffersontown, St. Matthews, Middletown, Prospect, Lyndon, Shively, and nearby Jefferson County areas.

We build decks that improve outdoor space, increase home value, and give homeowners a safe place to relax, grill, and entertain.`
                    },
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
                        text: "Browse Louisville Deck Projects",
                        button: "View Gallery",
                        link: "/projects",
                    },
                ]}
                whyUs={[
                    "Deck builders serving Louisville and nearby Jefferson County areas",
                    "Composite and wood deck construction",
                    "Trex and low-maintenance decking options",
                    "Custom designs built around your home and yard",
                    "Deck replacement, repairs, stairs, and railing upgrades",
                    "Licensed, insured, and clear communication from start to finish",
                ]}
                projects={[
                    { image: "/images/deck4.webp", title: "Louisville Composite Deck Build" },
                    { image: "/images/deck5.webp", title: "Wood Deck With Custom Railings" },
                    { image: "/images/deck6.webp", title: "Pergola & Deck Combo Project" },
                    { image: "/images/deck7.webp", title: "Covered Deck Extension" },
                ]}
                findUs={[
                    { name: "Yelp", rating: "4.6/5", logo: "/icons/yelp.webp" },
                    { name: "Google", rating: "4.9/5", logo: "/icons/google-reviews.webp" },
                ]}
                blog={[
                    {
                        title: "How Much Does a Deck Cost in Kentucky?",
                        date: "April 12th, 2025",
                        author: "Mark Ellison",
                        image: "/images/deck6.webp",
                    },
                    {
                        title: "Composite vs Wood Decks: A Guide for Louisville Homeowners",
                        date: "May 20th, 2025",
                        author: "Mark Ellison",
                        image: "/images/deck7.webp",
                    },
                    {
                        title: "Deck Maintenance Tips for Louisville Homes",
                        date: "June 10th, 2025",
                        author: "Mark Ellison",
                        image: "/images/deck8.webp",
                    },
                ]}
                partners={[
                    "/icons/trex.webp",
                    "/icons/timbertech.webp",
                    "/icons/yelp.webp"
                ]}
            />

            <QuoteSection />
            <ScrollToTop />
        </Layout>
    );
}