import path from "path";
import { RoutingControllersOptions } from "routing-controllers";

export const RoutingControllersSettings: RoutingControllersOptions = {
    controllers: [path.join(__dirname, "../controllers/*.js")],
    middlewares: [path.join(__dirname, "../middlewares/*.js")],
    routePrefix: "/api",
};
