import { IApp } from "./app/App";
import { DatabaseExceptionConstants } from "./config/constants";
import { IDatabase } from "./app/DatabaseConnection";

export interface IServerFacade {
    start(): Promise<any>;
}

export class ServerFacade implements IServerFacade {
    constructor(protected app: IApp, protected dbConnection: IDatabase) {}

    async start(): Promise<any> {
        await this.databaseConnection();
        this.runApplication();
    }

    private async databaseConnection(): Promise<any> {
        try {
            await this.dbConnection.createConnection();
        } catch (error) {
            console.log(DatabaseExceptionConstants.CONNECTION_ERROR, error);
            return error;
        }
    }

    private runApplication(): void {
        this.app.create();
    }
}
