import HttpException from "../common/HttpException";
import { HttpExceptionConstants } from "../config/constants";

export default class BadRequestException extends HttpException {
    constructor(message?: string) {
        super(
            HttpExceptionConstants.BAD_REQUEST_CODE,
            message || HttpExceptionConstants.BAD_REQUEST_MESSAGE
        );
    }
}
