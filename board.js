const modal = document.querySelector(".modal");
const trigger = document.querySelector(".adicionar");
const closeButton = document.querySelector("#fechar");
const confirmButton = document.querySelector("#confirmar")

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

function cleanText() {
    texto.value = null;
}

function confirmText() {
    document.getElementById("texto-capturado").innerText = texto.value;
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
confirmButton.addEventListener("click", confirmText);
confirmButton.addEventListener("click", toggleModal);
closeButton.addEventListener("click", cleanText);