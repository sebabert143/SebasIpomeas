fetch('footer.html') 
.then(response => response.text()) 
.then(data => { 
    document.getElementById('footer-placeholder').innerHTML = data; 
});

fetch('nav.html') 
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
  
