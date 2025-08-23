import { useEffect, useRef, useState } from "react";
import "./styles.css";
import type { TimelineEvent } from "./types";
import Header from "./components/Header";
import Timeline from "./components/Timeline";
import EventModal from "./components/EventModal";

export default function App() {
  const [events, setEvents] = useState<TimelineEvent[]>([]);
  const [selected, setSelected] = useState<TimelineEvent | null>(null);
  const [lastFocusedEl, setLastFocusedEl] = useState<HTMLElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    fetch("/data/events.json")
      .then((r) => r.json())
      .then((data: TimelineEvent[]) => setEvents(data))
      .catch((e) => console.error("Failed to load events.json", e));
  }, []);

  // Focus trap + Esc close when modal is open
  useEffect(() => {
    if (!selected) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!modalRef.current) return;

      const focusables = modalRef.current.querySelectorAll<HTMLElement>(
        'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
      );
      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (e.key === "Escape") {
        e.preventDefault();
        handleClose();
      } else if (e.key === "Tab" && focusables.length) {
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    // move initial focus inside dialog
    const firstBtn = modalRef.current?.querySelector<HTMLElement>("button, [tabindex]");
    firstBtn?.focus();

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selected]);

  const toggleTheme = () => {
    document.body.classList.toggle("dark");
  };

  // Receive the triggering element for focus restore
  const handleSelect = (ev: TimelineEvent, triggerEl: HTMLElement) => {
    setLastFocusedEl(triggerEl);
    setSelected(ev);
  };

  const handleClose = () => {
    setSelected(null);
    lastFocusedEl?.focus();
  };

  return (
    <>
      <Header onToggleTheme={toggleTheme} />
      <main>
        {/* Pass handleSelect with two args */}
        <Timeline events={events} onSelect={handleSelect} />
      </main>

      {/* Forward ref into the modal for focus trap */}
      <EventModal ref={modalRef} event={selected} onClose={handleClose} />
    </>
  );
}
