import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <p className="site-footer__eyebrow">THAPAR VENTURE CLUB</p>
        <p className="site-footer__tagline">Ideate. Ascend. Lead.</p>
      </div>
      <nav aria-label="Footer navigation" className="site-footer__links">
        <Link href="/">Home</Link>
        <Link href="/events">Events</Link>
        <Link href="/speakers">Speakers</Link>
        <Link href="/team">Team</Link>
      </nav>
      <p className="site-footer__copyright">© {new Date().getFullYear()} Thapar Venture Club. All rights reserved.</p>
    </footer>
  );
}
