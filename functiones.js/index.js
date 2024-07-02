function toggleResponsiveMenu() {
  // Obtener el elemento del menú de navegación
  const sidebarMenu = document.querySelector('.sidebar');

  // Obtener el elemento del ícono de hamburguesa
  const sidebarToggle = document.querySelector('.sidebar-toggle');

  // Obtener el ancho de la pantalla
  const screenWidth = window.innerWidth;

  // Verificar si la pantalla es responsiva
  if (screenWidth <= 1090) {
    // Alternar el estado del menú
    sidebarMenu.classList.toggle('active');
    sidebarToggle.classList.toggle('open');

    // Aplicar el ancho del menú extendido o el ancho original
    if (sidebarMenu.classList.contains('active')) {
      sidebarMenu.style.width = '60px';
    } else {
      sidebarMenu.style.width = '300px';
    }
  }
}

// Agregar un evento de clic al ícono de hamburguesa
document.querySelector('.sidebar-toggle').addEventListener('click', toggleResponsiveMenu);