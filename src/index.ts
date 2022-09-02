

const express = require('express'),
    dotenv = require('dotenv');
 import { Express, Request, Response,NextFunction } from "express";

dotenv.config();

const PORT = process.env.PORT;
const app :Express= express();

app.get("/", (req:Request, res:Response, next:NextFunction) => {
    res.status(200).send("Hello World");
});

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at port ${PORT}`);
});