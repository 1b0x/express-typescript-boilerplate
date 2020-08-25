import { IApp } from "./App";
import { createConnection } from "typeorm";
import { DatabaseExceptionConstants } from "./config/constants";

export interface IServerFacade {
    start(): Promise<any>;
}

export class ServerFacade implements IServerFacade {
    constructor(protected app: IApp) {}

    async start(): Promise<any> {
        await this.databaseConnection();
        this.runApplication();
    }

    private async databaseConnection(): Promise<any> {
        try {
            await createConnection();
        } catch (error) {
            console.log(DatabaseExceptionConstants.CONNECTION_ERROR, error);
            return error;
        }
    }

    private runApplication(): void {
        this.app.create();
    }
}
