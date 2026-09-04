import * as React from "react"
import Layout from "../components/Layout"
import DealerBanner from "../components/DealerBanner";
import PromoSection from "../components/PromoSection";
import AboutHero from "../components/AboutHeroSimple.js";
import MainSectionSideBar from "../components/MainSectionSideBar";
import SEO from "../components/SEO";
import "../styles/global.css"
import WindowsPromoSection from "../components/WindowsPromoSection";
import Services from "../components/Services.js"
import { Helmet } from "react-helmet";

export default function Home() {
    return (
        <Layout>
            <Helmet>
                {/* ✅ About Page Keywords */}
                <meta
                    name="keywords"
                    content="About Yellowstone Renovation, Exterior Remodeling Lexington KY, Local Deck Builder, Licensed Siding Contractor Lexington"
                />

                {/* ✅ Social Preview */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="About Yellowstone Renovation | Trusted Deck & Siding Experts in Lexington" />
                <meta property="og:description" content="Meet Yellowstone Renovation — Central Kentucky’s trusted siding & deck contractor. Family-owned, fully licensed, top-rated with 4.9★ reviews." />
                <meta property="og:image" content="https://yellowstonerenovation.com/images/z" />
                <meta property="og:url" content="https://yellowstonerenovation.com/about/" />
                <meta property="og:site_name" content="Yellowstone Renovation" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="About Yellowstone Renovation | Lexington Exterior Contractors" />
                <meta name="twitter:description" content="Family-owned deck & siding installation experts serving Lexington & Central KY." />
                <meta name="twitter:image" content="https://yellowstonerenovation.com/images/remodler1.webp" />
            </Helmet>

            <SEO
                title="About Yellowstone Renovation | Lexington, KY Exterior Remodeling Pros"
                description="Learn about Yellowstone Renovation: fully licensed, insured, and top-rated siding & deck contractor in Lexington, KY — serving homeowners across Central Kentucky with premium exterior remodeling."
                pathname="/about/"
                image="https://yellowstonerenovation.com/images/remodler1.webp"
            />

            {/* ✅ Local Business Schema — DO keep on About page */}
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HomeAndConstructionBusiness",
                        "name": "Yellowstone Renovation",
                        "url": "https://yellowstonerenovation.com",
                        "logo": "icons/logo.webp",
                        "image": "https://yellowstonerenovation.com/images/remodler1.webp",
                        "telephone": "859-545-7020",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Lexington",
                            "addressRegion": "KY",
                            "postalCode": "40502",
                            "addressCountry": "US"
                        },
                        "employee": [
                            {
                                "@type": "Person",
                                "name": "Project & Installation Team",
                                "jobTitle": "Exterior Craftsmen"
                            }
                        ],
                        "foundingDate": "2020",
                        "areaServed": [
                            "Lexington, KY",
                            "Nicholasville, KY",
                            "Winchester, KY",
                            "Georgetown, KY",
                            "Richmond, KY"
                        ]
                    })}
                </script>

                {/* ✅ About Page FAQ Schema */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "Is Yellowstone Renovation licensed and insured?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes — fully licensed and insured in Kentucky for siding, decks, windows, and exterior remodeling."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "How long has Yellowstone Renovation been serving Lexington?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Since 2020, serving hundreds of homeowners with premium remodeling results and highly rated service."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Why do customers trust Yellowstone Renovation?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "We deliver craftsmanship with zero shortcuts and detailed communication — highly rated with 4.9★ reviews."
                                }
                            }
                        ]
                    })}
                </script>
            </Helmet>

            <AboutHero />
            <DealerBanner
                title="Yellow Stone Renovation is your trusted, locally owned and operated home remodeling company serving Lexington, KY"
                highlight="Lexington, KY"
                description={`At Yellow Stone Renovation, we offer a comprehensive range of renovation services Under one roof.  Whether it’s a bathroom makeover, kitchen transformation, siding replacement, flooring, or full-home remodel, our in-house team handles everything from start to finish—including design, material sourcing, construction, and project management.`}
                background="/images/anlin-bg.jpg"
                highlightColor="#0a923d"
            />
            <MainSectionSideBar
                title="About Yellowstone Renovation"
                sections={[
                    {
                        heading: "Who We Are",
                        text: `Yellowstone Renovation is a family-owned remodeling company based in Lexington, Kentucky, built on a foundation of craftsmanship, trust, and personal service. We started as a small group of passionate builders and designers who believed that quality should never be rushed and that every homeowner deserves to love the place they live. Over the years, we’ve grown into one of Central Kentucky’s most trusted renovation companies — not because we take on the biggest projects, but because we take the time to do every project right.`,
                    },
                    {
                        heading: "Our Mission",
                        text: `We believe a great remodel is more than just new walls or fixtures — it’s about improving the way you live. Our mission is to make home renovation simple, transparent, and genuinely enjoyable. We combine design creativity, honest pricing, and detailed craftsmanship to deliver results that last for years. Every project we take on is handled with care, respect for your time, and attention to the smallest details. Whether it’s a single-room update or a complete transformation, we want our clients to feel excited and confident every step of the way.`,
                    },
                    {
                        heading: "What Makes Us Different",
                        text: `At Yellowstone Renovation, we never cut corners or rush a project. Our focus is always on quality — from the materials we use to the relationships we build. We listen carefully to what our clients want, then create tailored solutions that fit their lifestyle, budget, and vision. Our team includes skilled remodelers, designers, and craftsmen who bring years of experience to each job. We take pride in clean, efficient work, open communication, and results that stand the test of time. When we finish a project, it’s not just about how it looks — it’s about how it feels to live in it.`,
                    },
                    {
                        heading: "A Team That Cares",
                        text: `Our team is made up of people who genuinely care about what they do. From the first consultation to the final walkthrough, we’re focused on creating a smooth, stress-free experience. We treat every home as if it were our own — protecting your space, keeping things organized, and staying responsive to your needs. You’ll always know what’s happening, who’s working on your project, and what to expect next. That’s why so many of our clients stay with us for years and refer us to their friends and family.`,
                    },
                    {
                        heading: "Our Service Area",
                        text: `Yellowstone Renovation proudly serves Lexington and the surrounding communities, including Nicholasville, Georgetown, Richmond, and Versailles. We’re local — which means when you call us, you’re working directly with people who live and work in your area. We understand the homes, the styles, and the expectations of Central Kentucky homeowners. No matter where you are in the Bluegrass region, our team is ready to bring your vision to life with the same care and craftsmanship we bring to every project.`,
                    },
                    {
                        heading: "Let’s Build Something Great",
                        text: `Home is where your life happens, and it deserves to reflect who you are. Whether you’re dreaming of a new kitchen, a relaxing bathroom, updated siding, or a full home renovation, we’re here to make it happen. We combine the reliability of a professional contractor with the personal touch of a family business. Our goal is simple — to deliver a remodeling experience that leaves you proud, comfortable, and inspired every time you walk through your door. Let’s create something beautiful together.`,
                    },
                ]}
                offers={[
                    {
                        image: "/images/Yellowstone-Team.webp",
                        text: "Schedule Your Free Remodeling Consultation Today",
                        button: "Get Free Quote",
                        link: "/contact",
                    },
                    {
                        image: "/images/remodler1.webp",
                        text: "Save $1500 on Your Next Renovation Project",
                        button: "Claim Offer",
                        link: "/contact",
                    },
                ]}
                whyUs={[
                    "Locally owned and operated family business",
                    "Hundreds of successful projects across Central Kentucky",
                    "Full-service remodeling: kitchens, bathrooms, siding, and more",
                    "Honest estimates, clear communication, and no hidden fees",
                    "Licensed, insured, and trusted by homeowners for over a decade",
                ]}
                projects={[
                    { image: "/images/remodler1.webp", title: "Modern Kitchen Remodel" },
                    { image: "/images/remodler2.webp", title: "Luxury Bathroom" },
                    { image: "/images/remodler3.webp", title: "Siding Installation" },
                    { image: "/images/remodler4.webp", title: "Outdoor Deck Build" },
                ]}
                findUs={[
                    { name: "Yelp", rating: "4.7/5", logo: "/icons/yelp.webp" },
                    { name: "Google", rating: "4.9/5", logo: "/icons/google-reviews.webp" },
                ]}
                blog={[
                    {
                        title: "5 Things to Know Before Starting Your Home Remodel",
                        date: "March 8th, 2025",
                        author: "Katya",
                        image: "/images/remodler6.webp",
                    },
                    {
                        title: "How to Plan a Successful Kitchen Renovation",
                        date: "April 15th, 2025",
                        author: "Vasyl",
                        image: "/images/remodler7.webp",
                    },
                    {
                        title: "Choosing the Right Contractor for Your Home",
                        date: "May 1st, 2025",
                        author: "Peter",
                        image: "/images/remodler24.webp",
                    },
                ]}
                partners={["/icons/jameshardie.webp", "/icons/bbb-logo.webp", "/icons/yelp.webp"]}
            />
        </Layout>
    )
}