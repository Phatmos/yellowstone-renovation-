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


export default function CoveredDeckPage() {
    return (
        <Layout>
            <Helmet>
                {/* ✅ Keywords for Covered Decks */}
                <meta
                    name="keywords"
                    content="Covered decks Lexington KY, Patio covers contractor Kentucky, Pergola builder Lexington, Porch roof builder, Outdoor living shade solutions KY"
                />

                {/* ✅ Social Sharing (Open Graph) */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Covered Deck Builder in Lexington, KY | Patio Roofs & Pergolas" />
                <meta property="og:description" content="Keep cool and comfortable outdoors — Custom covered decks, patio roofs & pergolas that stand up to Kentucky weather. Free estimates!" />
                <meta property="og:image" content="https://yellowstonerenovation.com/images/deck8.webp" />
                <meta property="og:url" content="https://yellowstonerenovation.com/covered-decks/" />
                <meta property="og:site_name" content="Yellowstone Renovation" />

                {/* ✅ Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Covered Deck Builder in Lexington, KY" />
                <meta name="twitter:description" content="Add comfort + shade to your outdoor living space. Free quotes across Central KY." />
                <meta name="twitter:image" content="https://yellowstonerenovation.com/images/deck8.webp" />
            </Helmet>

            {/* ✅ On-page structured SEO */}
            <SEO
                title="Covered Decks & Patio Roofs | Lexington, KY Outdoor Living Contractor"
                description="Enjoy shade and comfort year-round with custom covered decks, patio roofs & pergolas. Designed for Kentucky weather. Serving Lexington, Nicholasville, Georgetown & Richmond."
                pathname="/covered-decks/"
                image="https://yellowstonerenovation.com/images/deck8.webp"
            />

            <Helmet>
                {/* ✅ Service Schema */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HomeAndConstructionBusiness",
                        "name": "Yellowstone Renovation",
                        "url": "https://yellowstonerenovation.com/covered-decks/",
                        "image": "https://yellowstonerenovation.com/images/deck8.webp",
                        "serviceType": [
                            "Covered Deck Construction",
                            "Patio Roof Installation",
                            "Pergola Builder",
                            "Outdoor Living Spaces"
                        ],
                        "areaServed": [
                            "Lexington, KY",
                            "Nicholasville, KY",
                            "Georgetown, KY",
                            "Winchester, KY",
                            "Richmond, KY"
                        ],
                        "telephone": "859-545-7020"
                    })}
                </script>

                {/* ✅ FAQ Schema (high ranking booster) */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "How much does a covered deck cost in Lexington, KY?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Most covered decks range $75–$130 per sq.ft depending on roof structure, lighting, and material selection such as composite decking."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do covered decks increase home value?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes — covered outdoor living spaces are one of the highest-ROI upgrades for Kentucky homes, offering year-round usability and improved resale appeal."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do you build gable, shed and flat roof covers?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes — we custom design covered decks including gable roofs, shed-style covers, pergolas, modern aluminum roofs, and full screened-in porches."
                                }
                            }
                        ]
                    })}
                </script>
            </Helmet>


            <HeroModern
                bgImage="/images/deck8.webp"
                subtitle="Covered Deck Construction Specialists"
                title="Enjoy Outdoor Living in Any Weather"
                description="Upgrade your backyard with a covered deck that protects from rain, sun, and Kentucky heat — built for year-round comfort and long-lasting beauty."
                buttonText="Free Covered Deck Quote"
                buttonLink="/contact"
                cardImage="/images/deck9.webp"
                location="Nicholasville, KY"
                tags={["Covered Decks", "Rails",]}
                projectTitle="Premium Covered Deck Near You "
                projectPrice="From $9,995"
                accentColor="#0a923d"
            />


            <GallerySection
                title="Covered Deck Gallery in Lexington, KY"
                subtitle="See our custom covered deck installations — engineered to deliver shade, comfort, and outdoor enjoyment through every season."
                highlight="COVERED DECK BUILDER"
                background="#ffffff"
                images={[
                    "/images/deck-builder1.webp",
                    "/images/deck-builder2.webp",
                    "/images/deck-builder3.webp",
                    "/images/deck-builder4.webp",
                    "/images/deck-builder5.webp",
                    "/images/deck-builder6.webp",
                    "/images/deck-builder23.webp",
                    "/images/deck-builder9.webp",
                    "/images/deck-builder10.webp",
                    "/images/deck-builder11.webp",
                    "/images/deck-builder24.webp",
                    "/images/deck-builder13.webp",
                    "/images/deck-builder25.webp",
                    "/images/deck-builder23.webp",
                    "/images/deck-builder26.webp",
                    "/images/deck-builder17.webp",
                    "/images/deck-builder18.webp",
                    "/images/deck-builder19.webp",
                    "/images/deck-builder28.webp",
                    "/images/deck-builder23.webp",
                    "/images/deck-builder22.webp",
                ]}
            />

            <DealerBanner
                title="Built for Comfort — All Year Long"
                highlight="Lexington’s Covered Deck Experts"
                description="Enjoy shade in the summer and shelter in the rain with a covered deck designed to last. We build strong roof-supported structures using top-quality materials — engineered for safety, durability, and beautiful architectural appeal."
                backgroundColor="#ffffff"
                highlightColor="#247704"
            />
            <Services
                title="Covered Deck Construction in Lexington, KY"
                subtitle="Enjoy outdoor living in every season — our covered decks, patio roofs, and shade structures protect you from sun, rain, and heat while adding beauty, comfort, and lasting value to your home."
                accentColor="#0a923d"
                bgImage="/images/deck-bg.jpg"
                services={[
                    {
                        title: "Custom Covered Decks",
                        description:
                            "Upgrade your backyard with a professionally built covered deck designed to deliver year-round comfort. Our structures shield you from Kentucky rain, sun, and humidity — allowing you to relax outdoors no matter the season. We custom-design every roof to match your home’s architecture, increase usable square footage, and enhance curb appeal. Strong, safe, and built to last.",
                        image: "/images/deck11.webp",
                        link: "/covered-decks",
                    },
                    {
                        title: "Patio Roofs & Covered Porches",
                        description:
                            "We build solid roof systems that seamlessly tie into your home — offering complete overhead protection and a custom look. Whether you prefer a gable roof, hip roof, metal roofing, or modern flat designs, our patio and porch covers provide shade, leak resistance, and structural integrity. A cost-effective way to expand outdoor living while protecting your furniture and deck surface.",
                        image: "/images/deck7.webp",
                        link: "/covered-decks",
                    },
                    {
                        title: "Pergolas & Shade Structures",
                        description:
                            "Create a stylish outdoor escape with custom pergolas, privacy walls, and shade structures perfect for hosting, dining, or relaxing. We offer cedar, composite, and aluminum pergolas designed to filter sunlight while enhancing airflow. Add lighting, climbing vines, or retractable canopies for a designer touch that fits your backyard aesthetic.",
                        image: "/images/deck8.webp",
                        link: "/covered-decks",
                    },
                    {
                        title: "Lighting, Fans & Seasonal Enhancements",
                        description:
                            "Turn your deck into an all-day, all-night living space. We install ceiling fans, recessed lighting, heaters, outlets, mounted TVs, and smart comfort features to keep your space cool, illuminated, and entertainment-ready. Weatherproof materials and hidden wiring ensure long-lasting performance and a clean, modern look.",
                        image: "/images/deck9.webp",
                        link: "/conta",
                    },
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
            <MainSectionSideBar
                title="Covered Deck Contractors in Lexington, KY"
                sections={[
                    {
                        heading: "Covered Deck Builder in Lexington KY — Outdoor Living Made Comfortable",
                        text: `We design and build custom covered decks that keep you comfortable in every season. Rain, sun, or humidity — enjoy more outdoor time without worrying about weather. Covered decks improve home value, protect furniture, and extend usable living space with long-term durability built for Kentucky’s climate.`
                    },
                    {
                        heading: "Expert Roof Integration With Your Home",
                        text: `Our covered deck roof systems are structurally connected into your existing roofline — not just bolted onto the home. This ensures leak protection, structural support, seamless aesthetics, and increased property value. We match shingles, trim, soffits, and gutters for a unified, high-end finish.`
                    },
                    {
                        heading: "Custom Roof Designs & Architectural Styles",
                        text: `Choose from gable roofs, hip roofs, vaulted ceilings, cathedral-style covers, flat modern outdoor roof systems, and pergola hybrids. Whatever your architectural style — craftsman, modern farmhouse, or contemporary — we design a covered deck that complements the home perfectly.`
                    },
                    {
                        heading: "Weather-Resistant Materials Made for Kentucky",
                        text: `Kentucky storms demand durability. We use moisture-resistant framing, exterior-grade beams, weather-sealed fasteners, and roof materials rated for high winds and heavy rain. Every structure is engineered to code for long-term reliability and maximum homeowner safety.`
                    },
                    {
                        heading: "Covered Deck Replacement & Structural Upgrades",
                        text: `If your old deck no longer feels safe or functional, we rebuild it stronger and smarter. We can install new footings, reinforce framing, add drainage, and integrate a full roof system with better airflow, comfort, and weatherproofing technology.`
                    },
                    {
                        heading: "Screened-In Deck Enclosures",
                        text: `Keep mosquitoes and pests out while enjoying fresh air and views. Screened-in covered decks are perfect for families who want comfortable evenings outside without bug spray — providing a versatile indoor-outdoor living space that can be used day or night.`
                    },
                    {
                        heading: "Under-Deck Waterproofing & Dry-Space Systems",
                        text: `Maximize usable space with under-deck drainage panels that keep the area dry for storage or additional entertainment. Add lighting, a hot tub nook, a lounge area, or outdoor kitchen below your deck — moisture free and protected from rain.`
                    },
                    {
                        heading: "Outdoor Luxury Without Maintenance Stress",
                        text: `Upgrade your comfort with ceiling fans, heaters, recessed lighting, and weather-resistant features designed to extend your outdoor living into late evenings and colder months. Optional composite decking eliminates the need for staining or sealing.`
                    },
                    {
                        heading: "Custom Add-Ons & Entertainment Enhancements",
                        text: `We install privacy walls, railing systems, LED lighting, mounted TVs, speakers, outlets, fire features, and more. A covered deck becomes your family’s go-to spot for hosting BBQs, watching sports, and relaxing in a comfortable flow between indoors and outdoors.`
                    },
                    {
                        heading: "Why Homeowners Choose Us for Covered Decks in Lexington KY",
                        text: `Licensed, insured, highly rated, and known for clean job sites — we take pride in expert craftsmanship and on-time delivery. We serve Lexington, Georgetown, Nicholasville, Richmond & surrounding Central Kentucky areas with professionalism and transparent pricing.`
                    },
                    {
                        heading: "Boost Your Home’s Value With Outdoor Living",
                        text: `Covered decks are one of the highest-ROI home improvements in Kentucky, increasing usable space and desirability. Buyers love protected outdoor areas — meaning a covered deck can pay off today and at resale.`
                    },
                    {
                        heading: "Free Covered Deck Estimate in Lexington KY",
                        text: `Ready to bring your backyard vision to life? Request your free onsite consultation today. We provide clear pricing, fast scheduling, and premium materials — delivering a beautiful outdoor space that performs flawlessly every season.`
                    }
                ]}


                offers={[
                    {
                        image: "/images/deck7.webp",
                        text: "Save $2,000 on Covered Deck Installation — Limited Time Offer",
                        button: "Claim Discount",
                        link: "/contact",
                    },
                    {
                        image: "/images/deck8.webp",
                        text: "Explore More Covered Deck Projects",
                        button: "View Gallery",
                        link: "/projects",
                    },
                ]}

                whyUs={[
                    "Licensed & insured experts in outdoor structures",
                    "Engineered for safety, durability, and weather performance",
                    "Custom rooflines that match your home",
                    "Comfort-focused designs with fans & lighting",
                    "Trusted by Lexington homeowners for years",
                ]}

                projects={[
                    { image: "/images/deck4.webp", title: "Covered Outdoor Lounge" },
                    { image: "/images/deck5.webp", title: "Extended Roof Deck" },
                    { image: "/images/deck6.webp", title: "Covered Entertaining Space" },
                    { image: "/images/deck7.webp", title: "Shade & Privacy Design" },
                ]}

                findUs={[
                    { name: "Yelp", rating: "4.6/5", logo: "/icons/yelp.webp" },
                    { name: "Google", rating: "4.9/5", logo: "/icons/google-reviews.webp" },
                ]}

                blog={[
                    {
                        title: "Benefits of Adding a Covered Deck in Kentucky",
                        date: "April 12, 2025",
                        author: "Vasyl",
                        image: "/images/deck6.webp",
                    },
                    {
                        title: "Covered Deck Design Ideas for Lexington Homes",
                        date: "May 20, 2025",
                        author: "Peter",
                        image: "/images/deck7.webp",
                    },
                    {
                        title: "How a Covered Deck Boosts Home Value",
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
                        tag: "Covered Deck Builders",
                        heading: "Comfortable Outdoor Living",
                        description:
                            "Stay shaded and dry — enjoy the outdoors more, no matter the weather.",
                        button: "Covered Deck Options",
                        link: "/contact",
                        projectImage: "/images/remodler24.webp",
                        projectLocation: "Lexington, KY",
                        projectInfo1: "Weather-Resistant",
                        projectInfo2: "Solid Roof",
                        projectName: "Covered Backyard Deck",
                        projectPrice: "14,995",
                    },
                    {
                        image: "/images/remodler13.webp",
                        tag: "Luxury Covered Decks",
                        heading: "Modern Shade & Style",
                        description:
                            "Rich finishes, lighting, and premium materials — elevate your outdoor living experience.",
                        button: "Design Inspiration",
                        link: "/contact",
                        projectImage: "/images/deck4.webp",
                        projectLocation: "Nicholasville, KY",
                        projectInfo1: "Integrated Fans",
                        projectInfo2: "Premium Design",
                        projectName: "All-Season Dream Deck",
                        projectPrice: "18,450",
                    },
                    {
                        image: "/images/deck6.webp",
                        tag: "Deck Upgrades",
                        heading: "Add Comfort & Function",
                        description:
                            "Railings, lighting, pergolas and more — tailor your space to how you live and entertain.",
                        button: "Upgrade Ideas",
                        link: "/contact",
                        projectImage: "/images/deck2.webp",
                        projectLocation: "Georgetown, KY",
                        projectInfo1: "LED Lighting",
                        projectInfo2: "Ceiling Fan",
                        projectName: "Outdoor Entertainment Deck",
                        projectPrice: "21,300",
                    },
                ]}
            />

        </Layout>
    );
}
