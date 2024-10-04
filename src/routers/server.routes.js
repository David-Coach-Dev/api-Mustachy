//==================
// Imports
//==================
import { invalidRouter } from "#api/invalid";
import { startRouter } from "#api/start";
import { userRouter } from "#api/users";
import { controller, middleware } from "#src/config";
import express from "express";

//==================
// Server Router
//==================
export const serverRouter = express.Router();

serverRouter.use("/docs", middleware, controller);
serverRouter.use("/users", userRouter);
serverRouter.use("/", startRouter);
serverRouter.use("*", invalidRouter);
