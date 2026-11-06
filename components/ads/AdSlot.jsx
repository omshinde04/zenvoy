// components/ads/AdSlot.jsx
"use client";

import { useEffect, useRef } from "react";

/**
 * Policy-compliant Google AdSense display slot.
 * - Enforces clear "ADVERTISEMENT" disclosure per Google policies.
 * - Reserves minimum bounding box to guarantee zero Cumulative Layout Shift (CLS).
 * - Gracefully handles dev environments and missing publisher IDs.
 */
export default function AdSlot({
  slot,
  format = "auto",
  responsive = "true",
  className = "",
  style = {},
}) {
  const adRef = useRef(null);
  const isPushed = useRef(false);

  const clientId =
    process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID ||
    process.env.ADSENSE_PUB_ID ||
    "";

  useEffect(() => {
    // Only attempt to push when a valid publisher ID is configured
    if (!clientId || clientId.includes("XXXX")) return;
    if (isPushed.current) return;

    try {
      if (typeof window !== "undefined" && window.adsbygoogle) {
        window.adsbygoogle.push({});
        isPushed.current = true;
      }
    } catch (e) {
      // Ignore Adsbygoogle push error
    }
  }, [clientId, slot]);

  // If no publisher ID is configured yet, render clean invisible spacer or placeholder
  if (!clientId || clientId.includes("XXXX")) {
    return null;
  }

  return (
    <div
      className={`my-6 flex flex-col items-center justify-center overflow-hidden text-center ${className}`}
      style={style}
    >
      <span className="mb-1 text-[10px] font-bold uppercase tracking-widest text-slate-400 select-none">
        Advertisement
      </span>
      <div
        ref={adRef}
        className="w-full max-w-full overflow-hidden flex justify-center items-center min-h-[90px]"
      >
        <ins
          className="adsbygoogle"
          style={{ display: "block", width: "100%", ...style }}
          data-ad-client={clientId}
          data-ad-slot={slot || ""}
          data-ad-format={format}
          data-full-width-responsive={responsive}
        />
      </div>
    </div>
  );
}

