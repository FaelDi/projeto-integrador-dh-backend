
var express = require('express');
var router = express.Router();

const EntregaController = require("../controllers/EntregaController");

router.get('/', EntregaController.index);
//router.post("/cadastrar", EntregaController.new);
router.delete('/delete/:id',EntregaController.delete);
router.get('/busca/:id',EntregaController.search);

module.exports = router;