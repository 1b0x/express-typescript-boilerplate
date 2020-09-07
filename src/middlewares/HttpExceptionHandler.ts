import { Middleware, ExpressMiddlewareInterface } from "routing-controllers";
import { NextFunction, Request, Response } from "express";

import NotFoundException from "../exceptions/common/NotFoundException";

@Middleware({ type: "after" })
export class HttpExceptionHandler implements ExpressMiddlewareInterface {
    use(req: Request, res: Response, next?: NextFunction): void {
        if (!res.headersSent) {
            const { status, message } = new NotFoundException();

            res.status(status);
            res.send({
                error: {
                    status,
                    message
                }
            });
        }

        res.end();
    }
}
