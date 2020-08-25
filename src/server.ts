require("dotenv").config();

import { RoutingControllersSettings } from "./config/index";
import { Container } from "typedi";
import { useContainer } from "routing-controllers";

// Integration with typedi
useContainer(Container);

// Import our express application
import App from "./App";

// Create and run our application
const app: App = new App(RoutingControllersSettings);
app.run();
