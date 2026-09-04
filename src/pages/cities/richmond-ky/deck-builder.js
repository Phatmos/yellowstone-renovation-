import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../../../components/Layout";
import AboutSection from "../../../components/AboutSection";
import BeforeAfter from "../../../components/BeforeAfter";
import GallerySection from "../../../components/GallerySection";
import TestimonialsSection from "../../../components/TestimonialsSection";
import SEO from "../../../components/SEO";
import QuoteSection from "../../../components/QuoteSection";
import ScrollToTop from "../../../components/ScrollToTop";
import "../../../styles/ScrollToTop.css";
import DeckBuildingSteps from "../../../components/DeckBuildingSteps";
import MainSectionSideBar from "../../../components/MainSectionSideBar";
import Hero2 from "../../../components/Hero2";

export default function RichmondDeckBuilder() {
    return (
        <Layout>

            {/* SEO */}
            <SEO
                title="Deck Builder in Richmond KY — Composite & Wood Decks | Yellowstone Renovation"
                description="Top-rated deck builders in Richmond, KY. Yellowstone Renovation designs and installs high-quality composite and wood decks crafted for durability, beauty, and long-term performance. Free estimates across Madison County."
                pathname="/cities/richmond-ky/deck-builder"
                image="https://yellowstonerenovation.com/images/deck-builder8.webp"
            />

            <Helmet>
                <meta
                    name="keywords"
                    content="deck builder Richmond KY, composite deck Richmond, wood deck installation Madison County, deck repair Richmond KY, deck replacement Richmond"
                />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="Deck Builder in Richmond KY | Yellowstone Renovation" />
                <meta property="og:description" content="Custom-built decks in Richmond, Kentucky — from durable composite installations to beautifully crafted wood structures. Get a fast, free estimate today." />
                <meta property="og:image" content="https://yellowstonerenovation.com/images/deck-builder8.webp" />
                <meta property="og:url" content="https://yellowstonerenovation.com/cities/richmond-ky/deck-builder" />
                <meta property="og:site_name" content="Yellowstone Renovation" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Richmond KY Deck Builder | Composite & Wood Deck Construction" />
                <meta name="twitter:description" content="Build your ideal outdoor living space with Yellowstone Renovation — the trusted deck contractor serving Richmond and Madison County." />
                <meta name="twitter:image" content="https://yellowstonerenovation.com/images/deck-builder8.webp" />

                {/* JSON-LD */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HomeAndConstructionBusiness",
                        name: "Yellowstone Renovation",
                        url: "https://yellowstonerenovation.com",
                        logo: "https://yellowstonerenovation.com/icons/logo.webp",
                        image: "https://yellowstonerenovation.com/images/deck-builder8.webp",
                        telephone: "859-545-7020",
                        address: {
                            "@type": "PostalAddress",
                            addressLocality: "Richmond",
                            addressRegion: "KY",
                            postalCode: "40475",
                            addressCountry: "US",
                        },
                        serviceType: [
                            "Deck Construction",
                            "Composite Deck Installation",
                            "Wood Deck Builder",
                            "Deck Repair",
                            "Deck Replacement"
                        ],
                        areaServed: [
                            "Richmond, KY",
                            "Waco, KY",
                            "Kirksville, KY",
                            "Berea, KY",
                            "Madison County, KY"
                        ],
                        aggregateRating: {
                            "@type": "AggregateRating",
                            ratingValue: "4.9",
                            reviewCount: "132"
                        }
                    })}
                </script>
            </Helmet>

            {/* HERO */}
            <Hero2
                topText="Top-Rated Deck Builder in Richmond, KY"
                title="Deck Builder in Richmond, KY — Custom Composite & Wood Decks"
                description="Yellowstone Renovation builds strong, modern, and long-lasting decks for homeowners across Richmond and Madison County. From premium composite decking to beautifully finished wood structures, we deliver quality craftsmanship you can rely on."
                backgroundImage="/images/deck/deck-lexington1.webp"
                overlayOpacity={0.65}
                formTitle="Get a Free Deck Estimate"
                selectLabel="Select Deck Service"
                selectOptions={[
                    "Custom Deck Design & Build",
                    "Composite Decks (Trex, TimberTech)",
                    "Wood Deck Installation",
                    "Second-Story Decks",
                    "Deck Repair & Resurfacing",
                    "Covered Decks & Pergolas",
                    "Stairs & Railing Installation",
                    "Screened-In Decks & Porches",
                    "Full Backyard Deck Makeover",
                ]}
                ctaText="Get Free Quote"
            />

            <AboutSection />

            {/* BEFORE & AFTER */}
            <BeforeAfter
                title="Richmond Deck Transformations"
                description="Browse before-and-after images of projects completed throughout Richmond — showing how we rebuild unsafe decks into modern, durable outdoor living spaces."
                buttonText="Explore More Projects"
                buttonLink="/projects"
                accentColor="#0a923d"
                images={[
                    { before: "/images/deckafter3.webp", after: "/images/deckbefore3.webp" },
                    { before: "/images/deckafter1.webp", after: "/images/deckbefore1.webp" },
                ]}
            />

            {/* GALLERY */}
            <GallerySection
                title="RICHMOND DECK BUILDER GALLERY"
                subtitle="Browse completed deck projects built for homeowners across Richmond and Madison County."
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

            <DeckBuildingSteps />
            <TestimonialsSection />

            <MainSectionSideBar
                title="Deck Builder in Richmond, KY — Custom Composite & Wood Decks"
                sections={[
                    {
                        heading: "Deck Builder Richmond KY — Quality, Craftsmanship, and Outdoor Living",
                        text: `Yellowstone Renovation provides Richmond homeowners with high-quality deck construction built for durability and long-term performance. We design and build outdoor living spaces using premium materials and proven installation methods.

Our team specializes in both composite and natural wood decking, offering design guidance, permit support, and precise construction. Whether upgrading an old deck or creating a brand-new entertainment space, we deliver results you can rely on.`
                    },

                    {
                        heading: "Composite Deck Installation in Richmond, KY",
                        text: `Composite decking is a top choice for Richmond homeowners who want a low-maintenance, long-lasting outdoor area. Composite boards resist fading, moisture, insects, and warping — ideal for Kentucky’s changing weather.

We install high-quality Trex, TimberTech, and AZEK systems using hidden fasteners and moisture-protected framing. Choose from a wide selection of modern colors and realistic wood textures.`
                    },

                    {
                        heading: "Wood Deck Builder in Richmond, Kentucky",
                        text: `If you love the natural beauty of wood, we build custom decks using pressure-treated lumber, cedar, and redwood. Wood decks offer excellent value and timeless appeal.

Every wood deck is sealed, reinforced, and tailored to withstand humidity, sun exposure, and daily use. Our craftsmanship ensures a clean, smooth finish and strong structural integrity.`
                    },

                    {
                        heading: "Deck Replacement & Repair in Richmond, KY",
                        text: `If your deck is unsafe, outdated, or failing structurally, we offer complete deck replacement and repair services throughout Richmond and Madison County. From strengthening framing to full rebuilds, we restore outdoor spaces with reliable materials and workmanship.

Loose railings, rotted boards, and sagging structures — we handle all phases of repair and replacement.`
                    },

                    {
                        heading: "Our Deck Design & Construction Process",
                        text: `Each project begins with a consultation to evaluate your space and discuss design options. After planning, our team handles all permitting, structural framing, decking installation, and finishing work.

We maintain open communication, a clean job site, and strict adherence to Kentucky building codes.`
                    },

                    {
                        heading: "Average Deck Cost in Richmond, KY",
                        text: `Here’s what most Richmond homeowners invest in a professionally built deck:

Composite Decks: $45–$65 per sq. ft. installed  
Wood Decks: $30–$50 per sq. ft. installed  
Repairs or Partial Rebuilds: around 40–60% of a full replacement  

Pricing includes materials, labor, cleanup, and final inspection. Contact us for an exact estimate based on your home.`
                    },

                    {
                        heading: "Get a Free Deck Estimate in Richmond, KY",
                        text: `Ready to upgrade your backyard? We provide free, no-pressure estimates across Richmond, Waco, Kirksville, Berea, and all of Madison County.

We measure your space, explain material options, and provide a detailed written quote during your appointment.`
                    },

                    {
                        heading: "Decking Contractor in Richmond, Kentucky",
                        text: `Choosing the right contractor matters. Yellowstone Renovation is known for dependable scheduling, high-quality craftsmanship, and clean work throughout the project.

We help homeowners increase property value and create comfortable outdoor spaces built for everyday use.`
                    },

                    {
                        heading: "Deck Installation Services in Richmond",
                        text: `From compact wood decks to large composite installations with railings, lighting, and stairs — we build custom designs tailored to your home’s architecture and outdoor layout.

Each project is engineered for structural strength and long-term durability in Kentucky’s climate.`
                    },

                    {
                        heading: "Professional Deck Construction in Richmond, KY",
                        text: `As a licensed and insured contractor, we manage every step of the building process — including design, permits, framing, decking, railings, and inspection.

Our decks are built to withstand heat, humidity, rain, and constant use without weakening over time.`
                    },

                    {
                        heading: "Working with a Local Richmond Deck Contractor",
                        text: `Located in Central Kentucky, we understand local building requirements, soil conditions, and climate challenges. That allows us to build stronger and safer decks for Richmond homeowners.

Clear communication and reliable service guide every project from start to finish.`    
                    },

                    {
                        heading: "Choose the Best Deck Installers in Richmond, KY",
                        text: `Yellowstone Renovation is recognized for quality craftsmanship, reliable timelines, and consistent 5-star customer satisfaction. We create well-built, attractive outdoor spaces designed to last for decades.`
                    },

                    {
                        heading: "Average Cost to Install a New Deck in Richmond",
                        text: `Most Richmond homeowners invest between $10,000 and $45,000 for a complete deck installation, depending on size, height, and materials selected.

Composite decks typically cost $45–$65 per sq. ft., while wood options range from $30–$50 per sq. ft. We provide clear, accurate estimates before beginning any project.`
                    },

                    {
                        heading: "Richmond Wood Decks — Natural Appeal & Lasting Value",
                        text: `Wood decks bring warmth and traditional beauty to any property. We use premium lumber with proper treatment and sealing to ensure long-term durability in Kentucky’s seasonal weather patterns.`
                    },

                    {
                        heading: "Composite Decks in Richmond, KY",
                        text: `Composite decks offer exceptional durability with virtually no maintenance required. Our installations include Trex, TimberTech, and AZEK — proven brands known for moisture resistance and long-lasting color performance.`
                    },

                    {
                        heading: "Deck Builder Near Me in Richmond, KY",
                        text: `Searching for “deck builder near me” in Richmond? Yellowstone Renovation proudly serves Richmond, Waco, Berea, Kirksville, and all of Madison County.

We design and build custom decks that enhance home value, outdoor functionality, and everyday comfort.`
                    },
                ]}

                /* SIDEBAR CONTENT */
                offers={[
                    {
                        image: "/images/deck1.webp",
                        text: "Get $1500 OFF Your New Deck Installation — Limited Time Offer",
                        button: "Claim Discount",
                        link: "/contact",
                    },
                    {
                        image: "/images/deck2.webp",
                        text: "Browse Richmond Deck Projects",
                        button: "View Gallery",
                        link: "/projects",
                    },
                ]}

                whyUs={[
                    "Trusted local deck builders serving Richmond and Madison County",
                    "Trex, TimberTech, and AZEK composite specialists",
                    "Custom designs tailored to your home and outdoor layout",
                    "Licensed, insured, and known for reliable scheduling",
                    "Clear pricing, clean job sites, and long-term warranties",
                ]}

                projects={[
                    { image: "/images/deck4.webp", title: "Richmond Composite Deck Build" },
                    { image: "/images/deck5.webp", title: "Wood Deck With Custom Railings" },
                    { image: "/images/deck6.webp", title: "Pergola & Deck Upgrade" },
                    { image: "/images/deck7.webp", title: "Covered Deck Expansion" },
                ]}

                findUs={[
                    { name: "Yelp", rating: "4.6/5", logo: "/icons/yelp.webp" },
                    { name: "Google", rating: "4.9/5", logo: "/icons/google-reviews.webp" },
                ]}

                blog={[
                    {
                        title: "How Much Does a Deck Cost in Kentucky?",
                        date: "April 12th, 2025",
                        author: "Mark Ellison",
                        image: "/images/deck6.webp",
                    },
                    {
                        title: "Composite vs Wood Decks: Which Is Best for Richmond Homes?",
                        date: "May 20th, 2025",
                        author: "Peter",
                        image: "/images/deck7.webp",
                    },
                    {
                        title: "Deck Maintenance Tips for Richmond Homeowners",
                        date: "June 10th, 2025",
                        author: "Mark Ellison",
                        image: "/images/deck8.webp",
                    },
                ]}

                partners={[
                    "/icons/trex.webp",
                    "/icons/timbertech.webp",
                    "/icons/yelp.webp"
                ]}
            />

            <QuoteSection />
            <ScrollToTop />
        </Layout>
    );
}
