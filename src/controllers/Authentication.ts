import { JsonController, Post, Body, UseBefore } from "routing-controllers";

import User from "../database/entities/User";
import UserLogInDto from "../dto/UserLogInDto";

import AuthService from "../services/AuthService";
import { DataValidation } from "../middlewares/DataValidation";

@JsonController("/auth")
export class UserController {
    constructor(private authService: AuthService) {}

    @Post("/login")
    @UseBefore(DataValidation(UserLogInDto))
    login(@Body() user: any): any {
        return this.authService.login(user);
    }

    @Post("/register")
    @UseBefore(DataValidation(User))
    async register(@Body() userData: User) {
        try {
            return await this.authService.register(userData);
        } catch (error) {
            return {
                status: error.status,
                message: error.message
            };
        }
    }
}
