import { useEffect, useState } from "react";
import "./styles.css";
import type { TimelineEvent } from "./types";
import Header from "./components/Header";
import Timeline from "./components/Timeline";
import EventModal from "./components/EventModal";

export default function App() {
  const [events, setEvents] = useState<TimelineEvent[]>([]);
  const [selected, setSelected] = useState<TimelineEvent | null>(null);

  useEffect(() => {
    fetch("/data/events.json")
      .then((r) => r.json())
      .then((data: TimelineEvent[]) => setEvents(data))
      .catch((e) => console.error("Failed to load events.json", e));
  }, []);

  const toggleTheme = () => {
    document.body.classList.toggle("dark");
  };

  return (
    <>
      <Header onToggleTheme={toggleTheme} />

      <main>
        <Timeline events={events} onSelect={setSelected} />
        <div id="modal" style={{ display: "none" }} />
      </main>

      <EventModal event={selected} onClose={() => setSelected(null)} />
    </>
  );
}
