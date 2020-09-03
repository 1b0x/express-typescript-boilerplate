import path from "path";
import { RoutingControllersOptions } from "routing-controllers";
import { authorizationChecker, currentUserChecker } from "../common/Helpers";

export const RoutingControllersSettings: RoutingControllersOptions = {
    controllers: [path.join(__dirname, "../controllers/*.js")],
    middlewares: [path.join(__dirname, "../middlewares/*.js")],
    routePrefix: "/api",
    validation: false,
    authorizationChecker,
    currentUserChecker
};
