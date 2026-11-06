// lib/device-download.js
/**
 * Cross-platform, device-safe instant 1-click download utility.
 * Solves iOS Safari / WebKit blocking programmatic downloads.
 * On desktop & Android: Triggers direct 1-click download to Downloads folder without opening print dialogs.
 * On iOS: Uses native Web Share sheet (Save to Files) or direct blob window.
 */

export function isIOSDevice() {
  if (typeof window === "undefined" || typeof navigator === "undefined") {
    return false;
  }
  return (
    /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
  );
}

export function isMobileDevice() {
  if (typeof window === "undefined" || typeof navigator === "undefined") {
    return false;
  }
  return (
    isIOSDevice() ||
    /Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  );
}

/**
 * Instant 1-click download for PDF blobs across all devices.
 * @param {Blob} blob - The PDF file blob.
 * @param {string} filename - Target filename (e.g. "alex-chase-resume.pdf").
 * @returns {Promise<boolean>}
 */
export async function downloadPdfOnAnyDevice(blob, filename = "resume.pdf") {
  if (!blob) return false;

  const isIOS = isIOSDevice();
  const mimeType = "application/pdf";

  // 1. Mobile iOS Web Share API (native Save to Files sheet)
  if (isIOS && typeof navigator !== "undefined" && typeof navigator.canShare === "function") {
    try {
      const file = new File([blob], filename, { type: mimeType });
      if (navigator.canShare({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: filename,
        });
        return true;
      }
    } catch (err) {
      if (err.name === "AbortError") {
        return true; // User cancelled share sheet
      }
      console.warn("iOS share sheet cancelled or failed, using fallback:", err);
    }
  }

  // 2. Direct Anchor Download (Desktop Chrome, Edge, Firefox, Mac & Android Mobile)
  // This triggers an immediate 1-click download to Downloads folder with zero folder prompt!
  try {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.rel = "noopener";

    if (isIOS) {
      a.target = "_blank";
    }

    document.body.appendChild(a);
    a.click();

    setTimeout(() => {
      try {
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      } catch (e) {}
    }, 4000);

    return true;
  } catch (err) {
    console.warn("Anchor download failed, trying new window fallback:", err);

    try {
      const fallbackUrl = URL.createObjectURL(blob);
      const newWin = window.open(fallbackUrl, "_blank");
      if (!newWin) {
        window.location.href = fallbackUrl;
      }
      return true;
    } catch (openErr) {
      console.error("All download methods failed:", openErr);
      return false;
    }
  }
}
