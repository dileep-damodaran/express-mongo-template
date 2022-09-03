import * as express from "express";
import { validate } from "express-validation";
import asyncHandler from "../utils/asyncHandler";
import { login } from "../requests/authRequests";
import * as authController from "../controllers/authController";

const routes = () => {
    const router = express.Router();
    router.post("/login", validate(login), asyncHandler(authController.login));
    return router;
};

export { routes };
