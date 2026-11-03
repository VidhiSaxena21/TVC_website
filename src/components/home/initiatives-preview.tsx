import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { ArrowUpRight, Calendar } from "lucide-react";

export function InitiativesPreview() {
  return (
    <section
      id="initiatives"
      aria-labelledby="initiatives-title"
      className="relative bg-[#000000] text-[#f4f3ef] border-t border-white/[0.08] py-28 sm:py-36"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <div className="inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.25em] text-[#a5a49f] mb-4 bg-white/[0.04] border border-white/[0.08] px-3.5 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f5ed00]" />
              <span>Flagship Programmes</span>
            </div>
            <h2
              id="initiatives-title"
              className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#f4f3ef]"
            >
              Flagship initiatives & summits.
            </h2>
          </div>
          <p className="text-sm font-mono text-[#a5a49f] max-w-sm">
            Dedicated multi-day tracks designed to test prototypes, unlock capital, and gather the
            ecosystem.
          </p>
        </div>

        {/* 2-Column Initiatives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {siteConfig.initiatives.map((item) => (
            <div
              key={item.id}
              className="group relative bg-[#0b0b0a] hover:bg-[#141413] border border-white/[0.08] hover:border-[#f5ed00]/40 rounded-sm p-8 sm:p-10 flex flex-col justify-between transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#f5ed00] bg-[#f5ed00]/10 border border-[#f5ed00]/20 px-3 py-1 rounded-xs">
                    {item.badge}
                  </span>
                  <div className="flex items-center gap-1.5 font-mono text-xs text-[#a5a49f]">
                    <Calendar className="w-3.5 h-3.5 text-white/50" />
                    <span>{item.dateStatus}</span>
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#f4f3ef] mb-3 group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-[#a5a49f] leading-relaxed mb-8">
                  {item.descriptor}
                </p>
              </div>

              <div className="pt-6 border-t border-white/[0.06] flex items-center justify-between">
                <span className="font-mono text-xs text-[#a5a49f]">{item.edition}</span>
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#f4f3ef] group-hover:text-[#f5ed00] transition-colors focus-visible:outline-none focus-visible:underline"
                >
                  <span>Explore Initiative</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
