import Image from "next/image";
import { TeamMember } from "@/data/team";
import { Linkedin, User } from "lucide-react";

interface MemberCardProps {
  member: TeamMember;
  isProminent?: boolean;
}

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export function MemberCard({ member, isProminent = false }: MemberCardProps) {
  const initials = getInitials(member.name);
  const hasLinkedIn = Boolean(member.linkedin && member.linkedin.trim().length > 0);

  return (
    <article
      className={`group relative bg-[#141413] border rounded-sm overflow-hidden flex flex-col transition-all duration-300 ${
        isProminent
          ? "border-white/[0.14] hover:border-[#f5ed00]/60 shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
          : "border-white/[0.08] hover:border-[#f5ed00]/40"
      }`}
    >
      {/* Corner crosshairs */}
      <div className="absolute top-2 left-2 text-[10px] font-mono text-white/20 select-none z-10">
        +
      </div>
      <div className="absolute top-2 right-2 text-[10px] font-mono text-white/20 select-none z-10">
        +
      </div>

      {/* Portrait Container — Strict 3:4 Aspect Ratio */}
      <div className="relative aspect-[3/4] w-full bg-gradient-to-b from-[#1b1b19] to-[#0e0e0d] border-b border-white/[0.06] overflow-hidden flex flex-col items-center justify-center p-6 text-center select-none">
        {member.image ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-top filter grayscale contrast-105 group-hover:scale-[1.02] transition-transform duration-500 ease-out"
          />
        ) : (
          /* Neutral Editorial Placeholder */
          <div className="flex flex-col items-center justify-center gap-4 my-auto">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center text-white/30 group-hover:text-[#f5ed00]/70 group-hover:border-[#f5ed00]/30 transition-all duration-300">
              <User className="w-10 h-10 sm:w-12 sm:h-12 stroke-[1.25]" />
              {/* Initials badge overlay */}
              <span className="absolute -bottom-1 -right-1 font-mono text-[10px] font-semibold text-black bg-[#f5ed00] px-1.5 py-0.5 rounded-xs tracking-wider">
                {initials}
              </span>
            </div>

            <div className="mt-1">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#a5a49f] bg-black/60 border border-white/[0.08] px-2.5 py-1 rounded-xs">
                Official Portrait TBC
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Member Details */}
      <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-medium text-lg sm:text-xl text-[#f4f3ef] tracking-tight group-hover:text-white transition-colors">
              {member.name}
            </h3>
            <p
              className={`font-mono text-xs uppercase tracking-wider mt-1 ${
                isProminent ? "text-[#f5ed00] font-medium" : "text-[#a5a49f]"
              }`}
            >
              {member.position}
            </p>
          </div>

          {/* LinkedIn Icon & Link (Only rendered if URL exists) */}
          {hasLinkedIn && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`LinkedIn profile of ${member.name}`}
              className="text-[#a5a49f] hover:text-[#f5ed00] p-1.5 rounded-sm hover:bg-white/[0.05] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#f5ed00]"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          )}
        </div>

        {/* Footer Metadata */}
        <div className="mt-5 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-white/35">
          <span>TIET PATIALA</span>
          <span>TERM 2026–2027</span>
        </div>
      </div>
    </article>
  );
}
