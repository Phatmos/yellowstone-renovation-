import test from 'node:test';
import assert from 'node:assert/strict';
import intake, { intakePayload } from '../netlify/functions/deck-intake.mjs';
import address from '../netlify/functions/deck-address.mjs';

const originalEnv = { ...process.env }, originalFetch = global.fetch;
const contact = { kind: 'contact', inquiry_id: 'test-inquiry-0123456789', revision: 1, first_name: 'Alex', phone: '(859) 555-0123', email: '', street: '123 Test Street', city: 'Lexington', state: 'KY', zip: '40502', page: 'https://yellowstonerenovation.com/deck-local-ky/?utm_source=facebook' };
const request = data => new Request('https://yellowstonerenovation.com/.netlify/functions/deck-intake', { method: 'POST', headers: { 'Content-Type': 'application/json', Origin: 'https://yellowstonerenovation.com' }, body: JSON.stringify(data) });
function setup({ emailFails = false, crmFails = false, oauth = false } = {}) {
  delete process.env.SENDGRID_API_KEY; delete process.env.SENDGRID_FROM_EMAIL;
  delete process.env.ZOHO_CLIENT_ID; delete process.env.ZOHO_CLIENT_SECRET; delete process.env.ZOHO_REFRESH_TOKEN;
  process.env.ZOHO_WEBFORM_XNQSJSDP = 'test'; process.env.ZOHO_WEBFORM_XMIWTLD = 'test';
  if (oauth) { process.env.ZOHO_CLIENT_ID = 'test'; process.env.ZOHO_CLIENT_SECRET = 'test'; process.env.ZOHO_REFRESH_TOKEN = 'test'; }
  const calls = [];
  global.fetch = async (url, options) => {
    calls.push({ url: String(url), options });
    if (String(url).includes('/oauth/v2/token')) return Response.json({ access_token: 'test', api_domain: 'https://test.invalid' });
    if (String(url).includes('/Leads/search?phone=')) return Response.json({ data: [{ id: 'existing', Phone: contact.phone, Description: 'Earlier saved contact' }] });
    if (String(url).includes('/Leads/existing')) return Response.json({ data: [{ status: 'success' }] });
    if (String(url).includes('/crm/WebToLeadForm')) return new Response(crmFails ? 'Failed' : '<div id="wf_thankyoumessage">Received</div>', { status: crmFails ? 502 : 200 });
    if (String(url).includes('formsubmit.co')) return Response.json({ success: !emailFails }, { status: emailFails ? 502 : 200 });
    throw new Error('Unexpected mocked request');
  };
  return calls;
}
test.afterEach(() => { process.env = { ...originalEnv }; global.fetch = originalFetch; });

test('contact reaches CRM before any qualification, with full address and attribution', async () => {
  const calls = setup(); const result = await intake(request(contact));
  assert.equal(result.status, 200); assert.equal((await result.json()).success, true);
  const crm = calls.find(call => call.url.includes('WebToLeadForm'));
  const params = new URLSearchParams(crm.options.body);
  assert.equal(params.get('Street'), contact.street); assert.equal(params.get('Phone'), contact.phone); assert.ok(params.get('Description').includes(contact.inquiry_id));
  assert.ok(params.get('Description').includes('Contact saved; qualification not started')); assert.equal(params.get('LEADCF3'), 'facebook');
});
test('an abandoned qualification delivers the entire snapshot without creating another webform lead', async () => {
  const calls = setup(); const result = await intake(request({ ...contact, kind: 'progress', revision: 3, project_type: 'Replace an old deck', material: 'Composite', last_question: 'Any material in mind?' }));
  assert.equal(result.status, 200); assert.equal(calls.some(call => call.url.includes('WebToLeadForm')), false);
  const update = JSON.parse(calls[0].options.body); assert.ok(update._subject.includes(contact.inquiry_id)); assert.ok(update.details.includes('material: Composite')); assert.ok(update.details.includes('Any material in mind?')); assert.ok(update.details.includes('Qualification in progress')); assert.ok(update.details.includes(contact.phone));
});
test('OAuth installations update the same CRM contact as well as delivering progress', async () => {
  const calls = setup({ oauth: true }); const result = await intake(request({ ...contact, kind: 'complete', timeline: 'In 1–3 months' }));
  assert.equal(result.status, 200); const update = calls.find(call => call.url.includes('/Leads/existing'));
  const record = JSON.parse(update.options.body).data[0]; assert.ok(record.Description.includes('Earlier saved contact')); assert.ok(record.Description.includes('Qualification finished')); assert.ok(record.Description.includes('timeline: In 1–3 months'));
});
test('failed delivery is not acknowledged as saved, and invalid inputs never send', async () => {
  setup({ emailFails: true }); const result = await intake(request({ ...contact, kind: 'progress' }));
  assert.equal(result.status, 502); assert.equal((await result.json()).success, false);
  const calls = setup(); assert.equal((await intake(request({ ...contact, phone: '123' }))).status, 400); assert.equal((await intake(request({ ...contact, kind: 'progress', material: 'unlisted' }))).status, 400); assert.equal(calls.length, 0);
  assert.throws(() => intakePayload({ ...contact, zip: '' }));
});
test('method, cross-origin and honeypot requests do not deliver leads', async () => {
  const calls = setup(); assert.equal((await intake(new Request('https://yellowstonerenovation.com/.netlify/functions/deck-intake'))).status, 405);
  assert.equal((await intake(new Request('https://yellowstonerenovation.com/.netlify/functions/deck-intake', { method: 'POST', headers: { Origin: 'https://untrusted.invalid' }, body: JSON.stringify(contact) }))).status, 403);
  assert.equal((await intake(request({ ...contact, company: 'spam' }))).status, 200); assert.equal(calls.length, 0);
});
test('address helper preserves the matched house number rather than the street range', async () => {
  global.fetch = async url => { assert.equal(new URL(url).hostname, 'geocoding.geo.census.gov'); return Response.json({ result: { addressMatches: [{ matchedAddress: '123 TEST ST, LEXINGTON, KY, 40502', addressComponents: { fromAddress: '100', city: 'LEXINGTON', state: 'KY', zip: '40502' } }] } }); };
  const result = await address(new Request('https://yellowstonerenovation.com/.netlify/functions/deck-address', { method: 'POST', body: JSON.stringify({ address: '123 Test Street, Lexington, KY' }) }));
  assert.equal((await result.json()).matches[0].street, '123 TEST ST');
  global.fetch = async () => { throw new Error('Offline'); };
  const offline = await address(new Request('https://yellowstonerenovation.com/.netlify/functions/deck-address', { method: 'POST', body: JSON.stringify({ address: '123 Test Street, Lexington, KY' }) }));
  assert.equal((await offline.json()).unavailable, true);
});
