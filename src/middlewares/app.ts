import { Express } from "express";
import { ENV } from "../configs/constants";
import logger from "../utils/logger";
import { shouldCompress } from "./compression";
import { errorConverter, errorHandler } from "./errorHandler";
const express = require("express"),
    expressWinston = require("express-winston"),
    compression = require("compression"),
    helmet = require("helmet"),
    bodyParser = require("body-parser");

const app: Express = express();
const cors = require("cors");
const corsOptions = "*"; //TODO : Add cors options

app.use(
    expressWinston.logger({
        winstonInstance: logger,
    })
);

if (ENV === "production") {
    app.use(cors(corsOptions));
} else {
    logger.debug(`Enabling cors for all requests`);
    app.use(cors());
}

app.use(compression({ filter: shouldCompress }));
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(errorConverter);
app.use(errorHandler);

module.exports = app;
