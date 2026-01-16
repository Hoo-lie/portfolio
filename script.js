// modale description 

const modal = document.getElementById("modal");
  const openBtns = document.querySelectorAll(".open-modal");
  const closeBtn = document.getElementById("closeModal");

  openBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      modal.style.display = "flex";
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

// modale img 


const containers = document.querySelectorAll(".art-container");

containers.forEach(container => {
  const button = container.querySelector("btn-modal"); 

  container.addEventListener("mouseenter", () => {
    if (button) {
      button.style.backgroundColor = "rgb(3, 220, 119)";
    }
  });

  container.addEventListener("mouseleave", () => {
    if (button) {
      button.style.backgroundColor = "";
    }
  });
});




