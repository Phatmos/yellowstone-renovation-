export const DECK_DRAFT = 'yellowstone.deck-local-ky.intake.v1';
export const questions = [
  { key: 'project_type', title: 'What are you planning?', hint: 'Start fresh, replace what’s there, or give your deck some care.', options: ['New deck', 'Replace an old deck', 'Repair my deck', 'Covered deck'], icons: ['01', '02', '03', '04'] },
  { key: 'material', title: 'Any material in mind?', hint: 'It’s fine to leave the choice to your free design visit.', options: ['Composite', 'Pressure-treated wood', 'Help me choose'], icons: ['Low upkeep', 'Natural wood', 'Let’s talk'] },
  { key: 'size', title: 'About how big?', hint: 'A rough idea is plenty. We’ll measure at your home.', options: ['Under 200 sq ft', '200–400 sq ft', 'Over 400 sq ft', 'Not sure yet'], icons: ['Cozy', 'Room to gather', 'A little more room', 'We’ll measure'] },
  { key: 'timeline', title: 'When would you like to start?', hint: 'This helps us plan the right next step with you.', options: ['As soon as possible', 'In 1–3 months', 'In 3–6 months', 'Just planning'], icons: ['Soon', 'This season', 'Looking ahead', 'Exploring'] },
  { key: 'notes', title: 'Anything else on your wish list?', hint: 'Railings, a roof, lighting, a tricky yard… tell us what matters.', options: null },
];
export const emptyIntake = { street: '', city: '', state: 'KY', zip: '', first_name: '', phone: '', email: '', company: '', project_type: '', material: '', size: '', timeline: '', notes: '' };
export function intakeTrack(event, details = {}) {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, landing_variant: 'deck-local-ky', ...details });
}
const reported = new Set();
export function reportIntake(id) {
  if (reported.has(id)) return;
  reported.add(id);
  try { if (window.sessionStorage.getItem(`${DECK_DRAFT}.reported.${id}`)) return; window.sessionStorage.setItem(`${DECK_DRAFT}.reported.${id}`, '1'); } catch { /* The in-memory guard remains. */ }
  intakeTrack('generate_lead', { event_id: id, form: 'deck-local-ky-contact' });
  if (typeof window.fbq === 'function') window.fbq('track', 'Lead', { content_name: 'Deck design request', content_category: 'deck-local-ky' }, { eventID: id });
}
export function readIntake() {
  try {
    const saved = JSON.parse(window.sessionStorage.getItem(DECK_DRAFT));
    if (saved?.expires > Date.now() && ['address', 'contact', 'qualify', 'done'].includes(saved.phase) && /^[a-zA-Z0-9-]{16,80}$/.test(saved.id)) return saved;
  } catch { /* Private browsing can disable storage. */ }
  return null;
}
export function intakePayload(values, id, kind, question, revision) {
  const params = new URLSearchParams(window.location.search);
  return { ...values, inquiry_id: id, kind, revision, last_question: question, page: window.location.href, ...Object.fromEntries(['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'gclid'].map(key => [key, params.get(key) || ''])) };
}
