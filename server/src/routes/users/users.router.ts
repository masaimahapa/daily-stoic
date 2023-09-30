import express from "express";
import { getAllUsers, getUserById } from "./users.controller";

export const usersRouter = express.Router();

usersRouter.get("/users", getAllUsers);
usersRouter.get("/users/:userId", getUserById);