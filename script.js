document.addEventListener("DOMContentLoaded", () => {
  const timeline = document.getElementById("timeline");
  const modal = document.getElementById("modal");

  

  // Fetch and render events
  fetch("data/events.json")
    .then((res) => res.json())
    .then((events) => {
      renderTimeline(events);
    })
    .catch((err) => console.error("Error loading events:", err));

  function renderTimeline(events) {
    events.forEach((event) => {
      const article = document.createElement("article");

      article.innerHTML = `
        <figure>
          <img src="${event.imageURL}" alt="${event.title}">
        </figure>
        <h3>${event.year} - ${event.title}</h3>
        
      `;

      // Click handler to open modal
      article.addEventListener("click", () => openModal(event));

      timeline.appendChild(article);
    });
  }

  function openModal(eventData) {
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

    // Close button
    modal.querySelector(".modal-close").addEventListener("click", closeModal);

    // Click outside modal content to close
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  function closeModal() {
    modal.classList.remove("active");
  }
});