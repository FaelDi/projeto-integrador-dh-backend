var express = require('express');
var router = express.Router();

const AtividadeController = require("../controllers/AtividadeController");


router.get('/', /*authMiddleware,*/ AtividadeController.index);
router.get('/:id',/*authMiddleware,*/ AtividadeController.search);
// router.post("/cadastrar/:fk_empresa/", /*authMiddleware,*/ AtividadeController.new);
// router.put('/:id', /*authMiddleware,*/ AtividadeController.update);
// router.delete('/:id', /*authMiddleware,*/ AtividadeController.delete);

module.exports = router;