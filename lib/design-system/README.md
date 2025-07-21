# Security Dynamics Design System

This document defines the design standards and patterns for all pages on the Security Dynamics website. All new pages MUST follow these guidelines to maintain consistency.

## Color Usage Rules

### 1. Background Colors

**Primary Backgrounds:**
- Hero sections: `bg-slate-900` or `bg-gray-900`
- Light sections: `bg-white` or `bg-gray-50`
- Dark sections: `bg-slate-900` with pattern overlay

**Never use:**
- Red backgrounds for sections (`bg-red-*`, `bg-primary`, `bg-accent`)
- Gradient backgrounds with red colors

### 2. Red Usage (Accent Only)

Red (#DC2626) should ONLY be used for:
- CTAs and buttons (`bg-red-600`, `hover:bg-red-700`)
- Small accent elements (icons, badges)
- Links and interactive elements
- Never as primary section backgrounds

### 3. Pattern Usage

All dark sections (`bg-slate-900`, `bg-gray-900`) must include the circuit pattern overlay:

```jsx
<section className="relative bg-slate-900 text-white overflow-hidden">
  {/* Background Pattern */}
  <div className="absolute inset-0 opacity-5 pointer-events-none">
    <div className="absolute inset-0 bg-[url('/images/circuit-pattern.svg')] bg-repeat" />
  </div>
  <div className="relative z-10">
    {/* Section content */}
  </div>
</section>
```

## Section Order Standards

### Service Pages
1. Hero (dark with pattern) → 
2. Service Details (white) → 
3. Key Features (gray) → 
4. Technical Specifications (white) → 
5. Process (white) → 
6. Service Areas (dark with pattern) → 
7. Related Services (white) → 
8. Testimonials (dark with pattern) → 
9. FAQ (dark with pattern) → 
10. CTA (white)

### Location Pages
1. Hero (dark with pattern) →
2. Local Expertise (white) →
3. Services Grid (gray) →
4. Business Types (dark with pattern) →
5. Service CTAs (white) →
6. Testimonials (dark with pattern) →
7. FAQ (dark with pattern) →
8. CTA (white)

### Industry Pages
1. Hero (dark with pattern) →
2. Challenges (white) →
3. Solutions (gray) →
4. Compliance (white) →
5. Case Study (white) →
6. FAQ (white) →
7. Resources (gray) →
8. CTA (white)

## Typography

### Font Sizes
- H1: `text-4xl md:text-5xl lg:text-6xl font-bold`
- H2: `text-3xl md:text-4xl font-bold`
- H3: `text-xl md:text-2xl font-semibold`
- Body: `text-base md:text-lg`
- Small: `text-sm`

### Text Colors
- Dark backgrounds: `text-white`, `text-gray-300` (secondary)
- Light backgrounds: `text-gray-900` (primary), `text-gray-600` (secondary)

## Spacing

### Section Padding
```jsx
className="py-16 md:py-24 lg:py-32"
```

### Container
```jsx
className="container mx-auto px-4"
// or
className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
```

## Components

### Buttons
Primary (red):
```jsx
<Button variant="primary" className="bg-red-600 hover:bg-red-700">
```

Outline on dark:
```jsx
<Button variant="outline" className="text-white border-white hover:bg-white hover:text-slate-900">
```

### Cards
On dark backgrounds:
```jsx
<Card className="bg-white/10 border-white/20">
```

On light backgrounds:
```jsx
<Card className="bg-white shadow-lg border border-gray-100">
```

## Template Usage

### Required Templates
- **ServicePageTemplate**: For main service pages
- **ServiceLocationTemplate**: For service + location combo pages
- **CityPageTemplate**: For city/location pages
- **IndustryPageTemplate**: For industry-specific pages (to be created)

### Creating New Pages

When creating new pages:
1. Always use the appropriate template
2. Never create custom layouts unless absolutely necessary
3. Follow the section order defined above
4. Use consistent spacing and typography
5. Keep red usage to buttons and accents only

## Examples

### Correct Hero Section
```jsx
<section className="relative bg-slate-900 text-white py-20 overflow-hidden">
  <div className="absolute inset-0 opacity-5 pointer-events-none">
    <div className="absolute inset-0 bg-[url('/images/circuit-pattern.svg')] bg-repeat" />
  </div>
  <div className="container mx-auto px-4 relative z-10">
    {/* Content */}
  </div>
</section>
```

### Incorrect (Do Not Use)
```jsx
// ❌ Red background
<section className="bg-red-600 text-white">

// ❌ Red gradient
<section className="bg-gradient-to-br from-red-600 to-red-800">

// ❌ Missing pattern on dark section
<section className="bg-slate-900">
```

## Enforcement

- All PRs must follow these guidelines
- Use ESLint rules to prevent red background usage
- Regular audits to ensure consistency
- Update this document when patterns evolve

Last Updated: July 2024