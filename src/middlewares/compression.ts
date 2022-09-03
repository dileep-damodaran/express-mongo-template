import { Request, Response } from "express";
const compression = require("compression");

const shouldCompress = (req: Request, res: Response) => {
    if (req.headers["x-no-compression"]) {
        // Do not compress responses with this request header
        return false;
    }

    // Fallback to standard filter function
    return compression.filter(req, res);
};

export { shouldCompress };
