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

export default function DanvilleDeckBuilder() {
    return (
        <Layout>

            {/* SEO */}
            <SEO
                title="Deck Builder in Danville KY — Composite & Wood Decks | Yellowstone Renovation"
                description="Top-rated deck builders in Danville, KY. Yellowstone Renovation designs and installs high-quality composite and wood decks built for durability, beauty, and long-term value. Free estimates across Boyle County."
                pathname="/cities/danville-ky/deck-builder"
                image="https://yellowstonerenovation.com/images/deck-builder8.webp"
            />

            <Helmet>
                <meta
                    name="keywords"
                    content="deck builder Danville KY, composite deck Danville, wood deck installation Boyle County, deck repair Danville KY, deck replacement Danville"
                />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="Deck Builder in Danville KY | Yellowstone Renovation" />
                <meta property="og:description" content="Custom-built decks in Danville, Kentucky — from modern composite systems to timeless wood structures. Get a fast, free estimate from Yellowstone Renovation." />
                <meta property="og:image" content="https://yellowstonerenovation.com/images/deck-builder8.webp" />
                <meta property="og:url" content="https://yellowstonerenovation.com/cities/danville-ky/deck-builder" />
                <meta property="og:site_name" content="Yellowstone Renovation" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Danville KY Deck Builder | Composite & Wood Deck Construction" />
                <meta name="twitter:description" content="Build your dream outdoor space with Yellowstone Renovation — the trusted deck contractor in Danville and Boyle County." />
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
                            addressLocality: "Danville",
                            addressRegion: "KY",
                            postalCode: "40422",
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
                            "Danville, KY",
                            "Junction City, KY",
                            "Perryville, KY",
                            "Parksville, KY",
                            "Boyle County, KY"
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
                topText="Top-Rated Deck Builder in Danville, KY"
                title="Deck Builder in Danville, KY — Custom Composite & Wood Decks"
                description="Yellowstone Renovation builds durable, modern, and long-lasting decks for homeowners across Danville and Boyle County. From composite systems to beautiful wood structures, we deliver quality craftsmanship and elevated outdoor living."
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
                title="Danville Deck Transformations"
                description="See how our team upgrades outdoor spaces throughout Danville — replacing old, unsafe decks with modern, long-lasting composite and wood builds."
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
                title="DANVILLE DECK BUILDER GALLERY"
                subtitle="Browse completed deck projects built for homeowners across Danville and Boyle County."
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
                title="Deck Builder in Danville, KY — Custom Composite & Wood Decks"
                sections={[

                    /* ------------------------------- */
                    /* MAIN CONTENT SECTIONS REWRITTEN */
                    /* ------------------------------- */

                    {
                        heading: "Deck Builder Danville KY — Quality, Craftsmanship, and Outdoor Living",
                        text: `Yellowstone Renovation provides homeowners in Danville, Kentucky, with high-quality deck construction designed for beauty, safety, and long-term performance. We build functional outdoor spaces using industry-leading materials and proven installation techniques.

Our team works with both composite and natural wood deck systems, offering design consultations, permit assistance, precise framing, and professional finishing. Whether you're replacing an old deck or building a new entertainment space, we create solutions that last.`
                    },

                    {
                        heading: "Composite Deck Installation in Danville, KY",
                        text: `Composite decking is a popular choice for Danville homeowners who want a low-maintenance, long-lasting outdoor space. Composite boards resist moisture, insects, fading, and warping — making them ideal for Kentucky’s changing weather.

We install Trex, TimberTech, and AZEK decking with hidden fasteners, moisture-protected framing, and optional lighting upgrades. Choose from modern textures and colors that enhance your home while eliminating yearly staining or repairs.`
                    },

                    {
                        heading: "Wood Deck Builder in Danville, Kentucky",
                        text: `If you prefer the timeless beauty of natural wood, our wood deck installations deliver warmth, character, and exceptional value. We build with pressure-treated lumber, cedar, and redwood to match your preferred style and budget.

Every wood deck is properly sealed, reinforced, and finished to protect against Kentucky humidity and daily wear. Our craftsmanship ensures a strong, reliable foundation with a smooth, clean appearance.`
                    },

                    {
                        heading: "Deck Replacement & Repair in Danville, KY",
                        text: `Is your old deck unsafe, worn out, or outdated? Our team specializes in full deck replacement and repairs throughout Danville and Boyle County. We reinforce structural components, upgrade materials, and rebuild failing decks to modern standards.

From loose railings to rotted boards to full structural failure — we restore your outdoor space with durable materials and clean workmanship.`
                    },

                    {
                        heading: "Our Deck Design & Construction Process",
                        text: `We start every project with a design consultation to understand your goals, space, and preferred materials. After planning, we handle all permits, structural work, decking installation, and finishing.

With detailed communication and a clean job site, our process ensures a smooth experience and a deck built to Kentucky building codes.`
                    },

                    {
                        heading: "Average Deck Cost in Danville, KY",
                        text: `Here’s what most Danville homeowners invest in professionally built decks:

Composite Decks: $45–$65 per sq. ft. installed  
Wood Decks: $30–$50 per sq. ft. installed  
Deck Repairs or Partial Rebuilds: typically 40–60% of full replacement cost  

Pricing includes materials, labor, cleanup, and final inspection. Contact us for a precise estimate customized to your home.`
                    },

                    {
                        heading: "Get a Free Deck Estimate in Danville, KY",
                        text: `Ready to transform your backyard? Our team provides free, no-pressure on-site estimates throughout Danville, Junction City, Parksville, Perryville, and all surrounding areas in Boyle County.

We measure your space, discuss materials, recommend design options, and provide a detailed written quote on the spot.`
                    },

                    {
                        heading: "Decking Contractor in Danville, Kentucky",
                        text: `Hiring a trusted deck contractor makes all the difference. Yellowstone Renovation is known for professional service, reliable scheduling, clean construction, and long-lasting results.

We help homeowners maximize their property value while creating outdoor spaces made for daily use and family enjoyment.`
                    },

                    {
                        heading: "Deck Installation Services in Danville",
                        text: `Whether you want a compact wood deck or a large composite system with stairs, lighting, and railings — we deliver custom solutions that match your home and lifestyle.

Our decks are engineered for structural strength, moisture protection, and long-term durability in Kentucky’s climate.`
                    },

                    {
                        heading: "Professional Deck Construction in Danville, KY",
                        text: `As a licensed and insured contractor, we handle all aspects of deck construction — from design and permitting to framing, decking, railings, and final inspection.

Our craftsmanship ensures your deck withstands heat, humidity, rainfall, and daily use without structural issues.`
                    },

                    {
                        heading: "Working with a Local Danville Deck Contractor",
                        text: `Being based in Central Kentucky, we understand local soil conditions, weather patterns, and building regulations. That allows us to build stronger, safer, and more reliable decks for Danville homeowners.

Open communication and clear expectations are core to our process from start to finish.`
                    },

                    {
                        heading: "Choose the Best Deck Installers in Danville, KY",
                        text: `With a reputation for quality craftsmanship and consistent 5-star reviews, Yellowstone Renovation is one of the top deck contractors in Danville.

We combine durable materials, skilled installation, and transparent pricing to create outdoor spaces that last for decades.`
                    },

                    {
                        heading: "Average Cost to Install a New Deck in Danville",
                        text: `Most Danville homeowners invest between $10,000 and $45,000 for full deck installation. Composite builds typically range from $45–$65 per sq. ft., while wood systems cost $30–$50 per sq. ft.

We provide accurate, detailed estimates so you always understand the full scope before construction begins.`
                    },

                    {
                        heading: "Danville Wood Decks — Natural Beauty & Lasting Value",
                        text: `Wood decks bring charm and warmth to outdoor living. We install premium-grade lumber with proper sealing and treatment to enhance longevity and protect against Kentucky's seasonal weather shifts.`
                    },

                    {
                        heading: "Composite Decks in Danville, KY",
                        text: `Composite decks offer unmatched durability with minimal upkeep. Our installations include Trex, TimberTech, and AZEK systems — engineered to resist fading, mold, and moisture while maintaining their color for decades.`
                    },

                    {
                        heading: "Deck Builder Near Me in Danville, KY",
                        text: `Searching for “deck builder near me” in Danville, KY? Yellowstone Renovation proudly serves Danville, Junction City, Perryville, Parksville, Mitchellsburg, and all of Boyle County.

We design and build custom decks that elevate your home’s appearance and outdoor functionality. Clean work, clear pricing, and dependable craftsmanship — every time.`
                    },

                ]}

                /* SIDEBAR CONTENT (unchanged except city references) */

                offers={[
                    {
                        image: "/images/deck1.webp",
                        text: "Get $1500 OFF Your New Deck Installation — Limited Time Offer",
                        button: "Claim Discount",
                        link: "/contact",
                    },
                    {
                        image: "/images/deck2.webp",
                        text: "Browse Over 20 Completed Deck Projects in Danville",
                        button: "View Gallery",
                        link: "/projects",
                    },
                ]}

                whyUs={[
                    "Trusted local deck builders serving Danville and Boyle County",
                    "Trex, TimberTech, and AZEK composite specialists",
                    "Custom designs tailored to your home and property",
                    "Licensed, insured, and known for reliable scheduling",
                    "Clear pricing, clean work sites, and long-term warranties",
                ]}

                projects={[
                    { image: "/images/deck4.webp", title: "Danville Composite Deck Build" },
                    { image: "/images/deck5.webp", title: "Wood Deck With Upgraded Railings" },
                    { image: "/images/deck6.webp", title: "Backyard Pergola & Deck Combo" },
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
                        title: "Composite vs Wood Decks: Which is Best for Your Home?",
                        date: "May 20th, 2025",
                        author: "Peter",
                        image: "/images/deck7.webp",
                    },
                    {
                        title: "Deck Maintenance Tips for Danville Homeowners",
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
