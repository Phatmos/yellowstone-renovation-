# Yellowstone website → Zoho CRM

All website quote forms submit to `/api/lead`. Netlify routes that path to the
`submit-lead` function, which creates a Zoho Lead or updates an exact phone/email
match. Zoho workflows are triggered, and an email copy is sent as a backup.

## Required Netlify environment variables

Add these under the site's environment-variable settings. Never commit their
values to GitHub.

```text
ZOHO_CLIENT_ID=
ZOHO_CLIENT_SECRET=
ZOHO_REFRESH_TOKEN=
```

The refresh token needs permission to read/search and create/update Leads.

## Recommended Zoho settings

```text
ZOHO_LEAD_SOURCE=Website
ZOHO_NEW_LEAD_STATUS=New Lead
ZOHO_ASSIGNMENT_RULE_ID=
ZOHO_DEFAULT_COMPANY=Residential Homeowner
```

`ZOHO_ASSIGNMENT_RULE_ID` is optional. When present, it is applied to newly
created Leads. Zoho workflows are requested on both create and update.

For Zoho accounts outside the US data center, set the matching domains:

```text
ZOHO_ACCOUNTS_DOMAIN=https://accounts.zoho.com
ZOHO_API_DOMAIN=https://www.zohoapis.com
```

## Custom Lead fields

Create the fields in Zoho, copy each field's **API name**, and set:

```text
ZOHO_FIELD_PROJECT_TYPE=Project_Type
ZOHO_FIELD_PAGE_URL=Page_URL
ZOHO_FIELD_UTM_SOURCE=UTM_Source
ZOHO_FIELD_UTM_MEDIUM=UTM_Medium
ZOHO_FIELD_UTM_CAMPAIGN=UTM_Campaign
ZOHO_FIELD_GCLID=GCLID
```

If a custom mapping is not configured, the value is still preserved in the
Lead Description and backup email.

## Email backup

The existing SendGrid configuration is used when both values are present:

```text
SENDGRID_API_KEY=
SENDGRID_FROM_EMAIL=
LEAD_NOTIFICATION_EMAIL=renovationyellowstone@gmail.com
```

Without SendGrid, the function falls back to the site's existing FormSubmit
email destination.

## Verification

Run `npm run test:lead`, then submit these cases on the deployed site:

1. Normal full application.
2. Phone only.
3. Phone and email.
4. A submission containing photo references, if photo upload is added.
5. The same exact phone/email twice; the second submission must update the Lead.

Confirm that Page URL, UTM values, GCLID, workflow notifications, assignment,
and backup email all arrive as expected.
