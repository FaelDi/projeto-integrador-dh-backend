var express = require('express');
var router = express.Router();

const AvaliacaoController = require("../controllers/AvaliacaoController");

/**
 * Todas as rotas de avaliacao começam com /avaliacoes
 * e então tem como complemento as listadas abaixo
**/

router.get('/', /*authMiddleware,*/ AvaliacaoController.index);
router.get('/:id', /*authMiddleware,*/ AvaliacaoController.search);
router.post("/cadastrar", /*authMiddleware,*/ AvaliacaoController.new);
router.put('/:id', /*authMiddleware,*/ AvaliacaoController.update);
router.delete('/:id', /*authMiddleware,*/ AvaliacaoController.delete);

module.exports = router;