const fs = require("fs");

//Função Log do middleware
function logSite(req,res,next){

    fs.appendFileSync('log.txt'," \n O usuario entrou na url  "+req.url);
    next();
}

module.exports = logSite;