const test = require("node:test");
const assert = require("node:assert/strict");
const { handler, _test } = require("../netlify/functions/submit-lead");

const ORIGINAL_ENV = { ...process.env };
const ORIGINAL_FETCH = global.fetch;

function response(status, data = {}) {
    return {
        status,
        ok: status >= 200 && status < 300,
        json: async () => data,
        text: async () =>
            typeof data === "string" ? data : JSON.stringify(data),
    };
}

function event(payload, headers = {}) {
    return {
        httpMethod: "POST",
        headers: { "content-type": "application/json", ...headers },
        body: JSON.stringify(payload),
        isBase64Encoded: false,
    };
}

function configureZoho() {
    process.env.ZOHO_CLIENT_ID = "test-client";
    process.env.ZOHO_CLIENT_SECRET = "test-secret";
    process.env.ZOHO_REFRESH_TOKEN = "test-refresh";
    process.env.ZOHO_FIELD_PROJECT_TYPE = "Project_Type";
    process.env.ZOHO_FIELD_PAGE_URL = "Page_URL";
    process.env.ZOHO_FIELD_UTM_SOURCE = "UTM_Source";
    process.env.ZOHO_FIELD_UTM_MEDIUM = "UTM_Medium";
    process.env.ZOHO_FIELD_UTM_CAMPAIGN = "UTM_Campaign";
    process.env.ZOHO_FIELD_GCLID = "Google_Click_ID";
    delete process.env.SENDGRID_API_KEY;
    delete process.env.SENDGRID_FROM_EMAIL;
}

function createFetchMock({ duplicate } = {}) {
    const calls = [];
    const mock = async (url, options = {}) => {
        calls.push({ url: String(url), options });

        if (String(url).includes("/oauth/v2/token")) {
            return response(200, {
                access_token: "test-access-token",
                api_domain: "https://www.zohoapis.com",
            });
        }
        if (String(url).includes("/Leads/search?phone=")) {
            return duplicate
                ? response(200, {
                      data: [
                          {
                              id: "1234567890",
                              Phone: "(859) 765-7267",
                              Email: "existing@example.com",
                              Description: "Earlier request",
                          },
                      ],
                  })
                : response(204);
        }
        if (String(url).includes("/Leads/search?email=")) return response(204);
        if (String(url).includes("/crm/v8/Leads/1234567890")) {
            return response(200, { data: [{ status: "success", details: { id: "1234567890" } }] });
        }
        if (String(url).endsWith("/crm/v8/Leads")) {
            return response(201, { data: [{ status: "success", details: { id: "new-lead-id" } }] });
        }
        if (String(url).includes("formsubmit.co")) return response(200, { success: true });

        throw new Error(`Unexpected URL: ${url}`);
    };
    return { mock, calls };
}

test.afterEach(() => {
    process.env = { ...ORIGINAL_ENV };
    global.fetch = ORIGINAL_FETCH;
});

test("creates a normal Zoho lead with address and attribution", async () => {
    configureZoho();
    const { mock, calls } = createFetchMock();
    global.fetch = mock;

    const result = await handler(
        event(
            {
                firstName: "John",
                lastName: "Smith",
                phone: "(859) 555-0101",
                email: "John@example.com",
                street: "123 Main St",
                city: "Lexington",
                zipCode: "40502",
                projectType: "Composite Deck",
                message: "Replace an old deck",
            },
            {
                referer: "https://yellowstonerenovation.com/decking/?utm_source=google&utm_medium=cpc&utm_campaign=decks&gclid=abc123",
            }
        )
    );

    assert.equal(result.statusCode, 200);
    const createCall = calls.find((call) => call.url.endsWith("/crm/v8/Leads"));
    const zohoRecord = JSON.parse(createCall.options.body).data[0];
    assert.equal(zohoRecord.First_Name, "John");
    assert.equal(zohoRecord.Last_Name, "Smith");
    assert.equal(zohoRecord.Project_Type, "Composite Deck");
    assert.equal(zohoRecord.UTM_Source, "google");
    assert.equal(zohoRecord.Google_Click_ID, "abc123");
});

