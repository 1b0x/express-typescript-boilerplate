require("dotenv").config();

import { RoutingControllersSettings } from "./config/index";

import App from "./App";

const app: App = new App(RoutingControllersSettings);
app.run();
