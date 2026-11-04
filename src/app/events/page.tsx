import type { Metadata } from "next";
import { EventsPage } from "@/components/events/events-page";

export const metadata: Metadata = {
  title: "Events",
  description: "Explore the flagship events and competitions hosted by Thapar Venture Club.",
};

export default function Page() {
  return <EventsPage />;
}
