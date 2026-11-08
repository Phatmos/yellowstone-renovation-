# Deck intake landing

`/deck-local-ky/` is a third, independent ad landing. Existing `/local/` and `/local-ky/` are retained. Its CSS is scoped to `.dky-page`. It uses the existing logo, Poppins type, deep green, lime accents, orange pill buttons, and real project imagery. The page is noindex and excluded from the sitemap.

## Visitor journey

1. Address with browser autofill and optional U.S. Census matches. Selecting a match fills street, city, state and ZIP. Manual entry is always accepted; no Google key or Google Maps script is needed. Suggestions need a street plus city or ZIP; this is an address lookup, not Google prefix completion.
2. First name, phone and optional email. Submitting sends the contact and full address immediately through the existing CRM/email delivery. The page only confirms receipt after the server acknowledges delivery.
3. Five optional qualification steps: project type, material, rough size, timing and notes. Every selection sends a full snapshot; notes autosave after a short pause and on blur. A saved indication requires a successful response. Visitors can discuss the remaining questions by phone instead.
4. Inline confirmation. No instant pricing or invented availability is promised. The team calls within one business day.

The introduction is the first video; the two existing high-quality homeowner videos follow. Videos load after a click, keep sound/player controls, and pause out of view. Starting a different story replaces the previous player.

## Partial submissions and delivery

`/.netlify/functions/deck-intake` validates the fields server-side and reuses the existing lead delivery. It adds an inquiry ID, increasing revision, source `deck-local-ky`, last question and submission stage. Each update contains all answers collected so far, plus the contact/address and attribution.

The current production configuration has Zoho **webform** credentials, without OAuth. Webforms create records but cannot update them. The initial contact creates a CRM lead as usual. Qualification snapshots go to the existing lead notification inbox with the same inquiry ID in the subject, avoiding extra CRM leads for each answer. If OAuth is configured, snapshots also update the existing CRM contact by exact phone/email. Notification recipients and credentials are unchanged. No additional database or paid address provider is introduced.

Requests are serialized in the browser so later answers do not overtake earlier ones. Drafts and the last acknowledged snapshot are retained in session storage for 24 hours. Unsent answers retry on return in that session. `pagehide`/visibility changes attempt a final beacon; browser/network restrictions can prevent that last attempt, but already acknowledged contact/answers remain delivered. Failed requests retain inputs and show a retry message. A server outage before the initial contact is acknowledged is never displayed as success.

No contact or address appears in analytics events. `generate_lead`/the existing Meta `Lead` event fire once after contact delivery; qualification changes do not count as extra leads. Additional events are `landing_view`, `estimate_step`, `qualification_step`, `qualification_complete`, `phone_click`, `estimate_cta_click` and `video_start`.

## Verification

`node --test tests/submit-lead.test.js tests/deck-intake.test.mjs` exercises existing delivery plus staged delivery, validation, CRM fallback/update behavior and address matching using mocked upstream requests. Browser interaction checks use JSDOM; media and address network behavior require live verification separately. No test lead should be sent to production CRM/email.

Address provider documentation: [U.S. Census Geocoding Services API](https://geocoding.geo.census.gov/geocoder/Geocoding_Services_API.html).
