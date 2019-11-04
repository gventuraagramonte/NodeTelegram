//Toda la informacion de red
const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

//devolviendo los usuarios alternativa 1
// router.get('/', function(req, res){
//     const filterUser = req.query.name || null;

//     controller.getUser(filterUser)
//         .then((userList)=>{
//             response.success(req, res, userList, 200);
//         })
//         .catch(e=>{
//             response.error(req, res, 'Unexpected Error', 500, e);
//         })
// });


//devolviendo los usuarios alternativa 2
router.get('/',function(req, res){
    controller.listUsers()
        .then(users=>{
            response.success(req,res,users,200);
        })
        .catch(err=>{
            response.error(req,res,'Internal Error',500,err);
        });
});

//ingresando usuarios
router.post('/',function(req,res){
    controller.addUser(req.body.name)
        .then(data=>{
            response.success(req, res, data, 201);
        }).catch(err=>{
            response.error(req, res, 'Internal Error',500,err)
        });
});

module.exports = router;