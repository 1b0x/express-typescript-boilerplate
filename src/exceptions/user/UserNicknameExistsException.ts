import BadRequestException from "../common/BadRequestException";

export default class UserNicknameExistsException extends BadRequestException {
    constructor(nickname: string) {
        super(
            `A user with this nickname '${nickname}' already exists. Please try to use another one or simply Log in`
        );
    }
}
