# Local landing comparison

- Control: `/local/`. Its layout, media and form behavior are retained. Its public email changed to `info@yellowstonerenovation.com` at the owner's request.
- Variant: `/local-ky/`. Twelve blocks, one two-step estimate form, click-to-load videos, six project photos and a matched before/after comparison.
- Confirmation: `/local-ky/thank-you/`. A direct visit does not record a conversion. A successful form response creates an expiring receipt; the confirmation reports each receipt once.

The owner confirmed 90 free design visits per month. No price range, build duration, review date or remaining-availability count was invented. Review dates and summaries come from the existing review collection. Photo captions use a city only where the existing project data identifies it.

## Testing headlines

The default headline is `family`. Use `?headline=vision` or `?headline=neighbors` to select the other approved headlines. Matching values in `utm_content` are also accepted. There is no automatic traffic split or redirect; ads can target either landing URL independently.

## Lead delivery and measurement

The form uses the existing `/api/lead` CRM/email delivery route. Submissions include `source`, `landing_variant`, `hero_variant`, the page URL and UTM fields. Public contact email changes do not alter private notification recipients or service credentials.

GTM events: `landing_view`, `estimate_cta_click`, `estimate_step`, `phone_click`, `video_start` and success-only `generate_lead`. Events contain no contact details. If an existing Meta Pixel is loaded, the confirmation also calls its `Lead` event with the same unique event ID. No Pixel ID, server-side Conversions API integration, ad targeting or campaign settings were created by this change.

Both new routes are excluded from the sitemap and marked noindex. Existing page metadata remains unchanged.
