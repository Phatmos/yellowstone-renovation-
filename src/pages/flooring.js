import React from "react";
import Layout from "../components/Layout";
import OurPortfolio from "../components/OurPortfolio";
import MainSectionSideBar from "../components/MainSectionSideBar";
import SEO from "../components/SEO";

export default function Home() {
  return (
    <Layout>
      <MainSectionSideBar
        title="Deck Builder in Lexington, KY"
        sections={[
          {
            heading: "Custom Deck Installation & Replacement in Lexington",
            text: `We help homeowners throughout Lexington create outdoor spaces that feel like a true extension of their home. Whether you want a cozy backyard deck for morning coffee or a spacious entertaining area for family gatherings, our team designs and builds decks that perfectly balance comfort, style, and durability. Every project is approached with careful planning, honest communication, and the highest quality materials available.`,
          },
          {
            heading: "Built for Beauty, Comfort, and Strength",
            text: `Our decks are more than just outdoor structures — they’re investments in your lifestyle. We combine beautiful design with solid craftsmanship to ensure your deck looks great and lasts for years. You can choose from rich natural wood for a timeless look or modern composite materials that offer low maintenance and long-term durability. Whatever your preference, we’ll make sure the final result fits your home and your vision.`,
          },
          {
            heading: "A Stress-Free Deck Building Experience",
            text: `We believe remodeling should be exciting, not stressful. From the first consultation to the final screw, we handle everything — design, permits, materials, and installation. Our team keeps you informed and involved throughout the process, so you always know what’s happening and when your project will be complete. Most importantly, we respect your home and your time, working cleanly and efficiently every step of the way.`,
          },
          {
            heading: "Your Backyard, Reimagined",
            text: `Your outdoor space has the potential to become one of your favorite places in the home. Whether it’s a quiet spot to unwind after a long day or a lively place for weekend barbecues, a well-designed deck can completely transform how you enjoy your home. At Yellowstone Renovation, we take pride in building decks that not only look amazing but also bring people together. Let’s design something that makes you look forward to spending time outside again.`,
          },
        ]}
        offers={[
          {
            image: "/images/deck1.webp",
            text: "Save $1500 on Your New Deck Installation — Limited Time Offer!",
            button: "Claim Discount",
            link: "/contact",
          },
          {
            image: "/images/deck2.webp",
            text: "Explore Over 20 Completed Deck Projects in Lexington",
            button: "View Gallery",
            link: "/projects",
          },
        ]}
        whyUs={[
          "Experienced team specializing in deck design and construction",
          "Fast and reliable project completion with no delays",
          "Premium wood and composite options built to last",
          "Locally owned, licensed, and fully insured company",
          "Personalized approach — every deck is custom built for your home",
        ]}
        projects={[
          { image: "/images/deck4.webp", title: "Backyard Deck" },
          { image: "/images/deck5.webp", title: "Luxury Patio" },
          { image: "/images/deck6.webp", title: "Composite Steps" },
          { image: "/images/deck7.webp", title: "Wood Rail Deck" },
        ]}
        findUs={[
          { name: "Yelp", rating: "4.6/5", logo: "/icons/yelp.webp" },
          { name: "Google", rating: "4.9/5", logo: "/icons/google-reviews.webp" },
        ]}
        blog={[
          {
            title: "How to Choose Between Composite and Wood Decking",
            date: "April 12th, 2025",
            author: "Vasyl",
            image: "/images/deck6.webp",
          },
          {
            title: "Design Tips to Make Your Backyard Deck Stand Out",
            date: "May 20th, 2025",
            author: "Peter",
            image: "/images/deck7.webp",
          },
          {
            title: "The Benefits of Adding a Custom Deck to Your Home",
            date: "June 5th, 2025",
            author: "Vasyl",
            image: "/images/deck8.webp",
          },
        ]}
        partners={["/icons/jameshardie.webp", "/icons/yelp.webp"]}
      />
      <OurPortfolio />

    </Layout>
  );
}