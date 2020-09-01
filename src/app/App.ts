import express from "express";

import {
    RoutingControllersOptions,
    useExpressServer
} from "routing-controllers";

import bodyParser from "body-parser";
import cors from "cors";

import { ServerMessages } from "../config/constants";

export interface IApp {
    create(): void;
    listen(): void;
}

export class App implements IApp {
    private app: express.Application;

    constructor(
        private routingControllersOptions?: RoutingControllersOptions
    ) {}

    create(): void {
        this.app = express();
        this.initializeMiddlewares();
        useExpressServer(this.app, this.routingControllersOptions);
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
