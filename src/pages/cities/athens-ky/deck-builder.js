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

export default function AthensDeckBuilder() {
    return (
        <Layout>

            {/* SEO */}
            <SEO
                title="Deck Builder in Athens KY — Composite & Wood Decks | Yellowstone Renovation"
                description="Professional deck builders in Athens, KY — Yellowstone Renovation designs and installs composite and wood decks built for comfort, durability, and long-lasting performance. Free estimates across Fayette County!"
                pathname="/cities/athens-ky/deck-builder"
                image="https://yellowstonerenovation.com/images/deck-builder8.webp"
            />

            <Helmet>
                <meta
                    name="keywords"
                    content="deck builder Athens KY, composite deck Athens, wood deck installation Fayette County, deck repair Athens KY, deck replacement Athens"
                />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="Deck Builder in Athens KY | Yellowstone Renovation" />
                <meta property="og:description" content="Custom-built decks in Athens, Kentucky — from Trex and TimberTech composite systems to classic wood designs. Get a free on-site deck estimate today!" />
                <meta property="og:image" content="https://yellowstonerenovation.com/images/deck-builder8.webp" />
                <meta property="og:url" content="https://yellowstonerenovation.com/cities/athens-ky/deck-builder" />
                <meta property="og:site_name" content="Yellowstone Renovation" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Athens KY Deck Builder | Composite & Wood Deck Construction" />
                <meta name="twitter:description" content="Enhance your outdoor space with a custom deck from Yellowstone Renovation — trusted deck contractors in Athens, KY." />
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
                            addressLocality: "Athens",
                            addressRegion: "KY",
                            postalCode: "40509",
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
                            "Athens, KY",
                            "Boone Creek, KY",
                            "Avon, KY",
                            "Grassland, KY",
                            "Fayette County, KY"
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
                topText="Top-Rated Deck Builder in Athens, KY"
                title="Deck Builder in Athens, KY — Custom Composite & Wood Decks"
                description="Yellowstone Renovation builds high-quality decks designed for long-term strength, beauty, and outdoor enjoyment. Serving Athens and all of Fayette County, we specialize in composite and wood deck installations with superior craftsmanship."
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
                title="Athens Deck Before & After Transformations"
                description="See how our team transforms outdoor spaces across Athens — from aging, weathered decks to modern, durable composite and wood builds that last for decades."
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
                title="ATHENS DECK BUILDER GALLERY"
                subtitle="View deck projects completed throughout Athens and Fayette County."
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
                title="Deck Builder in Athens, KY — Custom Composite & Wood Decks"
                sections={[

                    {
                        heading: "Deck Builder Athens KY — Built for Strength, Style, and Everyday Living",
                        text: `Yellowstone Renovation is a trusted deck builder serving Athens, Kentucky, creating outdoor spaces designed for comfort, beauty, and long-term durability. We use high-quality materials and expert craftsmanship to build decks that last.

Whether you're replacing an older structure or planning a brand-new build, we make sure your deck enhances your home and your lifestyle.`
                    },

                    {
                        heading: "Composite Deck Installation in Athens, KY",
                        text: `Composite decking is a leading choice among Athens homeowners who want long-lasting performance with minimal maintenance. Composite boards resist moisture, fading, warping, and insects — perfect for Kentucky’s climate.

We install top brands like Trex, TimberTech, and AZEK with hidden fasteners and moisture-protected framing for outstanding durability.`
                    },

                    {
                        heading: "Wood Deck Builder in Athens KY",
                        text: `Wood decks offer timeless natural beauty and warm aesthetics. We build with pressure-treated pine, cedar, and redwood, providing classic style with modern craftsmanship.

Each wood deck is sealed for moisture protection, UV resistance, and long-term structural stability.`
                    },

                    {
                        heading: "Deck Replacement and Repair in Athens, KY",
                        text: `If your current deck is unsafe or deteriorating, we provide full deck replacement and structural repairs throughout Athens and Fayette County. From rotted support posts to damaged boards and loose railings, we restore your deck to safe, functional condition.

We can rebuild with modern materials or upgrade you to a premium composite system.`
                    },

                    {
                        heading: "Deck Design and Construction Process",
                        text: `Every project begins with a detailed consultation to understand your backyard layout, budget, and aesthetic preferences. Once the design is finalized, our licensed team manages permitting, framing, decking, railing installation, and all finish work.

Your deck is built to Kentucky building code standards for maximum safety and longevity.`
                    },

                    {
                        heading: "Average Deck Cost in Athens, KY",
                        text: `Most deck projects in Athens fall within these ranges:

Composite Decks: $45–$65 per sq. ft. installed  
Wood Decks: $30–$50 per sq. ft. installed  
Repairs/Rebuilds: about 40–60% of full replacement cost  

Pricing varies depending on size, height, and materials. Contact us for an accurate on-site quote.`
                    },

                    {
                        heading: "Get a Free Deck Estimate in Athens KY",
                        text: `We offer free, no-obligation deck estimates throughout Athens, Boone Creek, Avon, Grassland, and all of Fayette County.

We take measurements, discuss materials, review design options, and provide a detailed written estimate.`
                    },

                    {
                        heading: "Decking Contractor in Athens, Kentucky",
                        text: `As a trusted Athens deck contractor, we prioritize strength, quality craftsmanship, and clear communication. Our goal is to enhance your home’s value and your outdoor living experience.`
                    },

                    {
                        heading: "Deck Installation Services in Athens",
                        text: `From ground-level platforms to elevated composite decks with stairs, lighting, and upgraded railings — we build decks tailored to your home and lifestyle.

Every structure is engineered for safety, longevity, and beauty.`
                    },

                    {
                        heading: "Professional Deck Construction in Athens, KY",
                        text: `We handle the entire construction process, including permits, framing, decking, railing systems, and final inspections.

Your new deck is built to withstand Athens’ weather conditions and provide years of reliable performance.`
                    },

                    {
                        heading: "Working with a Local Deck Contractor Near You",
                        text: `As a Central Kentucky contractor, we understand the soil, climate, and structural requirements of the region. That experience ensures every deck we build is strong, stable, and built to last.

We keep communication clear and simple from start to finish.`
                    },

                    {
                        heading: "Choose the Best Deck Installers in Athens, KY",
                        text: `With hundreds of completed projects and exceptional customer reviews, Yellowstone Renovation is one of the top-rated deck contractors in the Athens area.

We combine expert craftsmanship, strong materials, and fair pricing to deliver outstanding results.`
                    },

                    {
                        heading: "Average Cost to Install a New Deck in Athens",
                        text: `Most deck installations in Athens range from $10,000 to $45,000 depending on height, size, and material choice. Composite decks usually run $45–$65 per sq. ft., while wood decks cost $30–$50 per sq. ft.

Every estimate includes a clear, itemized breakdown.`
                    },

                    {
                        heading: "Athens Wood Decks — Natural Warmth and Beauty",
                        text: `Many Athens homeowners love the natural texture and traditional appearance of wood decks. We install premium lumber with professional sealing and reinforcement for long-term beauty and performance.`
                    },

                    {
                        heading: "Composite Decks in Athens, KY",
                        text: `Composite decks offer unmatched longevity with very little maintenance. We install waterproof framing, hidden fasteners, and top-quality boards from Trex, TimberTech, and AZEK.`
                    },

                    {
                        heading: "Deck Builder Near Me in Athens, KY",
                        text: `Searching for “deck builder near me” in Athens? Yellowstone Renovation proudly serves Athens, Boone Creek, Avon, Grassland, and all of Fayette County.

We build long-lasting decks with clean workmanship and fair pricing.`
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
                        text: "See Over 20 Completed Deck Projects in Athens",
                        button: "View Gallery",
                        link: "/projects",
                    },
                ]}

                whyUs={[
                    "Trusted local deck builders serving Athens and Fayette County",
                    "Certified Trex, TimberTech, and AZEK installers",
                    "Custom deck designs tailored to each home",
                    "Licensed, insured, and known for quality workmanship",
                    "Clear pricing, reliable timelines, and strong warranties",
                ]}

                projects={[
                    { image: "/images/deck4.webp", title: "Athens Composite Deck Project" },
                    { image: "/images/deck5.webp", title: "Wood Deck Installation in Athens" },
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
                        title: "Deck Maintenance Tips for Athens Homeowners",
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
