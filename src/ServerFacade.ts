import { IApp } from "./app/App";
import { DatabaseExceptionConstants } from "./config/constants";
import { IDatabaseConnection } from "./app/DatabaseConnection";

export interface IServerFacade {
    start(): Promise<any>;
}

export class ServerFacade implements IServerFacade {
    constructor(
        protected app: IApp,
        protected dbConnection: IDatabaseConnection
    ) {}

    async start(): Promise<any> {
        await this.databaseConnection();
        this.runApplication();
    }

    private async databaseConnection(): Promise<any> {
        try {
            const connection = this.dbConnection.createConnection();
            await connection.connect();
        } catch (error) {
            console.log(DatabaseExceptionConstants.CONNECTION_ERROR, error);
            return error;
        }
    }

    private runApplication(): void {
        this.app.create();
    }
}
