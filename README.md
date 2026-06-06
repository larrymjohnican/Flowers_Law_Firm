# Handoff: Flowers Law Firm — Marketing Website

## Overview
A four-page marketing website for **Flowers Law Firm**, a veteran-owned, VA-accredited
law firm that helps veterans nationwide secure VA disability, pension, and survivor
benefits, and handle appeals. Led by Warren Flowers, a U.S. Air Force veteran and
VA-accredited attorney. Cases are handled nationwide by virtual appointment only.

Every page is engineered to drive toward **one** conversion action: *Book a Free
Consultation*. That CTA appears in the sticky header, the hero, and a closing CTA band
on every page; the phone number `(919) 438-3357` is always present as a secondary action.

Pages:
1. **Home** (`index.html`) — hero, trust badges, services overview, "How It Works"
   3-step path, "Who We Help" conditions band, testimonials, FAQ accordion, closing CTA.
2. **Services** (`services.html`) — four benefit areas (VA Disability, VA Pension,
   Survivor Benefits, Appeals), each with description, scope checklist, and its own CTA.
3. **About** (`about.html`) — attorney bio, portrait, six credential cards, mission statement.
4. **Contact** (`contact.html`) — working consultation form (name, email, phone, branch
   of service, description) with validation + success state, plus phone/email/coverage info.

---

## About the Design Files
The files in this bundle are **design references created in HTML/CSS/vanilla JS** — they
are working prototypes that show the intended look, copy, and behavior. They are *not*
prescribed as the production stack.

The task is to **recreate these designs in the target codebase's environment** using its
established patterns and component library. If there is no existing environment yet, the
HTML/CSS/JS here is clean and standards-based enough to ship close to as-is, or to port
into whatever framework you choose (React/Next.js, Astro, Vue, plain static, etc.). The
firm is a small business with a static marketing site — a static-site approach (Astro,
Eleventy, Next static export, or even the raw HTML) is entirely appropriate; a heavy SPA
is not required.

The bundled files run directly: open `index.html` in a browser, or serve the folder with
any static server (`npx serve`). No build step, no dependencies, no external JS libraries.

---

## Fidelity
**High-fidelity (hifi).** These are pixel-level mockups with final colors, typography,
spacing, copy, and interactions. Recreate the UI faithfully. All copy in the files is
final, professional, and approved-tone — use it verbatim unless the client revises it.
Every color, font size, radius, and spacing value below is exact.

---

## Brand foundation (derived from the logo)
The entire palette was sampled and derived from the firm's gold-and-charcoal logo. The
identity is **warm charcoal + a single gold accent** (deep gold → champagne gradient),
with a classical serif echoing the logo's wordmark.

### Logo assets (in `assets/`)
- `flowers-logo.png` — original full logo (gold wordmark + charcoal/gold laurel emblem).
  Use **only on light backgrounds** — the charcoal half disappears on dark.
- `flowers-logo-gold.png` — full logo recolored to a **gold-foil** monochrome. Use on
  dark backgrounds.
- `flowers-emblem-gold.png` — just the shield/laurel/star emblem in gold foil. Used as
  the header/footer mark, the favicon, and as a large faint **watermark** behind heroes
  and CTA bands.

A real photographic **portrait of Warren Flowers** is still needed (4:5 portrait aspect).
In the prototype the portrait spots are drag-and-drop placeholders (`<image-slot>`); in
production replace them with a standard `<img>` (4:5, `object-fit: cover`).

---

## Design Tokens
All tokens are defined as CSS custom properties in **`brand.css`** (`:root`). Reproduce
these exactly in the target system (Tailwind theme, CSS vars, design-token file, etc.).

