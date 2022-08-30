const express = require("express");
const cors = require("cors");
const { dbConnection } = require("../database/config");


class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.paths = {
            auth: "/api/auth",
            usuario: "/api/usuario",
            categoria: "/api/categoria",
            producto: "/api/producto",
            buscar: "/api/buscar"
        };

        this.conectarDB();

        this.middlewares();
        this.routes();
    }

    async conectarDB() {
        await dbConnection();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static("public"));
    }

    routes() {
        this.app.use(this.paths.auth, require("../routes/auth"));
        this.app.use(this.paths.usuario, require("../routes/usuario"));
        this.app.use(this.paths.categoria, require("../routes/categoria"));
        this.app.use(this.paths.producto, require("../routes/producto"));
        this.app.use(this.paths.buscar, require("../routes/buscar"));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("Servidor corriendo en el puerto", this.port);
        });
    }

}


module.exports = Server;
