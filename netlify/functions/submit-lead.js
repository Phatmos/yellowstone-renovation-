const DEFAULT_BACKUP_EMAIL = "renovationyellowstone@gmail.com";
const MAX_BODY_BYTES = 200_000;
const REQUEST_TIMEOUT_MS = 12_000;
const DEFAULT_ZOHO_WEBFORM_URL = "https://crm.zoho.com/crm/WebToLeadForm";

function jsonResponse(statusCode, body, extraHeaders = {}) {
    return {
        statusCode,
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Cache-Control": "no-store",
            ...extraHeaders,
        },
        body: JSON.stringify(body),
    };
}

function safeString(value, maxLength = 2000) {
    if (value === undefined || value === null) return "";
    const stringValue = Array.isArray(value)
        ? value.map((item) => safeString(item, 500)).filter(Boolean).join(", ")
        : String(value);
    return stringValue.trim().slice(0, maxLength);
}

function normalizedKey(value) {
    return String(value).toLowerCase().replace(/[^a-z0-9]/g, "");
}

function makeFieldReader(payload) {
    const fields = new Map();
    Object.entries(payload || {}).forEach(([key, value]) => {
        fields.set(normalizedKey(key), value);
    });

    return (...aliases) => {
        for (const alias of aliases) {
            const value = fields.get(normalizedKey(alias));
            if (safeString(value)) return value;
        }
        return "";
    };
}

function parseCookies(cookieHeader = "") {
    return cookieHeader.split(";").reduce((cookies, pair) => {
        const separator = pair.indexOf("=");
        if (separator === -1) return cookies;
        const key = pair.slice(0, separator).trim();
        const value = pair.slice(separator + 1).trim();
        if (key) cookies[key] = value;
        return cookies;
    }, {});
}

function getAttribution(event, payload) {
    const read = makeFieldReader(payload);
    const attribution = {
        pageUrl: safeString(
            read("page_url", "page url", "page", "url") ||
                event.headers?.referer ||
                event.headers?.referrer,
            1000
        ),
        utmSource: safeString(read("utm_source"), 255),
        utmMedium: safeString(read("utm_medium"), 255),
        utmCampaign: safeString(read("utm_campaign"), 255),
        gclid: safeString(read("gclid"), 255),
    };

    const cookies = parseCookies(event.headers?.cookie || event.headers?.Cookie || "");
    const stored = cookies.yellowstone_lead_attribution;

    if (stored) {
        try {
            const parsed = JSON.parse(decodeURIComponent(stored));
            attribution.utmSource ||= safeString(parsed.utmSource, 255);
            attribution.utmMedium ||= safeString(parsed.utmMedium, 255);
            attribution.utmCampaign ||= safeString(parsed.utmCampaign, 255);
            attribution.gclid ||= safeString(parsed.gclid, 255);
        } catch (error) {
            // Ignore malformed attribution cookies.
        }
    }

    if (attribution.pageUrl) {
        try {
            const page = new URL(attribution.pageUrl);
            attribution.utmSource ||= safeString(page.searchParams.get("utm_source"), 255);
            attribution.utmMedium ||= safeString(page.searchParams.get("utm_medium"), 255);
            attribution.utmCampaign ||= safeString(page.searchParams.get("utm_campaign"), 255);
            attribution.gclid ||= safeString(page.searchParams.get("gclid"), 255);
        } catch (error) {
            // A relative referrer is still useful as plain text.
        }
    }

    return attribution;
}

function parseRequestBody(event) {
    const rawBody = event.isBase64Encoded
        ? Buffer.from(event.body || "", "base64").toString("utf8")
        : event.body || "";

    if (Buffer.byteLength(rawBody, "utf8") > MAX_BODY_BYTES) {
        const error = new Error("Submission is too large.");
        error.statusCode = 413;
        throw error;
    }

    const contentType = String(
        event.headers?.["content-type"] || event.headers?.["Content-Type"] || ""
    ).toLowerCase();

    if (contentType.includes("application/json")) {
        return rawBody ? JSON.parse(rawBody) : {};
    }
    if (contentType.includes("application/x-www-form-urlencoded")) {
        return Object.fromEntries(new URLSearchParams(rawBody));
    }
    if (!rawBody) return {};

    try {
        return JSON.parse(rawBody);
    } catch (error) {
        return Object.fromEntries(new URLSearchParams(rawBody));
    }
}