### Color — gold ramp (from logo)
| Token | Hex | Use |
|---|---|---|
| `--gold-deep` | `#9A6E11` | darkest gold (gradient stop) |
| `--gold` | `#C08000` | core gold |
| `--gold-mid` | `#D6AA46` | icons, hairlines, accents (most-used gold) |
| `--gold-soft` | `#E6C474` | eyebrows, secondary gold text, phone link |
| `--gold-champ` | `#F3DD97` | champagne highlight (gradient top, step numerals) |
| `--gold-grad` | `linear-gradient(135deg,#F3DD97 0%,#D6AA46 42%,#B8860B 100%)` | gold buttons, foil text, wordmark "LAW FIRM" |
| `--gold-grad-v` | `linear-gradient(180deg,#F3DD97 0%,#D6AA46 55%,#A9790F 100%)` | vertical variant (available, used sparingly) |

### Color — ink / charcoal (warm)
| Token | Hex | Use |
|---|---|---|
| `--ink-900` | `#100E0A` | deepest background (page base, footer) |
| `--ink-850` | `#15130E` | page background variant / CTA band base |
| `--ink-800` | `#1B1812` | raised panels, step-number fill |
| `--ink-750` | `#221E17` | cards (testimonials, dossier, form) |
| `--ink-700` | `#2A251D` | hover/border base |

### Color — warm off-whites (text on dark)
| Token | Hex | Use |
|---|---|---|
| `--paper` | `#F7F2E7` | light panel bg (logo-on-light card) |
| `--cream` | `#FBF7EE` | light bg variant |
| `--fg` | `#F1EBDD` | primary text on dark |
| `--fg-soft` | `#C9C1B0` | secondary/body text |
| `--fg-mute` | `#948C7B` | captions, tertiary, disclaimers |

### Color — cool grays (laurel grays) & misc
| Token | Hex |
|---|---|
| `--gray-1` / `--gray-2` / `--gray-3` | `#807F7B` / `#6B6A66` / `#56554F` |
| `--ink-fg` / `--ink-fg-2` | `#211C12` / `#4A4234` (text on light panels) |
| Error/validation accent | `#C8633B` border, `#E6885F` text (defined inline in `site.css`, not a token) |

### Lines / borders
| Token | Value |
|---|---|
| `--hair` | `rgba(214,170,70,.22)` — gold hairline (primary divider/border) |
| `--hair-soft` | `rgba(241,235,221,.10)` — subtle neutral separator |
| `--border` | `rgba(241,235,221,.08)` — faintest border |

### Typography
- `--serif`: `'Cormorant Garamond', 'Times New Roman', serif` — **all headings, display,
  numerals, blockquotes, the wordmark, big phone/email**. Weights used: 500, 600 (primary),
  700; italic 500/600 for emphasis ("foil" words, mission quote).
- `--sans`: `'Source Sans 3', system-ui, -apple-system, sans-serif` — **body, UI, labels,
  buttons, eyebrows, nav, form fields**. Weights: 400, 500, 600, 700.
- Both loaded from Google Fonts:
  `https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Source+Sans+3:wght@400;500;600;700&display=swap`
- Headings use `letter-spacing: -.01em`, `line-height: 1.05`.
- **Eyebrows**: sans, 12px, weight 700, `letter-spacing: .3em`, UPPERCASE, color
  `--gold-soft`. Often centered with a gold hairline rule on each side (`.eyebrow.rule`).
- **Mono labels** (`.mono`): tabular-nums, `letter-spacing: .18em`, UPPERCASE — used for
  small file-record style metadata (Est. / Jurisdiction / Accreditation, the "01–04" indices).

### Radii
| Token | Value | Use |
|---|---|---|
| `--r-sm` | `6px` | form inputs, small chips, mobile menu button |
| `--r-md` | `12px` | dossier card, info-card swatches |
| `--r-lg` | `18px` | testimonial cards, info cards |
| `--r-xl` | `26px` | contact form card |
| `--r-full` | `999px` | pills, buttons, condition chips |

