const express = require('express');
const app = express();
const server = require('http').Server(app);

const cors = require('cors');
const bodyParser = require('body-parser');
const socket = require('./socket');
const db = require('./db');
const router = require('./network/routes');

db('mongodb://localhost/telegram');
//Con Router, podremos separar cabeceras, podemos gestionar peticiones

app.use(cors());

app.use(bodyParser.json());
//app.use(router);

socket.connect(server);

router(app);


app.use('/app', express.static('public'));

// app.use('/', function(req, res) {
//     res.send('Hola');
// })

server.listen(3004, function(){
    console.log('La aplicacion está escuchando es localhost:3004');
});