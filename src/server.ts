require("dotenv-safe").config();

import "reflect-metadata";

import { Container } from "typedi";
import { useContainer } from "routing-controllers";
import { useContainer as useContainerValidator } from "class-validator";

import { RoutingControllersSettings } from "./config/app";
import { DatabaseConnectionOptions } from "./config/ormconfig";

import { ServerFacade, IServerFacade } from "./ServerFacade";
import { IApp, App } from "./app/App";

import { IDatabase, Database } from "./app/DatabaseConnection";

// Integration with typedi
useContainerValidator(Container);
useContainer(Container);

const app: IApp = new App(RoutingControllersSettings);
const database: IDatabase = new Database(DatabaseConnectionOptions);

const serverFacade: IServerFacade = new ServerFacade(app, database);

serverFacade.start().then(() => app.listen());