### Shadows
| Token | Value | Use |
|---|---|---|
| `--shadow-gold` | `0 0 60px rgba(214,170,70,.16)` | testimonial-card hover glow |
| `--shadow-deep` | `0 30px 70px -30px rgba(0,0,0,.7)` | dossier card |
| Gold button | `0 8px 28px -12px rgba(214,170,70,.7)` (lifts to `-12px …/.85` on hover) |

### Spacing & layout
- Content column max-width: **1180px** (`.wrap`), side padding 40px desktop / 22px mobile.
- Section vertical padding: **84px** (`.section`), 60px (`.section-sm`), 56px on mobile.
- Standard gap between grid items: 20–54px depending on context (noted per component).

---

## Global Layout Primitives

### Header (`.site-head`) — sticky, on every page
- `position: sticky; top: 0; z-index: 50`. Background `rgba(16,14,10,.72)` with
  `backdrop-filter: blur(16px) saturate(150%)`. Bottom border `--hair-soft`. Height 74px.
- **Left**: brand lockup — `flowers-emblem-gold.png` at 40px tall + wordmark
  "FLOWERS **LAW FIRM**" (serif, 19px, `letter-spacing:.14em`; "LAW FIRM" filled with
  `--gold-grad` via background-clip).
- **Center**: nav links (Home / Services / About / Contact), sans 14.5px, `--fg-soft`,
  hover → `--fg`. Active link is `--gold-soft` with a 1.5px gold underline.
- **Right**: phone link (gold, with phone icon) + gold pill button "Book a Free
  Consultation" + a hamburger button (hidden on desktop).
- **Responsive**: at ≤1024px the nav links and the header's gold button hide; the
  hamburger shows and toggles `.mobile-nav` (a vertical drawer with all links, the phone,
  and a full-width gold CTA).

### Footer (`.site-foot`) — on every page
- 3-column top region: brand + description / "Practice" links / "Contact" info.
- Below, a **disclaimer block** (REQUIRED on every page) with two paragraphs and a
  copyright row. Exact text is in the files — must include:
  - "**Attorney Advertising.**" lead-in; informational-only; no legal advice; viewing/
    contacting does not create an attorney-client relationship.
  - "**Prior results do not guarantee a similar outcome**"; testimonials are individual
    experiences; VA-accredited but not affiliated with the VA or any government agency.
  - Copyright: "© 2026 Flowers Law Firm, PLLC. All rights reserved." + "Veteran-Owned ·
    VA Accredited · CAVC Admitted".

### Buttons
- `.btn-gold`: `--gold-grad` fill, text `#2A1E04`, `--r-full`, weight 700. Hover:
  `translateY(-1px)` + deeper gold shadow. Active: `scale(.98)`.
- `.btn-ghost`: `rgba(241,235,221,.04)` fill, 1px `--hair` border, text `--fg`. Hover:
  fill brightens, border → `--gold-mid`.
- `.btn-lg` modifier: 16px text, 16px×32px padding. `.btn-block`: full width.

### Closing CTA band (`.cta-band`) — on every page
- Radial gold glow at top over `--ink-850`, faint emblem watermark bottom-center.
- Centered: eyebrow, serif h2 (48px, with an italic "foil" word), supporting paragraph,
  then gold CTA + ghost phone button.

---

## Screens / Views

### 1. Home (`index.html`)
**Purpose:** Establish trust fast and push to consultation.

