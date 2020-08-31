import { NextFunction, Request, Response } from "express";

import { plainToClass } from "class-transformer";
import { ClassType } from "class-transformer/ClassTransformer";

import { validate } from "class-validator";

import BadRequestException from "../exceptions/BadRequestException";
import { getClientErrorMessagesFromClassValidationErrors } from "../common/Helpers";

export function DataValidation(classType: ClassType<any>) {
    return async (req: Request, res: Response, next: NextFunction) => {
        const a = plainToClass(classType, req.body);

        const errors = await validate(a);
        if (!errors.length) return next();

        const constraints = getClientErrorMessagesFromClassValidationErrors(
            errors
        );

        const { status, message } = new BadRequestException("Bad request");
        res.status(status).send({
            error: {
                status,
                message,
                constraints
            }
        });
        res.end();
    };
}
