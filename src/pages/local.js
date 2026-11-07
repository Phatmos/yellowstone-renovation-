import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import LocalDeckMarkup from "../components/LocalDeckMarkup";
import initLocalDeck from "../components/localDeckRuntime";
import "../styles/local-deck.css";
export default function LocalDeck() {
  const root = useRef(null);
  useEffect(() => initLocalDeck(root.current), []);
  return <><Helmet><title>Custom Decks in Lexington, KY | Yellowstone Renovation</title><meta name="description" content="Custom composite and wood decks in Central Kentucky. Free on-site estimate and 3D design, with a 36-month workmanship warranty." /><link rel="canonical" href="https://yellowstonerenovation.com/local/" /><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap" /></Helmet><div className="local-deck-page" ref={root}><LocalDeckMarkup /></div></>;
}
