const db = require('mongoose');

db.Promise = global.Promise;

async function connect(url){
    await db.connect(url,{
        userNewUrlParser:true,
    });
    console.log('[db] Conexión exitosa');
}

module.exports = connect;