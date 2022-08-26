const { Router } = require("express");
const { usuarioGet, usuarioPut, usuarioPost, usuarioDelete, usuarioPatch } = require("../controllers/usuario");


const router = Router();

router.get("/", usuarioGet);
router.post("/", usuarioPost);
router.put("/:id", usuarioPut);
router.patch("/", usuarioPatch);
router.delete("/", usuarioDelete);


module.exports = router;

