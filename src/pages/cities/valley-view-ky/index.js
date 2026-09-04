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

export default function ValleyViewKY() {
    return (
        <Layout>
            <Helmet>
                <meta
                    name="keywords"
                    content="Deck Builder Valley View KY, Siding Contractor Valley View KY, James Hardie Valley View, Composite Decks Fayette County, Vinyl Siding Valley View, Exterior Remodeling Valley View Kentucky, Fiber Cement Siding Valley View"
                />

                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Deck and Siding Contractor in Valley View, KY | Exterior Builder You Can Count On"
                />
                <meta
                    property="og:description"
                    content="Trusted deck and siding contractor in Valley View, KY. Yellowstone Renovation installs composite decks, wood decks, and premium siding built for Kentucky weather. Free estimates in Fayette County."
                />
                <meta
                    property="og:url"
                    content="https://yellowstonerenovation.com/cities/valley-view-ky/"
                />
                <meta property="og:site_name" content="Yellowstone Renovation" />
                <meta
                    property="og:image"
                    content="https://yellowstonerenovation.com/images/remodler1.webp"
                />

                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Deck and Siding Contractor in Valley View, KY | Yellowstone Renovation"
                />
                <meta
                    name="twitter:description"
                    content="Upgrade your Valley View home with durable siding and custom-built decks. Exterior builder you can trust — free quotes across Fayette County."
                />
                <meta
                    name="twitter:image"
                    content="https://yellowstonerenovation.com/images/remodler1.webp"
                />
            </Helmet>

            <SEO
                title="Deck and Siding Contractor in Valley View, KY | Exterior Builder You Can Trust"
                description="Yellowstone Renovation provides professional siding installation and custom deck construction in Valley View, KY. We install composite, wood, vinyl, and James Hardie siding — designed for Kentucky's weather. Free estimates across Fayette County."
                pathname="/cities/valley-view-ky/"
                image="https://yellowstonerenovation.com/images/remodler1.webp"
            />

            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HomeAndConstructionBusiness",
                        "@id": "https://yellowstonerenovation.com/#localbusiness-valley-view",
                        "name": "Yellowstone Renovation",
                        "url": "https://yellowstonerenovation.com",
                        "image": "https://yellowstonerenovation.com/images/remodler1.webp",
                        "logo": "https://yellowstonerenovation.com/icons/logo.webp",
                        "telephone": "(859) 765-7267",
                        "priceRange": "$$",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "120 Tina Way",
                            "addressLocality": "Valley View",
                            "addressRegion": "KY",
                            "postalCode": "40509",
                            "addressCountry": "US"
                        },
                        "areaServed": [
                            "Valley View, KY",
                            "Lexington, KY",
                            "Fayette County, KY",
                            "Nicholasville, KY"
                        ],
                        "sameAs": [
                            "https://www.facebook.com/p/Yellowstone-Renovation-61551123481170/",
                            "https://www.instagram.com/yellowstone_renovation/",
                            "https://maps.google.com/?q=Yellowstone+Renovation+Valley+View+KY"
                        ],
                        "serviceType": [
                            "Vinyl Siding Installation",
                            "James Hardie Fiber Cement",
                            "Composite Decks",
                            "Wood Decks",
                            "Replacement Windows",
                            "Exterior Repairs"
                        ],
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": "4.9",
                            "reviewCount": 87
                        }
                    })}
                </script>

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "@id": "https://yellowstonerenovation.com/#organization-valley-view",
                        "name": "Yellowstone Renovation",
                        "url": "https://yellowstonerenovation.com",
                        "logo": "https://yellowstonerenovation.com/icons/logo.webp",
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "telephone": "(859) 765-7267",
                            "contactType": "customer support",
                            "areaServed": "US"
                        },
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "120 Tina Way",
                            "addressLocality": "Valley View",
                            "addressRegion": "KY",
                            "postalCode": "40509",
                            "addressCountry": "US"
                        }
                    })}
                </script>

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Product",
                        "@id": "https://yellowstonerenovation.com/#product-valley-view",
                        "name": "Siding & Deck Services — Valley View, KY",
                        "description": "Professional siding installation, deck building, and exterior renovation services in Valley View and Fayette County.",
                        "image": "https://yellowstonerenovation.com/images/remodler1.webp",
                        "brand": {
                            "@type": "Brand",
                            "name": "Yellowstone Renovation"
                        },
                        "sku": "SERVICE-VALLEYVIEW-001",
                        "mpn": "SERVICE-VALLEYVIEW-001",
                        "url": "https://yellowstonerenovation.com",
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": "4.9",
                            "reviewCount": 87
                        },
                        "offers": {
                            "@type": "Offer",
                            "url": "https://yellowstonerenovation.com",
                            "priceCurrency": "USD",
                            "price": "1",
                            "availability": "https://schema.org/InStock"
                        }
                    })}
                </script>

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "How much does siding cost in Valley View?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "In Valley View, vinyl siding typically ranges from $7-$12 per sq.ft. installed. James Hardie siding usually runs $14-$21 per sq.ft. depending on trim, layout, and home size."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do you work throughout Fayette County?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes - we serve Valley View, Lexington, and nearby Fayette County communities with siding installation, deck building, and exterior remodeling."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Are estimates free in Valley View?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes - we provide free, no-obligation estimates for all siding and deck projects throughout Valley View and Fayette County."
                                }
                            }
                        ]
                    })}
                </script>

            </Helmet>

            <HeroSection
                backgroundImage="/images/deck-builder3.webp"
                customerImage="/images/customer-hero1.png"
                title="Deck and Siding Contractor in Valley View, KY"
                subtitle="Upgrade your Valley View home with custom-built decks and durable siding — designed for long-term performance and curb appeal in Kentucky's weather."
                projectCount="32+ deck and siding projects completed this year across Central Kentucky"
                city="Valley View"
                emailTo="yellowstonerenovation@gmail.com"
            />

            <AboutSection />

            <GallerySection
                title="DECK BUILDER GALLERY"
                subtitle="Browse our deck projects — uniquely crafted for Kentucky homes. Composite, wood, and custom designs built to last."
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
                title="Exterior Remodeling Services in Valley View, KY"
                subtitle="From decks to siding, we deliver clean workmanship, honest communication, and long-lasting results."
                accentColor="#0a923d"
                bgImage="/images/deck-bg.jpg"
                services={[
                    {
                        title: "Custom Deck Design & Construction",
                        description:
                            "We build strong, beautiful decks tailored to Valley View homes. From simple backyard platforms to multi-level outdoor spaces - built to last.",
                        image: "/images/deck11.webp",
                        link: "/cities/valley-view-ky/deck-builder/",
                    },
                    {
                        title: "Composite & Wood Deck Installation",
                        description:
                            "Choose composite for low maintenance or wood for natural beauty. Our decks withstand Kentucky storms, humidity, and season changes.",
                        image: "/images/deck7.webp",
                        link: "/cities/valley-view-ky/composite-deck-installation/",
                    },
                    {
                        title: "James Hardie® & Vinyl Siding Installation",
                        description:
                            "Protect your home with durable siding. We install James Hardie fiber cement and high-quality vinyl siding for long-term performance.",
                        image: "/images/remodler1.webp",
                        link: "/cities/valley-view-ky/vinyl-siding-installation/",
                    },
                    {
                        title: "Windows & Exterior Trim Upgrades",
                        description:
                            "Improve curb appeal and energy efficiency with new windows and precision exterior trim work.",
                        image: "/images/remodler6.webp",
                        link: "/windows",
                    },
                ]}
            />

            <SidingPageSection
                city="Valley View"
                layoutOrder={[
                    "hero",
                    "deck",
                    "styles",
                    "types",
                    "cost",
                    "extra",
                    "cta",
                ]}

                heroTitle="Valley View's Trusted Deck and Siding Specialists"
                heroText1="Yellowstone Renovation helps Valley View homeowners upgrade their exteriors with professional siding installation and beautifully crafted decks."
                heroText2="We install James Hardie, LP SmartSide, vinyl, cedar, and metal siding - plus Trex and TimberTech composite decks built for strength and beauty."
                heroImage="/images/deck-builder12.webp"
                heroBottomText="Serving Valley View, Lexington, and nearby Fayette County neighborhoods - from full siding replacement to outdoor living transformations."

                deckHeroTitle="Custom Decks in Valley View, KY - Built for Comfort & Longevity"
                deckHeroText1="A well-designed deck adds valuable outdoor living space for relaxing, cooking out, and spending time with family."
                deckHeroText2="We offer composite and wood options, tailored for Valley View homes and built to last."
                deckHeroImage="/images/deck-builder8.webp"
                deckServicesTitle="Deck Services We Provide in Valley View:"
                deckServices={[
                    "Custom deck design & layout planning",
                    "Trex and TimberTech composite deck installation",
                    "Cedar and pressure-treated wood decks",
                    "Covered decks, pergolas, and screened porches",
                    "Deck resurfacing and structural repairs",
                    "Stair, railing, and lighting upgrades",
                    "Permitting and inspections handled start-to-finish"
                ]}
                deckCostTitle="Deck Cost in Valley View, KY"
                deckCostText="Composite decks in Valley View typically cost $45-$65 per sq. ft., depending on layout and height. Wood decks range from $30-$50 per sq. ft. Every project includes materials, labor, cleanup, and inspections."
                deckImages={[
                    "/images/deck-builder.webp",
                    "/images/deck-builder6.webp",
                    "/images/deck-builder7.webp",
                ]}

                stylesTitle="Siding Styles Popular in Valley View"
                stylesIntro="From modern farmhouse styles to traditional Kentucky homes, we help Valley View homeowners choose siding designs that elevate curb appeal and provide long-term durability."
                styles={[
                    {
                        name: "Lap Siding",
                        text: "A timeless and durable style ideal for most Valley View homes. Available in fiber cement, vinyl, and engineered wood.",
                        image: "/images/Lap-Siding.jpg",
                    },
                    {
                        name: "Board and Batten",
                        text: "A vertical modern style that adds character and depth. Popular in newer Fayette County builds.",
                        image: "/images/Board-Batten.jpg",
                    },
                    {
                        name: "Shakes & Shingles",
                        text: "Perfect for accent areas, gables, or full facades - offering a warm, handcrafted appearance.",
                        image: "/images/Shakes-Shingles.jpg",
                    },
                ]}

                sidingTypesTitle="Siding Materials We Install in Valley View"
                sidingTypesIntro="We install top-quality siding materials backed by strong warranties and clean craftsmanship."
                sidingTypes={[
                    { name: "James Hardie Fiber Cement", image: "/images/hardie.jpg" },
                    { name: "LP SmartSide Engineered Wood", image: "/images/SmartSide.jpg" },
                    { name: "Vinyl Siding", image: "/images/Vinyl-Siding.jpg" },
                    { name: "Cedar Siding", image: "/images/Cedar-Siding.jpg" },
                ]}

                costTitle="Siding Installation Cost in Valley View, KY"
                costIntro="Pricing depends on home size, trim options, material, and layout. These are typical siding price ranges for Valley View:"
                costTable={[
                    { material: "Vinyl Siding", price: "$6.50 - $9.00 per sq. ft." },
                    { material: "Fiber Cement (James Hardie)", price: "$10.00 - $14.00 per sq. ft." },
                    { material: "Engineered Wood (LP SmartSide)", price: "$9.00 - $12.00 per sq. ft." },
                    { material: "Cedar Wood Siding", price: "$12.00 - $18.00 per sq. ft." },
                    { material: "Metal Siding", price: "$8.00 - $13.00 per sq. ft." },
                ]}

                extraSectionTitle="Why Valley View Residents Choose Yellowstone Renovation"
                extraSectionText="We provide honest pricing, clean workmanship, and reliable communication - earning trust across Valley View and Fayette County."
                extraPoints={[
                    "⭐ Local Kentucky crew - no random subcontractors",
                    "⭐ Licensed, insured, and highly experienced installers",
                    "⭐ 5-year workmanship warranty on all projects",
                    "⭐ Over 400 exterior projects completed in Central Kentucky",
                    "⭐ Free, detailed, no-pressure estimates"
                ]}

                ctaTitle="Get Your Free Deck or Siding Quote in Valley View"
                ctaText="Ready to transform your home's exterior? Contact Yellowstone Renovation for a free estimate - serving Valley View, Lexington, and nearby Fayette County."
                ctaImage="/images/deck-builder13.webp"
            />

            <TestimonialsSection />
            <QuoteSection />
        </Layout>
    );
}