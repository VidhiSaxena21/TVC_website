import type { Metadata } from "next";
import { EventDetailPage } from "@/components/events/event-detail-page";

export const metadata: Metadata = {
  title: "PRIMUS’26 — The Matrix Challenge",
  description: "PRIMUS’26 by Thapar Venture Club × SAT. Three tracks: Product, Consulting & Business, and Finance. Break the code. Own the outcome.",
};

export default function Page() {
  return <EventDetailPage event="tvc-x-sat" />;
}
