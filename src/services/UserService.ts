import { Service } from "typedi";

@Service()
export default class UserService {
    getUser(): any {
        return {
            firstName: "John",
            lastName: "Doe",
            age: 15
        };
    }
}
