import { siteConfig } from "@/lib/site";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative bg-[#000000] text-[#f4f3ef] border-t border-white/[0.08] py-28 sm:py-36"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Headline Column */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.25em] text-[#a5a49f] mb-6 bg-white/[0.04] border border-white/[0.08] px-3.5 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f5ed00]" />
              <span>03 // Institutional Inquiries</span>
            </div>
            <h2
              id="contact-title"
              className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#f4f3ef] leading-[1.12] mb-6"
            >
              Have a venture or partnership in mind?
            </h2>
            <p className="text-base sm:text-lg text-[#a5a49f] leading-relaxed max-w-xl">
              Whether you are an institutional partner, venture fund, prospective speaker, or a
              student team with an active prototype, connect directly with our coordination team.
            </p>
          </div>

          {/* Details / Channels Column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Primary Email Card */}
            <div className="bg-[#0b0b0a] border border-white/[0.08] rounded-sm p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 font-mono text-xs text-[#a5a49f] mb-3">
                  <Mail className="w-4 h-4 text-[#f5ed00]" />
                  <span>PRIMARY CONTACT</span>
                </div>
                <h3 className="font-mono text-lg sm:text-xl font-medium text-[#f4f3ef] mb-2 break-all">
                  {siteConfig.contactEmail}
                </h3>
                <p className="text-xs text-[#a5a49f]">
                  Official communications, event collaborations, and institutional inquiries.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06]">
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#f5ed00] hover:text-white transition-colors focus-visible:outline-none focus-visible:underline"
                >
                  <span>Compose Mail</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Campus Coordinates Card */}
            <div className="bg-[#0b0b0a] border border-white/[0.08] rounded-sm p-6 sm:p-8 flex flex-col justify-between">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#f5ed00] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-[#f4f3ef] mb-1">
                    {siteConfig.institution}
                  </h4>
                  <p className="text-xs text-[#a5a49f] leading-relaxed">{siteConfig.location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
