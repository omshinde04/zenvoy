"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { trackZapiyaEvent } from "@/lib/telemetry";

export default function ZapiyaTracker() {
    const pathname = usePathname();
    const lastTrackedPath = useRef(null);

    useEffect(() => {
        if (!pathname) return;
        if (lastTrackedPath.current === pathname) return;

        lastTrackedPath.current = pathname;
        trackZapiyaEvent("view", { path: pathname });
    }, [pathname]);

    return null;
}

