// lib/pdf-generator.js
import { downloadPdfOnAnyDevice, isIOSDevice } from "./device-download";

/**
 * Polls for element in DOM if mounting asynchronously
 */
export async function waitForElement(elementId, maxWaitMs = 1500) {
  const start = Date.now();
  while (Date.now() - start < maxWaitMs) {
    const el = typeof document !== "undefined" ? document.getElementById(elementId) : null;
    if (el && (el.offsetHeight > 0 || el.offsetWidth > 0)) {
      return el;
    }
    await new Promise((r) => setTimeout(r, 40));
  }
  return typeof document !== "undefined" ? document.getElementById(elementId) : null;
}

/**
 * Generates an exact A4 PDF from a DOM element and triggers an instant 1-click download.
 * - Does NOT open window.print()
 * - Does NOT ask for folder locations on desktop (saves directly to Downloads)
 * - 100% works on mobile (Android direct download & iOS Save to Files / Share sheet)
 * - Eliminates accidental blank trailing pages
 *
 * @param {string} elementId - ID of the container element (e.g. "resume-preview-container")
 * @param {string} filename - Target file name (e.g. "alex-chase-resume.pdf")
 * @returns {Promise<boolean>}
 */
export async function generateAndDownloadPdf(elementId, filename = "resume.pdf") {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return false;
  }

  // Ensure element is mounted (e.g. if tab just switched)
  const element = await waitForElement(elementId);
  if (!element) {
    throw new Error(`Element #${elementId} not found in DOM`);
  }

  // Dynamically load html2canvas and jspdf for performance and zero SSR impact
  const [html2canvasModule, jsPdfModule] = await Promise.all([
    import("html2canvas"),
    import("jspdf"),
  ]);
  const html2canvas = html2canvasModule.default || html2canvasModule;
  const { jsPDF } = jsPdfModule;

  // Preserve styles
  const originalTransform = element.style.transform;
  const originalBoxShadow = element.style.boxShadow;
  const originalMarginBottom = element.style.marginBottom;

  try {
    // Reset any zoom or shadow temporarily to get pure unscaled 1:1 pixels
    element.style.transform = "none";
    element.style.boxShadow = "none";
    element.style.marginBottom = "0px";

    // Wait a brief tick for layout repaint
    await new Promise((r) => setTimeout(r, 60));

    const elementHeight = element.scrollHeight || element.offsetHeight || 1123;
    const isIOS = isIOSDevice();

    // Scale 2x for ultra-sharp retina typography, clamped if canvas would exceed iOS limits
    let scale = 2;
    if (isIOS && elementHeight * scale > 4000) {
      scale = Math.min(2, Math.max(1.2, Math.floor((4000 / elementHeight) * 10) / 10));
    }

    // Capture using html2canvas
    const canvas = await html2canvas(element, {
      scale: scale,
      useCORS: true,
      logging: false,
      backgroundColor: "#ffffff",
      scrollX: 0,
      scrollY: -window.scrollY,
      windowWidth: 1200,
      width: 794,
      height: elementHeight,
      onclone: (clonedDoc) => {
        const clonedEl = clonedDoc.getElementById(elementId);
        if (clonedEl) {
          clonedEl.style.transform = "none";
          clonedEl.style.boxShadow = "none";
          clonedEl.style.margin = "0";
          clonedEl.style.width = "794px";
        }
        // Hide editor guide seams, cursors or no-print indicators
        const seams = clonedDoc.querySelectorAll(".editor-seam, .no-print");
        seams.forEach((s) => {
          s.style.display = "none";
        });
      },
    });

    // A4 dimensions in mm (ISO 216: 210mm × 297mm)
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
      compress: true,
    });

    const pageWidth = 210; // A4 width in mm
    const pageHeight = 297; // A4 height in mm
    const imgHeight = (canvas.height * pageWidth) / canvas.width;

    const imgData = canvas.toDataURL("image/jpeg", 0.96);

    // If document is 1 page (or within 8% tolerance of 1 page due to padding/margins)
    // Scale or fit cleanly on exactly 1 page — ZERO blank second page!
    if (imgHeight <= pageHeight * 1.08) {
      const renderHeight = Math.min(pageHeight, imgHeight);
      pdf.addImage(imgData, "JPEG", 0, 0, pageWidth, renderHeight, undefined, "FAST");
    } else {
      // Real multi-page resume
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, "JPEG", 0, position, pageWidth, imgHeight, undefined, "FAST");
      heightLeft -= pageHeight;

      // Only add a new page if there is substantial content remaining (> 25mm = ~1 inch)
      while (heightLeft > 25) {
        position = position - pageHeight;
        pdf.addPage();
        pdf.addImage(imgData, "JPEG", 0, position, pageWidth, imgHeight, undefined, "FAST");
        heightLeft -= pageHeight;
      }
    }

    // Generate binary PDF Blob
    const blob = pdf.output("blob");

    // Execute instant 1-click device download
    const success = await downloadPdfOnAnyDevice(blob, filename);
    return success;
  } finally {
    // Restore original transform & zoom
    element.style.transform = originalTransform;
    element.style.boxShadow = originalBoxShadow;
    element.style.marginBottom = originalMarginBottom;
  }
}
