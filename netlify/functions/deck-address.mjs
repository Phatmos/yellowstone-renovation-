// Address suggestions use the public U.S. Census geocoder. No browser API key.
export default async function addressSuggestions(request) {
  const headers = { 'Cache-Control': 'no-store' };
  if (request.method !== 'POST') return Response.json({ error: 'Method not allowed.' }, { status: 405, headers: { ...headers, Allow: 'POST' } });
  try {
    const raw = await request.text();
    if (raw.length > 1000) return Response.json({ matches: [] }, { status: 413, headers });
    const { address } = JSON.parse(raw);
    if (typeof address !== 'string' || address.length < 10 || address.length > 250 || !/^\d/.test(address.trim())) return Response.json({ matches: [] }, { headers });
    const url = new URL('https://geocoding.geo.census.gov/geocoder/locations/onelineaddress');
    url.search = new URLSearchParams({ address, benchmark: 'Public_AR_Current', format: 'json' });
    const result = await fetch(url, { signal: AbortSignal.timeout(7000) });
    if (!result.ok) throw new Error('Address lookup unavailable');
    const body = await result.json();
    const matches = (body.result?.addressMatches || []).slice(0, 5).map(match => {
      const c = match.addressComponents || {};
      // fromAddress is the start of a street range, not the visitor's house number.
      const label = String(match.matchedAddress || '').slice(0, 250);
      return { label, street: label.split(',')[0].trim(), city: c.city || '', state: c.state || 'KY', zip: c.zip || '' };
    }).filter(match => match.label && match.street);
    return Response.json({ matches }, { headers });
  } catch {
    return Response.json({ matches: [], unavailable: true }, { headers });
  }
}

export const config = { rateLimit: { action: 'rate_limit', aggregateBy: 'ip', windowSize: 60, windowLimit: 25 } };
