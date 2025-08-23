import { forwardRef } from "react";
import type { TimelineEvent } from "../types";

type Props = {
  event: TimelineEvent | null;
  onClose: () => void;
};

// Forward the ref to the modal overlay so App can trap focus inside it
const EventModal = forwardRef<HTMLDivElement, Props>(({ event, onClose }, ref) => {
  if (!event) return null;

  return (
    <div
      ref={ref}
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="modal-content">
        <button className="modal-close" aria-label="Close dialog" onClick={onClose}>
          &times;
        </button>
        <h2 id="modal-title">{`${event.year} - ${event.title}`}</h2>
        <img src={event.imageURL} alt={event.title} />
        <p><strong>Category:</strong> {event.category}</p>
        <p id="modal-description">{event.description}</p>
      </div>
    </div>
  );
});

EventModal.displayName = "EventModal";
export default EventModal;
