var socket = io();

socket.on('connect', () => {
    console.log('Conectado al servidor');
});

socket.on('disconnect', () => {
    console.log('Desconectado del servidor');
});

socket.emit('enviarSaludo', {
    nombre: 'David',
    message: 'Hola Mundo'
}, (res) => {
    console.log(res);
});

socket.on('enviarSaludo', (data) => {
    console.log(data);
});