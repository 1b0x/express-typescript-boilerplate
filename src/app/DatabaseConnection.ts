import { createConnection, Connection, ConnectionOptions } from "typeorm";

export interface IDatabase {
    createConnection(): Promise<Connection>;
}

export class Database implements IDatabase {
    constructor(private databaseConnectionOptions: ConnectionOptions) {}

    createConnection(): Promise<Connection> {
        return createConnection(this.databaseConnectionOptions);
    }
}
