import React from "react";
import Layout from "../components/Layout";
import GallerySection from "../components/GallerySection";
import Services from "../components/Services.js";
import DealerBanner from "../components/DealerBanner";
import HeroModern from "../components/HeroModern";
import MainSectionSideBar from "../components/MainSectionSideBar";
import SEO from "../components/SEO";
import BeforeAfter from "../components/BeforeAfter";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";

export default function OutdoorDeckPage() {
    return (
        <Layout>
            <Helmet>
                {/* ✅ SEO Keywords */}
                <meta
                    name="keywords"
                    content="outdoor deck companies near me, outdoor deck builders Lexington KY, outdoor living area builder, outdoor deck contractors, backyard deck builders, deck installation Lexington, outdoor living space builder Kentucky"
                />

                {/* ✅ Social Media OpenGraph */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Outdoor Deck Construction in Lexington, KY | Custom Backyard & Outdoor Living Experts" />
                <meta property="og:description" content="Design and build stunning outdoor decks in Lexington, KY. 4.9★ BBB certified builders offering free estimates, fast installation, and long-lasting outdoor living solutions." />
                <meta property="og:image" content="https://yellowstonerenovation.com/images/deck-builder14.webp" />
                <meta property="og:url" content="https://yellowstonerenovation.com/outdoor-decks/" />
                <meta property="og:site_name" content="Yellowstone Renovation" />

                {/* ✅ Twitter Cards */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Outdoor Deck Builders in Lexington, KY | Backyard & Living Space Experts" />
                <meta name="twitter:description" content="Custom outdoor decks, patios, and backyard living areas — designed to last. Free estimates and fast local installation!" />
                <meta name="twitter:image" content="https://yellowstonerenovation.com/images/deck-builder14.webp" />
            </Helmet>

            {/* ✅ Primary SEO Component */}
            <SEO
                title="Outdoor Deck Builders in Lexington, KY | Backyard & Outdoor Living Experts"
                description="Outdoor deck construction by Lexington’s trusted team. We design, build, and install high-quality decks, patios, and outdoor spaces that enhance comfort, beauty, and home value."
                pathname="/outdoor-decks/"
                image="https://yellowstonerenovation.com/images/deck-builder14.webp"
            />

            {/* ✅ Local Business Schema */}
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HomeAndConstructionBusiness",
                        "name": "Yellowstone Renovation",
                        "url": "https://yellowstonerenovation.com/outdoor-decks/",
                        "logo": "https://yellowstonerenovation.com/icons/logo.webp",
                        "image": "https://yellowstonerenovation.com/images/deck-builder14.webp",
                        "telephone": "859-545-7020",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Lexington",
                            "addressRegion": "KY",
                            "postalCode": "40502",
                            "addressCountry": "US"
                        },
                        "serviceType": [
                            "Outdoor Deck Construction",
                            "Backyard Deck Installation",
                            "Composite Deck Builders",
                            "Outdoor Living Space Design"
                        ],
                        "areaServed": [
                            "Lexington, KY",
                            "Nicholasville, KY",
                            "Georgetown, KY",
                            "Winchester, KY",
                            "Richmond, KY"
                        ]
                    })}
                </script>

                {/* ✅ FAQ Schema */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "How much does an outdoor deck cost in Lexington, KY?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Outdoor decks typically range from $25–$60 per sq.ft installed depending on material, layout, and design complexity."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do you build composite and wood outdoor decks?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes. We construct both natural wood and high-performance composite decks that resist moisture, rot, and fading for decades."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Can you build covered decks or outdoor living areas?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Absolutely. We design and build pergolas, patio covers, and multi-level outdoor living spaces for year-round comfort."
                                }
                            }
                        ]
                    })}
                </script>
            </Helmet>

            <HeroModern
                bgImage="/images/deck/deck-lexington28.webp"
                subtitle="Outdoor Deck Constructors"
                title="Create Your Perfect Outdoor Escape"
                description="Design, build, and enjoy custom outdoor decks, patios, and living spaces — built to last, made for Lexington."
                buttonText="Request a Free Quote"
                buttonLink="/contact"
                cardImage="/images/deck-builder12.webp"
                location="Lexington, KY"
                tags={["Outdoor Decks", "Patios"]}
                projectTitle="Outdoor Deck Project"
                projectPrice="$18,500"
                accentColor="#0a923d"
            />

            <Services
                title="Outdoor Deck & Living Space Services"
                subtitle="From custom decks to outdoor entertainment spaces — we turn your backyard into a sanctuary."
                accentColor="#0a923d"
                bgImage="/images/deck-bg.jpg"
                services={[
                    {
                        title: "Outdoor Deck Construction",
                        description:
                            "Build strong, stylish outdoor decks designed for Kentucky weather — engineered for years of comfort.",
                        image: "/images/deck11.webp",
                        link: "/custom-decks",
                    },
                    {
                        title: "Composite Deck Systems",
                        description:
                            "Low-maintenance, fade-proof decks that mimic natural wood but require zero annual upkeep.",
                        image: "/images/deck7.webp",
                        link: "/composite-decks",
                    },
                    {
                        title: "Wood Decking",
                        description:
                            "Natural wood decks with timeless beauty and custom craftsmanship — sealed for lasting performance.",
                        image: "/images/deck-builder20.webp",
                        link: "/wood-decks",
                    },
                    {
                        title: "Outdoor Additions",
                        description:
                            "Upgrade with pergolas, railings, and covered decks to expand your outdoor living possibilities.",
                        image: "/images/deck-builder6.webp",
                        link: "/contact",
                    },
                ]}
            />

            <GallerySection
                title="OUTDOOR DECK GALLERY"
                subtitle="Explore real outdoor transformations — from cozy backyard decks to luxury outdoor spaces."
                highlight="OUTDOOR DECK"
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

            <DealerBanner
                title="Your Outdoor Living Experts"
                highlight="Complete Deck & Patio Solutions"
                description="We handle every phase of your outdoor project — from design and permits to material selection and flawless construction. Our mission: create durable, beautiful outdoor decks that elevate your lifestyle and home value."
                backgroundColor="#ffffff"
                highlightColor="#247704"
            />

            <BeforeAfter
                title="Outdoor Deck Transformations"
                description="See how we turn outdated decks into breathtaking outdoor living spaces. Built strong, safe, and stylish for every Lexington homeowner."
                buttonText="View More Outdoor Projects"
                buttonLink="/projects"
                accentColor="#0a923d"
                images={[
                    {
                        before: "/images/deckafter3.webp",
                        after: "/images/deckbefore3.webp"
                    },
                    {
                        before: "/images/deckafter1.webp",
                        after: "/images/deckbefore1.webp"
                    }
                ]}
            />

            <MainSectionSideBar
                title="Outdoor Deck Construction in Lexington, KY"
                sections={[
                    {
                        heading: "Outdoor Deck Builders in Lexington, KY — Transform Your Backyard into a True Outdoor Oasis",
                        text: `At Yellowstone Renovation, we specialize in designing and building beautiful outdoor decks that extend your home’s comfort into the open air. Whether you’re dreaming of a cozy backyard retreat, a large multi-level entertaining space, or a sleek modern deck for your Lexington home, our experienced team can make it happen. As one of the most trusted outdoor deck companies near you, we combine craftsmanship, premium materials, and precise engineering to ensure every deck stands strong through Kentucky’s weather.

Our decks are built to handle it all — rain, humidity, heat, and constant use — while staying beautiful for years to come. We build composite, wood, and hybrid decks tailored to your style and budget. Each project begins with a detailed design consultation, where our experts listen to your ideas, evaluate your space, and help you choose the right materials and layout. With a 4.9★ Google rating and A+ BBB accreditation, homeowners across Lexington, Nicholasville, Georgetown, Winchester, and Richmond trust us to bring their vision to life.`
                    },
                    {
                        heading: "Custom Outdoor Deck Installation in Lexington KY",
                        text: `Every outdoor deck we build is a unique reflection of your home and lifestyle. As a full-service outdoor deck contractor in Lexington, we handle every step — design, permitting, construction, finishing, and cleanup. Our process starts with 3D renderings that allow you to preview your new deck before we even break ground. This attention to detail ensures you get exactly what you want — no surprises, no missed details, no shortcuts.

We work with high-performance composite decking brands like Trex, TimberTech, and AZEK as well as premium wood materials including cedar and redwood. Our crews use advanced framing systems and precision leveling to ensure every structure is safe, smooth, and built to last. From modern floating decks to traditional wraparound builds, we bring quality and craftsmanship to every corner. Whether you need a deck for relaxing with family or hosting friends, Yellowstone Renovation creates a space that feels like a natural extension of your home.`
                    },
                    {
                        heading: "Composite Outdoor Decking — Modern, Durable, and Maintenance-Free",
                        text: `Composite decking is the future of outdoor living. If you’re tired of sanding, sealing, or staining old wooden decks, composite decking gives you long-lasting color and strength with nearly zero maintenance. Our Lexington composite deck installers use premium materials that resist fading, moisture, mold, and cracking — perfect for Kentucky’s humid climate.

You can choose from dozens of color tones and textures that mimic real wood grain without the upkeep. Composite decks don’t splinter, warp, or rot — they stay comfortable underfoot and safe for kids and pets. These decks are also eco-friendly, made from recycled materials that reduce waste while providing exceptional durability. For homeowners seeking a deck that looks luxurious but never demands yearly repairs, composite is the smartest long-term investment.`
                    },
                    {
                        heading: "Wood Outdoor Deck Builder in Lexington KY",
                        text: `There’s nothing quite like the natural beauty and warmth of a handcrafted wood deck. Our wood deck builders in Lexington create custom outdoor decks that blend elegance and durability using the finest cedar, redwood, and pressure-treated lumber. Each board is carefully inspected, cut, and sealed to withstand years of exposure to sun and rain.

Wood decks bring a timeless character that complements both modern and traditional homes. Whether you prefer a rustic farmhouse style, a clean minimalist look, or a custom pattern with inlays and borders, we can bring your vision to life. We also offer seasonal maintenance packages to help preserve your deck’s color and texture, including cleaning, resealing, and refinishing. With Yellowstone Renovation, you get the warmth of real wood combined with structural reliability that ensures your outdoor deck remains safe, solid, and stunning for decades.`
                    },
                    {
                        heading: "Outdoor Deck Replacement and Backyard Remodeling Services",
                        text: `If your existing deck feels unstable, outdated, or unsafe, it may be time for a full deck replacement. As experienced outdoor deck contractors in Lexington, we specialize in removing old structures and rebuilding from the ground up with improved materials, stronger framing, and modern designs. Our remodeling process allows you to upgrade from traditional wood to composite or PVC materials that require less upkeep and look better for longer.

We also help homeowners reinvent their entire backyard layout — adding new stairs, lighting, privacy screens, railings, and seating to make the space more functional and inviting. Replacing an aging deck with a custom-built one not only increases curb appeal but also boosts property value and provides a safer, more enjoyable place for family gatherings and summer nights.`
                    },
                    {
                        heading: "Multi-Level and Custom Outdoor Deck Designs",
                        text: `Multi-level decks add incredible visual appeal and create separate zones for dining, lounging, and entertaining. Our design team uses advanced 3D modeling tools to ensure perfect transitions between each level and flawless alignment with your home’s elevation. These projects are ideal for sloped yards or homes with walkout basements, allowing you to maximize every inch of outdoor space.

We can also integrate outdoor kitchens, fireplaces, hot tub platforms, and built-in planters for a seamless backyard experience. From railings and lighting to pergolas and shade structures, our outdoor living area builders design functional spaces that feel luxurious and cohesive. Every deck we build is as strong as it is beautiful — engineered for real-life use and long-term durability.`
                    },
                    {
                        heading: "Complete Outdoor Living Add-Ons and Enhancements",
                        text: `Our work doesn’t stop at decking. Yellowstone Renovation transforms ordinary backyards into full-scale outdoor living areas. We install pergolas, gazebos, covered patios, ceiling fans, built-in benches, and ambient lighting that make your deck usable through all seasons. These additions provide shade in the summer, comfort in the evenings, and style that elevates your home’s exterior.

We also specialize in weatherproof storage solutions, privacy walls, and integrated seating systems. Every add-on is customized to fit your property and enhance comfort without cluttering your space. As a local Lexington outdoor living space builder, our goal is simple — to create functional, durable, and inspiring outdoor environments that bring families together.`
                    },
                    {
                        heading: "Why Choose Yellowstone Renovation — Lexington’s Trusted Outdoor Deck Company",
                        text: `Choosing the right outdoor deck builder is crucial to getting results that last. At Yellowstone Renovation, we’ve built our reputation on honesty, reliability, and exceptional craftsmanship. With over 4 years of hands-on experience, full licensing, insurance, and A+ BBB accreditation, our team is recognized as one of the top outdoor deck companies near Lexington, KY.

We communicate clearly from start to finish, provide transparent quotes, and maintain clean, organized job sites. Every deck we build is inspected and approved to meet local building standards — ensuring your safety and satisfaction. Our clients consistently praise our professionalism, speed, and dedication to delivering projects that exceed expectations.`
                    },
                    {
                        heading: "Book Your Free Outdoor Deck Consultation in Lexington KY",
                        text: `Ready to elevate your backyard into an inviting, relaxing space? Contact Yellowstone Renovation today for a free outdoor deck consultation and estimate. Our friendly, local experts will walk you through material choices, layouts, pricing, and scheduling — ensuring the process is smooth from concept to completion.

With dozens of 5-star reviews and 65+ completed decks across Central Kentucky, we’ve become Lexington’s go-to outdoor deck builders. Experience the craftsmanship, precision, and lasting value that make Yellowstone Renovation the most trusted choice for outdoor decks and living spaces in Lexington and beyond.`
                    }
                ]}
                offers={[
                    {
                        image: "/images/deck-builder14.webp",
                        text: "Get $1500 OFF Your Outdoor Deck Project — Limited Offer",
                        button: "Claim Discount",
                        link: "/contact",
                    },
                    {
                        image: "/images/deck2.webp",
                        text: "Explore 20+ Outdoor Deck Projects Completed in Lexington",
                        button: "View Gallery",
                        link: "/projects",
                    },
                ]}
                whyUs={[
                    "A+ BBB Rated Outdoor Deck Builders in Lexington, KY",
                    "4.9★ Reviews and Over 65 Projects Completed",
                    "Custom Designs for Any Backyard or Patio Space",
                    "Licensed, Insured, and Family-Owned Business",
                    "Durable, Low-Maintenance Materials Built to Last",
                ]}
                projects={[
                    { image: "/images/deck4.webp", title: "Backyard Lounge Deck" },
                    { image: "/images/deck5.webp", title: "Covered Patio Space" },
                    { image: "/images/deck6.webp", title: "Composite Outdoor Steps" },
                    { image: "/images/deck7.webp", title: "Wood Deck with Railings" },
                ]}
                findUs={[
                    { name: "Yelp", rating: "4.6/5", logo: "/icons/yelp.webp" },
                    { name: "Google", rating: "4.9/5", logo: "/icons/google-reviews.webp" },
                ]}
                blog={[
                    {
                        title: "Why Outdoor Decks Boost Lexington Home Value",
                        date: "April 22nd, 2025",
                        author: "Vasyl",
                        image: "/images/deck6.webp",
                    },
                    {
                        title: "Top Outdoor Living Trends for 2025",
                        date: "May 30th, 2025",
                        author: "Peter",
                        image: "/images/deck7.webp",
                    },
                    {
                        title: "Composite vs. Wood Decking — Which Is Better for You?",
                        date: "June 10th, 2025",
                        author: "Vasyl",
                        image: "/images/deck8.webp",
                    },
                ]}
                partners={["/icons/jameshardie.webp", "/icons/yelp.webp"]}
            />
        </Layout>
    );
}
