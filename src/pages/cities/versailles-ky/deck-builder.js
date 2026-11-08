import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../../../components/Layout";
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

export default function VersaillesDeckBuilder() {
    return (
        <Layout>

            {/* SEO */}
            <SEO
                title="Deck Builder in Versailles, KY | Yellowstone Renovation"
                description="Wood and composite deck construction in Versailles, KY. Plan a deck that suits your home, with stairs, railings and shade options. Free estimates."
                pathname="/cities/versailles-ky/deck-builder/"
                image="/images/deck/deck-lexington35.webp"
                imageAlt="Deck construction by Yellowstone Renovation"
                areaServed={["Versailles, KY"]}
                serviceType={["Deck construction", "Deck replacement"]}
                breadcrumbs={[{ name: "Home", path: "/" }, { name: "Deck building", path: "/decking/" }, { name: "Versailles deck builder", path: "/cities/versailles-ky/deck-builder/" }]}
            />

            <Helmet><script type="application/ld+json">{JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Service",
                "@id": "https://yellowstonerenovation.com/cities/versailles-ky/deck-builder/#service",
                name: "Deck construction in Versailles, KY",
                description: "Wood and composite deck construction in Versailles, KY. Plan a deck that suits your home, with stairs, railings and shade options. Free estimates.",
                url: "https://yellowstonerenovation.com/cities/versailles-ky/deck-builder/",
                serviceType: "Deck construction and replacement",
                provider: { "@id": "https://yellowstonerenovation.com/#organization" },
                areaServed: { "@type": "Place", name: "Versailles, Kentucky" },
                image: "https://yellowstonerenovation.com/images/deck/deck-lexington35.webp",
            })}</script></Helmet>

            {/* HERO */}
            <Hero2
                topText="Versailles, Kentucky · Deck construction"
                title="Deck Builder in Versailles, KY"
                description="Your deck should look like it belongs with the house. We help Versailles homeowners balance a useful outdoor layout with decking, railings and trim that work together."
                backgroundImage="/images/deck/deck-lexington35.webp"
                overlayOpacity={0.65}
                formTitle="Plan your deck with us"
                selectLabel="Select Deck Service"
                selectOptions={[
                    "Custom Deck Design & Build",
                    "Composite Decks (Trex, TimberTech)",
                    "Wood Deck Installation",
                    "Second-Story Decks",
                    "Deck Repair & Resurfacing",
                    "Covered Decks & Pergolas",
                    "Stairs & Railing Installation",
                    "Screened-In Decks & Porches",
                    "Full Backyard Deck Makeover",
                ]}
                ctaText="Get Free Quote"
            />

            <AboutSection />

            {/* BEFORE & AFTER */}
            <BeforeAfter
                title="Versailles Deck Transformations"
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
                title="VERSAILLES DECK BUILDER GALLERY"
                subtitle="Deck projects from our Kentucky portfolio, with ideas for your Versailles home."
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

            <DeckBuildingSteps />
            <TestimonialsSection />

            <MainSectionSideBar
                title="Planning a deck for your Versailles home"
                sections={[
  {
    "heading": "Start with the character of the house",
    "text": "For a Versailles deck, compare the width of the railing posts, the board color and the trim against the existing exterior. A simple material palette can make a new structure feel settled rather than added as an afterthought."
  },
  {
    "heading": "Keep the garden connection straightforward",
    "text": "Think about the route from the back door to the lawn, planting beds or patio. Stair position and landing size can matter more than an extra corner of decking. Bring a sketch or a few photos showing the areas you use most."
  },
  {
    "heading": "Choose the right kind of shade",
    "text": "An open pergola and a roofed deck solve different problems. One allows more open sky; the other involves roofing and water management. Discuss what you expect from the space before deciding which structure belongs in the plan."
  }
]}

                /* SIDEBAR CONTENT */
                offers={[
  {
    "image": "/images/deck/deck-lexington35.webp",
    "text": "Plan your Versailles deck",
    "button": "Request a free estimate",
    "link": "/contact/"
  },
  {
    "image": "/images/deck/deck-lexington35.webp",
    "text": "Compare deck materials and layouts",
    "button": "Explore deck options",
    "link": "/decking/"
  }
]}

                whyUs={["On-site measurements and a defined scope", "Wood and composite options explained", "Stairs and railings planned with the layout", "Project questions answered before you choose"]}

                projects={[
                    { image: "/images/deck4.webp", title: "Composite Deck Build" },
                    { image: "/images/deck5.webp", title: "Custom Wood Deck With Railings" },
                    { image: "/images/deck6.webp", title: "Pergola & Deck Combination" },
                    { image: "/images/deck7.webp", title: "Covered Deck & Outdoor Living Area" },
                ]}

                findUs={[]}

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
                    <p style={{ fontSize: "18px", lineHeight: 1.7, margin: "16px 0 24px" }}>Planning in Versailles? Start with our <a href="/decking/">deck building guide</a>, then compare the material or structure that suits your project.</p>
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
