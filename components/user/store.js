//Logica de almacenamiento de datos
const Model = require('./model');
//Ojito ojito las promesas siempre devuelven un valor, cuando no se devuelve nada puede causar un error en el controlador o en network cuando se quiera usar su metodo
function addUser(user){
    const myUser = new Model(user);
    return myUser.save();
}
//metodo 1 para devolver usuarios
// async function getUser(filterUser){
//     let filter = {};
//     if(filterUser !== null){
//         filter = { user:filterUser };
//     }
//     const users= await Model.find(filter);
//     return users;
// }

//metodo 2 para devolver usuarios
function listUsers(){
    return Model.find();
}

module.exports = {
    add: addUser,
    list:listUsers,
}