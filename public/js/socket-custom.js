var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

// Escuchar
socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});

// Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Pedro',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log(resp);
});

socket.on('enviarMensaje', function(mensaje) {
    console.log('Desde el servidor:', mensaje);
});