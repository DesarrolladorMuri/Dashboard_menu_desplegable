// Seleccionar el elemento con la clase "sidebar-toggle"
const sidebarToggle = document.querySelector('.sidebar-toggle');
// Seleccionar el elemento con la clase "sidebar"
const sidebar = document.querySelector('.sidebar');
// Seleccionar el elemento con la clase "main"
// const main = document.querySelector('.main');

// Agregar un evento de clic al elemento con la clase "sidebar-toggle"
sidebarToggle.addEventListener('click', () => {
  // Alternar la clase "active" en el elemento con la clase "sidebar"
  sidebar.classList.toggle('active');
  // Alternar la clase "overlay" en el elemento con la clase "main"
  // main.classList.toggle('overlay');
});
