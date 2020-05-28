
var express = require('express');
var router = express.Router();

const CotacaoController = require("../controllers/CotacaoController");

router.get('/', /*authMiddleware,*/ CotacaoController.index);
//router.post("/cadastrar", /*authMiddleware,*/ CotacaoController.new);
router.delete('/delete/:id', /*authMiddleware,*/ CotacaoController.delete);
router.get('/busca/:id', /*authMiddleware,*/ CotacaoController.search);

module.exports = router;