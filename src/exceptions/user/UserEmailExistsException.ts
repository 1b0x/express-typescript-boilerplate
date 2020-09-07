import BadRequestException from "../common/BadRequestException";

export default class UserEmailExistsException extends BadRequestException {
    constructor() {
        super(
            `The email address is already subscribed. Please try to use another one or simply Log in`
        );
    }
}
