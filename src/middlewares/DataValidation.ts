import { NextFunction, Request, Response } from "express";

import { plainToClass } from "class-transformer";
import { ClassType } from "class-transformer/ClassTransformer";

import { validate } from "class-validator";

import BadRequestException from "../exceptions/BadRequestException";

export function DataValidation(classType: ClassType<any>) {
    return async (req: Request, res: Response, next: NextFunction) => {
        const a = plainToClass(classType, req.body);

        const errors = await validate(a);
        if (!errors.length) return next();

        // TODO: Send the error messages to the client

        const { status, message } = new BadRequestException("Bad request");
        res.status(status).send({
            error: {
                status,
                message
            }
        });
        res.end();
    };
}
