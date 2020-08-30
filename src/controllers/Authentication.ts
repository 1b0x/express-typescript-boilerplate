import { JsonController, Post, Body, UseBefore } from "routing-controllers";

import { IUser } from "../interfaces/User";

import User from "../database/entities/User";
import AuthService from "../services/AuthService";
import { DataValidation } from "../middlewares/DataValidation";

@JsonController("/auth")
export class UserController {
    constructor(private authService: AuthService) {}

    @Post("/login")
    @UseBefore(DataValidation(User))
    login(@Body() user: any): any {
        return this.authService.login(user);
    }

    @Post("/register")
    register(@Body() user: User): IUser {
        return this.authService.register(user);
    }
}
