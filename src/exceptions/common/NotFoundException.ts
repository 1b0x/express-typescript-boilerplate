import HttpException from "../../common/HttpException";
import { CommonHttpExceptionConstants } from "./config/constants";

export default class NotFoundException extends HttpException {
    constructor(
        message: string = CommonHttpExceptionConstants.NOT_FOUND_MESSAGE
    ) {
        super(CommonHttpExceptionConstants.NOT_FOUND_CODE, message);
    }
}
