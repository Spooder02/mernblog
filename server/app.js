import express from "express";
import mongoose from "mongoose";
import config from './config/index.js';

const app = express();
const { MONGO_URI } = config;

mongoose
    .connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(()=> console.log("MongoDB Connected Successfully!"))
    .catch((e) => console.log(e));

app.get("/");

export default app;