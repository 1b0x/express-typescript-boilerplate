import { Service } from "typedi";

import User from "../database/entities/User";

@Service()
export default class AuthService {
    login(user: User): any {
        // Implement login
        console.log("Login:", user);

        const { nickname, email } = user;
        return {
            nickname,
            email
        };
    }

    register(user: User): any {
        // Implement register
        console.log("Register:", user);
        const { nickname, email } = user;
        return {
            nickname,
            email
        };
    }
}
