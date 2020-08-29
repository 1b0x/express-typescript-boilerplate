import { Service } from "typedi";

@Service()
export default class UserService {
    getUser(): any {
        return {
            nickname: "John",
            email: "john@doe.com"
        };
    }
}
