document.addEventListener("DOMContentLoaded", function () {
  const corpo = document.body;
  const botaoAlternar = document.querySelector("#switch button");

  // Função para alternar o tema com base na largura da janela
  function alternarTema() {
    requestAnimationFrame(() => {
      if (window.innerWidth <= 768) {
        if (corpo.classList.contains("dark-mobile")) {
          corpo.classList.remove("dark-mobile");
          corpo.classList.add("light");
        } else {
          corpo.classList.remove("light");
          corpo.classList.add("dark-mobile");
        }
      } else {
        if (corpo.classList.contains("dark-mode")) {
          corpo.classList.remove("dark-mode");
          corpo.classList.add("light");
        } else {
          corpo.classList.remove("light");
          corpo.classList.add("dark-mode");
        }
      }
    });
  }

  // Anexar o listener de evento ao botão
  botaoAlternar.addEventListener("click", alternarTema);

  // Chamar a função para garantir o estado correto quando a página é carregada
  alternarTema();
});

      // Forçando a renderização:
      body.style.display = 'none';
      setTimeout(() => {
        body.style.display = '';
      }, 10);
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