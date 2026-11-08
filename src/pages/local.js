import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import LocalDeckMarkup from "../components/LocalDeckMarkup";
import SEO from "../components/SEO";
import initLocalDeck from "../components/localDeckRuntime";
import "../styles/local-deck.css";
export default function LocalDeck() {
  const root = useRef(null);
  useEffect(() => initLocalDeck(root.current), []);
  return <><SEO title="Plan Your Deck | Free Design Visit | Yellowstone Renovation" description="Plan your next deck with a free on-site 3D design visit. See real Yellowstone projects and meet the family-owned team serving Lexington and Central Kentucky." pathname="/local/" noIndex image="/deck-services/decking-social.jpg" imageAlt="Completed Yellowstone deck and stairs beside a brick home" /><Helmet><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap" /></Helmet><div className="local-deck-page" ref={root}><LocalDeckMarkup /></div></>;
}
