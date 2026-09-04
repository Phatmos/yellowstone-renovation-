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

export default function WacoKY() {
    return (
        <Layout>
            <Helmet>
                <meta
                    name="keywords"
                    content="Deck Builder Waco KY, Siding Contractor Waco KY, James Hardie Waco Kentucky, Composite Deck Installer Madison County KY, Vinyl Siding Waco KY, Exterior Remodeling Waco"
                />

                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Deck and Siding Contractor in Waco, KY | Exterior Renovation Experts"
                />
                <meta
                    property="og:description"
                    content="Local deck and siding contractor in Waco, KY. Yellowstone Renovation installs composite decks, wood decks, vinyl siding, and James Hardie siding built for Kentucky weather. Free estimates in Madison County."
                />
                <meta
                    property="og:url"
                    content="https://yellowstonerenovation.com/cities/waco-ky/"
                />
                <meta property="og:site_name" content="Yellowstone Renovation" />
                <meta
                    property="og:image"
                    content="https://yellowstonerenovation.com/images/remodler1.webp"
                />

                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Deck and Siding Contractor in Waco, KY | Yellowstone Renovation"
                />
                <meta
                    name="twitter:description"
                    content="Need siding or a new deck in Waco, KY? We build durable outdoor spaces and install premium siding for homes across Madison County."
                />
                <meta
                    name="twitter:image"
                    content="https://yellowstonerenovation.com/images/remodler1.webp"
                />
            </Helmet>

            <SEO
                title="Deck and Siding Contractor in Waco, KY | Trusted Exterior Builder"
                description="Yellowstone Renovation provides custom deck building and siding installation in Waco, KY. We install composite, wood, vinyl, and fiber cement siding with clean craftsmanship and free estimates in Madison County."
                pathname="/cities/waco-ky/"
                image="https://yellowstonerenovation.com/images/remodler1.webp"
            />

            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HomeAndConstructionBusiness",
                        "@id": "https://yellowstonerenovation.com/#localbusiness-waco",
                        name: "Yellowstone Renovation",
                        url: "https://yellowstonerenovation.com",
                        image: "https://yellowstonerenovation.com/images/remodler1.webp",
                        logo: "https://yellowstonerenovation.com/icons/logo.webp",
                        telephone: "(859) 765-7267",
                        priceRange: "$$",
                        address: {
                            "@type": "PostalAddress",
                            streetAddress: "120 Tina Way",
                            addressLocality: "Waco",
                            addressRegion: "KY",
                            postalCode: "40385",
                            addressCountry: "US",
                        },
                        areaServed: [
                            "Waco, KY",
                            "Richmond, KY",
                            "Berea, KY",
                            "Madison County, KY",
                        ],
                        sameAs: [
                            "https://www.facebook.com/p/Yellowstone-Renovation-61551123481170/",
                            "https://www.instagram.com/yellowstone_renovation/",
                            "https://maps.google.com/?q=Yellowstone+Renovation+Waco+KY",
                        ],
                        serviceType: [
                            "Deck Building",
                            "Composite Deck Installation",
                            "Vinyl Siding Installation",
                            "James Hardie Fiber Cement Siding",
                            "Exterior Repairs",
                            "Replacement Windows",
                        ],
                        aggregateRating: {
                            "@type": "AggregateRating",
                            ratingValue: "4.9",
                            reviewCount: 87,
                        },
                    })}
                </script>
            </Helmet>

            <HeroSection
                backgroundImage="/images/deck-builder3.webp"
                customerImage="/images/customer-hero1.png"
                title="Deck and Siding Contractor in Waco, KY"
                subtitle="Upgrade your Waco home with custom decks and high-performance siding designed for Kentucky heat, rain, and seasonal weather swings."
                projectCount="32+ deck and siding projects completed this year across Central Kentucky"
                city="Waco"
                emailTo="yellowstonerenovation@gmail.com"
            />

            <AboutSection />

            <GallerySection
                title="DECK BUILDER GALLERY"
                subtitle="Explore deck builds crafted for Kentucky homeowners. Composite and wood decks built for beauty and long-term durability."
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
                title="Exterior Remodeling Services in Waco, KY"
                subtitle="From custom decks to full siding replacement, we deliver reliable communication and quality results."
                accentColor="#0a923d"
                bgImage="/images/deck-bg.jpg"
                services={[
                    {
                        title: "Custom Deck Design & Construction",
                        description:
                            "We design and build custom decks that match your home and your lifestyle, from simple platforms to multi-level outdoor spaces.",
                        image: "/images/deck11.webp",
                        link: "/cities/waco-ky/deck-builder/",
                    },
                    {
                        title: "Composite & Wood Deck Installation",
                        description:
                            "Choose low-maintenance composite or timeless wood. Our deck systems are built for Kentucky weather and everyday use.",
                        image: "/images/deck7.webp",
                        link: "/cities/waco-ky/composite-deck-installation/",
                    },
                    {
                        title: "James Hardie® & Vinyl Siding Installation",
                        description:
                            "Protect and refresh your exterior with premium siding materials, expert installation, and clean finishing details.",
                        image: "/images/remodler1.webp",
                        link: "/cities/waco-ky/vinyl-siding-installation/",
                    },
                    {
                        title: "Windows & Exterior Trim Upgrades",
                        description:
                            "Boost curb appeal and improve efficiency with replacement windows and precision trim upgrades.",
                        image: "/images/remodler6.webp",
                        link: "/windows",
                    },
                ]}
            />

            <SidingPageSection
                city="Waco"
                layoutOrder={["hero", "deck", "styles", "types", "cost", "extra", "cta"]}
                heroTitle="Waco's Trusted Deck and Siding Specialists"
                heroText1="Yellowstone Renovation helps Waco homeowners improve curb appeal and protect their homes with durable siding and custom deck construction."
                heroText2="We install James Hardie, LP SmartSide, vinyl, cedar, and metal siding, plus composite deck systems from leading brands."
                heroImage="/images/deck-builder12.webp"
                heroBottomText="Serving Waco, Richmond, Berea, and surrounding Madison County communities with professional exterior remodeling."
                deckHeroTitle="Custom Decks in Waco, KY — Built for Everyday Living"
                deckHeroText1="A new deck creates outdoor space for family time, entertaining, and relaxing right at home."
                deckHeroText2="We build wood and composite decks in Waco with strong framing, clean finishes, and lasting value."
                deckHeroImage="/images/deck-builder8.webp"
                deckServicesTitle="Deck Services We Provide in Waco:"
                deckServices={[
                    "Custom deck design and layout planning",
                    "Trex and TimberTech composite deck installation",
                    "Cedar and pressure-treated wood decks",
                    "Covered decks, pergolas, and screened porches",
                    "Deck resurfacing and structural repairs",
                    "Stair, railing, and lighting upgrades",
                    "Permit support and inspections",
                ]}
                deckCostTitle="Deck Cost in Waco, KY"
                deckCostText="Composite decks in Waco typically range from $45-$65 per square foot. Wood decks usually range from $30-$50 per square foot, based on design, elevation, and materials."
                deckImages={[
                    "/images/deck-builder.webp",
                    "/images/deck-builder6.webp",
                    "/images/deck-builder7.webp",
                ]}
                stylesTitle="Popular Siding Styles in Waco"
                stylesIntro="We help homeowners choose siding styles that fit their home's architecture and stand up to Kentucky conditions."
                styles={[
                    {
                        name: "Lap Siding",
                        text: "Classic horizontal lines with excellent durability for traditional and modern homes.",
                        image: "/images/Lap-Siding.jpg",
                    },
                    {
                        name: "Board and Batten",
                        text: "Vertical style that adds bold curb appeal and farmhouse character.",
                        image: "/images/Board-Batten.jpg",
                    },
                    {
                        name: "Shakes & Shingles",
                        text: "Great for accents and gables when you want extra texture and detail.",
                        image: "/images/Shakes-Shingles.jpg",
                    },
                ]}
                sidingTypesTitle="Siding Materials We Install in Waco"
                sidingTypesIntro="Choose from industry-leading siding materials installed by experienced local crews."
                sidingTypes={[
                    { name: "James Hardie Fiber Cement", image: "/images/hardie.jpg" },
                    { name: "LP SmartSide Engineered Wood", image: "/images/SmartSide.jpg" },
                    { name: "Vinyl Siding", image: "/images/Vinyl-Siding.jpg" },
                    { name: "Cedar Siding", image: "/images/Cedar-Siding.jpg" },
                ]}
                costTitle="Siding Installation Cost in Waco, KY"
                costIntro="Pricing varies by home size, material selection, trim detail, and layout complexity. Typical ranges include:"
                costTable={[
                    { material: "Vinyl Siding", price: "$6.50-$9.00 per sq. ft." },
                    { material: "Fiber Cement (James Hardie)", price: "$10.00-$14.00 per sq. ft." },
                    { material: "Engineered Wood (LP SmartSide)", price: "$9.00-$12.00 per sq. ft." },
                    { material: "Cedar Wood Siding", price: "$12.00-$18.00 per sq. ft." },
                    { material: "Metal Siding", price: "$8.00-$13.00 per sq. ft." },
                ]}
                extraSectionTitle="Why Waco Homeowners Choose Yellowstone Renovation"
                extraSectionText="We focus on honest pricing, quality workmanship, and clear communication from estimate to final walkthrough."
                extraPoints={[
                    "Local Kentucky crew with consistent quality",
                    "Licensed and insured installation team",
                    "5-year workmanship warranty",
                    "Hundreds of successful exterior projects",
                    "Free, no-pressure estimates",
                ]}
                ctaTitle="Get a Free Deck or Siding Quote in Waco"
                ctaText="Ready to upgrade your home's exterior? Contact Yellowstone Renovation for a free estimate in Waco and across Madison County."
                ctaImage="/images/deck-builder13.webp"
            />

            <TestimonialsSection />
            <QuoteSection />
        </Layout>
    )
}