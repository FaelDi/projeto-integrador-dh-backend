var express = require('express');
var router = express.Router();
const authMiddleware = require("../middlewares/auth");
const UsuarioController = require("../controllers/UsuarioController");

router.post("/cadastrar",authMiddleware, UsuarioController.new);
router.post("/login",authMiddleware, UsuarioController.login);
router.get('/',authMiddleware, UsuarioController.index);
router.get('/:id',authMiddleware, UsuarioController.search);
router.put('/:id',authMiddleware, UsuarioController.update);
router.delete('/:id',authMiddleware, UsuarioController.delete);
// router.get("/:id/companies",UsuarioController.companies);
//router.get('/:id/profile',UsuarioController.profile);

module.exports = router;