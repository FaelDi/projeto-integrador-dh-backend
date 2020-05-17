
var express = require('express');
var router = express.Router();

const PagamentoController = require("../controllers/PagamentoController");

router.get('/', PagamentoController.index);
router.get('/:id',PagamentoController.search);
router.post("/cadastrar/:fk_usuario/", PagamentoController.new);
router.put('/:id',PagamentoController.update);
router.delete('/:id',PagamentoController.delete);

module.exports = router;