const { ios } = require('../server');

ios.on('connection', (client) => {
    console.log('Usuario conectado');

    client.emit('enviarSaludo', {
        nombre: 'Administrador',
        message: 'Bienvenido a esta aplicación'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    client.on('enviarSaludo', (data, callback) => {

        client.broadcast.emit('enviarSaludo', data);

        // if (data.nombre) {
        //     callback({
        //         message: 'Se envio con éxito el mensaje'
        //     });
        // } else {
        //     callback({
        //         err: 'Error al enviar la data !!!!'
        //     });
        // }

    });

});