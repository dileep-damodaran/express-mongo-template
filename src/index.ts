import { Express } from "express";
import { PORT } from "./configs/constants";

const app: Express = require("./middlewares/index");

app.get("/", (req, res, next) => {
    res.status(200).send("Hello");
});

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at port ${PORT}`);
});
