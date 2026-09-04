import React from "react";
import { Helmet } from "react-helmet";
import SEO from "../components/SEO";

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

export default function LouisvilleDeckPage() {
    const deckReviews = [
        {
            source: "google",
            rating: 5,
            image: "/images/deck/deck-lexington47.webp",
            text:
                "Clean build, great communication, and finished on time. William explained everything clearly, and the project stayed organized from start to finish.",
            name: "Carlos R.",
            location: "Louisville, KY",
            service: "Deck Installation",
            date: "Aug 2025",
        },
        {
            source: "yelp",
            rating: 5,
            image: "/images/deck/deck-lexington41.webp",
            text:
                "Professional crew and a very organized process. Our composite deck looks amazing, and the jobsite stayed clean throughout the project.",
            name: "Brian & Amanda",
            location: "Jeffersontown, KY",
            service: "Composite Deck",
            date: "Jul 2025",
        },
        {
            source: "facebook",
            rating: 5,
            image: "/images/deck/deck-lexington28.webp",
            text:
                "Strong craftsmanship and clean finishes. The railing and stair details came out even better than we expected.",
            name: "Sharon K.",
            location: "Middletown, KY",
            service: "Custom Deck",
            date: "May 2025",
        },
        {
            source: "google",
            rating: 5,
            image: "/images/deck/deck-lexington67.webp",
            text:
                "Clear pricing, no surprises, and a realistic timeline. We received updates throughout the project, and the final result is excellent.",
            name: "Mike D.",
            location: "Prospect, KY",
            service: "Deck Replacement",
            date: "Apr 2025",
        },
        {
            source: "yelp",
            rating: 5,
            image: "/images/deck/deck-lexington01.webp",
            text:
                "The railing, stairs, fascia, and finishing details look premium. The crew showed up on time and handled everything professionally.",
            name: "Laura P.",
            location: "St. Matthews, KY",
            service: "Outdoor Living",
            date: "Mar 2025",
        },
        {
            source: "facebook",
            rating: 5,
            image: "/images/deck/deck-lexington87.webp",
            text:
                "From the initial design to the final walkthrough, the entire process was smooth. The deck turned out beautiful.",
            name: "Andrew S.",
            location: "La Grange, KY",
            service: "Deck Build",
            date: "Feb 2025",
        },
    ];

    const pageUrl =
        "https://yellowstonerenovation.com/deck-builder-louisville-ky/";

    const businessId =
        "https://yellowstonerenovation.com/#business";

    return (
        <main>
            <SEO
                title="Deck Builder Louisville KY | Composite & Wood Decks"
                description="Yellowstone Renovation builds custom composite and wood decks in Louisville, KY. Get professional design, clear pricing, permit assistance, quality construction, and a 36-month workmanship warranty."
            />

            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": [
                                    "HomeAndConstructionBusiness",
                                    "GeneralContractor",
                                ],
                                "@id": businessId,
                                name: "Yellowstone Renovation",
                                url: "https://yellowstonerenovation.com/",
                                logo:
                                    "https://yellowstonerenovation.com/icons/logo.webp",
                                image:
                                    "https://yellowstonerenovation.com/images/og-home.jpg",
                                telephone: "+1-859-765-7267",
                                priceRange: "$$",
                                address: {
                                    "@type": "PostalAddress",
                                    streetAddress: "120 Tina Way",
                                    addressLocality: "Nicholasville",
                                    addressRegion: "KY",
                                    postalCode: "40356",
                                    addressCountry: "US",
                                },
                                areaServed: [
                                    {
                                        "@type": "City",
                                        name: "Louisville",
                                        addressRegion: "KY",
                                    },
                                    {
                                        "@type": "City",
                                        name: "Jeffersontown",
                                        addressRegion: "KY",
                                    },
                                    {
                                        "@type": "City",
                                        name: "Middletown",
                                        addressRegion: "KY",
                                    },
                                    {
                                        "@type": "City",
                                        name: "St. Matthews",
                                        addressRegion: "KY",
                                    },
                                    {
                                        "@type": "City",
                                        name: "Prospect",
                                        addressRegion: "KY",
                                    },
                                    {
                                        "@type": "City",
                                        name: "La Grange",
                                        addressRegion: "KY",
                                    },
                                    {
                                        "@type": "City",
                                        name: "Shelbyville",
                                        addressRegion: "KY",
                                    },
                                ],
                                sameAs: [
                                    "https://www.facebook.com/p/Yellowstone-Renovation-61551123481170/",
                                    "https://www.instagram.com/yellowstone_renovation/",
                                    "https://maps.google.com/?q=Yellowstone+Renovation+Nicholasville+KY",
                                ],
                                description:
                                    "Yellowstone Renovation is a professional deck builder serving Louisville, KY and nearby communities. We design and build custom composite and wood decks, stairs, railings, picture-frame borders, fascia, lighting, and other outdoor living upgrades.",
                                aggregateRating: {
                                    "@type": "AggregateRating",
                                    ratingValue: "4.9",
                                    reviewCount: "87",
                                },
                                review: [
                                    {
                                        "@type": "Review",
                                        author: {
                                            "@type": "Person",
                                            name: "Carlos R.",
                                        },
                                        datePublished: "2025-08-10",
                                        reviewRating: {
                                            "@type": "Rating",
                                            ratingValue: "5",
                                            bestRating: "5",
                                        },
                                        reviewBody:
                                            "Clean build, great communication, and finished on time. The process was organized, and the final deck looks premium.",
                                    },
                                    {
                                        "@type": "Review",
                                        author: {
                                            "@type": "Person",
                                            name: "Brian & Amanda",
                                        },
                                        datePublished: "2025-07-18",
                                        reviewRating: {
                                            "@type": "Rating",
                                            ratingValue: "5",
                                            bestRating: "5",
                                        },
                                        reviewBody:
                                            "Professional crew and a very organized process. Our composite deck looks amazing, and the jobsite stayed clean throughout the project.",
                                    },
                                    {
                                        "@type": "Review",
                                        author: {
                                            "@type": "Person",
                                            name: "Sharon K.",
                                        },
                                        datePublished: "2025-05-09",
                                        reviewRating: {
                                            "@type": "Rating",
                                            ratingValue: "5",
                                            bestRating: "5",
                                        },
                                        reviewBody:
                                            "Strong craftsmanship and clean finishes. The railing details came out better than we expected.",
                                    },
                                ],
                            },
                            {
                                "@type": "WebPage",
                                "@id": `${pageUrl}#webpage`,
                                url: pageUrl,
                                name:
                                    "Deck Builder in Louisville, KY | Yellowstone Renovation",
                                isPartOf: {
                                    "@type": "WebSite",
                                    "@id":
                                        "https://yellowstonerenovation.com/#website",
                                },
                                about: {
                                    "@id": businessId,
                                },
                                description:
                                    "Looking for a deck builder in Louisville, KY? Yellowstone Renovation designs and builds custom composite and wood decks with professional framing, stairs, railings, fascia, lighting, and outdoor living upgrades.",
                            },
                            {
                                "@type": "Service",
                                "@id": `${pageUrl}#deck-building-service`,
                                name:
                                    "Deck Building in Louisville, Kentucky",
                                serviceType:
                                    "Custom Deck Design and Construction",
                                provider: {
                                    "@id": businessId,
                                },
                                areaServed: [
                                    {
                                        "@type": "City",
                                        name: "Louisville",
                                        addressRegion: "KY",
                                    },
                                    {
                                        "@type": "City",
                                        name: "Jeffersontown",
                                        addressRegion: "KY",
                                    },
                                    {
                                        "@type": "City",
                                        name: "Middletown",
                                        addressRegion: "KY",
                                    },
                                    {
                                        "@type": "City",
                                        name: "Prospect",
                                        addressRegion: "KY",
                                    },
                                ],
                                description:
                                    "Custom deck design and construction in Louisville, KY. Services include composite decking, pressure-treated wood decks, deck replacement, framing, stairs, railings, fascia, picture-frame borders, lighting, and full project management.",
                                offers: {
                                    "@type": "Offer",
                                    url: pageUrl,
                                    priceCurrency: "USD",
                                    availability:
                                        "https://schema.org/InStock",
                                },
                            },
                            {
                                "@type": "BreadcrumbList",
                                "@id": `${pageUrl}#breadcrumbs`,
                                itemListElement: [
                                    {
                                        "@type": "ListItem",
                                        position: 1,
                                        name: "Home",
                                        item:
                                            "https://yellowstonerenovation.com/",
                                    },
                                    {
                                        "@type": "ListItem",
                                        position: 2,
                                        name: "Deck Builder Louisville KY",
                                        item: pageUrl,
                                    },
                                ],
                            },
                        ],
                    })}
                </script>
            </Helmet>

            <DeckHeader />

            <HeroSplit1
                img="/images/deck-builder12.webp"
                alt="Custom composite deck built by a deck builder in Louisville Kentucky"
                reviews="87+ Verified 5-Star Reviews"
                title1="Louisville’s"
                titleGreen="Deck Builder"
                title2="Custom Composite & Wood Decks Built to Last"
                promo="Free 3D Design + $1,500 Off"
                btnText="Schedule Free Estimate"
            />

            <section
                id="deck-quote"
                aria-label="Request a free Louisville deck estimate"
            />

            <ReviewBadges />

            <section id="projects" />

            <GallerySection
                title="Louisville Deck Builder — Recent Projects"
                subtitle="Explore custom deck projects completed by our team in Louisville and nearby Kentucky communities. From pressure-treated wood decks to low-maintenance composite decking, stairs, railings, fascia, and picture-frame details, every project is built with clean craftsmanship and long-lasting quality."
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
                text="See real deck transformations completed by our team in Louisville and across Kentucky. We handle demolition, framing, decking, stairs, railings, fascia, and finishing details with professional project management from start to finish."
                ctaText="Get My Free Consultation"
                items={[
                    {
                        before: "/images/deckbeforee.jpg",
                        after: "/images/deckafter.jpg",
                        location: "Louisville, KY",
                        label: "Transformation 1 of 6",
                    },
                    {
                        before: "/images/deckbefore1.jpeg",
                        after: "/images/deckafter1.webp",
                        location: "Jeffersontown, KY",
                        label: "Transformation 2 of 6",
                    },
                    {
                        before: "/images/deckbefore2.webp",
                        after: "/images/deckafter2.webp",
                        location: "Middletown, KY",
                        label: "Transformation 3 of 6",
                    },
                    {
                        before: "/images/deckbefore3.png",
                        after: "/images/deckafter3.png",
                        location: "Prospect, KY",
                        label: "Transformation 4 of 6",
                    },
                    {
                        before: "/images/deckbefore4.png",
                        after: "/images/deckafter4.avif",
                        location: "St. Matthews, KY",
                        label: "Transformation 5 of 6",
                    },
                    {
                        before:
                            "/images/Back_Deck_DIY_Patio_Shelter_Before_After_The_Foxes_Photography_2020_01.jpg",
                        after: "/images/IMG_3744.webp",
                        location: "La Grange, KY",
                        label: "Transformation 6 of 6",
                    },
                ]}
            />

            <section id="benefits" />

            <BenefitsGrid />

            <ServicesChips />

            <section id="process" />

            <ProcessStepsDeck />

            <AboutUsVideo
                poster="/images/worker.png"
                videoUrl="https://www.youtube.com/embed/cqG0WZ2JzXk"
                title="Meet Yellowstone Renovation"
                text="We build custom decks with clear pricing, organized project management, clean jobsites, and strong workmanship."
                subline="Serving Louisville, Jeffersontown, Middletown, Prospect and nearby areas"
                pill="Louisville Deck Builder"
                showStars={false}
            />

            <section id="reviews" />

            <ReviewsSixGrid
                title="Beautiful Decks, Loved by Louisville Homeowners"
                highlight="Louisville Homeowners"
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