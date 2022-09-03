import { Request, Response, NextFunction } from "express";
import { ValidationError } from "express-validation";
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
    const error = { ...err }; //Winston changees the error object, hence deep cloning to preserve original error object
    logger.error(error);
    const statusCode = err.statusCode || err.metadata.statusCode;
    return res.status(statusCode).json(err);
};

export { errorConverter, errorHandler };
