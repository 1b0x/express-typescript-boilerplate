import {
    JsonController,
    Get,
    Authorized,
    CurrentUser
} from "routing-controllers";

@JsonController("/users")
export class UserController {
    constructor() {}

    @Authorized()
    @Get("/me")
    getUser(@CurrentUser() user: any) {
        return user;
    }
}
