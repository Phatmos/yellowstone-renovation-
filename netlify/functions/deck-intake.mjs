import delivery from './submit-lead.js';

const { buildLead, getAttribution, hasZohoCredentials, upsertZohoLead, sendBackupEmail } = delivery._delivery;
const choices = {
  project_type: ['New deck', 'Replace an old deck', 'Repair my deck', 'Covered deck'],
  material: ['Composite', 'Pressure-treated wood', 'Help me choose'],
  size: ['Under 200 sq ft', '200–400 sq ft', 'Over 400 sq ft', 'Not sure yet'],
  timeline: ['As soon as possible', 'In 1–3 months', 'In 3–6 months', 'Just planning'],
};
const clean = (value, limit = 255) => typeof value === 'string' ? value.trim().slice(0, limit) : '';
const headers = { 'Cache-Control': 'no-store' };

export function intakePayload(input, referer = '') {
  if (!input || typeof input !== 'object' || Array.isArray(input)) throw new Error('Invalid request.');
  const name = clean(input.first_name, 80), phone = clean(input.phone, 30), street = clean(input.street), city = clean(input.city, 100), zip = clean(input.zip, 5);
  if (!name || !/^(?:1)?\d{10}$/.test(phone.replace(/\D/g, '')) || !street || !city || !/^\d{5}$/.test(zip)) throw new Error('Enter your name, phone number and full address.');
  if (!/^[a-zA-Z0-9-]{16,80}$/.test(input.inquiry_id || '') || !['contact', 'progress', 'complete'].includes(input.kind)) throw new Error('Invalid request.');
  const email = clean(input.email, 254);
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error('Enter a valid email address.');
  const payload = { first_name: name, phone, email, street, city, zip, state: clean(input.state, 2) || 'KY', source: 'deck-local-ky', landing_variant: 'deck-local-ky', inquiry_id: input.inquiry_id, revision: Math.max(0, Math.min(10000, Number(input.revision) || 0)), submission_stage: input.kind === 'contact' ? 'Contact saved; qualification not started' : input.kind === 'complete' ? 'Qualification finished' : 'Qualification in progress', last_question: clean(input.last_question, 100), page: clean(input.page, 1000) || referer, notes: clean(input.notes, 1500) };
  for (const [key, allowed] of Object.entries(choices)) {
    if (input[key] && !allowed.includes(input[key])) throw new Error('Choose one of the listed project options.');
    payload[key] = input[key] || '';
  }
  payload.project_type ||= 'Deck project';
  for (const key of ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'gclid']) payload[key] = clean(input[key]);
  payload.description = `Deck inquiry ${payload.inquiry_id}\n${payload.submission_stage}\nLast question: ${payload.last_question || 'Contact details'}\nAnswers not provided are still unknown. This is a free design/estimate request, not an instant price.${payload.notes ? `\nAdditional notes: ${payload.notes}` : ''}`;
  return payload;
}

export default async function deckIntake(request) {
  if (request.method !== 'POST') return Response.json({ success: false }, { status: 405, headers: { ...headers, Allow: 'POST' } });
  const origin = request.headers.get('origin');
  if (origin && origin !== new URL(request.url).origin) return Response.json({ success: false }, { status: 403, headers });
  let input, payload;
  try {
    const raw = await request.text();
    if (raw.length > 16000) return Response.json({ success: false }, { status: 413, headers });
    input = JSON.parse(raw);
    if (clean(input.company)) return Response.json({ success: true }, { headers });
    payload = intakePayload(input, request.headers.get('referer') || '');
  } catch (error) {
    return Response.json({ success: false, error: error.message || 'Check your details.' }, { status: 400, headers });
  }
  const event = { httpMethod: 'POST', headers: Object.fromEntries(request.headers), body: JSON.stringify(payload), isBase64Encoded: false };
  if (input.kind === 'contact') {
    const result = await delivery.handler(event);
    return new Response(result.body, { status: result.statusCode, headers: result.headers });
  }
  // The current Zoho webform can create leads but cannot update one. Keep one CRM
  // contact and send complete progress snapshots to the existing notification inbox.
  // If OAuth is configured later, the same contact is also updated in Zoho.
  const lead = buildLead(payload, getAttribution(event, payload));
  const results = await Promise.allSettled([
    hasZohoCredentials() ? upsertZohoLead(lead) : Promise.reject(new Error('CRM updates not configured')),
    sendBackupEmail(lead, { subject: `Deck inquiry ${payload.inquiry_id} — ${input.kind === 'complete' ? 'details finished' : 'progress update'}` }),
  ]);
  if (results.every(result => result.status === 'rejected')) {
    console.error('Deck intake update delivery failed');
    return Response.json({ success: false, error: 'This answer could not be saved. Please retry.' }, { status: 502, headers });
  }
  return Response.json({ success: true, saved: payload.submission_stage }, { headers });
}

export const config = { rateLimit: { action: 'rate_limit', aggregateBy: 'ip', windowSize: 60, windowLimit: 40 } };
