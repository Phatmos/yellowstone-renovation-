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

export default function WinchesterDeckBuilder() {
    return (
        <Layout>

            {/* SEO */}
            <SEO
                title="Deck Builder in Winchester KY — Composite & Wood Decks | Yellowstone Renovation"
                description="Top-quality deck builders in Winchester, KY. Yellowstone Renovation designs and builds composite and wood decks built for strength, beauty, and long-term value. Free estimates throughout Clark County."
                pathname="/cities/winchester-ky/deck-builder"
                image="https://yellowstonerenovation.com/images/deck-builder8.webp"
            />

            <Helmet>
                <meta
                    name="keywords"
                    content="deck builder Winchester KY, composite deck Winchester, wood deck installation Clark County, deck repair Winchester KY, deck replacement Winchester"
                />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="Deck Builder in Winchester KY | Yellowstone Renovation" />
                <meta property="og:description" content="Custom-built decks in Winchester, Kentucky — from composite systems to beautiful wood structures. Get your free deck estimate today." />
                <meta property="og:image" content="https://yellowstonerenovation.com/images/deck-builder8.webp" />
                <meta property="og:url" content="https://yellowstonerenovation.com/cities/winchester-ky/deck-builder" />
                <meta property="og:site_name" content="Yellowstone Renovation" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Winchester KY Deck Builder | Composite & Wood Deck Construction" />
                <meta name="twitter:description" content="Upgrade your outdoor living with Yellowstone Renovation — reliable deck builders serving Winchester and Clark County." />
                <meta name="twitter:image" content="https://yellowstonerenovation.com/images/deck-builder8.webp" />

                {/* JSON-LD */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HomeAndConstructionBusiness",
                        name: "Yellowstone Renovation",
                        url: "https://yellowstonerenovation.com",
                        logo: "https://yellowstonerenovation.com/icons/logo.webp",
                        image: "https://yellowstonerenovation.com/images/deck-builder8.webp",
                        telephone: "859-545-7020",
                        address: {
                            "@type": "PostalAddress",
                            addressLocality: "Winchester",
                            addressRegion: "KY",
                            postalCode: "40391",
                            addressCountry: "US",
                        },
                        serviceType: [
                            "Deck Construction",
                            "Composite Deck Installation",
                            "Wood Deck Builder",
                            "Deck Repair",
                            "Deck Replacement"
                        ],
                        areaServed: [
                            "Winchester, KY",
                            "Trapp, KY",
                            "Pilot View, KY",
                            "Colby, KY",
                            "Clark County, KY"
                        ],
                        aggregateRating: {
                            "@type": "AggregateRating",
                            ratingValue: "4.9",
                            reviewCount: "132"
                        }
                    })}
                </script>
            </Helmet>

            {/* HERO */}
            <Hero2
                topText="Top-Rated Deck Builder in Winchester, KY"
                title="Deck Builder in Winchester, KY — Custom Composite & Wood Decks"
                description="Yellowstone Renovation builds durable, beautiful, and long-lasting decks for homeowners throughout Winchester and Clark County. Whether you're upgrading an old deck or designing a brand-new outdoor space, we deliver professional craftsmanship and dependable service."
                backgroundImage="/images/deck/deck-lexington1.webp"
                overlayOpacity={0.65}
                formTitle="Get a Free Deck Estimate"
                selectLabel="Select Deck Service"
                selectOptions={[
                    "Custom Deck Design & Build",
                    "Composite Decks (Trex, TimberTech)",
                    "Wood Deck Installation",
                    "Second-Story Decks",
                    "Deck Repair & Resurfacing",
                    "Covered Decks & Pergolas",
                    "Stairs & Railing Installation",
                    "Screened-In Decks & Porches",
                    "Full Backyard Deck Makeover",
                ]}
                ctaText="Get Free Quote"
            />

            <AboutSection />

            {/* BEFORE & AFTER */}
            <BeforeAfter
                title="Winchester Deck Transformations"
                description="See how we upgrade decks in Winchester — replacing old, unsafe structures with modern, long-lasting composite and wood designs."
                buttonText="Explore More Projects"
                buttonLink="/projects"
                accentColor="#0a923d"
                images={[
                    { before: "/images/deckafter3.webp", after: "/images/deckbefore3.webp" },
                    { before: "/images/deckafter1.webp", after: "/images/deckbefore1.webp" },
                ]}
            />

            {/* GALLERY */}
            <GallerySection
                title="WINCHESTER DECK BUILDER GALLERY"
                subtitle="Browse completed deck projects built for homeowners across Winchester and Clark County."
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

            <MainSectionSideBar
                title="Deck Builder in Winchester, KY — Custom Composite & Wood Decks"
                sections={[
                    {
                        heading: "Deck Builder Winchester KY — Craftsmanship, Quality & Value",
                        text: `Yellowstone Renovation is a trusted deck contractor serving Winchester, Kentucky. We design and build decks that combine strength, functionality, and modern outdoor style.

From premium composite systems to natural wood installations, we create outdoor spaces built to last. Our process includes design, permits, strong framing, professional installation, and clean finishing.`
                    },

                    {
                        heading: "Composite Deck Installation in Winchester, KY",
                        text: `Composite decking is ideal for Winchester homeowners who want a long-lasting, low-maintenance outdoor space. Composite boards resist rot, insects, fading, and moisture — all while maintaining their color for decades.

We install Trex, TimberTech, and AZEK decking using hidden fasteners and reinforced framing. Enjoy a modern deck without annual staining or repairs.`
                    },

                    {
                        heading: "Wood Deck Builder in Winchester, Kentucky",
                        text: `Natural wood decks offer warmth, charm, and traditional beauty. We install wood decks using pressure-treated lumber, cedar, and redwood to match your budget and style.

Every wood deck is reinforced, sealed, and built with proper spacing and drainage to withstand Kentucky’s climate.`
                    },

                    {
                        heading: "Deck Replacement & Repair in Winchester, KY",
                        text: `If your existing deck is rotted, unstable, or outdated, our team provides complete deck replacement and structural repairs. We rebuild decks using modern materials, safer framing, and updated building practices.

Loose boards, failed footings, or deteriorating railings — we repair and restore outdoor spaces throughout Winchester and Clark County.`
                    },

                    {
                        heading: "Our Deck Design & Construction Process",
                        text: `Our process begins with an on-site consultation where we measure your space, evaluate existing structures, and discuss materials.

From permits to framing to decking installation, we manage every stage with communication and attention to detail. All decks are built to Kentucky residential building standards.`
                    },

                    {
                        heading: "Average Deck Cost in Winchester, KY",
                        text: `Here’s what most Winchester homeowners invest in professional deck construction:

Composite Decks: $45–$65 per sq. ft.  
Wood Decks: $30–$50 per sq. ft.  
Deck Repairs: 40–60% of full replacement cost  

Prices include materials, labor, cleanup, and final inspection.`
                    },

                    {
                        heading: "Get a Free Deck Estimate in Winchester, KY",
                        text: `We offer free, no-pressure estimates across Winchester, Trapp, Pilot View, Colby, and all surrounding areas in Clark County.

During your appointment, we measure your project, review material options, discuss design ideas, and provide a clear written quote.`
                    },

                    {
                        heading: "Decking Contractor in Winchester, Kentucky",
                        text: `Homeowners choose Yellowstone Renovation for dependable communication, strong workmanship, and a commitment to building long-lasting decks.

We create outdoor spaces that maximize property value, comfort, and daily enjoyment.`
                    },

                    {
                        heading: "Deck Installation Services in Winchester",
                        text: `Whether you want a compact wood deck or a modern composite system with custom railings, lighting, or covered structures — we design and build decks that match your property and lifestyle.`
                    },

                    {
                        heading: "Professional Deck Construction in Winchester, KY",
                        text: `We handle all design, measurements, engineering, permitting, framing, decking installation, railing systems, and final inspection. Our installations are clean, durable, and built to code.`
                    },

                    {
                        heading: "Working with a Local Winchester Deck Contractor",
                        text: `Being based in Central Kentucky, we understand local building codes, weather patterns, and soil conditions. This local expertise allows us to build stronger, safer decks for Winchester homeowners.`
                    },

                    {
                        heading: "Choose the Best Deck Installers in Winchester, KY",
                        text: `Yellowstone Renovation is known for reliable service, excellent craftsmanship, and fair pricing. With consistent 5-star reviews, we’re one of the top deck builders serving Winchester.`
                    },

                    {
                        heading: "Average Cost to Install a New Deck in Winchester",
                        text: `Winchester homeowners typically invest between $10,000 and $45,000 depending on material selection, elevation, size, and added features like stairs or lighting.`
                    },

                    {
                        heading: "Winchester Wood Decks — Classic Beauty & Warmth",
                        text: `We build natural wood decks that bring charm and warmth to your backyard. Proper sealing, ventilation, and construction techniques ensure longevity despite Kentucky’s seasonal weather.`
                    },

                    {
                        heading: "Composite Decks in Winchester, KY",
                        text: `Composite decks provide outstanding durability with almost no maintenance. Our Trex, TimberTech, and AZEK installs resist fading, moisture, and cracking while maintaining a premium appearance.`
                    },

                    {
                        heading: "Deck Builder Near Me in Winchester, KY",
                        text: `Searching for “deck builder near me” in Winchester? Yellowstone Renovation proudly serves Winchester, Trapp, Pilot View, Colby, and the wider Clark County area.

We deliver clean work, fair pricing, and dependable project timelines.`
                    },
                ]}

                /* SIDEBAR CONTENT */
                offers={[
                    {
                        image: "/images/deck1.webp",
                        text: "Get $1500 OFF Your New Deck Installation — Limited Time Offer",
                        button: "Claim Discount",
                        link: "/contact",
                    },
                    {
                        image: "/images/deck2.webp",
                        text: "Browse Completed Deck Projects in Winchester",
                        button: "View Gallery",
                        link: "/projects",
                    },
                ]}

                whyUs={[
                    "Trusted local deck builders serving Winchester & Clark County",
                    "Trex, TimberTech, and AZEK composite experts",
                    "Custom designs to fit your home and yard",
                    "Licensed, insured, and known for on-time scheduling",
                    "Transparent pricing and strong workmanship warranties",
                ]}

                projects={[
                    { image: "/images/deck4.webp", title: "Winchester Composite Deck Build" },
                    { image: "/images/deck5.webp", title: "Custom Wood Deck With Railings" },
                    { image: "/images/deck6.webp", title: "Deck & Pergola Combination" },
                    { image: "/images/deck7.webp", title: "Covered Deck & Outdoor Upgrade" },
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
                        title: "Composite vs Wood Decks — What Winchester Homeowners Should Know",
                        date: "May 20th, 2025",
                        author: "Peter",
                        image: "/images/deck7.webp",
                    },
                    {
                        title: "Deck Maintenance Tips for Winchester Homes",
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
