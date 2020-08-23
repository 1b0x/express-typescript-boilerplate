import { bootstrapMicroframework } from "microframework";
import TypeORMLoader from "./loaders/TypeORMLoader";

bootstrapMicroframework([TypeORMLoader])
    .then(() => console.log("Application is up and running."))
    .catch((error) => console.log("Application is crashed: " + error));
