function enviarDatos(email, nombre, apellido, mensaje) {
    const emailEncoded = encodeURIComponent(email);
    const nombreEncoded = encodeURIComponent(nombre);
    const apellidoEncoded = encodeURIComponent(apellido);
    const mensajeEncoded = encodeURIComponent(mensaje);

    const url = `https://magicloops.dev/api/loop/run/f30462a6-7678-4162-b3f4-a37119342e70?EMAIL=${emailEncoded}&Nombre=${nombreEncoded}&Apellido=${apellidoEncoded}&Mensaje=${mensajeEncoded}`;

    fetch(url, {
        mode: 'no-cors' // Modo no-cors, permite hacer la solicitud pero no obtener datos de la respuesta
    })
    .then(() => {
        console.log('Solicitud realizada, pero la respuesta no se puede leer debido a las restricciones de CORS.');
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

enviarDatos('prueba@pruebafacu.com', 'Facu', 'Romero', 'Este es un nuevo mensaje, ya que necesitaba otra prueba');
