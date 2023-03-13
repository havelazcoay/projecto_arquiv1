import { config } from "dotenv";

config();

export default {
    host: process.env.MYSQLDB_HOST || "",
    database: process.env.MYSQLDB_DATABASE || "",
    user: process.env.MYSQLDB_USER || "",
    password: process.env.MYSQLDB_PASSWORD || "",
};
