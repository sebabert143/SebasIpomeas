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

  











