import * as express from "express";
import * as authRouter from "../routes/authRoute";

const rootRouter = () => {
    const router = express.Router();
    router.use("/auth", authRouter.routes());
    return router;
};

export { rootRouter };
