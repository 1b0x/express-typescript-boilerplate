import { ValidationError } from "class-validator";

export function getClientErrorMessagesFromTypeORMValidationErrors(
    errors: ValidationError[]
) {
    if (!errors || !errors.length) {
        return;
    }

    const errObj: any = {};
    for (let i = 0; i < errors.length; i++) {
        const err = errors[i];

        errObj[err.property] = err.constraints
            ? Object.values(err.constraints)
            : "";
    }

    return errObj;
}
