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

export default function RichmondDeckBuilder() {
    return (
        <Layout>

            {/* SEO */}
            <SEO
                title="Deck Builder in Richmond, KY | Yellowstone Renovation"
                description="Deck building and replacement in Richmond, KY. Compare wood and composite decking, practical layouts, stairs and railings. Free on-site estimates."
                pathname="/cities/richmond-ky/deck-builder/"
                image="/images/deck/deck-lexington11.webp"
                imageAlt="Deck construction by Yellowstone Renovation"
                areaServed={["Richmond, KY"]}
                serviceType={["Deck construction", "Deck replacement"]}
                breadcrumbs={[{ name: "Home", path: "/" }, { name: "Deck building", path: "/decking/" }, { name: "Richmond deck builder", path: "/cities/richmond-ky/deck-builder/" }]}
            />

            <Helmet><script type="application/ld+json">{JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Service",
                "@id": "https://yellowstonerenovation.com/cities/richmond-ky/deck-builder/#service",
                name: "Deck construction in Richmond, KY",
                description: "Deck building and replacement in Richmond, KY. Compare wood and composite decking, practical layouts, stairs and railings. Free on-site estimates.",
                url: "https://yellowstonerenovation.com/cities/richmond-ky/deck-builder/",
                serviceType: "Deck construction and replacement",
                provider: { "@id": "https://yellowstonerenovation.com/#organization" },
                areaServed: { "@type": "Place", name: "Richmond, Kentucky" },
                image: "https://yellowstonerenovation.com/images/deck/deck-lexington11.webp",
            })}</script></Helmet>

            {/* HERO */}
            <Hero2
                topText="Richmond, Kentucky · Deck construction"
                title="Deck Builder in Richmond, KY"
                description="A sunny deck and a shaded deck can need different choices. We help Richmond homeowners plan a comfortable layout and compare materials in the conditions outside their own back door."
                backgroundImage="/images/deck/deck-lexington11.webp"
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
                title="Richmond Deck Transformations"
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
                title="RICHMOND DECK BUILDER GALLERY"
                subtitle="Deck projects from our Kentucky portfolio, with ideas for your Richmond home."
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
                title="Planning a deck for your Richmond home"
                sections={[
  {
    "heading": "Visit the space at the time you want to use it",
    "text": "For a Richmond deck, look at the yard in the afternoon if that is when you plan to sit outside. Sun exposure affects comfort and material selection. Bring that observation to the design discussion alongside the deck dimensions."
  },
  {
    "heading": "Compare samples, not just color names",
    "text": "Wood and composite surfaces vary in texture and appearance. View samples beside your siding and trim, and ask about the cleaning and maintenance each product requires. Lighter or darker finishes can also change how the completed deck looks against the house."
  },
  {
    "heading": "Make room for movement between uses",
    "text": "A deck used for both dining and relaxing needs a clear path between those areas. Locate stairs where they support that route rather than cutting across the seating. If the plan includes a future cover, consider its structural needs during the first design conversation."
  }
]}

                /* SIDEBAR CONTENT */
                offers={[
  {
    "image": "/images/deck/deck-lexington11.webp",
    "text": "Plan your Richmond deck",
    "button": "Request a free estimate",
    "link": "/contact/"
  },
  {
    "image": "/images/deck/deck-lexington11.webp",
    "text": "Compare deck materials and layouts",
    "button": "Explore deck options",
    "link": "/decking/"
  }
]}

                whyUs={["On-site measurements and a defined scope", "Wood and composite options explained", "Stairs and railings planned with the layout", "Project questions answered before you choose"]}

                projects={[
                    { image: "/images/deck4.webp", title: "Composite Deck Build" },
                    { image: "/images/deck5.webp", title: "Wood Deck With Custom Railings" },
                    { image: "/images/deck6.webp", title: "Pergola & Deck Upgrade" },
                    { image: "/images/deck7.webp", title: "Covered Deck Expansion" },
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
                    <p style={{ fontSize: "18px", lineHeight: 1.7, margin: "16px 0 24px" }}>Planning in Richmond? Start with our <a href="/decking/">deck building guide</a>, then compare the material or structure that suits your project.</p>
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
