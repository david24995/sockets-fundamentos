const express = require('express');
const socket = require('socket.io');
const http = require('http');
const path = require('path');

const app = express();
let server = http.createServer(app);

let publicPath = path.resolve(__dirname, '../public/');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// IO mantendrá una comunicación con el BACK-END
module.exports.ios = socket(server);
require('./sockets/socket');


server.listen(port, (err) => {
    if (err) return console.error(err);
    console.log(`Esta corriendo en el puerto ${port} `);
});