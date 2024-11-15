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



document.getElementById('login-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Evitar envío predeterminado del formulario

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Limpia los mensajes de error previos
  document.querySelectorAll('.error-message').forEach(msg => (msg.textContent = ''));
  document.getElementById('global-error').textContent = '';

  let isValid = true;

  // Validar correo electrónico
  if (!emailPattern.test(email)) {
    document.querySelector('label[for="email"] + .error-message').textContent =
      'Por favor, ingresa un correo electrónico válido.';
    isValid = false;
  }

  // Validar contraseña
  if (password.length < 8) {
    document.querySelector('label[for="password"] + .error-message').textContent =
      'La contraseña debe tener al menos 8 caracteres.';
    isValid = false;
  }

  if (!isValid) {
    return;
  }

    // Simular un inicio de sesión exitoso y redirigir al index.html
    alert('Inicio de sesión exitoso.');
    window.location.href = 'index.html'; // Redirección al index.html

  // Simular un proceso de autenticación
  fetch('/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Error en el servidor. Intenta nuevamente más tarde.');
      }
      return response.json();
    })
    .then(data => {
      alert('Inicio de sesión exitoso.');
      window.location.href = '/dashboard'; // Redirigir después de login exitoso
    })
    .catch(error => {
      document.getElementById('global-error').textContent = error.message;
    });
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

