const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Esta parte del user y el uso de ObjectId
//Es un complemento para relacionar el usuario
//Con los mensajes
const mySchema = new Schema({
    chat: {
        type: Schema.ObjectId,
        ref: 'Chat'
    },
    user: {
        type: Schema.ObjectId,
        ref:'User',
    },
    message: {
        type: String,
        required: true,
    },
    date: Date,
    file: String, //Para trabajar con imagenes
});

const model = mongoose.model('Message', mySchema);

module.exports = model;