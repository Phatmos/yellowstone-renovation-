import React, { useEffect, useRef, useState } from 'react';
import { formatPhone } from './localDeckContact';
import { areaMessage, KY_DRAFT_KEY, KY_RECEIPT_KEY, kyTrack, readKyDraft } from './localKyLead';

const empty = { project_type: '', timeline: '', zip: '', first_name: '', phone: '', email: '', company: '' };
const projects = ['New deck', 'Replace old deck', 'Covered deck', 'Repair'];
const timelines = ['This season', 'In 1–3 months', 'Just exploring'];

export default function LocalKyEstimate({ variant = 'family', onSuccess }) {
  const [values, setValues] = useState(empty);
  const [step, setStep] = useState(1);
  const [error, setError] = useState('');
  const [sending, setSending] = useState(false);
  const [ready, setReady] = useState(false);
  const form = useRef(null);
  const phone = useRef(null);
  const firstName = useRef(null);
  const inFlight = useRef(false);
  useEffect(() => {
    const saved = readKyDraft();
    setValues({ ...empty, ...Object.fromEntries(Object.keys(empty).filter(key => typeof saved[key] === 'string').map(key => [key, saved[key]])), company: '' });
    setReady(true);
  }, []);
  useEffect(() => {
    if (!ready) return;
    try { window.sessionStorage.setItem(KY_DRAFT_KEY, JSON.stringify({ values: { ...values, company: '' }, expires: Date.now() + 2 * 60 * 60 * 1000 })); } catch { /* Autofill and the form still work without storage. */ }
  }, [values, ready]);
  const change = event => {
    const { name, value } = event.target;
    setValues(current => ({ ...current, [name]: name === 'phone' ? formatPhone(value) : name === 'zip' ? value.replace(/\D/g, '').slice(0, 5) : value }));
  };
  const submit = async event => {
    event.preventDefault();
    if (inFlight.current) return;
    setError('');
    if (step === 1) {
      const zip = form.current.elements.zip.value.replace(/\D/g, '').slice(0, 5);
      if (!values.project_type) { setError('Choose what you’re planning.'); form.current.querySelector('[name="project_type"]').focus(); return; }
      if (!values.timeline) { setError('Choose when you’d like to start.'); form.current.querySelector('[name="timeline"]').focus(); return; }
      if (!/^\d{5}$/.test(zip)) { setError('Enter your 5-digit ZIP code.'); form.current.elements.zip.focus(); return; }
      setValues(current => ({ ...current, zip }));
      setStep(2);
      kyTrack('estimate_step', { step: 2, hero_variant: variant });
      return;
    }
    // Read contact fields directly too, so browser autofill is included.
    const contact = {
      first_name: firstName.current.value.trim(),
      phone: phone.current.value.trim(),
      email: form.current.elements.email.value.trim(),
    };
    if (!contact.first_name) { setError('Enter your first name.'); firstName.current.focus(); return; }
    if (!/^(?:1)?\d{10}$/.test(contact.phone.replace(/\D/g, ''))) { setError('Enter a 10-digit phone number.'); phone.current.focus(); return; }
    if (contact.email && !form.current.elements.email.validity.valid) { setError('Enter a valid email address, or leave it blank.'); form.current.elements.email.focus(); return; }
    inFlight.current = true;
    setSending(true);
    try {
      const id = window.crypto?.randomUUID?.() || `ky-${Date.now()}-${Math.random().toString(36).slice(2)}`;
      const params = new URLSearchParams(window.location.search);
      const response = await fetch('/api/lead', {
        method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...values, ...contact, source: 'local-ky', landing_variant: 'local-ky', hero_variant: variant, submission_stage: 'complete', event_id: id, page: window.location.href, ...Object.fromEntries(['utm_source','utm_medium','utm_campaign','utm_content','utm_term','gclid'].map(key => [key, params.get(key) || ''])) }),
      });
      const result = await response.json();
      if (!response.ok || result.success !== true) throw new Error('Request failed');
      const receipt = { id, name: contact.first_name, variant, expires: Date.now() + 24 * 60 * 60 * 1000 };
      try {
        window.sessionStorage.setItem(KY_RECEIPT_KEY, JSON.stringify(receipt));
        window.sessionStorage.removeItem(KY_DRAFT_KEY);
      } catch { /* Route state carries the confirmation if storage is blocked. */ }
      onSuccess(receipt);
    } catch {
      setError('Your request wasn’t sent. Please try again, or call (859) 765-7267.');
    } finally {
      inFlight.current = false;
      setSending(false);
    }
  };
  useEffect(() => { if (step === 2) firstName.current?.focus({ preventScroll: true }); }, [step]);
  return <form id="ky-estimate-form" className="ky-form" ref={form} onSubmit={submit} noValidate aria-labelledby="ky-form-title">
    <div className="ky-form-progress"><span>Step {step} of 2</span><span>{step === 1 ? 'Your project' : 'Your contact details'}</span><i style={{ '--progress': `${step * 50}%` }} /></div>
    <h3 id="ky-form-title" tabIndex={-1}>{step === 1 ? 'What do you have in mind?' : 'Where can we reach you?'}</h3>
    <p>{step === 1 ? 'A few quick details. No budget needed.' : 'We’ll call within one business day to arrange your free visit.'}</p>
    <fieldset hidden={step !== 1} disabled={step !== 1 || sending} className="ky-form-step">
      <fieldset className="ky-options"><legend>What are you planning?</legend><div>{projects.map(project => <label key={project}><input type="radio" name="project_type" value={project} checked={values.project_type === project} onChange={change} /><span>{project}</span></label>)}</div></fieldset>
      <fieldset className="ky-options ky-timelines"><legend>When would you like it?</legend><div>{timelines.map(timeline => <label key={timeline}><input type="radio" name="timeline" value={timeline} checked={values.timeline === timeline} onChange={change} /><span>{timeline}</span></label>)}</div></fieldset>
      <label className="ky-field" htmlFor="ky-zip">Your ZIP code<input id="ky-zip" name="zip" autoComplete="postal-code" inputMode="numeric" maxLength={5} placeholder="e.g. 40502" value={values.zip} onChange={change} onBlur={change} aria-describedby="ky-area-status" required /></label>
      <p className="ky-area-status" id="ky-area-status" role="status">{areaMessage(values.zip) || 'Serving Lexington and Central Kentucky.'}</p>
    </fieldset>
    <fieldset hidden={step !== 2} disabled={step !== 2 || sending} className="ky-form-step">
      <label className="ky-field" htmlFor="ky-name">First name<input id="ky-name" ref={firstName} name="first_name" autoComplete="given-name" placeholder="e.g. Alex" maxLength={80} value={values.first_name} onChange={change} required /></label>
      <label className="ky-field" htmlFor="ky-phone">Phone number<input id="ky-phone" ref={phone} name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="(859) 555-0123" maxLength={20} value={values.phone} onChange={change} required /></label>
      <label className="ky-field" htmlFor="ky-email">Email <span>(optional)</span><input id="ky-email" name="email" type="email" autoComplete="email" placeholder="alex@example.com" maxLength={254} value={values.email} onChange={change} /></label>
    </fieldset>
    <label className="ky-honey" aria-hidden="true">Leave this empty<input name="company" tabIndex={-1} autoComplete="off" value={values.company} onChange={change} /></label>
    <p className="ky-form-error" role="alert">{error}</p>
    <button className="ky-button ky-submit" type="submit" disabled={sending}>{sending ? 'Sending your request…' : step === 1 ? 'Continue to contact details' : 'Get My Free Estimate'}<span aria-hidden="true">→</span></button>
    {step === 2 && <button className="ky-form-back" type="button" disabled={sending} onClick={() => { setStep(1); setError(''); }}>← Back to project details</button>}
    <p className="ky-form-privacy">{step === 1 ? 'Free visit. No pressure. No obligation.' : <>We’ll use your details to contact you about your project. We never sell your number. <a href="/privacy-policy/">Privacy policy</a>.</>}</p>
  </form>;
}
