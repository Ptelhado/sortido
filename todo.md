# Sortido Landing Page - Development Plan

## Design Guidelines

### Design References
- **daosushi.pt**: Page structure discipline — minimal header, strong hero, repeated CTA, visual merchandising, practical footer
- **Style**: Cold, Fresh, Urban Premium — clean whites, icy blues, bold typography

### Color Palette
- Primary: #0A1628 (Deep Navy — text, footer)
- Secondary: #1E3A5F (Dark Blue — accents)
- Accent: #00B4D8 (Ice Blue — highlights, hover states)
- CTA Primary: #E63946 (Sortido Red — main buttons)
- CTA Secondary: #FF6B35 (Warm Orange — Glovo/marketplace)
- Background: #FAFBFC (Cool White)
- Surface: #FFFFFF (Pure White — cards)
- Muted: #94A3B8 (Cool Gray — secondary text)
- Border: #E2E8F0 (Light Gray)

### Typography
- Heading1: Inter font-weight 800 (48px mobile / 64px desktop) — hero
- Heading2: Inter font-weight 700 (32px mobile / 44px desktop) — sections
- Heading3: Inter font-weight 600 (18px) — card titles
- Body: Inter font-weight 400 (16px)
- Small: Inter font-weight 500 (14px) — labels, badges

### Key Component Styles
- **CTA Buttons**: Rounded-full, bold, large padding, shadow-lg on hover
- **Cards**: White bg, rounded-2xl, subtle shadow, hover lift 4px
- **Header**: Sticky, white bg, subtle bottom shadow, max contrast for red logo
- **Sections**: Full-width, generous vertical padding (py-16 mobile, py-24 desktop)

### Images to Generate
1. **hero-chilled-drinks.jpg** — Premium arrangement of chilled beer bottles, soda cans, and water bottles with condensation droplets on a dark moody background, studio lighting (photorealistic, 1024x576)
2. **category-beers.jpg** — Collection of premium craft beer bottles with ice and frost, dark background (photorealistic, 1024x1024)
3. **category-sodas.jpg** — Colorful array of soda cans and bottles with splashing water and ice cubes, vibrant and fresh (photorealistic, 1024x1024)
4. **category-essentials.jpg** — Neatly arranged daily essentials (snacks, chips, water bottles, energy drinks) on a clean minimal surface (photorealistic, 1024x1024)
5. **delivery-speed.jpg** — Motion-blurred urban delivery scene at night, city lights, fast movement feeling, cool blue tones (photorealistic, 1024x576)

---

## File Structure (7 files)

1. **src/data/content.ts** — All translations (PT/EN), CTA links, categories, best-sellers, features, footer data, social links
2. **src/context/LanguageContext.tsx** — Language context provider with PT/EN toggle
3. **src/components/Header.tsx** — Sticky minimal header with logo text, language toggle, compact CTA
4. **src/components/Hero.tsx** — Full-bleed hero with headline, subtitle, 3-button CTA group
5. **src/components/Sections.tsx** — Categories, BestSellers, Features, FinalCTA sections
6. **src/components/Footer.tsx** — Spacious footer with grouped columns
7. **src/pages/Index.tsx** — Main page composing all sections

---

## Development Tasks

1. Generate all 5 images using ImageCreator
2. Create src/data/content.ts with all editable data
3. Create src/context/LanguageContext.tsx
4. Create src/components/Header.tsx
5. Create src/components/Hero.tsx
6. Create src/components/Sections.tsx (Categories + BestSellers + Features + FinalCTA)
7. Create src/components/Footer.tsx
8. Update src/pages/Index.tsx to compose everything
9. Update index.html title
10. Lint, build, check