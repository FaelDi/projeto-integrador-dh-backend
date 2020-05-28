
var express = require('express');
var router = express.Router();

const CotacaoProdutoController = require("../controllers/CotacaoProdutoController");

router.get('/', /*authMiddleware,*/ CotacaoProdutoController.index);
//router.post("/cadastrar", CotacaoProdutoController.new);
router.delete('/delete/:id', /*authMiddleware,*/ CotacaoProdutoController.delete);
router.get('/busca/:id', /*authMiddleware,*/ CotacaoProdutoController.search);

module.exports = router;