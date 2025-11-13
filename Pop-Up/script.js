// Pega os elementos do DOM
const modal = document.getElementById("myModal");
const btn = document.getElementById("openPopupBtn");
const span = document.getElementsByClassName("close-btn")[0];
const actionBtn = document.getElementsByClassName("action-btn")[0];

// 1. Quando o usuário clica no botão, abre o modal
btn.onclick = function() {
  modal.style.display = "block";
}

// 2. Quando o usuário clica no (x), fecha o modal
span.onclick = function() {
  modal.style.display = "none";
}

// 3. Quando o usuário clica no botão de ação, fecha o modal (exemplo)
actionBtn.onclick = function() {
  alert("Ação executada!");
  modal.style.display = "none";
}

// 4. Quando o usuário clica em qualquer lugar fora do modal, fecha o modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}