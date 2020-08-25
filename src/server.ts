require("dotenv").config();

import { Container } from "typedi";
import { useContainer } from "routing-controllers";

import { RoutingControllersSettings } from "./config/index";
import { ServerFacade, IServerFacade } from "./ServerFacade";
import { IApp, App } from "./App";

// Integration with typedi
useContainer(Container);

const app: IApp = new App(RoutingControllersSettings);

const serverFacade: IServerFacade = new ServerFacade(app);
serverFacade.start().then(() => app.listen());
