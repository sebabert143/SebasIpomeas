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
document.addEventListener("DOMContentLoaded", function () {
    const carrusel = document.querySelector(".carrusel");
    const items = Array.from(document.querySelectorAll(".categoria-item"));
    const visibleItems = 3;
    const itemWidth = items[0].offsetWidth + 15; // Ancho de cada ítem con margen
    let currentIndex = visibleItems;

    // Duplicar elementos al inicio y al final para un efecto cíclico
    items.slice(0, visibleItems).forEach(item => carrusel.appendChild(item.cloneNode(true)));
    items.slice(-visibleItems).forEach(item => carrusel.insertBefore(item.cloneNode(true), carrusel.firstChild));

    // Ajustar posición inicial
    carrusel.style.transform = `translateX(${-currentIndex * itemWidth}px)`;

    function moverCarrusel(direccion) {
        currentIndex += direccion;
        carrusel.style.transition = "transform 0.5s ease";
        carrusel.style.transform = `translateX(${-currentIndex * itemWidth}px)`;

        carrusel.addEventListener("transitionend", ajustarPosicion);
    }

    function ajustarPosicion() {
        carrusel.removeEventListener("transitionend", ajustarPosicion);

        if (currentIndex >= items.length) {
            currentIndex = visibleItems;
            carrusel.style.transition = "none";
            carrusel.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
        } else if (currentIndex < visibleItems) {
            currentIndex = items.length - visibleItems;
            carrusel.style.transition = "none";
            carrusel.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
        }
    }

    // Botones de desplazamiento
    document.querySelector(".izquierda").addEventListener("click", () => moverCarrusel(-1));
    document.querySelector(".derecha").addEventListener("click", () => moverCarrusel(1));
});





// carrusel

