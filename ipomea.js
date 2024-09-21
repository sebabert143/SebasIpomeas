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

// Evento para mostrar la pantalla de carga inicial
window.addEventListener('load', function() {
    let loader = document.getElementById('loader');
    loader.style.display = 'none'; // Oculta el loader después de la carga
  });
  
  // Publicidad de 5 segundos antes de permitir cerrar
  setTimeout(function() {
    let ad = document.getElementById('advertisement');
    ad.style.display = 'block'; // Muestra el anuncio
    let closeBtn = document.getElementById('close-ad');
    closeBtn.addEventListener('click', function() {
      ad.style.display = 'none'; // Cierra el anuncio
    });
  }, 3000); // Muestra la publicidad después de 3 segundos
  
  // Pop-up que aparece automáticamente después de 10 segundos
  setTimeout(function() {
    let popup = document.getElementById('popup');
    popup.style.display = 'block'; // Muestra el pop-up
    let closePopupBtn = document.getElementById('close-popup');
    closePopupBtn.addEventListener('click', function() {
      popup.style.display = 'none'; // Cierra el pop-up
    });
  }, 10000); // Aparece después de 10 segundos
  
  // Banner de cookies que aparece cuando el usuario hace scroll
  window.addEventListener('scroll', function() {
    let scrollHeight = document.documentElement.scrollHeight;
    let scrollTop = document.documentElement.scrollTop;
    let windowHeight = window.innerHeight;
  
    if (scrollTop + windowHeight > scrollHeight / 2) {
      let cookieBanner = document.getElementById('cookie-banner');
      cookieBanner.style.display = 'block'; // Muestra el banner de cookies
    }
  });
  