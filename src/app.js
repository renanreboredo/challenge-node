import config from "dotenv";
import express from "express";
import compression from "compression";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";
import logger from "morgan";

import indexRouter from "./routes/index";
import usersRouter from "./routes/users";

config.config();

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(helmet());
app.use(cors());
app.use(compression());

app.use("/api", indexRouter);
app.use("/api/users", usersRouter);

module.exports = app;
