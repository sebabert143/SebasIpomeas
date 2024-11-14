fetch('footer.html') 
.then(response => response.text()) 
.then(data => { 
    document.getElementById('footer-placeholder').innerHTML = data; 
});

fetch('navbar.html') 
.then(response => response.text()) 
.then(data => { 
    document.getElementById('navbar-placeholder').innerHTML = data; 
});



document.querySelector('form').addEventListener('submit', function(event) {
    // Obtener los valores de los campos
    let email = document.getElementById('exampleFormControlInput1').value;
    let password = document.getElementById('exampleFormControlInput1').value;
  
    // Patrón de validación para el email
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  
    // Limpiar mensajes de error previos
    document.querySelectorAll('.error-message').forEach(function(msg) {
      msg.remove();
    });
  
    let isValid = true;
  
    // Validar correo electrónico
    if (!emailPattern.test(email)) {
      let errorMsg = document.createElement('p');
      errorMsg.className = 'error-message text-danger';
      errorMsg.innerText = 'Por favor, ingresa un correo electrónico válido.';
      document.querySelector('label[for="exampleFormControlInput1"]').appendChild(errorMsg);
      isValid = false;
    }
  
    // Validar contraseña
    if (password.length < 8) {
      let errorMsg = document.createElement('p');
      errorMsg.className = 'error-message text-danger';
      errorMsg.innerText = 'La contraseña debe tener al menos 8 caracteres.';
      document.querySelector('label[for="exampleFormControlInput1"]').appendChild(errorMsg);
      isValid = false;
    }
  
    // Si hay errores, prevenir el envío del formulario
    if (!isValid) {
        window.location.href = 'https://www.booking.com/';
  } else {
      event.preventDefault();
    }
  });
  

// carrusel
const carrusel = document.querySelector('.carrusel');
const items = Array.from(document.querySelectorAll('.categoria-item'));
const visibleItems = 3; // Número de categorías visibles a la vez
let currentIndex = visibleItems; // Comienza en la primera categoría visible después de los duplicados

// Duplicar elementos al inicio y al final para crear el efecto cíclico
items.slice(0, visibleItems).forEach(item => carrusel.appendChild(item.cloneNode(true))); // Clona los primeros al final
items.slice(-visibleItems).forEach(item => carrusel.insertBefore(item.cloneNode(true), carrusel.firstChild)); // Clona los últimos al inicio

function moverCarrusel(direccion) {
    const itemWidth = items[0].offsetWidth + 15; // Ancho del item más el margen
    currentIndex += direccion;

    carrusel.style.transition = 'transform 0.5s ease';
    carrusel.style.transform = `translateX(${-currentIndex * itemWidth}px)`;

    // Detecta el final de la transición para el ajuste de la posición
    carrusel.addEventListener('transitionend', function ajustarPosicion() {
        if (currentIndex >= items.length) {
            currentIndex = visibleItems;
            carrusel.style.transition = 'none';
            carrusel.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
        } else if (currentIndex < visibleItems) {
            currentIndex = items.length - visibleItems;
            carrusel.style.transition = 'none';
            carrusel.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
        }
        // Quita el evento para evitar múltiples llamadas
        carrusel.removeEventListener('transitionend', ajustarPosicion);
    });
}




// carrusel

