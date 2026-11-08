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

export default function BracktownDeckBuilder() {
    return (
        <Layout>

            {/* SEO */}
            <SEO
                title="Deck Builder in Bracktown, KY | Yellowstone Renovation"
                description="Plan a deck build or replacement in Bracktown, KY. Yellowstone Renovation explains wood, composite, stairs and railing options with a free on-site estimate."
                pathname="/cities/bracktown-ky/deck-builder/"
                image="/images/deck/deck-lexington47.webp"
                imageAlt="Deck construction by Yellowstone Renovation"
                areaServed={["Bracktown, KY"]}
                serviceType={["Deck construction", "Deck replacement"]}
                breadcrumbs={[{ name: "Home", path: "/" }, { name: "Deck building", path: "/decking/" }, { name: "Bracktown deck builder", path: "/cities/bracktown-ky/deck-builder/" }]}
            />

            {/* Extra Meta / Schema */}
            <Helmet><script type="application/ld+json">{JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Service",
                "@id": "https://yellowstonerenovation.com/cities/bracktown-ky/deck-builder/#service",
                name: "Deck construction in Bracktown, KY",
                description: "Plan a deck build or replacement in Bracktown, KY. Yellowstone Renovation explains wood, composite, stairs and railing options with a free on-site estimate.",
                url: "https://yellowstonerenovation.com/cities/bracktown-ky/deck-builder/",
                serviceType: "Deck construction and replacement",
                provider: { "@id": "https://yellowstonerenovation.com/#organization" },
                areaServed: { "@type": "Place", name: "Bracktown, Kentucky" },
                image: "https://yellowstonerenovation.com/images/deck/deck-lexington47.webp",
            })}</script></Helmet>

            {/* HERO */}
            <Hero2
                topText="Bracktown, Kentucky · Deck construction"
                title="Deck Builder in Bracktown, KY"
                description="An old deck can look serviceable from the yard and still need a closer look underneath. We help Bracktown homeowners decide what to rebuild, what to keep and what to change."
                backgroundImage="/images/deck/deck-lexington47.webp"
                overlayOpacity={0.65}
                formTitle="Plan your deck with us"
                selectLabel="Select Deck Service"
                selectOptions={[
                    "Custom Deck Design & Build",
                    "Composite Decks (Trex, TimberTech, AZEK)",
                    "Wood Deck Installation",
                    "Second-Story Decks",
                    "Deck Repair & Reinforcement",
                    "Covered Decks & Pergolas",
                    "Railing & Stair Installation",
                    "Screened-In Decks & Porches",
                    "Full Outdoor Living Makeover",
                ]}
                ctaText="Get Free Quote"
            />

            <AboutSection />

            {/* BEFORE & AFTER */}
            <BeforeAfter
                title="Bracktown Deck Before & After Transformations"
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
                title="BRACKTOWN DECK BUILDER GALLERY"
                subtitle="Deck projects from our Kentucky portfolio, with ideas for your Bracktown home."
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
                ]}
            />

            <DeckBuildingSteps />
            <TestimonialsSection />

            {/* MAIN SIDEBAR SECTION */}
            <MainSectionSideBar
                title="Planning a deck for your Bracktown home"
                sections={[
  {
    "heading": "Separate a tired surface from a tired structure",
    "text": "Loose boards, movement at a railing or a soft spot near the house are reasons to have an existing Bracktown deck assessed. The next step is to review the frame and connections before deciding whether new decking alone is appropriate."
  },
  {
    "heading": "Keep the yard accessible during the project",
    "text": "Talk through access for removal and deliveries before work starts. Gates, planting beds and the route from the street can influence how materials reach the back of the house. Bring those details into the estimate rather than treating them as a surprise later."
  },
  {
    "heading": "Use the rebuild to fix an awkward layout",
    "text": "A replacement is a chance to move steps away from a narrow corner, make the landing more useful or leave a better route to the garden. Compare the layout first, then choose wood or composite and a railing that suits the final plan."
  }
]}

                offers={[
  {
    "image": "/images/deck/deck-lexington47.webp",
    "text": "Plan your Bracktown deck",
    "button": "Request a free estimate",
    "link": "/contact/"
  },
  {
    "image": "/images/deck/deck-lexington47.webp",
    "text": "Compare deck materials and layouts",
    "button": "Explore deck options",
    "link": "/decking/"
  }
]}

                whyUs={["On-site measurements and a defined scope", "Wood and composite options explained", "Stairs and railings planned with the layout", "Project questions answered before you choose"]}

                projects={[
                    { image: "/images/deck4.webp", title: "Composite Deck" },
                    { image: "/images/deck5.webp", title: "Wood Deck Installation" },
                    { image: "/images/deck6.webp", title: "Pergola + Deck Upgrade" },
                    { image: "/images/deck7.webp", title: "Covered Deck Extension" },
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
                    <p style={{ fontSize: "18px", lineHeight: 1.7, margin: "16px 0 24px" }}>Planning in Bracktown? Start with our <a href="/decking/">deck building guide</a>, then compare the material or structure that suits your project.</p>
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
