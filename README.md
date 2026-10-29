# Ashden Manor — Website Project

A premium, responsive, single-page site built for a fictional Georgian manor wedding venue, aligned to the official Brand Kit (Ink, Deep Olive, Sage, Bronze, Warm Linen, Soft Chalk).

---

## 1. Folder Structure & Image Mapping

Please save your 20 images into the `assets/images/` folder using these exact filenames. The HTML is already hardcoded to pull from these specific filenames.

ashden-manor/
├── index.html
├── README.md
├── css/
│ └── styles.css
├── js/
│ └── main.js
└── assets/
├── logo/
│ └── Logo.jpg <-- Note the capital "L" as per your file
└── images/
├── 1.jpg → Hero image
├── 2.jpg → Gallery
├── 3.jpg → Gallery
├── 4.jpg → Spaces (Gardens)
├── 5.jpg → Gallery
├── 6.jpg → Gallery
├── 7.jpg → Gallery
├── 8.jpg → Gallery
├── 9.jpg → Gallery
├── 10.jpg → Gallery
├── 11.jpg → Spaces (Ceremony) + Marquee
├── 12.jpg → Food & Hospitality
├── 13.jpg → Marquee
├── 14.jpg → Your Day
├── 15.png → Gallery (Note: PNG file)
├── 16.jpg → (Currently unused — available for future)
├── 17.jpg → Spaces (Dining) + Marquee
├── 18.png → Marquee (Note: PNG file)
├── 19.jpg → (Currently unused — available for future)
└── 20.jpg → Exclusive Use


### Quick Reference for Image Placements:
- Hero Section: `1.jpg`
- Exclusive Use Section: `20.jpg`
- Venue Spaces: `11.jpg` (Ceremony), `17.jpg` (Dining), `4.jpg` (Gardens)
- Your Day Section: `14.jpg`
- Food & Hospitality: `12.jpg`
- Editorial Gallery: `2.jpg`, `3.jpg`, `5.jpg`, `6.jpg`, `7.jpg`, `8.jpg`, `9.jpg`, `10.jpg`, `15.png`
- Scrolling Strip (Marquee): `13.jpg`, `11.jpg`, `18.png`, `17.jpg`
- Unused: `16.jpg`, `19.jpg`

Important Asset Notes:
- The logo in `assets/logo/Logo.jpg` is handled with a custom CSS "seal" (white background with padding) in the footer because it is a JPG. If you ever upgrade to a transparent `.png` logo, you can replace the CSS with `filter: brightness(0) invert(1);` to make it pure white.
- `16.jpg` and `19.jpg` are not currently in the HTML layout but are available in your folder if you wish to swap them into the gallery.

---

## 2. Local Setup

No build step required. You can open the site in two ways:

Option A: Direct
Simply double-click `index.html` to open it in your browser.

Option B: Local Server (Recommended for testing)
```bash
python3 -m http.server 8000