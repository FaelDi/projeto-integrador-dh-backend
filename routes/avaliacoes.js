
var express = require('express');
var router = express.Router();

const AvaliacaoController = require("../controllers/AvaliacaoController");

router.get('/', AvaliacaoController.index);
//router.post("/cadastrar", AvaliacaoController.new);
router.delete('/delete/:id',AvaliacaoController.delete);
router.get('/busca/:id',AvaliacaoController.search);

module.exports = router;