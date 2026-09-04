import React from "react";
import Layout from "../components/Layout";
import GallerySection from "../components/GallerySection";
import Services from "../components/Services.js";
import DealerBanner from "../components/DealerBanner";
import HeroModern from "../components/HeroModern";
import MainSectionSideBar from "../components/MainSectionSideBar";
import WindowsPromoSection from "../components/WindowsPromoSection";
import SEO from "../components/SEO";
import BeforeAfter from "../components/BeforeAfter";
import { Helmet } from "react-helmet";


export default function CustomDeckPage() {
    return (
        <Layout>
            <Helmet>
                {/* ✅ High-Intent Keywords */}
                <meta
                    name="keywords"
                    content="Custom decks Lexington KY, Deck builder Kentucky, Backyard deck contractor Lexington, Outdoor living builder KY, Modern deck designs Lexington"
                />

                {/* ✅ Open Graph for Social Sharing */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Custom Deck Builder in Lexington, KY | Outdoor Living Done Right" />
                <meta property="og:description" content="Custom-designed decks built to fit your lifestyle. Composite & wood options — engineered for Kentucky weather. Free design consultations!" />
                <meta property="og:image" content="https://yellowstonerenovation.com/images/deck10.webp" />
                <meta property="og:url" content="https://yellowstonerenovation.com/custom-decks/" />
                <meta property="og:site_name" content="Yellowstone Renovation" />

                {/* ✅ Twitter Cards */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Custom Deck Builder in Lexington, KY" />
                <meta name="twitter:description" content="Transform your backyard into a stunning outdoor living space. Free estimates in Lexington & Central KY." />
                <meta name="twitter:image" content="https://yellowstonerenovation.com/images/deck10.webp" />
            </Helmet>

            {/* ✅ Primary SEO Component */}
            <SEO
                title="Custom Deck Design & Construction | Lexington, KY | Yellowstone Renovation"
                description="Premium custom decks built for beauty, comfort & durability. Composite & wood deck experts serving Lexington, Georgetown, Nicholasville, Richmond & Winchester."
                pathname="/custom-decks/"
                image="https://yellowstonerenovation.com/images/deck10.webp"
            />
            <Helmet>
                {/* 🔹 Service Schema — Helps Google understand your services */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HomeAndConstructionBusiness",
                        "@id": "https://yellowstonerenovation.com/#service",
                        "name": "Yellowstone Renovation",
                        "url": "https://yellowstonerenovation.com/custom-decks/",
                        "logo": "https://yellowstonerenovation.com/icons/logo.webp",
                        "image": "https://yellowstonerenovation.com/images/deck10.webp",
                        "telephone": "859-545-7020",
                        "priceRange": "$$",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "120 Tina Way",
                            "addressLocality": "Nicholasville",
                            "addressRegion": "KY",
                            "postalCode": "40356",
                            "addressCountry": "US"
                        },
                        "serviceType": [
                            "Custom Deck Construction",
                            "Deck Design",
                            "Backyard Outdoor Living",
                            "Composite & Wood Decks"
                        ],
                        "areaServed": [
                            "Lexington, KY",
                            "Nicholasville, KY",
                            "Georgetown, KY",
                            "Winchester, KY",
                            "Richmond, KY"
                        ],
                        "sameAs": [
                            "https://www.facebook.com/p/Yellowstone-Renovation-61551123481170/",
                            "https://www.instagram.com/yellowstone_renovation/",
                            "https://maps.google.com/?q=Yellowstone+Renovation+Nicholasville+KY"
                        ]
                    })}
                </script>

                {/* ⭐ Product Schema — Enables STAR Ratings in Google SERP */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Product",
                        "@id": "https://yellowstonerenovation.com/#product",
                        "name": "Custom Deck Building — Yellowstone Renovation",
                        "description": "Professional custom deck builders specializing in composite, wood, multi-level, and luxury outdoor living spaces.",
                        "image": "https://yellowstonerenovation.com/images/deck10.webp",
                        "url": "https://yellowstonerenovation.com/custom-decks/",
                        "sku": "DECK-SERVICE-001",
                        "brand": {
                            "@type": "Brand",
                            "name": "Yellowstone Renovation"
                        },
                        /* ⭐ REVIEW COUNT LOCKED TO 87 FOREVER */
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": "4.9",
                            "reviewCount": 87
                        },
                        "offers": {
                            "@type": "Offer",
                            "priceCurrency": "USD",
                            "price": "1",
                            "availability": "https://schema.org/InStock",
                            "url": "https://yellowstonerenovation.com/custom-decks/"
                        }
                    })}
                </script>

                {/* 🏢 Organization Schema — Helps Google identify your company */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "@id": "https://yellowstonerenovation.com/#organization",
                        "name": "Yellowstone Renovation",
                        "url": "https://yellowstonerenovation.com/",
                        "logo": "https://yellowstonerenovation.com/icons/logo.webp",
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "telephone": "859-545-7020",
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

                {/* ❓ FAQ Schema — Boosts Google rankings + builds SERP FAQ */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "How much does a custom deck cost in Lexington?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Custom decks typically range from $45–$95 per sq.ft depending on design complexity, elevation, materials such as composite decking, framing, and railing systems."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do you design decks with grill stations, lighting, and seating?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes — we offer complete deck design including built-in benches, outdoor kitchens, pergolas, privacy walls, and integrated LED lighting."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do you offer free design consultations?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes — every estimate includes layout options, material samples, and optional 3D design visuals."
                                }
                            }
                        ]
                    })}
                </script>
            </Helmet>



            <HeroModern
                bgImage="/images/deck10.webp"
                subtitle="Custom Deck Design & Construction"
                title="Custom Decks Built for Your Lifestyle"
                description="Transform your outdoor space with a custom deck tailored to your home, style, and the way you live — premium materials, expert craftsmanship, stunning results."
                buttonText="Free Custom Deck Quote"
                buttonLink="/contact"
                cardImage="/images/deck9.webp"
                location="Lexington, KY"
                tags={["Custom ", "Design", "Living"]}
                projectTitle="Premium Custom Decks in Your Area"
                projectPrice="From $9,995"
                accentColor="#0a923d"
            />

            <GallerySection
                title="Custom Deck Builder Gallery — Lexington, KY"
                subtitle="Explore uniquely designed custom decks — crafted for comfort, entertaining, and outdoor living made easy."
                highlight="CUSTOM DECK BUILDER"
                background="#ffffff"
                images={[
                    "/images/deck/deck-lexington105.webp",
                    "/images/deck/deck-lexington104.webp",
                    "/images/deck/deck-lexington2.webp",
                    "/images/deck/deck-lexington01.webp",
                    "/images/deck/deck-lexington35.webp",
                    "/images/deck/deck-lexington65.webp",
                    "/images/deck/deck-lexington54.webp",
                    "/images/deck/deck-lexington23.webp",
                    "/images/deck/deck-lexington16.webp",
                    "/images/deck/deck-lexington87.webp",
                    "/images/deck/deck-lexington34.webp",
                    "/images/deck/deck-lexington65.webp",
                    "/images/deck/deck-lexington23.webp",
                    "/images/deck/deck-lexington87.webp",
                    "/images/deck/deck-lexington21.webp",
                    "/images/deck/deck-lexington57.webp",
                    "/images/deck/deck-lexington67.webp",
                    "/images/deck/deck-lexington87.webp",
                    "/images/deck/deck-lexington23.webp",
                    "/images/deck/deck-lexington7.webp",
                    "/images/deck/deck-lexington96.webp",

                ]}
            />

            <DealerBanner
                title="Designed for Beauty, Built for Life"
                highlight=" Lexington’s Custom Deck Experts"
                description="We design and build custom decks that elevate your home’s outdoor living experience. Every detail — from layout and stair placement to materials and finishes — is customized to fit your space and your needs."
                backgroundColor="#ffffff"
                highlightColor="#247704"
            />
            <BeforeAfter
                title="Deck Before & After Transformations"
                description="Watch how we replace old, unsafe decks with beautiful, long-lasting outdoor spaces perfect for relaxing, grilling, and entertaining. Built strong for Kentucky weather."
                buttonText="See More Deck Projects"
                buttonLink="/projects"
                accentColor="#0a923d"
                images={[
                    {
                        before: "/images/deckafter3.webp",
                        after: "/images/deckbefore3.webp"
                    },
                    {
                        before: "/images/deckafter.webp",
                        after: "/images/deckbefore.webp"
                    }
                ]}
            />
            <Services
                title="Custom Deck Design & Build"
                subtitle="Modern layouts, premium materials, and fully tailored outdoor living solutions — built around how you relax, gather, and enjoy your home."
                accentColor="#0a923d"
                bgImage="/images/deck-bg.jpg"
                services={[
                    {
                        title: "Custom Decks",
                        description:
                            "Your deck — your design. We build personalized layouts to fit your yard, home, and lifestyle. Multi-level platforms, wrap-around decks, outdoor kitchens, curved edges — the possibilities are endless.",
                        image: "/images/deck11.webp",
                        link: "/custom-decks",
                    },
                    {
                        title: "Composite or Wood Choices",
                        description:
                            "Choose from low-maintenance composite decking or the warm beauty of natural wood. We help you select the perfect material based on your design goals and budget.",
                        image: "/images/deck7.webp",
                        link: "/wood-decks",
                    },
                    {
                        title: "Deck Railings & Privacy Options",
                        description:
                            "Make your deck safer and more enjoyable with beautiful railing systems, privacy screens, built-in benches, lighting accents, and more.",
                        image: "/images/deck8.webp",
                        link: "/contact",
                    },
                    {
                        title: "Entertainment & Comfort Enhancements",
                        description:
                            "Add features like pergolas, fire pits, lighting, stair lighting, outlets for sound & TV — turning your deck into the ultimate hangout space.",
                        image: "/images/deck9.webp",
                        link: "/contact",
                    },
                ]}
            />

            <MainSectionSideBar
                title="Custom Deck Contractors in Lexington, KY"
                sections={[
                    {
                        heading: "Custom Deck Builder in Lexington KY — Fully Tailored Outdoor Spaces",
                        text: `We build custom decks designed exclusively for your home, backyard, and lifestyle — never prefabricated or one-size-fits-all layouts. From complete outdoor entertainment zones to cozy relaxation retreats, every deck is optimized for usable square footage, proper flow, and comfort. Our design team helps you choose shapes, height transitions, traffic pathways, and seating zones that make your backyard more functional and enjoyable. Searching for “custom deck builder near me in Lexington KY”? We deliver unique craftsmanship and durable construction built to last decades.`
                    },
                    {
                        heading: "Endless Deck Design Options",
                        text: `We offer modern straight-line designs, curved edges, wrap-around layouts, built-in planters, outdoor dining zones, grilling stations, and more. You control every detail — from aesthetic style and railing upgrades to material selection and accent features. Using 3D planning, we show you the final design before installation to ensure you love every element. With us, you get unlimited customization and a deck that complements your home’s architecture perfectly.`
                    },
                    {
                        heading: "Composite or Wood — Your Choice, Expertly Installed",
                        text: `Choose low-maintenance composite decking for fade-resistant and weather-proof outdoor living, or select premium wood like cedar and redwood for natural beauty and warmth. We help compare lifespan, warranty, color options, slip-resistance, and pricing for the perfect match. Whether you pick composite or wood, your deck is installed with precision structural supports, weather protection, and finishing details that ensure long-term safety and performance.`
                    },
                    {
                        heading: "Multi-Level Deck Builds",
                        text: `For homes with sloped yards or families wanting separate lifestyle zones, multi-level deck construction is a perfect solution. Create spaces for dining, lounging, grilling, hot tub areas, or fire feature seating — each level designed for a specific purpose. We engineer each tier for stability, drainage, and a beautiful stepped transition that makes your backyard feel larger and more dynamic.`
                    },
                    {
                        heading: "Deck Replacement & Outdoor Expansions",
                        text: `If your current deck is outdated, unsafe, or too small — we rebuild better. We remove failing structures and upgrade framing, waterproofing, and design to maximize long-term strength and property value. Expand your outdoor footprint by adding square footage, turning stairs into larger entertainment landings, or integrating new railing and lighting systems. A modern deck replacement transforms the entire feel of your backyard.`
                    },
                    {
                        heading: "Add-Ons for Style & Function",
                        text: `Boost comfort and usability with premium enhancements: LED lighting, stair illumination, pergolas and shade covers, built-in seating, railing upgrades, fire pits, privacy walls, entertainment wiring for sound & TV, outlets for appliances, and more. Every upgrade is carefully installed to withstand Kentucky humidity, rainfall, and year-round climate. Create your dream outdoor living space with all the features that elevate lifestyle.`
                    },
                    {
                        heading: "Why Lexington Homeowners Trust Us",
                        text: `We are a fully licensed and insured local deck contractor serving Lexington, Nicholasville, Georgetown, Richmond, Versailles, and surrounding Central Kentucky communities. Our reputation is built on premium quality craftsmanship, clear communication, and fair pricing without surprises. We treat each backyard like our own — clean job sites, professional crews, and strong warranties included.`
                    },
                    {
                        heading: "Free Custom Deck Estimate in Lexington KY",
                        text: `Ready to transform your outdoor living space with a custom-designed deck? Contact Yellowstone Renovation today for a free on-site consultation and detailed project quote. We’ll help you plan materials, design, timeline, and investment — delivering a stunning outdoor upgrade that adds comfort, beauty, and long-term home value.`
                    },
                ]}

                offers={[
                    {
                        image: "/images/deck7.webp",
                        text: "Get $2,000 OFF Your New Custom Deck Build",
                        button: "Claim Discount",
                        link: "/contact",
                    },
                    {
                        image: "/images/deck8.webp",
                        text: "Explore Our Custom Deck Gallery",
                        button: "View Gallery",
                        link: "/projects",
                    },
                ]}

                whyUs={[
                    "Local experts in custom deck building",
                    "Premium materials & expert craftsmanship",
                    "Modern design options tailored to your lifestyle",
                    "Licensed & insured with clean work sites",
                    "Guaranteed comfort, beauty, and durability",
                ]}

                projects={[
                    { image: "/images/deck4.webp", title: "Custom Backyard Lounge" },
                    { image: "/images/deck5.webp", title: "Luxury Entertainment Deck" },
                    { image: "/images/deck6.webp", title: "Modern Rail & Lighting Design" },
                    { image: "/images/deck7.webp", title: "Multi-Level Home Deck" },
                ]}

                findUs={[
                    { name: "Yelp", rating: "4.6/5", logo: "/icons/yelp.webp" },
                    { name: "Google", rating: "4.9/5", logo: "/icons/google-reviews.webp" },
                ]}

                blog={[
                    {
                        title: "Top Custom Deck Design Trends in Kentucky",
                        date: "April 12, 2025",
                        author: "Vasyl",
                        image: "/images/deck6.webp",
                    },
                    {
                        title: "How Custom Decks Add Value to Your Home",
                        date: "May 20, 2025",
                        author: "Peter",
                        image: "/images/deck7.webp",
                    },
                    {
                        title: "Wood or Composite? Pros & Cons for Deck Owners",
                        date: "June 5, 2025",
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
                        tag: "Custom Deck Builders",
                        heading: "Your Deck, Your Design",
                        description:
                            "Create the perfect outdoor space for relaxation and entertainment — 100% customized to you.",
                        button: "Design Your Deck",
                        link: "/contact",
                        projectImage: "/images/remodler24.webp",
                        projectLocation: "Lexington, KY",
                        projectInfo1: "Multi-Level Design",
                        projectInfo2: "Custom Layout",
                        projectName: "Backyard Custom Deck",
                        projectPrice: "14,995",
                    },
                    {
                        image: "/images/remodler13.webp",
                        tag: "Wood & Composite Options",
                        heading: "Beauty + Performance",
                        description:
                            "Choose natural wood for warmth or composite for maintenance-free living — we build both.",
                        button: "Material Options",
                        link: "/contact",
                        projectImage: "/images/deck4.webp",
                        projectLocation: "Nicholasville, KY",
                        projectInfo1: "Composite Boards",
                        projectInfo2: "Hidden Fasteners",
                        projectName: "Stylish Outdoor Living",
                        projectPrice: "18,450",
                    },
                    {
                        image: "/images/deck6.webp",
                        tag: "Deck Upgrades",
                        heading: "Add Comfort & Function",
                        description:
                            "Pergolas, railings, lighting & more — create a deck that’s ready for everyday enjoyment.",
                        button: "Upgrade Ideas",
                        link: "/contact",
                        projectImage: "/images/deck2.webp",
                        projectLocation: "Georgetown, KY",
                        projectInfo1: "LED Lighting",
                        projectInfo2: "Built-In Features",
                        projectName: "Ultimate Deck Space",
                        projectPrice: "21,300",
                    },
                ]}
            />

        </Layout>
    );
}
