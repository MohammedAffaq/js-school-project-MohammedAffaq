import { TimelineEvent } from "./types.js";

export async function fetchEvents(): Promise<TimelineEvent[]> {
  try {
    const res = await fetch("data/events.json");
    if (!res.ok) {
      throw new Error("Failed to load events.json");
    }
    const events: TimelineEvent[] = await res.json();
    return events;
  } catch (err) {
    console.error("Error fetching events:", err);
    return [];
  }
}
