import { Service } from "typedi";
import { InjectRepository } from "typeorm-typedi-extensions";

import User from "../database/entities/User";
import UserReposityry from "../repositories/UserRepository";
import BadRequestException from "../exceptions/BadRequestException";
import { AuthenticationMessages } from "../config/constants";

@Service()
export default class AuthService {
    constructor(
        @InjectRepository() private readonly userRepository: UserReposityry
    ) {}

    async login(user: User): Promise<any> {
        // TODO: Implement login
        const { email, password } = user;

        const loggedUser = await this.userRepository.findByEmail(email);
        if (!loggedUser) {
            throw new BadRequestException(
                AuthenticationMessages.INCORRECT_CREDENTIALS
            );
        }

        if (!loggedUser.checkPasswordIsValid(password)) {
            throw new BadRequestException(
                AuthenticationMessages.INCORRECT_CREDENTIALS
            );
        }

        return {
            success: true
        };
    }

    async register(user: User): Promise<any> {
        if (await this.userRepository.findByEmail(user.email)) {
            throw new BadRequestException(AuthenticationMessages.EMAIL_EIXSTS);
        }

        if (await this.userRepository.findByNickname(user.nickname)) {
            throw new BadRequestException(
                AuthenticationMessages.NICKNAME_EXISTS
            );
        }

        return this.userRepository.save(user);
    }
}
