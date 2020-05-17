
var express = require('express');
var router = express.Router();

const CotacaoProdutoController = require("../controllers/CotacaoProdutoController");

router.get('/', CotacaoProdutoController.index);
//router.post("/cadastrar", CotacaoProdutoController.new);
router.delete('/delete/:id',CotacaoProdutoController.delete);
router.get('/busca/:id',CotacaoProdutoController.search);

module.exports = router;