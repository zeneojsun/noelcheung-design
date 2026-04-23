/**
 * Generates public/cv.pdf from content/cv.md.
 * Run via: npm run build:cv
 * Requires puppeteer (no server needed — uses setContent).
 */

import puppeteer from "puppeteer";
import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import matter from "gray-matter";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const raw = readFileSync(join(root, "content", "cv.md"), "utf-8");
const { data: cv } = matter(raw);

const TOKENS = {
  bg: "#fafafa",
  surface: "#ffffff",
  text: "#111111",
  muted: "#6b6b6b",
  hairline: "#e8e8e8",
};

function row(label, value) {
  return `<tr>
    <td style="font-family:monospace;font-size:10px;text-transform:uppercase;letter-spacing:0.08em;color:${TOKENS.muted};padding:3px 10px 3px 0;vertical-align:top;white-space:nowrap;">${label}</td>
    <td style="font-size:12px;color:${TOKENS.text};padding:3px 0;vertical-align:top;">${value}</td>
  </tr>`;
}

function sectionLabel(text) {
  return `<p style="font-family:monospace;font-size:10px;text-transform:uppercase;letter-spacing:0.1em;color:${TOKENS.muted};margin:0 0 8px 0;">${text}</p>`;
}

function hairline() {
  return `<div style="border-top:1px solid ${TOKENS.hairline};margin:14px 0;"></div>`;
}

function expBlock(exp) {
  const bullets = exp.bullets
    ? exp.bullets.map(b => `<li style="margin:2px 0;">${b}</li>`).join("")
    : exp.engagements
    ? exp.engagements.map(e => `<li style="margin:2px 0;"><strong>${e.client}</strong> — ${e.work}</li>`).join("") +
      (exp.recognition ? `<li style="margin:2px 0;">${exp.recognition}</li>` : "")
    : "";

  return `<div style="margin-bottom:10px;">
    <div style="display:flex;justify-content:space-between;align-items:baseline;gap:8px;">
      <div style="font-size:13px;">
        <strong>${exp.role}</strong>
        <span style="color:${TOKENS.muted}"> · ${exp.company}</span>
        ${exp.subtitle ? `<span style="color:${TOKENS.muted};font-size:11px;"> — ${exp.subtitle}</span>` : ""}
      </div>
      <span style="font-family:monospace;font-size:10px;color:${TOKENS.muted};white-space:nowrap;">${exp.period}</span>
    </div>
    ${bullets ? `<ul style="margin:4px 0 0 0;padding-left:12px;list-style:none;">${bullets}</ul>` : ""}
  </div>`;
}

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600&display=swap" rel="stylesheet">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html, body {
    background: ${TOKENS.bg};
    color: ${TOKENS.text};
    font-family: "Inter Tight", -apple-system, Helvetica, sans-serif;
    font-size: 13px;
    line-height: 1.55;
    -webkit-font-smoothing: antialiased;
  }
  @media print {
    html, body { background: white; }
    a { color: inherit; text-decoration: none; }
  }
  ul { list-style: none; padding: 0; }
  strong { font-weight: 500; }
