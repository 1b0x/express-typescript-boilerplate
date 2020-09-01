import { IsEmail, IsString } from "class-validator";

export default class UserLogInDto {
    @IsEmail()
    email: string;

    @IsString()
    password: string;
}
