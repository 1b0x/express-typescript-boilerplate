import HttpException from "../common/HttpException";
import { HttpExceptionConstants } from "../config/constants";

export default class ServerErrorException extends HttpException {
    constructor(message?: string) {
        super(
            HttpExceptionConstants.SERVER_ERROR_CODE,
            message || HttpExceptionConstants.SERVER_ERROR_MESSAGE
        );
    }
}
