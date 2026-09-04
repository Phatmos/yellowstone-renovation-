import * as React from "react"
import Layout from "../components/Layout"
import Hero2 from "../components/Hero2";
import GallerySection from "../components/GallerySection";
import DealerBanner from "../components/DealerBanner";
import BeforeAfter from "../components/BeforeAfter";
import MainSection from "../components/mainSection.js";
import PromoSection from "../components/PromoSection";
import MainSectionSideBar from "../components/MainSectionSideBar";
import SEO from "../components/SEO";
import "../styles/global.css"
import Services from "../components/Services.js"
import { Helmet } from "react-helmet";

export default function Home() {
    return (
        <Layout>
            <Helmet>
                <meta
                    name="keywords"
                    content="Wood Siding Lexington KY, Cedar Siding Kentucky, Exterior Wood Cladding Lexington, Real Wood Siding Replacement, Wood Shake Siding Contractor"
                />

                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Premium Wood Siding Installation in Lexington, KY | Rustic & Modern Styles"
                />
                <meta
                    property="og:description"
                    content="Upgrade your home with real wood siding — cedar, redwood & rustic shake options professionally installed across Lexington & Central Kentucky."
                />
                <meta
                    property="og:url"
                    content="https://yellowstonerenovation.com/wood-siding/"
                />
                <meta
                    property="og:image"
                    content="https://yellowstonerenovation.com/images/remodler22.webp"
                />

                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Cedar & Wood Siding Contractor in Lexington, KY"
                />
                <meta
                    name="twitter:description"
                    content="Beautiful natural wood siding — timeless curb appeal & lasting performance. Free estimates!"
                />
                <meta
                    name="twitter:image"
                    content="https://yellowstonerenovation.com/images/remodler22.webp"
                />
            </Helmet>

            {/* ✅ PAGE SEO */}
            <SEO
                title="Wood Siding Installation in Lexington, KY | Cedar, Redwood & Shake"
                description="Premium wood siding installed by Lexington siding experts. Natural cedar & redwood siding with full sealing, moisture protection & expert craftsmanship."
                pathname="/wood-siding/"
                image="https://yellowstonerenovation.com/images/remodler22.webp"
            />

            {/* ✅ Local Business Schema */}
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HomeAndConstructionBusiness",
                        "name": "Yellowstone Renovation",
                        "url": "https://yellowstonerenovation.com/wood-siding/",
                        "image": "https://yellowstonerenovation.com/images/remodler22.webp",
                        "telephone": "859-545-7020",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Lexington",
                            "addressRegion": "KY",
                            "postalCode": "40502",
                            "addressCountry": "US"
                        },
                        "serviceType": [
                            "Wood Siding Installation",
                            "Cedar Shake Siding",
                            "Rustic Exterior Wood Cladding"
                        ],
                        "areaServed": [
                            "Lexington, KY",
                            "Nicholasville, KY",
                            "Winchester, KY",
                            "Georgetown, KY",
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
                                "name": "Does wood siding require maintenance?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Wood siding requires periodic sealing or staining every 3–7 years depending on Kentucky humidity exposure. We offer maintenance plans to protect your investment."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What type of wood siding lasts longest?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Cedar and redwood siding perform best in Lexington due to natural pest and moisture resistance. When installed with correct flashing & ventilation, lifespan can exceed 25–40 years."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Is real wood siding good for resale value?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes — real wood siding adds premium curb appeal and architectural character, making homes more desirable in neighborhoods like Hamburg, Chevy Chase & Masterson Station."
                                }
                            }
                        ]
                    })}
                </script>
            </Helmet>


            <Hero2
                topText="WOOD SIDING INSTALLATION & REPAIR"
                title="Natural Wood Siding — Styled & Protected"
                description="Classic beauty with modern protection — cedar & wood siding installed by specialists."
                backgroundImage="/images/remodler22.webp"
                formTitle="Free Wood Siding Estimate"
                selectLabel="Select Wood Siding Service"
                selectOptions={[
                    "Full Wood Siding Replacement",
                    "Cedar Siding Installation",
                    "Wood Siding Repair",
                    "Painting & Staining"
                ]}
                ctaText="Get My Estimate"
            />



            <GallerySection
                title="Lexington’s Trusted Wood Siding Specialists"
                subtitle="Wood siding offers unmatched natural charm and architectural elegance. Whether you’re restoring a historic home or creating a high-end contemporary look, Yellowstone Renovation delivers precision installation and weather-resistant protection that keeps your home beautiful year-round."
                highlight="Wood Siding Experts"
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
                title="Wood Siding Before & After"
                description="Experience the natural beauty of real wood siding. We restore and replace damaged or weathered surfaces with high-quality wood siding that adds warmth, character, and long-lasting curb appeal to your home."
                buttonText="View Wood Siding Projects"
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
                title="Wood Siding Services"
                subtitle="Natural beauty, timeless craftsmanship, and long-lasting protection — premium wood siding installed the right way in Lexington, KY."
                accentColor="#0a923d"
                bgImage="/images/deck-bg.jpg"
                services={[
                    {
                        title: "Wood Siding Replacement",
                        description:
                            "Refresh your home with beautiful new wood siding designed to withstand Kentucky weather. Improved insulation, stunning curb appeal, and strong property value gains.",
                        image: "/images/remodler1.webp",
                        link: "/fiber-cement-siding",
                    },
                    {
                        title: "Cedar & Redwood Siding",
                        description:
                            "Premium wood siding options offering rich color tones and natural rot resistance. A luxury upgrade with long-lasting performance and a warm, elegant appearance.",
                        image: "/images/remodler24.webp",
                        link: "/siding-replacement",
                    },
                    {
                        title: "Board & Batten Wood Siding",
                        description:
                            "Add modern farmhouse style with vertical wood boards that create bold architectural character and increased dimension to your home façade.",
                        image: "/images/remodler3.webp",
                        link: "/james-hardie-siding",
                    },
                    {
                        title: "Trim, Fascia & Wood Protection",
                        description:
                            "Protect edges and improve structural integrity with weather-treated trim and soffits. We also offer staining, sealing, and yearly maintenance for long-term wood durability.",
                        image: "/images/remodler2.webp",
                        link: "/wood-siding",
                    },
                ]}
            />

            <DealerBanner
                title="Complete Wood Siding Installation & Restoration"
                highlight="Wood Siding Replacement"
                description="Our team handles everything from removing old siding to installing premium cedar, redwood, or engineered wood boards. Each project is sealed, stained, and weatherproofed to ensure long-lasting protection and rich, natural color. With our craftsmanship and attention to detail, your home will stand out with timeless curb appeal and reliable durability."
                backgroundColor="#ffffff"
                highlightColor="#247704"
            />



            <MainSectionSideBar
                title="Wood Siding Contractors in Lexington, KY"
                sections={[
                    {
                        heading: "Wood Siding in Lexington KY — Warm, Natural, and Timeless",
                        text: `Wood siding brings unmatched character and charm to any home. From classic cedar to high-performance treated wood options, we install siding that enhances curb appeal and improves resale value. Yellowstone Renovation is a trusted wood siding contractor in Lexington KY — delivering custom craftsmanship and durable exterior protection built for Kentucky weather. If you’re searching for “wood siding replacement near me,” we offer premium results designed to last decades with proper maintenance.`
                    },
                    {
                        heading: "Premium Cedar & Redwood Siding",
                        text: `We specialize in cedar and redwood siding for homeowners who want stunning natural grain, long-lasting color, and excellent weather resistance. These woods resist decay and pests better than standard lumber while adding a luxurious, high-end appearance that elevates your entire property. Available in lap siding, shake, or board-and-batten styles — perfectly tailored to match your home’s architecture.`
                    },
                    {
                        heading: "Custom Design Options to Match Your Style",
                        text: `Whether you love the rustic look of natural wood or a sleek, modern finish with sharp lines, we help you select textures, trims, and stain colors that complement your home. Our designers take the time to ensure your new wood exterior feels cohesive and timeless — something you’ll be proud to come home to every day.`
                    },
                    {
                        heading: "Improved Insulation & Energy Efficiency",
                        text: `Wood siding doesn’t just look beautiful — it helps regulate temperature naturally, improving your home’s insulation and comfort year-round. With the right installation and sealing systems, you can reduce drafts, energy costs, and outside noise for a more peaceful living space.`
                    },
                    {
                        heading: "Wood Siding Repair & Full Replacement",
                        text: `Whether you’re refreshing a few damaged sections or replacing an entire exterior, our skilled crews restore your siding with careful craftsmanship. We repair rot, warping, moisture damage, loose boards, and more — matching materials and finishes for a clean, seamless appearance.`
                    },
                    {
                        heading: "Protection From Kentucky Climate",
                        text: `Our wood siding installations include water-resistant barriers, air gap ventilation, durable flashing, and high-quality paints or stains designed to withstand humidity, storms, and seasonal shifts. We take every detail seriously so your exterior stays protected year after year.`
                    },
                    {
                        heading: "Why Homeowners Choose Yellowstone Renovation",
                        text: `We are fully licensed, insured, and trusted by homeowners throughout Lexington, Nicholasville, Georgetown, Richmond, and Versailles. We keep our pricing transparent, our schedules tight, and our communication clear. Most importantly — we care about delivering craftsmanship that stands out and stands the test of time.`
                    },
                    {
                        heading: "Free Wood Siding Estimate in Lexington, KY",
                        text: `Ready for a warm and natural exterior upgrade? Contact us today for a free quote and expert design guidance. Wood siding is more than a cladding — it’s a beautiful investment into comfort, style, and long-term home value. Let’s create something amazing together.`
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
            
        </Layout>
    )
}
