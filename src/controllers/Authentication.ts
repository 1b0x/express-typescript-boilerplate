import { JsonController, Post, Body } from "routing-controllers";

import User from "../database/entities/User";
import AuthService from "../services/AuthService";

@JsonController("/auth")
export class UserController {
    constructor(private authService: AuthService) {}

    @Post("/login")
    login(@Body() user: any): any {
        return this.authService.login(user);
    }

    @Post("/register")
    register(@Body() user: User): any {
        return this.authService.register(user);
    }
}
