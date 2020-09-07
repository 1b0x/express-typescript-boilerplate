import HttpException from "../../common/HttpException";
import { CommonHttpExceptionConstants } from "./config/constants";

export default class ServerErrorException extends HttpException {
    constructor(
        message: string = CommonHttpExceptionConstants.SERVER_ERROR_MESSAGE,
        statusCode: number = CommonHttpExceptionConstants.SERVER_ERROR_CODE
    ) {
        super(statusCode, message);
    }
}
