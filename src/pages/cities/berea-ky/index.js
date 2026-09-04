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

export default function BereaKY() {
    return (
        <Layout>
            <Helmet>
                {/* ✅ Local Berea Keywords */}
                <meta
                    name="keywords"
                    content="Deck Builder Berea KY, Siding Contractor Berea KY, James Hardie Berea, Composite Decks Madison County, Vinyl Siding Berea Kentucky"
                />

                {/* Social Sharing */}
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Deck and Siding Contractor in Berea, KY | Exterior Builder You Can Trust"
                />
                <meta
                    property="og:description"
                    content="Trusted deck and siding contractor in Berea, KY. Yellowstone Renovation installs composite decks, wood decks, and premium siding built for Kentucky weather. Free estimates in Madison County."
                />
                <meta
                    property="og:url"
                    content="https://yellowstonerenovation.com/cities/berea-ky/"
                />
                <meta property="og:site_name" content="Yellowstone Renovation" />
                <meta
                    property="og:image"
                    content="https://yellowstonerenovation.com/images/remodler11.webp"
                />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Deck and Siding Contractor in Berea, KY | Yellowstone Renovation"
                />
                <meta
                    name="twitter:description"
                    content="Upgrade your Berea home with durable siding and custom-built decks. Exterior builder you can trust — free quotes across Madison County."
                />
                <meta
                    name="twitter:image"
                    content="https://yellowstonerenovation.com/images/remodler11.webp"
                />
            </Helmet>

            <SEO
                title="Deck and Siding Contractor in Berea, KY | Exterior Builder You Can Trust"
                description="Yellowstone Renovation provides siding installation and custom deck construction in Berea, KY. We install composite, wood, vinyl, and James Hardie siding — built for Kentucky’s climate. Free estimates across Madison County."
                pathname="/cities/berea-ky/"
                image="https://yellowstonerenovation.com/images/remodler11.webp"
            />

            <Helmet>

                {/* ⭐ LOCAL BUSINESS — Berea KY */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HomeAndConstructionBusiness",
                        "@id": "https://yellowstonerenovation.com/#localbusiness-berea",
                        "name": "Yellowstone Renovation",
                        "url": "https://yellowstonerenovation.com",
                        "image": "https://yellowstonerenovation.com/images/remodler11.webp",
                        "logo": "https://yellowstonerenovation.com/icons/logo.webp",
                        "telephone": "(859) 765-7267",
                        "priceRange": "$$",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "120 Tina Way",
                            "addressLocality": "Nicholasville",
                            "addressRegion": "KY",
                            "postalCode": "40356",
                            "addressCountry": "US"
                        },
                        "areaServed": [
                            "Berea, KY",
                            "Richmond, KY",
                            "Paint Lick, KY",
                            "Madison County, KY"
                        ],
                        "sameAs": [
                            "https://www.facebook.com/p/Yellowstone-Renovation-61551123481170/",
                            "https://www.instagram.com/yellowstone_renovation/",
                            "https://maps.google.com/?q=Yellowstone+Renovation+Berea+KY"
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

                {/* ⭐ ORGANIZATION SCHEMA */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "@id": "https://yellowstonerenovation.com/#organization-berea",
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
                            "addressLocality": "Nicholasville",
                            "addressRegion": "KY",
                            "postalCode": "40356",
                            "addressCountry": "US"
                        }
                    })}
                </script>

                {/* ⭐ PRODUCT SCHEMA — RATING SHOWS IN GOOGLE RESULTS */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Product",
                        "@id": "https://yellowstonerenovation.com/#product-berea",
                        "name": "Siding & Deck Services — Berea, KY",
                        "description": "Professional siding installation, composite deck building, and exterior renovation services in Berea, KY.",
                        "image": "https://yellowstonerenovation.com/images/remodler11.webp",
                        "brand": {
                            "@type": "Brand",
                            "name": "Yellowstone Renovation"
                        },
                        "sku": "SERVICE-BEREA-001",
                        "mpn": "SERVICE-BEREA-001",
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

                {/* ⭐ FAQ SCHEMA — Berea KY */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "How much does siding cost in Berea?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "In Berea, vinyl siding usually ranges from $7–$12 per sq.ft. installed. James Hardie siding ranges from $14–$22 per sq.ft., depending on trim, layout, and architectural details."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do you work in Richmond and Madison County?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes — we provide siding installation, deck building, and full exterior remodeling throughout Berea, Richmond, Paint Lick, Waco, and all of Madison County."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do you offer free estimates in Berea?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Absolutely — we provide free, detailed, no-pressure estimates for siding, decking, and exterior remodeling projects in Berea, KY."
                                }
                            }
                        ]
                    })}
                </script>

            </Helmet>


            <HeroSection
                backgroundImage="/images/deck-builder3.webp"
                customerImage="/images/customer-hero1.png"
                title="Deck and Siding Contractor in Berea, KY"
                subtitle="Transform your Berea home with durable siding and custom-built decks — designed for long-term performance and Kentucky’s weather."
                projectCount="4+ deck and siding projects completed this year across Central Kentucky"
                city="Berea"
                emailTo="yellowstonerenovation@gmail.com"
            />

            <AboutSection />

            <GallerySection
                title="DECK BUILDER GALLERY"
                subtitle="Explore our deck projects — built for Kentucky homes with quality craftsmanship and long-lasting materials."
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
                title="Exterior Remodeling Services in Berea, KY"
                subtitle="From siding to custom decks, we deliver reliable workmanship and durable exterior upgrades for Berea homeowners."
                accentColor="#0a923d"
                bgImage="/images/deck-bg.jpg"
                services={[
                    {
                        title: "Custom Deck Design & Construction",
                        description:
                            "We build high-quality decks designed specifically for Berea homes. Whether you prefer composite or wood — your deck is built to last.",
                        image: "/images/deck11.webp",
                        link: "/cities/berea-ky/deck-builder/",
                    },
                    {
                        title: "Composite & Wood Deck Installation",
                        description:
                            "Choose low-maintenance composite or classic wood decking. Our decks handle Kentucky weather and add beautiful outdoor living space.",
                        image: "/images/deck7.webp",
                        link: "/cities/berea-ky/composite-deck-installation/",
                    },
                    {
                        title: "James Hardie® & Vinyl Siding Installation",
                        description:
                            "Protect your home with durable siding. We install James Hardie fiber cement and premium vinyl siding for long-lasting performance.",
                        image: "/images/remodler1.webp",
                        link: "/cities/berea-ky/vinyl-siding-installation/",
                    },
                    {
                        title: "Windows & Exterior Trim Upgrades",
                        description:
                            "Improve curb appeal and efficiency with professionally installed windows and exterior trim.",
                        image: "/images/remodler6.webp",
                        link: "/windows",
                    },
                ]}
            />

            <SidingPageSection
                city="Berea"
                layoutOrder={[
                    "hero",
                    "deck",
                    "styles",
                    "types",
                    "cost",
                    "extra",
                    "cta",
                ]}

                heroTitle="Berea’s Trusted Deck and Siding Specialists"
                heroText1="Yellowstone Renovation installs durable siding and beautifully crafted decks throughout Berea, KY."
                heroText2="We offer James Hardie, LP SmartSide, vinyl, cedar, and metal siding — plus Trex and TimberTech decks built for long-lasting performance."
                heroImage="/images/deck-builder12.webp"
                heroBottomText="Proudly serving Berea, Richmond, Paint Lick, and all of Madison County — from complete siding replacement to outdoor living transformations."

                deckHeroTitle="Custom Decks in Berea, KY — Built for Comfort & Durability"
                deckHeroText1="A well-designed deck provides valuable outdoor living space for your Berea home."
                deckHeroText2="Choose from composite or natural wood options — all installed with clean craftsmanship and strong structural integrity."
                deckHeroImage="/images/deck-builder8.webp"
                deckServicesTitle="Deck Services We Provide in Berea:"
                deckServices={[
                    "Custom deck design & structural planning",
                    "Trex and TimberTech composite deck installation",
                    "Cedar and pressure-treated wood decks",
                    "Screened porches, pergolas, and covered decks",
                    "Deck resurfacing and repairs",
                    "Lighting, railing, and stair upgrades",
                    "Permits & inspections handled entirely"
                ]}
                deckCostTitle="Deck Cost in Berea, KY"
                deckCostText="Composite decks in Berea typically range from $45–$65 per sq. ft., depending on design and height. Wood decks range from $30–$50 per sq. ft. All quotes include labor, materials, cleanup, and inspections."
                deckImages={[
                    "/images/deck-builder.webp",
                    "/images/deck-builder6.webp",
                    "/images/deck-builder7.webp",
                ]}

                stylesTitle="Siding Styles Popular in Berea"
                stylesIntro="From modern farmhouse styles to traditional Madison County homes, we help homeowners choose siding designs that improve both appearance and durability."
                styles={[
                    {
                        name: "Lap Siding",
                        text: "A strong, classic style ideal for most Berea homes — available in vinyl, fiber cement, and engineered wood.",
                        image: "/images/Lap-Siding.jpg",
                    },
                    {
                        name: "Board and Batten",
                        text: "A popular vertical style that gives Kentucky homes a clean and modern look.",
                        image: "/images/Board-Batten.jpg",
                    },
                    {
                        name: "Shakes & Shingles",
                        text: "Ideal for gables or accent sections — providing a warm, natural, handcrafted appearance.",
                        image: "/images/Shakes-Shingles.jpg",
                    },
                ]}

                sidingTypesTitle="Siding Materials We Install in Berea"
                sidingTypesIntro="We install high-quality siding materials backed by strong warranties and excellent craftsmanship."
                sidingTypes={[
                    { name: "James Hardie Fiber Cement", image: "/images/hardie.jpg" },
                    { name: "LP SmartSide Engineered Wood", image: "/images/SmartSide.jpg" },
                    { name: "Vinyl Siding", image: "/images/Vinyl-Siding.jpg" },
                    { name: "Cedar Siding", image: "/images/Cedar-Siding.jpg" },
                ]}

                costTitle="Siding Installation Cost in Berea, KY"
                costIntro="Costs vary based on home size, trim selections, and material. These are typical siding prices for Berea homes:"
                costTable={[
                    { material: "Vinyl Siding", price: "$6.50 – $9.00 per sq. ft." },
                    { material: "Fiber Cement (James Hardie)", price: "$10.00 – $14.00 per sq. ft." },
                    { material: "Engineered Wood (LP SmartSide)", price: "$9.00 – $12.00 per sq. ft." },
                    { material: "Cedar Wood Siding", price: "$12.00 – $18.00 per sq. ft." },
                    { material: "Metal Siding", price: "$8.00 – $13.00 per sq. ft." },
                ]}

                extraSectionTitle="Why Berea Residents Choose Yellowstone Renovation"
                extraSectionText="Homeowners across Berea trust us for clean workmanship, honest communication, and long-lasting results."
                extraPoints={[
                    "⭐ Local Kentucky crew — no random subcontractors",
                    "⭐ Licensed & insured installers",
                    "⭐ 5-year workmanship warranty on all projects",
                    "⭐ Over 400 exterior projects completed",
                    "⭐ Free, detailed estimates with no pressure"
                ]}

                ctaTitle="Get Your Free Deck or Siding Quote in Berea"
                ctaText="Ready to upgrade your home’s exterior? Contact Yellowstone Renovation for a free, no-obligation estimate — serving Berea, Richmond, and all of Madison County."
                ctaImage="/images/deck-builder13.webp"
            />

            <TestimonialsSection />
            <QuoteSection />
        </Layout>
    );
}
