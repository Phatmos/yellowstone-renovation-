import * as React from "react"
import Layout from "../../../components/Layout"

import "../../../styles/global.css"
import SEO from "../../../components/SEO";
import { Helmet } from "react-helmet";
import HeroSection from "../../../components/HeroSection";
import SidingPageSection from "../../../components/SidingPageSection";
import AboutSection from "../../../components/AboutSection";
import TestimonialsSection from "../../../components/TestimonialsSection";
import QuoteSection from "../../../components/QuoteSection";
import GallerySection from "../../../components/GallerySection"
import Services from "../../../components/Services.js"

export default function RichmondKY() {
    return (
        <Layout>
            <Helmet>
                {/* ✅ Local Richmond Keywords */}
                <meta
                    name="keywords"
                    content="Deck and Siding Contractor Richmond KY, Deck Builder Richmond KY, Siding Installation Richmond, James Hardie Richmond KY, Vinyl Siding Madison County, Exterior Builder Richmond"
                />

                {/* ✅ Social Sharing */}
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Deck and Siding Contractor in Richmond, KY | Exterior Builder You Can Trust"
                />
                <meta
                    property="og:description"
                    content="Trusted deck and siding contractor in Richmond, KY. Yellowstone Renovation installs composite decks, wood decks, and premium siding designed for Kentucky weather. Free quotes in Madison County."
                />
                <meta
                    property="og:url"
                    content="https://yellowstonerenovation.com/cities/richmond-ky/"
                />
                <meta property="og:site_name" content="Yellowstone Renovation" />
                <meta
                    property="og:image"
                    content="https://yellowstonerenovation.com/images/remodler1.webp"
                />

                {/* ✅ Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Deck and Siding Contractor in Richmond, KY | Yellowstone Renovation"
                />
                <meta
                    name="twitter:description"
                    content="Upgrade your Richmond home with durable siding and custom-built decks. Exterior builder you can trust — free estimates across Madison County."
                />
                <meta
                    name="twitter:image"
                    content="https://yellowstonerenovation.com/images/remodler1.webp"
                />
            </Helmet>

            <SEO
                title="Deck and Siding Contractor in Richmond, KY | Exterior Builder You Can Trust"
                description="Yellowstone Renovation installs composite decks, wood decks, vinyl siding, and James Hardie in Richmond, KY. Reliable exterior contractor offering free estimates across Madison County."
                pathname="/cities/richmond-ky/"
                image="https://yellowstonerenovation.com/images/remodler1.webp"
            />

            <Helmet>
                {/* ✅ Local Business Schema */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HomeAndConstructionBusiness",
                        "name": "Yellowstone Renovation",
                        "url": "https://yellowstonerenovation.com",
                        "image": "https://yellowstonerenovation.com/images/remodler1.webp",
                        "logo": "https://yellowstonerenovation.com/icons/logo.webp",
                        "telephone": "859-545-7020",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Richmond",
                            "addressRegion": "KY",
                            "postalCode": "40475",
                            "addressCountry": "US"
                        },
                        "areaServed": [
                            "Richmond, KY",
                            "Berea, KY",
                            "Waco, KY",
                            "Madison County, KY"
                        ],
                        "sameAs": [
                            "https://www.facebook.com/p/Yellowstone-Renovation-61551123481170/",
                            "https://www.instagram.com/yellowstone_renovation/",
                            "https://maps.google.com/?q=Yellowstone+Renovation+Richmond+KY"
                        ],
                        "serviceType": [
                            "Vinyl Siding Installation",
                            "James Hardie Fiber Cement",
                            "Composite Decks",
                            "Wood Decks",
                            "Replacement Windows",
                            "Exterior Repairs"
                        ]
                    })}
                </script>

                {/* ✅ Richmond FAQ Schema */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "How much does siding cost in Richmond?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Vinyl siding in Richmond typically ranges from $8–$13 per sq.ft. installed. James Hardie siding costs around $14–$22 per sq.ft. depending on trim and layout."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do you serve Berea and Waco?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes — we frequently work in Richmond, Berea, Waco, and all Madison County areas providing siding installation and custom deck building."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do you offer free estimates in Madison County?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes — Yellowstone Renovation provides free onsite estimates for siding, deck construction, and exterior remodeling in Richmond and across all Madison County."
                                }
                            }
                        ]
                    })}
                </script>
            </Helmet>

            <HeroSection
                backgroundImage="/images/deck-builder3.webp"
                customerImage="/images/customer-hero1.png"
                title="Deck and Siding Contractor in Richmond, KY"
                subtitle="Transform your Richmond home with custom-built decks and durable siding — designed for curb appeal, comfort, and long-term performance in Kentucky’s weather."
                projectCount="27+ deck and siding projects completed this year across Central Kentucky"
                city="Richmond"
                emailTo="yellowstonerenovation@gmail.com"
            />

            <AboutSection />

            <GallerySection
                title="DECK BUILDER GALLERY"
                subtitle="Browse our deck projects — built strong for Kentucky homes. Composite, wood, and custom designs crafted for durability and style."
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
                title="Exterior Remodeling Services in Richmond, KY"
                subtitle="From custom decks to premium siding, we provide complete exterior remodeling solutions tailored to your Richmond home."
                accentColor="#0a923d"
                bgImage="/images/deck-bg.jpg"
                services={[
                    {
                        title: "Custom Deck Design & Construction",
                        description:
                            "We design and build long-lasting decks suited for Richmond homes. Whether it’s a simple backyard platform or a full outdoor living space, our craftsmanship stands out.",
                        image: "/images/deck11.webp",
                        link: "/cities/richmond-ky/deck-builder/",
                    },
                    {
                        title: "Composite & Wood Deck Installation",
                        description:
                            "Choose between low-maintenance composite or natural wood. Each deck is built to withstand Kentucky humidity, storms, and seasonal changes.",
                        image: "/images/deck7.webp",
                        link: "/cities/richmond-ky/composite-deck-installation/",
                    },
                    {
                        title: "James Hardie® & Vinyl Siding Installation",
                        description:
                            "Protect your Richmond home with durable siding solutions. We install premium James Hardie fiber cement and high-quality vinyl siding built for long-term performance.",
                        image: "/images/remodler1.webp",
                        link: "/cities/richmond-ky/vinyl-siding-installation/",
                    },
                    {
                        title: "Windows & Exterior Trim Upgrades",
                        description:
                            "Enhance curb appeal and improve energy efficiency with new windows and expert exterior trim work.",
                        image: "/images/remodler6.webp",
                        link: "/windows",
                    },
                ]}
            />

            <SidingPageSection
                city="Richmond"
                layoutOrder={[
                    "hero",
                    "deck",
                    "styles",
                    "types",
                    "cost",
                    "extra",
                    "cta",
                ]}

                heroTitle="Richmond’s Trusted Deck and Siding Experts"
                heroText1="Yellowstone Renovation helps Richmond homeowners upgrade their exterior with high-quality siding installation and custom deck construction. Our work is clean, durable, and built to last."
                heroText2="We install James Hardie, LP SmartSide, vinyl, cedar, and metal siding — as well as Trex and TimberTech composite decks built for comfort and long-term durability."
                heroImage="/images/deck-builder12.webp"
                heroBottomText="Proudly serving Richmond, Berea, Waco, and all Madison County with premium exterior remodeling."

                deckHeroTitle="Custom Decks Built for Richmond, KY"
                deckHeroText1="A well-designed deck creates new outdoor space for relaxing, hosting, and spending time with family. We build decks that feel great, look amazing, and withstand Kentucky weather."
                deckHeroText2="Choose from Trex, TimberTech, cedar, or pressure-treated wood — all installed with precision and care."
                deckHeroImage="/images/deck-builder8.webp"
                deckServicesTitle="Deck Services We Offer in Richmond:"
                deckServices={[
                    "Custom deck design and layout planning",
                    "Trex and TimberTech composite deck installation",
                    "Pressure-treated and cedar wood decks",
                    "Covered decks, pergolas, and screened porches",
                    "Deck resurfacing and structural repairs",
                    "Stair, railing, and lighting installations",
                    "Permits and inspections handled start to finish"
                ]}
                deckCostTitle="Average Deck Cost in Richmond, KY"
                deckCostText="Composite decks in Richmond typically range from $45–$65 per sq. ft., while wood decks average $30–$50 per sq. ft. Each estimate includes labor, materials, cleanup, and inspections."
                deckImages={[
                    "/images/deck-builder.webp",
                    "/images/deck-builder6.webp",
                    "/images/deck-builder7.webp",
                ]}

                stylesTitle="Popular Siding Styles for Richmond Homes"
                stylesIntro="We help Richmond homeowners pick siding styles that improve curb appeal and withstand weather — from traditional to modern designs."
                styles={[
                    {
                        name: "Lap Siding",
                        text: "Timeless design, durable protection, and low maintenance. Works well on most Richmond homes.",
                        image: "/images/Lap-Siding.jpg",
                    },
                    {
                        name: "Board and Batten",
                        text: "A vertical, modern look popular in new builds and farmhouse-style homes.",
                        image: "/images/Board-Batten.jpg",
                    },
                    {
                        name: "Shakes and Shingles",
                        text: "Perfect for accents and gables — offers a handcrafted, textured look.",
                        image: "/images/Shakes-Shingles.jpg",
                    },
                ]}

                sidingTypesTitle="Siding Materials We Install in Richmond"
                sidingTypesIntro="Our siding materials are built to last and backed by trusted brands and professional installation."
                sidingTypes={[
                    { name: "James Hardie Fiber Cement", image: "/images/hardie.jpg" },
                    { name: "LP SmartSide Engineered Wood", image: "/images/SmartSide.jpg" },
                    { name: "Vinyl Siding", image: "/images/Vinyl-Siding.jpg" },
                    { name: "Cedar Siding", image: "/images/Cedar-Siding.jpg" },
                ]}

                costTitle="Siding Installation Cost in Richmond, KY"
                costIntro="Pricing varies based on home size, material choice, and trim details. Typical Richmond siding project cost ranges include:"
                costTable={[
                    { material: "Vinyl Siding", price: "$6.50 – $9.00 per sq. ft." },
                    { material: "Fiber Cement (James Hardie)", price: "$10.00 – $14.00 per sq. ft." },
                    { material: "Engineered Wood (LP SmartSide)", price: "$9.00 – $12.00 per sq. ft." },
                    { material: "Cedar Wood Siding", price: "$12.00 – $18.00 per sq. ft." },
                    { material: "Metal Siding", price: "$8.00 – $13.00 per sq. ft." },
                ]}

                extraSectionTitle="Why Richmond Homeowners Choose Yellowstone Renovation"
                extraSectionText="Homeowners across Madison County trust our team for quality craftsmanship, clean work, and honest communication from start to finish."
                extraPoints={[
                    "⭐ Local Kentucky-based crew — no random subcontractors",
                    "⭐ Licensed, insured, and experienced installers",
                    "⭐ 5-year workmanship warranty",
                    "⭐ 400+ successful exterior projects in Central Kentucky",
                    "⭐ Free detailed estimates — no pressure"
                ]}

                ctaTitle="Request a Free Deck or Siding Estimate in Richmond"
                ctaText="Thinking about improving your home’s exterior? Get a free, no-obligation estimate from Yellowstone Renovation — serving Richmond, Berea, Waco, and all Madison County."
                ctaImage="/images/deck-builder13.webp"
            />

            <TestimonialsSection />
            <QuoteSection />
        </Layout>
    );
}
