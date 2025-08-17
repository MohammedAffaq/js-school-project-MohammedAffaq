import { TimelineEvent } from "./types.js";

const modal = document.getElementById("modal") as HTMLElement;

export function openModal(eventData: TimelineEvent): void {
  modal.innerHTML = `
    <div>
      <span class="modal-close">&times;</span>
      <h2>${eventData.year} - ${eventData.title}</h2>
      <img src="${eventData.imageURL}" alt="${eventData.title}">
      <p><strong>Category:</strong> ${eventData.category}</p>
      <p>${eventData.description}</p>
    </div>
  `;
  modal.classList.add("active");

  // close button
  const closeBtn = modal.querySelector(".modal-close") as HTMLElement;
  closeBtn.addEventListener("click", closeModal);

  // click outside to close
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
}

export function closeModal(): void {
  modal.classList.remove("active");
}
