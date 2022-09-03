import { Request } from "express";
import { ACCESS_TOKEN_SECRET, AUTH_ALOGORITH } from "../configs/constants";
const { expressjwt: jwt } = require("express-jwt");

function getToken(req: Request): string | null {
    const hasJwt =
        req.headers.authorization &&
        req.headers.authorization.split(" ")[0].toLowerCase() === "bearer";
    if (hasJwt) return req.headers.authorization.split(" ")[1];

    return hasJwt ? req.headers.authorization.split(" ")[1] : null;
}

const jwtValidator = jwt({
    getToken: getToken,
    secret: ACCESS_TOKEN_SECRET,
    algorithms: [AUTH_ALOGORITH],
}).unless({
    path: [new RegExp("/api/", "i")],
});

export { jwtValidator };
