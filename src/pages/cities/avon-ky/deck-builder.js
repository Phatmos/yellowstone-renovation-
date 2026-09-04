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

export default function AvonDeckBuilder() {
    return (
        <Layout>

            {/* ✅ SEO Core */}
            <SEO
                title="Deck Builder in Avon KY — Composite, Wood & Custom Deck Construction | Yellowstone Renovation"
                description="Top-rated deck builders in Avon, KY. Yellowstone Renovation designs and installs premium composite decks (Trex, TimberTech), durable wood decks, covered decks, second-story decks, and full outdoor living spaces. Serving Avon, Lexington East, and all Fayette County. Free quotes, fast scheduling."
                pathname="/cities/avon-ky/deck-builder"
                image="https://yellowstonerenovation.com/images/deck-builder8.webp"
            />

            {/* ✅ Extra Meta / Schema */}
            <Helmet>

                {/* Keywords — expanded & SEO optimized */}
                <meta
                    name="keywords"
                    content="deck builder Avon KY, Avon deck construction, composite decks Avon KY, Trex installers Avon, TimberTech Avon KY, wood deck builders Avon KY, deck replacement Avon KY, deck repair Avon Kentucky, outdoor living Avon KY, deck contractors Fayette County"
                />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Avon KY Deck Builder | Yellowstone Renovation" />
                <meta
                    property="og:description"
                    content="Custom-built decks in Avon, KY — including modern composite decks, cedar wood decks, covered structures, screened-in porches, and complete outdoor living systems. Get a free detailed on-site estimate today."
                />
                <meta property="og:image" content="https://yellowstonerenovation.com/images/deck-builder8.webp" />
                <meta property="og:url" content="https://yellowstonerenovation.com/cities/avon-ky/deck-builder" />
                <meta property="og:site_name" content="Yellowstone Renovation" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Deck Builder in Avon KY | Composite & Wood Deck Experts" />
                <meta
                    name="twitter:description"
                    content="Build your dream deck in Avon, KY with Yellowstone Renovation — trusted specialists for composite, wood, and custom deck construction. Free estimates."
                />
                <meta
                    name="twitter:image"
                    content="https://yellowstonerenovation.com/images/deck-builder8.webp"
                />

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
                            addressLocality: "Avon",
                            addressRegion: "KY",
                            postalCode: "40509",
                            addressCountry: "US"
                        },
                        serviceType: [
                            "Deck Construction",
                            "Composite Deck Installation",
                            "Wood Deck Builder",
                            "Deck Repair",
                            "Deck Replacement",
                            "Covered Decks",
                            "Pergolas",
                            "Screened-In Porches",
                        ],
                        areaServed: [
                            "Avon, KY",
                            "Lexington East, KY",
                            "Cadentown, KY",
                            "Athens, KY",
                            "Boone Creek, KY",
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
                topText="Top-Rated Deck Builder in Avon, KY"
                title="Deck Builder in Avon, KY — Composite, Wood & Custom Decks"
                description="Yellowstone Renovation builds premium-quality decks for homeowners in Avon, Lexington East, and across Fayette County. Whether you need a modern composite system, a classic wood deck, a covered outdoor structure, or a complete backyard makeover — we deliver structural strength, clean craftsmanship, and long-lasting beauty."
                backgroundImage="/images/deck/deck-lexington1.webp"
                overlayOpacity={0.65}
                formTitle="Get a Free Deck Construction Estimate"
                selectLabel="Select Deck Service"
                selectOptions={[
                    "Custom Deck Design & Build",
                    "Composite Decks (Trex, TimberTech, AZEK)",
                    "Wood Deck Installation",
                    "Second-Story Decks",
                    "Deck Repair & Resurfacing",
                    "Covered Decks & Pergolas",
                    "Stairs & Railing Installation",
                    "Screened-In Decks & Porches",
                    "Full Outdoor Living Makeover",
                ]}
                ctaText="Get Free Quote"
            />

            <AboutSection />

            {/* BEFORE & AFTER */}
            <BeforeAfter
                title="Avon Deck Before & After Transformations"
                description="See how our team revitalizes outdoor spaces across Avon and East Lexington with strong, beautiful, long-lasting deck installations. From failing structures to luxurious composite upgrades — our work speaks for itself."
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
                title="AVON DECK BUILDER GALLERY"
                subtitle="Browse premium deck projects installed throughout Avon, Lexington, and Fayette County."
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
                    "/images/deck/deck-lexington82.webp",
                    "/images/deck/deck-lexington21.webp",
                    "/images/deck/deck-lexington67.webp",
                ]}
            />

            <DeckBuildingSteps />
            <TestimonialsSection />

            {/* MAIN SECTION SIDEBAR */}
            <MainSectionSideBar
                title="Deck Builder in Avon, KY — Custom Composite & Wood Decks"
                sections={[

                    /* 1 */
                    {
                        heading: "Deck Builder Avon KY — Premium Outdoor Construction for Strength, Comfort, and Beauty",
                        text: `Yellowstone Renovation is a leading deck builder serving Avon, Kentucky, delivering high-performance outdoor living spaces designed for long-term durability and everyday comfort. Located on the east side of Lexington, Avon is known for its growing neighborhoods, spacious backyards, and homeowners who want attractive, functional, and low-maintenance outdoor spaces. Our team brings expert craftsmanship, premium decking materials, and detailed design to every project.

We build everything from simple ground-level decks to expansive multi-level entertainment areas complete with lighting, railings, steps, pergolas, and covered structures. Whether your goal is a relaxing morning coffee space or a large family gathering area, our decks are engineered for comfort, safety, and weather resistance.

Every deck in Avon is built using proven construction methods, strong framing, and industry-leading materials like Trex, TimberTech, AZEK, cedar, and pressure-treated lumber. With Yellowstone Renovation, your outdoor space becomes a long-lasting extension of your home.`
                    },

                    /* 2 */
                    {
                        heading: "Composite Deck Installation in Avon KY",
                        text: `Composite decks have become the top choice for homeowners in Avon who want long-lasting performance without the need for yearly maintenance. Composite boards do not warp, rot, fade, splinter, or attract insects — making them ideal for Kentucky’s humidity, rain, and temperature swings.

Yellowstone Renovation installs all major composite brands, including Trex, TimberTech, and AZEK. We offer hidden fastener systems, moisture-protected framing, matching railings, accent borders, and integrated lighting. Composite decking in Avon is perfect for families who want a beautiful, modern deck that looks great all year with almost zero maintenance.

With dozens of colors, grain patterns, and design options, composite decks provide the luxury look of premium wood without the hassle of staining, sealing, or sanding.`
                    },

                    /* 3 */
                    {
                        heading: "Wood Deck Builder in Avon KY",
                        text: `For homeowners who love natural beauty, Yellowstone Renovation builds premium wood decks using cedar, redwood, and high-quality pressure-treated pine. Wood decks offer warmth, character, and timeless appeal that perfectly complements the scenic neighborhoods around Avon and East Lexington.

Our wood decks feature reinforced framing, clean finishing, and protective staining or sealing to guard against moisture and sun exposure. We also provide maintenance services such as resealing, refinishing, and structural reinforcement to keep your wood deck performing for years.

Wood decks remain one of the most affordable options while still delivering excellent durability and visual appeal.`
                    },

                    /* 4 */
                    {
                        heading: "Deck Replacement and Repair in Avon KY",
                        text: `If your current deck is sagging, cracking, rotting, or no longer safe, our team provides full-service deck replacement and structural repairs across Avon and the surrounding Lexington area. Many older homes in the region have aging decks that no longer meet safety or building code standards.

We inspect your existing structure, identify all safety concerns, and rebuild with stronger, modern materials. Whether you want to keep the same layout or upgrade to a composite system with expanded features, our team delivers solutions that improve safety, value, and appearance.

We repair loose railings, broken boards, failing stairs, water-damaged framing, and structural issues. For homeowners preparing to sell, a repaired deck significantly increases curb appeal and property value.`
                    },

                    /* 5 */
                    {
                        heading: "Deck Design and Construction Process",
                        text: `Our deck-building process in Avon is structured, professional, and transparent from start to finish. We begin with a detailed consultation where we assess your property, understand your goals, and recommend materials and design options that match your budget and lifestyle.

After design approval, our licensed team manages all permits, framing, decking installation, railing systems, steps, and finishing details. We offer enhancements such as composite borders, drink rails, under-deck drainage systems, recessed lighting, and privacy screens.

Every deck is built according to Kentucky building codes and engineered to withstand the region’s climate. You get a strong, beautiful outdoor space with no surprises and no hidden costs.`
                    },

                    /* 6 */
                    {
                        heading: "Average Deck Cost in Avon, KY",
                        text: `Deck pricing in Avon depends on materials, layout, height, and add-ons like lighting or stairs. However, most homeowners can use these average ranges:

Composite Decks (Trex, TimberTech, AZEK): **$45–$65 per sq. ft. installed**  
Wood Decks (cedar, treated pine): **$30–$50 per sq. ft. installed**  
Deck Repairs or Partial Rebuilds: **40–60%** of a full replacement cost

These estimates include materials, labor, haul-away, cleanup, and final inspection. Because every property in Avon is unique, we provide free on-site estimates to give you an accurate, detailed cost.`
                    },

                    /* 7 */
                    {
                        heading: "Get a Free Deck Estimate in Avon KY",
                        text: `We proudly provide free, no-obligation deck estimates throughout Avon, Lexington East, Cadentown, Athens, Boone Creek, and all of Fayette County. Our team arrives on time, takes precise measurements, reviews design options, and prepares a transparent written quote.

Whether you're replacing an aging deck or designing a brand-new outdoor space, Yellowstone Renovation provides expert guidance, competitive pricing, and a smooth building experience.`
                    },

                    /* 8 */
                    {
                        heading: "Decking Contractor in Avon, Kentucky",
                        text: `Hiring a deck contractor in Avon requires trust, experience, and proven performance. Yellowstone Renovation is known throughout Fayette County for delivering premium-quality decks backed by strong communication and reliable service.

We focus on structural integrity, clean carpentry, high-end material choices, and long-term durability. Our decks are built to perform — not just look good on day one. Homeowners choose us because we respect their time, property, and budget.`
                    },

                    /* 9 */
                    {
                        heading: "Deck Installation Services in Avon",
                        text: `We offer a full range of deck installation services to meet any homeowner’s needs:

• Ground-level decks  
• Second-story decks  
• Multi-level entertainment decks  
• Composite and PVC decking  
• Classic wood decks  
• Covered decks and roof extensions  
• Pergolas and shade structures  
• Screened-in porches  
• Stairs, railing, and safety upgrades  

Each project is completely custom — no templates, no shortcuts. We build every deck with precision, strength, and attention to detail.`
                    },

                    /* 10 */
                    {
                        heading: "Professional Deck Construction in Avon, KY",
                        text: `When you work with Yellowstone Renovation, you receive a fully licensed and insured team that handles engineering, permits, load requirements, and building code compliance. Our structural work is extremely detailed, ensuring your deck can support gatherings, furniture, grill stations, hot tubs, and more.

We follow best practices for footings, beams, joists, ledgers, and waterproofing to ensure your deck withstands decades of Kentucky weather. We also keep job sites clean and respect your property from start to finish.`
                    },

                    /* 11 */
                    {
                        heading: "Working with a Local Deck Contractor Near You",
                        text: `As a contractor built in Central Kentucky, we understand the soil conditions, humidity, wind load, and weather cycles that impact deck structures in Avon and East Lexington. Local experience matters — it ensures your deck is safe, stable, and long-lasting.

We maintain open, friendly communication throughout the project, answering questions and guiding you through design decisions. Our goal is a smooth, stress-free experience with top-tier craftsmanship you can rely on.`
                    },

                    /* 12 */
                    {
                        heading: "Choose the Best Deck Installers in Avon, KY",
                        text: `With hundreds of completed projects across Fayette County and consistently high customer satisfaction, Yellowstone Renovation stands out as one of the top deck contractors in the Avon area.

We combine expert carpentry, strong materials, transparent pricing, and dependable scheduling. Whether it’s a small backyard build or a large custom composite system, we deliver results that enhance your home’s value, appeal, and functionality.`
                    },

                    /* 13 */
                    {
                        heading: "Average Cost to Install a New Deck in Avon",
                        text: `Most Avon homeowners invest between **$10,000–$45,000** for a complete deck installation, depending on size, material choice, and custom features. Composite decks typically fall between **$45–$65 per sq. ft.**, while wood decks average **$30–$50 per sq. ft.**

Each estimate we provide includes a clear, itemized breakdown so you understand exactly what you're paying for — no guesswork, no hidden fees.`
                    },

                    /* 14 */
                    {
                        heading: "Avon Wood Decks — Natural Warmth & Classic Appeal",
                        text: `Wood decks remain a popular option for homeowners who appreciate traditional aesthetics and warm textures. We build wood decks with proper sealing, structural reinforcement, and finishing techniques to deliver long-term stability and beauty.

Whether you choose cedar, redwood, or pressure-treated pine, our wood decks offer a welcoming look that blends perfectly with Avon’s suburban and semi-rural landscapes.`
                    },

                    /* 15 */
                    {
                        heading: "Composite Decks in Avon, KY",
                        text: `Composite decking is the perfect solution for low-maintenance, high-performance outdoor living. These boards are engineered to resist UV fading, mold, moisture, stains, and warping — making them ideal for homeowners who want a deck that stays beautiful all year.

We install Trex, TimberTech, and AZEK systems using hidden fasteners, reinforced framing, and premium railing options. Composite decks in Avon offer the look of high-end wood with none of the upkeep.`
                    },

                    /* 16 */
                    {
                        heading: "Deck Builder Near Me in Avon, KY",
                        text: `Searching for a dependable “deck builder near me” in Avon, KY? Yellowstone Renovation proudly serves homeowners throughout Avon, Lexington East, Cadentown, Boone Creek, Athens, and all of Fayette County.

We design and build decks that combine luxury appearance, trusted durability, and clear, honest pricing. Whether you’re planning a full replacement, a brand-new installation, or a modern composite upgrade, our Avon deck builders deliver superior craftsmanship and professional service.

If you want a deck that enhances your outdoor living and increases home value, Yellowstone Renovation is your best local choice.`
                    },
                ]}

                /* OFFERS */
                offers={[
                    {
                        image: "/images/deck1.webp",
                        text: "Get $1500 OFF Your New Deck Installation — Limited Time Offer",
                        button: "Claim Discount",
                        link: "/contact",
                    },
                    {
                        image: "/images/deck2.webp",
                        text: "See Completed Deck Projects Across Avon & Lexington",
                        button: "View Gallery",
                        link: "/projects",
                    },
                ]}

                /* WHY US */
                whyUs={[
                    "Serving Avon, Lexington East & Fayette County",
                    "Certified Trex, TimberTech & AZEK Installers",
                    "Custom Deck Designs for Every Home",
                    "Licensed, Insured & Highly Reviewed",
                    "Strong Materials, Clear Pricing & Clean Work",
                ]}

                /* PROJECTS */
                projects={[
                    { image: "/images/deck4.webp", title: "Avon Composite Deck Project" },
                    { image: "/images/deck5.webp", title: "Wood Deck Installation in Avon" },
                    { image: "/images/deck6.webp", title: "Pergola + Deck Upgrade" },
                    { image: "/images/deck7.webp", title: "Covered Back Deck Extension" },
                ]}

                /* FIND US */
                findUs={[
                    { name: "Yelp", rating: "4.6/5", logo: "/icons/yelp.webp" },
                    { name: "Google", rating: "4.9/5", logo: "/icons/google-reviews.webp" },
                ]}

                /* BLOG POSTS */
                blog={[
                    {
                        title: "How Much Does a Deck Cost in Kentucky?",
                        date: "April 12th, 2025",
                        author: "Mark Ellison",
                        image: "/images/deck6.webp",
                    },
                    {
                        title: "Composite vs. Wood Decks — What Avon Homeowners Should Know",
                        date: "May 20th, 2025",
                        author: "Peter",
                        image: "/images/deck7.webp",
                    },
                    {
                        title: "Deck Maintenance Tips for Avon, KY Homeowners",
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
