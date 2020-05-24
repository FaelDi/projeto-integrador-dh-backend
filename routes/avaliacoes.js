
var express = require('express');
var router = express.Router();

const AvaliacaoController = require("../controllers/AvaliacaoController");

router.get('/', AvaliacaoController.index);
router.get('/:id',AvaliacaoController.search);
router.post("/cadastrar", AvaliacaoController.new);
router.put('/:id',AvaliacaoController.update);
router.delete('/:id',AvaliacaoController.delete);

module.exports = router;