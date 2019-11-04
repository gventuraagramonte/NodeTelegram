const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();



//la ruta que queremos que escuche
router.get('/', function(req, res){
    controller.getMessages()
        .then((messageList)=>{
            response.success(req, res, messageList, 200);
        })
        .catch(e=>{
            response.error(req, res, 'Unexpected Error', 500, e);
        })
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