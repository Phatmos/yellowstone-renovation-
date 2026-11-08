import React from 'react';
import services from '../data/deckServiceContent.json';
import '../styles/deck-services.css';

export default function DeckServiceLinks({ current, slugs, heading = 'Find the right fit for your backyard.', standalone = false }) {
  const keys = (slugs || Object.keys(services)).filter(key => key !== current);
  const content = <section className="bg-mint service-options" aria-labelledby="deck-options-title"><div className="wrap">
    <div className="head"><span className="kick g">Decks &amp; outdoor living</span><h2 className="h2" id="deck-options-title">{heading}</h2></div>
    <div className="service-options-grid">{keys.map(key => { const item = services[key]; return item && <a className="service-option" key={key} href={`/${key}/`}>
      <img src={`/deck-services/${key}-card.webp`} alt={item.heroAlt} width="800" height="600" loading="lazy" decoding="async" />
      <div><h3>{item.navLabel || item.eyebrow}</h3><p>{item.linkText || item.heroText}</p><span className="service-option-link">Explore {item.navLabel?.toLowerCase() || 'this service'} <span aria-hidden="true">→</span></span></div>
    </a>; })}</div>
  </div></section>;
  return standalone ? <div className="local-deck-page deck-services-embedded">{content}</div> : content;
}
