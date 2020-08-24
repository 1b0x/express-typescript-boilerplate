import path from "path";

export const routingControllersOptions = {
    controllers: [path.join(__dirname, "../controllers/*.js")],
    middlewares: [path.join(__dirname, "../middlewares/*.js")],
    routePrefix: "/api",
};
