import jwt from "jsonwebtoken";

import { ValidationError } from "class-validator";
import { Action } from "routing-controllers";
import { getCustomRepository } from "typeorm";

import UserReposityry from "../repositories/UserRepository";

export function getClientErrorMessagesFromClassValidationErrors(
    errors: ValidationError[]
) {
    if (!errors || !errors.length) {
        return;
    }

    const errObj: any = {};
    for (let i = 0; i < errors.length; i++) {
        const err = errors[i];

        errObj[err.property] = err.constraints
            ? Object.values(err.constraints)
            : "";
    }

    return errObj;
}

export async function authorizationChecker(action: Action): Promise<any> {
    const authorization = action.request.headers["authorization"];
    const token = authorization && authorization.split(" ")[1];

    if (!token) return false;

    return await jwt.verify(
        token,
        process.env.TOKEN_SECRET as string,
        (err: any, user: any) => {
            if (err || !user) {
                return false;
            }

            return true;
        }
    );
}

export async function currentUserChecker(action: Action): Promise<any> {
    const authorization = action.request.headers["authorization"];
    const token = authorization && authorization.split(" ")[1];

    if (!token) return;

    return await jwt.verify(
        token,
        process.env.TOKEN_SECRET as string,
        (err: any, user: any) => {
            if (err || !user) {
                return;
            }

            const userRepository = getCustomRepository(UserReposityry);
            return userRepository.findByNickname(user.nickname);
        }
    );
}