- **Hero (`.home-hero`)** — asymmetric 2-col split (1.08fr / 0.92fr), 64px vertical pad.
  - Background: faint blueprint **grid texture** (46px grid, radial-masked to the right)
    + a large emblem **watermark** top-right (opacity .05) + the page's ambient gold glow.
  - Left: a status **pill** ("● Air Force Veteran-Owned · Nationwide"), an h1 (serif,
    74px, `line-height:.99`, **center-aligned**, max 13ch) reading
    *"You had their six. Now we have **yours.**"* with "yours." italic + `--gold-grad`
    foil; a 18px `--fg-soft` subhead; gold CTA + ghost phone button; then a **file-record
    metadata strip** (`.filebar`): Established **2016** · Jurisdiction **All 50 States** ·
    Accreditation **VA · CAVC** (the last in gold), labels in mono.
  - Right: **portrait dossier** — a 4:5 framed portrait (`.portrait-frame`) with gold
    L-shaped **corner brackets** at all four corners, holding the Warren portrait; an
    overlapping **dossier card** (`.dossier`, `--ink-750`, deep shadow) bottom-left with
    "ATTORNEY OF RECORD" (mono gold), "Warren Flowers" (serif 25px), "Air Force Veteran ·
    VA-Accredited Attorney", and a 5-star row in gold.
  - Responsive: stacks to 1 col ≤1024px; portrait caps at 420px and centers; dossier
    re-centers under it.

- **Trust strip (`.trust`)** — full-width band, 3 equal badges separated by vertical
  hairlines (stack on mobile). Each: a 38px gold stroke icon + serif title + muted
  subtitle. The three: **VA Accredited** (shield-check), **CAVC Admitted** (courthouse),
  **Air Force Veteran-Owned** (star).

- **Services overview (`.svc-grid`)** — centered eyebrow "What We Handle" + h2 "Veterans'
  Claims & Benefits" + sub. Then a **4-column hairline grid** of linked cells (2-col at
  ≤1024, 1-col at ≤640). Each cell: mono index 01–04 (gold), serif h3, body, and a
  "Learn more →" link (arrow nudges right on hover; cell bg tints gold on hover). Cards
  link to `services.html#disability|pension|survivor|appeals`.

- **How It Works (`.steps`)** — eyebrow "The Path Forward" + h2 "Three steps. One
  outcome." Three centered steps connected by a faint horizontal gold line behind them.
  Each: a 76px circular **numeral** (serif, champagne, radial-gold fill, gold border),
  serif h3, body. Steps: **1 Consult**, **2 File**, **3 Win**. Line + grid collapse to a
  single column on mobile.

- **Who We Help (`.help-band`)** — 2-col (.85 / 1.15). Left: eyebrow "Who We Help",
  h2 "The injuries the VA overlooks.", paragraph (mentions PACT Act). Right: a wrap of
  **condition chips** (`.chip`, pill, gold dot + label): PTSD, Traumatic Brain Injury,
  Tinnitus & Hearing Loss, Musculoskeletal Injuries, Sleep Apnea, Gulf War Illness,
  Agent Orange Exposure, Burn Pit & Toxic Exposure, Depression & Anxiety, Military Sexual
  Trauma.

- **Testimonials (`.tcards`)** — eyebrow "In Their Words" + h2. Three cards (`--ink-750`,
  `--r-lg`); each: 5 gold stars, a serif italic 20px blockquote, and an attribution
  (name bold + uppercase mono branch). Hover lifts border + adds `--shadow-gold`. 1-col
  on mobile. (Content is realistic but illustrative; treat as sample testimonials —
  the disclaimer covers this.)

- **FAQ (`.faq`)** — eyebrow "Common Questions" + h2 "Answers before you call." Max-width
  840px single-open **accordion**, 6 items. Each `.faq-item` has a serif `.faq-q` button
  (21px) with an animated **+ / −** glyph (`.pm`), and a `.faq-a` panel that animates open
  via `max-height`. Behavior in `site.js` (see Interactions). Questions cover: cost/
  contingency, virtual/nationwide, post-denial deadlines, timelines, qualifying
  conditions, and Warren's veteran status.

- **Closing CTA band** + **Footer** (see Global).

### 2. Services (`services.html`)
**Purpose:** Explain each benefit area; route each to its own CTA.

- **Page hero (`.page-hero`)** — centered emblem watermark, eyebrow "Veterans' Claims &
  Benefits", h1 *"Every benefit you earned — claimed in full."* ("claimed in full." foil),
  lede paragraph.
