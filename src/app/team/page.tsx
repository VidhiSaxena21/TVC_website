import type { Metadata } from "next";
import { TeamPage } from "@/components/team/team-page";

export const metadata: Metadata = {
  title: "Executive Board",
  description:
    "Meet the Executive Board of Thapar Venture Club (2026 — 2027). The people driving ideas, building connections and strengthening the entrepreneurial ecosystem at Thapar Institute.",
  openGraph: {
    title: "Executive Board — Thapar Venture Club",
    description:
      "The people driving ideas, building connections and strengthening the entrepreneurial ecosystem at Thapar Institute.",
  },
};

export default function Page() {
  return <TeamPage />;
}
