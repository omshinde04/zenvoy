import { chromium } from "playwright-core";
import fs from "fs";
import path from "path";
import { execSync } from "child_process";

async function main() {
    console.log("Launching browser for reel recording...");

    const videoDir = path.resolve("./recordings");
    if (!fs.existsSync(videoDir)) fs.mkdirSync(videoDir, { recursive: true });

    const browser = await chromium.launch({
        headless: true,
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    const context = await browser.newContext({
        viewport: { width: 1280, height: 720 },
        deviceScaleFactor: 2,
        recordVideo: {
            dir: videoDir,
            size: { width: 1280, height: 720 },
        },
    });

    const page = await context.newPage();

    console.log("Setting up virtual cursor helper...");
    await page.addInitScript(() => {
        window.addEventListener("DOMContentLoaded", () => {
            const cursor = document.createElement("div");
            cursor.id = "playwright-fake-cursor";
            cursor.style.position = "fixed";
            cursor.style.top = "0";
            cursor.style.left = "0";
            cursor.style.width = "22px";
            cursor.style.height = "22px";
            cursor.style.borderRadius = "50%";
            cursor.style.backgroundColor = "rgba(79, 70, 229, 0.85)";
            cursor.style.border = "2px solid white";
            cursor.style.boxShadow = "0 2px 8px rgba(0,0,0,0.3)";
            cursor.style.pointerEvents = "none";
            cursor.style.zIndex = "999999";
            cursor.style.transition = "transform 0.15s ease-out, background-color 0.1s ease";
            cursor.style.transform = "translate(-100px, -100px)";
            document.body.appendChild(cursor);

            window.moveCursorTo = (x, y) => {
                cursor.style.transform = `translate(${x}px, ${y}px)`;
            };
            window.clickCursor = () => {
                cursor.style.backgroundColor = "rgba(239, 68, 68, 0.9)";
                setTimeout(() => {
                    cursor.style.backgroundColor = "rgba(79, 70, 229, 0.85)";
                }, 200);
            };
        });
    });

    const smoothMove = async (toX, toY, steps = 15) => {
        await page.mouse.move(toX, toY, { steps });
        await page.evaluate(({ x, y }) => window.moveCursorTo && window.moveCursorTo(x, y), { x: toX, y: toY });
    };

    const smoothClick = async (x, y) => {
        await smoothMove(x, y, 10);
        await page.evaluate(() => window.clickCursor && window.clickCursor());
        await page.mouse.click(x, y);
    };

    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

    // =========================================================================
    // SCENE 1 (0s - 7s): THE FAKE PAYWALL PROBLEM
    // Voiceover: "मित्रांनो, इंटरनेटवर २ तास मेहनत करून रेझ्युमे बनवायचा... आणि शेवटी डाउनलोडवर क्लिक केल्यावर वेबसाइट म्हणते — 'आधी क्रेडिट कार्ड टाका आणि पंधराशे रुपयांचं सबस्क्रिप्शन घ्या!' हे तुमच्यासोबतही घडलंय ना?"
    // =========================================================================
    console.log("Recording Scene 1: Fake paywall frustration...");
    await page.goto("https://www.zapiya.com", { waitUntil: "networkidle" });

    // Inject simulated fake commercial resume paywall modal
    await page.evaluate(() => {
        const modal = document.createElement("div");
        modal.id = "fake-paywall-modal";
        modal.style.position = "fixed";
        modal.style.inset = "0";
        modal.style.zIndex = "99999";
        modal.style.backgroundColor = "rgba(15, 23, 42, 0.85)";
        modal.style.backdropFilter = "blur(8px)";
        modal.style.display = "flex";
        modal.style.alignItems = "center";
        modal.style.justifyContent = "center";
        modal.innerHTML = `
            <div style="background: white; border-radius: 24px; padding: 36px; max-width: 480px; text-align: center; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.4); border: 2px solid #ef4444; font-family: sans-serif;">
                <div style="font-size: 40px; margin-bottom: 12px;">🔒</div>
                <h2 style="font-size: 24px; font-weight: 800; color: #0f172a; margin: 0 0 8px 0;">Subscription Required to Download</h2>
                <p style="font-size: 14px; color: #64748b; margin: 0 0 20px 0;">To export your high-resolution ATS resume without watermarks, start your 14-day trial:</p>
                <div style="background: #fef2f2; border: 1px solid #fecaca; border-radius: 16px; padding: 16px; margin-bottom: 20px;">
                    <div style="font-size: 32px; font-weight: 900; color: #dc2626;">₹1,499<span style="font-size: 14px; color: #64748b; font-weight: normal;"> / month</span></div>
                    <div style="font-size: 12px; color: #991b1b; font-weight: 600; margin-top: 4px;">Credit Card Required · Auto-renews</div>
                </div>
                <div style="display: flex; gap: 10px;">
                    <button id="fake-cancel-btn" style="flex: 1; padding: 12px; border-radius: 12px; border: 1px solid #cbd5e1; background: #f8fafc; font-weight: bold; color: #475569; cursor: pointer;">Cancel</button>
                    <button style="flex: 2; padding: 12px; border-radius: 12px; border: none; background: #dc2626; color: white; font-weight: bold; cursor: pointer;">Pay ₹1,499 Now</button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    });

    await smoothMove(640, 380, 20);
    await sleep(2500); // Wait while voiceover mentions the paywall frustration

    // Move cursor to "Cancel" button and dismiss the scam modal
    await smoothClick(480, 480);
    await page.evaluate(() => {
        const m = document.getElementById("fake-paywall-modal");
        if (m) m.remove();
    });
    await sleep(1500);

    // =========================================================================
    // SCENE 2 (7s - 19s): DISCOVER ZAPIYA (100% FREE & ZERO SIGNUP)
    // Voiceover: "आता हे फालतू स्कॅम बंद करा! गुगलवर जाऊन उघडा — zapiya.com. ही पूर्णपणे मोफत वेबसाइट आहे, जिथे कोणताही ईमेल किंवा अकाउंट न बनवता तुम्हाला ओरिजिनल Harvard Standard ATS Resume मिळतो."
    // =========================================================================
    console.log("Recording Scene 2: Zapiya homepage & free promise...");
    // Highlight top banner and "100% Free Forever" badge
    await smoothMove(640, 150, 15);
    await sleep(1000);

    // Smoothly scroll down to showcase Harvard ATS guarantee and free pillars
    await page.evaluate(() => window.scrollBy({ top: 380, behavior: "smooth" }));
    await smoothMove(450, 420, 15);
    await sleep(2500);

    // Move to "Build Free Resume on Classic ATS" button and click it
    await smoothClick(450, 320);
    await page.goto("https://www.zapiya.com/templates", { waitUntil: "networkidle" });
    await sleep(2000);

    // =========================================================================
    // SCENE 3 (19s - 33s): SELECT CLASSIC ATS (HARVARD 100% PASS)
    // Voiceover: "इथे फक्त Classic ATS फॉरमॅट निवडा. हा सिंगल-कॉलम रेझ्युमे गुगल, मायक्रोसॉफ्ट आणि टीसीएसच्या Workday आणि Greenhouse सारख्या सॉफ्टवेअरमध्ये १००% पास होतो — म्हणजेच तुमचा रेझ्युमे कधीही रिजेक्ट होणार नाही!"
    // =========================================================================
    console.log("Recording Scene 3: Templates gallery & Harvard Classic ATS...");
    // Hover on Classic ATS card with #1 Recruiter Choice badge
    await smoothMove(340, 260, 20);
    await sleep(1500);

    // Hover over 100% ATS Passed badge
    await smoothMove(420, 220, 15);
    await sleep(2000);

    // Scroll down slightly to show "Open Classic ATS Builder Free"
    await smoothMove(320, 560, 15);
    await sleep(1500);

    // Click "Open Classic ATS Builder Free" to enter the builder
    await smoothClick(320, 560);
    await page.goto("https://www.zapiya.com/builder/classic-ats", { waitUntil: "networkidle" });
    await sleep(2500);

    // =========================================================================
    // SCENE 4 (33s - 45s): BUILDER & COMPACT SPACING (STRICT 1-PAGE FIT)
    // Voiceover: "तुमची माहिती भरा. आणि सर्वात भारी गोष्ट — जर तुमचा डेटा जास्त असल्यामुळे रेझ्युमे २ पेजवर जात असेल, तर वर फक्त 'Compact Spacing' निवडा! एका सेकंदात तुमचा पूर्ण रेझ्युमे एकाच पानावर एकदम क्लीन आणि प्रोफेशनल सेट होतो."
    // =========================================================================
    console.log("Recording Scene 4: Builder editing & Compact spacing...");
    // Show live interactive resume preview
    await smoothMove(850, 350, 20);
    await sleep(2000);

    // Move to spacing control in top toolbar
    const spacingSelect = await page.$("select");
    if (spacingSelect) {
        const box = await spacingSelect.boundingBox();
        if (box) {
            await smoothMove(box.x + box.width / 2, box.y + box.height / 2, 15);
            await sleep(1000);
            await spacingSelect.selectOption("compact");
            await page.evaluate(() => window.clickCursor && window.clickCursor());
            console.log("Selected compact spacing!");
        }
    } else {
        // Fallback: look for spacing button/select
        await smoothMove(600, 70, 15);
        await sleep(1000);
    }
    await sleep(3000);

    // Highlight experience bullets in preview
    await smoothMove(880, 420, 15);
    await sleep(2500);

    // =========================================================================
    // SCENE 5 (45s - 53s): INSTANT VECTOR PDF DOWNLOAD (ZERO WATERMARKS)
    // Voiceover: "आता फक्त 'Download PDF' वर क्लिक करा... आणि बघा — कोणतीही फी नाही, कोणताही वॉटरमार्क नाही! थेट हाय-क्वालिटी ओरिजिनल PDF तुमच्या मोबाईलमध्ये डाऊनलोड!"
    // =========================================================================
    console.log("Recording Scene 5: Instant PDF download...");
    // Find "Download PDF" button in top toolbar
    const downloadBtn = await page.$('button:has-text("Download PDF")');
    if (downloadBtn) {
        const box = await downloadBtn.boundingBox();
        if (box) {
            await smoothMove(box.x + box.width / 2, box.y + box.height / 2, 20);
            await sleep(1200);
            await smoothClick(box.x + box.width / 2, box.y + box.height / 2);
        }
    }
    await sleep(4000); // Show generating animation & toast

    // =========================================================================
    // SCENE 6 (53s - 60s): OUTRO & CALL TO ACTION
    // Voiceover: "हा रील आत्ताच Save करा आणि नोकरी शोधणाऱ्या तुमच्या सर्व मित्रांना लगेच Share करा! लिंक बायोमध्ये दिली आहे — भेट द्या zapiya.com!"
    // =========================================================================
    console.log("Recording Scene 6: Outro & CTA...");
    await page.evaluate(() => {
        const ctaOverlay = document.createElement("div");
        ctaOverlay.style.position = "fixed";
        ctaOverlay.style.bottom = "30px";
        ctaOverlay.style.left = "50%";
        ctaOverlay.style.transform = "translateX(-50%)";
        ctaOverlay.style.zIndex = "999999";
        ctaOverlay.style.background = "linear-gradient(135deg, #0f172a, #312e81)";
        ctaOverlay.style.color = "white";
        ctaOverlay.style.padding = "16px 36px";
        ctaOverlay.style.borderRadius = "20px";
        ctaOverlay.style.border = "2px solid #6366f1";
        ctaOverlay.style.boxShadow = "0 20px 40px rgba(0,0,0,0.4)";
        ctaOverlay.style.fontFamily = "sans-serif";
        ctaOverlay.style.textAlign = "center";
        ctaOverlay.innerHTML = `
            <div style="font-size: 13px; font-weight: 700; color: #818cf8; letter-spacing: 1px; text-transform: uppercase;">100% Free ATS Resume Builder</div>
            <div style="font-size: 26px; font-weight: 900; margin-top: 2px;">Visit: zapiya.com</div>
            <div style="font-size: 12px; color: #a5b4fc; margin-top: 4px;">Save this Reel & Share with Job Seekers! 🚀</div>
        `;
        document.body.appendChild(ctaOverlay);
    });

    await smoothMove(640, 650, 15);
    await sleep(4500);

    console.log("Closing browser and finalizing video stream...");
    await context.close();
    await browser.close();

    // Locate the recorded webm/mp4 file
    const files = fs.readdirSync(videoDir).filter((f) => f.endsWith(".webm") || f.endsWith(".mp4"));
    if (files.length === 0) {
        throw new Error("No video file generated by Playwright");
    }

    const recordedFile = path.join(videoDir, files[files.length - 1]);
    console.log("Raw recording saved at:", recordedFile);

    const desktopOutputPath = "/Users/omshinde/Desktop/Zapiya_Instagram_Reel_Recording.mp4";
    console.log("Transcoding with ffmpeg to high-quality MP4 at:", desktopOutputPath);

    // Convert to universal high-compatibility H.264 MP4
    execSync(`/opt/homebrew/bin/ffmpeg -y -i "${recordedFile}" -c:v libx264 -preset slow -crf 18 -pix_fmt yuv420p "${desktopOutputPath}"`);

    console.log("SUCCESS! Video exported to:", desktopOutputPath);
}

main().catch((err) => {
    console.error("Recording error:", err);
    process.exit(1);
});
