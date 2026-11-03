"use client";

import Link from "next/link";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Events", href: "/events" },
  { label: "Speakers", href: "/speakers" },
  { label: "Team", href: "/team" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="site-header__brand" href="/" aria-label="Thapar Venture Club home">
        <span aria-hidden="true" className="site-header__mark">TVC</span>
        <span className="site-header__name">Thapar Venture Club</span>
      </Link>
      <nav aria-label="Main navigation" className="site-header__nav">
        {navigation.map((item) => (
          <Link href={item.href} key={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
