import type { TimelineEvent } from "../types";

type Props = {
  event: TimelineEvent;
  onClick: (ev: TimelineEvent) => void;
};

export default function EventMarker({ event, onClick }: Props) {
  return (
    <article className="timeline-event" onClick={() => onClick(event)}>
      <figure>
        <img src={event.imageURL} alt={event.title} />
      </figure>
      <h3>{`${event.year} - ${event.title}`}</h3>
    </article>
  );
}
