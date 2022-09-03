import { Express } from "express";
const dotenv = require("dotenv");

const app: Express = require("./middlewares/app");
dotenv.config();
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at port ${PORT}`);
});
