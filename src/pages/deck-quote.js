import * as React from "react";
import DeckQuoteForm from "../components/DeckQuoteForm";
import SEO from "../components/SEO";

export default function DeckQuotePage() {
    return <><SEO title="Deck Quote Tool | Yellowstone Renovation" description="Request a deck estimate from Yellowstone Renovation." pathname="/deck-quote/" noIndex /><DeckQuoteForm /></>;
}
