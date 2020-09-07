import HttpException from "../../common/HttpException";
import { CommonHttpExceptionConstants } from "./config/constants";

export default class BadRequestException extends HttpException {
    constructor(
        message: string = CommonHttpExceptionConstants.BAD_REQUEST_MESSAGE
    ) {
        super(CommonHttpExceptionConstants.BAD_REQUEST_CODE, message);
    }
}
