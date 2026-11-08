import React from "react";
import ReviewsPanel, { ReviewsPreview } from "../components/ReviewsPanel";
import "../styles/local-deck.css";
import SEO from "../components/SEO";

import HeroSplit from "../components/HeroSplit";
import HeroSplit1 from "../components/HeroSplit1";
import GallerySection from "../components/GallerySection";
import ProjectShowcase from "../components/ProjectShowcase";
import ReviewBadges from "../components/ReviewBadges";
import HomeVideoStories from "../components/HomeVideoStories";
import BenefitsGrid from "../components/BenefitsGrid";
import ServicesChips from "../components/ServicesChips";
import ProcessStepsDeck from "../components/ProcessStepsDeck";
import AboutUsVideo from "../components/AboutUsVideo";
import ReviewsSixGrid from "../components/ReviewsSixGrid";
import DeckFAQWithForm from "../components/DeckFAQWithForm";
import BottomHeroCtaDeck from "../components/BottomHeroCtaDeck";
import DeckHeader from "../components/DeckHeader";

export default function DeckPage() {
    // ✅ Reviews data for your grid





    return (
        <main>
            {/* ✅ SEO META */}
            <SEO pathname="/deck-local/" noIndex image="/deck-services/decking-social.jpg" imageAlt="Yellowstone deck and stairs"
                title="Deck Builder in Lexington, KY | Composite & Wood Decks | Yellowstone Renovation"
                description="Plan your deck with a local family-owned team in Lexington and Central Kentucky. Custom composite & wood decks, railings, stairs, lighting, and full project management — plus expert siding upgrades across Central Kentucky."
            />

            {/* ✅ JSON-LD (Deck page focused) */}


            <DeckHeader />

            <HeroSplit1
                img="/images/deck-builder12.webp"
                alt="Deck builder in Lexington KY"
                reviews="Read homeowner reviews"
                title1="Lexington’s"
                titleGreen="Deck Builder"
                title2="Custom Composite & Wood Decks Built to Last"
                promo="Free 3D Design + $1,500 Off"
                btnText="Schedule Free Estimate"
            />
            <section id="deck-quote" style={{ padding: "40px 18px" }}>
                <h2></h2>
            </section>

            <ReviewBadges />

            <HomeVideoStories />

            <section id="projects"></section>
            <GallerySection
                title="Deck Builder in Lexington — Recent Projects"
                subtitle="A quick look at real deck projects we’ve completed across Lexington, Nicholasville, Georgetown, Richmond, and nearby areas. From wood decks to composite decking, stairs, rails, fascia, and picture-frame details — every project is built with clean craftsmanship and long-lasting quality."
                highlight="PROJECT GALLERY"
                background="#ffffff"
                images={[
                    "/images/deck/deck-lexington39.webp",
                    "/images/deck/deck-lexington102.webp",
                    "/images/deck/deck-lexington22.webp",
                    "/images/deck/deck-lexington15.webp",
                    "/images/deck/deck-lexington9.webp",
                    "/images/deck/deck-lexington07.webp",
                    "/images/deck/deck-lexington04.webp",
                    "/images/deck/deck-lexington4.webp",
                    "/images/deck/deck-lexington95.webp",
                    "/images/deck/deck-lexington41.webp",
                    "/images/deck/deck-lexington01.webp",
                    "/images/deck/deck-lexington48.webp",
                    "/images/deck/deck-lexington46.webp",
                    "/images/deck/deck-lexington44.webp",
                    "/images/deck/deck-lexington53.webp",
                    "/images/deck/deck-lexington54.webp",
                    "/images/deck/deck-lexington60.webp",
                    "/images/deck/deck-lexington65.webp",
                    "/images/deck/deck-lexington91.webp",
                    "/images/deck-builder110.webp",
                    "/images/deck/deck-lexington104.webp",

                ]}
            />

            <ProjectShowcase
                titleTop="From Old Space to"
                titleGreen="Beautiful Results"
                titleEnd="— See It Happen"
                text="Real deck transformations completed by our team across Lexington and Central Kentucky. Clean installs, strong framing, premium finishes, and professional project management — built the right way."
                ctaText="Get My Free Consultation"
                items={[
                    {
                        before: "/images/deckbeforee.jpg",
                        after: "/images/deckafter.jpg",
                        location: "Lexington, KY",
                        label: "Transformation 1 of 5",
                    },
                    {
                        before: "/images/deckbefore1.jpeg",
                        after: "/images/deckafter1.webp",
                        location: "Nicholasville, KY",
                        label: "Transformation 2 of 5",
                    },
                    {
                        before: "/images/deckbefore2.webp",
                        after: "/images/deckafter2.webp",
                        location: "Lexington, KY",
                        label: "Transformation 3 of 5",
                    },
                    {
                        before: "/images/deckbefore3.png",
                        after: "/images/deckafter3.png",
                        location: "Georgetown, KY",
                        label: "Transformation 3 of 5",
                    },
                    {
                        before:
                            "/images/deckbefore4.png",
                        after: "/images/deckafter4.avif",
                        location: "Georgetown, KY",
                        label: "Transformation 4 of 5",
                    },
                    {
                        before:
                            "/images/Back_Deck_DIY_Patio_Shelter_Before_After_The_Foxes_Photography_2020_01.jpg",
                        after: "/images/IMG_3744.webp",
                        location: "Frankfort, KY",
                        label: "Transformation 4 of 5",
                    },
                ]}
            />

            <section id="benefits"></section>
            <BenefitsGrid />

            <ServicesChips />

            <section id="process"></section>
            <ProcessStepsDeck />

            <AboutUsVideo
                poster="/images/worker.png"
                videoUrl="https://www.youtube.com/embed/cqG0WZ2JzXk"
                title="Meet Yellowstone Renovation"
                text="We build decks and exterior upgrades with clear pricing, clean job sites, and strong workmanship."
                subline="Serving Lexington, Nicholasville, Georgetown & nearby"
                pill="Deck Builder & Siding Contractor"
                showStars={false}
            />


            <div className="local-deck-page"><ReviewsPreview /><ReviewsPanel /></div>

            <DeckFAQWithForm />

            <BottomHeroCtaDeck
                bgImage="/images/deck/deck-lexington27.webp"
                phoneDisplay="(859) 765-7267"
                phoneTel="8597657267"
            />
        </main>
    );
}
