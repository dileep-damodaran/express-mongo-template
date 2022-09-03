const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT,
    LOGDIR = "logs",
    ENV = process.env.ENVIRONMENT,
    AUTH_ALOGORITH = "HS256",
    REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET,
    REFRESH_TOKEN_EXPIRY_IN_MIN = parseInt(
        process.env.REFRESH_TOKEN_EXPIRY_IN_MIN
    ),
    ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET,
    ACCESS_TOKEN_EXPIRY_IN_MIN = parseInt(
        process.env.ACCESS_TOKEN_EXPIRY_IN_MIN
    );

export {
    PORT,
    LOGDIR,
    ENV,
    AUTH_ALOGORITH,
    REFRESH_TOKEN_SECRET,
    REFRESH_TOKEN_EXPIRY_IN_MIN,
    ACCESS_TOKEN_SECRET,
    ACCESS_TOKEN_EXPIRY_IN_MIN,
};
