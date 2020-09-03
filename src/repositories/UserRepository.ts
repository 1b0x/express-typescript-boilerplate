import { Repository, EntityRepository } from "typeorm";
import { Service } from "typedi";

import User from "../database/entities/User";

@Service()
@EntityRepository(User)
export default class UserReposityry extends Repository<User> {
    findByEmail(email: string = "", select?: any[]) {
        return this.findOne({
            where: { email },
            select
        });
    }

    findByNickname(nickname: string = "") {
        return this.findOne({
            where: { nickname },
            select: ["id", "firstname", "lastname", "nickname", "email"]
        });
    }
}