function splitName(payload) {
    const read = makeFieldReader(payload);
    const suppliedFirst = safeString(read("first_name", "firstName"), 80);
    const suppliedLast = safeString(read("last_name", "lastName"), 80);

    if (suppliedFirst || suppliedLast) {
        return {
            firstName: suppliedFirst,
            lastName: suppliedLast || suppliedFirst || "Website Lead",
        };
    }

    const fullName = safeString(read("full_name", "fullName", "name", "clientName"), 160);
    const parts = fullName.split(/\s+/).filter(Boolean);
    if (parts.length <= 1) {
        return { firstName: "", lastName: parts[0] || "Website Lead" };
    }

    return {
        firstName: parts.slice(0, -1).join(" "),
        lastName: parts.at(-1),
    };
}

function normalizePhone(value) {
    const digits = safeString(value, 30).replace(/\D/g, "");
    return digits.length === 11 && digits.startsWith("1") ? digits.slice(1) : digits;
}

function buildLead(payload, attribution) {
    const read = makeFieldReader(payload);
    const { firstName, lastName } = splitName(payload);
    const phone = safeString(read("phone", "mobile", "phoneNumber"), 30);
    const email = safeString(read("email", "clientEmail"), 255).toLowerCase();
    const projectType = safeString(
        read("project_type", "projectType", "projectCategory", "service", "offer"),
        255
    );
    const directDescription = safeString(
        read("description", "message", "projectDetails", "details", "body"),
        6000
    );

    const reservedKeys = new Set(
        [
            "firstname", "lastname", "fullname", "name", "clientname", "phone", "mobile",
            "phonenumber", "email", "clientemail", "street", "address", "clientaddress",
            "city", "state", "zip", "zipcode", "postalcode", "projecttype", "projectcategory",
            "service", "offer", "description", "message", "projectdetails", "details", "body",
            "page", "pageurl", "url", "utmsource", "utmmedium", "utmcampaign", "gclid",
            "formname", "botfield", "company", "honey", "captcha", "template", "subject", "next",
        ].map(normalizedKey)
    );

    const extraDetails = Object.entries(payload || {})
        .filter(([key, value]) => !reservedKeys.has(normalizedKey(key)) && safeString(value))
        .slice(0, 30)
        .map(([key, value]) => `${safeString(key, 80)}: ${safeString(value, 500)}`);

    const descriptionLines = [
        projectType && `Project Type: ${projectType}`,
        directDescription && `Customer Message: ${directDescription}`,
        attribution.pageUrl && `Page URL: ${attribution.pageUrl}`,
        attribution.utmSource && `UTM Source: ${attribution.utmSource}`,
        attribution.utmMedium && `UTM Medium: ${attribution.utmMedium}`,
        attribution.utmCampaign && `UTM Campaign: ${attribution.utmCampaign}`,
        attribution.gclid && `GCLID: ${attribution.gclid}`,
        ...extraDetails,
    ].filter(Boolean);

    return {
        firstName,
        lastName,
        phone,
        normalizedPhone: normalizePhone(phone),
        email,
        street: safeString(read("street", "address", "clientAddress"), 255),
        city: safeString(read("city"), 100),
        state: safeString(read("state"), 100) || "KY",
        zip: safeString(read("zip", "zipCode", "zip_code", "postalCode"), 20),
        projectType,
        description: descriptionLines.join("\n").slice(0, 20_000),
        attribution,
    };
}

function addIfPresent(target, key, value) {
    if (key && value !== "" && value !== undefined && value !== null) target[key] = value;
}

