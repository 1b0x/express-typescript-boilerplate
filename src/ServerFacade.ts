import { Connection } from "typeorm";

import { IApp } from "./app/App";
import { DatabaseExceptionConstants } from "./config/constants";
import { IDatabase } from "./app/DatabaseConnection";

export interface IServerFacade {
    start(): Promise<any>;
}

export class ServerFacade implements IServerFacade {
    constructor(protected app: IApp, protected dbConnection: IDatabase) {}

    async start(): Promise<any> {
        try {
            await this.databaseConnection();
        } catch (error) {
            console.log(DatabaseExceptionConstants.CONNECTION_ERROR, error);
            return error;
        }

        this.runApplication();
    }

    private databaseConnection(): Promise<Connection> {
        return this.dbConnection.createConnection();
    }

    private runApplication(): void {
        this.app.create();
    }
}
