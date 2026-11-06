// lib/telemetry.js
const ANALYTICS_ENDPOINT =
    process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT ||
    "https://www.gaavconnect.in/api/external-metrics/zapiya";

export function trackZapiyaEvent(action = "view", meta = {}) {
    if (typeof window === "undefined") return;

    try {
        const payload = {
            action,
            path: meta.path || window.location.pathname || "/",
            templateId: meta.templateId || "",
            referrer: meta.referrer || document.referrer || "",
            sessionId: meta.sessionId || getOrCreateSessionId(),
        };

        const json = JSON.stringify(payload);

        // Prefer non-blocking sendBeacon
        if (navigator.sendBeacon) {
            const blob = new Blob([json], { type: "text/plain;charset=UTF-8" });
            const success = navigator.sendBeacon(ANALYTICS_ENDPOINT, blob);
            if (success) return;
        }

        // Fallback to fetch with keepalive
        fetch(ANALYTICS_ENDPOINT, {
            method: "POST",
            mode: "cors",
            keepalive: true,
            headers: {
                "Content-Type": "text/plain;charset=UTF-8",
            },
            body: json,
        }).catch(() => {});
    } catch {}
}

function getOrCreateSessionId() {
    try {
        const key = "zapiya_sid";
        let sid = sessionStorage.getItem(key);
        if (!sid) {
            sid = Math.random().toString(36).slice(2) + Date.now().toString(36);
            sessionStorage.setItem(key, sid);
        }
        return sid;
    } catch {
        return "";
    }
}