test("uses the Zoho webform when OAuth credentials are not configured", async () => {
    delete process.env.ZOHO_CLIENT_ID;
    delete process.env.ZOHO_CLIENT_SECRET;
    delete process.env.ZOHO_REFRESH_TOKEN;
    delete process.env.SENDGRID_API_KEY;
    delete process.env.SENDGRID_FROM_EMAIL;
    process.env.ZOHO_WEBFORM_XNQSJSDP = "test-public-form-id";
    process.env.ZOHO_WEBFORM_XMIWTLD = "test-public-form-token";
    const calls = [];
    global.fetch = async (url, options = {}) => {
        calls.push({ url: String(url), options });
        if (String(url).includes("crm.zoho.com/crm/WebToLeadForm")) {
            return response(200, '<div id="wf_thankyoumessage">Thank you</div>');
        }
        if (String(url).includes("formsubmit.co")) {
            return response(200, { success: "false" });
        }
        throw new Error(`Unexpected URL: ${url}`);
    };

    const result = await handler(
        event(
            { name: "Webform Test", phone: "8595550105", projectType: "Composite deck" },
            { referer: "https://yellowstonerenovation.com/decking/?utm_source=google&gclid=click-1" }
        )
    );

    assert.equal(result.statusCode, 200);
    assert.equal(JSON.parse(result.body).crm, "created");
    const call = calls.find((item) => item.url.includes("WebToLeadForm"));
    const fields = new URLSearchParams(call.options.body);
    assert.equal(fields.get("LEADCF1"), "Deck");
    assert.equal(fields.get("LEADCF6"), "https://yellowstonerenovation.com/decking/?utm_source=google&gclid=click-1");
    assert.equal(fields.get("LEADCF7"), "click-1");
});

test("native form submissions include a reliable thank-you redirect", async () => {
    delete process.env.ZOHO_CLIENT_ID;
    delete process.env.ZOHO_CLIENT_SECRET;
    delete process.env.ZOHO_REFRESH_TOKEN;
    delete process.env.SENDGRID_API_KEY;
    delete process.env.SENDGRID_FROM_EMAIL;
    process.env.ZOHO_WEBFORM_XNQSJSDP = "test-public-form-id";
    process.env.ZOHO_WEBFORM_XMIWTLD = "test-public-form-token";
    global.fetch = async (url) => {
        if (String(url).includes("crm.zoho.com/crm/WebToLeadForm")) {
            return response(200, '<div id="wf_thankyoumessage">Thank you</div>');
        }
        return response(200, { success: true });
    };

    const result = await handler({
        httpMethod: "POST",
        headers: { "content-type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
            name: "Native Form Test",
            phone: "8595550106",
            _next: "https://yellowstonerenovation.com/thank-you/",
        }).toString(),
        isBase64Encoded: false,
    });

    assert.equal(result.statusCode, 303);
    assert.equal(result.headers.Location, "/thank-you/");
    assert.equal(result.headers.Refresh, "0; url=/thank-you/");
    assert.match(result.body, /http-equiv="refresh"/);
});

test("accepts a phone-only lead", async () => {
    configureZoho();
    const { mock } = createFetchMock();
    global.fetch = mock;

    const result = await handler(event({ phone: "8595550102", message: "Please call me" }));
    assert.equal(result.statusCode, 200);
    assert.equal(JSON.parse(result.body).success, true);
});

test("accepts a lead containing both phone and email", async () => {
    configureZoho();
    const { mock, calls } = createFetchMock();
    global.fetch = mock;

    const result = await handler(
        event({ name: "Jane Doe", phone: "8595550103", email: "jane@example.com" })
    );
    assert.equal(result.statusCode, 200);
    assert.ok(calls.some((call) => call.url.includes("/Leads/search?phone=")));
    assert.ok(calls.some((call) => call.url.includes("/Leads/search?email=")));
});

test("preserves submitted photo references in the lead description", () => {
    const attribution = { pageUrl: "", utmSource: "", utmMedium: "", utmCampaign: "", gclid: "" };
    const lead = _test.buildLead(
        {
            name: "Photo Customer",
            phone: "8595550104",
            photos: ["deck-before.jpg", "deck-damage.jpg"],
        },
        attribution
    );
    assert.match(lead.description, /deck-before\.jpg/);
    assert.match(lead.description, /deck-damage\.jpg/);
});

test("updates an exact phone duplicate instead of creating another lead", async () => {
    configureZoho();
    const { mock, calls } = createFetchMock({ duplicate: true });
    global.fetch = mock;

    const result = await handler(
        event({ name: "Existing Customer", phone: "1-859-765-7267", message: "Second request" })
    );
    assert.equal(result.statusCode, 200);
    assert.equal(JSON.parse(result.body).crm, "updated");
    assert.ok(calls.some((call) => call.url.endsWith("/crm/v8/Leads/1234567890")));
    assert.equal(
        calls.filter((call) => call.url.endsWith("/crm/v8/Leads")).length,
        0
    );
});
