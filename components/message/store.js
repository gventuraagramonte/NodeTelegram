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
    const myMessage = new Model(message);
    myMessage.save();
}

async function getMessage(filterUser){
    return new Promise((resolve, reject)=>{
        let filter = {};
        if(filterUser !== null){
            filter = { user:filterUser };
        }
        const messages = Model.find(filter)
            .populate('user')
            .exec((error,populated)=>{
                if(error){
                    reject(error);
                    return false;
                }

                resolve(populated)
            });
    });
}

async function updateText(id, message){
    const foundMessage = await Model.findOne({
        _id:id
    });

    foundMessage.message = message;
    const newMessage = await foundMessage.save();
    return newMessage;
}

function removeMessage(id){
    return Model.deleteOne({
        _id:id
    });
}

module.exports = {
    add: addMessage,
    list: getMessage,
    updateText: updateText,
    remove: removeMessage,
}