function buildZohoRecord(lead, { isUpdate = false, existingDescription = "" } = {}) {
    const record = {
        Last_Name: lead.lastName || "Website Lead",
        Lead_Source: process.env.ZOHO_LEAD_SOURCE || "Website",
    };

    addIfPresent(record, "First_Name", lead.firstName);
    addIfPresent(record, "Phone", lead.phone);
    addIfPresent(record, "Email", lead.email);
    addIfPresent(record, "Street", lead.street);
    addIfPresent(record, "City", lead.city);
    addIfPresent(record, "State", lead.state);
    addIfPresent(record, "Zip_Code", lead.zip);
    addIfPresent(record, "Company", process.env.ZOHO_DEFAULT_COMPANY || "Residential Homeowner");
    if (!isUpdate) addIfPresent(record, "Lead_Status", process.env.ZOHO_NEW_LEAD_STATUS || "New Lead");

    const description = [safeString(existingDescription, 10_000), lead.description]
        .filter(Boolean)
        .join("\n\n--- New website submission ---\n")
        .slice(-20_000);
    addIfPresent(record, "Description", description);

    [
        [process.env.ZOHO_FIELD_PROJECT_TYPE, lead.projectType],
        [process.env.ZOHO_FIELD_PAGE_URL, lead.attribution.pageUrl],
        [process.env.ZOHO_FIELD_UTM_SOURCE, lead.attribution.utmSource],
        [process.env.ZOHO_FIELD_UTM_MEDIUM, lead.attribution.utmMedium],
        [process.env.ZOHO_FIELD_UTM_CAMPAIGN, lead.attribution.utmCampaign],
        [process.env.ZOHO_FIELD_GCLID, lead.attribution.gclid],
    ].forEach(([apiName, value]) => addIfPresent(record, apiName, value));

    return record;
}

async function fetchWithTimeout(url, options = {}) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
    try {
        return await fetch(url, { ...options, signal: controller.signal });
    } finally {
        clearTimeout(timer);
    }
}

function hasZohoCredentials() {
    return Boolean(
        process.env.ZOHO_CLIENT_ID &&
            process.env.ZOHO_CLIENT_SECRET &&
            process.env.ZOHO_REFRESH_TOKEN
    );
}

async function getZohoAccess() {
    const accountsDomain = process.env.ZOHO_ACCOUNTS_DOMAIN || "https://accounts.zoho.com";
    const params = new URLSearchParams({
        refresh_token: process.env.ZOHO_REFRESH_TOKEN,
        client_id: process.env.ZOHO_CLIENT_ID,
        client_secret: process.env.ZOHO_CLIENT_SECRET,
        grant_type: "refresh_token",
    });
    const response = await fetchWithTimeout(`${accountsDomain}/oauth/v2/token`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok || !data.access_token) throw new Error(`Zoho OAuth failed (${response.status}).`);

    return {
        token: data.access_token,
        apiDomain: process.env.ZOHO_API_DOMAIN || data.api_domain || "https://www.zohoapis.com",
    };
}

async function zohoRequest(access, path, options = {}) {
    const response = await fetchWithTimeout(`${access.apiDomain}/crm/v8${path}`, {
        ...options,
        headers: {
            Authorization: `Zoho-oauthtoken ${access.token}`,
            "Content-Type": "application/json",
            ...(options.headers || {}),
        },
    });
    if (response.status === 204) return null;
    const data = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(`Zoho CRM request failed (${response.status}).`);
    return data;
}

function exactLeadMatch(records, lead, type) {
    return (records || []).find((record) => {
        if (type === "phone") {
            return [record.Phone, record.Mobile]
                .map(normalizePhone)
                .filter(Boolean)
                .includes(lead.normalizedPhone);
        }
        return safeString(record.Email).toLowerCase() === lead.email;
    });
}

async function findExistingLead(access, lead) {
    if (lead.normalizedPhone) {
        const byPhone = await zohoRequest(
            access,
            `/Leads/search?phone=${encodeURIComponent(lead.normalizedPhone)}`,
            { method: "GET" }
        );
        const match = exactLeadMatch(byPhone?.data, lead, "phone");
        if (match) return match;
    }
    if (lead.email) {
        const byEmail = await zohoRequest(
            access,
            `/Leads/search?email=${encodeURIComponent(lead.email)}`,
            { method: "GET" }
        );
        const match = exactLeadMatch(byEmail?.data, lead, "email");
        if (match) return match;
    }
    return null;
}

function assertZohoSuccess(response, action) {
    const result = response?.data?.[0];
    if (!result || result.status !== "success") {
        throw new Error(`Zoho CRM could not ${action} the lead.`);
    }
    return result;
}

