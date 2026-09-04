// src/components/BrandTagYellowstone.js
import React from "react";
import "./BrandTagYellowstone.css";

export default function BrandTagYellowstone({ text }) {
  return (
    <div className="ys-tag">
      <img
        src="/icons/ys-badge.webp"
        alt="Yellowstone Renovation - Remodeling & Deck Contractors in Lexington KY"
        className="ys-tag-icon"
        width="26"
        height="26"
        loading="lazy"
      />
      <span>{text}</span>
    </div>
  );
}
