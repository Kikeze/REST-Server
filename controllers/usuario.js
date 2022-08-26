const {request, response} = require("express");


const usuarioGet = (req = request, res = response) => {
    const query = req.query;

    res.json({
        msg: "get API - Controlador",
        query
    });
};

const usuarioPost = (req = request, res = response) => {
    const body = req.body;

    res.json({
        msg: "post API - Controlador",
        body
    });
};

const usuarioPut = (req = request, res = response) => {
    const params = req.params;

    res.json({
        msg: "put API - Controlador",
        params
    });
};

const usuarioPatch = (req = request, res = response) => {
    res.json({
        msg: "patch API - Controlador"
    });
};

const usuarioDelete = (req = request, res = response) => {
    res.json({
        msg: "delete API - Controlador"
    });
};


module.exports = {
    usuarioGet,
    usuarioPut,
    usuarioPost,
    usuarioDelete,
    usuarioPatch,
};
