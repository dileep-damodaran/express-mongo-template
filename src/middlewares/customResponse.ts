import { Request, Response } from "express";
import { AppResponse } from "../utils/customResponse";
const mung = require("express-mung");

const customResponseHandler = mung.json(function redact(
    body: any,
    req: Request,
    res: Response
) {
    const customResponse = new AppResponse(true, body, "");
    return customResponse;
});

export { customResponseHandler };
