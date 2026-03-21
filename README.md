<div align="center">

<img src="Icon.svg" width="100" height="100" alt="Billz Icon"/>

# ⚡ Billz

**A beautiful, offline-first meter billing app for landlords.**
Generate, photo-proof, and share electricity + rent bills as WhatsApp-ready images — in seconds.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-F5A623?style=for-the-badge&logo=github)](https://br1jm0h4n.github.io/Billz/)
[![License](https://img.shields.io/badge/License-MIT-22D3A5?style=for-the-badge)](LICENSE)
[![No Build](https://img.shields.io/badge/No%20Build%20Step-Single%20HTML-3B82F6?style=for-the-badge)](index.html)
[![PWA Ready](https://img.shields.io/badge/PWA-Offline%20Ready-8B5CF6?style=for-the-badge)](index.html)

</div>

---

## 🎯 What is Billz?

If you're a landlord who manually calculates electricity + rent bills every month — this app was built for you. No spreadsheet. No calculator. No WhatsApp screenshots of handwritten notes.

Just open the app, type the new meter reading, attach photos of both meter states as proof, and share a **professional bill image** directly to WhatsApp.

Everything runs in your browser. No server. No account. No ads. Ever.

---

## ✨ Features

### ⚡ Live Bill Calculation
- Type the new meter reading — the bill calculates **instantly**
- Visual digit-box display mirrors a real electricity meter
- Shows units consumed, electricity charge, rent, and total in real time

### 📸 Dual Meter Photo Proof
- Attach **Previous Meter** and **Current Meter** photos as evidence
- Supports **Camera** (direct capture) or **Gallery** picker separately
- 50MP camera photos are automatically compressed to ~400KB before storage

### 🖼️ Share as Beautiful Bill Image
- Generates a **portrait JPEG** (1080px wide) — perfect for WhatsApp
- Includes: property name, tenant, billing month, digit-box meter display, both meter proof photos, bill breakdown, and a bold total
- Uses the native **Share Sheet** on Android & iOS — tap → WhatsApp, done

### 📂 Billing History
- Every saved bill is stored with full details and photos
- **Share any past bill** from history — tenant asks again? One tap
- Tap any record to view full detail and meter photos

### 🗄️ IndexedDB Storage
- All data stored locally on-device using **IndexedDB**
- Works offline after first load
- No data ever leaves your phone

### 💾 Compressed Backup (`.mbz`)
- Export all bills + settings as a compressed **`.mbz` file** (gzip)
- Typically **60–80% smaller** than plain JSON
- Import on any device — old `.json` backups still work too
- Perfect when switching phones

### ⚙️ One-time Setup
- Set property name, tenant name, electricity rate (₹/kWh), and monthly rent
- These auto-fill every bill from then on
- Last month's meter photo **auto-loads** as this month's "Previous Meter"

---

## 🚀 Getting Started

### Use the Live Demo

👉 **[https://br1jm0h4n.github.io/Billz/](https://br1jm0h4n.github.io/Billz/)**

Open it on your phone, add it to your home screen — it works like a native app.

### Self-Host in 2 Minutes

1. **Fork** this repo or download `index.html`
2. Push to any GitHub repo
3. Go to **Settings → Pages → Source: main branch** → Save
4. Your app is live at `https://yourusername.github.io/your-repo/`

That's it. There's no build step, no `npm install`, no dependencies. It's a single HTML file.

---

## 📱 First Time Setup

1. Open the app → tap **⚙️ Settings**
2. Enter your property name and tenant name
3. Set the electricity rate (₹ per kWh) and monthly rent
4. Enter your **current meter reading** as the baseline
5. Set the billing month → tap **Save Settings**

From next month onward, just open the app and type the new reading. Everything else is automatic.

---

## 🔄 Monthly Workflow

```
1. Open app  →  Reading tab
2. Type current meter reading
3. Bill calculates live ⚡
4. Tap "Generate & Share Bill"
5. Attach previous + current meter photos (📷 Camera or 🖼 Gallery)
6. Tap "Share Image" → WhatsApp
7. Tap "Save & Update Reading" — reading rolls over for next month
```

---

## 🗂️ Project Structure

```
Billz/
├── index.html     # The entire app — HTML, CSS, and JS in one file
├── Icon.svg       # App icon
├── manifest.json  # PWA web app manifest
├── sw.js          # Service worker (offline + cache updates)
├── pwa-register.js # Optional SW registration helper
└── README.md      # This file
```

No frameworks. No build tools. No `node_modules`. Fully self-contained.

---

## 📲 PWA Enablement (No `index.html` edits)

This repo includes a production-ready `manifest.json` and `sw.js`.

Because Billz intentionally keeps all UI/logic in one self-contained `index.html`, service worker registration is provided in `pwa-register.js` so hosts can wire it in **without touching app code**:

- **Nginx / Apache / Caddy**: inject `<script src="/pwa-register.js" defer></script>` at edge/proxy layer.
- **Hosting with HTML response transforms** (e.g., Cloudflare): inject the same script.
- Ensure `manifest.json` is discoverable (via `<link rel="manifest">` or HTTP `Link` header on HTML response).

Once wired, Billz behaves as an offline-first installable PWA and auto-updates cached assets.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| UI | Vanilla HTML + CSS |
| Logic | Vanilla JavaScript (ES2022) |
| Storage | IndexedDB (on-device) |
| Image generation | HTML Canvas API |
| Compression | `CompressionStream` API (gzip, built-in browser) |
| Photos | `FileReader` + Canvas resize/compress |
| Sharing | Web Share API (native share sheet) |
| Fonts | Google Fonts — Share Tech Mono + DM Sans |

---

## 📦 Backup & Restore

### Export
Settings → **Export .mbz** — downloads a compressed binary backup of all bills, photos, and settings.

### Import
Settings → **Import** — select a `.mbz` file (or an old `.json` file). All data is restored exactly.

> **Tip:** Export before switching phones. Import on the new phone. Done.

---

## 🖼️ Bill Image Preview

The generated share image includes:

- Property name + tenant header
- Billing month + date
- **Digit-box meter display** (previous → current) with units consumed
- Previous meter photo + Current meter photo (side by side)
- Electricity breakdown (units × rate)
- House rent
- **Large bold total** with amber accent
- App footer with date

Optimised for portrait WhatsApp viewing at 1080px width.

---

## 🔒 Privacy

- **Zero telemetry.** No analytics, no trackers, no cookies.
- **Zero network calls** after first load (fonts cached by browser).
- All bill data, photos, and settings stay on your device in IndexedDB.
- The `.mbz` backup file never leaves your device unless you explicitly share it.

---

## 📄 License

MIT — do whatever you want with it.

---

<div align="center">

Built with ⚡ for landlords who just want to send the bill and move on.

**[⭐ Star on GitHub](https://github.com/BR1JM0H4N/Billz)** · **[🐛 Report a Bug](https://github.com/BR1JM0H4N/Billz/issues)** · **[💡 Request a Feature](https://github.com/BR1JM0H4N/Billz/issues)**

</div>
