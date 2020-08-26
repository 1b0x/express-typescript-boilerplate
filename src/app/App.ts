import "reflect-metadata";

import { ServerMessages } from "../config/constants";
import { Application } from "express";

import {
    RoutingControllersOptions,
    createExpressServer
} from "routing-controllers";

import bodyParser from "body-parser";
import cors from "cors";

export interface IApp {
    create(): void;
    listen(): void;
}

export class App implements IApp {
    private app: Application;

    constructor(
        private routingControllersOptions?: RoutingControllersOptions
    ) {}

    create(): void {
        this.app = createExpressServer(this.routingControllersOptions);
        this.initializeMiddlewares();
    }

    listen(port?: number): void {
        this.app.listen(port || process.env.APP_PORT, () =>
            this.handleExpressApplicationListen()
        );
    }

    private handleExpressApplicationListen(): void {
        console.log(`${ServerMessages.SERVER_MESSAGE} ${process.env.APP_PORT}`);
    }

    private initializeMiddlewares(): void {
        this.app.use(cors());
        this.app.use(bodyParser.json());
    }
}
