import React from "react";
import "../styles/DealerBanner.css";

export default function DealerBanner({
  title = "Your Trusted Deck & Siding Experts in Lexington & Central Kentucky",
  highlight = "Deck & Siding Experts",
  description = `From durable James Hardie siding to custom-built composite decks, Yellowstone Renovation is
  Lexington’s leading exterior contractor. Our experienced craftsmen deliver weather-resistant, low-maintenance
  solutions designed for Kentucky homes. Every project is built with care, precision, and lasting value.`,
  highlightColor = "#0aaa3d",
  textColor = "#1f1f1f",
  backgroundColor = "#ffffff",
}) {
  return (
    <section
      className="dealer-banner"
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
      }}
    >
      <div className="dealer-banner-container">
        <h2>
          {title.split(highlight)[0]}
          <span style={{ color: highlightColor }}>{highlight}</span>
          {title.split(highlight)[1]}
        </h2>

        <p>{description}</p>
      </div>
    </section>
  );
}
