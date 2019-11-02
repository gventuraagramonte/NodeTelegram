const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();



//la ruta que queremos que escuche
router.get('/', function(req, res){
    console.log(req.headers);
    res.header({
        "custom-header":"nuestro valor personalizado",
    });
    response.success(req, res, 'Lista de mensajes');
});

//la ruta que queremos que le envie una respuesta
router.post('/', function(req, res){
    
    controller.addMessage(req.body.user, req.body.message)
        .then((fullMessage)=>{
            response.success(req, res, fullMessage,201);
        })
        .catch(e=>{
            response.error(req, res, 'información invalida', 400, 'Error en el controller');    
        })
    
    ;
});

module.exports = router;