- **Four detailed sections (`.svc-detail`)**, ids `#disability`, `#pension`, `#survivor`,
  `#appeals`. Each is a 3-col row (auto / 1fr / auto), top-bordered hairline:
  - **Left**: huge serif index numeral (64px, gold at 32% alpha).
  - **Middle**: serif h2, a lede paragraph, and a **2-col checklist** (`.pts`) of 6 items,
    each a gold check icon + label.
  - **Right (`.act`)**: a full-width gold CTA "Book a Free Consultation" + a small muted
    note line (varies per section, e.g. "Reviewing your current rating costs nothing.").
  - Collapses to single column ≤1024px (numeral shrinks to 48px).
  - Content per section:
    - **01 VA Disability** — service-connection, increases, TDIU, secondary conditions,
      presumptive/PACT Act, effective-date/back-pay.
    - **02 VA Pension** — Improved Pension, Aid & Attendance, Housebound, income/net-worth
      analysis, survivor's pension, in-home/nursing-care documentation.
    - **03 Survivor Benefits** — DIC, accrued benefits, service-connected death claims,
      DIC for presumptive conditions, survivor's pension, burial/plot allowances.
    - **04 Appeals** — Higher-Level Review, Supplemental Claims, Board of Veterans'
      Appeals, CAVC, Clear & Unmistakable Error (CUE), deadline/appeal-option review.
- **Closing CTA band** ("Not sure which applies to *you?*") + **Footer**.

### 3. About (`about.html`)
**Purpose:** Humanize the firm; establish credibility.

