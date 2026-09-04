import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../../../components/Layout";
import HeroSection from "../../../components/HeroSection";
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

export default function BereaDeckBuilder() {
    return (
        <Layout>

            {/* SEO */}
            <SEO
                title="Deck Builder in Berea KY — Composite & Wood Decks | Yellowstone Renovation"
                description="Professional deck builders in Berea, KY — Yellowstone Renovation designs and installs composite and wood decks that provide comfort, durability, and long-lasting performance. Free estimates across Madison County!"
                pathname="/cities/berea-ky/deck-builder"
                image="https://yellowstonerenovation.com/images/deck-builder8.webp"
            />

            <Helmet>
                <meta
                    name="keywords"
                    content="deck builder Berea KY, composite deck Berea, wood deck installation Madison County, deck repair Berea KY, deck replacement Berea"
                />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="Deck Builder in Berea KY | Yellowstone Renovation" />
                <meta property="og:description" content="Custom-built decks in Berea, Kentucky — from Trex and TimberTech composite systems to classic wood designs. Get a free on-site deck estimate today!" />
                <meta property="og:image" content="https://yellowstonerenovation.com/images/deck-builder8.webp" />
                <meta property="og:url" content="https://yellowstonerenovation.com/cities/berea-ky/deck-builder" />
                <meta property="og:site_name" content="Yellowstone Renovation" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Berea KY Deck Builder | Composite & Wood Deck Construction" />
                <meta name="twitter:description" content="Enhance your outdoor space with a custom deck from Yellowstone Renovation — trusted deck contractors in Berea, KY." />
                <meta name="twitter:image" content="https://yellowstonerenovation.com/images/deck-builder8.webp" />

                {/* Schema */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HomeAndConstructionBusiness",
                        name: "Yellowstone Renovation",
                        url: "https://yellowstonerenovation.com",
                        logo: "https://yellowstonerenovation.com/icons/logo.webp",
                        image: "https://yellowstonerenovation.com/images/deck-builder8.webp",
                        telephone: "(859) 765-7267",
                        address: {
                            "@type": "PostalAddress",
                            addressLocality: "Berea",
                            addressRegion: "KY",
                            postalCode: "40403",
                            addressCountry: "US"
                        },
                        serviceType: [
                            "Deck Construction",
                            "Composite Deck Installation",
                            "Wood Deck Builder",
                            "Deck Repair",
                            "Deck Replacement"
                        ],
                        areaServed: [
                            "Berea, KY",
                            "Kingston, KY",
                            "Blue Lick, KY",
                            "Bighill, KY",
                            "Red Lick, KY",
                            "Madison County, KY"
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
                topText="Top-Rated Deck Builder in Berea, KY"
                title="Deck Builder in Berea, KY — Custom Composite & Wood Decks"
                description="Yellowstone Renovation builds high-quality decks designed for long-term strength, beauty, and outdoor enjoyment. Serving Berea and all of Madison County, we specialize in composite and wood deck installations with superior craftsmanship."
                backgroundImage="/images/deck/deck-lexington1.webp"
                overlayOpacity={0.65}
                formTitle="Get a Free Deck Construction Estimate"
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
                title="Berea Deck Before & After Transformations"
                description="Explore how our team transforms outdoor spaces across Berea — from aging, weathered decks to modern, durable composite and wood builds that last for decades."
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
                title="BEREA DECK BUILDER GALLERY"
                subtitle="View deck projects completed throughout Berea and Madison County."
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
                ]}
            />

            <DeckBuildingSteps />
            <TestimonialsSection />

            <MainSectionSideBar
                title="Deck Builder in Berea, KY — Custom Composite & Wood Decks"
                sections={[

                    {
                        heading: "Deck Builder Berea KY — Built for Strength, Style, and Daily Use",
                        text: `Yellowstone Renovation is a trusted deck builder serving Berea, Kentucky, delivering durable outdoor structures designed for everyday living. We transform backyards into beautiful, functional spaces using high-quality materials and proven construction methods.

Whether you're upgrading an older deck or planning a brand-new build, we ensure your new deck brings comfort, safety, and long-term value.`
                    },

                    {
                        heading: "Composite Deck Installation in Berea, KY",
                        text: `Composite decks are a top choice for Berea homeowners who want a long-lasting, low-maintenance outdoor space. Composite boards resist fading, moisture, warping, and insects — perfect for Kentucky’s humidity and seasonal weather changes.

We install leading composite brands like Trex, TimberTech, and AZEK, offering hidden fasteners, color-matched railings, and moisture-protected framing for maximum performance.`
                    },

                    {
                        heading: "Wood Deck Builder in Berea KY",
                        text: `If you love the natural beauty of real wood, our wood deck installations offer warmth and charm with excellent craftsmanship. We build with pressure-treated pine, cedar, and redwood, giving homeowners classic style with modern stability.

Every wood deck is sealed and reinforced for moisture protection, UV resistance, and long-term durability.`
                    },

                    {
                        heading: "Deck Replacement and Repair in Berea, KY",
                        text: `If your current deck is unsafe or deteriorating, we provide full deck replacement and structural repairs throughout Berea and Madison County. From rotted posts to loose railings and failing boards, we restore your outdoor space to safe, usable condition.

We can rebuild your deck using modern materials or upgrade you to a premium composite system.`
                    },

                    {
                        heading: "Deck Design and Construction Process",
                        text: `We begin each project with a detailed consultation to understand your layout, budget, and design preferences. After planning, our licensed team handles permitting, framing, decking, railing installation, and finishing touches.

Your new deck is built to Kentucky building code standards for safety, stability, and long-term performance.`
                    },

                    {
                        heading: "Average Deck Cost in Berea, KY",
                        text: `Most homeowners in Berea invest in the following ranges:

Composite Decks: $45–$65 per sq. ft. installed  
Wood Decks: $30–$50 per sq. ft. installed  
Repairs/Rebuilds: typically 40–60% of full replacement cost  

Final pricing depends on size, height, design, and chosen materials. Contact us for an exact on-site estimate.`
                    },

                    {
                        heading: "Get a Free Deck Estimate in Berea KY",
                        text: `We offer free, no-obligation deck estimates throughout Berea, Kingston, Blue Lick, Bighill, Red Lick, and all of Madison County.

Our team will take measurements, discuss materials, review design preferences, and provide a detailed written quote.`
                    },

                    {
                        heading: "Decking Contractor in Berea, Kentucky",
                        text: `As a trusted Berea deck contractor, we focus on structural strength, clean workmanship, and great communication. We help homeowners increase their property value while improving their everyday outdoor living experience.`
                    },

                    {
                        heading: "Deck Installation Services in Berea",
                        text: `We install a wide range of decks — from simple ground-level builds to second-story composite systems with stairs, lighting, and upgraded railings. Every project is custom-built to match your home’s layout and your lifestyle needs.`
                    },

                    {
                        heading: "Professional Deck Construction in Berea, KY",
                        text: `Our licensed and insured team manages the entire construction process, including permits, framing, decking, railing systems, and inspections.

Your deck is engineered to withstand Berea’s weather conditions and deliver long-term performance.`
                    },

                    {
                        heading: "Working with a Local Deck Contractor Near You",
                        text: `As a Central Kentucky contractor, we understand the soil, climate, and structural demands of the region. That knowledge ensures every deck we build is safe, strong, and built to last.

We provide clear communication from start to finish for a stress-free experience.`
                    },

                    {
                        heading: "Choose the Best Deck Installers in Berea, KY",
                        text: `With hundreds of completed projects and excellent customer reviews, Yellowstone Renovation is one of Berea’s highest-rated deck contractors.

We combine strong materials, expert craftsmanship, and fair pricing to deliver exceptional outdoor spaces.`
                    },

                    {
                        heading: "Average Cost to Install a New Deck in Berea",
                        text: `Most deck installations in Berea range from $10,000 to $45,000, depending on size, height, and material choice. Composite decks typically range from $45–$65 per sq. ft., while wood decks fall between $30–$50 per sq. ft.

We provide itemized estimates so you always know exactly what you're paying for.`
                    },

                    {
                        heading: "Berea Wood Decks — Timeless Natural Beauty",
                        text: `Wood decks remain a favorite for many Berea homeowners who appreciate natural texture and traditional design. We install and seal premium lumber for long-lasting protection and visual appeal.`
                    },

                    {
                        heading: "Composite Decks in Berea, KY",
                        text: `Composite decks offer minimal upkeep and maximum longevity. Our installations include waterproof framing, hidden fasteners, and long-lasting color-stable boards from Trex, AZEK, and TimberTech.`
                    },

                    {
                        heading: "Deck Builder Near Me in Berea, KY",
                        text: `Searching for “deck builder near me” in Berea? Yellowstone Renovation proudly serves Berea, Kingston, Bighill, Blue Lick, Red Lick, and all of Madison County.

We deliver durable decks with clean installation, fair pricing, and exceptional craftsmanship you can count on.`
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
                        text: "See Over 20 Completed Deck Projects in Berea",
                        button: "View Gallery",
                        link: "/projects",
                    },
                ]}

                whyUs={[
                    "Trusted local deck builders serving Berea and Madison County",
                    "Certified Trex, TimberTech, and AZEK installers",
                    "Custom deck designs for every home and backyard layout",
                    "Licensed, insured, and known for reliability and quality",
                    "Straightforward pricing, clean installation, and strong warranties",
                ]}

                projects={[
                    { image: "/images/deck4.webp", title: "Berea Composite Deck Project" },
                    { image: "/images/deck5.webp", title: "Wood Deck Installation in Berea" },
                    { image: "/images/deck6.webp", title: "Pergola + Deck Upgrade" },
                    { image: "/images/deck7.webp", title: "Covered Back Deck Extension" },
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
                        title: "Choosing Between Composite and Wood Decks",
                        date: "May 20th, 2025",
                        author: "Peter",
                        image: "/images/deck7.webp",
                    },
                    {
                        title: "Deck Maintenance Tips for Berea Homeowners",
                        date: "June 10th, 2025",
                        author: "Mark Ellison",
                        image: "/images/deck8.webp",
                    },
                ]}

                partners={[
                    "/icons/trex.webp",
                    "/icons/timbertech.webp",
                    "/icons/yelp.webp",
                ]}
            />

            <QuoteSection />
            <ScrollToTop />
        </Layout>
    );
}
