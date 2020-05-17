
var express = require('express');
var router = express.Router();

const ProdutoController = require("../controllers/ProdutoController");

router.get('/', ProdutoController.index);
//router.post("/cadastrar", ProdutoController.new);
router.delete('/delete/:id',ProdutoController.delete);
router.get('/busca/:id',ProdutoController.search);

module.exports = router;