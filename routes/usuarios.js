var express = require('express');
var router = express.Router();
const auth = require("../middlewares/auth");
const UsuarioController = require("../controllers/UsuarioController");

router.post("/cadastrar", UsuarioController.new);  // Não necessita da middleware Auth
router.post("/login", UsuarioController.login);  // Não necessita da middleware Auth
router.get('/', auth, UsuarioController.index);
router.get('/:id', auth, UsuarioController.search);
router.post('/:id', auth, UsuarioController.update);
router.delete('/:id', auth, UsuarioController.delete);
router.get("/cep/:cep", auth, UsuarioController.cep);
// router.get("/:id/companies",UsuarioController.companies);
//router.get('/:id/profile',UsuarioController.profile);

module.exports = router;