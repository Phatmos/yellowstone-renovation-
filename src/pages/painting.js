import * as React from "react"
import Layout from "../components/Layout"
import Hero2 from "../components/Hero2";
import DealerBanner from "../components/DealerBanner";
import BeforeAfter from "../components/BeforeAfter";
import GallerySection from "../components/GallerySection";
import PaintingHero from "../components/PaintingHero.js";
import "../styles/global.css"
import Services from "../components/Services.js"
import WindowsPromoSection from "../components/WindowsPromoSection";
import MainSectionSideBar from "../components/MainSectionSideBar";
import SEO from "../components/SEO";
import { Helmet } from "react-helmet";



export default function Home() {
    return (

        <Layout>
            <Helmet>
                {/* ✅ SEO Keywords */}
                <meta
                    name="keywords"
                    content="Exterior painting Lexington KY, House painter Lexington, Painting contractor Kentucky, Home exterior paint Lexington, Residential painting services"
                />

                {/* ✅ Open Graph — Social Sharing */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Exterior House Painting in Lexington, KY | Professional Painters" />
                <meta property="og:description" content="High-quality exterior house painting that protects your home and boosts curb appeal. Free color consultations & fast estimates in Lexington!" />
                <meta property="og:image" content="https://yellowstonerenovation.com/images/remodler3.webp" />
                <meta property="og:url" content="https://yellowstonerenovation.com/painting/" />
                <meta property="og:site_name" content="Yellowstone Renovation" />

                {/* ✅ Twitter Cards */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Exterior Painting in Lexington, KY | Top-Rated Painters" />
                <meta name="twitter:description" content="Upgrade your home exterior with long-lasting, fade-resistant paint. Free quotes in Central KY." />
                <meta name="twitter:image" content="https://yellowstonerenovation.com/images/remodler3.webp" />
            </Helmet>

            <SEO
                title="Exterior House Painting in Lexington, KY | Yellowstone Renovation"
                description="Professional exterior house painting with premium coatings that resist fading, moisture, and weather damage. Trusted contractor serving Lexington, Nicholasville, Georgetown & Richmond."
                pathname="/painting/"
                image="https://yellowstonerenovation.com/images/remodler3.webp"
            />

            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HomeAndConstructionBusiness",
                        "name": "Yellowstone Renovation",
                        "url": "https://yellowstonerenovation.com/painting/",
                        "serviceType": [
                            "Exterior Painting",
                            "Home Painting",
                            "Color & Design Consultation",
                            "Trim & Fascia Painting"
                        ],
                        "image": "https://yellowstonerenovation.com/images/remodler3.webp",
                        "telephone": "859-545-7020",
                        "areaServed": [
                            "Lexington, KY",
                            "Nicholasville, KY",
                            "Winchester, KY",
                            "Georgetown, KY",
                            "Richmond, KY"
                        ],
                        "priceRange": "$$"
                    })}
                </script>

                {/* ✅ FAQ Schema — SEO Booster */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "How long does exterior paint last in Kentucky weather?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Premium exterior paint applied by professionals can last 10–20 years depending on prep quality, sun exposure, siding type, and moisture control."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do you help with selecting paint colors?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes — we provide free professional color consultations to help you choose the best colors for style and neighborhood appeal."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do you repair siding before painting?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Absolutely — we fix peeling areas, replace rotted fascia/trim, and pressure wash surfaces so paint adheres correctly and lasts long."
                                }
                            }
                        ]
                    })}
                </script>
            </Helmet>


            <PaintingHero
                title="Premium House Painting Services in Lexington, KY"
                subtitle="Interior • Exterior • Cabinets — Fast quotes, flawless results."
                background="/images/remodler1.webp"
            />

            <GallerySection
                title="Top House Painting Experts in Lexington & Central Kentucky"
                subtitle="A fresh coat of paint can completely transform your home. At Yellowstone Renovation, we provide professional interior and exterior painting services designed to boost curb appeal, protect your property, and give your living spaces a stunning new look — all with fast quotes and flawless craftsmanship."
                highlight="Painting Experts in Lexington"
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
                    "/images/remodler14.webp",
                    "/images/remodler15.webp",
                    "/images/remodler27.webp",
                    "/images/remodler17.webp",
                    "/images/remodler18.webp",
                    "/images/remodler19.webp",
                    "/images/remodler20.webp",
                    "/images/remodler21.webp",
                    "/images/remodler22.webp",
                ]}
            />
            <Services
                title="Professional Painting Services"
                subtitle="Interior, exterior, and cabinet painting — fast estimates and flawless results for your home or business."
                accentColor="#0a923d"
                bgImage="/images/deck-bg.jpg"
                services={[
                    {
                        title: "Interior Painting",
                        description:
                            "Freshen up your home with clean, modern interior painting. We provide smooth, high-quality finishes, carefully protecting floors and furniture while we work.",
                        image: "/images/remodler1.webp",
                        link: "/interior-painting",
                    },
                    {
                        title: "Exterior Painting",
                        description:
                            "Boost curb appeal and protect your home from weather damage with durable, fade-resistant paints built to handle Kentucky’s climate year-round.",
                        image: "/images/remodler1.webp",
                        link: "/exterior-painting",
                    },
                    {
                        title: "Cabinet Painting & Refinishing",
                        description:
                            "Transform your kitchen cabinets with a factory-smooth sprayed finish — a budget-friendly upgrade that looks brand new and lasts for years.",
                        image: "/images/deck11.webp",
                        link: "/cabinet-painting",
                    },
                    {
                        title: "Commercial Painting",
                        description:
                            "Reliable, fast commercial painting for offices, apartments, and retail spaces — with minimal downtime and professional, long-lasting results.",
                        image: "/images/deck7.webp",
                        link: "/commercial-painting",
                    },
                ]}
            />
            <DealerBanner
                title="Premium Residential & Commercial Painting Services"
                highlight="Professional Painting in Lexington"
                description="Whether your home needs a fresh interior look or your exterior paint is starting to fade, we provide high-quality painting services that transform and protect your property. At Yellowstone Renovation, we focus on clean lines, durable finishes, and details that make a real difference — all backed by local expertise you can trust."
                backgroundColor="#ffffff"
                highlightColor="#247704"
            />
            <MainSectionSideBar
                title="Premium House Painting Services in Lexington, KY"
                sections={[
                    {
                        heading: "House Painters in Lexington KY — Interior & Exterior Painting Experts",
                        text: `Looking for a trusted painter in Lexington KY? Yellowstone Renovation provides full-service interior and exterior house painting throughout Lexington and Central Kentucky. Our painting company specializes in premium finishes that boost curb appeal, protect your home, and increase value. We use top-quality Sherwin-Williams® and Benjamin Moore® paints for long-lasting results that resist fading, cracking, and peeling. Whether you need walls, ceilings, siding, trim, or full exterior repainted — we are your go-to house painters in Lexington KY.`
                    },
                    {
                        heading: "Interior Painters in Lexington — Clean, Modern, & Beautiful Results",
                        text: `Your home deserves flawless interior painting that looks professional from every angle. As experienced interior painters in Lexington KY, we handle drywall repair, patching, sanding, priming, and exact color coverage for a smooth final finish. Furniture, floors, and personal belongings are fully protected. No mess, no stress — just a beautifully upgraded living space. If you're searching for “interior painter near me” in Lexington, we deliver unmatched quality and care.`
                    },
                    {
                        heading: "Exterior Painting Company Lexington KY — Built for Kentucky Weather",
                        text: `We are licensed and insured exterior painters in Lexington KY, trained to protect your home against humidity, heat, and storms. Our team repairs damaged wood, seals gaps, and applies premium weather-resistant coatings for maximum durability. Enhance curb appeal, increase home value, and enjoy long-lasting color protection — all from reliable local exterior painting contractors.`
                    },
                    {
                        heading: "Cabinet Painting & Refinishing — A Stunning Kitchen Makeover",
                        text: `Upgrade your kitchen for less with cabinet painting and refinishing. As one of the most recommended cabinet painters in Lexington Kentucky, we provide a factory-grade sprayed finish that is smooth, durable, and stylish. No demolition, no replacement — just a refreshed kitchen that looks brand new. Perfect for bathrooms, laundry rooms, and built-ins too!`
                    },
                    {
                        heading: "Commercial Painting Lexington KY — Fast, Professional, On-Schedule",
                        text: `Businesses choose Yellowstone Renovation when they need dependable commercial painters in Lexington KY. We serve retail stores, offices, restaurants, apartment buildings, and more. Flexible scheduling ensures minimal downtime, and our coatings stand strong against heavy daily use. First impressions matter — we help you make a great one.`
                    },
                    {
                        heading: "Surface Preparation Done Right — The Key to Lasting Paint Performance",
                        text: `Our thorough prep process sets us apart from other painting companies in Lexington. We provide sanding, drywall patching, caulking, pressure washing, stain blocking, and priming — ensuring paint bonds properly and stays beautiful for years. When you hire professional painters in Lexington KY, this level of prep makes all the difference.`
                    },
                    {
                        heading: "Color Consultation & Premium Paint Options",
                        text: `Not sure which colors to choose? Our painting experts in Lexington KY offer personalized color consultations based on style, lighting, and architecture. From trendy neutrals to bold modern palettes — you’ll love the results. We offer matte, eggshell, satin, gloss, and specialty finishes designed for every environment.`
                    },
                    {
                        heading: "Why Choose Yellowstone Renovation — Top Rated Local Painters in Lexington KY",
                        text: `We proudly serve Lexington, Nicholasville, Georgetown, Richmond, Winchester, and Versailles. Homeowners trust us because we are professional, friendly, affordable, and always deliver clean and precise painting work. With clear communication and transparent pricing, we are one of the best painters in Lexington KY — and our reviews prove it.`
                    },
                    {
                        heading: "Get a Free Painting Estimate in Lexington — Contact Us Today",
                        text: `Need a local painter in Lexington KY? We provide fast quotes and exceptional service from start to finish. Whether you're updating a single room or repainting your entire home or business, we guarantee amazing results that exceed expectations. Call today and transform your property with Lexington’s trusted painting professionals.`
                    }
                ]}
                offers={[
                    {
                        image: "/images/remodler11.webp",
                        text: "Save $1,500 on Full Home Siding Replacement — Limited Time Offer",
                        button: "Claim Offer",
                        link: "/contact",
                    },
                    {
                        image: "/images/remodler13.webp",
                        text: "Explore Our Completed Siding Projects in Lexington",
                        button: "View Gallery",
                        link: "/projects",
                    },
                ]}

                whyUs={[
                    "Certified James Hardie & Vinyl Siding Installers",
                    "Superior weather protection & moisture control",
                    "Hundreds of completed siding projects in Kentucky",
                    "Licensed, insured & highly rated by homeowners",
                    "Fast installation with clean job sites — no delays",
                ]}

                projects={[
                    { image: "/images/remodler11.webp", title: "HardiePlank Makeover" },
                    { image: "/images/remodler13.webp", title: "Modern Board & Batten" },
                    { image: "/images/remodler14.webp", title: "Vinyl Siding Upgrade" },
                    { image: "/images/remodler15.webp", title: "Farmhouse Fiber Cement" },
                ]}

                findUs={[
                    { name: "Yelp", rating: "4.6/5", logo: "/icons/yelp.webp" },
                    { name: "Google", rating: "4.9/5", logo: "/icons/google-reviews.webp" },
                ]}

                blog={[
                    {
                        title: "Vinyl vs. James Hardie — Which Siding is Best?",
                        date: "March 8th, 2025",
                        author: "Vasyl",
                        image: "/images/remodler19.webp",
                    },
                    {
                        title: "How New Siding Increases Home Value",
                        date: "April 19th, 2025",
                        author: "Peter",
                        image: "/images/remodler18.webp",
                    },
                    {
                        title: "Signs You Need Siding Replacement",
                        date: "June 1st, 2025",
                        author: "Vasyl",
                        image: "/images/remodler17.webp",
                    },
                ]}

                partners={[
                    "/icons/jameshardie.webp",
                    "/icons/google-reviews.webp"
                ]}
            />



            <WindowsPromoSection
                slides={[
                    {
                        image: "/images/remodler11.webp",
                        tag: "Exterior Painting",
                        heading: "Exterior Painters in Lexington KY You Can Trust",
                        description:
                            "Enhance curb appeal and protect your home with durable exterior paint built for Kentucky’s weather. Our house painters in Lexington KY deliver a flawless finish that lasts for years.",
                        button: "Exterior Painting Services",
                        link: "/contact",
                        projectImage: "/images/remodler24.webp",
                        projectLocation: "Lexington, KY",
                        projectInfo1: "Sherwin-Williams® Duration",
                        projectInfo2: "UV & Moisture Protection",
                        projectName: "Full Exterior Repaint",
                        projectPrice: "12,900"
                    },
                    {
                        image: "/images/remodler13.webp",
                        tag: "Exterior House Painting",
                        heading: "Boost Your Home’s Value & First Impression",
                        description:
                            "A fresh exterior not only looks amazing — it defends your home from moisture, cracking, and fading. We handle repairs, surface prep, caulking and priming before every paint job.",
                        button: "Exterior Color Options",
                        link: "/contact",
                        projectImage: "/images/deck4.webp",
                        projectLocation: "Nicholasville, KY",
                        projectInfo1: "Premium Matte & Satin",
                        projectInfo2: "Low-VOC, Weatherproof",
                        projectName: "Exterior Home Refresh",
                        projectPrice: "9,450"
                    },
                    {
                        image: "/images/deck6.webp",
                        tag: "Exterior Repaint & Restoration",
                        heading: "High-Protection Paint for All Seasons",
                        description:
                            "Our coatings fight fading, peeling, and moisture — locking out weather and keeping your home protected year-round. Perfect for siding, stucco, brick, and wood trim.",
                        button: "Request Free Estimate",
                        link: "/contact",
                        projectImage: "/images/deck2.webp",
                        projectLocation: "Georgetown, KY",
                        projectInfo1: "Factory-Grade Seal",
                        projectInfo2: "Smooth, Clean Lines",
                        projectName: "Weather-Resistant Upgrade",
                        projectPrice: "11,300"
                    }
                ]}
            />

        </Layout >
    )
}

