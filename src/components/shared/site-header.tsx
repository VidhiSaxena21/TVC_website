"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site";
import { Menu, X, ArrowUpRight } from "lucide-react";

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close menu on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Accessible skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#f5ed00] focus:text-black focus:font-semibold focus:text-sm focus:rounded-sm focus:shadow-lg"
      >
        Skip to main content
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-black/85 backdrop-blur-md border-b border-white/[0.08] py-3.5 shadow-2xl"
            : "bg-transparent border-b border-transparent py-5 sm:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Lockup */}
          <Link
            href="/"
            className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5ed00] rounded-sm py-1"
            aria-label="Thapar Venture Club — Home"
          >
            <div className="relative w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/brand/tvc-rocket-emblem.png"
                alt="TVC Emblem"
                fill
                sizes="32px"
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm sm:text-base tracking-tight text-[#f4f3ef] transition-colors group-hover:text-white">
                Thapar Venture Club
              </span>
              <span className="hidden sm:inline-block font-mono text-[10px] uppercase tracking-wider text-[#a5a49f]">
                TIET Patiala
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main navigation"
            className="hidden md:flex items-center gap-1 sm:gap-2 bg-black/40 border border-white/[0.08] rounded-full px-3 py-1.5 backdrop-blur-sm"
          >
            {siteConfig.navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-1.5 text-xs uppercase tracking-widest font-mono rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#f5ed00] ${
                    isActive
                      ? "text-black bg-[#f5ed00] font-semibold shadow-sm"
                      : "text-[#a5a49f] hover:text-[#f4f3ef] hover:bg-white/[0.05]"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Header Status / Campus Pill */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 text-xs font-mono text-[#a5a49f] bg-white/[0.03] border border-white/[0.08] px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f5ed00] animate-pulse" />
              <span>Campus Chapter Active</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#f4f3ef] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5ed00] rounded-sm transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className="fixed inset-0 z-50 md:hidden bg-black/95 backdrop-blur-xl flex flex-col justify-between p-6 pt-24 animate-in fade-in duration-200"
        >
          {/* Close button top right */}
          <div className="absolute top-5 right-6">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-[#f4f3ef] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5ed00] rounded-sm"
              aria-label="Close navigation"
            >
              <X className="w-7 h-7" />
            </button>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3 pb-6 border-b border-white/[0.08]">
              <div className="relative w-8 h-8 flex-shrink-0">
                <Image
                  src="/brand/tvc-rocket-emblem.png"
                  alt="TVC Emblem"
                  fill
                  sizes="32px"
                  className="object-contain"
                />
              </div>
              <div>
                <p className="font-semibold text-base text-[#f4f3ef]">Thapar Venture Club</p>
                <p className="font-mono text-xs text-[#a5a49f]">Ideate. Ascend. Lead.</p>
              </div>
            </div>

            <nav className="flex flex-col gap-2" aria-label="Mobile navigation links">
              {siteConfig.navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between text-2xl font-medium tracking-tight py-3 px-3 rounded-md transition-colors ${
                      isActive
                        ? "text-[#f5ed00] bg-white/[0.05]"
                        : "text-[#f4f3ef] hover:text-[#f5ed00] hover:bg-white/[0.03]"
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-5 h-5 text-[#a5a49f]" />
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="pt-6 border-t border-white/[0.08] flex flex-col gap-3 text-xs font-mono text-[#a5a49f]">
            <p>Thapar Institute of Engineering & Technology</p>
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="text-[#f4f3ef] hover:text-[#f5ed00] transition-colors"
            >
              {siteConfig.contactEmail}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
