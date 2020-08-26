require("dotenv").config();

import { Container } from "typedi";
import { useContainer } from "routing-controllers";

import { RoutingControllersSettings } from "./config/index";
import { DatabaseConnectionOptions } from "./config/ormconfig";

import { ServerFacade, IServerFacade } from "./ServerFacade";
import { IApp, App } from "./app/App";

import {
    IDatabaseConnection,
    DatabaseConnection
} from "./app/DatabaseConnection";

// Integration with typedi
useContainer(Container);

const app: IApp = new App(RoutingControllersSettings);

const databaseConnection: IDatabaseConnection = new DatabaseConnection(
    DatabaseConnectionOptions
);

const serverFacade: IServerFacade = new ServerFacade(app, databaseConnection);

serverFacade.start().then(() => app.listen());
