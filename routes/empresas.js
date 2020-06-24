var express = require('express');
var router = express.Router();
const authMiddleware = require("../middlewares/auth");
const EmpresaController = require("../controllers/EmpresaController");


router.get('/', /*authMiddleware,*/ EmpresaController.index);
router.get('/:id', /*authMiddleware,*/ EmpresaController.search);
router.post("/cadastrar/:fk_usuario/", /*authMiddleware,*/ EmpresaController.new);
router.put('/:id', /*authMiddleware,*/ EmpresaController.update);
router.delete('/:id', /*authMiddleware,*/ EmpresaController.delete);

module.exports = router;