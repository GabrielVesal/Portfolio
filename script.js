document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;
  const switchBtn = document.querySelector("#switch button");

  switchBtn.addEventListener("click", function () {
    requestAnimationFrame(() => {
      if (window.innerWidth <= 768) {
        if (body.classList.contains("dark-mobile")) {
          body.classList.remove("dark-mobile");
          body.classList.add("light");
        } else {
          body.classList.remove("light");
          body.classList.add("dark-mobile");
        }
      } else {
        if (body.classList.contains("dark-mode")) {
          body.classList.remove("dark-mode");
          body.classList.add("light");
        } else {
          body.classList.remove("light");
          body.classList.add("dark-mode");
        }
      }

      // Forçando a re-renderização com transformação 3D:
      body.style.transform = 'translateZ(0)';
    });
  });
});

let certificadoAtual = 0;
let certificados = [
  "assets/certificado1.jpg",
  "assets/certificado2.jpg",
  "assets/certificado3.jpg",
  "assets/certificado4.jpg",
];

function openModal(modalId) {
  if (modalId === "certificadoModal") {
    document.querySelector(".carousel-image").src = certificados[0];
  }
  document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

function showNext() {
  certificadoAtual++;
  if (certificadoAtual >= certificados.length) {
    certificadoAtual = 0;
  }
  document.querySelector(".carousel-image").src =
    certificados[certificadoAtual];
}

function showPrev() {
  certificadoAtual--;
  if (certificadoAtual < 0) {
    certificadoAtual = certificados.length - 1;
  }
  document.querySelector(".carousel-image").src =
    certificados[certificadoAtual];
}

window.onclick = function (event) {
  if (event.target.classList.contains("modal")) {
    event.target.style.display = "none";
  }
};