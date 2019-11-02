const express = require('express');
const bodyParser = require('body-parser');
//Con Router, podremos separar cabeceras, podemos gestionar peticiones
const router = require('./network/routes');


var app = express();
app.use(bodyParser.json());
//app.use(router);

router(app);


app.use('/app', express.static('public'));

// app.use('/', function(req, res) {
//     res.send('Hola');
// })

app.listen(3004);
console.log('La aplicacion está escuchando es localhost:3004');