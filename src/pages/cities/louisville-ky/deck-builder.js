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

export default function LouisvilleDeckBuilder() {
    return (
        <Layout>
            <SEO
                title="Deck Builder in Louisville, KY | Yellowstone Renovation"
                description="Deck construction for Louisville, KY homes. Compare new and replacement decks, wood or composite materials, stairs and railings. Request a free on-site estimate."
                pathname="/cities/louisville-ky/deck-builder/"
                image="/images/deck/deck-lexington01.webp"
                imageAlt="Deck construction by Yellowstone Renovation"
                areaServed={["Louisville, KY"]}
                serviceType={["Deck construction", "Deck replacement"]}
                breadcrumbs={[{ name: "Home", path: "/" }, { name: "Deck building", path: "/decking/" }, { name: "Louisville deck builder", path: "/cities/louisville-ky/deck-builder/" }]}
            />

            <Helmet><script type="application/ld+json">{JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Service",
                "@id": "https://yellowstonerenovation.com/cities/louisville-ky/deck-builder/#service",
                name: "Deck construction in Louisville, KY",
                description: "Deck construction for Louisville, KY homes. Compare new and replacement decks, wood or composite materials, stairs and railings. Request a free on-site estimate.",
                url: "https://yellowstonerenovation.com/cities/louisville-ky/deck-builder/",
                serviceType: "Deck construction and replacement",
                provider: { "@id": "https://yellowstonerenovation.com/#organization" },
                areaServed: { "@type": "Place", name: "Louisville, Kentucky" },
                image: "https://yellowstonerenovation.com/images/deck/deck-lexington01.webp",
            })}</script></Helmet>

            <Hero2
                topText="Louisville, Kentucky · Deck construction"
                title="Deck Builder in Louisville, KY"
                description="A good deck plan respects the space around it. For Louisville projects, we work through the back-door landing, the route into the yard and the room you want for people to gather."
                backgroundImage="/images/deck/deck-lexington01.webp"
                overlayOpacity={0.65}
                formTitle="Plan your deck with us"
                selectLabel="Select Deck Service"
                selectOptions={[
                    "Custom Deck Design & Build",
                    "Composite Decks",
                    "Trex Deck Installation",
                    "Wood Deck Installation",
                    "Deck Replacement",
                    "Deck Repair & Resurfacing",
                    "Second-Story Decks",
                    "Covered Decks & Pergolas",
                    "Stairs & Railing Installation",
                    "Screened-In Decks & Porches",
                    "Full Backyard Deck Makeover",
                ]}
                ctaText="Get Free Quote"
            />

            <AboutSection />

            <BeforeAfter
                title="Louisville Deck Transformations"
                description="Compare the original structures with finished deck projects from our portfolio. See how layout, stairs and railing change the space."
                buttonText="Explore More Projects"
                buttonLink="/projects-showcase/"
                accentColor="#0a923d"
                images={[
                    { before: "/images/deckafter3.webp", after: "/images/deckbefore3.webp" },
                    { before: "/images/deckafter1.webp", after: "/images/deckbefore1.webp" },
                ]}
            />

            <GallerySection
                title="LOUISVILLE DECK BUILDER GALLERY"
                subtitle="Deck projects from our Kentucky portfolio, with ideas for your Louisville home."
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
                    "/images/deck/deck-lexington21.webp",
                    "/images/deck/deck-lexington68.webp",
                    "/images/deck/deck-lexington67.webp",
                    "/images/deck/deck-lexington82.webp",
                    "/images/deck/deck-lexington7.webp",
                    "/images/deck/deck-lexington96.webp",
                ]}
            />

            <DeckBuildingSteps />
            <TestimonialsSection />

            <MainSectionSideBar
                title="Planning a deck for your Louisville home"
                sections={[
  {
    "heading": "Measure the space and the access route",
    "text": "For a Louisville deck project, photos of the side gate and the route to the backyard help as much as a picture of the deck itself. Access, removal of an old structure and delivery space belong in the early planning conversation."
  },
  {
    "heading": "Fit the layout to your house",
    "text": "A back door, basement entrance or existing patio can limit where posts and stairs make sense. Lay out those fixed points before choosing the final footprint. Where the deck is raised, discuss the space underneath and how water will move through the site."
  },
  {
    "heading": "Compare the structure as well as the surface",
    "text": "Wood and composite boards change the appearance and maintenance needs of a deck. Framing, connections, stairs and railings determine much of the work behind it. An on-site assessment helps separate those structural requirements from optional finishes."
  }
]}
                offers={[
  {
    "image": "/images/deck/deck-lexington01.webp",
    "text": "Plan your Louisville deck",
    "button": "Request a free estimate",
    "link": "/contact/"
  },
  {
    "image": "/images/deck/deck-lexington01.webp",
    "text": "Compare deck materials and layouts",
    "button": "Explore deck options",
    "link": "/decking/"
  }
]}
                whyUs={["On-site measurements and a defined scope", "Wood and composite options explained", "Stairs and railings planned with the layout", "Project questions answered before you choose"]}
                projects={[
                    { image: "/images/deck4.webp", title: "Composite Deck Build" },
                    { image: "/images/deck5.webp", title: "Wood Deck With Custom Railings" },
                    { image: "/images/deck6.webp", title: "Pergola & Deck Combo Project" },
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
                    <p style={{ fontSize: "18px", lineHeight: 1.7, margin: "16px 0 24px" }}>Planning in Louisville? Start with our <a href="/decking/">deck building guide</a>, then compare the material or structure that suits your project.</p>
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
