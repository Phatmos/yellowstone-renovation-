import React from "react";
import { Helmet } from "react-helmet";
import SEO from "../components/SEO";

import HeroSplit from "../components/HeroSplit";
import HeroSplit1 from "../components/HeroSplit1";
import GallerySection from "../components/GallerySection";
import ProjectShowcase from "../components/ProjectShowcase";
import ReviewBadges from "../components/ReviewBadges";
import BenefitsGrid from "../components/BenefitsGrid";
import ServicesChips from "../components/ServicesChips";
import ProcessStepsDeck from "../components/ProcessStepsDeck";
import AboutUsVideo from "../components/AboutUsVideo";
import ReviewsSixGrid from "../components/ReviewsSixGrid";
import DeckFAQWithForm from "../components/DeckFAQWithForm";
import BottomHeroCtaDeck from "../components/BottomHeroCtaDeck";
import DeckHeader from "../components/DeckHeader";

export default function DeckPage() {
    // ✅ Reviews data for your grid
    const deckReviews = [
        {
            source: "google",
            rating: 5,
            image: "/images/deck/deck-lexington47.webp",
            text:
                "Clean build, great communication, and finished on time. William explained everything clearly and Andrew kept the project moving smoothly.",
            name: "Carlos R.",
            location: "Lexington, KY",
            service: "Deck Installation",
            date: "Aug 2025",
        },
        {
            source: "yelp",
            rating: 5,
            image: "/images/deck/deck-lexington41.webp",
            text:
                "Professional crew and very organized process. Our composite deck looks amazing and the jobsite stayed clean the whole time.",
            name: "Brian & Amanda",
            location: "Georgetown, KY",
            service: "Composite Deck",
            date: "Jul 2025",
        },
        {
            source: "facebook",
            rating: 5,
            image: "/images/deck/deck-lexington28.webp",
            text:
                "Strong craftsmanship and clean finishes. The railing details came out better than we expected. Great experience overall.",
            name: "Sharon K.",
            location: "Nicholasville, KY",
            service: "Custom Deck",
            date: "May 2025",
        },
        {
            source: "google",
            rating: 5,
            image: "/images/deck/deck-lexington67.webp",
            text:
                "Clear pricing, no surprises, and the timeline was realistic. We got updates throughout the project and the final result is excellent.",
            name: "Mike D.",
            location: "Frankfort, KY",
            service: "Deck Replacement",
            date: "Apr 2025",
        },
        {
            source: "yelp",
            rating: 5,
            image: "/images/deck/deck-lexington01.webp",
            text:
                "Great details on railing and stairs — looks premium. They showed up on time and handled everything professionally.",
            name: "Laura P.",
            location: "Richmond, KY",
            service: "Outdoor Living",
            date: "Mar 2025",
        },
        {
            source: "facebook",
            rating: 5,
            image: "/images/deck/deck-lexington87.webp",
            text:
                "From design to final walkthrough — smooth process. We felt taken care of and the deck turned out beautiful.",
            name: "Andrew S.",
            location: "Versailles, KY",
            service: "Deck Build",
            date: "Feb 2025",
        },
    ];

    const pageUrl = "https://yellowstonerenovation.com/deck-local/";
    const businessId = "https://yellowstonerenovation.com/#business";

    return (
        <main>
            {/* ✅ SEO META */}
            <SEO
                title="Deck Builder in Lexington, KY | Composite & Wood Decks | Yellowstone Renovation"
                description="Yellowstone Renovation is a top-rated deck builder serving Lexington, KY. Custom composite & wood decks, railings, stairs, lighting, and full project management — plus expert siding upgrades across Central Kentucky."
            />

            {/* ✅ JSON-LD (Deck page focused) */}
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": ["HomeAndConstructionBusiness", "GeneralContractor"],
                                "@id": businessId,
                                "name": "Yellowstone Renovation",
                                "url": "https://yellowstonerenovation.com/",
                                "logo": "https://yellowstonerenovation.com/icons/logo.webp",
                                "image": "https://yellowstonerenovation.com/images/og-home.jpg",
                                "telephone": "+1-859-765-7267",
                                "priceRange": "$$",
                                "address": {
                                    "@type": "PostalAddress",
                                    "streetAddress": "120 Tina Way",
                                    "addressLocality": "Nicholasville",
                                    "addressRegion": "KY",
                                    "postalCode": "40356",
                                    "addressCountry": "US",
                                },
                                "areaServed": [
                                    { "@type": "City", "name": "Lexington", "addressRegion": "KY" },
                                    { "@type": "City", "name": "Nicholasville", "addressRegion": "KY" },
                                    { "@type": "City", "name": "Georgetown", "addressRegion": "KY" },
                                    { "@type": "City", "name": "Richmond", "addressRegion": "KY" },
                                    { "@type": "City", "name": "Versailles", "addressRegion": "KY" },
                                    { "@type": "City", "name": "Winchester", "addressRegion": "KY" },
                                    { "@type": "City", "name": "Frankfort", "addressRegion": "KY" },
                                ],
                                "sameAs": [
                                    "https://www.facebook.com/p/Yellowstone-Renovation-61551123481170/",
                                    "https://www.instagram.com/yellowstone_renovation/",
                                    "https://maps.google.com/?q=Yellowstone+Renovation+Nicholasville+KY",
                                ],
                                "description":
                                    "Yellowstone Renovation is a trusted deck builder and exterior remodeling contractor serving Lexington, KY and Central Kentucky. We build custom composite and wood decks, handle permits and planning, and deliver clean installs with clear communication and professional project management.",
                                "aggregateRating": {
                                    "@type": "AggregateRating",
                                    "ratingValue": "4.9",
                                    "reviewCount": "87",
                                },
                                "review": [
                                    {
                                        "@type": "Review",
                                        "author": { "@type": "Person", "name": "Carlos R." },
                                        "datePublished": "2025-08-10",
                                        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
                                        "reviewBody":
                                            "Clean build, great communication, and finished on time. The process was organized and the final deck looks premium.",
                                    },
                                    {
                                        "@type": "Review",
                                        "author": { "@type": "Person", "name": "Brian & Amanda" },
                                        "datePublished": "2025-07-18",
                                        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
                                        "reviewBody":
                                            "Professional crew and very organized process. Our composite deck looks amazing and the jobsite stayed clean the whole time.",
                                    },
                                    {
                                        "@type": "Review",
                                        "author": { "@type": "Person", "name": "Sharon K." },
                                        "datePublished": "2025-05-09",
                                        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
                                        "reviewBody":
                                            "Strong craftsmanship and clean finishes. The railing details came out better than we expected. Great experience overall.",
                                    },
                                ],
                            },

                            {
                                "@type": "WebPage",
                                "@id": `${pageUrl}#webpage`,
                                "url": pageUrl,
                                "name": "Deck Builder in Lexington, KY | Yellowstone Renovation",
                                "isPartOf": { "@type": "WebSite", "@id": "https://yellowstonerenovation.com/#website" },
                                "about": { "@id": businessId },
                                "description":
                                    "Looking for a deck builder in Lexington, KY? Yellowstone Renovation designs and builds custom composite and wood decks with railings, stairs, and upgrades — plus siding services across Central Kentucky.",
                            },

                            {
                                "@type": "Service",
                                "@id": `${pageUrl}#service-deck-building`,
                                "name": "Deck Building in Lexington, KY",
                                "serviceType": "Deck Design & Construction",
                                "provider": { "@id": businessId },
                                "areaServed": { "@type": "City", "name": "Lexington", "addressRegion": "KY" },
                                "description":
                                    "Custom deck design and construction in Lexington, KY. Composite and wood decking, multi-level builds, railings, stairs, lighting, and full project management from design to final walkthrough.",
                            },

                            {
                                "@type": "Service",
                                "@id": `${pageUrl}#service-siding`,
                                "name": "Siding Contractor in Lexington, KY",
                                "serviceType": "Siding Installation & Replacement",
                                "provider": { "@id": businessId },
                                "areaServed": { "@type": "City", "name": "Lexington", "addressRegion": "KY" },
                                "description":
                                    "James Hardie® and vinyl siding installation in Lexington, KY. Durable, weather-ready exterior upgrades designed for Kentucky seasons, with clean installs and organized project execution.",
                            },
                        ],
                    })}
                </script>
            </Helmet>

            <DeckHeader />

            <HeroSplit1
                img="/images/deck-builder12.webp"
                alt="Deck builder in Lexington KY"
                reviews="64+ Verified 5-Star Reviews"
                title1="Lexington’s"
                titleGreen="Deck Builder"
                title2="Custom Composite & Wood Decks Built to Last"
                promo="Free 3D Design + $1,500 Off"
                btnText="Schedule Free Estimate"
            />
            <section id="deck-quote" style={{ padding: "40px 18px" }}>
                <h2></h2>
            </section>

            <ReviewBadges />

            <section id="projects"></section>
            <section id="projects"></section>
            <GallerySection
                title="Deck Builder in Lexington — Recent Projects"
                subtitle="A quick look at real deck projects we’ve completed across Lexington, Nicholasville, Georgetown, Richmond, and nearby areas. From wood decks to composite decking, stairs, rails, fascia, and picture-frame details — every project is built with clean craftsmanship and long-lasting quality."
                highlight="PROJECT GALLERY"
                background="#ffffff"
                images={[
                    "/images/deck/deck-lexington39.webp",
                    "/images/deck/deck-lexington102.webp",
                    "/images/deck/deck-lexington22.webp",
                    "/images/deck/deck-lexington15.webp",
                    "/images/deck/deck-lexington9.webp",
                    "/images/deck/deck-lexington07.webp",
                    "/images/deck/deck-lexington04.webp",
                    "/images/deck/deck-lexington4.webp",
                    "/images/deck/deck-lexington95.webp",
                    "/images/deck/deck-lexington41.webp",
                    "/images/deck/deck-lexington01.webp",
                    "/images/deck/deck-lexington48.webp",
                    "/images/deck/deck-lexington46.webp",
                    "/images/deck/deck-lexington44.webp",
                    "/images/deck/deck-lexington53.webp",
                    "/images/deck/deck-lexington54.webp",
                    "/images/deck/deck-lexington60.webp",
                    "/images/deck/deck-lexington65.webp",
                    "/images/deck/deck-lexington91.webp",
                    "/images/deck-builder110.webp",
                    "/images/deck/deck-lexington104.webp",

                ]}
            />

            <ProjectShowcase
                titleTop="From Old Space to"
                titleGreen="Beautiful Results"
                titleEnd="— See It Happen"
                text="Real deck transformations completed by our team across Lexington and Central Kentucky. Clean installs, strong framing, premium finishes, and professional project management — built the right way."
                ctaText="Get My Free Consultation"
                items={[
                    {
                        before: "/images/deckbeforee.jpg",
                        after: "/images/deckafter.jpg",
                        location: "Lexington, KY",
                        label: "Transformation 1 of 5",
                    },
                    {
                        before: "/images/deckbefore1.jpeg",
                        after: "/images/deckafter1.webp",
                        location: "Nicholasville, KY",
                        label: "Transformation 2 of 5",
                    },
                    {
                        before: "/images/deckbefore2.webp",
                        after: "/images/deckafter2.webp",
                        location: "Lexington, KY",
                        label: "Transformation 3 of 5",
                    },
                    {
                        before: "/images/deckbefore3.png",
                        after: "/images/deckafter3.png",
                        location: "Georgetown, KY",
                        label: "Transformation 3 of 5",
                    },
                    {
                        before:
                            "/images/deckbefore4.png",
                        after: "/images/deckafter4.avif",
                        location: "Georgetown, KY",
                        label: "Transformation 4 of 5",
                    },
                    {
                        before:
                            "/images/Back_Deck_DIY_Patio_Shelter_Before_After_The_Foxes_Photography_2020_01.jpg",
                        after: "/images/IMG_3744.webp",
                        location: "Frankfort, KY",
                        label: "Transformation 4 of 5",
                    },
                ]}
            />

            <section id="benefits"></section>
            <BenefitsGrid />

            <ServicesChips />

            <section id="process"></section>
            <ProcessStepsDeck />

            <AboutUsVideo
                poster="/images/worker.png"
                videoUrl="https://www.youtube.com/embed/cqG0WZ2JzXk"
                title="Meet Yellowstone Renovation"
                text="We build decks and exterior upgrades with clear pricing, clean job sites, and strong workmanship."
                subline="Serving Lexington, Nicholasville, Georgetown & nearby"
                pill="Deck Builder & Siding Contractor"
                showStars={false}
            />

            <section id="reviews"></section>
            <ReviewsSixGrid
                title="Beautiful Decks, Loved by Homeowners"
                highlight="Decks"
                reviews={deckReviews}
            />

            <DeckFAQWithForm />

            <BottomHeroCtaDeck
                bgImage="/images/deck/deck-lexington27.webp"
                phoneDisplay="(859) 765-7267"
                phoneTel="8597657267"
            />
        </main>
    );
}
