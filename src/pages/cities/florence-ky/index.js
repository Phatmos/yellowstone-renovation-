import * as React from "react"
import Layout from "../../../components/Layout.js"

import "../../../styles/global.css"
import SEO from "../../../components/SEO.js";
import { Helmet } from "react-helmet";
import HeroSection from "../../../components/HeroSection.js";
import SidingPageSection from "../../../components/SidingPageSection.js";
import AboutSection from "../../../components/AboutSection.js";
import TestimonialsSection from "../../../components/TestimonialsSection.js";
import QuoteSection from "../../../components/QuoteSection.js";
import GallerySection from "../../../components/GallerySection.js"
import Services from "../../../components/Services.js"

export default function FlorenceKY() {
    return (
        <Layout>
            <Helmet>
                {/* ▶ Local Florence Keywords */}
                <meta
                    name="keywords"
                    content="Deck and Siding Contractor Florence KY, Deck Builder Florence KY, Siding Installation Florence KY, James Hardie Florence KY, Vinyl Siding Florence, Exterior Remodeling Florence KY, Boone County Deck Contractor"
                />

                {/* ▶ Social Sharing */}
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Deck and Siding Contractor in Florence, KY | Custom Exterior Remodeling"
                />
                <meta
                    property="og:description"
                    content="Yellowstone Renovation builds custom decks and installs premium siding in Florence, KY. Trusted exterior contractor serving Boone County with free estimates."
                />
                <meta
                    property="og:url"
                    content="https://yellowstonerenovation.com/cities/florence-ky/"
                />
                <meta property="og:site_name" content="Yellowstone Renovation" />
                <meta
                    property="og:image"
                    content="https://yellowstonerenovation.com/images/remodler1.webp"
                />

                {/* ▶ Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Deck and Siding Contractor in Florence, KY | Yellowstone Renovation"
                />
                <meta
                    name="twitter:description"
                    content="From composite decks to James Hardie siding, Yellowstone Renovation helps Florence homeowners upgrade curb appeal and outdoor living."
                />
                <meta
                    name="twitter:image"
                    content="https://yellowstonerenovation.com/images/remodler1.webp"
                />
            </Helmet>

            <SEO
                title="Deck and Siding Contractor in Florence, KY | Custom Exterior Remodeling"
                description="Yellowstone Renovation installs composite decks, wood decks, vinyl siding, and James Hardie siding in Florence, KY. Reliable exterior remodeling contractor serving Boone County with free onsite estimates."
                pathname="/cities/florence-ky/"
                image="https://yellowstonerenovation.com/images/remodler3.webp"
            />
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HomeAndConstructionBusiness",
                        "@id": "https://yellowstonerenovation.com/#business",
                        "name": "Yellowstone Renovation",
                        "url": "https://yellowstonerenovation.com",
                        "image": "https://yellowstonerenovation.com/favicon.png",
                        "telephone": "+1-859-765-7267",
                        "areaServed": [
                            "Lexington KY",
                            "Nicholasville KY",
                            "Georgetown KY",
                            "Richmond KY",
                            "Florence KY"
                        ],
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": "5.0",
                            "reviewCount": "64",
                            "bestRating": "5",
                            "worstRating": "1"
                        }
                    })}
                </script>

            </Helmet>
            <Helmet>

                {/* ▶ Local Business Schema */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HomeAndConstructionBusiness",
                        "name": "Yellowstone Renovation",
                        "url": "https://yellowstonerenovation.com",
                        "image": "https://yellowstonerenovation.com/images/remodler1.webp",
                        "logo": "/icons/logo.webp",
                        "telephone": "859-545-7020",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Florence",
                            "addressRegion": "KY",
                            "postalCode": "41042",
                            "addressCountry": "US"
                        },
                        "areaServed": [
                            "Florence, KY",
                            "Union, KY",
                            "Burlington, KY",
                            "Erlanger, KY",
                            "Boone County, KY"
                        ],
                        "sameAs": [
                            "https://www.facebook.com/p/Yellowstone-Renovation-61551123481170/",
                            "https://www.instagram.com/yellowstone_renovation/",
                            "https://maps.google.com/?q=Yellowstone+Renovation+Florence+KY"
                        ],
                        "serviceType": [
                            "Vinyl Siding Installation",
                            "James Hardie Fiber Cement Siding",
                            "Composite Deck Construction",
                            "Wood Deck Construction",
                            "Exterior Trim Upgrades",
                            "Replacement Windows"
                        ]
                    })}
                </script>

                {/* ▶ Florence FAQ Schema */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "How much does siding installation cost in Florence, KY?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "In Florence, vinyl siding typically costs about $7 to $13 per square foot installed, while James Hardie fiber cement siding usually ranges from $14 to $22 per square foot depending on design details, trim, and home size."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do you build decks in Union and Burlington?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes. Yellowstone Renovation serves Florence, Union, Burlington, Erlanger, and nearby Boone County communities for deck construction and exterior remodeling."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Can I get a free estimate in Boone County?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes. We provide free onsite estimates in Florence and throughout Boone County for siding, decks, windows, and exterior upgrades."
                                }
                            }
                        ]
                    })}
                </script>
            </Helmet>

            {/* ▶ HERO SECTION */}
            <HeroSection
                backgroundImage="/images/deck-builder3.webp"
                customerImage="/images/customer-hero1.png"
                title="Deck and Siding Contractor in Florence, KY"
                subtitle="Upgrade your Florence home with expertly built decks and weather-resistant siding — crafted for long-term durability, curb appeal, and comfort."
                projectCount="31+ deck and siding projects completed this year in Boone County"
                city="Florence"
                emailTo="yellowstonerenovation@gmail.com"
            />

            <AboutSection />

            {/* ▶ GALLERY */}
            <GallerySection
                title="DECK BUILDER GALLERY"
                subtitle="Take a look at our completed deck projects designed for everyday living, outdoor entertaining, and lasting performance in Northern Kentucky."
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
                    "/images/deck/deck-lexington21.webp",
                    "/images/deck/deck-lexington68.webp",
                    "/images/deck/deck-lexington67.webp",
                    "/images/deck/deck-lexington82.webp",
                    "/images/deck/deck-lexington7.webp",
                    "/images/deck/deck-lexington96.webp",
                ]}
            />

            {/* ▶ SERVICES */}
            <Services
                title="Exterior Remodeling Services in Florence, KY"
                subtitle="We help Florence homeowners improve outdoor spaces and protect their homes with premium deck construction and siding installation."
                accentColor="#0a923d"
                bgImage="/images/deck-bg.jpg"
                services={[
                    {
                        title: "Custom Deck Design & Construction",
                        description:
                            "We design and build custom decks that fit your home, yard, and lifestyle — from simple backyard platforms to full outdoor entertaining spaces.",
                        image: "/images/deck11.webp",
                        link: "/cities/florence-ky/deck-builder/",
                    },
                    {
                        title: "Composite & Wood Deck Installation",
                        description:
                            "Choose durable composite decking or timeless pressure-treated and cedar wood options, all built to handle the changing Kentucky seasons.",
                        image: "/images/deck7.webp",
                        link: "/cities/florence-ky/composite-decking/",
                    },
                    {
                        title: "James Hardie® & Vinyl Siding Installation",
                        description:
                            "Protect your Florence home with high-quality siding solutions that boost curb appeal, improve durability, and reduce exterior maintenance.",
                        image: "/images/remodler1.webp",
                        link: "/cities/florence-ky/vinyl-siding/",
                    },
                    {
                        title: "Windows & Exterior Trim Upgrades",
                        description:
                            "Refresh the exterior of your home with replacement windows, trim enhancements, and detail work that completes the look.",
                        image: "/images/remodler6.webp",
                        link: "/cities/florence-ky/windows/",
                    },
                ]}
            />

            {/* ▶ SIDING & DECK PAGE SECTION */}
            <SidingPageSection
                city="Florence"
                layoutOrder={[
                    "hero",
                    "deck",
                    "styles",
                    "types",
                    "cost",
                    "extra",
                    "cta",
                ]}

                heroTitle="Florence’s Trusted Deck & Siding Contractor"
                heroText1="Yellowstone Renovation helps Florence homeowners upgrade their properties with custom decks, durable siding systems, and exterior improvements built for long-term value."
                heroText2="We install James Hardie, LP SmartSide, vinyl, cedar, and metal siding, along with Trex and TimberTech composite decks designed for beauty, comfort, and low maintenance."
                heroImage="/images/deck-builder12.webp"
                heroBottomText="Proudly serving Florence, Union, Burlington, Erlanger, and surrounding Boone County communities."

                deckHeroTitle="Custom Deck Construction in Florence, KY"
                deckHeroText1="A new deck can completely transform the way you use your backyard. We build attractive, structurally sound decks that give Florence homeowners more room to relax, entertain, and enjoy the outdoors."
                deckHeroText2="Whether you want Trex, TimberTech, cedar, or treated lumber, we build every deck with attention to detail and long-term performance in mind."
                deckHeroImage="/images/deck-builder8.webp"
                deckServicesTitle="Deck Services We Provide in Florence:"
                deckServices={[
                    "Custom deck design and layout planning",
                    "Trex and TimberTech composite deck installation",
                    "Pressure-treated wood and cedar decks",
                    "Covered decks, pergolas, and screened-in spaces",
                    "Deck resurfacing and framing repairs",
                    "Railings, stairs, skirting, and lighting upgrades",
                    "Permit support and code-compliant construction"
                ]}
                deckCostTitle="Deck Cost in Florence, KY"
                deckCostText="In Florence, composite decks commonly range from $45 to $68 per square foot installed, while wood decks usually range from $30 to $52 per square foot. Final pricing depends on elevation, stairs, railing style, and material selection."
                deckImages={[
                    "/images/deck-builder.webp",
                    "/images/deck-builder6.webp",
                    "/images/deck-builder7.webp",
                ]}

                stylesTitle="Popular Siding Styles in Florence"
                stylesIntro="We help homeowners choose siding styles that match their home’s architecture while improving durability, efficiency, and curb appeal."
                styles={[
                    {
                        name: "Lap Siding",
                        text: "A clean, classic look that works well on many Florence homes. Available in vinyl, fiber cement, and engineered wood for different budgets and design goals.",
                        image: "/images/Lap-Siding.jpg",
                    },
                    {
                        name: "Board and Batten",
                        text: "A bold vertical style that adds farmhouse character and modern contrast, especially popular for accent walls and full exterior makeovers.",
                        image: "/images/Board-Batten.jpg",
                    },
                    {
                        name: "Shakes and Shingles",
                        text: "Great for gables, dormers, and accent areas where you want more texture and detail. Available in cedar-look and fiber cement options.",
                        image: "/images/Shakes-Shingles.jpg",
                    },
                ]}

                sidingTypesTitle="Siding Materials We Install in Florence"
                sidingTypesIntro="We install exterior siding products chosen for performance, appearance, and reliable protection against moisture, heat, and seasonal weather."
                sidingTypes={[
                    { name: "James Hardie Fiber Cement", image: "/images/hardie.jpg" },
                    { name: "LP SmartSide Engineered Wood", image: "/images/SmartSide.jpg" },
                    { name: "Vinyl Siding", image: "/images/Vinyl-Siding.jpg" },
                    { name: "Cedar Siding", image: "/images/Cedar-Siding.jpg" },
                ]}

                costTitle="Siding Installation Cost in Florence, KY"
                costIntro="Average siding installation prices in Florence vary by material, trim detail, and wall complexity. Typical installed ranges include:"
                costTable={[
                    { material: "Vinyl Siding", price: "$6.50 – $9.50 per sq. ft." },
                    { material: "Fiber Cement (James Hardie)", price: "$10.50 – $15.50 per sq. ft." },
                    { material: "Engineered Wood (LP SmartSide)", price: "$9.00 – $12.50 per sq. ft." },
                    { material: "Cedar Wood Siding", price: "$12.00 – $18.50 per sq. ft." },
                    { material: "Metal Siding", price: "$8.50 – $13.50 per sq. ft." },
                ]}

                extraSectionTitle="Why Florence Homeowners Choose Yellowstone Renovation"
                extraSectionText="Homeowners in Florence choose us because we combine responsive service, strong craftsmanship, and honest guidance from estimate to final walkthrough."
                extraPoints={[
                    "⭐ Licensed and insured Kentucky exterior contractor",
                    "⭐ 5-year workmanship warranty",
                    "⭐ 400+ exterior remodeling projects completed across Central Kentucky",
                    "⭐ Quality-focused installation standards",
                    "⭐ Free, detailed, no-pressure estimates"
                ]}

                ctaTitle="Request a Free Deck or Siding Estimate in Florence"
                ctaText="Planning an exterior renovation in Florence, KY? Contact Yellowstone Renovation today for a free estimate on decks, siding, windows, and exterior upgrades in Boone County."
                ctaImage="/images/deck-builder13.webp"
            />

            <TestimonialsSection />
            <QuoteSection />
        </Layout>
    );
}