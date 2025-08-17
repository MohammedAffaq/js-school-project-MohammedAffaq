import { fetchEvents } from "./fetcher.js";
import { renderTimeline } from "./renderer.js";

document.addEventListener("DOMContentLoaded", async () => {
  const timeline = document.getElementById("timeline");

  if (!timeline) {
    console.error("Timeline container not found!");
    return;
  }

  const events = await fetchEvents();
  renderTimeline(events, timeline);
});
