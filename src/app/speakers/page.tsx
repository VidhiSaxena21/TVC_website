import type { Metadata } from "next";
import { SpeakersPage } from "@/components/speakers/speakers-page";

export const metadata: Metadata = {
  title: "Previous Speakers",
  description:
    "Explore the speakers who have shared their ideas and perspectives with the Thapar community through Thapar Venture Club.",
  openGraph: {
    title: "Previous Speakers — Thapar Venture Club",
    description:
      "A look back at the thinkers, builders, creators and changemakers who have shared their perspectives with the Thapar community.",
  },
};

export default function Page() {
  return <SpeakersPage />;
}
