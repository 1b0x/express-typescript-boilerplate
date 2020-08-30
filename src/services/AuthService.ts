import { Service } from "typedi";

import User from "../database/entities/User";
import { IUser } from "src/interfaces/User";

@Service()
export default class AuthService {
    login(user: User): any {
        // TODO: Implement login
        console.log("Login:", user);
        return {
            success: true
        };
    }

    register(user: User): IUser {
        // TODO: Implement register
        console.log("Register:", user);
        const { nickname, email } = user;
        return {
            id: "12sda23dsavcx34324134xsf",
            nickname,
            email
        };
    }
}
