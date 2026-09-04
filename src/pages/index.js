import * as React from "react"
import Layout from "../components/Layout"

import WelcomeSection from "../components/WelcomeSection"
import DealerBanner from "../components/DealerBanner"
import BeforeAfter from "../components/BeforeAfter"
import GallerySection from "../components/GallerySection"
import "../styles/global.css"
import Services from "../components/Services.js"
import OurPortfolio from "../components/OurPortfolio"
import WindowsPromoSection from "../components/WindowsPromoSection"
import SEO from "../components/SEO"
import { Helmet } from "react-helmet"
import MainSectionSideBar from "../components/MainSectionSideBar";
import HeroRoofingSection from "../components/HeroRoofingSection";


export default function Home() {
  return (
    <Layout>

      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              /* =========================
                 ORGANIZATION / BUSINESS
              ========================= */
              {
                "@type": ["HomeAndConstructionBusiness", "GeneralContractor"],
                "@id": "https://yellowstonerenovation.com/#business",
                "name": "Yellowstone Renovation",
                "url": "https://yellowstonerenovation.com/",
                "logo": "https://yellowstonerenovation.com/icons/logo.webp",
                "image": "https://yellowstonerenovation.com/images/og-home.jpg",
                "telephone": "+1-859-765-7267",
                "priceRange": "$$",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "120 Tina Way",
                  "addressLocality": "Nicholasville",
                  "addressRegion": "KY",
                  "postalCode": "40356",
                  "addressCountry": "US"
                },
                "areaServed": [
                  { "@type": "City", "name": "Lexington", "addressRegion": "KY" },
                  { "@type": "City", "name": "Nicholasville", "addressRegion": "KY" },
                  { "@type": "City", "name": "Georgetown", "addressRegion": "KY" },
                  { "@type": "City", "name": "Richmond", "addressRegion": "KY" },
                  { "@type": "City", "name": "Versailles", "addressRegion": "KY" },
                  { "@type": "City", "name": "Winchester", "addressRegion": "KY" },
                  { "@type": "City", "name": "Frankfort", "addressRegion": "KY" }
                ],
                "sameAs": [
                  "https://www.facebook.com/p/Yellowstone-Renovation-61551123481170/",
                  "https://www.instagram.com/yellowstone_renovation/",
                  "https://maps.google.com/?q=Yellowstone+Renovation+Nicholasville+KY"
                ],
                "foundingLocation": {
                  "@type": "Place",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Nicholasville",
                    "addressRegion": "KY",
                    "addressCountry": "US"
                  }
                },
                "description":
                  "Yellowstone Renovation is a trusted exterior remodeling contractor serving Lexington, KY and Central Kentucky. We specialize in custom deck building, composite and wood decking, James Hardie® and vinyl siding installation, exterior trim, windows, and full exterior upgrades with clear communication and organized project management.",
                "makesOffer": [
                  { "@id": "https://yellowstonerenovation.com/#service-deck-building" },
                  { "@id": "https://yellowstonerenovation.com/#service-siding" }
                ],
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.9",
                  "reviewCount": "87"
                },
                "review": [
                  {
                    "@type": "Review",
                    "author": { "@type": "Person", "name": "Timothy H." },
                    "datePublished": "2025-03-10",
                    "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
                    "reviewBody":
                      "Very responsive and easy to work with. The estimate was clear, the timeline was realistic, and the crew showed up when they said they would. Clean work and great communication."
                  },
                  {
                    "@type": "Review",
                    "author": { "@type": "Person", "name": "Shaun R." },
                    "datePublished": "2025-02-02",
                    "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
                    "reviewBody":
                      "Hardie siding install came out perfect. The crew protected landscaping, cleaned up daily, and finished faster than expected. The house looks brand new."
                  },
                  {
                    "@type": "Review",
                    "author": { "@type": "Person", "name": "Michelle B." },
                    "datePublished": "2024-11-18",
                    "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
                    "reviewBody":
                      "From design to final walkthrough, the process was smooth. They handled details, answered questions quickly, and the final result exceeded expectations."
                  }
                ]
              },

              /* =========================
                 WEBSITE + HOMEPAGE
              ========================= */
              {
                "@type": "WebSite",
                "@id": "https://yellowstonerenovation.com/#website",
                "url": "https://yellowstonerenovation.com/",
                "name": "Yellowstone Renovation",
                "publisher": { "@id": "https://yellowstonerenovation.com/#business" },
                "inLanguage": "en-US"
              },
              {
                "@type": "WebPage",
                "@id": "https://yellowstonerenovation.com/#webpage",
                "url": "https://yellowstonerenovation.com/",
                "name": "Deck & Siding Contractor in Lexington, KY | Yellowstone Renovation",
                "isPartOf": { "@id": "https://yellowstonerenovation.com/#website" },
                "about": { "@id": "https://yellowstonerenovation.com/#business" },
                "primaryImageOfPage": {
                  "@type": "ImageObject",
                  "url": "https://yellowstonerenovation.com/images/og-home.jpg"
                },
                "description":
                  "Looking for a deck builder or siding contractor in Lexington, KY? Yellowstone Renovation designs and builds custom decks and installs James Hardie® & vinyl siding with clean work, clear estimates, and reliable project management across Central Kentucky."
              },

              /* =========================
                 SERVICE: DECK BUILDING
              ========================= */
              {
                "@type": "Service",
                "@id": "https://yellowstonerenovation.com/#service-deck-building",
                "name": "Deck Building in Lexington, KY",
                "serviceType": "Deck Design & Construction",
                "provider": { "@id": "https://yellowstonerenovation.com/#business" },
                "areaServed": { "@type": "City", "name": "Lexington", "addressRegion": "KY" },
                "description":
                  "Custom deck design and construction in Lexington, KY. Composite and wood decking, multi-level decks, stairs, railings, lighting, and full build management from design to permits and installation."
              },

              /* =========================
                 SERVICE: SIDING
              ========================= */
              {
                "@type": "Service",
                "@id": "https://yellowstonerenovation.com/#service-siding",
                "name": "Siding Installation in Lexington, KY",
                "serviceType": "Siding Replacement & Installation",
                "provider": { "@id": "https://yellowstonerenovation.com/#business" },
                "areaServed": { "@type": "City", "name": "Lexington", "addressRegion": "KY" },
                "description":
                  "Professional siding replacement and installation in Lexington, KY. We install James Hardie® fiber cement and premium vinyl siding designed for Kentucky weather, improving curb appeal, durability, and energy performance."
              }
            ]
          })}
        </script>
      </Helmet>
      <SEO
        title="Deck & Siding Contractor in Lexington, KY | Yellowstone Renovation"
        description="Yellowstone Renovation is a top-rated deck builder and siding contractor serving Lexington, KY. Custom composite & wood decks, James Hardie® and vinyl siding, clean installs, clear estimates, and reliable project management."
      />


      <HeroRoofingSection
        background="/images/deck/deck-lexington23.webp"
        title="Deck Builder & Siding Contractor in Lexington, KY"
        subtitle="Yellowstone Renovation is a small, local company made up of a few hardworking people who truly care about what we do. We’re not a big corporation — just a team that takes pride in every project and aims to deliver honest, high-quality work for every client."
        ratingText="⭐⭐⭐⭐⭐ 4.9 |  #1 Local Exterior Experts"
        placeholder="Enter your ZIP code"
        buttonText="Get a quick quote"
      />


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
        subtitle="Complete outdoor solutions — decks, siding, gutters, windows, and trim installation. Everything your home exterior needs, built with precision, quality, and pride."
        accentColor="#0a923d"
        bgImage="/images/deck-bg.jpg"
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
      <MainSectionSideBar
        title="Deck Builder in Lexington, KY"
        sections={[
          {
            heading: "Deck Builder in Lexington, KY — Trusted Outdoor Living Experts",
            text: `Yellowstone Renovation is Lexington’s leading deck builder specializing in custom outdoor spaces that combine beauty, strength, and comfort. Our team designs and builds premium decks using composite, cedar, and pressure-treated lumber engineered to perform in Kentucky’s climate. From simple backyard platforms to multi-level entertainment decks, every structure is built with precision, safety, and long-term value in mind. We manage every step — design, permitting, framing, and finishing — to deliver a worry-free experience. If you’re searching for “deck builders near me” in Lexington KY, you’ve found the team homeowners trust for craftsmanship that lasts decades.`,
          },
          {
            heading: "Custom Deck Installation in Lexington, KY",
            text: `We don’t believe in one-size-fits-all decks. Every Yellowstone Renovation deck is a fully customized design that matches your home’s style and your lifestyle needs. Whether you prefer modern composite boards with hidden fasteners or the timeless look of natural cedar, our team ensures precise installation, solid framing, and professional finishes. We build pool decks, wraparound porches, and elevated multi-level spaces — all engineered to local codes and weatherproofed for Kentucky’s seasons. From 3D design to final inspection, we deliver a seamless build experience and long-lasting performance.`,
          },
          {
            heading: "Composite Decking Experts — Trex, TimberTech & More",
            text: `Composite decking is the ultimate low-maintenance solution for homeowners who want a clean, durable, and fade-resistant surface. Yellowstone Renovation installs premium brands such as Trex, TimberTech, and AZEK for unmatched quality and appearance. Composite decks resist rot, warping, and insect damage, while retaining color and texture for decades. They’re ideal for humid Kentucky summers and cold winters, offering long-term value with no annual sanding or staining. If you want an eco-friendly deck that looks stunning year after year, our composite installations are the smart investment.`,
          },
          {
            heading: "Wood Deck Builder — Natural Beauty with Enduring Strength",
            text: `Wood decks bring warmth and authenticity that never goes out of style. We build with high-grade cedar, redwood, and pressure-treated pine to ensure natural resistance to decay, termites, and moisture. Every wood deck is sealed and finished for lasting color and protection. Whether you’re after a rustic retreat or a modern, minimalist deck, our custom carpentry delivers timeless curb appeal. We also offer ongoing maintenance, refinishing, and restoration services to preserve your deck’s natural beauty for years.`,
          },
          {
            heading: "Deck Replacement and Upgrade Services",
            text: `If your current deck is aging, unsafe, or outdated, Yellowstone Renovation provides complete deck replacement and structural upgrades. We safely remove your old materials, reinforce framing, and rebuild with modern composites or premium lumber. Many homeowners choose to upgrade wood decks to composite for easier maintenance and improved longevity. You can also add integrated lighting, stairs, or built-in seating. Our replacement process ensures your new deck is stronger, safer, and perfectly matched to your home’s design.`,
          },
          {
            heading: "Multi-Level Deck Designs & Outdoor Extensions",
            text: `Looking for a statement outdoor space? We design and build multi-level decks that extend your living area with function and style. These tiered layouts create dedicated zones for dining, lounging, and grilling — perfect for hosting friends or relaxing after work. We also build connected patios, pergolas, and covered porch extensions for a unified backyard experience. Each structure is 3D-designed for balance, accessibility, and durability, with flawless transitions between levels and finishes.`,
          },
          {
            heading: "Outdoor Living Add-Ons & Custom Features",
            text: `We elevate decks into complete outdoor living environments. Our team installs pergolas, privacy screens, benches, planters, and accent lighting to make your space beautiful day and night. Add ceiling fans for comfort, LED stairs for safety, or composite railings for modern appeal. Every upgrade is installed with attention to detail, weatherproof materials, and a design-first approach. With Yellowstone Renovation, your deck becomes the centerpiece of your home’s exterior.`,
          },
          {
            heading: "Why Choose Yellowstone Renovation — Lexington’s Exterior Specialists",
            text: `Homeowners across Central Kentucky choose Yellowstone Renovation because we combine craftsmanship with reliability. We’re licensed, insured, and locally operated — proud to serve Lexington, Nicholasville, Georgetown, Richmond, and Versailles. Our team is known for clear communication, organized project management, and flawless site cleanup. Using only premium-grade materials, we build exteriors that perform as beautifully as they look. With hundreds of successful projects, our name is trusted for decks and siding installations that stand the test of time.`,
          },
          {
            heading: "Get Your Free Deck Estimate in Lexington, KY",
            text: `Ready to start your outdoor transformation? Contact Yellowstone Renovation today to schedule your free design consultation and estimate. Our experts will help you choose the right materials, layout, and features for your property. We’re committed to completing every project on schedule, on budget, and beyond expectations. Call now or submit your request online to get started with Lexington’s top-rated deck builders.`,
          },
        ]}

        offers={[
          {
            image: "/images/deck1.webp",
            text: "Get $1500 OFF Your New Deck Installation — Limited-Time Offer",
            button: "Claim Discount",
            link: "/contact",
          },
          {
            image: "/images/deck2.webp",
            text: "View 20+ Completed Deck Projects Across Lexington",
            button: "View Gallery",
            link: "/projects",
          },
        ]}

        whyUs={[
          "Licensed, insured, and trusted local deck builders",
          "Serving Lexington and all of Central Kentucky",
          "Specializing in composite, wood, and custom outdoor designs",
          "Fast, clean installations — no delays or hidden fees",
          "Over 35 years of combined exterior construction experience",
        ]}

        projects={[
          { image: "/images/deck4.webp", title: "Multi-Level Backyard Deck" },
          { image: "/images/deck5.webp", title: "Covered Patio Deck" },
          { image: "/images/deck6.webp", title: "Composite Steps & Lighting" },
          { image: "/images/deck7.webp", title: "Cedar Deck with Railing" },
        ]}

        findUs={[
          { name: "Yelp", rating: "4.6/5", logo: "/icons/yelp.webp" },
          { name: "Google", rating: "4.9/5", logo: "/icons/google-reviews.webp" },
        ]}

        blog={[
          {
            title: "Composite vs. Wood Decks — Which Lasts Longer in Kentucky?",
            date: "April 12th, 2025",
            author: "Vasyl",
            image: "/images/deck6.webp",
          },
          {
            title: "Top 5 Outdoor Deck Designs for Lexington Homes",
            date: "May 20th, 2025",
            author: "Peter",
            image: "/images/deck7.webp",
          },
          {
            title: "How a Custom Deck Adds Value and Beauty to Your Home",
            date: "June 5th, 2025",
            author: "Vasyl",
            image: "/images/deck8.webp",
          },
        ]}

        partners={["/icons/jameshardie.webp", "/icons/yelp.webp"]}
      />


      {/* ✅ PROMO SLIDER (Exterior Only) */}
      <WindowsPromoSection
        slides={[
          {
            image: "/images/remodler11.webp",
            tag: "Siding Replacement",
            heading: "Transform Your Home Exterior",
            description:
              "Boost curb appeal and weather resistance with expert siding installation. We install James Hardie® and premium vinyl siding across Central Kentucky.",
            button: "Explore Siding Options",
            link: "/siding",
            projectImage: "/images/remodler24.webp",
            projectLocation: "Lexington, KY",
            projectInfo1: "James Hardie",
            projectInfo2: "Expert Install",
            projectName: "Fiber Cement Project",
            projectPrice: "14,995",
          },
          {
            image: "/images/deck6.webp",
            tag: "Deck Construction",
            heading: "Build Your Perfect Outdoor Space",
            description:
              "Custom-built decks designed for Kentucky weather — composite, cedar, or covered patio decks for relaxing and entertaining.",
            button: "View Deck Options",
            link: "/decks",
            projectImage: "/images/deck2.webp",
            projectLocation: "Nicholasville, KY",
            projectInfo1: "Composite",
            projectInfo2: "Modern Railings",
            projectName: "Outdoor Living Deck",
            projectPrice: "18,300",
          },
        ]}
      />
    </Layout>
  )
}
