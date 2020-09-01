import { Service } from "typedi";
import { InjectRepository } from "typeorm-typedi-extensions";

import User from "../database/entities/User";
import UserReposityry from "../repositories/UserRepository";
import BadRequestException from "../exceptions/BadRequestException";

@Service()
export default class AuthService {
    constructor(
        @InjectRepository() private readonly userRepository: UserReposityry
    ) {}

    login(user: User): any {
        // TODO: Implement login
        console.log("Login:", user);
        return {
            success: true
        };
    }

    async register(user: User): Promise<any> {
        if (await this.userRepository.findByEmail(user.email)) {
            const { status, message } = new BadRequestException(
                "The email address is already subscribed. Please try to use another one or simply Log in"
            );
            return {
                error: {
                    status,
                    message
                }
            };
        }

        return this.userRepository.save(user);
    }
}
