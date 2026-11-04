import type { Metadata } from "next";
import { EventDetailPage } from "@/components/events/event-detail-page";

export const metadata: Metadata = {
  title: "E-Summit",
  description: "The flagship entrepreneurship summit by Thapar Venture Club.",
};

export default function Page() {
  return <EventDetailPage event="e-summit" />;
}
