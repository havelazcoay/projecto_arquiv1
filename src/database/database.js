import mysql from "promise-mysql";
import config from "../config.js";

const connection = mysql.createConnection({
    host: config.host,
    database: config.database,
    user: config.user,
    password: config.password,
    port: config.port,
    node_docker_port: config.node_docker_port,
});

const getConnection = () => {
    return connection;
};

module.exports = {
    getConnection
};
