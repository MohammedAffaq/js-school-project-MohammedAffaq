import { useState } from "react";
import type { TimelineEvent } from "../types";

type Props = {
  events: TimelineEvent[];
  onSelect: (ev: TimelineEvent, triggerEl: HTMLElement) => void;
};

export default function Timeline({ events, onSelect }: Props) {
  const [focusIndex, setFocusIndex] = useState(0);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>, i: number, ev: TimelineEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onSelect(ev, e.currentTarget);
    } else if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      const next = (i + 1) % events.length;
      setFocusIndex(next);
      const el = document.getElementById(`timeline-item-${next}`);
      el?.focus();
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      const prev = (i - 1 + events.length) % events.length;
      setFocusIndex(prev);
      const el = document.getElementById(`timeline-item-${prev}`);
      el?.focus();
    }
  };

  return (
    <section id="timeline" aria-label="Timeline of events" role="list">
      {events.map((ev, i) => (
        <article
          key={`${ev.title}-${i}`}
          id={`timeline-item-${i}`}
          role="listitem"
          tabIndex={i === focusIndex ? 0 : -1} // only one tabbable
          aria-label={`${ev.year} – ${ev.title}. Open details`}
          onClick={(e) => onSelect(ev, e.currentTarget)}
          onKeyDown={(e) => handleKeyDown(e, i, ev)}
        >
          <figure>
            <img src={ev.imageURL} alt={ev.title} />
          </figure>
          <h3>{`${ev.year} - ${ev.title}`}</h3>
        </article>
      ))}
    </section>
  );
}
