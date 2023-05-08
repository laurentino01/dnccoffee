const funcionamento = document.getElementById("funcionamento");
const navLinkList = document.querySelectorAll(".nav-link");
const funcionamentoBtn = navLinkList.item(2);
const fade = document.querySelectorAll(".fade:not(.show)").item(0);

funcionamentoBtn.addEventListener("click", openModal);

function openModal() {
  funcionamento.style.display = "flex";

  setTimeout(() => {
    fade.style.opacity = "1";
    funcionamento.addEventListener("click", closeModal);
  }, 300);
}

function closeModal() {
  fade.style.opacity = "0";

  setTimeout(() => {
    funcionamento.style.display = "none";
    funcionamento.removeEventListener("click", closeModal);
  }, 300);
}
