import {
    Middleware,
    ExpressErrorMiddlewareInterface
} from "routing-controllers";
import { NextFunction, Request, Response } from "express";
import HttpException from "../common/HttpException";
import ServerErrorException from "../exceptions/ServerErrorException";

@Middleware({ type: "after" })
export class ErrorHandler implements ExpressErrorMiddlewareInterface {
    error(err: any, req: Request, res: Response, next: NextFunction) {
        const exception =
            err instanceof HttpException ? err : new ServerErrorException();
        const { status, message } = exception;
        res.status(status);
        res.send({
            status,
            message
        });
        next();
    }
}
