//Toda la logica del controlador
const store = require('./store');


function addUser(name) {
    if (!name) {
        return Promise.reject('Invalid Name');
    }
    const user = {
        name,
    };
    return store.add(user);
};
//metodo 1 para devolver usuarios
// function getUser(filterUser){
//     return new Promise((resolve, reject)=>{
//         resolve(store.list(filterUser));
//     })
// }

//metodo 2 para devolver usuarios
function listUsers(){
    return store.list();
}

module.exports = {
    addUser,
    listUsers,
}