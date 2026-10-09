import React, { useState } from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import "../styles/AffiliateProgram.css";

const services = ["Deck building", "Fence installation", "Siding replacement", "Windows & doors"];
const cities = ["Lexington", "Nicholasville", "Georgetown", "Richmond", "Versailles", "Frankfort", "Winchester", "Lancaster", "Berea", "Danville", "Lawrenceburg"];

export default function AffiliateProgram() {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  async function submitApplication(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const fields = Object.fromEntries(new FormData(form).entries());
    if (fields["bot-field"]) return;
    setStatus("submitting");
    setError("");
    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...fields,
          service: "Affiliate Partner Application",
          Source: "Affiliate Program — Partner Application",
          pageUrl: window.location.href,
          message: "PARTNER APPLICATION — not a homeowner estimate request. Please review for affiliate onboarding. No leads or commissions have been approved by this application.",
        }),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || result.success !== true) throw new Error("delivery-failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("idle");
      setError("Your application could not be submitted. Please try again, call (859) 765-7267, or email renovationyellowstone@gmail.com.");
    }
  }

  return (
    <Layout>
      <SEO title="Affiliate & Referral Program | Yellowstone Renovation" description="Partner with Yellowstone Renovation in Central Kentucky. Earn $75 per accepted qualified lead and up to $150 total when we confirm an estimate appointment." pathname="/affiliate-program/" image="/images/deck-builder28.webp" />
      <div className="yr-affiliate">
        <section className="yr-aff-hero" aria-labelledby="affiliate-title">
          <div className="yr-aff-hero-copy">
            <p className="yr-aff-eyebrow">YELLOWSTONE PARTNER PROGRAM · CENTRAL KENTUCKY</p>
            <h1 id="affiliate-title">Bring us the right homeowner.<br /><span>Earn up to $150.</span></h1>
            <p>Connect homeowners with Yellowstone Renovation for decks, fences, siding, windows and doors. We handle qualification, scheduling and the project. You earn for verified results.</p>
            <div className="yr-aff-actions"><a className="yr-aff-button" href="#apply">Apply to become a partner <span aria-hidden="true">↗</span></a><a className="yr-aff-text-link" href="#program-terms">Read the program terms</a></div>
            <p className="yr-aff-small">For affiliates, local publishers, creators and referral partners. No signup fee.</p>
          </div>
          <div className="yr-aff-hero-photo"><img src="/images/deck-builder28.webp" alt="Deck project featured by Yellowstone Renovation" width="800" height="600" /><div className="yr-aff-photo-note">Local projects. Personal service.<br /><strong>Lexington & Central Kentucky</strong></div></div>
        </section>

        <section className="yr-aff-payouts" aria-labelledby="payout-title">
          <div className="yr-aff-section-heading"><p className="yr-aff-eyebrow">THE OFFER</p><h2 id="payout-title">Two milestones. One clear payout.</h2><p>$150 is the total maximum per referred customer, including the first $75.</p></div>
          <div className="yr-aff-payout-grid">
            <article className="yr-aff-card"><span className="yr-aff-tag">01 · ACCEPTED LEAD</span><p className="yr-aff-amount">$75</p><h3>Qualified homeowner lead</h3><p>Earn $75 after our team contacts the homeowner and accepts the lead against the criteria below.</p></article>
            <article className="yr-aff-card yr-aff-card-green"><span className="yr-aff-tag">02 · CONFIRMED APPOINTMENT</span><p className="yr-aff-amount">+$75</p><h3>$150 total with an appointment</h3><p>Earn another $75 when Yellowstone and the homeowner confirm a date and time for an estimate appointment.</p></article>
          </div>
          <p className="yr-aff-note">A form submission alone does not earn a commission. A project sale is not required for these two milestones.</p>
        </section>

        <section className="yr-aff-section" aria-labelledby="how-title"><div className="yr-aff-section-heading"><p className="yr-aff-eyebrow">HOW IT WORKS</p><h2 id="how-title">You make the connection. We take it from there.</h2></div><ol className="yr-aff-steps"><li><strong>Apply & get approved</strong><p>Tell us how you find homeowners. We agree on service areas, traffic sources, referral identification and payment terms before you start.</p></li><li><strong>Send a genuine referral</strong><p>Use the submission method and partner identifier provided during onboarding. The homeowner must have requested contact from Yellowstone.</p></li><li><strong>We verify & schedule</strong><p>Our team checks the request, contacts the homeowner and confirms the appointment. We review attribution and commission milestones with you.</p></li></ol></section>

        <section className="yr-aff-section yr-aff-fit" aria-labelledby="qualified-title">
          <div><p className="yr-aff-eyebrow">QUALITY OVER VOLUME</p><h2 id="qualified-title">What counts as a qualified lead?</h2><ul className="yr-aff-checklist"><li>A new homeowner or authorized property decision-maker with a real project.</li><li>An eligible property address within our agreed Central Kentucky service area.</li><li>A request for one of the services approved for your campaign.</li><li>A valid phone number and a homeowner our team can reach to verify the request.</li><li>Permission to share their details and have Yellowstone contact them about that project.</li><li>An exclusive referral, with no existing open inquiry for the same customer or project in our records.</li></ul></div>
          <aside className="yr-aff-card"><h3>Projects we want</h3><div className="yr-aff-chips">{services.map(service => <span key={service}>{service}</span>)}</div><h3>Where we work</h3><p>{cities.join(" · ")}</p><p className="yr-aff-small">Coverage depends on the property address. Confirm your target cities and ZIP codes with us before launching traffic.</p><a className="yr-aff-text-link" href="/projects-showcase/">Explore our project work ↗</a></aside>
        </section>

        <section className="yr-aff-section yr-aff-apply" id="apply" aria-labelledby="apply-title">
          <div><p className="yr-aff-eyebrow">LET’S WORK TOGETHER</p><h2 id="apply-title">Become a Yellowstone partner.</h2><p>Have a local audience or experience generating home improvement leads? Tell us about your approach.</p><p>This form is for <strong>partner applications</strong>. Please do not submit homeowner information here.</p><div className="yr-aff-contact"><a href="tel:8597657267">(859) 765-7267</a><a href="mailto:renovationyellowstone@gmail.com">renovationyellowstone@gmail.com</a></div><p className="yr-aff-small">Need work done at your own home? <a href="/contact/">Request an estimate here.</a></p></div>
          <div className="yr-aff-form-panel">
            {status === "success" ? <div className="yr-aff-success" role="status"><h3>Application received.</h3><p>Thank you for your interest in Yellowstone Renovation. Our team will review your application and contact you about next steps.</p><p>Approval, referral tracking and payment terms must be confirmed before you send traffic or homeowner referrals.</p><button className="yr-aff-button" onClick={() => setStatus("idle")}>Submit another application</button></div> : <form onSubmit={submitApplication}>
              <label>Full name<input name="name" autoComplete="name" maxLength={160} required /></label>
              <div className="yr-aff-form-row"><label>Email<input name="email" type="email" autoComplete="email" maxLength={255} required /></label><label>Phone<input name="phone" type="tel" autoComplete="tel" maxLength={30} required /></label></div>
              <label>Business, website or social profile <span>(optional)</span><input name="Partner website or business" maxLength={500} placeholder="Website URL, profile or business name" /></label>
              <label>How will you generate referrals?<select name="Promotion method" required defaultValue=""><option value="" disabled>Select your main channel</option><option>Local referrals / professional network</option><option>Website / SEO / local publisher</option><option>Social media / creator content</option><option>Paid search advertising</option><option>Paid social advertising</option><option>Other — explain below</option></select></label>
              <label>Target cities & your plan<textarea name="Partner plan" maxLength={3000} rows={4} placeholder="Where is your audience, which services will you promote, and how will homeowners request contact?" required /></label>
              <div className="yr-aff-honeypot" aria-hidden="true"><label>Leave this empty<input name="bot-field" tabIndex={-1} autoComplete="off" /></label></div>
              <label className="yr-aff-consent"><input name="Program terms accepted" type="checkbox" value="Yes — application subject to approval" required /><span>I have read the <a href="#program-terms">program terms</a> and understand that my application requires approval before referrals are eligible for payment.</span></label>
              <p className="yr-aff-small">We use these details to review your application and contact you about the program. See our <a href="/privacy-policy/">Privacy Policy</a>.</p>
              {error && <p className="yr-aff-error" role="alert">{error}</p>}
              <button type="submit" className="yr-aff-button" disabled={status === "submitting"}>{status === "submitting" ? "Submitting…" : "Send partner application ↗"}</button>
            </form>}
          </div>
        </section>

        <section className="yr-aff-section yr-aff-terms" id="program-terms" aria-labelledby="terms-title"><p className="yr-aff-eyebrow">NO GUESSWORK</p><h2 id="terms-title">Program terms & common questions</h2>
          <details open><summary>Is the payout $150 or $225?</summary><p>The maximum is $150 total per referred customer: $75 for an accepted qualified lead, plus $75 when an estimate appointment is confirmed. It is not $75 plus $150. No sale is required.</p></details>
          <details><summary>What makes an appointment eligible?</summary><p>Yellowstone and the homeowner must both confirm the estimate appointment’s date and time. An unconfirmed calendar entry, duplicate booking or reschedule does not earn another commission. Booking must be genuine; fabricated appointments are ineligible. We schedule estimate visits on business days.</p></details>
          <details><summary>Which leads are not eligible?</summary><p>Duplicates, existing open customer inquiries, unreachable contacts, false information, out-of-area projects, services outside your approved campaign, and people who did not request contact are not eligible. Lists of names or numbers and leads sold to multiple contractors are not accepted. Our team verifies each lead before accepting it.</p></details>
          <details><summary>How do tracking, approval and payments work?</summary><p>Apply first. Before launch, we confirm your partner identifier, referral submission method, attribution rules, payment method and payment schedule in writing. Commissions are reviewed against our customer and appointment records. We provide the reason for declined referrals, and you can contact us to request a review. This page does not provide an automated affiliate dashboard or instant payouts.</p></details>
          <details><summary>What promotional methods are allowed?</summary><p>We review traffic sources during onboarding. Use accurate claims, identify Yellowstone clearly and disclose your referral relationship where applicable. Paid ads, brand-name bidding and use of our logo or creative require our written approval. Do not use unsolicited bulk messages, fake incentives, misleading “free project” offers or impersonation. Do not collect or share homeowner details without permission.</p></details>
          <details><summary>Do partners pay to join? Can the terms change?</summary><p>There is no signup fee. You cover your own marketing costs unless separately agreed in writing. Applying does not guarantee approval, lead acceptance or earnings. Campaign limits and any updated terms are confirmed before new traffic starts; approved earned commissions remain subject to the terms agreed for those referrals.</p></details>
        </section>
      </div>
    </Layout>
  );
}
