import "./src/styles/global.css";

const ATTRIBUTION_COOKIE = "yellowstone_lead_attribution";
const ATTRIBUTION_KEYS = {
  utm_source: "utmSource",
  utm_medium: "utmMedium",
  utm_campaign: "utmCampaign",
  gclid: "gclid",
};

function captureLeadAttribution() {
  if (typeof window === "undefined") return;

  let values = {};
  const existingCookie = document.cookie
    .split(";")
    .map((part) => part.trim())
    .find((part) => part.startsWith(`${ATTRIBUTION_COOKIE}=`));

  if (existingCookie) {
    try {
      values = JSON.parse(
        decodeURIComponent(existingCookie.slice(ATTRIBUTION_COOKIE.length + 1))
      );
    } catch (error) {
      values = {};
    }
  }

  const params = new URLSearchParams(window.location.search);
  let foundAttribution = false;

  Object.entries(ATTRIBUTION_KEYS).forEach(([queryKey, storedKey]) => {
    const value = params.get(queryKey);
    if (value) {
      values[storedKey] = value.slice(0, 255);
      foundAttribution = true;
    }
  });

  if (!foundAttribution) return;

  document.cookie = `${ATTRIBUTION_COOKIE}=${encodeURIComponent(
    JSON.stringify(values)
  )}; Max-Age=7776000; Path=/; SameSite=Lax; Secure`;
}

export const onClientEntry = captureLeadAttribution;
export const onRouteUpdate = captureLeadAttribution;
