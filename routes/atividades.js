var express = require('express');
var router = express.Router();

const AtividadeController = require("../controllers/AtividadeController");


router.get('/', AtividadeController.index);
router.get('/:id',AtividadeController.search);
// router.post("/cadastrar/:fk_empresa/", AtividadeController.new);
// router.put('/:id',AtividadeController.update);
// router.delete('/:id',AtividadeController.delete);

module.exports = router;