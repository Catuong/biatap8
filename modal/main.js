const btnOpenEl = document.getElementById("open-modal-btn");
const modalEl = document.getElementById("modal");
const modalContentEl = document.getElementById("modal-container");

btnOpenEl.addEventListener("click", showModal);

function showModal() {
    modalEl.style.display = "block";
    
}
const btnCloseEl = document.getElementById("close-modal-btn");

btnCloseEl.addEventListener("click", closeModal);

function closeModal() {
    modalEl.style.display = "none";
}