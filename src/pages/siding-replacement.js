import * as React from "react"
import Layout from "../components/Layout"
import Hero2 from "../components/Hero2";
import DealerBanner from "../components/DealerBanner";
import BeforeAfter from "../components/BeforeAfter";
import GallerySection from "../components/GallerySection";
import MainSection from "../components/mainSection.js";
import "../styles/global.css"
import Services from "../components/Services.js"
import WindowsPromoSection from "../components/WindowsPromoSection";
import SEO from "../components/SEO";
import MainSectionSideBar from "../components/MainSectionSideBar";
import { Helmet } from "react-helmet";



export default function Home() {
    return (

        <Layout>
            <Helmet>
                {/* ✅ Primary Keywords */}
                <meta
                    name="keywords"
                    content="Siding Replacement Lexington KY, Vinyl Siding Installer Lexington, James Hardie Contractor Lexington KY, Fiber Cement Siding Kentucky, LP SmartSide Siding Lexington"
                />

                {/* ✅ Social Preview */}
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Siding Replacement in Lexington, KY | Vinyl & James Hardie® Experts"
                />
                <meta
                    property="og:description"
                    content="Top-rated siding replacement company in Lexington, KY. Vinyl, James Hardie® & LP® SmartSide® installation built for Kentucky weather. Free quotes!"
                />
                <meta
                    property="og:image"
                    content="https://yellowstonerenovation.com/images/remodler5.webp"
                />
                <meta
                    property="og:url"
                    content="https://yellowstonerenovation.com/siding-replacement/"
                />
                <meta property="og:site_name" content="Yellowstone Renovation" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Siding Replacement Experts in Lexington, KY"
                />
                <meta
                    name="twitter:description"
                    content="Vinyl & James Hardie® siding installed correctly — built for Kentucky homeowners. Free estimates!"
                />
                <meta
                    name="twitter:image"
                    content="https://yellowstonerenovation.com/images/remodler5.webp"
                />
            </Helmet>

            <SEO
                title="Siding Replacement in Lexington, KY | Yellowstone Renovation"
                description="Professional siding contractor in Lexington, KY — Vinyl, James Hardie® fiber cement & LP® SmartSide®. Precision installation with strong warranties. Free quotes!"
                pathname="/siding-replacement/"
                image="https://yellowstonerenovation.com/images/remodler5.webp"
            />

            {/* ✅ Local Business + Service Schema */}
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "serviceType": "Siding Replacement & Installation",
                        "provider": {
                            "@type": "HomeAndConstructionBusiness",
                            "name": "Yellowstone Renovation",
                            "url": "https://yellowstonerenovation.com",
                            "logo": "/icons/logo.webp",
                            "telephone": "859-545-7020",
                            "address": {
                                "@type": "PostalAddress",
                                "addressLocality": "Lexington",
                                "addressRegion": "KY",
                                "postalCode": "40502",
                                "addressCountry": "US"
                            }
                        },
                        "areaServed": [
                            "Lexington, KY",
                            "Nicholasville, KY",
                            "Georgetown, KY",
                            "Winchester, KY",
                            "Richmond, KY"
                        ],
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "Siding Replacement Types",
                            "itemListElement": [
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Product",
                                        "name": "Vinyl Siding Installation"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Product",
                                        "name": "James Hardie® Fiber Cement Siding"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Product",
                                        "name": "LP® SmartSide® Engineered Siding"
                                    }
                                }
                            ]
                        }
                    })}
                </script>

                {/* ✅ SEO Boosting FAQ Schema */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "How much does siding replacement cost in Lexington, KY?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Vinyl siding ranges from $7.50–$12.50 per sq.ft installed. James Hardie® typically costs $13.50–$22 per sq.ft depending on trim and home architecture."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Is vinyl or fiber cement siding better?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Vinyl siding offers affordability and low maintenance. James Hardie® fiber cement provides superior durability, fire resistance, and a premium look — great ROI for Lexington homes."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do you assist with storm damage insurance claims?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes — we meet adjusters onsite and ensure damage is properly documented so you receive full restoration, not a quick patch."
                                }
                            }
                        ]
                    })}
                </script>
            </Helmet>

            <Hero2
                topText="FULL HOME SIDING REPLACEMENT"
                title="Protect & Beautify Your Home with New Siding"
                description="Professional siding installation with fast timelines, competitive pricing, and flawless workmanship."
                backgroundImage="/images/remodler5.webp"
                formTitle="Free Siding Estimate"
                selectLabel="Which Siding Type?"
                selectOptions={[
                    "Vinyl Siding",
                    "James Hardie Fiber Cement",
                    "Wood Siding",
                    "Metal Siding"
                ]}
                ctaText="Get Estimate"
            />
            <GallerySection
                title="Full-Service Siding Replacement Experts in Lexington & Central Kentucky"
                subtitle="When it comes to protecting and upgrading your home, quality siding replacement makes all the difference. At Yellowstone Renovation, we specialize in professional siding installation and replacement services throughout Lexington, KY and the surrounding areas. "
                highlight="Experts in Lexington"
                background="#ffffff"
                images={[
                    "/images/remodler1.webp",
                    "/images/remodler2.webp",
                    "/images/remodler3.webp",
                    "/images/remodler4.webp",
                    "/images/remodler5.webp",
                    "/images/remodler6.webp",
                    "/images/remodler23.webp",
                    "/images/remodler9.webp",
                    "/images/remodler10.webp",
                    "/images/remodler11.webp",
                    "/images/remodler24.webp",
                    "/images/remodler13.webp",
                    "/images/remodler25.webp",
                    "/images/remodler15.webp",
                    "/images/remodler26.webp",
                    "/images/remodler17.webp",
                    "/images/remodler18.webp",
                    "/images/remodler19.webp",
                    "/images/remodler28.webp",
                    "/images/remodler23.webp",
                    "/images/remodler22.webp",
                ]}
            />
            <Services
                title="Our Siding Services"
                subtitle="Strong, stylish, and built to protect your home — choose the right siding solution for long-lasting performance in Kentucky’s climate."
                accentColor="#0a923d"
                bgImage="/images/deck-bg.jpg"
                services={[
                    {
                        title: "Vinyl Siding Replacement",
                        description:
                            "Affordable, low-maintenance siding with modern color and texture options — built for beauty and durability.",
                        image: "/images/remodler1.webp",
                        link: "/vinyl-siding",
                    },
                    {
                        title: "James Hardie® Fiber Cement Siding",
                        description:
                            "Premium siding engineered for superior weather, fire, and pest resistance — backed by industry-leading warranties.",
                        image: "/images/remodler5.webp",
                        link: "/james-hardie-siding",
                    },
                    {
                        title: "Wood Siding Installation",
                        description:
                            "Natural warmth and timeless character — cedar, redwood, and hand-finished wood siding built to impress.",
                        image: "/images/remodler2.webp",
                        link: "/wood-siding",
                    },
                    {
                        title: "Metal Siding Systems",
                        description:
                            "Modern steel and aluminum siding with bold design and unbeatable durability against storms and moisture.",
                        image: "/images/remodler24.webp",
                        link: "/metal-siding",
                    },
                ]}
            />

            <DealerBanner
                title="Complete Service Premier Siding Replacement"
                highlight="Premier Siding Replacement"
                description="When your siding is damaged, outdated, or no longer protecting your home the way it should, replacement is the smart solution. But choosing the right contractor is just as important as choosing the right materials. At Yellowstone Renovation, we combine expert craftsmanship with premium siding options to ensure your home looks great and performs even better"
                backgroundColor="#ffffff"
                highlightColor="#247704"
            />
            <BeforeAfter
                title="James Hardie® Siding Before & After"
                description="See how we transform outdated exteriors using durable, color-rich James Hardie fiber cement siding — designed to resist fading, cracking, moisture and severe Kentucky weather."
                buttonText="View Full Hardie Projects"
                buttonLink="/projects"
                accentColor="#247704"
                images={[
                    {
                        before: "/images/deckafter2.webp",
                        after: "/images/deckbefore2.webp"
                    },
                    {
                        before: "/images/sidingafter.webp",
                        after: "/images/sidingbefore.webp"
                    }
                ]}
            />
            <MainSectionSideBar
                         title="Siding Replacement in Lexington, KY"
                sections={[
                    {
                        heading: "Siding Replacement in Lexington, KY — Transform & Protect Your Home",
                        text: `Yellowstone Renovation provides top-quality siding replacement in Lexington KY, designed to protect your home, boost curb appeal, and improve energy efficiency. We install industry-leading siding materials, including vinyl siding and James Hardie fiber cement siding — built to withstand Kentucky’s climate while enhancing home value. From material selection to installation and cleanup, our team ensures superior craftsmanship and long-lasting results.`
                    },
                    {
                        heading: "Professional Siding Installation Lexington KY",
                        text: `We specialize in expert siding installation tailored to your home’s style and structure. Our certified siding installers ensure watertight sealing, precise flashing, and secure attachment for maximum durability and insulation performance. Whether you want modern vertical panels, classic lap siding, or board-and-batten, we deliver a clean, flawless look that elevates your entire exterior.`
                    },
                    {
                        heading: "James Hardie Fiber Cement Siding Experts",
                        text: `James Hardie siding is the #1 choice for long-lasting exterior protection. It resists weather, fire, pests, and fading — backed by a 30-year manufacturer warranty. We offer HardiePlank®, HardiePanel®, and HardieShingle® siding in colors and textures that mimic real wood without the maintenance. If you’re looking for the highest performance and beauty combined, Hardie siding is the best upgrade for your home.`
                    },
                    {
                        heading: "Vinyl Siding Replacement — Affordable & Low-Maintenance",
                        text: `Vinyl siding offers strong protection at an affordable price. Perfect for homeowners wanting minimal upkeep and a wide variety of styles and colors. Our vinyl siding resists fading, moisture damage, and warp — ensuring your home looks fresh for years. It’s a cost-effective solution for increasing curb appeal and energy efficiency quickly.`
                    },
                    {
                        heading: "Siding Repair & Storm Damage Restoration",
                        text: `Damaged or loose siding can cause leaks, rot, or energy loss. We provide complete siding repair services: patching, panel replacement, and resealing — restoring full functionality and appearance. We also work with insurance claims for weather-related damage to make the process stress-free.`
                    },
                    {
                        heading: "Seamless Trim, Fascia & Soffit Installations",
                        text: `Proper trim and ventilation are essential for your siding system. We install durable fascia, soffit, window trim, and moisture-barrier systems to prevent attic humidity and protect roof edges. These finishing elements improve both the performance and aesthetic of your home.`
                    },
                    {
                        heading: "Custom Exterior Design & Color Options",
                        text: `Choose from dozens of textures and colors to match your architectural style. Our experts help you visualize your upgraded exterior with modern design options, ensuring harmony between siding, trim, gutters, and windows. Beautiful homes begin with thoughtful exterior planning.`
                    },
                    {
                        heading: "Why Choose Yellowstone Renovation Siding Contractors in Lexington, KY",
                        text: `We are fully licensed, insured, and trusted by homeowners throughout Lexington, Nicholasville, Georgetown, Richmond, and Versailles. We offer transparent pricing, professional crews, quality materials, and craftsmanship guaranteed to last. When you search "siding contractor Lexington KY", our service, reliability, and results speak for themselves.`
                    },
                    {
                        heading: "Get a Free Siding Estimate in Lexington, KY",
                        text: `Ready to upgrade your home’s exterior? Contact Yellowstone Renovation today for a free consultation and detailed quote. Whether you choose vinyl or James Hardie, we deliver a smooth process — on time, on budget, and built to last. Let’s transform your home together!`
                    }
                ]}

                offers={[
                    {
                        image: "/images/remodler24.webp",
                        text: "Get $1,000 OFF New Wood Siding Replacement — Limited Time",
                        button: "Claim Offer",
                        link: "/contact"
                    },
                    {
                        image: "/images/remodler3.webp",
                        text: "View Completed Wood Siding Projects",
                        button: "See Gallery",
                        link: "/projects"
                    }
                ]}

                whyUs={[
                    "Premium cedar & redwood siding options",
                    "Custom stains and textures for timeless appeal",
                    "Built for Kentucky humidity & storm resilience",
                    "Licensed & insured wood siding experts",
                    "Locally trusted — 4.9 ⭐ Google rating"
                ]}

                projects={[
                    { image: "/images/remodler24.webp", title: "Warm Cedar Exterior" },
                    { image: "/images/remodler3.webp", title: "Board & Batten Wood Finish" },
                    { image: "/images/remodler1.webp", title: "Full Wood Siding Refresh" },
                    { image: "/images/remodler4.webp", title: "Natural Wood Exterior Upgrade" }
                ]}
                findUs={[
                    { name: "Yelp", rating: "4.6/5", logo: "/icons/yelp.webp" },
                    { name: "Google", rating: "4.9/5", logo: "/icons/google-reviews.webp" },
                ]}
                blog={[
                    {
                        title: "Choosing the Right Deck Material for Kentucky Weather",
                        date: "April 12th, 2025",
                        author: "Vasyl",
                        image: "/images/deck6.webp",
                    },
                    {
                        title: "Top 5 Deck Design Ideas for Lexington Homes",
                        date: "May 20th, 2025",
                        author: "Peter",
                        image: "/images/deck7.webp",
                    },
                    {
                        title: "The Long-Term Value of Adding a Custom Deck",
                        date: "June 5th, 2025",
                        author: "Vasyl",
                        image: "/images/deck8.webp",
                    },
                ]}
                partners={["/icons/jameshardie.webp", "/icons/yelp.webp"]}
            />


            <WindowsPromoSection
                slides={[
                    {
                        image: "/images/remodler11.webp",
                        tag: "Siding Replacement",
                        heading: "Transform Your Home Exterior",
                        description: "Boost curb appeal and protect your home...",
                        button: "Explore Siding",
                        link: "/siding",
                        projectImage: "/images/remodler24.webp",
                        projectLocation: "Folsom, CA",
                        projectInfo1: "James Hardie",
                        projectInfo2: "Premium Install",
                        projectName: "HardiePlank Upgrade",
                        projectPrice: "14,995"
                    },
                    {
                        image: "/images/remodler13.webp",
                        tag: "Window Installation",
                        heading: "Better Views. Better Comfort.",
                        description: "Energy-efficient windows that reduce noise...",
                        button: "See Window Styles",
                        link: "/windows",
                        projectImage: "/images/deck4.webp",
                        projectLocation: "Rocklin, CA",
                        projectInfo1: "Energy Star",
                        projectInfo2: "Modern Vinyl",
                        projectName: "Panoramic Window Set",
                        projectPrice: "7,450"
                    },
                    {
                        image: "/images/deck6.webp",
                        tag: "Deck & Outdoor Spaces",
                        heading: "Build Your Perfect Backyard",
                        description: "Custom wood and composite decks...",
                        button: "View Deck Options",
                        link: "/decks",
                        projectImage: "/images/deck2.webp",
                        projectLocation: "El Dorado Hills, CA",
                        projectInfo1: "Composite",
                        projectInfo2: "LED Lighting",
                        projectName: "Outdoor Living Deck",
                        projectPrice: "18,300"
                    }
                ]}
            />

        </Layout >
    )
}

