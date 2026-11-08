export const KY_PHONE = '(859) 765-7267';
export const KY_EMAIL = 'info@yellowstonerenovation.com';
export const KY_DRAFT_KEY = 'yellowstone.local-ky.draft.v1';
export const KY_RECEIPT_KEY = 'yellowstone.local-ky.receipt.v1';
export const HEADLINES = {
  family: 'A beautiful, safe deck for your family. Without the contractor stress.',
  vision: 'The deck you’ve been picturing. Built right the first time.',
  neighbors: 'Lexington’s family-owned deck builders. Recommended by your neighbors.',
};

export function headlineVariant(search = '') {
  const params = new URLSearchParams(search);
  const key = params.get('headline') || params.get('utm_content');
  return Object.hasOwn(HEADLINES, key) ? key : 'family';
}

export function kyTrack(event, details = {}) {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, landing_variant: 'local-ky', ...details });
}

export function readKyDraft() {
  if (typeof window === 'undefined') return {};
  try {
    const saved = JSON.parse(window.sessionStorage.getItem(KY_DRAFT_KEY));
    if (saved?.expires > Date.now()) return saved.values || {};
    const shared = JSON.parse(window.sessionStorage.getItem('yellowstone.deck-contact.v1'));
    return shared?.expires > Date.now() ? shared.contact || {} : {};
  } catch { return {}; }
}

export function areaMessage(zip) {
  if (!/^\d{5}$/.test(zip)) return '';
  if (/^(403|404|405|406)/.test(zip)) return 'We serve Lexington and Central Kentucky. We’ll confirm availability for your address when we call.';
  return 'This ZIP is outside our usual Central Kentucky area. You can still send a request, and we’ll confirm whether we can help.';
}

const reported = new Set();
export function reportKyLead(receipt) {
  if (!receipt?.id || !Number.isFinite(receipt.expires) || receipt.expires <= Date.now() || reported.has(receipt.id)) return;
  reported.add(receipt.id);
  try {
    const key = `yellowstone.local-ky.reported.${receipt.id}`;
    if (window.sessionStorage.getItem(key)) return;
    window.sessionStorage.setItem(key, 'true');
  } catch { /* Memory still prevents duplicate events during navigation. */ }
  kyTrack('generate_lead', { form: 'local-ky-estimate', event_id: receipt.id, hero_variant: receipt.variant });
  if (typeof window.fbq === 'function') window.fbq('track', 'Lead', { content_name: 'Deck estimate', content_category: 'local-ky' }, { eventID: receipt.id });
}
