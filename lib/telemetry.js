// lib/telemetry.js

const ANALYTICS_ENDPOINT =
    process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT ||
    "https://www.gaavconnect.in/api/external-metrics/zapiya";

/**
 * Checks whether the current session is a developer, testing, or automated environment.
 * If true, telemetry events are strictly suppressed to guarantee 100% clean production metrics.
 */
export function isDeveloperSession() {
    if (typeof window === "undefined") return true;

    try {
        const hostname = window.location.hostname || "";

        // 1. Localhost & private network testing
        if (
            hostname === "localhost" ||
            hostname === "127.0.0.1" ||
            hostname.endsWith(".local") ||
            hostname.startsWith("192.168.") ||
            hostname.startsWith("10.")
        ) {
            return true;
        }

        // 2. Automated testing frameworks (Playwright, Puppeteer, Selenium, WebDriver)
        if (
            navigator.webdriver ||
            window.__playwright ||
            window.__puppeteer ||
            window.Cypress
        ) {
            return true;
        }

        // 3. Headless browser or crawler user-agent
        const ua = navigator.userAgent || "";
        if (/HeadlessChrome|PhantomJS|Playwright|Puppeteer|Lighthouse|bot|crawler|spider/i.test(ua)) {
            return true;
        }

        // 4. URL query or hash override (?dev=true, ?admin=true, #dev, #admin)
        const params = new URLSearchParams(window.location.search);
        const hash = window.location.hash || "";
        if (
            params.get("dev") === "true" ||
            params.get("admin") === "true" ||
            params.get("internal") === "true" ||
            hash === "#dev" ||
            hash === "#admin"
        ) {
            try {
                localStorage.setItem("zapiya_dev_mode", "true");
            } catch {}
            return true;
        }

        // 5. Persistent developer flag in browser storage
        try {
            if (
                localStorage.getItem("zapiya_dev_mode") === "true" ||
                localStorage.getItem("admin_session") ||
                localStorage.getItem("is_admin") === "true" ||
                sessionStorage.getItem("zapiya_dev_mode") === "true"
            ) {
                return true;
            }
        } catch {}

        return false;
    } catch {
        return false;
    }
}

export function trackZapiyaEvent(action = "view", meta = {}) {
    if (typeof window === "undefined") return;

    // Filter out developer & internal testing sessions
    if (isDeveloperSession()) {
        if (process.env.NODE_ENV === "development") {
            console.log(`[Zapiya Telemetry Filtered] Ignored developer ${action} event:`, meta);
        }
        return;
    }

    try {
        const payload = {
            action,
            path: meta.path || window.location.pathname || "/",
            templateId: meta.templateId || "",
            referrer: meta.referrer || document.referrer || "",
            sessionId: meta.sessionId || getOrCreateSessionId(),
            timezone: meta.timezone || getClientTimezone(),
            language: meta.language || (typeof navigator !== "undefined" ? navigator.language : ""),
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

function getClientTimezone() {
    try {
        return Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    } catch {
        return "";
    }
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
