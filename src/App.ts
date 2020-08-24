import "reflect-metadata";

import {
    createExpressServer,
    RoutingControllersOptions,
} from "routing-controllers";

import { Application } from "express";

import bodyParser from "body-parser";
import cors from "cors";

export default class App {
    protected app: Application;

    constructor(routingControllersOptions?: RoutingControllersOptions) {
        this.app = createExpressServer(routingControllersOptions);
        this.initializeMiddlewares();
    }

    public run(): void {
        this.app.listen(process.env.PORT, () =>
            this.handleExpressApplicationListen()
        );
    }

    private handleExpressApplicationListen(): void {
        console.log(`App listening on the port ${process.env.PORT}`);
    }

    private initializeMiddlewares(): void {
        this.app.use(cors());
        this.app.use(bodyParser.json());
    }
}
