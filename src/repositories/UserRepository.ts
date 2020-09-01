import { Repository, EntityRepository } from "typeorm";
import { Service } from "typedi";

import User from "../database/entities/User";

@Service()
@EntityRepository(User)
export default class UserReposityry extends Repository<User> {
    findByEmail(email: string = "") {
        return this.findOne({ email });
    }
}
