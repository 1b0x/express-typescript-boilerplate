import "reflect-metadata";

import { Application } from "express";
import { createConnection } from "typeorm";

import {
    RoutingControllersOptions,
    createExpressServer
} from "routing-controllers";

import bodyParser from "body-parser";
import cors from "cors";

export default class App {
    private app: Application;

    constructor(routingControllersOptions?: RoutingControllersOptions) {
        this.app = createExpressServer(routingControllersOptions);

        this.databaseConnection();
        this.initializeMiddlewares();
    }

    run(): void {
        this.app.listen(process.env.PORT, () =>
            this.handleExpressApplicationListen()
        );
    }

    private handleExpressApplicationListen(): void {
        console.log(`App listening on the port ${process.env.PORT}`);
    }

    private async databaseConnection() {
        await createConnection();
    }

    private initializeMiddlewares(): void {
        this.app.use(cors());
        this.app.use(bodyParser.json());
    }
}
