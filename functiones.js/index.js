// Selecciona los elementos necesarios
const sidebar = document.querySelector('.sidebar');
const sidebarToggle = document.querySelector('.sidebar-toggle');
const main = document.querySelector('.main');
const overlay = document.querySelector('.overlay');

// Agrega un evento de clic al botón del menú
sidebarToggle.addEventListener('click', () => {
  sidebar.classList.toggle('active');
  main.classList.toggle('active');
  overlay.style.display = sidebar.classList.contains('active') ? 'block' : 'none';
});