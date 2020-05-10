var express = require('express');
var router = express.Router();

const usuarioController = require("../controllers/usuarioController");

router.get('/',usuarioController.index);
router.post("/cadastrarUsuario",usuarioController.new);
router.delete('/delete/:id',usuarioController.delete);
router.get("/:id/companies",usuarioController.companies);
//router.get('/:id/profile',usuarioController.profile);
//router.put('/:id/update',usuarioController.update);
router.get('/busca/:id',usuarioController.search);

module.exports = router;