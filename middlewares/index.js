const validarUsuario = require("../middlewares/validar-usuario");
const validarJWT = require("../middlewares/validar-jwt");
const validarRoles = require("../middlewares/validar-roles");


module.exports = {
    ...validarUsuario,
    ...validarJWT,
    ...validarRoles
}


