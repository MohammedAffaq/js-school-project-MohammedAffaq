import ReactDOM from "react-dom";
import type { TimelineEvent } from "../types";

type Props = {
  event: TimelineEvent | null;
  onClose: () => void;
};

export default function EventModal({ event, onClose }: Props) {
  const root = document.getElementById("modal-root");
  if (!root || !event) return null;

  const modal = (
    <div className="modal-overlay active" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>&times;</button>
        <h2>{`${event.year} - ${event.title}`}</h2>
        <img src={event.imageURL} alt={event.title} />
        <p><strong>Category:</strong> {event.category}</p>
        <p>{event.description}</p>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modal, root);
}