async function upsertZohoLead(lead) {
    const access = await getZohoAccess();
    const existing = await findExistingLead(access, lead);

    if (existing?.id) {
        const response = await zohoRequest(access, `/Leads/${existing.id}`, {
            method: "PUT",
            body: JSON.stringify({
                data: [buildZohoRecord(lead, { isUpdate: true, existingDescription: existing.Description })],
                trigger: ["workflow"],
            }),
        });
        assertZohoSuccess(response, "update");
        return { action: "updated", id: existing.id };
    }

    const payload = { data: [buildZohoRecord(lead)], trigger: ["workflow"] };
    if (process.env.ZOHO_ASSIGNMENT_RULE_ID) payload.lar_id = process.env.ZOHO_ASSIGNMENT_RULE_ID;
    const response = await zohoRequest(access, "/Leads", {
        method: "POST",
        body: JSON.stringify(payload),
    });
    const result = assertZohoSuccess(response, "create");
    return { action: "created", id: result.details?.id };
}

function zohoWebformProjectType(projectType) {
    const value = safeString(projectType, 255).toLowerCase();
    if (!value) return "";
    if (value.includes("deck") || value.includes("patio") || value.includes("pergola")) return "Deck";
    if (value.includes("fence")) return "Fence";
    if (value.includes("siding")) return "Siding";
    if (value.includes("window")) return "Windows";
    if (value.includes("door")) return "Doors";
    if (value.includes("concrete")) return "Concrete";
    if (value.includes("roof")) return "Roofing";
    if (value.includes("gutter")) return "Gutters";
    if (value.includes("repair")) return "Repair";
    return "Other";
}

async function submitZohoWebform(lead) {
    if (!process.env.ZOHO_WEBFORM_XNQSJSDP || !process.env.ZOHO_WEBFORM_XMIWTLD) {
        throw new Error("Zoho webform is not configured.");
    }
    const params = new URLSearchParams({
        xnQsjsdp: process.env.ZOHO_WEBFORM_XNQSJSDP,
        xmIwtLD: process.env.ZOHO_WEBFORM_XMIWTLD,
        actionType: "TGVhZHM=",
        returnURL: "null",
        zc_gad: lead.attribution.gclid,
        "First Name": lead.firstName,
        "Last Name": lead.lastName || "Website Lead",
        Email: lead.email,
        Phone: lead.phone,
        Street: lead.street,
        City: lead.city,
        State: lead.state,
        "Zip Code": lead.zip,
        LEADCF1: zohoWebformProjectType(lead.projectType),
        Description: lead.description,
        LEADCF6: lead.attribution.pageUrl,
        LEADCF3: lead.attribution.utmSource,
        LEADCF4: lead.attribution.utmMedium,
        LEADCF5: lead.attribution.utmCampaign,
        LEADCF7: lead.attribution.gclid,
        "Lead Status": process.env.ZOHO_NEW_LEAD_STATUS || "New Lead",
        aG9uZXlwb3Q: "",
    });

    const response = await fetchWithTimeout(
        process.env.ZOHO_WEBFORM_URL || DEFAULT_ZOHO_WEBFORM_URL,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Origin: "https://yellowstonerenovation.com",
                Referer: "https://yellowstonerenovation.com/",
            },
            body: params.toString(),
        }
    );
    const body = await response.text();
    if (!response.ok || !body.includes("wf_thankyoumessage")) {
        throw new Error(`Zoho webform failed (${response.status}).`);
    }
    return { action: "created" };
}

function backupEmailBody(lead) {
    return [
        `Name: ${[lead.firstName, lead.lastName].filter(Boolean).join(" ")}`,
        `Phone: ${lead.phone || "Not provided"}`,
        `Email: ${lead.email || "Not provided"}`,
        `Address: ${[lead.street, lead.city, lead.state, lead.zip].filter(Boolean).join(", ")}`,
        lead.description,
    ].filter(Boolean).join("\n");
}

async function sendBackupEmail(lead) {
    const recipient = process.env.LEAD_NOTIFICATION_EMAIL || DEFAULT_BACKUP_EMAIL;
    const fullName = [lead.firstName, lead.lastName].filter(Boolean).join(" ") || "Website Lead";
    const subject = `New Website Lead — ${fullName}${lead.projectType ? ` — ${lead.projectType}` : ""}`;
    const text = backupEmailBody(lead);

    if (process.env.SENDGRID_API_KEY && process.env.SENDGRID_FROM_EMAIL) {
        try {
            const sgMail = require("@sendgrid/mail");
            sgMail.setApiKey(process.env.SENDGRID_API_KEY);
            await sgMail.send({
                to: recipient,
                from: process.env.SENDGRID_FROM_EMAIL,
                replyTo: lead.email || process.env.SENDGRID_FROM_EMAIL,
                subject,
                text,
            });
            return { provider: "sendgrid" };
        } catch (error) {
            console.error("SendGrid backup failed; trying fallback", error.message);
        }
    }

    const formSubmitUrl =
        process.env.LEAD_BACKUP_FORMSUBMIT_URL ||
        `https://formsubmit.co/ajax/${encodeURIComponent(recipient)}`;
    const response = await fetchWithTimeout(formSubmitUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
            _subject: subject,
            _template: "table",
            name: fullName,
            phone: lead.phone,
            email: lead.email,
            project_type: lead.projectType,
            details: text,
        }),
    });
    const responseData = await response.json().catch(() => ({}));
    if (
        !response.ok ||
        responseData.success === false ||
        String(responseData.success).toLowerCase() === "false"
    ) {
        throw new Error(`Backup email failed (${response.status}).`);
    }
    return { provider: "formsubmit" };
}

