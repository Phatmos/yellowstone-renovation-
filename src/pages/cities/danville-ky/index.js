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

export default function DanvilleKY() {
    return (
        <Layout>
            <Helmet>
                {/* ▶ Local Danville Keywords */}
                <meta
                    name="keywords"
                    content="Deck and Siding Contractor Danville KY, Deck Builder Danville KY, Siding Installation Danville, James Hardie Danville KY, Vinyl Siding Boyle County, Exterior Builder Danville"
                />

                {/* ▶ Social Sharing */}
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Deck and Siding Contractor in Danville, KY | Exterior Builder You Can Trust"
                />
                <meta
                    property="og:description"
                    content="Top-rated deck and siding contractor in Danville, KY — Yellowstone Renovation installs composite decks, wood decks, and premium siding. Free estimates in Boyle County."
                />
                <meta
                    property="og:url"
                    content="https://yellowstonerenovation.com/cities/danville-ky/"
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
                    content="Deck and Siding Contractor in Danville, KY | Yellowstone Renovation"
                />
                <meta
                    name="twitter:description"
                    content="Upgrade your Danville home with durable siding and professionally built decks. Trusted exterior contractor serving Boyle County."
                />
                <meta
                    name="twitter:image"
                    content="https://yellowstonerenovation.com/images/remodler1.webp"
                />
            </Helmet>

            <SEO
                title="Deck and Siding Contractor in Danville, KY | Exterior Builder You Can Trust"
                description="Yellowstone Renovation installs composite decks, wood decks, vinyl siding, and James Hardie siding in Danville, KY. Trusted exterior contractor serving all of Boyle County. Free onsite estimates."
                pathname="/cities/danville-ky/"
                image="https://yellowstonerenovation.com/images/remodler1.webp"
            />

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
                            "addressLocality": "Danville",
                            "addressRegion": "KY",
                            "postalCode": "40422",
                            "addressCountry": "US"
                        },
                        "areaServed": [
                            "Danville, KY",
                            "Junction City, KY",
                            "Perryville, KY",
                            "Stanford, KY",
                            "Boyle County, KY"
                        ],
                        "sameAs": [
                            "https://www.facebook.com/p/Yellowstone-Renovation-61551123481170/",
                            "https://www.instagram.com/yellowstone_renovation/",
                            "https://maps.google.com/?q=Yellowstone+Renovation+Danville+KY"
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

                {/* ▶ Danville FAQ Schema */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "How much does siding cost in Danville?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "In Danville, vinyl siding ranges $7–$13 per sq.ft. installed. James Hardie fiber cement siding ranges $14–$22 per sq.ft. depending on trim and home size."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do you serve Junction City and Perryville?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes — we work throughout Danville, Junction City, Perryville, Stanford, and all Boyle County neighborhoods."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do you offer free estimates in Boyle County?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes — Yellowstone Renovation provides free onsite estimates for decks, siding, windows, and exterior remodeling throughout Boyle County."
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
                title="Deck and Siding Contractor in Danville, KY"
                subtitle="Enhance your Danville home with durable siding and professionally built decks — designed to handle Kentucky weather and elevate curb appeal."
                projectCount="28+ deck and siding projects completed this year in Boyle County"
                city="Danville"
                emailTo="yellowstonerenovation@gmail.com"
            />

            <AboutSection />

            {/* ▶ GALLERY */}
            <GallerySection
                title="DECK BUILDER GALLERY"
                subtitle="Explore our completed deck projects — built for comfort, strength, and outdoor living in Kentucky’s climate."
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
                title="Exterior Remodeling Services in Danville, KY"
                subtitle="From custom decks to premium siding, our exterior renovation services are designed for long-term durability and lasting beauty."
                accentColor="#0a923d"
                bgImage="/images/deck-bg.jpg"
                services={[
                    {
                        title: "Custom Deck Design & Construction",
                        description:
                            "We build sturdy, beautiful decks tailored to Danville homes. From simple layouts to full outdoor living spaces — we handle everything.",
                        image: "/images/deck11.webp",
                        link: "/cities/danville-ky/deck-builder/",
                    },
                    {
                        title: "Composite & Wood Deck Installation",
                        description:
                            "Choose between low-maintenance composite or classic natural wood. Built strong for Kentucky’s climate.",
                        image: "/images/deck7.webp",
                        link: "/cities/danville-ky/composite-decking/",
                    },
                    {
                        title: "James Hardie® & Vinyl Siding Installation",
                        description:
                            "Enhance curb appeal and protect your home with Hardie fiber cement or durable vinyl siding — installed by licensed professionals.",
                        image: "/images/remodler1.webp",
                        link: "/cities/danville-ky/vinyl-siding/",
                    },
                    {
                        title: "Windows & Exterior Trim Upgrades",
                        description:
                            "Improve energy efficiency and home appearance with professional window installations and trim upgrades.",
                        image: "/images/remodler6.webp",
                        link: "/cities/danville-ky/windows/",
                    },
                ]}
            />

            {/* ▶ SIDING & DECK PAGE SECTION */}
            <SidingPageSection
                city="Danville"
                layoutOrder={[
                    "hero",
                    "deck",
                    "styles",
                    "types",
                    "cost",
                    "extra",
                    "cta",
                ]}

                heroTitle="Danville’s Local Deck & Siding Experts"
                heroText1="Yellowstone Renovation provides Danville homeowners with high-quality siding installation and custom deck construction designed to last for years."
                heroText2="We install James Hardie, LP SmartSide, vinyl, cedar, and metal siding — plus Trex and TimberTech composite decks built for comfort and durability."
                heroImage="/images/deck-builder12.webp"
                heroBottomText="Serving Danville, Junction City, Perryville, Stanford, and all Boyle County neighborhoods."

                deckHeroTitle="Custom Decks Built for Danville, KY"
                deckHeroText1="A well-built deck turns your backyard into a perfect place for gathering, relaxing, or entertaining. Our decks are built to handle Kentucky weather and look great year-round."
                deckHeroText2="Choose Trex, TimberTech, cedar, or treated wood — each option installed to the highest standards."
                deckHeroImage="/images/deck-builder8.webp"
                deckServicesTitle="Deck Services We Provide in Danville:"
                deckServices={[
                    "Custom deck design & planning",
                    "Trex and TimberTech composite deck installation",
                    "Cedar and pressure-treated wood decks",
                    "Covered decks, pergolas, screened porches",
                    "Deck resurfacing and structural repairs",
                    "Railing, stair, and lighting upgrades",
                    "Permits and inspections handled for you"
                ]}
                deckCostTitle="Deck Cost in Danville, KY"
                deckCostText="Composite decks in Danville usually range $45–$65 per sq. ft. installed. Wood decks range $30–$50 per sq. ft. Estimates include materials, labor, cleanup, and inspection."
                deckImages={[
                    "/images/deck-builder.webp",
                    "/images/deck-builder6.webp",
                    "/images/deck-builder7.webp",
                ]}

                stylesTitle="Siding Styles Popular in Danville"
                stylesIntro="We help homeowners select siding styles that enhance curb appeal while offering long-term weather resistance."
                styles={[
                    {
                        name: "Lap Siding",
                        text: "A timeless, durable siding style found on many Danville homes. Available in vinyl, fiber cement, and engineered wood.",
                        image: "/images/Lap-Siding.jpg",
                    },
                    {
                        name: "Board and Batten",
                        text: "A modern farmhouse look growing in popularity across Kentucky — adds bold vertical lines and strong visual appeal.",
                        image: "/images/Board-Batten.jpg",
                    },
                    {
                        name: "Shakes and Shingles",
                        text: "Perfect for accents and gables. Available in cedar or fiber cement, offering a handcrafted, textured appearance.",
                        image: "/images/Shakes-Shingles.jpg",
                    },
                ]}

                sidingTypesTitle="Siding Materials We Install in Danville"
                sidingTypesIntro="Durable siding options installed with professional precision and backed by warranties."
                sidingTypes={[
                    { name: "James Hardie Fiber Cement", image: "/images/hardie.jpg" },
                    { name: "LP SmartSide Engineered Wood", image: "/images/SmartSide.jpg" },
                    { name: "Vinyl Siding", image: "/images/Vinyl-Siding.jpg" },
                    { name: "Cedar Siding", image: "/images/Cedar-Siding.jpg" },
                ]}

                costTitle="Siding Installation Cost in Danville, KY"
                costIntro="Below are average siding installation price ranges for Danville homes, including labor and cleanup:"
                costTable={[
                    { material: "Vinyl Siding", price: "$6.50 – $9.00 per sq. ft." },
                    { material: "Fiber Cement (James Hardie)", price: "$10.00 – $15.00 per sq. ft." },
                    { material: "Engineered Wood (LP SmartSide)", price: "$9.00 – $12.00 per sq. ft." },
                    { material: "Cedar Wood Siding", price: "$12.00 – $18.00 per sq. ft." },
                    { material: "Metal Siding", price: "$8.00 – $13.00 per sq. ft." },
                ]}

                extraSectionTitle="Why Danville Homeowners Choose Us"
                extraSectionText="Homeowners across Boyle County trust Yellowstone Renovation for reliable communication, professional craftsmanship, and clean job sites."
                extraPoints={[
                    "⭐ Local licensed & insured Kentucky crew",
                    "⭐ 5-year workmanship warranty",
                    "⭐ 400+ exterior projects completed in Central KY",
                    "⭐ No subcontractors — our own installers",
                    "⭐ Free, detailed, no-pressure estimates"
                ]}

                ctaTitle="Request a Free Deck or Siding Estimate in Danville"
                ctaText="Ready to start your outdoor project? Contact Yellowstone Renovation for a free, no-obligation estimate in Danville and Boyle County."
                ctaImage="/images/deck-builder13.webp"
            />

            <TestimonialsSection />
            <QuoteSection />
        </Layout>
    );
}
