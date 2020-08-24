import { JsonController, Get } from "routing-controllers";

@JsonController("/users")
export class UserController {
    @Get("/me")
    getUser() {
        return {
            message: "It's me!"
        };
    }
}
