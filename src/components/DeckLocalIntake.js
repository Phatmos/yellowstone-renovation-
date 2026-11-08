import React, { useEffect, useRef, useState } from 'react';
import { formatPhone } from './localDeckContact';
import { DECK_DRAFT, emptyIntake, intakePayload, intakeTrack, questions, readIntake, reportIntake } from './deckIntakeState';

const signature = values => JSON.stringify(Object.fromEntries(Object.keys(emptyIntake).filter(key => key !== 'company').map(key => [key, values[key]])));
const ENDPOINT = '/.netlify/functions/deck-intake';

export default function DeckLocalIntake() {
  const [values, setValues] = useState(emptyIntake), [phase, setPhase] = useState('address'), [question, setQuestion] = useState(0);
  const [error, setError] = useState(''), [saving, setSaving] = useState(false), [saved, setSaved] = useState(false), [ready, setReady] = useState(false);
  const [matches, setMatches] = useState([]), [lookup, setLookup] = useState(''), [activeMatch, setActiveMatch] = useState(-1);
  const form = useRef(null), title = useRef(null), id = useRef(''), latest = useRef(emptyIntake), currentPhase = useRef('address'), currentQuestion = useRef(0), revision = useRef(0), savedSignature = useRef(''), queue = useRef(Promise.resolve()), submitting = useRef(false), mounted = useRef(true), pendingSaves = useRef(0), skipLookup = useRef(false);
  latest.current = values; currentPhase.current = phase; currentQuestion.current = question;
  useEffect(() => {
    mounted.current = true;
    const previous = readIntake();
    id.current = previous?.id || window.crypto?.randomUUID?.() || `deck-${Date.now()}-${Math.random().toString(36).slice(2)}`;
    if (previous) {
      const restored = { ...emptyIntake, ...Object.fromEntries(Object.keys(emptyIntake).filter(key => typeof previous.values?.[key] === 'string').map(key => [key, previous.values[key]])), company: '' };
      setValues(restored); setPhase(previous.phase); setQuestion(Math.min(4, Math.max(0, previous.question || 0))); revision.current = previous.revision || 0; savedSignature.current = previous.savedSignature || ''; setSaved(signature(restored) === savedSignature.current);
    }
    setReady(true);
    return () => { mounted.current = false; };
  }, []);
  const store = (next = latest.current, nextPhase = currentPhase.current, nextQuestion = currentQuestion.current) => {
    try { window.sessionStorage.setItem(DECK_DRAFT, JSON.stringify({ values: { ...next, company: '' }, phase: nextPhase, question: nextQuestion, id: id.current, revision: revision.current, savedSignature: savedSignature.current, expires: Date.now() + 24 * 60 * 60 * 1000 })); } catch { /* Delivery works even if session storage is blocked. */ }
  };
  useEffect(() => { if (ready) store(); }, [values, phase, question, ready]); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => { if (ready) title.current?.focus({ preventScroll: true }); }, [phase, question]); // eslint-disable-line react-hooks/exhaustive-deps
  const save = (snapshot, kind = 'progress', lastQuestion = questions[currentQuestion.current].title) => {
    const key = signature(snapshot);
    setSaved(false); setSaving(true); pendingSaves.current += 1;
    const payload = intakePayload(snapshot, id.current, kind, lastQuestion, ++revision.current);
    const task = queue.current.catch(() => {}).then(async () => {
      const response = await fetch(ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(payload), keepalive: true });
      const result = await response.json();
      if (!response.ok || result.success !== true) throw new Error('Save failed');
      savedSignature.current = key;
      if (mounted.current) { setSaved(signature(latest.current) === key); setError(''); }
      store();
      return result;
    });
    queue.current = task;
    task.catch(() => { if (mounted.current) setError(kind === 'contact' ? 'Your request hasn’t been sent. Please try again, or call (859) 765-7267.' : 'Your contact request is saved. This answer hasn’t synced yet. Please retry before continuing.'); }).finally(() => { pendingSaves.current -= 1; if (mounted.current) setSaving(pendingSaves.current > 0); });
    return task;
  };
  useEffect(() => {
    const flush = () => {
      if (currentPhase.current !== 'qualify' || savedSignature.current === signature(latest.current)) return;
      const payload = intakePayload(latest.current, id.current, 'progress', questions[currentQuestion.current].title, ++revision.current);
      const body = JSON.stringify(payload);
      if (!window.navigator.sendBeacon?.(ENDPOINT, new Blob([body], { type: 'application/json' }))) fetch(ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body, keepalive: true }).catch(() => {});
      store();
    };
    const hidden = () => { if (document.hidden) flush(); };
    window.addEventListener('pagehide', flush); document.addEventListener('visibilitychange', hidden);
    return () => { window.removeEventListener('pagehide', flush); document.removeEventListener('visibilitychange', hidden); };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (ready && phase === 'qualify' && savedSignature.current !== signature(latest.current)) save(latest.current).catch(() => {});
  }, [ready]); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (phase !== 'address' || !ready) return undefined;
    if (skipLookup.current) { skipLookup.current = false; return undefined; }
    setMatches([]); setActiveMatch(-1);
    const text = [values.street, values.city, values.state, values.zip].filter(Boolean).join(', ');
    if (!/^\d/.test(values.street) || values.street.length < 7 || (!values.city && !/\b\d{5}\b/.test(values.street))) { setLookup(''); return undefined; }
    let cancelled = false;
    const controller = new AbortController();
    const timer = window.setTimeout(async () => {
      setLookup('Looking for your address…');
      try {
        const response = await fetch('/.netlify/functions/deck-address', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ address: text }), signal: controller.signal });
        const data = await response.json();
        if (!cancelled) { setMatches(data.matches || []); setLookup(data.matches?.length ? 'Choose your address below, or continue with your entry.' : 'You can continue with the address you entered.'); }
      } catch { if (!cancelled) setLookup('Address lookup is unavailable. You can still enter your address.'); }
    }, 700);
    return () => { cancelled = true; clearTimeout(timer); controller.abort(); };
  }, [values.street, values.city, values.state, values.zip, phase, ready]);
  const selectAddress = match => {
    skipLookup.current = true; setValues(current => ({ ...current, street: match.street, city: match.city, state: match.state, zip: match.zip })); setMatches([]); setLookup('Address filled. You can edit any detail.'); setActiveMatch(-1);
  };
  const change = event => {
    const { name, value } = event.target;
    const next = { ...latest.current, [name]: name === 'phone' ? formatPhone(value) : name === 'zip' ? value.replace(/\D/g, '').slice(0, 5) : value };
    latest.current = next; setValues(next); setError('');
    if (phase === 'qualify' && name !== 'notes') save(next).catch(() => {});
    else if (phase === 'qualify') setSaved(false);
  };
  useEffect(() => {
    if (phase !== 'qualify' || question !== 4 || savedSignature.current === signature(values)) return undefined;
    const timer = window.setTimeout(() => save(latest.current).catch(() => {}), 650);
    return () => clearTimeout(timer);
  }, [values.notes, phase, question]); // eslint-disable-line react-hooks/exhaustive-deps
  const submit = async event => {
    event.preventDefault();
    if (submitting.current || !ready) return;
    setError('');
    const read = name => form.current.elements.namedItem(name)?.value?.trim() || '';
    if (phase === 'address') {
      const next = { ...values, street: read('street'), city: read('city'), state: read('state'), zip: read('zip') };
      setValues(next); latest.current = next;
      const invalid = !next.street ? ['street', 'Enter your street address.'] : !next.city ? ['city', 'Enter your city.'] : !/^[A-Za-z]{2}$/.test(next.state) ? ['state', 'Enter the 2-letter state.'] : !/^\d{5}$/.test(next.zip) ? ['zip', 'Enter your 5-digit ZIP code.'] : null;
      if (invalid) { setError(invalid[1]); form.current.elements.namedItem(invalid[0]).focus(); return; }
      setMatches([]); setPhase('contact'); intakeTrack('estimate_step', { step: 'contact' }); return;
    }
    if (phase === 'contact') {
      const next = { ...values, first_name: read('first_name'), phone: read('phone'), email: read('email'), company: read('company') };
      setValues(next); latest.current = next;
      const invalid = !next.first_name ? ['first_name', 'Enter your first name.'] : !/^(?:1)?\d{10}$/.test(next.phone.replace(/\D/g, '')) ? ['phone', 'Enter your 10-digit phone number.'] : next.email && !form.current.elements.email.validity.valid ? ['email', 'Enter a valid email address, or leave it blank.'] : null;
      if (invalid) { setError(invalid[1]); form.current.elements.namedItem(invalid[0]).focus(); return; }
      submitting.current = true;
      try { await save(next, 'contact', 'Contact details'); setPhase('qualify'); currentPhase.current = 'qualify'; store(next, 'qualify', 0); reportIntake(id.current); } catch { /* The visible error keeps all inputs. */ } finally { submitting.current = false; }
      return;
    }
    if (phase === 'qualify') {
      const key = questions[question].key;
      if (key !== 'notes' && !values[key]) { setError('Choose an option, or use “I’ll tell you when you call”.'); return; }
      submitting.current = true;
      try {
        if (question === 4) { await save(latest.current, 'complete'); setPhase('done'); store(latest.current, 'done', question); intakeTrack('qualification_complete', { inquiry_id: id.current }); }
        else { await queue.current; if (savedSignature.current !== signature(latest.current)) await save(latest.current); setQuestion(question + 1); store(latest.current, 'qualify', question + 1); intakeTrack('qualification_step', { step: question + 1 }); }
      } catch { /* Retry remains available. */ } finally { submitting.current = false; }
    }
  };
  const finishLater = async () => {
    if (submitting.current) return;
    submitting.current = true;
    try { await save(latest.current, 'complete', `${questions[question].title} (visitor chose to discuss by phone)`); setPhase('done'); store(latest.current, 'done', question); } catch { /* Keep the saved request and pending answers visible. */ } finally { submitting.current = false; }
  };
  if (phase === 'done') return <div className="dky-form dky-done" id="deck-estimate" tabIndex={-1}>
    <span className="dky-success-icon" aria-hidden="true">✓</span><span className="dky-eyebrow">You’re all set</span><h2 ref={title} tabIndex={-1}>Thanks, {values.first_name || 'neighbor'}.</h2><p>Your request and the details you shared are saved. We’ll call within one business day to arrange your free design visit.</p><div className="dky-address-receipt"><strong>Your project address</strong><span>{values.street}<br />{values.city}, {values.state} {values.zip}</span></div><p className="dky-small">No payment. No obligation. Just a conversation about your deck.</p><a className="dky-button dky-button-dark" href="tel:+18597657267">Call (859) 765-7267</a><a className="dky-text-link" href="#deck-stories">Meet your team &amp; hear from homeowners ↓</a>
  </div>;
  return <form id="deck-estimate" className="dky-form" ref={form} onSubmit={submit} noValidate aria-labelledby="dky-form-title">
    <div className="dky-form-top"><span>{phase === 'address' ? 'Let’s start with your home' : phase === 'contact' ? 'Your free visit starts here' : 'Your request is saved'}<i aria-hidden="true">{phase === 'qualify' ? '✓' : '↗'}</i></span><small>{phase === 'qualify' ? `Project details ${question + 1} of 5 · optional` : `Step ${phase === 'address' ? 1 : 2} of 2`}</small></div>
    <div className="dky-progress" aria-hidden="true"><i style={{ width: `${phase === 'qualify' ? (question + 1) * 20 : phase === 'contact' ? 100 : 50}%` }} /></div>
    <h2 id="dky-form-title" ref={title} tabIndex={-1}>{phase === 'address' ? 'Where will your deck be?' : phase === 'contact' ? 'Where can we reach you?' : questions[question].title}</h2>
    <p className="dky-form-intro">{phase === 'address' ? 'Enter your address. We’ll plan a free on-site design and estimate.' : phase === 'contact' ? 'We’ll call within one business day to arrange a time that works.' : questions[question].hint}</p>
    {phase === 'address' && <fieldset className="dky-fields" disabled={saving}>
      <div className="dky-address-search"><label htmlFor="dky-street">Home address</label><input id="dky-street" name="street" role="combobox" aria-autocomplete="list" aria-expanded={matches.length > 0} aria-controls="dky-address-list" aria-activedescendant={activeMatch >= 0 ? `dky-address-${activeMatch}` : undefined} aria-describedby="dky-address-help" placeholder="Start with your street address" autoComplete="address-line1" value={values.street} maxLength={200} onChange={change} onKeyDown={event => {
        if (!matches.length) return;
        if (event.key === 'ArrowDown' || event.key === 'ArrowUp') { event.preventDefault(); setActiveMatch(i => (i + (event.key === 'ArrowDown' ? 1 : -1) + matches.length) % matches.length); }
        if (event.key === 'Escape') { event.preventDefault(); setMatches([]); }
        if (event.key === 'Enter' && activeMatch >= 0) { event.preventDefault(); selectAddress(matches[activeMatch]); }
      }} required />
      {matches.length > 0 && <ul id="dky-address-list" role="listbox" aria-label="Matching addresses">{matches.map((match, index) => <li id={`dky-address-${index}`} key={match.label} role="option" aria-selected={activeMatch === index} onMouseDown={event => event.preventDefault()}><button type="button" tabIndex={-1} onClick={() => selectAddress(match)}>{match.label}<span>Use this address ↗</span></button></li>)}</ul>}
      <small id="dky-address-help" role="status">{lookup || 'Add your city or ZIP for address suggestions. Manual entry works too.'}</small></div>
      <div className="dky-address-row"><label htmlFor="dky-city">City<input id="dky-city" name="city" autoComplete="address-level2" placeholder="e.g. Lexington" value={values.city} maxLength={100} onChange={change} required /></label><label htmlFor="dky-state">State<input id="dky-state" name="state" autoComplete="address-level1" placeholder="KY" value={values.state} maxLength={2} onChange={change} required /></label><label htmlFor="dky-zip">ZIP code<input id="dky-zip" name="zip" autoComplete="postal-code" inputMode="numeric" placeholder="40502" value={values.zip} maxLength={5} onChange={change} required /></label></div>
      <small className="dky-lookup-credit">Address helper: U.S. Census Bureau</small>
    </fieldset>}
    {phase === 'contact' && <fieldset className="dky-fields" disabled={saving}>
      <div className="dky-address-summary"><span aria-hidden="true">⌂</span><span>{values.street}<small>{values.city}, {values.state} {values.zip}</small></span><button type="button" onClick={() => { setPhase('address'); setError(''); }}>Edit</button></div>
      <label htmlFor="dky-name">First name<input id="dky-name" name="first_name" autoComplete="given-name" placeholder="e.g. Alex" value={values.first_name} maxLength={80} onChange={change} required /></label>
      <label htmlFor="dky-phone">Phone number<input id="dky-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="(859) 555-0123" value={values.phone} maxLength={20} onChange={change} required /></label>
      <label htmlFor="dky-email">Email <span className="dky-optional">optional</span><input id="dky-email" name="email" type="email" autoComplete="email" placeholder="alex@example.com" value={values.email} maxLength={254} onChange={change} /></label>
    </fieldset>}
    {phase === 'qualify' && <div className="dky-qualification">
      {question === 0 && <p className="dky-contact-saved">✓ Thanks, {values.first_name}. Your contact details are already with our team.</p>}
      {questions[question].options ? <fieldset className="dky-choices"><legend className="dky-sr">{questions[question].title}</legend>{questions[question].options.map((option, index) => <label key={option}><input type="radio" name={questions[question].key} value={option} checked={values[questions[question].key] === option} onChange={change} /><span><small>{questions[question].icons[index]}</small><strong>{option}</strong><i aria-hidden="true">✓</i></span></label>)}</fieldset> : <label htmlFor="dky-notes" className="dky-notes-label">Your ideas <span className="dky-optional">optional</span><textarea id="dky-notes" name="notes" rows={4} maxLength={1500} placeholder="I’d love space for a dining table, and maybe some shade…" value={values.notes} onChange={change} onBlur={() => { if (savedSignature.current !== signature(latest.current)) save(latest.current).catch(() => {}); }} /></label>}
      <p className="dky-save-status" role="status">{saving ? 'Saving your answer…' : saved ? '✓ Saved with your request' : 'Your contact request is saved.'}</p>
      {error && <button className="dky-retry" type="button" onClick={() => save(latest.current).catch(() => {})} disabled={saving}>Retry saving this answer</button>}
    </div>}
    <label className="dky-honey" aria-hidden="true">Leave empty<input name="company" tabIndex={-1} autoComplete="off" value={values.company} onChange={change} /></label>
    <p className="dky-form-error" role="alert">{error}</p>
    <button type="submit" className="dky-button" disabled={saving || !ready}>{saving ? (phase === 'contact' ? 'Sending your request…' : 'Saving…') : phase === 'address' ? 'Get My Free Estimate' : phase === 'contact' ? 'Request My Free Visit' : question === 4 ? 'Finish My Request' : 'Continue'}<span aria-hidden="true">→</span></button>
    {phase === 'qualify' ? <div className="dky-form-secondary">{question > 0 && <button type="button" disabled={saving} onClick={() => { setQuestion(question - 1); setError(''); }}>← Back</button>}<button type="button" disabled={saving} onClick={finishLater}>I’ll tell you when you call</button></div> : <p className="dky-form-privacy">{phase === 'address' ? 'Free on-site visit · No payment · No obligation' : <>By sending, you agree that Yellowstone Renovation may contact you about this project and save the answers you choose to share. <a href="/privacy-policy/">Privacy policy</a>.</>}</p>}
    <noscript>Please call <a href="tel:+18597657267">(859) 765-7267</a> to request your free estimate.</noscript>
  </form>;
}
