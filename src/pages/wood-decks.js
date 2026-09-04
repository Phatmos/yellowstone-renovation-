import React from "react";
import Layout from "../components/Layout";
import GallerySection from "../components/GallerySection";
import Services from "../components/Services.js"
import DealerBanner from "../components/DealerBanner";
import HeroModern from "../components/HeroModern";
import MainSectionSideBar from "../components/MainSectionSideBar";
import SEO from "../components/SEO";
import BeforeAfter from "../components/BeforeAfter";
import WindowsPromoSection from "../components/WindowsPromoSection";
import { Helmet } from "react-helmet";
import HeroRoofingSection from "../components/HeroRoofingSection";

export default function WoodDeckPage() {
    return (
        <Layout>
            <Helmet>
                {/* ===========================================================
        🔥 SEO Meta Tags
    ============================================================ */}
                <meta
                    name="keywords"
                    content="Wood decks Lexington KY, Cedar deck builder, Pressure treated decks Kentucky, Backyard deck construction, Outdoor living Lexington KY"
                />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="Wood Deck Builder in Lexington, KY | Natural Cedar & Pressure-Treated Decks" />
                <meta property="og:description" content="Custom wood decks built for Kentucky weather — cedar, pressure-treated, elevated, stairs & railing. 4.9★ rated contractor · Free estimates!" />
                <meta property="og:image" content="https://yellowstonerenovation.com/images/og-wood-decks.jpg" />
                <meta property="og:url" content="https://yellowstonerenovation.com/wood-decks/" />
                <meta property="og:site_name" content="Yellowstone Renovation" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Premium Wood Deck Builder in Lexington KY" />
                <meta name="twitter:description" content="Cedar & pressure-treated decks with premium craftsmanship — Free quotes!" />
                <meta name="twitter:image" content="https://yellowstonerenovation.com/images/og-wood-decks.jpg" />
            </Helmet>

            {/* Your SEO component */}
            <SEO
                title="Wood Deck Builder in Lexington, KY | Custom Outdoor Decks"
                description="We design & build natural wood decks that bring warmth, beauty & durability to your backyard. Serving Lexington, Nicholasville, Georgetown, Winchester & Richmond."
                pathname="/wood-decks/"
                image="https://yellowstonerenovation.com/images/og-wood-decks.jpg"
            />

            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            /* =====================================================
                               1️⃣ LocalBusiness Schema
                            ====================================================== */
                            {
                                "@type": "LocalBusiness",
                                "@id": "https://yellowstonerenovation.com/#localbusiness",
                                "name": "Yellowstone Renovation",
                                "url": "https://yellowstonerenovation.com",
                                "logo": "https://yellowstonerenovation.com/icons/logo.webp",
                                "image": "https://yellowstonerenovation.com/images/og-wood-decks.jpg",
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
                                    "Lexington, KY",
                                    "Nicholasville, KY",
                                    "Georgetown, KY",
                                    "Winchester, KY",
                                    "Richmond, KY"
                                ],
                                "serviceType": [
                                    "Wood Deck Construction",
                                    "Cedar Deck Builder",
                                    "Pressure-Treated Deck Installation",
                                    "Deck Stairs & Railings"
                                ],
                                "sameAs": [
                                    "https://www.facebook.com/p/Yellowstone-Renovation-61551123481170/",
                                    "https://www.instagram.com/yellowstone_renovation/",
                                    "https://maps.google.com/?q=Yellowstone+Renovation+Nicholasville+KY"
                                ]
                            },

                            /* =====================================================
                               2️⃣ Organization Schema
                            ====================================================== */
                            {
                                "@type": "Organization",
                                "@id": "https://yellowstonerenovation.com/#organization",
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
                                },
                                "sameAs": [
                                    "https://www.facebook.com/p/Yellowstone-Renovation-61551123481170/",
                                    "https://www.instagram.com/yellowstone_renovation/",
                                    "https://maps.google.com/?q=Yellowstone+Renovation+Nicholasville+KY"
                                ]
                            },

                            /* =====================================================
                               3️⃣ Product Schema (⭐ Review Snippets)
                            ====================================================== */
                            {
                                "@type": "Product",
                                "@id": "https://yellowstonerenovation.com/#wooddecks",
                                "name": "Custom Wood Deck Construction — Cedar & Pressure-Treated",
                                "description": "Professional wood deck building in Lexington, KY including cedar and pressure-treated lumber, stairs, railings & premium craftsmanship.",
                                "image": {
                                    "@type": "ImageObject",
                                    "url": "https://yellowstonerenovation.com/images/og-wood-decks.jpg",
                                    "width": 1200,
                                    "height": 800
                                },
                                "brand": {
                                    "@type": "Brand",
                                    "name": "Yellowstone Renovation"
                                },
                                "aggregateRating": {
                                    "@type": "AggregateRating",
                                    "ratingValue": "4.9",
                                    "reviewCount": "87"
                                }
                            },

                            /* =====================================================
                               4️⃣ Review Snippet Schema
                            ====================================================== */
                            {
                                "@type": "Review",
                                "itemReviewed": {
                                    "@type": "Product",
                                    "name": "Wood Deck Construction Services"
                                },
                                "reviewRating": {
                                    "@type": "Rating",
                                    "ratingValue": "5"
                                },
                                "author": {
                                    "@type": "Person",
                                    "name": "Verified Customer"
                                }
                            },

                            /* =====================================================
                               5️⃣ FAQ Schema
                            ====================================================== */
                            {
                                "@type": "FAQPage",
                                "mainEntity": [
                                    {
                                        "@type": "Question",
                                        "name": "How much does a wood deck cost in Lexington, KY?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text":
                                                "Most wood decks in Lexington start around $25–$45 per sq.ft installed depending on elevation, railings, stairs & stain finish."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Which type of wood deck lasts longest?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text":
                                                "Cedar and high-grade pressure-treated pine last longest. We seal every deck to improve resistance to rot, humidity, and insects."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Do you offer staining & maintenance?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text":
                                                "Yes — staining and resealing are available to protect wood decks from sun exposure, humidity, and Kentucky winter weather."
                                        }
                                    }
                                ]
                            }
                        ]
                    })}
                </script>
            </Helmet>


            <HeroRoofingSection
                background="/images/deck/deck-builder110.webp"
                title="Top Wood Deck Builder in Lexington, KY"
                subtitle="Custom-designed wood decks built with premium lumber, expert craftsmanship, and long-lasting protection. From pressure-treated to cedar, Yellowstone Renovation delivers beautiful outdoor spaces built to last across Central Kentucky."
                ratingText="⭐⭐⭐⭐⭐ 4.9 | #1 Local Deck Experts"
                placeholder="Enter your ZIP code"
                buttonText="Get a quick quote"
            />

            <GallerySection
                title="WOOD DECK BUILDER GALLERY"
                subtitle="Explore our beautifully crafted wood decks — designed for comfort, durability, and timeless outdoor living."
                highlight="WOOD DECK BUILDER"
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
            <DealerBanner
                title="Wood Decks Built Right — No Delays, No Shortcuts"
                highlight="Lexington’s Trusted Deck Pros"
                description="We build wood decks the right way the first time — solid structure, beautifully finished surfaces, and premium lumber that holds up strong through every season. Discover why homeowners choose us for durable outdoor upgrades that add style, comfort, and real value."
                backgroundColor="#ffffff"
                highlightColor="#247704"
            />

            <Services
                title="Wood Deck Construction"
                subtitle="Premium wood decks custom-built for comfort, durability, and timeless outdoor style."
                accentColor="#0a923d"
                bgImage="/images/deck-bg.jpg"
                services={[
                    {
                        title: "Custom Wood Decks",
                        description:
                            "Designed around your lifestyle — our custom wood decks provide warm, natural beauty with structural durability that lasts for years.",
                        image: "/images/deck11.webp",
                        link: "/custom-decks",
                    },
                    {
                        title: "Pressure-Treated Decks",
                        description:
                            "A strong and affordable option resistant to rot, pests, and Kentucky weather — perfect for everyday outdoor living.",
                        image: "/images/deck7.webp",
                        link: "/wood-decks",
                    },
                    {
                        title: "Cedar & Redwood Decks",
                        description:
                            "Premium wood known for its rich color, long-lasting performance, and natural resistance to decay — built for elevated outdoor elegance.",
                        image: "/images/deck8.webp",
                        link: "/composite-decks",
                    },
                    {
                        title: "Pergolas & Railings",
                        description:
                            "Enhance privacy, shade, and design — custom-built pergolas, railings, and stairs completing your deck with a polished finish.",
                        image: "/images/deck9.webp",
                        link: "/covered-decks",
                    },
                ]}
            />

            <MainSectionSideBar
                title="Wood Deck Specialists in Lexington, KY"
                sections={[
                    {
                        heading: "Wood Deck Builder in Lexington, KY — Premium Custom Decks",
                        text: `Yellowstone Renovation is a top-rated wood deck builder in Lexington KY, specializing in custom-built outdoor living spaces that enhance beauty, comfort, and property value. We design and install pressure-treated wood decks, cedar decks, and redwood decks engineered to perform in Kentucky’s climate. From surface boards to hidden fasteners and railing systems — every detail is built with precision. Searching for “wood deck builder near me in Lexington KY”? We deliver craftsmanship you can trust, backed by reliable installation and a smooth, stress-free process from concept to completion.`
                    },
                    {
                        heading: "Custom Wood Deck Installation Lexington KY",
                        text: `Each wood deck is designed uniquely for your home, lifestyle, and outdoor layout. Whether you want a spacious entertaining area, a cozy porch extension, or a multi-zone layout, we build decks that function beautifully year-round. We ensure perfect post setting, structural stability, and clean finishing details while adhering to all building codes. Stylish, durable, and comfortable — our wood deck installations transform your backyard into a place you’ll never want to leave.`
                    },
                    {
                        heading: "Pressure-Treated Wood Decks",
                        text: `Pressure-treated lumber is one of the most affordable and durable options for outdoor decking in Lexington. It offers strong resistance to insects, rot, and moisture while providing the classic look of natural wood. It can be stained in various shades, allowing full control of the final style. For homeowners wanting long-lasting performance without a premium price — pressure-treated decks are an excellent choice.`
                    },
                    {
                        heading: "Premium Cedar & Redwood Decks",
                        text: `For homeowners who want the very best in beauty and performance, cedar and redwood decks deliver luxurious color, natural grain texture, and long-term rot resistance. These woods stay cool underfoot and maintain their rich appearance with proper sealing. Our team carefully hand-finishes every board for a stunning, custom-crafted look that elevates any home.`
                    },
                    {
                        heading: "Wood Deck Replacement & Restoration",
                        text: `Is your old deck unsafe or outdated? We provide complete wood deck replacement in Lexington KY — removing failing structures and rebuilding with superior framing and premium materials. We can also redesign the layout, add stairs, railing upgrades, privacy walls, and built-in features. A restored or rebuilt deck instantly boosts outdoor comfort and resale value.`
                    },
                    {
                        heading: "Multi-Level Wood Deck Designs",
                        text: `We bring ideas to life with stunning multi-level wood decks that expand usable space and create functional outdoor zones. Our designs seamlessly connect to patios, pools, and landscapes. Add dining space, grilling hubs, seating corners, shade structures, or performance LED lighting — your dream deck is closer than you think.`
                    },
                    {
                        heading: "Add-Ons & Custom Outdoor Enhancements",
                        text: `Make your wood deck even more enjoyable with upgrades like pergolas, railing systems, stairs, built-in seating, and hidden storage. We can also integrate lighting for ambiance and extended evening use. Every addition is engineered for safety, strength, and a clean, cohesive design.`
                    },
                    {
                        heading: "Why Choose Yellowstone Renovation — Wood Deck Experts in Lexington KY",
                        text: `Homeowners trust us for our experienced crews, premium materials, transparent pricing, and clean job sites. We proudly serve Lexington, Nicholasville, Georgetown, Richmond, and Versailles. Our dedication to quality means every project is built to last — no shortcuts, no surprises — just excellent craftsmanship and a result you’ll love showing off.`
                    },
                    {
                        heading: "Free Wood Deck Estimate in Lexington KY",
                        text: `Ready to upgrade your outdoor living space? Contact Yellowstone Renovation today for a free consultation and deck quote. We help you choose the right wood, layout, and add-ons that fit your budget and style. Build a deck that brings your backyard to life — with Central Kentucky’s trusted wood deck builders.`
                    },
                ]}

                offers={[
                    {
                        image: "/images/deck1.webp",
                        text: "Get $1500 OFF New Wood Deck Installation — Limited Time Offer",
                        button: "Claim Discount",
                        link: "/contact",
                    },
                    {
                        image: "/images/deck2.webp",
                        text: "See Completed Wood Deck Projects in Lexington",
                        button: "View Gallery",
                        link: "/projects",
                    },
                ]}

                whyUs={[
                    "Top-rated wood deck builder in Lexington KY",
                    "Premium cedar, redwood & pressure-treated lumber",
                    "Custom layouts with built-in seating & pergolas",
                    "Licensed, insured, fast and clean installation",
                    "Durable construction built for Kentucky weather",
                ]}

                projects={[
                    { image: "/images/deck4.webp", title: "Cedar Wood Deck" },
                    { image: "/images/deck5.webp", title: "Elevated Backyard Deck" },
                    { image: "/images/deck6.webp", title: "Wood Stairs & Landing" },
                    { image: "/images/deck7.webp", title: "Wood Rail Design" },
                ]}

                findUs={[
                    { name: "Yelp", rating: "4.6/5", logo: "/icons/yelp.webp" },
                    { name: "Google", rating: "4.9/5", logo: "/icons/google-reviews.webp" },
                ]}

                blog={[
                    {
                        title: "Top Wood Types for Decks in Kentucky Weather",
                        date: "April 12th, 2025",
                        author: "Vasyl",
                        image: "/images/deck6.webp",
                    },
                    {
                        title: "Wood Deck Design Trends for Lexington Homes",
                        date: "May 20th, 2025",
                        author: "Peter",
                        image: "/images/deck7.webp",
                    },
                    {
                        title: "How a New Wood Deck Increases Home Value",
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
                        tag: "Wood Deck Builders",
                        heading: "Custom Wood Decks Built for Your Lifestyle",
                        description:
                            "Upgrade your backyard with a beautifully crafted wood deck designed to fit your home and enhance outdoor living — built strong for Kentucky weather.",
                        button: "Explore Wood Deck Options",
                        link: "/contact",
                        projectImage: "/images/remodler24.webp",
                        projectLocation: "Lexington, KY",
                        projectInfo1: "Pressure-Treated",
                        projectInfo2: "Premium Lumber",
                        projectName: "Backyard Wood Deck",
                        projectPrice: "12,995"
                    },
                    {
                        image: "/images/remodler13.webp",
                        tag: "Cedar Decks",
                        heading: "Rich Color & Natural Beauty",
                        description:
                            "Cedar wood offers unmatched style, long-lasting performance, and a cool-to-the-touch surface — the perfect combination of luxury and durability.",
                        button: "See Cedar Deck Ideas",
                        link: "/contact",
                        projectImage: "/images/deck4.webp",
                        projectLocation: "Nicholasville, KY",
                        projectInfo1: "Cedar Boards",
                        projectInfo2: "Hidden Fasteners",
                        projectName: "Cedar Outdoor Oasis",
                        projectPrice: "14,450"
                    },
                    {
                        image: "/images/deck6.webp",
                        tag: "Deck Upgrades",
                        heading: "Enhance Your Outdoor Living Space",
                        description:
                            "Add railings, stairs, pergolas, and custom lighting to make your deck more comfortable, stylish, and built for unforgettable gatherings.",
                        button: "Deck Add-Ons & Upgrades",
                        link: "/contact",
                        projectImage: "/images/deck2.webp",
                        projectLocation: "Georgetown, KY",
                        projectInfo1: "LED Lighting",
                        projectInfo2: "Custom Railings",
                        projectName: "Outdoor Living Expansion",
                        projectPrice: "18,300"
                    }
                ]}
            />

        </Layout>
    );
}
