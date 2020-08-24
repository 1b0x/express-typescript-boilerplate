require("dotenv").config();

import { routingControllersOptions } from "./config/index";

import App from "./App";

const app: App = new App(routingControllersOptions);
app.run();
