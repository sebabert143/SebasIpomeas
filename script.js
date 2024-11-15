window.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loadingScreen');
    const adScreen = document.getElementById('adScreen');
    const pageContent = document.getElementById('pageContent');
    const closeAd = document.getElementById('closeAd');
    const countdown = document.getElementById('countdown');
    const popupScreen = document.getElementById('popupScreen'); // Pop-up
    const closePopup = document.getElementById('closePopup');   // Botón para cerrar el pop-up
    const cookieBanner = document.getElementById('cookieBanner'); // Banner de cookies
    const acceptCookies = document.getElementById('acceptCookies'); // Botón para aceptar cookies
    let cookiesAccepted = false;

    // Circulo de carga que aparece durante 3 segundos
    setTimeout(function() {
        loadingScreen.style.display = 'none';  // Ocultar pantalla de carga
        adScreen.style.display = 'flex';  // Mostrar publicidad
        startCountdown();  // Iniciar cuenta regresiva de la publicidad
    }, 1000);

    // Cuenta regresiva de 5 segundos para la publicidad de Kim
    function startCountdown() {
        let timeLeft = 5;
        const countdownInterval = setInterval(function() {
            countdown.textContent = timeLeft;
            timeLeft--;
            if (timeLeft < 0) {
                clearInterval(countdownInterval);
                closeAd.style.display = 'block';  // Mostrar botón de cerrar
            }
        }, 1000);
    }

    // Al hacer clic en el botón de cerrar, se muestra el contenido de la página
    closeAd.addEventListener('click', function() {
        adScreen.style.display = 'none';  // Ocultar publicidad
        pageContent.style.display = 'block';  // Mostrar contenido de la página

        // Mostrar el pop-up 10 segundos después de cerrar la publicidad
        setTimeout(function() {
            popupScreen.style.display = 'flex';  // Mostrar el pop-up
        }, 10000);
    });

    // Ocultar el pop-up cuando se hace clic en la cruz
    closePopup.addEventListener('click', function() {
        popupScreen.style.display = 'none';  // Ocultar pop-up
    });

    // Detectar cuando se baja más de la mitad de la página
    window.addEventListener('scroll', function() {
        if (!cookiesAccepted) {
            const scrollHeight = document.documentElement.scrollHeight;
            const scrollPosition = window.scrollY + window.innerHeight;
            if (scrollPosition >= scrollHeight / 2) {
                // Mostrar el banner de cookies y bloquear el scroll
                document.body.style.overflow = 'hidden';  // Bloquear scroll
                cookieBanner.classList.remove('hidden');  // Mostrar banner de cookies
            }
        }
    });

    // Al aceptar las cookies, ocultar el banner y desbloquear el scroll
    acceptCookies.addEventListener('click', function() {
        cookiesAccepted = true;
        cookieBanner.classList.add('hidden');  // Ocultar banner de cookies
        document.body.style.overflow = 'auto';  // Desbloquear scroll
    });
});



// encuesta
document.addEventListener("DOMContentLoaded", function() {
    const checkboxes = document.querySelectorAll(".color-checkbox");
    const mensajeError = document.getElementById("mensaje-error");

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", () => {
            const seleccionados = document.querySelectorAll(".color-checkbox:checked").length;

            if (seleccionados > 3) {
                mensajeError.textContent = "¡Solo puedes seleccionar hasta 3 colores!";
                mensajeError.style.display = "block";
                checkbox.checked = false;
            } else if (seleccionados < 3) {
                mensajeError.textContent = "Selecciona exactamente 3 colores antes de enviar.";
                mensajeError.style.display = "block";
            } else {
                mensajeError.style.display = "none";
            }
        });
    });
});

function validarFormulario() {
    const seleccionados = document.querySelectorAll(".color-checkbox:checked").length;
    if (seleccionados !== 3) {
        document.getElementById("mensaje-error").textContent = "Selecciona exactamente 3 colores.";
        document.getElementById("mensaje-error").style.display = "block";
        return false;
    }
    return true;
}


function enviarEncuesta() {
    const seleccionados = document.querySelectorAll(".color-checkbox:checked").length;
    const mensajeError = document.getElementById("mensaje-error");
    const mensajeExito = document.getElementById("mensaje-exito");

    // Verifica si se seleccionan exactamente 3 opciones
    if (seleccionados !== 3) {
        mensajeError.textContent = "Selecciona exactamente 3 colores antes de enviar.";
        mensajeError.style.display = "block";
        mensajeExito.style.display = "none"; // Oculta el mensaje de éxito si hay un error
        return false; // Evita que el formulario se envíe
    } else {
        mensajeError.style.display = "none"; // Oculta el mensaje de error
        mensajeExito.style.display = "block"; // Muestra el mensaje de éxito
        document.getElementById("encuesta-form").reset(); // Resetea el formulario
        return false; // Evita el envío del formulario para que el mensaje permanezca visible
    }
}



// final encuesta


// Cargar ideas de ornamentacion desde un archivo JSON
fetch('ideas.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('ideas-container');
    data.forEach(idea => {
      // Crear un div para cada idea
      const ideaCard = document.createElement('div');
      ideaCard.className = 'idea-card';

      // Insertar imagen y descripción
      ideaCard.innerHTML = `
        <img src="${idea.imagen}" alt="Idea de Ornamentación" class="idea-image">
        <p class="idea-description">${idea.descripcion}</p>
      `;

      // Agregar la tarjeta al contenedor
      container.appendChild(ideaCard);
    });
  })
  .catch(error => console.error('Error al cargar las ideas de ornamentación:', error));


// carrusel

  document.addEventListener("DOMContentLoaded", function () {
    const carrusel = document.querySelector(".carrusel");
    const items = Array.from(document.querySelectorAll(".categoria-item"));
    const visibleItems = 3; // Cantidad de elementos visibles
    const itemWidth = items[0].offsetWidth;
    const gap = parseInt(window.getComputedStyle(carrusel).gap || "0");
    const totalWidth = itemWidth + gap;
    let currentIndex = 0;

    // Clonar ítems para bucle infinito
    items.forEach(item => {
        const cloneStart = item.cloneNode(true);
        const cloneEnd = item.cloneNode(true);
        carrusel.appendChild(cloneStart);
        carrusel.insertBefore(cloneEnd, carrusel.firstChild);
    });

    // Posicionar en el centro de los ítems originales
    carrusel.style.transform = `translateX(${-items.length * totalWidth}px)`;

    function moveCarousel(direction) {
        carrusel.style.transition = "transform 0.5s ease";
        currentIndex += direction;

        // Aplicar el movimiento
        carrusel.style.transform = `translateX(${
            -((items.length + currentIndex) * totalWidth)
        }px)`;

        // Verificar si se necesita rebobinar
        setTimeout(() => handleTransitionEnd(), 500); // Usar un timeout en lugar de `transitionend`
    }

    function handleTransitionEnd() {
        carrusel.style.transition = "none";
        if (currentIndex >= items.length) {
            currentIndex = 0;
            carrusel.style.transform = `translateX(${-items.length * totalWidth}px)`;
        } else if (currentIndex < 0) {
            currentIndex = items.length - 1;
            carrusel.style.transform = `translateX(${
                -((items.length + currentIndex) * totalWidth)
            }px)`;
        }
    }

    document.querySelector(".izquierda").addEventListener("click", () => moveCarousel(-1));
    document.querySelector(".derecha").addEventListener("click", () => moveCarousel(1));
});

// carrusel

