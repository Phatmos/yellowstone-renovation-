import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { KyCall, KyClickVideo } from '../../components/LocalKyLanding';
import { KY_EMAIL, KY_RECEIPT_KEY, reportKyLead } from '../../components/localKyLead';
import '../../styles/local-ky.css';

export default function LocalKyThankYou({ location }) {
  const [receipt, setReceipt] = useState(null);
  useEffect(() => {
    let saved = location?.state?.receipt;
    if (!saved) {
      try { saved = JSON.parse(window.sessionStorage.getItem(KY_RECEIPT_KEY)); } catch { /* A direct visit never records a lead. */ }
    }
    if (saved?.id && typeof saved.name === 'string' && saved.expires > Date.now()) {
      setReceipt(saved);
      reportKyLead(saved);
    }
  }, [location?.state?.receipt]);
  return <><Helmet><title>{receipt ? 'Request Received' : 'Your Free Deck Visit'} | Yellowstone Renovation</title><meta name="robots" content="noindex,nofollow" /><link rel="canonical" href="https://yellowstonerenovation.com/local-ky/thank-you/" /><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" /></Helmet>
    <div className="ky-page ky-thanks-page"><header className="ky-header"><div className="ky-wrap"><a href="/local-ky/" aria-label="Yellowstone Renovation"><img src="/local-deck/img/logo.webp" alt="Yellowstone Renovation" width={640} height={131} /></a><KyCall placement="thank-you-header" /></div></header>
      <main className="ky-wrap ky-thanks"><div><span className="ky-eyebrow">{receipt ? 'Your request has been received' : 'Your backyard starts here'}</span><h1>{receipt ? <>Thanks, {receipt.name}!<br /><span>You’re in good hands.</span></> : <>Let’s plan<br /><span>your new deck.</span></>}</h1>
        <p>{receipt ? <>Peter and the Yellowstone team will call from <KyCall placement="thank-you" /> within one business day to arrange your free on-site visit.</> : 'Send your project details to arrange a free on-site design visit in Lexington or Central Kentucky.'}</p>
        {receipt && <div className="ky-thanks-next"><h2>Here’s what happens next.</h2><ol><li>We call to talk about your ideas and find a time.</li><li>We visit, measure and explore your options.</li><li>You see your deck in 3D, with a clear estimate.</li></ol></div>}
        <a href="/local-ky/" className="ky-button">{receipt ? 'Back to your backyard inspiration' : 'Get My Free Estimate'}<span aria-hidden="true">→</span></a><p className="ky-reassurance">Questions before your visit? <a href={`mailto:${KY_EMAIL}`}>{KY_EMAIL}</a></p>
      </div><div className="ky-thanks-media"><figure><img src="/local-ky/img/owners.webp" alt="Andrii and Peter from Yellowstone Renovation" width={1000} height={958} /><figcaption>Your local Yellowstone team.</figcaption></figure><KyClickVideo youtube portrait title="What to expect before you build" poster="/local-deck/img/hero-intro-sharp.webp" /></div></main>
      <footer className="ky-thanks-footer"><p>Yellowstone Renovation · Lexington &amp; Central Kentucky</p><a href="/privacy-policy/">Privacy policy</a></footer>
    </div>
  </>;
}
