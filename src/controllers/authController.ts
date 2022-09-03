import { Request, Response, NextFunction } from "express";
import * as authentication from "../app/useCases/authentication";
const createError = require("http-errors");

export async function login(req: Request, res: Response, next: NextFunction) {
    const result = authentication.login(req.body.user_name, req.body.password);
    if (result.error) createError(401, result.error);
    return res.status(200).send(result);
}
