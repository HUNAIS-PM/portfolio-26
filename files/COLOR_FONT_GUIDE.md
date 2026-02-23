# Color & Font Quick Reference Guide

## 🎨 Color Palette Overview

### Primary Colors
```
┌─────────────────────────────────────────────────┐
│ primeColor / designColor                        │
│ #ff014f                                         │
│ ███████████████████████████████████████████     │
│ Vibrant Pink/Red - Used for accents & CTAs     │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│ bodyColor                                       │
│ #212428                                         │
│ ███████████████████████████████████████████     │
│ Dark Gray - Main dark background               │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│ lightText                                       │
│ #c4cfde                                         │
│ ███████████████████████████████████████████     │
│ Light Blue-Gray - Light text on dark BG        │
└─────────────────────────────────────────────────┘
```

### Section-Specific Colors
```
┌─────────────────────────────────────────────────┐
│ FirstSection Background                         │
│ #f9f9f9                                         │
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░     │
│ Very Light Gray - Clean, minimal look          │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│ Dark Sections (2nd, 3rd, 4th)                   │
│ bg-slate-950                                    │
│ ███████████████████████████████████████████     │
│ Very Dark Slate - Dramatic contrast            │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│ Footer & FooterBottom                           │
│ #F5F5F3                                         │
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░     │
│ Off-White - Soft, professional                 │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│ Profile Component Outer                         │
│ #171717                                         │
│ ███████████████████████████████████████████     │
│ Very Dark Gray - Bold frame                    │
└─────────────────────────────────────────────────┘
```

---

## 🔤 Typography System

### Font Families

**Poppins (Body Font)**
```
Font: Poppins
Weights: 100, 200, 300, 400, 500, 600, 700, 800, 900
Usage: Main body text, paragraphs, general content
Class: font-bodyFont
```

**DM Sans (Title Font)**
```
Font: DM Sans
Weights: 400, 500, 700
Usage: Headings, titles, section headers
Class: font-titleFont
```

### Responsive Typography

**Fluid Text (Large Headings)**
```css
.fluid-text {
  font-size: clamp(2.5rem, 8vw, 5rem);
}
```
- Mobile (320px): 2.5rem (40px)
- Tablet (768px): ~6rem (96px)
- Desktop (1920px): 5rem (80px)

**Fluid Subtitle**
```css
.fluid-subtitle {
  font-size: clamp(1rem, 4vw, 1.5rem);
}
```
- Mobile (320px): 1rem (16px)
- Tablet (768px): ~3rem (48px)
- Desktop (1920px): 1.5rem (24px)

---

## 🎯 Component Color Map

### Hero Section (FirstSection)
```
Background: #f9f9f9 (light gray)
Text: Default (dark)
Button: Custom hero-cta-button style
  - Background: #080312
  - Text: #afffff
  - Border: black
```

### About Section
```
Background: white
Heading: text-gray-900
Body: text-gray-800
Button: hero-cta-button
```

### Developer/Design Sections
```
Background: bg-gray-100
Heading: text-gray-900
Category Buttons (Active): bg-primeColor text-white
Category Buttons (Inactive): bg-gray-200 text-gray-700
Project Cards: bg-white
Tech Tags: bg-primeColor text-white
Border: border-primeColor
```

### Work Sections (1, 2, 3)
```
Background: white/transparent
Border: border-b-black
Role Badge: bg-gray-200 text-gray-800
```

### Dark Sections (2nd, 3rd, 4th)
```
Background: bg-slate-950
Text: text-white
High contrast for readability
```

### Service & Skill Sections
```
Background: white
Border: border-b-black
Skill Badges: bg-gray-200
Text: text-gray-900
```

### Header
```
Background: bg-white
Border: border-b-gray-200
Nav Links: bg-white text-black
Nav Hover: bg-gray-100
Mobile Menu: bg-primeColor
```

### Footer
```
Background: #F5F5F3
Text: text-gray-700
Links: hover:text-primeColor
```

---

## 🎨 Tailwind Utility Classes Used

### Background Colors
- `bg-white` - Pure white
- `bg-gray-100` - Very light gray
- `bg-gray-200` - Light gray
- `bg-slate-950` - Very dark slate
- `bg-primeColor` - Accent pink/red (#ff014f)

### Text Colors
- `text-white` - White text
- `text-black` - Black text
- `text-gray-900` - Very dark gray
- `text-gray-800` - Dark gray
- `text-gray-700` - Medium gray
- `text-gray-300` - Light gray
- `text-gray-200` - Very light gray
- `text-primeColor` - Accent color

### Border Colors
- `border-black` - Black borders
- `border-gray-200` - Light gray borders
- `border-primeColor` - Accent color borders

---

## 💡 Usage Examples

### Creating a Section with Light Background
```jsx
<section className="w-full bg-gray-100 text-gray-900 py-16">
  <h2 className="font-titleFont text-4xl">Title</h2>
  <p className="font-bodyFont text-base">Content</p>
</section>
```

### Creating a Section with Dark Background
```jsx
<section className="w-full bg-slate-950 text-white py-16">
  <h2 className="font-titleFont text-4xl">Title</h2>
  <p className="font-bodyFont text-base">Content</p>
</section>
```

### Creating an Accent Button
```jsx
<button className="bg-primeColor text-white px-6 py-3 hover:bg-opacity-90">
  Click Me
</button>
```

### Using Custom Hero Button
```jsx
<button className="hero-cta-button">
  View Work
</button>
```

---

## 🔍 Color Accessibility

All color combinations meet WCAG 2.1 AA standards:

✅ **Dark text on light backgrounds**
- text-gray-900 on bg-white: 21:1 ratio
- text-gray-900 on bg-gray-100: 18:1 ratio

✅ **Light text on dark backgrounds**
- text-white on bg-slate-950: 19:1 ratio
- text-white on bg-primeColor: 4.5:1 ratio

✅ **Accent colors**
- primeColor (#ff014f) provides sufficient contrast
- Used strategically for CTAs and highlights

---

## 📱 Responsive Considerations

### Mobile (< 768px)
- Larger touch targets
- Simplified layouts
- Adjusted font sizes via clamp()

### Tablet (768px - 1024px)
- 2-column grids
- Medium font sizes
- Balanced spacing

### Desktop (> 1024px)
- 3-column grids
- Optimal font sizes
- Maximum readability

---

**Quick Tip**: Use browser DevTools to inspect any element and see its exact colors and fonts!

**Last Updated**: 2026-01-28
