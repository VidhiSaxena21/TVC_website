/**
 * TVC Design System — Core Tokens & Specifications
 *
 * This design system serves as the single source of truth for both the TVC official
 * website and the upcoming companion mobile application (React Native / Flutter).
 */

export const tvcDesignSystem = {
  version: "1.0.0",
  brand: {
    name: "Thapar Venture Club",
    shortName: "TVC",
    motto: "Ideate. Ascend. Lead.",
    institution: "Thapar Institute of Engineering & Technology",
  },
  colors: {
    // Foundations
    black: "#000000", // Cinematic background & hero canvas
    ink: "#0B0B0A", // Editorial dark section background
    inkElevated: "#141413", // Card surfaces & interactive elevations
    paper: "#F4F3EF", // Primary text & warm-white accents
    white: "#FFFFFF", // High-contrast glyphs & brand mark white
    muted: "#A5A49F", // Secondary body copy & metadata
    subtle: "#6E6D68", // De-emphasized lines & placeholders

    // Brand Accents
    yellow: "#F5ED00", // TVC official brand yellow accent (from logo master)
    yellowDim: "rgba(245, 237, 0, 0.14)", // Soft glow & selection fill

    // Stroke / Hairlines
    lineDark: "rgba(255, 255, 255, 0.12)", // Fine border for dark cards
    lineBright: "rgba(255, 255, 255, 0.24)", // Interactive active/hover border
    lineLight: "rgba(10, 10, 10, 0.12)", // Border for light contexts
  },
  typography: {
    fontFamilies: {
      sans: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`,
      mono: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
    },
    scales: {
      eyebrow: "text-xs font-mono uppercase tracking-[0.2em]",
      heroTitle: "text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight",
      sectionTitle: "text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight",
      cardTitle: "text-xl sm:text-2xl font-medium tracking-tight",
      bodyLarge: "text-lg sm:text-xl font-normal leading-relaxed text-[#A5A49F]",
      bodyBase: "text-base font-normal leading-relaxed text-[#A5A49F]",
      bodySmall: "text-sm font-normal leading-normal text-[#A5A49F]",
      caption: "text-xs font-mono uppercase tracking-wider text-[#A5A49F]",
    },
  },
  spacing: {
    sectionY: "py-24 sm:py-32 lg:py-40",
    containerX: "px-6 sm:px-8 lg:px-12",
    maxWidth: "max-w-7xl mx-auto",
  },
  radii: {
    none: "0px",
    sm: "2px",
    md: "4px",
    lg: "6px",
    pill: "9999px",
  },
  transitions: {
    subtle: "transition-colors duration-200 ease-out",
    standard: "transition-all duration-300 ease-out",
    cinematic: "transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1)",
  },
} as const;

export type TVCColorToken = keyof typeof tvcDesignSystem.colors;