</style>
</head>
<body>
<div style="max-width:760px;margin:0 auto;padding:28px 32px;">

  <!-- Header -->
  <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:14px;">
    <div>
      <h1 style="font-size:22px;font-weight:600;letter-spacing:-0.02em;line-height:1.1;margin-bottom:3px;">${cv.name}</h1>
      <p style="font-family:monospace;font-size:10px;text-transform:uppercase;letter-spacing:0.1em;color:${TOKENS.muted};">${cv.tagline}</p>
    </div>
    <table style="text-align:right;border-collapse:collapse;">
      ${row("Email", cv.contact.email)}
      ${row("Phone", cv.contact.phone)}
      ${row("Location", cv.contact.location)}
      ${row("Status", cv.contact.availability)}
    </table>
  </div>
  ${hairline()}

  <!-- Two-column body -->
  <div style="display:grid;grid-template-columns:1fr 220px;gap:24px;">

    <!-- Left column -->
    <div>

      <!-- Profile -->
      <div style="margin-bottom:14px;">
        ${sectionLabel("Profile")}
        ${cv.profile.trim().split("\n\n").map(p => `<p style="font-size:12px;line-height:1.65;margin-bottom:5px;color:${TOKENS.text};">${p.trim()}</p>`).join("")}
      </div>
      ${hairline()}

      <!-- Experience -->
      <div style="margin-bottom:14px;">
        ${sectionLabel("Experience")}
        ${cv.experience.map(expBlock).join("")}
      </div>
      ${hairline()}

      <!-- Earlier -->
      <div>
        ${sectionLabel("Earlier")}
        ${cv.early_career.map(e => `
          <div style="display:flex;justify-content:space-between;margin-bottom:6px;gap:8px;">
            <div>
              <span style="font-size:12px;font-weight:500;">${e.role}</span>
              <span style="color:${TOKENS.muted};font-size:11px;"> · ${e.company}</span>
              <p style="font-size:11px;color:${TOKENS.muted};margin-top:1px;">${e.note}</p>
            </div>
            <span style="font-family:monospace;font-size:10px;color:${TOKENS.muted};white-space:nowrap;">${e.period}</span>
          </div>
        `).join("")}
      </div>

    </div>

    <!-- Right column -->
    <div>

      <!-- Highlights -->
      <div style="margin-bottom:14px;">
        ${sectionLabel("Highlights")}
        ${cv.highlights.map(h => `
          <div style="margin-bottom:8px;padding-left:8px;border-left:2px solid ${TOKENS.hairline};">
            <div style="font-family:monospace;font-size:16px;font-weight:500;line-height:1;">${h.metric}</div>
            <div style="font-size:11px;color:${TOKENS.text};margin-top:2px;">${h.label}</div>
            <div style="font-size:10px;color:${TOKENS.muted};margin-top:1px;">${h.detail}</div>
          </div>
        `).join("")}
      </div>
      ${hairline()}

      <!-- Education -->
      <div style="margin-bottom:14px;">
        ${sectionLabel("Education")}
        ${cv.education.map(e => `
          <div style="margin-bottom:6px;">
            <div style="font-size:12px;font-weight:500;">${e.program}</div>
            <div style="font-size:11px;color:${TOKENS.muted};">${e.institution} · ${e.year}</div>
          </div>
        `).join("")}
      </div>
      ${hairline()}

      <!-- Tools -->
      <div style="margin-bottom:14px;">
        ${sectionLabel("Tools")}
        <div style="font-size:11px;line-height:1.6;">
          <div style="margin-bottom:4px;"><span style="color:${TOKENS.muted};">Design — </span>${cv.tools.product_design.join(", ")}</div>
          <div style="margin-bottom:4px;"><span style="color:${TOKENS.muted};">Systems — </span>${cv.tools.design_systems.join(", ")}</div>
          <div style="margin-bottom:4px;"><span style="color:${TOKENS.muted};">Engineering — </span>${cv.tools.engineering.join(", ")}</div>
        </div>
      </div>
      ${hairline()}

      <!-- Languages -->
      <div style="margin-bottom:14px;">
        ${sectionLabel("Languages")}
        ${cv.languages.map(l => `<div style="font-size:11px;line-height:1.6;">${l}</div>`).join("")}
      </div>
      ${hairline()}

      <!-- Credentials -->
      <div>
        ${sectionLabel("Recognition")}
        ${cv.credentials.map(c => `<div style="font-size:11px;line-height:1.6;">${c}</div>`).join("")}
      </div>

    </div>
  </div>

</div>
</body>
</html>`;

const executablePath =
  process.env.PUPPETEER_EXECUTABLE_PATH ||
  (process.platform === "darwin"
    ? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
    : undefined);

// Skip PDF generation in CI if no Chrome is available
if (!executablePath && process.env.CI) {
  console.log("⚠  Skipping PDF generation in CI (no Chrome path set)");
  process.exit(0);
}

const browser = await puppeteer.launch({ headless: true, executablePath });
const page = await browser.newPage();
await page.setContent(html, { waitUntil: "networkidle0" });
await page.pdf({
  path: join(root, "public", "cv.pdf"),
  format: "A4",
  margin: { top: "20mm", right: "20mm", bottom: "20mm", left: "20mm" },
  printBackground: true,
});
await browser.close();

console.log("✓ public/cv.pdf generated");
