import * as winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";
import { LOGDIR } from "../configs/constants";

const dailyRotateTransport: DailyRotateFile = new DailyRotateFile({
    handleExceptions: true,
    level: process.env.LOG_LEVEL,
    filename: "application-%DATE%.log",
    datePattern: "YYYY-MM-DD-HH",
    zippedArchive: true,
    maxSize: "20m",
    maxFiles: "14d",
});

const logger: winston.Logger = winston.createLogger({
    exitOnError: false,
    level: process.env.LOG_LEVEL,
    format: winston.format.combine(
        winston.format.json(),
        winston.format.metadata(),
        winston.format.timestamp({
            format: "YYYY-MM-DD HH:mm:ss",
        })
    ),
    transports: [
        new winston.transports.Console({ handleExceptions: true }),
        dailyRotateTransport,
    ],
});

export default logger;
