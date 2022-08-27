const Usuario = require("../models/usuario");
const Role = require("../models/role");


const esRoleValido = async (item = "") => {
    const existe = await Role.findOne({ rol: item });
    if( !existe ) {
        throw new Error(`El rol '${ item }' no existe`);
    }
}

const existeCorreo = async (item = "") => {
    const existe = await Usuario.findOne({correo: item});
    if( existe ) {
        throw new Error(`El correo '${ item }' ya ha sido registrado con anterioridad`);
    }
}

const existeUsuarioPorID = async (item = "") => {
    const existe = await Usuario.findById( item );
    if( !existe ) {
        throw new Error(`El usuario con id '${ item }' no existe`);
    }
}

module.exports = {
    esRoleValido,
    existeCorreo,
    existeUsuarioPorID
}
