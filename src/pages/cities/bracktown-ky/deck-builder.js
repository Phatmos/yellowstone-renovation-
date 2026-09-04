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

export default function BracktownDeckBuilder() {
    return (
        <Layout>

            {/* SEO */}
            <SEO
                title="Deck Builder in Bracktown KY — Composite & Wood Deck Construction | Yellowstone Renovation"
                description="Professional deck builders in Bracktown, KY. Yellowstone Renovation designs and installs composite, wood, and custom-built decks for homes across northwest Lexington. Serving Bracktown, Leestown Road, Masterson Station, and all of Fayette County. Free estimates, fast scheduling."
                pathname="/cities/bracktown-ky/deck-builder"
                image="https://yellowstonerenovation.com/images/deck-builder8.webp"
            />

            {/* Extra Meta / Schema */}
            <Helmet>
                <meta
                    name="keywords"
                    content="deck builder Bracktown KY, Bracktown deck installation, composite decks Bracktown KY, wood decks Bracktown, deck repair Lexington KY, deck replacement Bracktown, Trex installers Lexington, TimberTech installation Bracktown"
                />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Deck Builder in Bracktown KY | Yellowstone Renovation" />
                <meta
                    property="og:description"
                    content="Custom-built composite and wood decks in Bracktown, KY — strong, durable, and designed for everyday comfort. Get a free estimate from Yellowstone Renovation."
                />
                <meta property="og:image" content="https://yellowstonerenovation.com/images/deck-builder8.webp" />
                <meta property="og:url" content="https://yellowstonerenovation.com/cities/bracktown-ky/deck-builder" />
                <meta property="og:site_name" content="Yellowstone Renovation" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Bracktown KY Deck Builder | Composite & Wood Deck Experts" />
                <meta
                    name="twitter:description"
                    content="Build your dream deck in Bracktown, KY with Yellowstone Renovation — trusted deck contractors for composite, wood, and custom designs."
                />
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
                        telephone: "859-545-7020",
                        address: {
                            "@type": "PostalAddress",
                            addressLocality: "Bracktown",
                            addressRegion: "KY",
                            postalCode: "40511",
                            addressCountry: "US"
                        },
                        serviceType: [
                            "Deck Construction",
                            "Composite Deck Installation",
                            "Wood Deck Builder",
                            "Deck Replacement",
                            "Deck Repair",
                            "Pergolas",
                            "Covered Decks",
                            "Screened Porches"
                        ],
                        areaServed: [
                            "Bracktown, KY",
                            "Leestown Road, KY",
                            "Masterson Station, KY",
                            "Greendale, KY",
                            "Lexington North, KY",
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
                topText="Top-Rated Deck Builder in Bracktown, KY"
                title="Deck Builder in Bracktown, KY — Composite, Wood & Custom Decks"
                description="Yellowstone Renovation builds strong, stylish, and long-lasting decks for homes across Bracktown, Leestown Road, Masterson Station, and all of northwest Lexington. Whether you're looking for composite, cedar, pressure-treated wood, covered decks, or custom outdoor designs — we deliver premium craftsmanship and dependable results."
                backgroundImage="/images/deck/deck-lexington1.webp"
                overlayOpacity={0.65}
                formTitle="Get a Free Deck Construction Estimate"
                selectLabel="Select Deck Service"
                selectOptions={[
                    "Custom Deck Design & Build",
                    "Composite Decks (Trex, TimberTech, AZEK)",
                    "Wood Deck Installation",
                    "Second-Story Decks",
                    "Deck Repair & Reinforcement",
                    "Covered Decks & Pergolas",
                    "Railing & Stair Installation",
                    "Screened-In Decks & Porches",
                    "Full Outdoor Living Makeover",
                ]}
                ctaText="Get Free Quote"
            />

            <AboutSection />

            {/* BEFORE & AFTER */}
            <BeforeAfter
                title="Bracktown Deck Before & After Transformations"
                description="See how our team transforms old, weathered, or unsafe decks into strong, beautiful, fully customized outdoor spaces throughout Bracktown and northwest Lexington."
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
                title="BRACKTOWN DECK BUILDER GALLERY"
                subtitle="Browse deck projects completed across Bracktown, Masterson Station, Leestown, and the greater Lexington area."
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

            {/* MAIN SIDEBAR SECTION */}
            <MainSectionSideBar
                title="Deck Builder in Bracktown, KY — Custom Composite & Wood Decks"
                sections={[

                    {
                        heading: "Deck Builder Bracktown KY — Strong, Stylish & Built for Everyday Living",
                        text: `Yellowstone Renovation is a trusted deck builder serving Bracktown, KY, known for our precision craftsmanship and durable outdoor structures. Bracktown is a historic and well-established Lexington neighborhood with large backyards, mature trees, and homes that benefit greatly from modern outdoor upgrades.

We design decks that elevate your property while providing high comfort, safety, and usability. Whether you want a quiet space to relax, a large entertainment area, or a multi-level build connected to patios or porches — we handle everything from layout to final construction with exceptional care.

Our decks are engineered to withstand Kentucky’s climate, resist moisture damage, and provide long-term value.`
                    },

                    {
                        heading: "Composite Deck Installation in Bracktown KY",
                        text: `Composite decking is one of the most popular choices for homeowners throughout Bracktown due to its durability and low maintenance. Composite boards don’t rot, fade, warp, or attract pests — making them ideal for Kentucky’s heat, humidity, and seasonal temperature swings.

We install premium systems from Trex, TimberTech, and AZEK with hidden fasteners, waterproof framing, custom borders, and modern color selections. Composite decks give your home a clean, contemporary look without the need for annual sanding, staining, or sealing.

If you want a deck that stays beautiful all year with minimal upkeep, composite decking in Bracktown is the perfect solution.`
                    },

                    {
                        heading: "Wood Deck Builder in Bracktown KY",
                        text: `For homeowners seeking warmth and natural beauty, Yellowstone Renovation builds high-quality wood decks using cedar, redwood, or premium pressure-treated lumber. Wood decks complement Bracktown’s residential style, giving homes a traditional yet elegant appearance.

Our team ensures craftsmanship at every stage — from notching, framing, and fastening to professional sealing that protects against moisture and UV exposure. Wood decks remain an affordable and highly customizable choice for families looking to enhance their outdoor living space.`
                    },

                    {
                        heading: "Deck Replacement & Repair in Bracktown KY",
                        text: `Many older homes in Bracktown have aging decks that are no longer safe or structural. If your deck shows signs of rot, sagging framing, loose boards, unstable railings, or sinking posts, our experts provide full deck replacement and repairs.

We carefully inspect the foundation, framing, and structural components before recommending the best solution — whether a partial repair or a full rebuild with modern materials. Replacing an outdated deck increases home value, improves safety, and enhances curb appeal.`
                    },

                    {
                        heading: "Deck Design and Construction Process",
                        text: `Every project begins with a consultation where we review your backyard layout, discuss materials, measure the space, and create a design that fits your home and lifestyle. After approval, our licensed team handles engineering, permits, framing, decking, railings, steps, and finishing touches.

We also offer features like under-deck drainage, privacy screens, LED lighting, aluminum railing, and customized borders. Every deck is built to Kentucky building code standards for safety and long-term performance.`
                    },

                    {
                        heading: "Average Deck Cost in Bracktown, KY",
                        text: `The cost of a deck in Bracktown depends on size, elevation, materials, and custom features. Here are typical ranges:

Composite Decks (Trex, TimberTech, AZEK): **$45–$65 per sq. ft.**  
Wood Decks (cedar, pressure-treated lumber): **$30–$50 per sq. ft.**  
Rebuilds or repairs: **40–60% of full replacement**

These prices include labor, materials, debris removal, and final inspection. Contact us for an exact onsite estimate tailored to your space.`
                    },

                    {
                        heading: "Free Deck Estimate in Bracktown KY",
                        text: `We provide free, no-obligation deck estimates throughout Bracktown, Leestown Road, Masterson Station, Greendale, and northwest Lexington. Our team arrives on time, takes accurate measurements, reviews all design options, and delivers a detailed written quote.

Whether you want to rebuild an old deck or design a brand-new outdoor living area, we’ll guide you through materials, pricing, and layout decisions.`
                    },

                    {
                        heading: "Decking Contractor in Bracktown, Kentucky",
                        text: `Hiring a deck contractor is an investment in your home, and homeowners in Bracktown trust Yellowstone Renovation for our honesty, quality, and craftsmanship. We provide premium materials, sturdy framing, clean finishes, and open communication at every step.

We build decks designed not only to look great but to perform well for decades under everyday use, weather exposure, and high foot traffic.`
                    },

                    {
                        heading: "Deck Installation Services in Bracktown",
                        text: `We offer complete deck installation services to match any backyard style or home architecture:

• Composite decks  
• Wood decks  
• Platform & ground-level decks  
• Second-story decks with reinforced posts  
• Multi-level decks  
• Covered decks & roof extensions  
• Pergolas and shade structures  
• Screened-in porches  
• Structural repairs & resupport  
• Railing and stair upgrades  

Whether you're building from scratch or replacing an old deck, we deliver safe, strong, and stylish results.`
                    },

                    {
                        heading: "Professional Deck Construction in Bracktown KY",
                        text: `Our construction process is engineered for strength and reliability. We use oversized footings, double beams, proper joist spacing, moisture barriers, and modern fastening techniques. Every deck is inspected during and after construction to ensure structural integrity.

We also maintain clean workspaces, respect your property, and finish projects on schedule.`
                    },

                    {
                        heading: "Working with a Local Deck Contractor Near You",
                        text: `As a local contractor familiar with northwest Lexington’s soil, drainage, and weather patterns, we design decks that last. We understand the unique needs of homes in Bracktown — whether you're working with sloped yards, wet areas, mature trees, or limited space.

Open communication, attention to detail, and customer satisfaction are our priorities from start to finish.`
                    },

                    {
                        heading: "Choose the Best Deck Installers in Bracktown KY",
                        text: `With hundreds of successful installations across Fayette County and a strong reputation for craftsmanship, Yellowstone Renovation is one of Bracktown’s most trusted deck builders. We combine advanced materials, industry knowledge, and transparent pricing to create exceptional outdoor spaces.`
                    },

                    {
                        heading: "Average Cost to Install a New Deck in Bracktown",
                        text: `Most deck projects in Bracktown range between **$10,000 and $45,000**, depending on materials and design complexity. Composite decks typically fall between **$45–$65 per sq. ft.**, while wood decks average **$30–$50 per sq. ft.**

Every estimate includes itemized details so you know exactly where your investment goes.`
                    },

                    {
                        heading: "Bracktown Wood Decks — Natural Style & Comfort",
                        text: `Wood decks remain a popular choice in Bracktown for homeowners who appreciate natural aesthetics and classic design. We seal and reinforce all wood decks to ensure long-term weather resistance and structural strength.`
                    },

                    {
                        heading: "Composite Decks in Bracktown KY",
                        text: `Composite decks offer a high-end appearance with low maintenance. These boards resist moisture, fading, rot, and splintering — making them perfect for busy homeowners.

We install Trex, TimberTech, and AZEK systems with custom borders, picture-frame edges, and aluminum or composite railings for a premium finish.`
                    },

                    {
                        heading: "Deck Builder Near Me in Bracktown KY",
                        text: `Searching for a “deck builder near me” in Bracktown, Kentucky? Yellowstone Renovation proudly serves Bracktown, Masterson Station, Greendale, Leestown Road, Meadowthorpe, and all of west and northwest Lexington.

We build durable, beautiful decks with honest pricing, dependable timelines, and workmanship you can trust.`
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
                        text: "View Local Deck Projects in Bracktown & Lexington",
                        button: "View Gallery",
                        link: "/projects",
                    },
                ]}

                whyUs={[
                    "Serving Bracktown, Masterson Station & Northwest Lexington",
                    "Certified Trex, TimberTech & AZEK Installers",
                    "Custom Deck Designs Tailored to Every Home",
                    "Licensed, Insured & Highly Reviewed",
                    "Clear Communication, Strong Materials & Clean Work"
                ]}

                projects={[
                    { image: "/images/deck4.webp", title: "Bracktown Composite Deck" },
                    { image: "/images/deck5.webp", title: "Wood Deck Installation in Bracktown" },
                    { image: "/images/deck6.webp", title: "Pergola + Deck Upgrade" },
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
                        title: "Composite vs. Wood Decking — What Bracktown Homeowners Need to Know",
                        date: "May 20th, 2025",
                        author: "Peter",
                        image: "/images/deck7.webp",
                    },
                    {
                        title: "Deck Maintenance Tips for Bracktown KY Residents",
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
