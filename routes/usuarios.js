var express = require('express');
var router = express.Router();

const UsuarioController = require("../controllers/UsuarioController");

router.get('/', UsuarioController.index);
router.get('/:id',UsuarioController.search);
router.post("/cadastrar", UsuarioController.new);
router.put('/:id',UsuarioController.update);
router.delete('/:id',UsuarioController.delete);
// router.get("/:id/companies",UsuarioController.companies);
//router.get('/:id/profile',UsuarioController.profile);

module.exports = router;