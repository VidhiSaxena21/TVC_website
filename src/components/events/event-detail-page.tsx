import { ESummitPage } from "@/components/events/esummit-page";
import { PrimusPage } from "@/components/events/primus-page";

type EventSlug = "tvc-x-sat" | "e-summit";

export function EventDetailPage({ event }: { event: EventSlug }) {
  if (event === "e-summit") return <ESummitPage />;
  return <PrimusPage />;
}
