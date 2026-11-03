# TVC Website --- Implementation Plan

## 1. Project outcome

Deliver a responsive, accessible, maintainable website that establishes
TVC's permanent identity and supports event discovery, speaker archives
and team visibility.

## 2. Recommended architecture

-   Next.js App Router
-   TypeScript
-   Tailwind CSS with central design tokens
-   GSAP + ScrollTrigger for pinned/scroll-linked sequences
-   Framer Motion for small component transitions if needed
-   Content stored in typed local data files for the first release
-   Optional CMS in a later phase if TVC requires frequent non-technical
    updates

Suggested routes: - `/` --- Home - `/events` --- Events index -
`/events/tvc-x-sat` --- TVC x SAT detail - `/events/e-summit` ---
E-Summit detail - `/speakers` --- Previous speakers - `/team` ---
Current team

## 3. Suggested project structure

``` text
tvc-website/
├── public/
│   ├── brand/
│   │   ├── tvc-logo-original.png
│   │   ├── tvc-rocket.svg
│   │   └── tvc-wordmark.svg
│   ├── events/
│   ├── speakers/
│   └── team/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── events/page.tsx
│   │   ├── events/[slug]/page.tsx
│   │   ├── speakers/page.tsx
│   │   └── team/page.tsx
│   ├── components/
│   │   ├── navigation/
│   │   ├── home/
│   │   ├── events/
│   │   ├── speakers/
│   │   ├── team/
│   │   └── shared/
│   ├── data/
│   │   ├── events.ts
│   │   ├── speakers.ts
│   │   └── team.ts
│   ├── lib/
│   └── styles/
└── docs/
```

## 4. Delivery phases

### Phase 0 --- Discovery and asset collection

-   Confirm TVC's official logo source (prefer SVG/AI/PDF or transparent
    PNG).
-   Confirm exact brand colours and typography if a brand guide exists.
-   Collect approved About copy, event descriptions, team roster,
    speaker archive and contact links.
-   Collect real photography and confirm usage permissions.
-   Obtain registration URLs and event social links.
-   Decide who will maintain content after launch.

**Exit condition:** no critical content or asset dependency is
ambiguous.

### Phase 1 --- Foundation

-   Initialise Next.js + TypeScript.
-   Configure Tailwind and design tokens.
-   Set typography, global layout, navigation and footer.
-   Add responsive breakpoints and accessibility defaults.
-   Establish route structure and typed content models.

**Exit condition:** all routes render with a consistent shell on mobile
and desktop.

### Phase 2 --- Homepage signature experience

-   Prepare separate rocket and wordmark assets.
-   Build the hero as a client-side motion component.
-   Implement scroll progress with GSAP ScrollTrigger.
-   Pin only for the duration of the logo sequence.
-   Add reduced-motion fallback and mobile-specific behaviour.
-   Build About, team preview and footer sections.

**Exit condition:** logo sequence is smooth, interruptible, responsive
and does not block access to content.

### Phase 3 --- Events experience

-   Build events index with two editorial event panels.
-   Implement hover, focus and touch states.
-   Build reusable event detail template.
-   Add TVC x SAT and E-Summit content.
-   Add registration CTA using verified URLs.

**Exit condition:** both event pages are navigable and all CTAs work.

### Phase 4 --- Speakers and Team

-   Build speaker archive and reusable profile presentation.
-   Build current team page with leadership / vertical groupings.
-   Add image optimisation, alt text and responsive crops.
-   Add filters only if content volume warrants them.

**Exit condition:** all published names, roles, affiliations and images
are approved.

### Phase 5 --- Polish and quality assurance

-   Test major desktop, tablet and mobile widths.
-   Test keyboard navigation and visible focus.
-   Test reduced-motion mode.
-   Optimise images, fonts, JavaScript and animation performance.
-   Check metadata, social previews, sitemap and robots.
-   Test all external links and registration forms.
-   Run final content and spelling review.

**Exit condition:** launch checklist is signed off.

## 5. Performance and accessibility requirements

-   Avoid shipping large animation libraries to routes that do not need
    them.
-   Lazy-load below-the-fold imagery.
-   Use modern image formats and correctly sized images.
-   Avoid layout shifts; reserve image dimensions.
-   Target strong Core Web Vitals on representative mobile devices.
-   Respect `prefers-reduced-motion`.
-   Ensure sufficient colour contrast.
-   All interactive elements must be keyboard accessible.
-   Never communicate information through hover alone.
-   Use semantic headings, landmarks and descriptive alt text.

## 6. Content management

For the initial release, typed TypeScript data files are sufficient if
updates are made by the web team. If TVC needs frequent updates by
non-developers, evaluate a headless CMS after the first release rather
than adding complexity prematurely.

## 7. Risks and mitigations

  -----------------------------------------------------------------------
  Risk                                Mitigation
  ----------------------------------- -----------------------------------
  Logo is a flattened raster          Request vector/layered source;
                                      extract only if approved

  Missing event details               Use explicit TBC fields; do not
                                      fabricate

  Heavy animations on mobile          Reduce or simplify motion on small
                                      screens

  Team changes every year             Keep team data separate from layout

  Registration URL changes            Store URL in event data and verify
                                      before launch

  Website becomes dated               Keep core identity timeless; treat
                                      event artwork as replaceable
  -----------------------------------------------------------------------

## 8. Definition of done

The site is complete when the routes, content, motion, responsive
behaviour, accessibility, performance, metadata and all external links
have been tested and approved.
