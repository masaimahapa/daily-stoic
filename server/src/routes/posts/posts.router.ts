import express from "express";
import { getAllPosts } from "./posts.controller";


export const postsRouter = express.Router();

postsRouter.get("/posts", getAllPosts);
// commentsRouter.get("/posts/:postId/comments", getCommentsByPostId);

