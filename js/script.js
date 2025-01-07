// script.js

// Função para abrir o modal
function openModal() {
    const modal = document.getElementById("modalContact");
    modal.style.display = "block"; // Exibe o modal
    console.log('Modal aberto');
}

// Função para fechar o modal
function closeModal() {
    const modal = document.getElementById("modalContact");
    modal.style.display = "none"; // Fecha o modal
    console.log('Modal fechado');
}

// Fechar o modal se o usuário clicar fora do conteúdo do modal
window.onclick = function(event) {
    const modal = document.getElementById("modalContact");
    if (event.target == modal) {
        closeModal();
    }
}
