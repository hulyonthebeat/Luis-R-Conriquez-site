/**
 * Tiny, cookieless page-view tracker. Sends a fire-and-forget beacon to the
 * API on each page view. No cookies, no personal data — bot filtering and
 * (transient) geolocation happen server-side.
 */
const ENDPOINT = "/api/analytics/collect";
let firstView = true;

export function trackPageview(): void {
  if (typeof window === "undefined") return;
  try {
    const path = window.location.pathname || "/";
    // Only the first view of a session carries the external referrer; in-app
    // (SPA) navigations would otherwise keep reporting the original referrer.
    const referrer = firstView ? document.referrer || undefined : undefined;
    firstView = false;

    const payload = JSON.stringify({ path, referrer });
    if (navigator.sendBeacon) {
      navigator.sendBeacon(
        ENDPOINT,
        new Blob([payload], { type: "application/json" }),
      );
    } else {
      void fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: payload,
        keepalive: true,
      });
    }
  } catch {
    /* never let analytics break the page */
  }
}
