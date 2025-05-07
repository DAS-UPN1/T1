// Agregar animación de clic en el botón
document.getElementById('actionButton').addEventListener('click', function() {
    alert('¡Haz hecho clic en el botón! 🎉');
    this.style.backgroundColor = '#e74c3c'; // Cambia el color del botón a rojo después del clic
    this.style.transform = 'scale(1.2)';
    this.style.transition = 'transform 0.2s ease, background-color 0.2s ease'; // Transición de color y escala
  });
  
  // Animación de aparición de enlaces de navegación
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('mouseover', () => {
      link.style.transition = 'transform 0.3s ease, color 0.3s ease';
      link.style.transform = 'scale(1.1)';
    });
  
    link.addEventListener('mouseout', () => {
      link.style.transform = 'scale(1)';
    });
  });
  
  // Cambiar fondo de la página al hacer clic en el pie de página
  document.querySelector('footer').addEventListener('click', () => {
    document.body.style.backgroundColor = '#ecf0f1';
    document.body.style.transition = 'background-color 1s ease';
  });
  