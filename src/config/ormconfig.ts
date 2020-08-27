import path from "path";

import { ConnectionOptions } from "typeorm";

export const DatabaseConnectionOptions: ConnectionOptions = {
    type: "mysql",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: true,
    logging: true,
    entities: [path.join(__dirname, "../database/entities/**/*.ts")],
    migrations: [path.join(__dirname, "../database/migrations/**/*.ts")]
};
