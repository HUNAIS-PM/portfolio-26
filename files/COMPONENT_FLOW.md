# Home Page Component Flow

## Visual Structure

```
┌─────────────────────────────────────────────────────────┐
│                        Header                           │
│                    (Navigation)                         │
└─────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────┐
│                    FirstSection                         │
│  ┌──────────────┐  ┌──────────────────────────────┐    │
│  │   Profile    │  │  Animated Role Text          │    │
│  │   (Image)    │  │  "Web Developer"             │    │
│  │              │  │  "UI/UX Designer"            │    │
│  └──────────────┘  │  + CTA Button                │    │
│                    └──────────────────────────────┘    │
└─────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────┐
│                   AboutSection                          │
│  ┌──────────────┐  ┌──────────────────────────────┐    │
│  │    Image     │  │  About Me Content            │    │
│  │              │  │  + Description               │    │
│  │              │  │  + "Let's Connect" Button    │    │
│  └──────────────┘  └──────────────────────────────┘    │
└─────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────┐
│                 Developersection                        │
│  ┌─────────────────────────────────────────────────┐   │
│  │  Title: "Development Portfolio"                 │   │
│  │  Category Filters: [All, Web, Mobile, etc.]     │   │
│  └─────────────────────────────────────────────────┘   │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐               │
│  │Project 1│  │Project 2│  │Project 3│               │
│  │+ Image  │  │+ Image  │  │+ Image  │               │
│  │+ Tech   │  │+ Tech   │  │+ Tech   │               │
│  │+ Links  │  │+ Links  │  │+ Links  │               │
│  └─────────┘  └─────────┘  └─────────┘               │
│  [See More Button]                                     │
└─────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────┐
│                  WorkOneSection                         │
│              (First Work Showcase)                      │
└─────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────┐
│                   SecondSection                         │
│               (Content Section 2)                       │
└─────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────┐
│                  WorktwoSection                         │
│             (Second Work Showcase)                      │
└─────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────┐
│                   ThirdSection                          │
│               (Content Section 3)                       │
└─────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────┐
│                 WorkThreeSection                        │
│              (Third Work Showcase)                      │
└─────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────┐
│                   FourthSection                         │
│               (Content Section 4)                       │
└─────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────┐
│                   Designsection                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  Title: "Design Portfolio"                      │   │
│  │  Category Filters: [Logos, Posters, etc.]       │   │
│  └─────────────────────────────────────────────────┘   │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐               │
│  │Design 1 │  │Design 2 │  │Design 3 │               │
│  └─────────┘  └─────────┘  └─────────┘               │
│  [See More Button]                                     │
└─────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────┐
│                  ServiceSection                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  Title: "Services"                               │   │
│  └─────────────────────────────────────────────────┘   │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐            │
│  │Service 1 │  │Service 2 │  │Service 3 │            │
│  └──────────┘  └──────────┘  └──────────┘            │
└─────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────┐
│                   SkillSection                          │
│  ┌─────────────────────────────────────────────────┐   │
│  │  Title: "Skills & Technologies"                  │   │
│  └─────────────────────────────────────────────────┘   │
│  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐         │
│  │Skill 1 │ │Skill 2 │ │Skill 3 │ │Skill 4 │         │
│  └────────┘ └────────┘ └────────┘ └────────┘         │
└─────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────┐
│                        Footer                           │
│                  (Social Links, etc.)                   │
└─────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────┐
│                    FooterBottom                         │
│                   (Copyright, etc.)                     │
└─────────────────────────────────────────────────────────┘
```

## Animation Features

### FirstSection
- **GSAP Timeline Animation**: Role text cycles through different roles
- Smooth fade in/out transitions
- Alternates between Developer and Designer roles

### Lenis Smooth Scroll
- Wraps entire home content
- Provides buttery smooth scrolling experience
- Integrated with requestAnimationFrame for optimal performance

### Framer Motion
- Used in Developersection for:
  - Initial fade-in animation
  - Button scale animations
  - Staggered content reveals

### CSS Animations
- Hero CTA button with clip-path morphing
- Hover effects on all interactive elements
- 3D cube background (optional, defined in CSS)

## Data Flow

```
constants/
├── index.js ────────────► General constants & data
├── projects.js ─────────► Development projects
└── designProjects.js ───► Design projects
         │
         ↓
    Components consume data
         │
         ↓
    Rendered in sections
```

## Responsive Breakpoints

- **Mobile**: < 768px (Single column layouts)
- **Tablet**: 768px - 1024px (2 column grids)
- **Desktop**: > 1024px (3 column grids)

## Color Scheme

```
Primary Colors:
├── primeColor: #ff014f (Accent/CTA)
├── designColor: #ff014f (Same as prime)
├── bodyColor: #212428 (Dark background)
└── lightText: #c4cfde (Light text)

Backgrounds:
├── Light sections: #f9f9f9
├── Dark sections: #212428
└── Gray sections: #gray-100 (Tailwind)
```

## Interactive Elements

1. **Navigation Links** (Header)
   - Hover effects
   - Active state indicators
   - Smooth scroll to sections

2. **CTA Buttons**
   - Custom clip-path animations
   - Hover color transitions
   - Scale effects on click

3. **Project Cards**
   - Hover shadow effects
   - Image zoom on hover
   - Tech tag displays

4. **Category Filters**
   - Active state highlighting
   - Smooth transitions
   - Dynamic content filtering
