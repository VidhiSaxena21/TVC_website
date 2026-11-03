# TVC Website --- Design System & Creative Direction

## 1. Design intent

Build a digital identity that communicates ambition, credibility,
entrepreneurship and continuity. The site should feel like a carefully
art-directed technology or innovation brand --- not a college template,
startup landing-page clone or AI-generated collection of cards.

Reference the discipline of Apple's product storytelling, Microsoft's
polished motion and the clarity of Stripe/Linear. These are references
for craft and restraint, not layouts to copy.

## 2. Brand principles

1.  **Confident, not loud.** Large typography and strong composition;
    avoid excessive gradients, glows and decorative effects.
2.  **Motion with purpose.** Every animation communicates hierarchy,
    continuity or interaction.
3.  **Editorial, not templated.** Use asymmetry, controlled whitespace,
    strong image crops and varied section compositions.
4.  **Legacy over campaign.** The core TVC identity remains stable.
    Individual event identities live inside it.
5.  **Content earns attention.** Real people, real event photography and
    credible details take priority over abstract stock imagery.

## 3. Visual direction

### Base palette

Use a near-black / warm-white foundation with the logo's yellow as a
restrained brand accent. Confirm exact brand colours from an original
vector/logo source before finalising.

Suggested provisional tokens: - `ink`: #0B0B0A - `paper`: #F4F3EF -
`white`: #FFFFFF - `muted`: #A5A49F - `line-dark`:
rgba(255,255,255,0.14) - `line-light`: rgba(10,10,10,0.14) -
`tvc-yellow`: sample from approved logo asset; provisional only, do not
treat as final brand value

Use dark sections for cinematic storytelling and event moments; use
light sections selectively for contrast and editorial breathing room.
Avoid alternating backgrounds mechanically.

### Typography

-   Display: a premium modern grotesk / neo-grotesk with expressive
    large sizes.
-   Body: highly legible sans-serif with comfortable line length.
-   Use a maximum of two type families.
-   Headlines should be short, intentional and not filled with generic
    marketing language.
-   Use fluid type sizing with `clamp()` and a deliberate scale.

Font candidates to evaluate: Geist, Inter, Manrope or a properly
licensed institutional brand font. Choose one display family and one
supporting family only if necessary.

## 4. Layout and composition

-   Desktop content width: approximately 1200--1440px, with generous
    side gutters.
-   Use a consistent spacing scale and a 12-column grid where useful.
-   Keep navigation compact and unobtrusive.
-   Avoid rounded-card overload. Prefer image panels, open grids, fine
    rules and typographic hierarchy.
-   Use real event photography and portraits with consistent art
    direction.
-   Mobile layouts must be designed intentionally, not merely compressed
    desktop layouts.

## 5. Homepage direction

### Hero / rocket sequence

The supplied logo is a flattened image containing both rocket artwork
and wordmark. For precise motion, request an SVG or transparent PNG with
separate rocket and wordmark layers. If unavailable, carefully extract
the rocket and wordmark into separate transparent assets from the
supplied image, preserving the original artwork. Do not redraw or
approximate the logo without approval.

Sequence: 1. Near-black canvas; rocket enters or resolves into view at
centre. 2. Scroll progress moves the rocket left. 3.
`THAPAR VENTURE CLUB` reveals from the rocket's right, using a
restrained mask/clip reveal. 4. Lockup settles; transition into the
About section. 5. Reduced-motion users receive a static, composed lockup
and can continue normally.

The sequence should be short enough that visitors do not feel trapped.
Provide a clear path into the content and do not require precise scroll
gestures.

### About

A concise statement of TVC's purpose, followed by evidence: initiatives,
community, outcomes and photographs. Do not use unsupported claims or
made-up metrics.

### Team preview

A curated strip or gallery of current team members, with real portraits
and role labels. Link to the full Team page.

### Footer

A restrained footer with contact email, social links, campus/location
details if approved, and a clear navigation system.

## 6. Events index

Two primary event features: - TVC x SAT - E-Summit

Use a two-column composition on desktop, with distinct visual
identities. Hover should reveal a small amount of additional
information, shift image crop/scale subtly and expose a clear action.
The entire panel should be keyboard accessible and have a visible focus
state. On touch devices, use a clear tap affordance; do not rely on
hover.

Each event panel navigates to its own detail route. Do not make
registration the only information on the event page.

## 7. Event detail page

Each event page should have: - Event-specific hero artwork /
photography - Event title and concise description - Edition and
date/location (only when confirmed) - Tracks, format or programme (as
relevant) - Speakers / judges / mentors (only confirmed) - Sponsors /
partners (only confirmed) - Registration CTA linked to the approved
external form/platform - Contact / FAQ information where supplied

The event identity may use its own accent colour and visual language,
but it must still feel part of TVC.

## 8. Speakers and Team

### Speakers

Editorial archive of previous speakers. Each entry may include portrait,
name, designation, organisation, event/edition and a short approved bio.
Build filters only if the volume justifies them.

### Team

Show current team first, with leadership and verticals. Past teams can
be added as an archive later. Do not publish personal contact details
without explicit approval.

## 9. Interaction quality

-   Buttons: crisp hover/focus states, no exaggerated bounce.
-   Links: clear underline or directional affordance.
-   Images: controlled crop and subtle movement, never gratuitous zoom.
-   Page transitions: fast and unobtrusive; do not delay navigation.
-   Loading: use lightweight transitions; avoid fake loading screens.
-   Cursor effects: optional and desktop-only; never replace standard
    cursor feedback.

## 10. Avoid list

-   Generic purple/blue AI gradients everywhere
-   Glassmorphism used as a default
-   Floating blobs, random particles and meaningless 3D objects
-   Excessive rounded cards
-   Every section animating independently
-   Autoplay audio or video with sound
-   Long scroll-jacking sequences
-   Fake statistics, fake testimonials or placeholder names presented as
    real
-   Stock photos pretending to be TVC's actual community
