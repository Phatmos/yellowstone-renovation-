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

export default function WinchesterDeckBuilder() {
    return (
        <Layout>

            {/* SEO */}
            <SEO
                title="Deck Builder in Winchester, KY | Yellowstone Renovation"
                description="Deck builder serving Winchester, KY. Plan a new deck or replacement with wood, composite, stair and railing options. Free Yellowstone Renovation estimates."
                pathname="/cities/winchester-ky/deck-builder/"
                image="/images/deck/deck-lexington65.webp"
                imageAlt="Deck construction by Yellowstone Renovation"
                areaServed={["Winchester, KY"]}
                serviceType={["Deck construction", "Deck replacement"]}
                breadcrumbs={[{ name: "Home", path: "/" }, { name: "Deck building", path: "/decking/" }, { name: "Winchester deck builder", path: "/cities/winchester-ky/deck-builder/" }]}
            />

            <Helmet><script type="application/ld+json">{JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Service",
                "@id": "https://yellowstonerenovation.com/cities/winchester-ky/deck-builder/#service",
                name: "Deck construction in Winchester, KY",
                description: "Deck builder serving Winchester, KY. Plan a new deck or replacement with wood, composite, stair and railing options. Free Yellowstone Renovation estimates.",
                url: "https://yellowstonerenovation.com/cities/winchester-ky/deck-builder/",
                serviceType: "Deck construction and replacement",
                provider: { "@id": "https://yellowstonerenovation.com/#organization" },
                areaServed: { "@type": "Place", name: "Winchester, Kentucky" },
                image: "https://yellowstonerenovation.com/images/deck/deck-lexington65.webp",
            })}</script></Helmet>

            {/* HERO */}
            <Hero2
                topText="Winchester, Kentucky · Deck construction"
                title="Deck Builder in Winchester, KY"
                description="If the boards feel uneven or the railing moves, start with the structure. We help Winchester homeowners plan a replacement that feels easier to use and makes sense for the whole backyard."
                backgroundImage="/images/deck/deck-lexington65.webp"
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
                title="Winchester Deck Transformations"
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
                title="WINCHESTER DECK BUILDER GALLERY"
                subtitle="Deck projects from our Kentucky portfolio, with ideas for your Winchester home."
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
                title="Planning a deck for your Winchester home"
                sections={[
  {
    "heading": "Find out what is causing the problem",
    "text": "For an existing Winchester deck, worn boards and loose railings should lead to a closer look at the frame and connections. A surface upgrade is useful only when the structure below is suitable. Share photos of both the top and underside before the visit."
  },
  {
    "heading": "Use the rebuild to simplify the steps",
    "text": "Stairs should land where you want to walk, with a route that works around doors and the yard. A replacement gives you an opportunity to reconsider an awkward stair position or a cramped landing before rebuilding it in the same place."
  },
  {
    "heading": "Choose a manageable finish plan",
    "text": "Compare a wood deck with the cleaning and finish maintenance it will need against a composite option with routine washing. Include railings, stair treads and fascia in that comparison. The result should suit the upkeep you want to take on, not just the first-day appearance."
  }
]}

                /* SIDEBAR CONTENT */
                offers={[
  {
    "image": "/images/deck/deck-lexington65.webp",
    "text": "Plan your Winchester deck",
    "button": "Request a free estimate",
    "link": "/contact/"
  },
  {
    "image": "/images/deck/deck-lexington65.webp",
    "text": "Compare deck materials and layouts",
    "button": "Explore deck options",
    "link": "/decking/"
  }
]}

                whyUs={["On-site measurements and a defined scope", "Wood and composite options explained", "Stairs and railings planned with the layout", "Project questions answered before you choose"]}

                projects={[
                    { image: "/images/deck4.webp", title: "Composite Deck Build" },
                    { image: "/images/deck5.webp", title: "Custom Wood Deck With Railings" },
                    { image: "/images/deck6.webp", title: "Deck & Pergola Combination" },
                    { image: "/images/deck7.webp", title: "Covered Deck & Outdoor Upgrade" },
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
                    <p style={{ fontSize: "18px", lineHeight: 1.7, margin: "16px 0 24px" }}>Planning in Winchester? Start with our <a href="/decking/">deck building guide</a>, then compare the material or structure that suits your project.</p>
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
