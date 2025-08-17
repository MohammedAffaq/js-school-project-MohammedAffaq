import { openModal } from "./modal.js";
export function renderTimeline(events, container) {
    events.forEach((event) => {
        const article = document.createElement("article");
        article.innerHTML = `
      <figure>
        <img src="${event.imageURL}" alt="${event.title}">
      </figure>
      <h3>${event.year} - ${event.title}</h3>
    `;
        // click handler
        article.addEventListener("click", () => openModal(event));
        container.appendChild(article);
    });
}
