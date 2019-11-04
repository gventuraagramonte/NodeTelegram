//en este array se van a guardar todos los mensajes
const db = require('mongoose');
const Model = require('./model');

//Conexión a la base de datos
db.Promise = global.Promise;
db.connect('mongodb://localhost/telegram',{
    useNewUrlParser:true,
});
console.log('[db] Conexión exitosa');

function addMessage(message){
    //list.push(message);
    const myMessage = new Model(message);
    myMessage.save();
}

async function getMessage(){
    // return list;
    const messages = await Model.find();
    return messages;
}

module.exports = {
    add: addMessage,
    list: getMessage,
}