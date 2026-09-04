import * as React from "react"
import Layout from "../components/Layout"
import Hero2 from "../components/Hero2";
import GallerySection from "../components/GallerySection";
import DealerBanner from "../components/DealerBanner";
import BeforeAfter from "../components/BeforeAfter";
import MainSectionSideBar from "../components/MainSectionSideBar";
import "../styles/global.css"
import SEO from "../components/SEO";
import Services from "../components/Services.js"
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
                    content="Vinyl Siding Replacement Services | Certified Experts in Lexington "
                />
                <meta
                    property="og:description"
                    content="Premium fiber cement siding installed by certified James Hardie® experts in Lexington, KY. Built for storms, moisture & fire resistance. Free estimates!"
                />
                <meta
                    property="og:image"
                    content="https://yellowstonerenovation.com/images/remodler19.webp"
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
                    content="https://yellowstonerenovation.com/images/remodler19.webp"
                />
            </Helmet>

            <SEO
                title="James Hardie Siding Contractor in Lexington, KY | Yellowstone Renovation"
                description="Top-rated James Hardie® siding installation in Lexington, KY. Fiber cement siding built to resist fire, moisture, pests & extreme weather. Certified installers + strong warranties."
                pathname="/james-hardie-siding/"
                image="https://yellowstonerenovation.com/images/remodler19.webp"
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
                topText="VINYL SIDING EXPERTS"
                title="Top Rated Vinyl Siding Contractor"
                description="Stronger protection, better curb appeal — guaranteed."
                backgroundImage="/images/remodler19.webp"
                formTitle="Request Vinyl Siding Estimate"
                selectLabel="Choose Your Siding Type"
                selectOptions={[
                    "Vinyl Siding Replacement",
                    "Insulated Vinyl",
                    "Board & Batten Vinyl",
                    "Repair / Section Replacement"
                ]}
            />

            <GallerySection
                title="Trusted Siding Replacement Experts in Lexington & Central Kentucky"
                subtitle="When it comes to protecting and upgrading your home, quality siding installation makes all the difference. Cracked, faded, or warped siding doesn’t just hurt curb appeal — it allows moisture, pests, and heat loss to damage your property. "
                highlight="Vinyl Siding Experts"
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
                    "/images/remodler24.webp",
                    "/images/remodler13.webp",
                    "/images/remodler27.webp",
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
                title="Vinyl Siding Before & After"
                description="See how we completely transform outdated exteriors with modern, durable vinyl siding that boosts curb appeal and protects your home from Kentucky’s weather."
                buttonText="View More Siding Transformations"
                buttonLink="/projects"
                accentColor="#0a923d"
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
                title="Vinyl Siding Installation & Replacement"
                subtitle="Affordable, low-maintenance siding with modern textures, beautiful color options, and protection built for Kentucky weather."
                accentColor="#0a923d"
                bgImage="/images/deck-bg.jpg"
                services={[
                    {
                        title: "Vinyl Siding Replacement",
                        description:
                            "Upgrade your home’s exterior with durable vinyl siding that resists warping, moisture, and fading — designed for long-lasting performance and curb appeal.",
                        image: "/images/remodler1.webp",
                        link: "/james-hardie-siding",
                    },
                    {
                        title: "Insulated Vinyl Siding Systems",
                        description:
                            "Boost energy efficiency with built-in foam insulation — helping regulate indoor temperature, reduce noise, and lower utility bills year-round.",
                        image: "/images/remodler25.webp",
                        link: "/metal-siding",
                    },
                    {
                        title: "Board & Batten Vinyl Styles",
                        description:
                            "Add a modern farmhouse look with vertical board-and-batten vinyl panels that deliver bold design and timeless character.",
                        image: "/images/remodler24.webp",
                        link: "/siding-replacement",
                    },
                    {
                        title: "Soffit, Fascia & Trim Finishing",
                        description:
                            "Complete your upgrade with durable trim, vented soffits, and moisture-protected edges — improving performance, ventilation, and home value.",
                        image: "/images/remodler3.webp",
                        link: "/wood-siding",
                    },
                ]}
            />

            <DealerBanner
                title="Complete Vinyl Siding Replacement Services"
                highlight="Vinyl Siding Replacement"
                description="When your siding no longer performs the way it should, replacement isn’t just an upgrade — it’s a smart investment. Our team handles everything from old siding removal to professional installation, ensuring a smooth process and flawless finish. We offer modern vinyl siding options in dozens of colors and textures, precision-cut installation that prevents gaps and buckling, and maintenance-free protection that lasts for decades."
                backgroundColor="#ffffff"
                highlightColor="#247704"
            />

            <MainSectionSideBar
                title="Vinyl Siding Contractors in Lexington, KY"
                sections={[
                    {
                        heading: "Vinyl Siding Replacement in Lexington, KY — Affordable & Lasting Protection",
                        text: `Looking for a siding option that looks great without constant maintenance? Vinyl siding is one of the most cost-effective ways to refresh your exterior and protect your home from Kentucky’s changing weather. At Yellowstone Renovation, we install high-quality vinyl siding made to resist fading, moisture, and warping — delivering long-term beauty without the hassle of painting. Our team helps you choose the perfect color and style to instantly boost curb appeal while staying within budget. When homeowners search for a reliable vinyl siding contractor in Lexington KY, they choose us for professional service, clean installations, and trustworthy results.`
                    },
                    {
                        heading: "A Wide Variety of Styles, Textures & Colors",
                        text: `Vinyl siding isn't one-size-fits-all anymore. You can choose smooth or wood-grain textures, modern vertical siding, board-and-batten, or the classic horizontal look. Whether you like a bold modern aesthetic or a traditional warm exterior, we help you design a look you’ll love coming home to every day. We provide real samples during consultation so you can feel the textures and see true colors in natural daylight.`
                    },
                    {
                        heading: "Low-Maintenance Siding That Saves You Time & Money",
                        text: `Vinyl siding is the favorite choice for busy homeowners because it requires almost zero maintenance. No painting. No scraping. No major upkeep. A quick rinse with a hose once or twice a year is all it takes. Vinyl siding is resistant to rot, insects, peeling, and corrosion — making it a smart investment for long-term durability and worry-free living.`
                    },
                    {
                        heading: "Energy-Efficient Options for Better Home Comfort",
                        text: `Upgrade to insulated vinyl siding to reduce heating and cooling costs. Built-in foam panels increase your home’s energy efficiency and help regulate temperature. This not only improves indoor comfort but can lead to lower energy bills year-round — especially against Kentucky’s hot summers and chilly winters.`
                    },
                    {
                        heading: "Storm Damage? We've Got You Covered",
                        text: `If your siding has cracks, dents, or wind damage — we provide repair and full vinyl siding replacement services backed by industry warranties. We work with insurance claims and handle communication with adjusters to make the process stress-free. Protect your home before small issues become expensive problems.`
                    },
                    {
                        heading: "Why Homeowners Trust Yellowstone Renovation",
                        text: `We are fully licensed, insured, and known for clean job sites and friendly, professional crews. Our vinyl siding installations are precise, secure, and carefully sealed to protect against water intrusion. We serve homeowners across Lexington, Nicholasville, Georgetown, Richmond, and Versailles — delivering quality results with transparent pricing and reliable scheduling.`
                    },
                    {
                        heading: "Free Vinyl Siding Estimate in Lexington KY",
                        text: `Ready to upgrade your home’s exterior? Contact Yellowstone Renovation today for a free consultation and detailed siding quote. We help you choose materials, compare options, and plan a transformation that fits your budget. Build a home you’re proud of — beautiful, protected, and maintenance-free for years to come.`
                    }
                ]}
                offers={[
                    {
                        image: "/images/deck1.webp",
                        text: "Get $1,200 OFF Vinyl Siding Replacement — Limited Offer",
                        button: "Claim Discount",
                        link: "/contact"
                    },
                    {
                        image: "/images/deck2.webp",
                        text: "View Vinyl Siding Projects Completed Nearby",
                        button: "See Projects",
                        link: "/projects"
                    }
                ]}
                whyUs={[
                    "Affordable siding with long-term durability",
                    "Wide selection of textures and modern colors",
                    "Fast, clean installation with minimal disruption",
                    "Energy-efficient insulated siding options",
                    "Highly rated local vinyl siding specialists"
                ]}
                projects={[
                    { image: "/images/remodler1.webp", title: "Vinyl Siding Refresh" },
                    { image: "/images/remodler4.webp", title: "Two-Story Vinyl Upgrade" },
                    { image: "/images/remodler24.webp", title: "Siding + Trim Renewal" },
                    { image: "/images/remodler24.webp", title: "Modern Vinyl Exterior" }
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


        </Layout>
    )
}
