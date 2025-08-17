const modal = document.getElementById("modal");
export function openModal(eventData) {
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
    const closeBtn = modal.querySelector(".modal-close");
    closeBtn.addEventListener("click", closeModal);
    // click outside to close
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
}
export function closeModal() {
    modal.classList.remove("active");
}
