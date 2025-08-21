import type { TimelineEvent } from "../types";
import EventMarker from "./EventMarker";

type Props = {
  events: TimelineEvent[];
  onSelect: (ev: TimelineEvent) => void;
};

export default function Timeline({ events, onSelect }: Props) {
  return (
    <section id="timeline">
      {events.map((ev, i) => (
        <EventMarker key={`${ev.title}-${i}`} event={ev} onClick={onSelect} />
      ))}
    </section>
  );
}
