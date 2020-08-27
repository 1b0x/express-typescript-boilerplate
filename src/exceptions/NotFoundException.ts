import HttpException from "../common/HttpException";
import { HttpExceptionConstants } from "../config/constants";

export default class NotFoundException extends HttpException {
    constructor(message?: string) {
        super(
            HttpExceptionConstants.NOT_FOUND_CODE,
            message || HttpExceptionConstants.NOT_FOUND_MESSAGE
        );
    }
}
