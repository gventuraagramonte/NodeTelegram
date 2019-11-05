//se encarga de inicializar el servidor de socket io

const socketIO = require('socket.io');
const socket = {};

function connect(server){
    socket.io = socketIO(server);
}

module.exports = {
    connect,
    socket,
}