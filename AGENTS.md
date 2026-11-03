# TVC Website — Agent Instructions

## Project context
This is the official website for Thapar Venture Club (TVC), Thapar Institute of Engineering & Technology. The site is a long-lived club identity, not a one-off college fest template.

## Read before implementing
- `README.md`
- `design.md`
- `implementation-plan.md`
- `information-architecture.md`
- `motion-spec.md`
- `content-and-assets.md`
- `acceptance-criteria.md`

## Visual direction
Aim for premium editorial craft inspired by the restraint and polish of Apple, Microsoft, Stripe and Linear. Use these as references for design quality, not layouts to copy.

- Near-black and warm-white foundations; TVC yellow is a restrained brand accent.
- Strong typography, intentional whitespace, carefully composed grids and high-quality real imagery when supplied.
- Do not create a generic college template or AI-generated-looking landing page.
- Avoid gratuitous gradients, floating blobs, glassmorphism, excessive rounded cards, random 3D decoration and meaningless motion.
- Preserve the supplied logo artwork. Do not redraw, recolour or distort it.

## Engineering rules
- Implement only the page/task requested in the current instruction.
- Inspect the existing code before changing it.
- Preserve working components and established design tokens.
- Prefer reusable, typed components and data-driven content.
- Do not fabricate event dates, registration links, speakers, team members, sponsors, statistics or achievements. Mark unknown content as TBC or use clearly identified placeholders.
- Keep navigation links and page structure aligned with `information-architecture.md`.
- Respect `prefers-reduced-motion`; content must remain accessible if animation fails or JavaScript is unavailable.
- Never make essential information hover-only.
- Avoid adding dependencies unless they materially improve the result.
- Do not overwrite or delete user work without inspecting it first.

## Current implementation scope
The first implementation task is the homepage only:
1. Shared navigation shell.
2. Signature rocket-to-wordmark scroll reveal, using GSAP + ScrollTrigger.
3. About TVC section.
4. Team preview with neutral placeholders.
5. Contact footer.

Other routes are planned but should not be implemented until specifically requested.

## Quality gate
Before reporting completion:
- Run the available lint/type/build checks.
- Run the site and inspect the page at desktop and mobile widths.
- Check scroll down/up behaviour and reduced-motion fallback.
- Check console errors and broken asset paths.
- Report files changed, verification performed, and known issues honestly.
