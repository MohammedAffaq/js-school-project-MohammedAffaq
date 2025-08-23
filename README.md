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

## Task 2 – CSS and Preprocessors

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

## Task 3 – JavaScript Fundamentals. Dynamic Web Development

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


## Task 4 – Typescript. Fundamentals

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


## Task 5 – React. Building Dynamic User Interfaces

### Description
Rebuilt the Timeline App as a modern React application using TypeScript. Introduced component-based architecture for better modularity and scalability.

### What’s Included
- Vite React + TypeScript setup for fast development.
- Created modular components:
    - `<Header>` - Logo + theme toggle button.
    - `<Timeline>` - Maps over event data and renders markers.
    - `<EventMarker>` - Represents each event card (year, title, image).
    - `<EventModal>` - Modal popup with detailed event view (opens on click, closes with ✖).
- State management with hooks:
    - useState + useEffect for loading JSON data and managing modal visibility.
- Theme toggle support (light/dark mode) with persistent styles.
- Responsiveness maintained (mobile, tablet, desktop).
- Styling integrated from previous tasks, updated for React structure.

##  Task 6 – Web Accessibility – Designing for Everyone

### Description
This task focuses on making the Timeline App accessible for users with disabilities by implementing ARIA roles, proper focus management, keyboard navigation and WCAG AA compliant color contrast. The goal is to ensure that all users, including those relying on assistive technologies, can effectively interact with the app.

### What's Included
- **ARIA roles and attributes** added to key elements.
  - `role="dialog"` for the modal or use of the `<dialog>` tag.
  - `aria-current` on the active timeline marker.
- **Focus management**
  - Focus trapped inside the modal when open.
  - Focus returns to the triggering marker when the modal closes.
- **Keyboard accessibility**
  - Timeline markers navigable via Tab/Arrow keys.
  - Modal closable using the `Esc` key.
- **Color contrast verification**
  - All text meets WCAG AA contrast ratio requirements (≥4.5:1).
- **Documentation**
  - Accessibility changes and considerations documented in `ACCESSIBILITY.md`.


## Goal
A timeline web app built from scratch using HTML, CSS, JS, TypeScript and React.

## 🌟 Live Demo

🔗 [Live Website](https://timelinewebapp.netlify.app/)  

## Roadmap

✔️ HTML Structure
✔️ CSS
✔️ JavaScript
✔️ TypeScript
✔️ React + TypeScript
✔️ Web Accessibility


