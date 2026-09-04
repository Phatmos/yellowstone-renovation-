import * as React from "react"
import Layout from "../../../components/Layout"

import "../../../styles/global.css"
import SEO from "../../../components/SEO";
import { Helmet } from "react-helmet";
import HeroSection from "../../../components/HeroSection";
import SidingPageSection from "../../../components/SidingPageSection";
import AboutSection from "../../../components/AboutSection";
import TestimonialsSection from "../../../components/TestimonialsSection";
import QuoteSection from "../../../components/QuoteSection";
import GallerySection from "../../../components/GallerySection"
import Services from "../../../components/Services.js"

export default function GeorgetownKY() {
  return (
    <Layout>
      <Helmet>
        {/* ▶ Local Georgetown Keywords */}
        <meta
          name="keywords"
          content="Deck and Siding Contractor Georgetown KY, Deck Builder Georgetown KY, Siding Installation Georgetown, James Hardie Georgetown KY, Vinyl Siding Scott County, Exterior Builder Georgetown"
        />

        {/* ▶ Social Sharing */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Deck and Siding Contractor in Georgetown, KY | Exterior Builder You Can Trust"
        />
        <meta
          property="og:description"
          content="Trusted deck and siding contractor in Georgetown, KY — Yellowstone Renovation installs composite decks, wood decks, and premium siding. Free estimates in Scott County."
        />
        <meta
          property="og:url"
          content="https://yellowstonerenovation.com/cities/georgetown-ky/"
        />
        <meta property="og:site_name" content="Yellowstone Renovation" />
        <meta
          property="og:image"
          content="https://yellowstonerenovation.com/images/remodler1.webp"
        />

        {/* ▶ Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Deck and Siding Contractor in Georgetown, KY | Yellowstone Renovation"
        />
        <meta
          name="twitter:description"
          content="Upgrade your Georgetown home with durable siding and custom-built decks. Trusted exterior builder serving Scott County."
        />
        <meta
          name="twitter:image"
          content="https://yellowstonerenovation.com/images/remodler1.webp"
        />
      </Helmet>

      <SEO
        title="Deck and Siding Contractor in Georgetown, KY | Exterior Builder You Can Trust"
        description="Yellowstone Renovation installs composite decks, wood decks, vinyl siding, and James Hardie siding in Georgetown, KY. Trusted exterior contractor serving Scott County. Free onsite estimates."
        pathname="/cities/georgetown-ky/"
        image="https://yellowstonerenovation.com/images/remodler1.webp"
      />

      <Helmet>
        {/* ▶ Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HomeAndConstructionBusiness",
            "name": "Yellowstone Renovation",
            "url": "https://yellowstonerenovation.com",
            "image": "https://yellowstonerenovation.com/images/remodler1.webp",
            "logo": "https://yellowstonerenovation.com/icons/logo.webp",
            "telephone": "859-545-7020",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Georgetown",
              "addressRegion": "KY",
              "postalCode": "40324",
              "addressCountry": "US"
            },
            "areaServed": [
              "Georgetown, KY",
              "Stamping Ground, KY",
              "Sadieville, KY",
              "Scott County, KY"
            ],
            "sameAs": [
              "https://www.facebook.com/p/Yellowstone-Renovation-61551123481170/",
              "https://www.instagram.com/yellowstone_renovation/",
              "https://maps.google.com/?q=Yellowstone+Renovation+Georgetown+KY"
            ],
            "serviceType": [
              "Vinyl Siding Installation",
              "James Hardie Fiber Cement",
              "Composite Decks",
              "Wood Decks",
              "Replacement Windows",
              "Exterior Repairs"
            ]
          })}
        </script>

        {/* ▶ Georgetown FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How much does siding cost in Georgetown?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "In Georgetown, vinyl siding typically ranges from $7–$13 per sq.ft. installed. James Hardie fiber cement siding ranges $14–$22 per sq.ft., depending on home size and trim work."
                }
              },
              {
                "@type": "Question",
                "name": "Do you serve Stamping Ground and Sadieville?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes — we work across Georgetown, Stamping Ground, Sadieville, and all Scott County neighborhoods."
                }
              },
              {
                "@type": "Question",
                "name": "Do you offer free quotes in Scott County?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes — Yellowstone Renovation offers free onsite estimates for siding, deck building, windows, and full exterior remodels throughout Scott County."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      {/* ▶ HERO SECTION */}
      <HeroSection
        backgroundImage="/images/deck-builder3.webp"
        customerImage="/images/customer-hero1.png"
        title="Deck and Siding Contractor in Georgetown, KY"
        subtitle="Improve your Georgetown home with reliable siding installation and custom deck construction — built for beauty, comfort, and Kentucky weather."
        projectCount="35+ deck and siding projects completed this year across Scott County"
        city="Georgetown"
        emailTo="yellowstonerenovation@gmail.com"
      />

      <AboutSection />

      {/* ▶ GALLERY */}
      <GallerySection
        title="DECK BUILDER GALLERY"
        subtitle="See our recent deck projects installed across Georgetown and surrounding areas — built strong and designed to last."
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

      {/* ▶ SERVICES */}
      <Services
        title="Exterior Remodeling Services in Georgetown, KY"
        subtitle="From premium siding to beautiful custom decks, our team delivers complete exterior remodeling services built for long-term performance in Georgetown."
        accentColor="#0a923d"
        bgImage="/images/deck-bg.jpg"
        services={[
          {
            title: "Custom Deck Design & Construction",
            description:
              "We build beautiful and durable decks designed for Georgetown homes — from simple layouts to full outdoor living spaces.",
            image: "/images/deck11.webp",
            link: "/cities/georgetown-ky/deck-builder/",
          },
          {
            title: "Composite & Wood Deck Installation",
            description:
              "Choose between low-maintenance composite or timeless wood decking. Built to handle Kentucky’s weather conditions.",
            image: "/images/deck7.webp",
            link: "/cities/georgetown-ky/composite-deck-installation/",
          },
          {
            title: "James Hardie® & Vinyl Siding Installation",
            description:
              "We install top-quality siding that increases curb appeal and protects your home — including Hardie fiber cement and vinyl siding.",
            image: "/images/remodler1.webp",
            link: "/cities/georgetown-ky/vinyl-siding-installation/",
          },
          {
            title: "Windows & Exterior Trim Upgrades",
            description:
              "Energy-efficient window installation and professional exterior trim upgrades for a cleaner, more polished exterior.",
            image: "/images/remodler6.webp",
            link: "/windows",
          },
        ]}
      />

      {/* ▶ SIDING & DECK PAGE SECTION */}
      <SidingPageSection
        city="Georgetown"
        layoutOrder={[
          "hero",
          "deck",
          "styles",
          "types",
          "cost",
          "extra",
          "cta",
        ]}

        heroTitle="Georgetown’s Trusted Deck and Siding Experts"
        heroText1="We provide Georgetown homeowners with professional siding installation and custom deck construction backed by high-quality materials and clean workmanship."
        heroText2="Choose from James Hardie, LP SmartSide, vinyl, cedar, and metal siding — plus Trex and TimberTech composite decks designed for lasting comfort."
        heroImage="/images/deck-builder12.webp"
        heroBottomText="Proudly serving Georgetown, Stamping Ground, Sadieville, and all Scott County areas."

        deckHeroTitle="Custom Decks Built for Georgetown, KY"
        deckHeroText1="A well-designed deck enhances outdoor living and adds lasting value. We build decks that stand strong through Kentucky’s humidity and storms."
        deckHeroText2="Choose Trex, TimberTech, cedar, or pressure-treated wood — all installed to professional standards."
        deckHeroImage="/images/deck-builder8.webp"
        deckServicesTitle="Deck Services We Offer in Georgetown:"
        deckServices={[
          "Custom deck design & 3D planning",
          "Trex and TimberTech composite deck installation",
          "Cedar and pressure-treated wood decks",
          "Covered decks, pergolas, and screened porches",
          "Deck resurfacing, repairs, and upgrades",
          "Railing, stairs, and lighting installations",
          "Permits and inspections handled for you"
        ]}
        deckCostTitle="Deck Cost in Georgetown, KY"
        deckCostText="Composite decks in Georgetown typically range from $45–$65 per sq. ft. installed. Wood decks range from $30–$50 per sq. ft. Pricing includes materials, labor, cleanup, and inspections."
        deckImages={[
          "/images/deck-builder.webp",
          "/images/deck-builder6.webp",
          "/images/deck-builder7.webp",
        ]}

        stylesTitle="Siding Styles Popular in Georgetown"
        stylesIntro="We offer a full selection of siding styles to match Georgetown homes — from modern to traditional."
        styles={[
          {
            name: "Lap Siding",
            text: "A durable, classic option that works well on Georgetown homes. Available in vinyl, fiber cement, and engineered wood.",
            image: "/images/Lap-Siding.jpg",
          },
          {
            name: "Board and Batten",
            text: "Perfect for modern farmhouses and updated exteriors — creating strong vertical lines and visual character.",
            image: "/images/Board-Batten.jpg",
          },
          {
            name: "Shakes and Shingles",
            text: "Great for accents and gables, offering a natural textured appearance in cedar or fiber cement.",
            image: "/images/Shakes-Shingles.jpg",
          },
        ]}

        sidingTypesTitle="Siding Materials We Install in Georgetown"
        sidingTypesIntro="Durable, low-maintenance siding options installed with precision and backed by strong warranties."
        sidingTypes={[
          { name: "James Hardie Fiber Cement", image: "/images/hardie.jpg" },
          { name: "LP SmartSide Engineered Wood", image: "/images/SmartSide.jpg" },
          { name: "Vinyl Siding", image: "/images/Vinyl-Siding.jpg" },
          { name: "Cedar Siding", image: "/images/Cedar-Siding.jpg" },
        ]}

        costTitle="Siding Installation Cost in Georgetown, KY"
        costIntro="Below are average siding installation costs for Georgetown homes:"
        costTable={[
          { material: "Vinyl Siding", price: "$6.50 – $9.00 per sq. ft." },
          { material: "Fiber Cement (James Hardie)", price: "$10.00 – $15.00 per sq. ft." },
          { material: "Engineered Wood (LP SmartSide)", price: "$9.00 – $12.00 per sq. ft." },
          { material: "Cedar Wood Siding", price: "$12.00 – $18.00 per sq. ft." },
          { material: "Metal Siding", price: "$8.00 – $13.00 per sq. ft." },
        ]}

        extraSectionTitle="Why Georgetown Homeowners Choose Yellowstone Renovation"
        extraSectionText="Georgetown residents trust our team for dependable communication, clean job sites, and craftsmanship built to last."
        extraPoints={[
          "⭐ Licensed, insured, and Kentucky-based installers",
          "⭐ 5-year workmanship warranty included",
          "⭐ 400+ exterior projects completed in Central Kentucky",
          "⭐ No subcontractors — all work done by our team",
          "⭐ Free, detailed estimates with no pressure"
        ]}

        ctaTitle="Request a Free Deck or Siding Estimate in Georgetown"
        ctaText="Ready to upgrade your home exterior? Get a free estimate for siding or deck construction in Georgetown and Scott County."
        ctaImage="/images/deck-builder13.webp"
      />

      <TestimonialsSection />
      <QuoteSection />
    </Layout>
  );
}
