import * as React from "react"
import Layout from "../../../components/Layout"

import "../../../styles/global.css"
import SEO from "../../../components/SEO"
import { Helmet } from "react-helmet"
import HeroSection from "../../../components/HeroSection"
import SidingPageSection from "../../../components/SidingPageSection"
import AboutSection from "../../../components/AboutSection"
import TestimonialsSection from "../../../components/TestimonialsSection"
import QuoteSection from "../../../components/QuoteSection"
import GallerySection from "../../../components/GallerySection"
import Services from "../../../components/Services.js"

export default function KingstonKY() {
    return (
        <Layout>
            <Helmet>
                <meta
                    name="keywords"
                    content="Deck Builder Kingston KY, Siding Contractor Kingston KY, James Hardie Siding Kingston, Vinyl Siding Kingston KY, Composite Deck Installation Kingston, Outdoor Living Contractor Kingston KY, Fiber Cement Siding Madison County KY, Exterior Remodel Kingston Kentucky, Deck Repair Kingston KY, House Siding Replacement Kingston"
                />

                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Deck and Siding Contractor in Kingston, KY | Trusted Exterior Remodeling"
                />
                <meta
                    property="og:description"
                    content="Top-rated deck builder and siding contractor in Kingston, KY. Yellowstone Renovation installs composite decks, wood decks, and premium siding systems built for Kentucky weather."
                />
                <meta
                    property="og:url"
                    content="https://yellowstonerenovation.com/cities/kingston-ky/"
                />
                <meta property="og:site_name" content="Yellowstone Renovation" />
                <meta
                    property="og:image"
                    content="https://yellowstonerenovation.com/images/remodler1.webp"
                />

                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Deck and Siding Contractor in Kingston, KY | Yellowstone Renovation"
                />
                <meta
                    name="twitter:description"
                    content="Need siding or a custom deck in Kingston, KY? We deliver durable exterior upgrades, clean installs, and free estimates across Madison County."
                />
                <meta
                    name="twitter:image"
                    content="https://yellowstonerenovation.com/images/remodler1.webp"
                />
            </Helmet>

            <SEO
                title="Deck and Siding Contractor in Kingston, KY | Exterior Builder Near You"
                description="Yellowstone Renovation provides deck construction and siding installation in Kingston, KY. We install composite and wood decks, vinyl siding, James Hardie, LP SmartSide, and exterior trim designed for long-term performance."
                pathname="/cities/kingston-ky/"
                image="https://yellowstonerenovation.com/images/remodler1.webp"
            />

            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HomeAndConstructionBusiness",
                        "@id": "https://yellowstonerenovation.com/#localbusiness-kingston",
                        name: "Yellowstone Renovation",
                        url: "https://yellowstonerenovation.com",
                        image: "https://yellowstonerenovation.com/images/remodler1.webp",
                        logo: "https://yellowstonerenovation.com/icons/logo.webp",
                        telephone: "(859) 765-7267",
                        priceRange: "$$",
                        address: {
                            "@type": "PostalAddress",
                            streetAddress: "120 Tina Way",
                            addressLocality: "Kingston",
                            addressRegion: "KY",
                            postalCode: "40442",
                            addressCountry: "US",
                        },
                        areaServed: [
                            "Kingston, KY",
                            "Berea, KY",
                            "Richmond, KY",
                            "Madison County, KY",
                        ],
                        sameAs: [
                            "https://www.facebook.com/p/Yellowstone-Renovation-61551123481170/",
                            "https://www.instagram.com/yellowstone_renovation/",
                            "https://maps.google.com/?q=Yellowstone+Renovation+Kingston+KY",
                        ],
                        serviceType: [
                            "Deck Building",
                            "Vinyl Siding Installation",
                            "James Hardie Fiber Cement Siding",
                            "LP SmartSide Installation",
                            "Composite Deck Installation",
                            "Exterior Repairs",
                        ],
                        aggregateRating: {
                            "@type": "AggregateRating",
                            ratingValue: "4.9",
                            reviewCount: 87,
                        },
                    })}
                </script>

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: [
                            {
                                "@type": "Question",
                                name: "What is the average siding cost in Kingston, KY?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Most Kingston siding projects range from $6.50-$14 per sq.ft. installed depending on material, trim details, and wall preparation.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Do you install Trex and TimberTech decks in Kingston?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes. We design and install Trex and TimberTech composite decks, plus pressure-treated and cedar wood decks for Kingston homeowners.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Do you offer free estimates in Madison County?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, we provide free no-obligation estimates in Kingston, Richmond, Berea, and nearby Madison County communities.",
                                },
                            },
                        ],
                    })}
                </script>
            </Helmet>

            <HeroSection
                backgroundImage="/images/deck-builder3.webp"
                customerImage="/images/customer-hero1.png"
                title="Deck and Siding Contractor in Kingston, KY"
                subtitle="Upgrade your Kingston property with custom decks and weather-resistant siding engineered for Kentucky humidity, storms, and seasonal changes."
                projectCount="32+ deck and siding projects completed this year across Central Kentucky"
                city="Kingston"
                emailTo="yellowstonerenovation@gmail.com"
            />

            <AboutSection />

            <GallerySection
                title="KINGSTON DECK BUILDER GALLERY"
                subtitle="See outdoor transformations from across Central Kentucky: composite decks, wood decks, and custom layouts built for durability and style."
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

            <Services
                title="Exterior Remodeling Services in Kingston, KY"
                subtitle="From full siding replacement to custom deck builds, we deliver clear communication and long-lasting craftsmanship."
                accentColor="#0a923d"
                bgImage="/images/deck-bg.jpg"
                services={[
                    {
                        title: "Custom Deck Design & Construction",
                        description:
                            "We build tailored decks for Kingston homes, including elevated, ground-level, and multi-zone outdoor living spaces.",
                        image: "/images/deck11.webp",
                        link: "/cities/kingston-ky/deck-builder/",
                    },
                    {
                        title: "Composite & Wood Deck Installation",
                        description:
                            "Choose low-maintenance composite or classic natural wood. Every deck is engineered for structural safety and everyday use.",
                        image: "/images/deck7.webp",
                        link: "/cities/kingston-ky/composite-deck-installation/",
                    },
                    {
                        title: "James Hardie® & Vinyl Siding Installation",
                        description:
                            "Improve protection, efficiency, and curb appeal with premium siding options that perform in Kentucky weather.",
                        image: "/images/remodler1.webp",
                        link: "/cities/kingston-ky/vinyl-siding-installation/",
                    },
                    {
                        title: "Windows & Exterior Trim Upgrades",
                        description:
                            "Boost energy efficiency with replacement windows and detail-focused trim installation.",
                        image: "/images/remodler6.webp",
                        link: "/windows",
                    },
                ]}
            />

            <SidingPageSection
                city="Kingston"
                layoutOrder={["hero", "deck", "styles", "types", "cost", "extra", "cta"]}
                heroTitle="Kingston's Reliable Deck and Siding Team"
                heroText1="Yellowstone Renovation helps Kingston homeowners modernize exteriors with dependable siding systems and custom outdoor spaces."
                heroText2="We install James Hardie, LP SmartSide, vinyl, cedar, and metal siding, plus Trex and TimberTech composite decking."
                heroImage="/images/deck-builder12.webp"
                heroBottomText="Serving Kingston, Berea, Richmond, and greater Madison County with complete exterior remodeling solutions."
                deckHeroTitle="Custom Decks in Kingston, KY — Built for Everyday Living"
                deckHeroText1="A professionally built deck expands how you use your home, from quiet mornings to family cookouts and weekend gatherings."
                deckHeroText2="We design each deck around your layout, budget, and preferred materials."
                deckHeroImage="/images/deck-builder8.webp"
                deckServicesTitle="Deck Services We Provide in Kingston:"
                deckServices={[
                    "Custom deck design and planning",
                    "Trex and TimberTech composite installation",
                    "Pressure-treated and cedar wood decks",
                    "Covered decks, pergolas, and screened options",
                    "Deck resurfacing and structural repairs",
                    "Stair, railing, and lighting upgrades",
                    "Permitting and inspections start-to-finish",
                ]}
                deckCostTitle="Deck Cost in Kingston, KY"
                deckCostText="Composite decks in Kingston usually range from $45-$65 per sq.ft., while wood decks often range from $30-$50 per sq.ft. Pricing depends on layout complexity, elevation, and railing choices."
                deckImages={[
                    "/images/deck-builder.webp",
                    "/images/deck-builder6.webp",
                    "/images/deck-builder7.webp",
                ]}
                stylesTitle="Popular Siding Styles in Kingston"
                stylesIntro="Whether your home is traditional or modern, we help you choose siding profiles that improve appearance and weather protection."
                styles={[
                    {
                        name: "Lap Siding",
                        text: "Classic horizontal lines with dependable performance, available in fiber cement, vinyl, and engineered wood.",
                        image: "/images/Lap-Siding.jpg",
                    },
                    {
                        name: "Board and Batten",
                        text: "Vertical lines that add bold architectural detail and farmhouse character.",
                        image: "/images/Board-Batten.jpg",
                    },
                    {
                        name: "Shakes & Shingles",
                        text: "Ideal for accent walls, dormers, or full facades when you want texture and visual depth.",
                        image: "/images/Shakes-Shingles.jpg",
                    },
                ]}
                sidingTypesTitle="Siding Materials We Install in Kingston"
                sidingTypesIntro="We install proven siding products backed by manufacturer warranties and expert installation."
                sidingTypes={[
                    { name: "James Hardie Fiber Cement", image: "/images/hardie.jpg" },
                    { name: "LP SmartSide Engineered Wood", image: "/images/SmartSide.jpg" },
                    { name: "Vinyl Siding", image: "/images/Vinyl-Siding.jpg" },
                    { name: "Cedar Siding", image: "/images/Cedar-Siding.jpg" },
                ]}
                costTitle="Siding Installation Cost in Kingston, KY"
                costIntro="Final cost depends on square footage, material choice, trim package, and job complexity. Typical ranges include:"
                costTable={[
                    { material: "Vinyl Siding", price: "$6.50 - $9.00 per sq. ft." },
                    { material: "Fiber Cement (James Hardie)", price: "$10.00 - $14.00 per sq. ft." },
                    { material: "Engineered Wood (LP SmartSide)", price: "$9.00 - $12.00 per sq. ft." },
                    { material: "Cedar Wood Siding", price: "$12.00 - $18.00 per sq. ft." },
                    { material: "Metal Siding", price: "$8.00 - $13.00 per sq. ft." },
                ]}
                extraSectionTitle="Why Kingston Homeowners Choose Yellowstone Renovation"
                extraSectionText="We focus on straightforward pricing, dependable scheduling, and quality craftsmanship from start to finish."
                extraPoints={[
                    "Local Kentucky crew with consistent quality control",
                    "Licensed and insured exterior remodeling specialists",
                    "5-year workmanship warranty",
                    "400+ exterior projects completed across Central Kentucky",
                    "Detailed, free, no-pressure estimates",
                ]}
                ctaTitle="Get a Free Deck or Siding Quote in Kingston"
                ctaText="Planning an exterior upgrade? Contact Yellowstone Renovation for a free estimate in Kingston and nearby Madison County areas."
                ctaImage="/images/deck-builder13.webp"
            />

            <TestimonialsSection />
            <QuoteSection />
        </Layout>
    )
}