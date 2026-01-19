// modale description 

const modal2 = document.getElementById("modal-draw2");
const modal = document.getElementById("modal");
const openBtns = document.querySelectorAll(".open-modal");
const openBtns2 = document.querySelectorAll(".open-modal2");
const closeBtn = document.getElementById("closeModal");
const closeBtn2 = document.getElementById("closeModal2");


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

// deuxième illustration

  openBtns2.forEach(btn => {
    btn.addEventListener("click", () => {
      modal2.style.display = "flex";
    });
  });

  closeBtn2.addEventListener("click", () => {
    modal2.style.display = "none";
  });

  modal2.addEventListener("click", (e) => {
    if (e.target === modal2) {
      modal2.style.display = "none";
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

// modale site

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

