// script.js

// Função para abrir o modal
function openModal() {
    document.getElementById("modalContact").style.display = "block";
}

// Função para fechar o modal
function closeModal() {
    document.getElementById("modalContact").style.display = "none";
}

// Fechar o modal se o usuário clicar fora do conteúdo do modal
window.onclick = function(event) {
    if (event.target == document.getElementById("modalContact")) {
        closeModal();
    }
}
