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

export default function VersaillesKY() {
    return (
        <Layout>
            <Helmet>
                {/* ✅ Local Versailles Keywords */}
                <meta
                    name="keywords"
                    content="Deck and Siding Contractor Versailles KY, Deck Builder Versailles KY, Siding Installation Versailles, James Hardie Versailles KY, Vinyl Siding Woodford County, Exterior Builder Versailles"
                />

                {/* ✅ Social Sharing */}
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Deck and Siding Contractor in Versailles, KY | Exterior Builder You Can Trust"
                />
                <meta
                    property="og:description"
                    content="Trusted deck and siding contractor in Versailles, KY — Yellowstone Renovation installs composite decks, wood decks, and premium siding built for Kentucky weather. Free estimates in Woodford County."
                />
                <meta
                    property="og:url"
                    content="https://yellowstonerenovation.com/cities/versailles-ky/"
                />
                <meta property="og:site_name" content="Yellowstone Renovation" />
                <meta
                    property="og:image"
                    content="https://yellowstonerenovation.com/images/remodler1.webp"
                />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Deck and Siding Contractor in Versailles, KY | Yellowstone Renovation"
                />
                <meta
                    name="twitter:description"
                    content="Upgrade your Versailles home with durable siding and custom-built decks. Exterior builder you can trust — free quotes across Woodford County."
                />
                <meta
                    name="twitter:image"
                    content="https://yellowstonerenovation.com/images/remodler1.webp"
                />
            </Helmet>

            <SEO
                title="Deck and Siding Contractor in Versailles, KY | Exterior Builder You Can Trust"
                description="Yellowstone Renovation installs composite decks, wood decks, vinyl siding, and James Hardie siding in Versailles, KY. Trusted exterior contractor serving all of Woodford County. Free onsite estimates."
                pathname="/cities/versailles-ky/"
                image="https://yellowstonerenovation.com/images/remodler1.webp"
            />

            <Helmet>
                {/* Local Business Schema */}
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
                            "addressLocality": "Versailles",
                            "addressRegion": "KY",
                            "postalCode": "40383",
                            "addressCountry": "US"
                        },
                        "areaServed": [
                            "Versailles, KY",
                            "Midway, KY",
                            "Pisgah, KY",
                            "Woodford County, KY"
                        ],
                        "sameAs": [
                            "https://www.facebook.com/p/Yellowstone-Renovation-61551123481170/",
                            "https://www.instagram.com/yellowstone_renovation/",
                            "https://maps.google.com/?q=Yellowstone+Renovation+Versailles+KY"
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

                {/* Versailles FAQ Schema */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "How much does siding cost in Versailles?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "In Versailles, vinyl siding usually ranges $8–$13 per sq.ft. installed. James Hardie fiber cement siding costs $14–$22 per sq.ft. depending on trim and home size."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do you serve Midway and Pisgah?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes — we provide siding installation, deck construction, and exterior remodeling across Versailles, Midway, Pisgah, and all of Woodford County."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do you offer free estimates in Woodford County?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes — Yellowstone Renovation offers free onsite estimates for siding, decks, windows, and exterior renovations throughout Woodford County."
                                }
                            }
                        ]
                    })}
                </script>
            </Helmet>

            <HeroSection
                backgroundImage="/images/deck-builder3.webp"
                customerImage="/images/customer-hero1.png"
                title="Deck and Siding Contractor in Versailles, KY"
                subtitle="Upgrade your Versailles home with professionally built decks and long-lasting siding — crafted for curb appeal, comfort, and Kentucky weather."
                projectCount="19+ deck and siding projects completed this year in Central Kentucky"
                city="Versailles"
                emailTo="yellowstonerenovation@gmail.com"
            />

            <AboutSection />

            <GallerySection
                title="DECK BUILDER GALLERY"
                subtitle="Explore recently completed deck projects — built strong for Kentucky homeowners. Composite, wood, and custom designs crafted with precision."
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
                title="Exterior Remodeling Services in Versailles, KY"
                subtitle="From deck construction to premium siding, we provide complete exterior remodeling solutions tailored for Versailles and Woodford County."
                accentColor="#0a923d"
                bgImage="/images/deck-bg.jpg"
                services={[
                    {
                        title: "Custom Deck Design & Construction",
                        description:
                            "We design and build strong, beautiful decks that fit the style of Versailles homes. From basic platforms to large outdoor living spaces — we build it all.",
                        image: "/images/deck11.webp",
                        link: "/cities/versailles-ky/deck-builder/",
                    },
                    {
                        title: "Composite & Wood Deck Installation",
                        description:
                            "Choose low-maintenance composite or classic wood decking. Built to withstand Kentucky moisture, storms, and temperature changes.",
                        image: "/images/deck7.webp",
                        link: "/cities/versailles-ky/composite-deck-installation/",
                    },
                    {
                        title: "James Hardie® & Vinyl Siding Installation",
                        description:
                            "High-quality siding that protects your home and boosts curb appeal. We install James Hardie fiber cement and durable vinyl siding designed for long-term performance.",
                        image: "/images/remodler1.webp",
                        link: "/cities/versailles-ky/vinyl-siding-installation/",
                    },
                    {
                        title: "Windows & Exterior Trim Upgrades",
                        description:
                            "Energy-efficient windows and detailed trim installation for improved appearance and better insulation.",
                        image: "/images/remodler6.webp",
                        link: "/windows",
                    },
                ]}
            />

            <SidingPageSection
                city="Versailles"
                layoutOrder={[
                    "hero",
                    "deck",
                    "styles",
                    "types",
                    "cost",
                    "extra",
                    "cta",
                ]}

                heroTitle="Versailles’ Trusted Deck and Siding Experts"
                heroText1="Yellowstone Renovation provides professional siding installation and custom deck construction for Versailles homeowners. We focus on clean work, honest communication, and long-lasting craftsmanship."
                heroText2="Offering James Hardie, LP SmartSide, vinyl, cedar, and metal siding — plus Trex and TimberTech composite decks built to elevate outdoor living."
                heroImage="/images/deck-builder12.webp"
                heroBottomText="Proudly serving Versailles, Midway, Pisgah, and all Woodford County communities."

                deckHeroTitle="Custom Decks Built for Versailles, KY"
                deckHeroText1="A well-built deck transforms your outdoor space, offering relaxation, entertainment, and added home value. We build decks that handle Kentucky’s climate and look great year-round."
                deckHeroText2="Choose Trex, TimberTech, cedar, or pressure-treated wood for a deck built to match your home's style."
                deckHeroImage="/images/deck-builder8.webp"
                deckServicesTitle="Deck Services We Offer in Versailles:"
                deckServices={[
                    "Custom deck design and 3D planning",
                    "Trex and TimberTech composite deck installation",
                    "Cedar and pressure-treated wood decks",
                    "Covered decks, pergolas, screened porches",
                    "Deck resurfacing and repairs",
                    "Railing, stairs, and lighting upgrades",
                    "Permits and inspections handled for you"
                ]}
                deckCostTitle="Deck Cost in Versailles, KY"
                deckCostText="Deck pricing varies by size and design. Composite decks typically range $45–$65 per sq. ft. installed. Wood decks usually cost $30–$50 per sq. ft. All estimates include materials, labor, cleanup, and inspections."
                deckImages={[
                    "/images/deck-builder.webp",
                    "/images/deck-builder6.webp",
                    "/images/deck-builder7.webp",
                ]}

                stylesTitle="Popular Siding Styles for Versailles Homes"
                stylesIntro="We help Versailles homeowners select siding styles that complement their homes, improve durability, and elevate appearance."
                styles={[
                    {
                        name: "Lap Siding",
                        text: "A classic option offering strong protection and clean lines. Available in vinyl, fiber cement, and engineered wood.",
                        image: "/images/Lap-Siding.jpg",
                    },
                    {
                        name: "Board and Batten",
                        text: "A modern farmhouse style popular in Woodford County. Adds height, texture, and visual character.",
                        image: "/images/Board-Batten.jpg",
                    },
                    {
                        name: "Shakes and Shingles",
                        text: "Ideal for gables and accents — offering a handcrafted, textured appearance in cedar or fiber cement.",
                        image: "/images/Shakes-Shingles.jpg",
                    },
                ]}

                sidingTypesTitle="Siding Materials We Install in Versailles"
                sidingTypesIntro="We offer durable siding materials backed by strong warranties and expert installation."
                sidingTypes={[
                    { name: "James Hardie Fiber Cement", image: "/images/hardie.jpg" },
                    { name: "LP SmartSide Engineered Wood", image: "/images/SmartSide.jpg" },
                    { name: "Vinyl Siding", image: "/images/Vinyl-Siding.jpg" },
                    { name: "Cedar Siding", image: "/images/Cedar-Siding.jpg" },
                ]}

                costTitle="Siding Installation Cost in Versailles, KY"
                costIntro="Pricing depends on home size, material, trim, and layout. Typical Versailles siding installation costs:"
                costTable={[
                    { material: "Vinyl Siding", price: "$6.50 – $9.00 per sq. ft." },
                    { material: "Fiber Cement (James Hardie)", price: "$10.00 – $14.00 per sq. ft." },
                    { material: "Engineered Wood (LP SmartSide)", price: "$9.00 – $12.00 per sq. ft." },
                    { material: "Cedar Wood Siding", price: "$12.00 – $18.00 per sq. ft." },
                    { material: "Metal Siding", price: "$8.00 – $13.00 per sq. ft." },
                ]}

                extraSectionTitle="Why Versailles Homeowners Choose Yellowstone Renovation"
                extraSectionText="Homeowners across Woodford County trust our team for quality craftsmanship, clean work, and dependable communication from start to finish."
                extraPoints={[
                    "⭐ Local Kentucky-based crew — no random subcontractors",
                    "⭐ Licensed, insured, and experienced installers",
                    "⭐ 5-year workmanship warranty on all projects",
                    "⭐ 400+ exterior projects completed in Central Kentucky",
                    "⭐ Free, detailed, no-pressure estimates"
                ]}

                ctaTitle="Request a Free Deck or Siding Estimate in Versailles"
                ctaText="Ready to upgrade your home’s exterior? Contact Yellowstone Renovation for a free, no-obligation estimate — serving Versailles, Midway, Pisgah, and all of Woodford County."
                ctaImage="/images/deck-builder13.webp"
            />

            <TestimonialsSection />
            <QuoteSection />
        </Layout>
    );
}
