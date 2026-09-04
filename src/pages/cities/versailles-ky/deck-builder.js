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

export default function VersaillesDeckBuilder() {
    return (
        <Layout>

            {/* SEO */}
            <SEO
                title="Deck Builder in Versailles KY — Composite & Wood Decks | Yellowstone Renovation"
                description="Professional deck builders in Versailles, KY. Yellowstone Renovation installs composite and wood decks designed for beauty, durability, and long-term value. Free estimates across Woodford County."
                pathname="/cities/versailles-ky/deck-builder"
                image="https://yellowstonerenovation.com/images/deck-builder8.webp"
            />

            <Helmet>
                <meta
                    name="keywords"
                    content="deck builder Versailles KY, composite deck Versailles, wood deck installation Woodford County, deck repair Versailles KY, deck replacement Versailles"
                />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="Deck Builder in Versailles KY | Yellowstone Renovation" />
                <meta property="og:description" content="Custom-built composite and wood decks in Versailles, Kentucky. Get your free estimate from Yellowstone Renovation." />
                <meta property="og:image" content="https://yellowstonerenovation.com/images/deck-builder8.webp" />
                <meta property="og:url" content="https://yellowstonerenovation.com/cities/versailles-ky/deck-builder" />
                <meta property="og:site_name" content="Yellowstone Renovation" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Versailles KY Deck Builder | Composite & Wood Deck Construction" />
                <meta name="twitter:description" content="Upgrade your outdoor living with Yellowstone Renovation — trusted deck builders in Versailles and Woodford County." />
                <meta name="twitter:image" content="https://yellowstonerenovation.com/images/deck-builder8.webp" />

                {/* SCHEMA JSON-LD */}
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
                            addressLocality: "Versailles",
                            addressRegion: "KY",
                            postalCode: "40383",
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
                            "Versailles, KY",
                            "Mortonsville, KY",
                            "Millville, KY",
                            "Nonesuch, KY",
                            "Woodford County, KY"
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
                topText="Top-Rated Deck Builder in Versailles, KY"
                title="Deck Builder in Versailles, KY — Custom Composite & Wood Decks"
                description="Yellowstone Renovation builds strong, stylish, and long-lasting decks for homeowners throughout Versailles and Woodford County. Whether you prefer composite or wood, our craftsmanship and design expertise bring your outdoor vision to life."
                backgroundImage="/images/deck/deck-lexington11.webp"
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
                title="Versailles Deck Transformations"
                description="Explore some of our recent deck upgrades in Versailles — transforming outdated, worn decks into modern, durable outdoor living spaces."
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
                title="VERSAILLES DECK BUILDER GALLERY"
                subtitle="Browse completed deck projects built for homeowners in Versailles and Woodford County."
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
                title="Deck Builder in Versailles, KY — Custom Composite & Wood Decks"
                sections={[
                    {
                        heading: "Deck Builder Versailles KY — Strength, Style & Outdoor Comfort",
                        text: `Yellowstone Renovation provides high-quality deck construction for homeowners across Versailles, Kentucky. We build beautiful and durable outdoor spaces using top-grade materials and proven construction methods.

Our deck installations include composite and wood options, tailored designs, permit handling, strong framing, and clean, long-lasting finishes. Whether upgrading an old deck or building a new one, we deliver exceptional results.`
                    },

                    {
                        heading: "Composite Deck Installation in Versailles, KY",
                        text: `Composite decking is an excellent choice for Versailles homeowners seeking low maintenance and long-term performance. Composite boards resist moisture, fading, insects, and cracking — perfect for Kentucky weather.

We install Trex, TimberTech, and AZEK systems using hidden fasteners and moisture-protection framing. Choose from premium color and texture options that elevate your outdoor living space.`
                    },

                    {
                        heading: "Wood Deck Builder in Versailles, Kentucky",
                        text: `Natural wood decks bring timeless beauty and character to any home. We build wood decks using pressure-treated lumber, cedar, and redwood — each offering charm, value, and exceptional warmth.

All wood decks are properly sealed, reinforced, and finished, ensuring long-term durability against humidity and everyday use.`
                    },

                    {
                        heading: "Deck Replacement & Repair in Versailles, KY",
                        text: `If your deck feels unstable, worn out, or unsafe, we offer professional deck replacement and repair services throughout Versailles and Woodford County. We strengthen structures, replace damaged framing, and install modern decking materials.

From failing posts to loose railings and rotted decking — we restore outdoor spaces with safe, durable, and aesthetically pleasing solutions.`
                    },

                    {
                        heading: "Our Deck Design & Construction Process",
                        text: `Our process begins with a design consultation where we assess your space, your needs, and your material preferences. Once approved, we handle all permits, structural framing, decking installation, and finishing details.

We follow Kentucky building codes and maintain clean worksites, ensuring a smooth and stress-free experience.`
                    },

                    {
                        heading: "Average Deck Cost in Versailles, KY",
                        text: `Most Versailles homeowners invest in the following ranges when building a professional deck:

Composite Decks: $45–$65 per sq. ft. installed  
Wood Decks: $30–$50 per sq. ft. installed  
Deck Repairs: typically 40–60% of full replacement cost  

These prices include labor, materials, cleanup, and inspection. For an accurate quote, schedule a free evaluation.`
                    },

                    {
                        heading: "Get a Free Deck Estimate in Versailles, KY",
                        text: `We provide free, no-pressure estimates throughout Versailles, Mortonsville, Millville, Nonesuch, and surrounding Woodford County areas.

Our team will measure your outdoor area, discuss design ideas, present material options, and give you a clear written quote.`
                    },

                    {
                        heading: "Decking Contractor in Versailles, Kentucky",
                        text: `Homeowners choose Yellowstone Renovation for reliable service, skilled craftsmanship, and decks built to last. We take pride in improving outdoor spaces and adding long-term value to Versailles homes.

Our focus is safety, structural strength, beautiful design, and customer satisfaction.`
                    },

                    {
                        heading: "Deck Installation Services in Versailles",
                        text: `We install everything from small, functional wood decks to large composite entertainment spaces with lighting, upgraded railings, and custom steps.

Each installation is engineered for durability and built to withstand Kentucky’s climate.`
                    },

                    {
                        heading: "Professional Deck Construction in Versailles, KY",
                        text: `We are a fully licensed and insured contractor handling design, permitting, structural framing, decking installation, railings, and final inspections.

Our decks remain strong through daily use, moisture, and changing temperatures.`
                    },

                    {
                        heading: "Working with a Local Versailles Deck Contractor",
                        text: `As a Central Kentucky contractor, we understand Versailles building requirements, weather conditions, and soil types. This allows us to build safer, stronger decks for local homeowners.

We maintain open communication throughout the entire project.`
                    },

                    {
                        heading: "Choose the Best Deck Installers in Versailles, KY",
                        text: `Yellowstone Renovation is known across Woodford County for exceptional craftsmanship, transparent pricing, and dependable project timelines.

We build outdoor spaces designed for long-term comfort and aesthetic appeal.`
                    },

                    {
                        heading: "Average Cost to Install a New Deck in Versailles",
                        text: `Versailles homeowners typically invest between $10,000 and $45,000 depending on deck size, elevation, features, and materials.

Composite installations range from $45–$65 per sq. ft., while wood options run $30–$50 per sq. ft.`
                    },

                    {
                        heading: "Versailles Wood Decks — Warm, Natural & Beautiful",
                        text: `Wood decks bring inviting warmth and natural appeal. We use properly treated lumber and sealant systems to protect against Kentucky’s humidity and temperature changes.`
                    },

                    {
                        heading: "Composite Decks in Versailles, KY",
                        text: `Composite decks provide incredible durability with very little maintenance. Our Trex, TimberTech, and AZEK installations resist fading, warping, and moisture — keeping your outdoor space looking great year after year.`
                    },

                    {
                        heading: "Deck Builder Near Me in Versailles, KY",
                        text: `If you're searching for “deck builder near me” in Versailles, KY, Yellowstone Renovation is your trusted local contractor. We proudly serve Versailles, Mortonsville, Millville, Nonesuch, and all of Woodford County.

Expect clean work, fair pricing, and excellent craftsmanship in every deck we build.`
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
                        text: "Browse Completed Deck Projects in Versailles",
                        button: "View Gallery",
                        link: "/projects",
                    },
                ]}

                whyUs={[
                    "Trusted local deck builders serving Versailles and Woodford County",
                    "Trex, TimberTech, and AZEK composite experts",
                    "Custom designs tailored to your outdoor space",
                    "Licensed, insured, and dependable scheduling",
                    "Clear pricing, clean job sites, and strong workmanship warranties",
                ]}

                projects={[
                    { image: "/images/deck4.webp", title: "Versailles Composite Deck Build" },
                    { image: "/images/deck5.webp", title: "Custom Wood Deck With Railings" },
                    { image: "/images/deck6.webp", title: "Pergola & Deck Combination" },
                    { image: "/images/deck7.webp", title: "Covered Deck & Outdoor Living Area" },
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
                        title: "Choosing Between Composite & Wood Decks in Versailles",
                        date: "May 20th, 2025",
                        author: "Peter",
                        image: "/images/deck7.webp",
                    },
                    {
                        title: "Deck Maintenance Tips for Versailles Homeowners",
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
