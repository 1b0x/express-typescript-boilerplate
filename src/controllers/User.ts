import { JsonController, Get } from "routing-controllers";
import UserService from "../services/UserService";

@JsonController("/users")
export class UserController {
    constructor(private userService: UserService) {}

    @Get("/me")
    getUser() {
        return this.userService.getUser();
    }
}