function redirectPath(payload) {
    const requested = safeString(makeFieldReader(payload)("_next", "next"), 1000);
    if (!requested) return "/thank-you/";
    try {
        const parsed = new URL(requested, "https://yellowstonerenovation.com");
        const allowedHosts = new Set(["yellowstonerenovation.com", "www.yellowstonerenovation.com"]);
        return allowedHosts.has(parsed.hostname)
            ? `${parsed.pathname}${parsed.search}${parsed.hash}`
            : "/thank-you/";
    } catch (error) {
        return "/thank-you/";
    }
}

exports.handler = async (event) => {
    if (event.httpMethod === "OPTIONS") {
        return { statusCode: 204, headers: { Allow: "POST, OPTIONS" }, body: "" };
    }
    if (event.httpMethod !== "POST") {
        return jsonResponse(405, { success: false, error: "Method not allowed." }, { Allow: "POST, OPTIONS" });
    }

    let payload;
    try {
        payload = parseRequestBody(event);
    } catch (error) {
        return jsonResponse(error.statusCode || 400, {
            success: false,
            error: error.statusCode === 413 ? error.message : "Invalid submission.",
        });
    }

    const read = makeFieldReader(payload);
    if (safeString(read("bot-field", "_honey", "honey", "company"))) {
        return jsonResponse(200, { success: true });
    }

    const lead = buildLead(payload, getAttribution(event, payload));
    if (!lead.phone && !lead.email) {
        return jsonResponse(400, {
            success: false,
            error: "A phone number or email address is required.",
        });
    }

    const [crmResult, emailResult] = await Promise.allSettled([
        hasZohoCredentials()
            ? upsertZohoLead(lead)
            : submitZohoWebform(lead),
        sendBackupEmail(lead),
    ]);
    const crmSucceeded = crmResult.status === "fulfilled";
    const emailSucceeded = emailResult.status === "fulfilled";

    if (!crmSucceeded && !emailSucceeded) {
        console.error("Lead delivery failed", {
            crm: crmResult.reason?.message,
            email: emailResult.reason?.message,
        });
        return jsonResponse(502, {
            success: false,
            error: "We could not submit your request. Please call (859) 765-7267.",
        });
    }
    if (!crmSucceeded) console.error("Zoho lead delivery failed", crmResult.reason?.message);
    if (!emailSucceeded) console.error("Lead backup email failed", emailResult.reason?.message);

    const contentType = String(
        event.headers?.["content-type"] || event.headers?.["Content-Type"] || ""
    ).toLowerCase();
    if (contentType.includes("application/x-www-form-urlencoded")) {
        const location = redirectPath(payload);
        return {
            statusCode: 303,
            headers: {
                Location: location,
                Refresh: `0; url=${location}`,
                "Content-Type": "text/html; charset=utf-8",
                "Cache-Control": "no-store",
            },
            body: `<!doctype html><html><head><meta charset="utf-8"><meta http-equiv="refresh" content="0;url=${location}"><title>Thank you</title></head><body><p>Thank you. Redirecting…</p><p><a href="${location}">Continue</a></p></body></html>`,
        };
    }

    return jsonResponse(crmSucceeded ? 200 : 202, {
        success: true,
        crm: crmSucceeded ? crmResult.value.action : "email_backup_only",
    });
};

exports._test = {
    buildLead,
    buildZohoRecord,
    getAttribution,
    normalizePhone,
    parseRequestBody,
    redirectPath,
    submitZohoWebform,
    zohoWebformProjectType,
};
