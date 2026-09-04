import React from "react";
import Layout from "../components/Layout";
import GallerySection from "../components/GallerySection";
import Services from "../components/Services.js"
import DealerBanner from "../components/DealerBanner";
import HeroModern from "../components/HeroModern";
import MainSectionSideBar from "../components/MainSectionSideBar";
import WindowsPromoSection from "../components/WindowsPromoSection";
import SEO from "../components/SEO";
import BeforeAfter from "../components/BeforeAfter";
import { Helmet } from "react-helmet";
import HeroRoofingSection from "../components/HeroRoofingSection";

export default function CompositeDeckPage() {
    return (
        <Layout>
            <Helmet>
                {/* ✅ Page Targeted Keywords */}
                <meta
                    name="keywords"
                    content="Composite decks Lexington KY, Trex deck builder Kentucky, Low maintenance decking, Composite deck installer Lexington, Outdoor living decks central KY"
                />

                {/* ✅ Social Preview (OG Tags) */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Composite Deck Builder in Lexington, KY | Low-Maintenance Outdoor Living" />
                <meta property="og:description" content="Premium composite decks that resist fading, warping & rot — built for Kentucky weather. Free estimates from 4.9★ rated local contractor!" />
                <meta property="og:image" content="https://yellowstonerenovation.com/images/deck5.webp" />
                <meta property="og:url" content="https://yellowstonerenovation.com/composite-decks/" />
                <meta property="og:site_name" content="Yellowstone Renovation" />

                {/* ✅ Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Composite Deck Contractor in Lexington, KY" />
                <meta name="twitter:description" content="Maintenance-free decking — long-lasting value, beautiful outdoor living." />
                <meta name="twitter:image" content="https://yellowstonerenovation.com/images/deck5.webp" />
            </Helmet>

            {/* ✅ On-Page SEO for Google */}
            <SEO
                title="Composite Deck Builder in Lexington, KY | Yellowstone Renovation"
                description="Upgrade your backyard with beautiful composite decking — no paint, no rot, no splinters. Serving Lexington, Nicholasville, Georgetown, Winchester & Richmond, KY."
                pathname="/composite-decks/"
                image="https://yellowstonerenovation.com/images/deck5.webp"
            />

            <Helmet>
                {/* ✅ Composite Deck Schema */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HomeAndConstructionBusiness",
                        "name": "Yellowstone Renovation",
                        "url": "https://yellowstonerenovation.com/composite-decks/",
                        "image": "https://yellowstonerenovation.com/images/deck5.webp",
                        "telephone": "859-545-7020",
                        "serviceType": [
                            "Composite Deck Construction",
                            "Trex Decking",
                            "Fiberon Decking",
                            "Deck Railings & Lighting"
                        ],
                        "areaServed": [
                            "Lexington, KY",
                            "Nicholasville, KY",
                            "Georgetown, KY",
                            "Winchester, KY",
                            "Richmond, KY"
                        ]
                    })}
                </script>

                {/* ✅ FAQ Schema for Increased Ranking */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "How much does a composite deck cost in Lexington, KY?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Most composite decks in Lexington start at $45–$75 per sq.ft depending on brand, railings & installation complexity."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Is composite decking worth the investment?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes — composite decks offer up to 70–90% ROI, require almost no maintenance, and last 25+ years without painting or staining."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Which composite deck brands do you install?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "We install Trex®, Fiberon®, Deckorators® and TimberTech® — including railings, lighting & built-in seating options."
                                }
                            }
                        ]
                    })}
                </script>
            </Helmet>


            <HeroRoofingSection
                background="/images/deck/deck-lexington07.webp"
                title="Composite Deck Builders in Lexington, KY"
                subtitle="Upgrade your outdoor space with a low-maintenance, long-lasting composite deck. Yellowstone Renovation installs premium Trex, TimberTech, and fiber-composite systems built for durability, beauty, and everyday comfort — guaranteed to last for decades."
                ratingText="⭐⭐⭐⭐⭐ 4.9 | Trusted Composite Deck Experts"
                placeholder="Enter your ZIP code"
                buttonText="Get a quick quote"
            />


            <GallerySection
                title="Composite Deck Builder Gallery in Lexington, KY"
                subtitle="Browse our low-maintenance composite deck installations — built to resist fading, warping, and rot while delivering incredible outdoor comfort and style."
                highlight="COMPOSITE DECK BUILDER"
                background="#ffffff"
                images={[
                    "/images/deck/deck-lexington105.webp",
                    "/images/deck/deck-lexington104.webp",
                    "/images/deck/deck-lexington2.webp",
                    "/images/deck/deck-lexington01.webp",
                    "/images/deck/deck-lexington35.webp",
                    "/images/deck/deck-lexington65.webp",
                    "/images/deck/deck-lexington54.webp",
                    "/images/deck/deck-lexington23.webp",
                    "/images/deck/deck-lexington16.webp",
                    "/images/deck/deck-lexington87.webp",
                    "/images/deck/deck-lexington34.webp",
                    "/images/deck/deck-lexington65.webp",
                    "/images/deck/deck-lexington23.webp",
                    "/images/deck/deck-lexington87.webp",
                    "/images/deck/deck-lexington21.webp",
                    "/images/deck/deck-lexington57.webp",
                    "/images/deck/deck-lexington67.webp",
                    "/images/deck/deck-lexington87.webp",
                    "/images/deck/deck-lexington23.webp",
                    "/images/deck/deck-lexington7.webp",
                    "/images/deck/deck-lexington96.webp",

                ]}
            />

            <DealerBanner
                title="Composite Decks Built for Durability — No Maintenance, No Worries"
                highlight="Lexington’s Top Composite Deck Builders"
                description="Enjoy a deck that looks amazing year after year with zero sanding, staining, or sealing. Our composite decking systems resist moisture, fading, and rot — engineered for Kentucky weather and backed by industry-leading warranties. Choose modern colors, realistic wood textures, and long-lasting performance from trusted brands like Trex® and TimberTech®."
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
                        before: "/images/deckafter.webp",
                        after: "/images/deckbefore.webp"
                    }
                ]}
            />
            <Services
                title="Composite Deck Construction"
                subtitle="Low-maintenance composite decks built to last — resistant to fading, warping, and weather damage in Lexington’s climate."
                accentColor="#0a923d"
                bgImage="/images/deck-bg.jpg"
                services={[
                    {
                        title: "Custom Composite Decks",
                        description:
                            "Beautiful, durable deck designs tailored to your lifestyle. Choose from modern colors and realistic wood textures for a clean, long-lasting finish.",
                        image: "/images/deck11.webp",
                        link: "/composite-decks",
                    },
                    {
                        title: "Trex® & TimberTech® Decking",
                        description:
                            "Premium composite materials that never need staining or sealing — backed by fade, stain, and moisture warranties for decades of performance.",
                        image: "/images/deck7.webp",
                        link: "/composite-decks/",
                    },
                    {
                        title: "Slip-Resistant & Weather-Proof Decking",
                        description:
                            "Composite boards engineered to stay cool, resist cracking, and stand strong against Kentucky humidity — perfect for high-traffic outdoor living.",
                        image: "/images/deck8.webp",
                        link: "/wood-decks",
                    },
                    {
                        title: "Pergolas, Railings & Deck Enhancements",
                        description:
                            "Modern railing systems, LED lighting, and shade solutions that elevate your composite deck with comfort, safety, and style.",
                        image: "/images/deck9.webp",
                        link: "/custom-decks",
                    },
                ]}
            />

            <MainSectionSideBar
                title="Composite Deck Contractors in Lexington, KY"
                sections={[
                    {
                        heading: "Composite Deck Builder in Lexington, KY — High-Performance Outdoor Living",
                        text: `Yellowstone Renovation is a leading composite deck builder in Lexington KY, specializing in durable, low-maintenance outdoor living solutions. We install Trex®, TimberTech®, and other premium composite decking engineered to withstand Kentucky’s moisture, heat, and temperature changes without rotting, splintering, or fading. Searching for “composite deck builders near me in Lexington”? Rest easy — we deliver industry-leading materials, expert installation, and beautiful finishes that transform your backyard into a year-round destination.`
                    },
                    {
                        heading: "Custom Composite Deck Installation in Lexington KY",
                        text: `Every deck we build is designed specifically for your home — from deck shape and layout to railing style and lighting options. Composite decking provides a modern look with realistic wood textures that never require sanding, sealing, or staining. Our precision installation ensures solid framing, proper drainage control, and a clean finish built for comfort and longevity.`
                    },
                    {
                        heading: "Trex® & TimberTech® Composite Decking",
                        text: `We offer premium composite decking brands including Trex®, TimberTech®, and AZEK® — all backed by fade and stain warranties of up to 25 years. These materials resist mold, moisture, warping, and insects better than traditional wood. Choose from various tones and grains that complement both modern and traditional Kentucky homes.`
                    },
                    {
                        heading: "Slip-Resistant, Weather-Proof Deck Systems",
                        text: `Our composite decks are built for safety and year-round usability. Boards offer superior slip-resistance and remain cooler under the sun compared to standard wood surfaces. No cracking, no splinters — just durable comfort even in humid Kentucky summers and freezing winters.`
                    },
                    {
                        heading: "Composite Deck Replacement & Upgrades",
                        text: `Is your old deck failing or outdated? We remove aging structures and rebuild with advanced composite materials and stronger framing for long-term structural integrity. Upgrade wood rails to metal railing systems, add lighting, privacy walls, and more — improving beauty and functionality while eliminating maintenance.`
                    },
                    {
                        heading: "Multi-Level Composite Deck Designs",
                        text: `Create visually stunning and functional outdoor layouts with multi-level composite decks. Perfect for sloped yards, pools, and entertainment zones — we design distinct spaces for dining, relaxing, and gatherings. Integrate pergolas, kitchens, staircases, and LED lighting for a complete outdoor experience.`
                    },
                    {
                        heading: "Deck Add-Ons, Railings, & Lighting Enhancements",
                        text: `Customize your deck with composite railing systems, modern metal balusters, built-in seating, stairs, or under-deck waterproofing. LED lighting extends usability into the evening and adds dramatic ambiance with safety in mind. Every detail is built to perform and impress.`
                    },
                    {
                        heading: "Why Choose Yellowstone Renovation — Composite Deck Specialists in Lexington KY",
                        text: `We are fully licensed, insured, and trusted by homeowners across Lexington, Nicholasville, Georgetown, Richmond, & Versailles. Our customers rely on us for honest pricing, clean work sites, fast schedules, and flawless craftsmanship. When searching “composite deck contractor Lexington KY,” homeowners choose us for unmatched value and results.`
                    },
                    {
                        heading: "Free Composite Deck Estimate in Lexington KY",
                        text: `Ready to upgrade to a maintenance-free outdoor living space? Request your free composite deck consultation today. We’ll guide you through material options, design ideas, pricing, and full project planning — delivering a deck that looks incredible and lasts decades.`
                    },
                ]}

                offers={[
                    {
                        image: "/images/deck1.webp",
                        text: "Get $1,500 OFF Composite Deck Installation — Limited Time",
                        button: "Claim Discount",
                        link: "/contact",
                    },
                    {
                        image: "/images/deck2.webp",
                        text: "View Completed Composite Deck Projects",
                        button: "See Gallery",
                        link: "/projects",
                    },
                ]}

                whyUs={[
                    "Top-rated composite deck builders in Lexington KY",
                    "Premium Trex®, TimberTech®, and AZEK® materials",
                    "Zero maintenance — no staining or sealing",
                    "Licensed, insured, and trusted by local homeowners",
                    "Built for weather resistance, durability, and style",
                ]}

                projects={[
                    { image: "/images/deck4.webp", title: "Modern Composite Deck" },
                    { image: "/images/deck5.webp", title: "Two-Tone Composite Layout" },
                    { image: "/images/deck6.webp", title: "Composite Stairs & Railing" },
                    { image: "/images/deck7.webp", title: "Low-Maintenance Outdoor Living" },
                ]}

                findUs={[
                    { name: "Yelp", rating: "4.6/5", logo: "/icons/yelp.webp" },
                    { name: "Google", rating: "4.9/5", logo: "/icons/google-reviews.webp" },
                ]}

                blog={[
                    {
                        title: "Composite vs. Wood Decking — What’s Best for Kentucky?",
                        date: "April 12, 2025",
                        author: "Vasyl",
                        image: "/images/deck6.webp",
                    },
                    {
                        title: "Top Composite Decking Colors for Lexington Homes",
                        date: "May 20, 2025",
                        author: "Peter",
                        image: "/images/deck7.webp",
                    },
                    {
                        title: "How Composite Decks Increase Home Value",
                        date: "June 5, 2025",
                        author: "Vasyl",
                        image: "/images/deck8.webp",
                    },
                ]}

                partners={["/icons/jameshardie.webp", "/icons/yelp.webp"]}
            />

            <WindowsPromoSection
                slides={[
                    {
                        image: "/images/remodler11.webp",
                        tag: "Composite Deck Builders",
                        heading: "Composite Decks Built for Low-Maintenance Living",
                        description:
                            "Enjoy a beautiful outdoor space without the upkeep — no sanding, sealing, or staining required.",
                        button: "Explore Composite Options",
                        link: "/contact",
                        projectImage: "/images/remodler24.webp",
                        projectLocation: "Lexington, KY",
                        projectInfo1: "Trex®",
                        projectInfo2: "Weatherproof Materials",
                        projectName: "Backyard Composite Deck",
                        projectPrice: "12,995"
                    },
                    {
                        image: "/images/remodler13.webp",
                        tag: "Premium Composite Decks",
                        heading: "Fade & Stain-Resistant Performance",
                        description:
                            "Composite boards keep their color and strength for decades — ideal for busy family living and high-traffic use.",
                        button: "See Composite Inspiration",
                        link: "/contact",
                        projectImage: "/images/deck4.webp",
                        projectLocation: "Nicholasville, KY",
                        projectInfo1: "25-Year Warranty",
                        projectInfo2: "Hidden Fasteners",
                        projectName: "Luxury Composite Oasis",
                        projectPrice: "14,450"
                    },
                    {
                        image: "/images/deck6.webp",
                        tag: "Deck Enhancements",
                        heading: "Upgrade Comfort & Outdoor Enjoyment",
                        description:
                            "Add custom railings, lighting, and shade features to create the perfect space for relaxation and entertainment.",
                        button: "Deck Add-Ons",
                        link: "/contact",
                        projectImage: "/images/deck2.webp",
                        projectLocation: "Georgetown, KY",
                        projectInfo1: "LED Lighting",
                        projectInfo2: "Aluminum Railings",
                        projectName: "Ultimate Outdoor Living Area",
                        projectPrice: "18,300"
                    }
                ]}
            />

        </Layout>
    );
}
