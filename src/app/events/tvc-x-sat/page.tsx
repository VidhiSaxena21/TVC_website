import type { Metadata } from "next";
import { EventDetailPage } from "@/components/events/event-detail-page";

export const metadata: Metadata = {
  title: "TVC × SAT — The Matrix Challenge",
  description: "Enter the Matrix: the TVC × SAT high-stakes case competition.",
};

export default function Page() {
  return <EventDetailPage event="tvc-x-sat" />;
}
