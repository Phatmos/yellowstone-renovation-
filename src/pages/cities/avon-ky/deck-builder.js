import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../../../components/Layout";
import HeroSection from "../../../components/HeroSection";
import AboutSection from "../../../components/AboutSection";
import BeforeAfter from "../../../components/BeforeAfter";
import GallerySection from "../../../components/GallerySection";
import TestimonialsSection from "../../../components/TestimonialsSection";
import SEO from "../../../components/SEO";
import QuoteSection from "../../../components/QuoteSection";
import ScrollToTop from "../../../components/ScrollToTop";
import "../../../styles/ScrollToTop.css";
import DeckBuildingSteps from "../../../components/DeckBuildingSteps";
import MainSectionSideBar from "../../../components/MainSectionSideBar";
import Hero2 from "../../../components/Hero2";

export default function AvonDeckBuilder() {
    return (
        <Layout>

            {/* ✅ SEO Core */}
            <SEO
                title="Deck Builder in Avon, KY | Yellowstone Renovation"
                description="Deck construction in Avon, KY, with wood and composite options. Plan access, dining space, stairs and railings. Request a free Yellowstone Renovation estimate."
                pathname="/cities/avon-ky/deck-builder/"
                image="/images/deck/deck-lexington23.webp"
                imageAlt="Deck construction by Yellowstone Renovation"
                areaServed={["Avon, KY"]}
                serviceType={["Deck construction", "Deck replacement"]}
                breadcrumbs={[{ name: "Home", path: "/" }, { name: "Deck building", path: "/decking/" }, { name: "Avon deck builder", path: "/cities/avon-ky/deck-builder/" }]}
            />

            {/* ✅ Extra Meta / Schema */}
            <Helmet><script type="application/ld+json">{JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Service",
                "@id": "https://yellowstonerenovation.com/cities/avon-ky/deck-builder/#service",
                name: "Deck construction in Avon, KY",
                description: "Deck construction in Avon, KY, with wood and composite options. Plan access, dining space, stairs and railings. Request a free Yellowstone Renovation estimate.",
                url: "https://yellowstonerenovation.com/cities/avon-ky/deck-builder/",
                serviceType: "Deck construction and replacement",
                provider: { "@id": "https://yellowstonerenovation.com/#organization" },
                areaServed: { "@type": "Place", name: "Avon, Kentucky" },
                image: "https://yellowstonerenovation.com/images/deck/deck-lexington23.webp",
            })}</script></Helmet>

            {/* HERO */}
            <Hero2
                topText="Avon, Kentucky · Deck construction"
                title="Deck Builder in Avon, KY"
                description="The best place for a new deck starts with your back door. For Avon homes, we plan an easy route to the yard, usable seating and a material that fits your routine."
                backgroundImage="/images/deck/deck-lexington23.webp"
                overlayOpacity={0.65}
                formTitle="Plan your deck with us"
                selectLabel="Select Deck Service"
                selectOptions={[
                    "Custom Deck Design & Build",
                    "Composite Decks (Trex, TimberTech, AZEK)",
                    "Wood Deck Installation",
                    "Second-Story Decks",
                    "Deck Repair & Resurfacing",
                    "Covered Decks & Pergolas",
                    "Stairs & Railing Installation",
                    "Screened-In Decks & Porches",
                    "Full Outdoor Living Makeover",
                ]}
                ctaText="Get Free Quote"
            />

            <AboutSection />

            {/* BEFORE & AFTER */}
            <BeforeAfter
                title="Avon Deck Before & After Transformations"
                description="Compare the original structures with finished deck projects from our portfolio. See how layout, stairs and railing change the space."
                buttonText="Explore More Projects"
                buttonLink="/projects-showcase/"
                accentColor="#0a923d"
                images={[
                    { before: "/images/deckafter3.webp", after: "/images/deckbefore3.webp" },
                    { before: "/images/deckafter1.webp", after: "/images/deckbefore1.webp" },
                ]}
            />

            {/* GALLERY */}
            <GallerySection
                title="AVON DECK BUILDER GALLERY"
                subtitle="Deck projects from our Kentucky portfolio, with ideas for your Avon home."
                highlight="DECK BUILDER"
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
                    "/images/deck/deck-lexington82.webp",
                    "/images/deck/deck-lexington21.webp",
                    "/images/deck/deck-lexington67.webp",
                ]}
            />

            <DeckBuildingSteps />
            <TestimonialsSection />

            {/* MAIN SECTION SIDEBAR */}
            <MainSectionSideBar
                title="Planning a deck for your Avon home"
                sections={[
  {
    "heading": "Give daily traffic its own route",
    "text": "A dining table can fill a deck quickly. For an Avon project, sketch the path from the kitchen to the grill and from the steps to the lawn. Keeping that route clear can be more useful than adding a few square feet in the wrong corner."
  },
  {
    "heading": "Decide what belongs above and below",
    "text": "If the deck will be elevated, think about the space underneath while planning posts and stairs. If you want shade above it, a roof needs different support and water management from an open pergola. Those choices affect the structure, not just the finishing touches."
  },
  {
    "heading": "Compare the complete scope",
    "text": "Board price is only part of a deck estimate. Ask about demolition, framing, stair runs, railing, fascia and any work at the house connection. We can compare wood and composite around the same layout so the differences are easier to understand."
  }
]}

                /* OFFERS */
                offers={[
  {
    "image": "/images/deck/deck-lexington23.webp",
    "text": "Plan your Avon deck",
    "button": "Request a free estimate",
    "link": "/contact/"
  },
  {
    "image": "/images/deck/deck-lexington23.webp",
    "text": "Compare deck materials and layouts",
    "button": "Explore deck options",
    "link": "/decking/"
  }
]}

                /* WHY US */
                whyUs={["On-site measurements and a defined scope", "Wood and composite options explained", "Stairs and railings planned with the layout", "Project questions answered before you choose"]}

                /* PROJECTS */
                projects={[
                    { image: "/images/deck4.webp", title: "Composite Deck Project" },
                    { image: "/images/deck5.webp", title: "Wood Deck Installation" },
                    { image: "/images/deck6.webp", title: "Pergola + Deck Upgrade" },
                    { image: "/images/deck7.webp", title: "Covered Back Deck Extension" },
                ]}

                /* FIND US */
                findUs={[]}

                /* BLOG POSTS */
                blog={[]}

                partners={[
                    "/icons/trex.webp",
                    "/icons/timbertech.webp",
                    "/icons/Yelp.webp"
                ]}
            />

            <section className="yr-content-section" aria-labelledby="deck-service-options">
                <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
                    <h2 id="deck-service-options">Find the right fit for your backyard</h2>
                    <p style={{ fontSize: "18px", lineHeight: 1.7, margin: "16px 0 24px" }}>Planning in Avon? Start with our <a href="/decking/">deck building guide</a>, then compare the material or structure that suits your project.</p>
                    <nav aria-label="Deck materials and outdoor services" style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                        {[
                            ["/wood-decks/", "Wood decks"], ["/composite-decks/", "Composite decks"],
                            ["/covered-decks/", "Covered decks"], ["/custom-decks/", "Custom deck design"],
                            ["/outdoor-deck/", "Outdoor living spaces"], ["/patios/", "Patios"], ["/pergolas/", "Pergolas"],
                        ].map(([href, label]) => <a key={href} href={href} style={{ color: "#194b35", background: "#fff", border: "1px solid #cddbcf", borderRadius: "999px", padding: "12px 20px", fontSize: "16px", fontWeight: 600 }}>{label}</a>)}
                    </nav>
                </div>
            </section>

            <QuoteSection />
            <ScrollToTop />
        </Layout>
    );
}