- **About hero (`.about-hero`, reuses `.home-hero`)** — 2-col (.9 / 1.1).
  - Left: the same **portrait dossier** treatment (framed 4:5 portrait + corner brackets +
    dossier card with Warren's name/role/stars).
  - Right: eyebrow "Meet Your Attorney", h1 "Warren Flowers" (54px), three bio paragraphs
    (Air Force service → VA accreditation + CAVC admission → founded the firm so a
    veteran's claim is in a veteran's hands; "you reach the attorney, not a call center").
- **Credentials (`.creds`)** — eyebrow + h2 "The standing to fight — the record to back
  it." A **3-col hairline grid** of 6 cards (1-col on mobile), each: 30px gold stroke
  icon + serif h3 + muted body. The six: VA-Accredited Attorney, CAVC Admitted, U.S. Air
  Force Veteran, Juris Doctor, Nationwide Practice, Veteran-Owned.
- **Mission (`.mission`)** — centered band, eyebrow "Our Mission", a large serif italic
  pull-quote (32px) with one bold gold phrase ("a debt that's owed."), attributed
  "— Warren Flowers, Founding Attorney".
- **Closing CTA band** ("Talk to the attorney *himself.*") + **Footer**.
- NOTE for the developer: the bio and credentials are written factually but **generic** —
  Warren's law school, bar admissions, and year of VA accreditation are not yet specified.
  Leave clearly-editable slots for these.

### 4. Contact (`contact.html`)
**Purpose:** Capture a consultation request; offer phone/email alternatives.

- **Page hero (`.page-hero`)** — eyebrow "Request a Consultation", h1 *"Let's talk about
  your claim."* ("your claim." foil), lede.
- **Contact grid (`.contact-grid`)** — 2-col (1.15 / .85), stacks ≤1024px.
  - **Left — form card (`.form-card`)**, `--r-xl`, glassy `--ink-750` fill, 38px padding:
    - h2 "Book a Free Consultation" + subline "No cost, no obligation. All fields are
      required."
    - Fields (`<form id="consult-form" novalidate>`):
      1. **Full name** — text, required.
      2. **Email** + **Phone** in a 2-col row (`.row2`, stacks on mobile) — email required
         + format-validated; phone required, 10-digit, **auto-formats** to `(000) 000-0000`.
      3. **Branch of service** — `<select>` required, custom gold caret. Options: U.S. Air
         Force, U.S. Army, U.S. Navy, U.S. Marine Corps, U.S. Coast Guard, U.S. Space
         Force, National Guard, Reserves, "I'm a family member / survivor".
      4. **Briefly, how can we help?** — textarea, required.
    - Labels: sans 12px, weight 700, `.1em` tracking, UPPERCASE, with a gold `*` for
      required. Inputs: `--ink-900`@.6 fill, `--hair-soft` border, `--r-sm`; focus →
      `--gold-mid` border + 3px gold focus ring. Invalid → `#C8633B` border + ring and a
      visible `.err` message under the field.
    - Submit: full-width gold `.btn-lg` "Request My Free Consultation" + fineprint that
      submitting does not create an attorney-client relationship.
    - **Success state (`#form-success`)**: hidden by default; on valid submit the form
      hides and this shows — a gold check medallion, h2 "Request received.", a paragraph
      addressing the user by **first name**, and "Need to talk sooner? Call (919) 438-3357."
  - **Right — info rail (`.info-rail`)**: three cards — **Call us** (big gold phone link),
    **Email us** (big gold `vetclaims@flowerslawfirm.info`), **Where we work** (checklist:
    virtual by phone & video, all 50 states, secure document upload — no office visit).
- **Closing CTA band** ("We're a phone call *away.*") + **Footer**.

---

## Interactions & Behavior
All behavior is vanilla JS in **`site.js`** (loaded `defer`), initialized on DOMContentLoaded.

- **Mobile menu** — hamburger toggles `.mobile-nav.open`; updates `aria-expanded`; closes
  when any link is tapped.
- **FAQ accordion** — single-open: opening one item closes siblings. Open state animates
  `max-height` from 0 to `scrollHeight`; the `+` glyph morphs to `−` (the vertical bar
  scales to 0). `aria-expanded` maintained on each question button.
- **Scroll reveal** — elements with `.reveal` start at `opacity:0; translateY(18px)` and
  animate in when scrolled into view via `IntersectionObserver` (threshold .12, bottom
  rootMargin −8%), adding `.in`. **Important:** the hidden state is gated behind an
  `html.js` class (added by a tiny inline script in each page's `<head>`), so if JS is
  disabled or fails, all content remains visible. Respects `prefers-reduced-motion`.
  → In a framework, replicate the no-JS-safe pattern (don't hide content unless JS is
  confirmed running). A simple IntersectionObserver hook or a library like
  `framer-motion`'s `whileInView` is fine.
- **Consultation form** (`#consult-form`):
  - Per-field validation on blur; re-validates on input once a field has errored.
  - Rules: required non-empty; email matches `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`; phone has
    ≥10 digits.
  - On submit: validate all; if any invalid, focus the first bad field and show inline
    errors; if all valid, populate the success view's first-name span, hide the form,
    reveal `#form-success`, and smooth-scroll it into view (offset −120px; note the code
    deliberately avoids `Element.scrollIntoView`).
  - The form does **not** post anywhere yet — wire it to the client's intake/email/CRM
    endpoint (e.g. a serverless function, Formspree, or their case-management intake).
    Preserve the validation UX and the success state.
- **Phone auto-format** — as the user types the tel field, digits are reformatted to
  `(123) 456-7890`, capped at 10 digits.
- **Button states** — gold buttons lift + deepen shadow on hover, scale .98 on active;
  ghost buttons brighten fill + gold border on hover. Links/icons shift `--fg-soft → --fg`.

---

## State Management
Minimal — this is a marketing site. If rebuilt in a component framework:
- **Mobile nav**: boolean `menuOpen`.
- **FAQ**: an `openIndex` (single-open) or per-item boolean; drive the max-height
  animation off it (or use a native `<details>`/disclosure pattern).
- **Contact form**: field values, per-field `error` flags, and a `submitted` boolean that
  swaps the form for the success panel. Plus the async state for the real submit
  (idle/submitting/success/error) once wired to a backend.
- No global store, routing state, or data fetching is required for the static content.

---

## Responsive behavior
- Content column max 1180px; side padding 40px → 22px (≤640px).
- **≤1024px**: header collapses to hamburger; all hero/split/grid 2-col layouts → 1 col;
  services index grid → 2-col; service-detail rows → 1 col.
- **≤640px**: services index grid → 1 col; how-it-works steps → 1 col (connector line
  hidden); trust badges stack; form email/phone row stacks; dossier card re-centers
  full-width under the portrait; footer → 1 col. Display type scales down (hero h1 74→46px,
  section h2 44→32px, CTA h2 48→32px).
- Full breakpoint rules are at the bottom of `site.css`.

---

## Assets
In `assets/` (all created for this project; safe to use):
- `flowers-logo.png` — original logo, **light backgrounds only**.
- `flowers-logo-gold.png` — gold-foil full logo, **dark backgrounds**.
- `flowers-emblem-gold.png` — gold-foil emblem; header/footer mark, favicon, hero/CTA
  watermark.
- **Needed from client:** a real portrait photo of Warren Flowers (4:5 portrait,
  `object-fit: cover`). The prototype uses `<image-slot>` placeholders (`image-slot.js`);
  replace with a normal `<img>` in production.
- **Icons** are inline SVG (stroke-based) directly in the markup — phone, shield-check,
  courthouse, star, check, arrow, mail, map-pin, users, graduation cap, globe. No icon
  library dependency. If the target codebase has an icon set (e.g. Lucide), you may swap
  to equivalents, keeping the thin gold stroke look.
- **Fonts**: Cormorant Garamond + Source Sans 3 from Google Fonts (link in each page head).

---

## Files in this bundle
- `index.html` — Home
- `services.html` — Services
- `about.html` — About
- `contact.html` — Contact
- `brand.css` — design tokens (`:root` custom properties) — **import/translate first**
- `site.css` — all component + layout + responsive styles
- `site.js` — mobile nav, FAQ accordion, scroll reveal, form validation + success, phone format
- `image-slot.js` — drag-and-drop portrait placeholder (prototype only; replace with `<img>`)
- `assets/` — logo + emblem images

### `screenshots/`
Rendered reference captures of each page at desktop width (~924px viewport), top-to-bottom:
- `home-01.png`, `01–03-home-mid.png`, `01–04-home-low.png` — Home, in order down the page
- `01–06-services.png` — Services
- `01–06-about.png` — About
- `01–06-contact.png` — Contact (includes the consultation form)

Notes: portrait frames appear empty (placeholders await the real Warren photo). These shots
are at a width where 2-column layouts have begun stacking — see the responsive rules for the
intended wide-desktop (1180px column) presentation; the live HTML files are the source of truth.

To preview the reference as-is: open `index.html` in a browser, or run `npx serve` in this
folder. No build, no dependencies.

---

## Implementation checklist
- [ ] Port `brand.css` tokens into the target system (Tailwind theme / CSS vars / tokens).
- [ ] Load Cormorant Garamond (500/600/700 + italics) and Source Sans 3 (400–700).
- [ ] Build shared **Header** (sticky, glass, responsive hamburger) and **Footer**
      (with the full legal disclaimer) as components used on all pages.
- [ ] Recreate the 4 pages with exact copy, layout, and tokens above.
- [ ] Implement the FAQ accordion (single-open) and scroll-reveal (no-JS-safe).
- [ ] Implement the contact form with the same validation UX + success state, then
      **wire submission** to the client's real intake endpoint.
- [ ] Replace `<image-slot>` portrait placeholders with the real Warren photo (`<img>`, 4:5).
- [ ] Keep the "Book a Free Consultation" CTA in header + hero + closing band on every
      page, and the phone `(919) 438-3357` always visible.
- [ ] Fill in real credentials on About (law school, bar admissions, accreditation year)
      when the client provides them.
- [ ] Verify the legal disclaimer (Attorney Advertising + "prior results…") is present
      site-wide.
