export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface SocialLink {
  label: string;
  href: string;
  handle: string;
}

export const siteConfig = {
  name: "Thapar Venture Club",
  shortName: "TVC",
  tagline: "Ideate. Ascend. Lead.",
  description:
    "The official entrepreneurship and venture collective of Thapar Institute of Engineering & Technology, Patiala.",
  institution: "Thapar Institute of Engineering & Technology",
  location: "Bhadson Road, Patiala, Punjab 147004, India",
  contactEmail: "contact@thaparventureclub.com", // Official contact placeholder awaiting TVC mailbox confirmation
  navigation: [
    { label: "Home", href: "/" },
    { label: "Events", href: "/events" },
    { label: "Speakers", href: "/speakers" },
    { label: "Team", href: "/team" },
  ] as const satisfies readonly NavItem[],
  socials: [
    {
      label: "LinkedIn",
      href: "https://linkedin.com/company/thapar-venture-club",
      handle: "/company/thapar-venture-club",
    },
    {
      label: "Instagram",
      href: "https://instagram.com/thaparventureclub",
      handle: "@thaparventureclub",
    },
    {
      label: "X (Twitter)",
      href: "https://x.com/thaparventure",
      handle: "@thaparventure",
    },
    {
      label: "GitHub",
      href: "https://github.com/thapar-venture-club",
      handle: "thapar-venture-club",
    },
  ] as const satisfies readonly SocialLink[],
  initiatives: [
    {
      id: "tvc-x-sat",
      title: "TVC x SAT",
      edition: "2026 Cohort",
      dateStatus: "Dates TBC",
      badge: "High-Velocity Sprints",
      descriptor:
        "An intensive venture-building sprint bringing student engineers, designers, and domain specialists together to build investor-ready prototypes.",
      href: "/events/tvc-x-sat",
    },
    {
      id: "e-summit",
      title: "E-Summit",
      edition: "Flagship Edition",
      dateStatus: "Annual Flagship // TBC",
      badge: "Institutional Flagship",
      descriptor:
        "The landmark entrepreneurship summit of TIET, hosting keynote leaders, early-stage pitch stages, and venture clinics across campus.",
      href: "/events/e-summit",
    },
  ] as const,
} as const;
