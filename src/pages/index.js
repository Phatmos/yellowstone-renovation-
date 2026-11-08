import * as React from "react"
import Layout from "../components/Layout"

import WelcomeSection from "../components/WelcomeSection"
import DealerBanner from "../components/DealerBanner"
import BeforeAfter from "../components/BeforeAfter"
import GallerySection from "../components/GallerySection"
import "../styles/global.css"
import Services from "../components/Services.js"
import OurPortfolio from "../components/OurPortfolio"
import DeckServiceLinks from "../components/DeckServiceLinks"
import "../styles/local-deck.css"
import "../styles/deck-services.css"
import SEO from "../components/SEO"

import HeroRoofingSection from "../components/HeroRoofingSection";
import HomeVideoStories from "../components/HomeVideoStories";


export default function Home() {
  return (
    <Layout>

      <SEO pathname="/"
        title="Yellowstone Renovation | Home Exteriors in Lexington, KY"
        description="Yellowstone Renovation is a top-rated deck builder and siding contractor serving Lexington, KY. Custom composite & wood decks, James Hardie® and vinyl siding, clean installs, clear estimates, and reliable project management."
      />


      <HeroRoofingSection
        background="/images/deck/deck-lexington23.webp"
        title="Exterior Remodeling in Lexington, KY"
        subtitle="Yellowstone Renovation builds custom wood and composite decks and installs siding and windows for homeowners in Lexington and Central Kentucky. Tell us about your project for a clear estimate."
        ratingText="Locally owned · Serving Central Kentucky"
        placeholder="Enter your ZIP code"
        buttonText="Get a quick quote"
      />


      <HomeVideoStories />

      {/* ✅ GALLERY */}
      <GallerySection
        title="DECK BUILDER GALLERY"
        subtitle="Explore our deck projects — expertly built for Kentucky homes. From composite to wood, each design is built to endure weather and time."
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

      {/* ✅ SERVICES SECTION */}
      <Services
        title="Professional Exterior Remodeling Services"
        subtitle="Explore custom deck building, siding replacement, windows, and exterior trim for homes around Lexington."
        accentColor="#0a923d"
        bgImage="/images/deck-bg.webp"
        services={[
          {
            title: "Custom Deck Design & Build",
            description:
              "From concept to completion — our team builds stunning, durable decks that expand your living space and enhance outdoor comfort.",
            image: "/images/deck/deck-lexington66.webp",
            link: "/custom-decks",
          },
          {
            title: "Composite & Wood Decks",
            description:
              "Choose between low-maintenance composite materials or timeless natural wood — both crafted for strength and lasting beauty.",
            image: "/images/projects/frankfort/fr20.webp",
            link: "/decking",
          },
          {
            title: "James Hardie® & Vinyl Siding",
            description:
              "High-performance siding solutions built to protect your home and elevate curb appeal — engineered for Kentucky’s weather.",
            image: "/images/remodler1.webp",
            link: "/siding-replacement",
          },
          {
            title: "Windows & Exterior Trim",
            description:
              "Energy-efficient windows and detailed trim work that improve your home’s aesthetics, comfort, and overall value.",
            image: "/images/remodler6.webp",
            link: "/windows",
          },
        ]}
      />

      <WelcomeSection />
      <DealerBanner />
      {/* ✅ BEFORE / AFTER */}
      <BeforeAfter
        title="Deck & Siding Before & After Transformations"
        description="See how we’ve upgraded exteriors across Lexington with strong, beautiful decks and durable siding installations. Outdoor living done right — the Yellowstone way."
        buttonText="See More Projects"
        buttonLink="/projects"
        accentColor="#0a923d"
        images={[
          {
            before: "/images/deckafter3.webp",
            after: "/images/deckbefore3.webp",
          },
          {
            before: "/images/sidingafter.webp",
            after: "/images/sidingbefore.webp",
          },
        ]}
      />
      <OurPortfolio />
      <DeckServiceLinks standalone />


      {/* ✅ PROMO SLIDER (Exterior Only) */}

    </Layout>
  )
}
