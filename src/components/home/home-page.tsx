import { SiteFooter } from "@/components/shared/site-footer";
import { SiteHeader } from "@/components/shared/site-header";

export function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        {/* Antigravity: implement the signature animated hero and home sections here. */}
        <section aria-label="TVC homepage hero" className="min-h-screen" />
        <section id="about" aria-labelledby="about-title" />
        <section id="team-preview" aria-labelledby="team-preview-title" />
      </main>
      <SiteFooter />
    </>
  );
}
