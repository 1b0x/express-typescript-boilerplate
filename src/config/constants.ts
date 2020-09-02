export const HttpExceptionConstants = {
    DEFAULT_ERROR_CODE: 500,
    DEFAULT_ERROR_MESSAGE: "Something went wrong",

    NOT_FOUND_CODE: 404,
    NOT_FOUND_MESSAGE: "Not found",

    BAD_REQUEST_CODE: 400,
    BAD_REQUEST_MESSAGE: "Bad request"
};

export const DatabaseExceptionConstants = {
    CONNECTION_ERROR: "Database connection error"
};

export const ServerMessages = {
    SERVER_MESSAGE: "App listening on port:"
};

export const AuthenticationMessages = {
    EMAIL_EIXSTS:
        "The email address is already subscribed. Please try to use another one or simply Log in",
    NICKNAME_EXISTS: "A user with this nickname already exists"
};
