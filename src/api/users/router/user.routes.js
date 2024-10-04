import { Router } from "express";
import { setApiKey, setAuthentication, setUpload } from "#src/middlewares";
import {
  createUserController,
  deleteUserController,
  getAllUsersController,
  getUserByIdController,
  getUserProfilerController,
  login,
  updateUserController,
} from "#api/users";

export const userRouter = Router();

userRouter.post("/login", setApiKey, login);
userRouter.post("/register", setApiKey, setUpload, createUserController);
userRouter.post(
  "/create",
  setApiKey,
  setAuthentication,
  setUpload,
  createUserController
);
userRouter.get("/all", setApiKey, getAllUsersController);
userRouter.get("/id", setApiKey, getUserByIdController);
userRouter.get(
  "/profile",
  setApiKey,
  setAuthentication,
  getUserProfilerController
);
userRouter.put(
  "/upload",
  setApiKey,
  setAuthentication,
  setUpload,
  updateUserController
);
userRouter.delete(
  "/delete",
  setApiKey,
  setAuthentication,
  deleteUserController
);
