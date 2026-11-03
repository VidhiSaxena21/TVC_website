# TVC Website --- Motion & Interaction Specification

## Motion philosophy

Motion should support the story, not compete with it. Prefer smooth
easing, restrained distance and clear start/end states. Avoid constant
movement, random particles and animations that make the site feel like a
template.

## 1. Homepage logo sequence

### Initial state

-   Near-black background.
-   Rocket artwork centred.
-   Wordmark hidden.
-   No autoplay audio.

### Scroll-linked sequence

-   Pin the hero only for the short duration required by the reveal.
-   Rocket moves from centre to a left-aligned position.
-   Wordmark reveals to the right using a mask / clip-path or width
    reveal.
-   The final lockup settles into a stable composition.
-   Continue into About without an abrupt jump.

### Technical notes

-   Use GSAP ScrollTrigger with scrub for scroll-linked progress.
-   Keep transforms on dedicated wrappers to avoid conflicts.
-   Avoid animating layout-heavy properties when transform/opacity will
    work.
-   Use a timeline that can reverse naturally when scrolling upward.
-   Avoid excessive pin duration.
-   Use `invalidateOnRefresh` and refresh after relevant assets/fonts
    load.
-   Do not hijack native scroll.

### Responsive behaviour

-   Desktop: full composed movement with horizontal lockup.
-   Tablet: reduce travel distance and typography scale.
-   Mobile: use a shorter sequence or static reveal; do not force a wide
    horizontal lockup into a narrow viewport.

### Reduced motion

When `prefers-reduced-motion: reduce` is enabled: - Do not pin the
hero. - Render rocket and wordmark in their final readable
arrangement. - Keep content fully available without animation.

## 2. Event panels

-   Hover: slight image scale/crop adjustment, subtle title shift or
    arrow reveal.
-   Transition: approximately 250--450ms, tuned by feel.
-   Keyboard focus: equally clear affordance.
-   Touch: visible CTA; never depend on hover.

## 3. Page transitions

-   Use brief opacity/position transitions only if they do not delay
    navigation.
-   Respect reduced-motion settings.
-   Ensure browser back/forward navigation remains predictable.

## 4. Scroll reveals

-   Reveal only selected content groups.
-   Use small vertical movement and opacity.
-   Avoid animating every paragraph, card and image independently.
-   Ensure content remains visible if JavaScript or animation fails.

## 5. Interaction accessibility

-   All controls have focus states.
-   No critical content appears only on hover.
-   Do not use scroll-jacking.
-   No flashing or rapid strobing.
-   Do not autoplay sound.
-   Test with keyboard, touch and reduced-motion preferences.
