import { Service } from "typedi";
import { InjectRepository } from "typeorm-typedi-extensions";

import jwt from "jsonwebtoken";

import User from "../database/entities/User";
import UserReposityry from "../repositories/UserRepository";

import BadRequestException from "../exceptions/BadRequestException";
import ServerErrorException from "../exceptions/ServerErrorException";

import { AuthenticationMessages } from "../config/constants";

@Service()
export default class AuthService {
    constructor(
        @InjectRepository() private readonly userRepository: UserReposityry
    ) {}

    async login(user: User): Promise<any> {
        const { email, password } = user;

        const loggedUser = await this.userRepository.findByEmail(email, [
            "nickname",
            "salt",
            "password"
        ]);
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

        const token = jwt.sign(
            { nickname: loggedUser.nickname },
            process.env.TOKEN_SECRET as string,
            { expiresIn: "60m" }
        );

        return {
            success: true,
            token
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

        const createdUser = await this.userRepository.save(user);
        if (!createdUser) throw new ServerErrorException();

        const { nickname, email, firstname, lastname } = createdUser;
        return {
            success: true,
            user: {
                nickname,
                email,
                firstname,
                lastname
            }
        };
    }
}
