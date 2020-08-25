require("dotenv").config();

import { RoutingControllersSettings } from "./config/index";
import { Container } from "typedi";
import { useContainer } from "routing-controllers";

// Integration with typedi
useContainer(Container);

// Import our express application
import { App, IApp } from "./App";

// Create and run our application
const app: IApp = new App(RoutingControllersSettings);
app.run();
