//Cuando todo sale bien
exports.success = function(req, res, message, status){
    res.status(status || 200).send({
        error:'',
        body:message
    });
}


//Cuando todo sale mal
exports.error = function(req, res, message, status, details){
    console.error(details);
    res.status(status || 500).send({
        error:message,
        body:'',
    });
}