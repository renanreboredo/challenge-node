import config from "dotenv";
import express from "express";
import compression from "compression";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";
import logger from "morgan";
import passport from "passport";
import { strategy } from "./passport-config";

import authRouter from "./routes/auth";

config.config();

const app = express();

passport.use(strategy);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(helmet());
app.use(cors());
app.use(compression());

app.use("/api", authRouter);

app.use(passport.initialize());

module.exports = app;
