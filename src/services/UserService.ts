import { Service } from "typedi";
import { IUser } from "src/interfaces/User";

@Service()
export default class UserService {
    getUser(): IUser {
        return {
            id: "12sda23dsavcx34324134xsf",
            nickname: "John",
            email: "john@doe.com"
        };
    }
}
