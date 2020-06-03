var express = require('express');
var router = express.Router();
const authMiddleware = require("../middlewares/auth");
const UsuarioController = require("../controllers/UsuarioController");

router.post("/cadastrar", UsuarioController.new);  // Não necessita da middleware Auth
router.post("/login", UsuarioController.login);  // Não necessita da middleware Auth
router.get('/', authMiddleware, UsuarioController.index);
router.get('/:id', authMiddleware, UsuarioController.search);
router.put('/:id', authMiddleware, UsuarioController.update);
router.delete('/:id', authMiddleware, UsuarioController.delete);
router.get("/cep/:cep", /*authMiddleware,*/ UsuarioController.cep);
// router.get("/:id/companies",UsuarioController.companies);
//router.get('/:id/profile',UsuarioController.profile);

module.exports = router;