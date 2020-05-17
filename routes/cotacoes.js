
var express = require('express');
var router = express.Router();

const CotacaoController = require("../controllers/CotacaoController");

router.get('/', CotacaoController.index);
//router.post("/cadastrar", CotacaoController.new);
router.delete('/delete/:id',CotacaoController.delete);
router.get('/busca/:id',CotacaoController.search);

module.exports = router;