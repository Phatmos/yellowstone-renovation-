import React from 'react';
import { Helmet } from 'react-helmet';
import LocalKyLanding from '../components/LocalKyLanding';
import '../styles/local-ky.css';

export default function LocalKyPage() {
  return <><Helmet>
    <title>A Beautiful Deck, Without the Stress | Yellowstone Renovation</title>
    <meta name="description" content="Family-owned deck builders serving Lexington and Central Kentucky. Free on-site 3D design and a clear estimate, with a 36-month workmanship warranty." />
    <meta name="robots" content="noindex,follow" />
    <meta property="og:title" content="A Beautiful Deck, Without the Stress | Yellowstone Renovation" />
    <meta property="og:description" content="Your free on-site 3D design and a clear estimate. Family-owned deck builders serving Lexington and Central Kentucky." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://yellowstonerenovation.com/local-ky/" />
    <meta property="og:image" content="https://yellowstonerenovation.com/local-ky/img/hero.webp" />
    <meta name="twitter:card" content="summary_large_image" />
    <link rel="canonical" href="https://yellowstonerenovation.com/local-ky/" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" />
  </Helmet><LocalKyLanding /></>;
}
