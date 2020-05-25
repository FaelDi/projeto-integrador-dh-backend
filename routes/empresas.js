var express = require('express');
var router = express.Router();

const EmpresaController = require("../controllers/EmpresaController");


router.get('/', EmpresaController.index);
router.get('/:id',EmpresaController.search);
router.post("/cadastrar/:fk_usuario/", EmpresaController.new);
router.put('/:id',EmpresaController.update);
router.delete('/:id',EmpresaController.delete);

module.exports = router;