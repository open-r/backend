"use strict";
const API_VERSION = require("./package.json").version;
const CONFIG = require("./config.json");
const SERVER_PORT = process.env.PORT || CONFIG.server.port || 8080;

const express = require("express");
const Sequelize = require("sequelize");

const app = express();
const router = express.Router();

app.use(express.urlencoded());
app.use(express.json());

const sqlize = new Sequelize(CONFIG.database.db, CONFIG.database.username, CONFIG.database.password, {
    dialect: CONFIG.database.dialect,
    host: CONFIG.database.host,
    port: CONFIG.database.port
});


router.get("/", (req, res) => {
    res.json({
        version: API_VERSION
    });
});
router.post("/register", (req, res) => {

});

app.use("/v0/", router);

app.listen(SERVER_PORT, () => console.log("Listening on port " + SERVER_PORT));
