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

export default function FrankfortDeckBuilder() {
    return (
        <Layout>

            {/* ✅ SEO Core */}
            <SEO
                title="Deck Builder in Frankfort, KY | Yellowstone Renovation"
                description="Frankfort, KY deck construction and replacement. Discuss wood or composite boards, elevated layouts, stairs and railings. Free Yellowstone Renovation estimates."
                pathname="/cities/frankfort-ky/deck-builder/"
                image="/images/deck/deck-lexington28.webp"
                imageAlt="Deck construction by Yellowstone Renovation"
                areaServed={["Frankfort, KY"]}
                serviceType={["Deck construction", "Deck replacement"]}
                breadcrumbs={[{ name: "Home", path: "/" }, { name: "Deck building", path: "/decking/" }, { name: "Frankfort deck builder", path: "/cities/frankfort-ky/deck-builder/" }]}
            />

            {/* ✅ Extra Meta / Schema */}
            <Helmet><script type="application/ld+json">{JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Service",
                "@id": "https://yellowstonerenovation.com/cities/frankfort-ky/deck-builder/#service",
                name: "Deck construction in Frankfort, KY",
                description: "Frankfort, KY deck construction and replacement. Discuss wood or composite boards, elevated layouts, stairs and railings. Free Yellowstone Renovation estimates.",
                url: "https://yellowstonerenovation.com/cities/frankfort-ky/deck-builder/",
                serviceType: "Deck construction and replacement",
                provider: { "@id": "https://yellowstonerenovation.com/#organization" },
                areaServed: { "@type": "Place", name: "Frankfort, Kentucky" },
                image: "https://yellowstonerenovation.com/images/deck/deck-lexington28.webp",
            })}</script></Helmet>

            {/* ✅ HERO — This is now the REAL H1 */}
            <Hero2
                topText="Frankfort, Kentucky · Deck construction"
                title="Deck Builder in Frankfort, KY"
                description="When the ground drops away from the back door, stairs and supports become part of the design. We help Frankfort homeowners plan the whole deck, from the landing to the lawn."
                backgroundImage="/images/deck/deck-lexington28.webp"
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

            {/* Before & After */}
            <BeforeAfter
                title="Frankfort Deck Before & After Transformations"
                description="Compare the original structures with finished deck projects from our portfolio. See how layout, stairs and railing change the space."
                buttonText="Explore More Projects"
                buttonLink="/projects-showcase/"
                accentColor="#0a923d"
                images={[
                    { before: "/images/deckafter3.webp", after: "/images/deckbefore3.webp" },
                    { before: "/images/deckafter1.webp", after: "/images/deckbefore1.webp" },
                ]}
            />

            {/* Gallery */}
            <GallerySection
                title="FRANKFORT DECK BUILDER GALLERY"
                subtitle="Deck projects from our Kentucky portfolio, with ideas for your Frankfort home."
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
                title="Planning a deck for your Frankfort home"
                sections={[
  {
    "heading": "Plan the trip down to the yard",
    "text": "If your Frankfort backyard slopes, compare stair locations before settling on the deck footprint. A longer stair run or an intermediate landing can change the space left for seating and the route across the lawn. Site measurements make that discussion practical."
  },
  {
    "heading": "Think about what you see through the railing",
    "text": "Railing is a large part of an elevated deck, both from a chair and from the yard. Post spacing, stair transitions and the selected system need to work as a whole. Bring photos of the house and the view you want to keep open."
  },
  {
    "heading": "Compare build options with the same dimensions",
    "text": "A wood-versus-composite decision is clearer when the deck size, stairs and railing remain the same in each option. Changes in height, support conditions or demolition can affect the total more than the board choice alone. Ask for those items to be explained in the scope."
  }
]}
                offers={[
  {
    "image": "/images/deck/deck-lexington28.webp",
    "text": "Plan your Frankfort deck",
    "button": "Request a free estimate",
    "link": "/contact/"
  },
  {
    "image": "/images/deck/deck-lexington28.webp",
    "text": "Compare deck materials and layouts",
    "button": "Explore deck options",
    "link": "/decking/"
  }
]}

                whyUs={["On-site measurements and a defined scope", "Wood and composite options explained", "Stairs and railings planned with the layout", "Project questions answered before you choose"]}

                projects={[
                    { image: "/images/deck4.webp", title: "Backyard Composite Deck" },
                    { image: "/images/deck5.webp", title: "Wood Deck with Rail System" },
                    { image: "/images/deck6.webp", title: "Modern Pergola Deck" },
                    { image: "/images/deck7.webp", title: "Covered Porch Extension" },
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
                    <p style={{ fontSize: "18px", lineHeight: 1.7, margin: "16px 0 24px" }}>Planning in Frankfort? Start with our <a href="/decking/">deck building guide</a>, then compare the material or structure that suits your project.</p>
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
