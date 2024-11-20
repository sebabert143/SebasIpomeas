function enviarMail(nombre, apellido, mensaje) {
    // correo que recibe los mensajes:
    const emailFijo = "sebastianbertoluzza@gmail.com"; 
    const emailEncoded = encodeURIComponent(emailFijo);
    const nombreEncoded = encodeURIComponent(nombre);
    const apellidoEncoded = encodeURIComponent(apellido);
    const mensajeEncoded = encodeURIComponent(mensaje);

    
    const url = `https://magicloops.dev/api/loop/run/101d7b77-63ed-42a9-9dd1-30fa361be960?email=${emailEncoded}&nombre=${nombreEncoded}&apellido=${apellidoEncoded}&mensaje=${mensajeEncoded}`;

    fetch(url) 
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la solicitud: ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            console.log('Respuesta del servidor:', data); 
            return true;
        })
        .catch(error => {
            console.error('Hubo un error:', error);
            return false;
        });
}

function enviarCorreo() {
    const usuario = document.getElementById("nombreUsuario").value;
    const apellido = document.getElementById("apellidoUsuario").value;
    const mensaje = document.getElementById("mensajeUsuario").value;
    console.log(usuario, apellido, mensaje);
    enviarMail(usuario, apellido, mensaje);
    return false;
}

