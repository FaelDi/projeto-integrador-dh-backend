var express = require('express');
var router = express.Router();

const UsuarioController = require("../controllers/UsuarioController");

router.get('/', UsuarioController.index);
router.post("/cadastrar", UsuarioController.new);
router.delete('/delete/:id',UsuarioController.delete);
router.get("/:id/companies",UsuarioController.companies);
//router.get('/:id/profile',UsuarioController.profile);
//router.put('/:id/update',UsuarioController.update);
router.get('/busca/:id',UsuarioController.search);

module.exports = router;