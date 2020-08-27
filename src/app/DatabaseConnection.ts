import { ConnectionManager, Connection, ConnectionOptions } from "typeorm";

export interface IDatabaseConnection {
    createConnection(): Connection;
}

export class DatabaseConnection
    extends ConnectionManager
    implements IDatabaseConnection {
    constructor(private databaseConnectionOptions: ConnectionOptions) {
        super();
    }

    createConnection(): Connection {
        return super.create(this.databaseConnectionOptions);
    }
}
