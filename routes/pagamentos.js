
var express = require('express');
var router = express.Router();

const PagamentoController = require("../controllers/PagamentoController");

router.get('/', PagamentoController.index);
//router.post("/cadastrar", PagamentoController.new);
router.delete('/delete/:id',PagamentoController.delete);
router.get('/busca/:id',PagamentoController.search);

module.exports = router;