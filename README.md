# Timeline App 💻

## Task 1: HTML Skeleton - The Foundations of Web Design

### Description
Created the base HTML structure for the Timeline App using semantic tags.

### What’s Included
- A <header> with a app logo and theme toggle button
- A <nav> for future filters (currently empty)
- A <section id="timeline"> to hold event markers
- An empty <div id="modal"> for future modal content
- Semantic structure with <main>, <article>, <figure> and an image of pc

## Task 2 – CSS: Styling & Responsive Layout

### Description
Styled the Timeline App to be visually appealing and responsive.

### What’s Included
- Responsive layout using *CSS Grid* (adapts to mobile, tablet, desktop)
- Styled header with color scheme, typography and spacing
- Placeholder styles for timeline events
- Modal base styles (hidden by default, ready for future JS)
- Breakpoints for:
  - Mobile (<768px)
  - Tablet (768–1023px)
  - Desktop (≥1024px)

## Task 3 – JavaScript: Interactivity & Dynamic Content

### Description
Added interactivity to the Timeline App by fetching event data, dynamically rendering it on the page and enabling modal popups for detailed event views.

### What’s Included
- Loaded event details from data/events.json using fetch() in script.js.
- Created event cards dynamically based on JSON data (year, title, image).
- Clicking on an event image opens a modal in the center of the screen.
- Modal displays:
  - Event title
  - Center-aligned event image
  - Event description
- Added a Close button (✖) to dismiss the modal.


## Task 4 – TypeScript: Static Typing & Modular Code

### Description
Introduced TypeScript to the Timeline App for better maintainability, static typing and modular code organization. 
Converted the previous JavaScript logic into TypeScript with strict mode enabled.

### What’s Included
- Initialized TypeScript with tsconfig.json (strict mode enabled).
- Converted script.js into modular TypeScript files inside src/:
  - types.ts → Defined interfaces for event data.
  - fetcher.ts → Handles fetching and parsing of events.json.
  - renderer.ts → Dynamically renders timeline cards.
  - modal.ts → Opens and closes modal with event details.
  - index.ts → Entry point that ties everything together.
- Configured build process to compile TypeScript into JavaScript (dist/ folder).
- Verified the app runs smoothly in the browser using the compiled JS.

## Goal
A timeline web app built from scratch using HTML, CSS, JS, TypeScript and React.

## Roadmap
✔️ HTML Structure
✔️ CSS
✔️ JavaScript
✔️ TypeScript

