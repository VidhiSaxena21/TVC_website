# Thapar Venture Club --- Website Project

A premium, long-lived digital home for Thapar Venture Club (TVC), with
dedicated experiences for TVC x SAT and E-Summit.

## Product principle

This is not a one-off fest microsite or a generic college-club template.
It is TVC's enduring digital identity. The design should feel editorial,
confident, restrained and meticulously crafted.

## Documentation

-   `design.md` --- visual system and design principles
-   `implementation-plan.md` --- phases, milestones and technical
    implementation
-   `information-architecture.md` --- routes, navigation and page
    structure
-   `motion-spec.md` --- animation and interaction behaviour
-   `content-and-assets.md` --- content inventory, asset requirements
    and placeholders
-   `acceptance-criteria.md` --- quality bar and launch checklist

## Proposed stack

-   Next.js (App Router) + TypeScript
-   Tailwind CSS for layout and utility styling; design tokens should
    live centrally
-   GSAP + ScrollTrigger for the signature scroll sequence and complex
    choreography
-   Framer Motion for smaller interface transitions where it is simpler
-   Lenis only if it proves compatible with the chosen scroll setup and
    accessibility needs
-   Local/static content initially; introduce a CMS only if the club
    needs non-developer publishing

## Important content rule

Do not invent speaker names, team members, sponsors, event dates,
statistics, achievements, venue details or registration URLs. All
unknown content is marked `TBC` and must be supplied and approved by
TVC.

## First build milestone

Create the responsive shell, navigation, homepage hero animation and
section transitions using the supplied TVC logo. Use temporary neutral
placeholders only where content is missing.
