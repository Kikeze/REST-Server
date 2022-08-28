const { request, response } = require("express");
const bcryptjs = require("bcryptjs");
const { generarJWT } = require("../helpers/jwt-generator")
const Usuario = require("../models/usuario");


const loginUser = async (req = request, res = response) => {
    const correo = req.body.correo;
    const password = req.body.password;

    try {
        const message = "El Usuario / Password no son correctos";
        const usuario = await Usuario.findOne({ correo: correo });

        if( !usuario ) {
            return res.status(400).json({
                msg: message
            });
        }

        if( !usuario.estado ) {
            return res.status(400).json({
                msg: message
            });
        }

        const validPassword = bcryptjs.compareSync(password, usuario.password);
        if( !validPassword ) {
            return res.status(400).json({
                msg: message
            });
        }

        const token = await generarJWT( usuario.id );

        res.json({
            msg: "Login OK",
            usuario,
            token
        });
    
    }
    catch(err) {
        console.log(err);
        res.status(500).json({
            msg: "Imposible continuar, no se puede autenticar su usuario"
        })
    }
};


module.exports = {
    loginUser
}

