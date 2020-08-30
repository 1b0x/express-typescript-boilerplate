import { Person } from "./Common";

export interface IUser extends Person {
    nickname: string;
}

export interface IUserPrivate extends IUser {
    password: string;
}
