import * as React from "react"
import Layout from "../components/Layout"
import Hero2 from "../components/Hero2";
import GallerySection from "../components/GallerySection";
import DealerBanner from "../components/DealerBanner";
import BeforeAfter from "../components/BeforeAfter";
import MainSection from "../components/mainSection.js";
import Services from "../components/Services.js"
import "../styles/global.css"
import SEO from "../components/SEO";
import MainSectionSideBar from "../components/MainSectionSideBar";
import { Helmet } from "react-helmet";


export default function Home() {
    return (
        <Layout>
            <Helmet>
                {/* ✅ Primary Hardie Keywords */}
                <meta
                    name="keywords"
                    content="James Hardie Siding Lexington KY, Fiber Cement Siding Lexington KY, HardiePlank Contractor Kentucky, ColorPlus Siding Installers, Fire Resistant Siding Kentucky"
                />

                {/* ✅ Social Sharing */}
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="James Hardie® Siding Installation in Lexington, KY | Certified Experts"
                />
                <meta
                    property="og:description"
                    content="Premium fiber cement siding installed by certified James Hardie® experts in Lexington, KY. Built for storms, moisture & fire resistance. Free estimates!"
                />
                <meta
                    property="og:image"
                    content="https://yellowstonerenovation.com/images/remodler1.webp"
                />
                <meta
                    property="og:url"
                    content="https://yellowstonerenovation.com/james-hardie-siding/"
                />
                <meta property="og:site_name" content="Yellowstone Renovation" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Certified James Hardie® Siding Contractor in Lexington"
                />
                <meta
                    name="twitter:description"
                    content="HardiePlank® fiber cement siding with precision installation and strong warranties — built for Kentucky weather."
                />
                <meta
                    name="twitter:image"
                    content="https://yellowstonerenovation.com/images/remodler1.webp"
                />
            </Helmet>

            <SEO
                title="James Hardie Siding Contractor in Lexington, KY | Yellowstone Renovation"
                description="Top-rated James Hardie® siding installation in Lexington, KY. Fiber cement siding built to resist fire, moisture, pests & extreme weather. Certified installers + strong warranties."
                pathname="/james-hardie-siding/"
                image="https://yellowstonerenovation.com/images/remodler1.webp"
            />

            {/* ✅ James Hardie Service Schema */}
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "serviceType": "James Hardie Siding Installation",
                        "provider": {
                            "@type": "HomeAndConstructionBusiness",
                            "name": "Yellowstone Renovation",
                            "url": "https://yellowstonerenovation.com",
                            "telephone": "859-545-7020",
                            "logo": "/icons/logo.webp",
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
                        "brand": {
                            "@type": "Brand",
                            "name": "James Hardie® Fiber Cement"
                        }
                    })}
                </script>

                {/* ✅ Hardie FAQ Schema (for Google Rich Results) */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "Is James Hardie siding worth the cost?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes — James Hardie siding delivers one of the best ROI values in U.S. remodeling due to its long lifespan, fire resistance, and premium curb appeal."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "How long does James Hardie siding last in Kentucky?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Fiber cement siding withstands Kentucky humidity, storms, and freeze-thaw cycles — often lasting 40+ years with proper installation."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do you install Hardie trim and ColorPlus finishes?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes — we use Hardie trim, vented soffits, and ColorPlus® technology for factory-finished, fade-resistant beauty."
                                }
                            }
                        ]
                    })}
                </script>
            </Helmet>

            <Hero2
                topText="JAMES HARDIE® SIDING CONTRACTOR"
                title="Premium Fiber Cement Siding Installed to Perfection"
                description="Built to resist moisture, cracking, and fading — Hardie siding gives your home long-lasting strength and beauty."
                backgroundImage="/images/remodler1.webp"
                overlayOpacity={0.6}
                formTitle="Get a Hardie Siding Estimate"
                formSubtitle="Authorized Hardie experts serving Lexington & Central KY."
                selectLabel="Select Hardie Product"
                selectOptions={[
                    "HardiePlank® Lap Siding",
                    "HardiePanel® Vertical Siding",
                    "HardieShingle® & Trim",
                    "Repair / ColorPlus Replacement"
                ]}
                ctaText="Request Hardie Quote"
            />

            <GallerySection
                title="Lexington’s Leading James Hardie Siding Experts"
                subtitle="James Hardie siding offers superior strength, fade resistance, and a premium look that transforms your home’s exterior. Whether you’re building new or replacing old siding, our certified installation team ensures every panel fits perfectly — for beauty that lasts decades."
                highlight="James Hardie Siding Experts"
                background="#ffffff"
                images={[
                    "/images/remodler1.webp",
                    "/images/remodler2.webp",
                    "/images/remodler3.webp",
                    "/images/remodler4.webp",
                    "/images/remodler5.webp",
                    "/images/remodler6.webp",
                    "/images/remodler24.webp",
                    "/images/remodler9.webp",
                    "/images/remodler10.webp",
                    "/images/remodler11.webp",
                    "/images/remodler26.webp",
                    "/images/remodler13.webp",
                    "/images/remodler14.webp",
                    "/images/remodler15.webp",
                    "/images/remodler27.webp",
                    "/images/remodler17.webp",
                    "/images/remodler18.webp",
                    "/images/remodler19.webp",
                    "/images/remodler20.webp",
                    "/images/remodler24.webp",
                    "/images/remodler22.webp",
                ]}
            />
            <BeforeAfter
                title="James Hardie® Siding Before & After"
                description="See how we upgrade worn, faded exteriors with premium James Hardie fiber cement siding — engineered to resist moisture, cracking, and severe Kentucky weather."
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
            <Services
                title="James Hardie® Siding Services"
                subtitle="Premium fiber cement siding engineered for beauty, durability, and superior protection — designed specifically for Kentucky’s climate."
                accentColor="#0a923d"
                bgImage="/images/deck-bg.jpg"
                services={[
                    {
                        title: "HardiePlank® Lap Siding",
                        description:
                            "The most popular James Hardie product — durable fiber cement boards that deliver a timeless, high-end wood look with long-term protection.",
                        image: "/images/remodler5.webp",
                        link: "/siding-replacement",
                    },
                    {
                        title: "Board-and-Batten Vertical Siding",
                        description:
                            "Create bold architectural lines with vertical HardiePanel® + batten strips — a premium look perfect for modern farmhouse or Craftsman homes.",
                        image: "/images/remodler4.webp",
                        link: "/vinyl-siding",
                    },
                    {
                        title: "HardieShingle® Siding",
                        description:
                            "Wood-style shingles without the maintenance — perfect for gables and accents that give your home a custom luxury look.",
                        image: "/images/remodler1.webp",
                        link: "/metal-siding",
                    },
                    {
                        title: "ColorPlus® Technology Finishes",
                        description:
                            "Factory-baked paint coatings that resist fading, chipping, and peeling — keeping your home looking great for years with less maintenance.",
                        image: "/images/remodler24.webp",
                        link: "/contact",
                    },
                ]}
            />
            <DealerBanner
                title="Complete James Hardie Siding Installation & Replacement"
                highlight="James Hardie Fiber Cement Siding"
                description="As an experienced Hardie siding contractor in Lexington, we install the full line of James Hardie® products — including HardiePlank®, HardiePanel®, and HardieShingle®. Each system offers the authentic look of wood, with none of the maintenance headaches. Enjoy exceptional weather protection, vibrant color that resists fading, and industry-leading warranties backed by James Hardie’s reputation for excellence."
                backgroundColor="#ffffff"
                highlightColor="#247704"
            />


            <MainSectionSideBar
                title="James Hardie® Siding Contractors in Lexington, KY"
                sections={[
                    {
                        heading: "James Hardie Siding Contractor in Lexington KY — Premium Fiber Cement Experts",
                        text: `Yellowstone Renovation is a top-rated James Hardie siding installer in Lexington KY. We specialize in replacing old, damaged, or faded siding with high-performance HardiePlank® fiber cement — engineered to withstand Kentucky’s rain, humidity, and seasonal temperature shifts. Searching for “James Hardie siding installers near me”? We deliver unmatched durability, curb appeal, and energy protection for homes in Central Kentucky.`,
                    },
                    {
                        heading: "HardiePlank® Lap Siding Installation",
                        text: `HardiePlank® lap siding is America’s #1 siding brand — known for its timeless wood-grain texture and long-lasting performance. We install Hardie siding using the correct fasteners, flashing, and weather barrier systems to prevent leaks and structural damage. Beautiful finishes, precise alignment, and superior weather protection come standard.`,
                    },
                    {
                        heading: "HardiePanel® Vertical Siding & Board-and-Batten Designs",
                        text: `Looking for a modern farmhouse exterior or clean vertical lines? HardiePanel® vertical siding adds architectural depth and contemporary style. Combine it with HardieTrim® boards for a bold board-and-batten design that increases curb appeal and resale value.`,
                    },
                    {
                        heading: "HardieShingle® Siding for Craftsman-Style Charm",
                        text: `HardieShingle® siding mimics the look of real cedar shake — without the rot, insects, and maintenance. Perfect for accent walls, dormers, and gables that deserve premium detail. We provide factory-finished ColorPlus® coating for long-lasting beauty.`,
                    },
                    {
                        heading: "ColorPlus® Technology — Factory-Applied Finish",
                        text: `Hardie siding stays vibrant for years thanks to ColorPlus® baked-on coating. No peeling, chipping, or fading — far more durable than onsite painting. Choose from dozens of beautiful colors designed to withstand UV exposure and Kentucky humidity.`,
                    },
                    {
                        heading: "James Hardie Siding Replacement & Storm Damage Repair",
                        text: `Cracked, warped, or failing siding? We remove old materials and rebuild protective layers with Hardie’s weatherproof fiber cement system. Better insulation, stronger sealing, and improved home protection — guaranteed.`,
                    },
                    {
                        heading: "Why Choose Hardie for Lexington KY Homes",
                        text: `James Hardie siding is fire-resistant, insect-resistant, moisture-resistant, and designed specifically for climate zones like Kentucky. Backed by a **30-year manufacturer warranty**, HardiePlank® is a smart long-term investment that boosts home equity and protection.`,
                    },
                    {
                        heading: "Licensed Hardie Installer — Trusted by Local Homeowners",
                        text: `We are fully licensed and insured, serving Lexington, Nicholasville, Georgetown, Richmond & Versailles. Our precision installation, transparent pricing, and clean job sites make us one of Central Kentucky’s most trusted Hardie siding contractors.`,
                    },
                    {
                        heading: "Free HardiePlank® Siding Estimate in Lexington KY",
                        text: `Ready to transform your home with beautiful, durable siding? Contact Yellowstone Renovation today for a **free quote** and expert design help. We’ll show color samples, style options, and real project photos so you can choose with confidence.`,
                    },
                ]}

                offers={[
                    {
                        image: "/images/deck1.webp",
                        text: "$2,000 OFF James Hardie Siding Installation — Limited Time",
                        button: "Claim Discount",
                        link: "/contact",
                    },
                    {
                        image: "/images/deck2.webp",
                        text: "View Completed HardiePlank® Projects in Lexington",
                        button: "View Gallery",
                        link: "/projects",
                    },
                ]}

                whyUs={[
                    "Certified James Hardie siding installers",
                    "30-year product + 10-year workmanship warranty",
                    "Precision installation with full weatherproofing",
                    "Beautiful color options with ColorPlus® finish",
                    "Trusted by Lexington homeowners — 4.9★ rated",
                ]}

                projects={[
                    { image: "/images/deck4.webp", title: "HardiePlank® Installation" },
                    { image: "/images/deck5.webp", title: "Board-and-Batten Upgrade" },
                    { image: "/images/deck6.webp", title: "HardiePanel® Modern Look" },
                    { image: "/images/deck7.webp", title: "Craftsman HardieShingle®" },
                ]}

                findUs={[
                    { name: "Yelp", rating: "4.6/5", logo: "/icons/yelp.webp" },
                    { name: "Google", rating: "4.9/5", logo: "/icons/google-reviews.webp" },
                ]}

                blog={[
                    {
                        title: "Why James Hardie Is the Best Siding for Kentucky Homes",
                        date: "April 12, 2025",
                        author: "Vasyl",
                        image: "/images/deck6.webp",
                    },
                    {
                        title: "Fiber Cement vs Vinyl — Cost & Durability Guide",
                        date: "May 20, 2025",
                        author: "Peter",
                        image: "/images/deck7.webp",
                    },
                    {
                        title: "HardiePlank® ColorPlus® vs Paint — What’s Better?",
                        date: "June 5, 2025",
                        author: "Vasyl",
                        image: "/images/deck8.webp",
                    },
                ]}

                partners={["/icons/jameshardie.webp", "/icons/yelp.webp"]}
            />

        </Layout>
    )
}
