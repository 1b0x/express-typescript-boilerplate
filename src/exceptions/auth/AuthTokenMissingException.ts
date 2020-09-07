import HttpException from "../../common/HttpException";

export default class AuthTokenMissing extends HttpException {
    constructor() {
        super(401, "Authentication required. Sign in to your account");
    }
}
