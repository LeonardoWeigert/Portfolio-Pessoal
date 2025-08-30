// Atualiza o ano do rodapé automaticamente
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Previne envio real do formulário
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    alert('Formulário de demonstração — sem envio.');
  });
}
