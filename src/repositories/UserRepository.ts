import { Repository, EntityRepository } from "typeorm";
import { Service } from "typedi";

import User from "../database/entities/User";

@Service()
@EntityRepository(User)
export default class UserReposityry extends Repository<User> {
    findByEmail(email: string = "") {
        return this.findOne({
            where: { email },
            select: ["id", "firstname", "lastname", "nickname", "email"]
        });
    }

    findByNickname(nickname: string = "") {
        return this.findOne({
            where: { nickname },
            select: ["id", "firstname", "lastname", "nickname", "email"]
        });
    }
}
