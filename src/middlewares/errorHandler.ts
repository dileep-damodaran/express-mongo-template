import { Request, Response, NextFunction } from "express";
import { ValidationError } from "express-validation";
import { AppResponse } from "../utils/customResponse";
import logger from "../utils/logger";
const createError = require("http-errors");

const errorConverter = (
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (createError.isHttpError(err)) next(err);
    else if (err instanceof ValidationError) next(err);
    else if (err && err.status && err.status == 401) next(createError(401));
    else next(createError(500, err.message));
};

const errorHandler = (
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    logger.error({ ...err }); //Winston changees the error object, hence deep cloning to preserve original error object
    const statusCode = err.statusCode || err.metadata.statusCode;
    let errorMessage = err.message;

    console.log(err);

    if (err.name === "ValidationError" && err.details && err.details.body) {
        errorMessage = err.details.body.map((x) => x.message).join(",");
    }

    const result = new AppResponse(false, null, errorMessage);
    return res.status(statusCode).send(result);
};

export { errorConverter, errorHandler };
