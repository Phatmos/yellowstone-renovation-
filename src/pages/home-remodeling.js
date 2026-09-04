import * as React from "react"
import Layout from "../components/Layout.js"
import Hero2 from "../components/Hero2.js";
import DealerBanner from "../components/DealerBanner.js";
import BeforeAfter from "../components/BeforeAfter.js";
import GallerySection from "../components/GallerySection.js";
import MainSection from "../components/mainSection.js";
import "../styles/global.css"
import Services from "../components/Services.js"
import SEO from "../components/SEO";





export default function Home() {
    return (

        <Layout>
            <Hero2
                topText="Top Home Remodeling Contractor in Lexington, KY"
                title="Home Remodeling in Lexington"
                description="Get your dream Home with Lexington's best remodeling company. We handle everything from products and design to installation"
                backgroundImage="/images/remodler5.webp"
                overlayOpacity={0.6}
            />
            <GallerySection
                title="Lexington Home Remodeling Services"
                subtitle="At Yellowstone Renovation, we bring your vision to life with top-quality Home Remodeling services in Lexington, KY. Whether you’re dreaming of a modern kitchen, a luxurious bathroom, or a whole-house transformation, our experienced team delivers exceptional craftsmanship and personalized solutions tailored to your lifestyle and budget."
                highlight="Home Remodeling"
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
                title="Home Remodeling"
                buttonText="Learn More"
                services={[
                    { title: "Master Bath Remodel", image: "/images/Bathroom18.webp", link: "../contact" },
                    { title: "Kitchen Countertops", image: "/images/kitchen2.webp", link: "../contact" },
                    { title: "Walk in Bathtubs", image: "/images/Bathroom9.webp", link: "../contact" },
                ]}
            />
            <DealerBanner
                title="Why Choose Yellowstone Renovation?"
                highlight="Yellowstone Renovation"
                description="With years of experience serving homeowners across Lexington and surrounding areas, Yellowstone Renovation has built a reputation for excellence, transparency, and attention to detail. We understand that your home is more than just a place to live — it’s where memories are made. That’s why we treat every project with the same care we’d give our own home. We’re fully licensed and insured, and we handle everything from design to completion, ensuring a seamless experience with no stress for you."
                backgroundColor="#ffffff"
                highlightColor="#247704"
            />
            <MainSection
                title="Lexington Home Remodeling Services"
                sections={[
                    {
                        heading: "",
                        text: "At Yellowstone Renovation, we believe your home should reflect your lifestyle, taste, and comfort. Based in Lexington, KY, we offer a full range of home remodeling services designed to help homeowners update, expand, or completely transform their living spaces. From modern kitchen remodels to full home makeovers, our team delivers quality craftsmanship, clear communication, and reliable service every step of the way",
                    },
                    {
                        text: "We handle projects of all sizes — whether you need a few updates or a complete renovation. With years of experience in remodeling and construction, we know how to make every detail count, ensuring your home looks amazing and functions perfectly for your family",
                    },
                    {
                        heading: "Kitchen Remodeling",
                        text: "The kitchen is where life happens — meals, conversations, and memories. At Yellowstone Renovation, we specialize in kitchen remodeling in Lexington that combines style and practicality.",
                    },
                    {
                        text: "Whether you want a cozy farmhouse feel or a clean, modern look, we’ll help you design a space that reflects your personality and makes everyday living easier. Every kitchen we remodel is built to be durable, efficient, and truly one of a kind",
                    },
                    {
                        heading: "Bathroom Remodeling",
                        text: "Your bathroom should be a peaceful retreat — a place where you can relax and recharge. At Yellowstone Renovation, we transform outdated bathrooms into bright, comfortable spaces that feel like home. We handle every aspect, including custom tile showers and tubs, stylish vanities, elegant mirrors, and heated floors that bring warmth and luxury to your mornings. Frameless glass doors and modern lighting give your bathroom a fresh, open feel, while high-quality materials ensure lasting beauty and durability. Whether you want a timeless traditional design or a sleek, modern look, we’ll bring your vision to life with precision and care",
                    },
                    {
                        heading: "Basement Finishing & Remodeling",
                        text: "A finished basement adds valuable space to your home — and endless possibilities. Our Lexington basement remodeling team can turn your unused basement into anything you can imagine: a cozy entertainment room, a home office, a guest suite, or even a gym or playroom for the kids. We take care of everything, from design and framing to flooring, lighting, and finishing touches, so you can enjoy a comfortable, functional new space that feels like a natural extension of your home",
                    },
                    {
                        heading: "Whole-Home Renovations",
                        text: "If your home feels outdated or no longer meets your needs, a complete renovation might be the best solution. At Yellowstone Renovation, we offer full home renovation services in Lexington, KY, including layout redesigns, new flooring, painting, drywall, and upgrades to plumbing and electrical systems. Our goal is to make your home feel brand new while keeping the charm and character you love. Whether you’ve just purchased an older property or want to reinvent your current home, our team has the skills and experience to manage every step of the transformation",
                    },
                    {
                        heading: "Interior & Exterior Upgrades",
                        text: "We don’t just remodel — we improve every corner of your home. Inside, we offer flooring installation, interior painting, and drywall repair to refresh your living spaces. Outside, we handle siding, decks, porches, and window or door replacements that enhance your home’s curb appeal and protect it from Kentucky’s changing weather. Every upgrade is completed with care, precision, and materials designed to last",
                    },
                    {
                        heading: "A Local Remodeling Company You Can Trust",
                        text: "Located right here in Lexington, KY, Yellowstone Renovation proudly serves neighborhoods such as Chevy Chase, Beaumont, Masterson Station, and Hamburg, as well as surrounding towns like Nicholasville, Georgetown, and Versailles. We’ve built our reputation on honesty, transparency, and quality workmanship. From the first phone call to the final walkthrough, we keep communication clear and make sure every client feels confident and informed",
                    },
                ]}
                banners={[
                    {
                        image: "/images/bathroom1.webp",
                        text: "Save $1000 on Your Home Remodeling Project",
                        button: "Claim Offer",
                        link: "#contact",
                    },
                ]}
            />

        </Layout >
    )
}

