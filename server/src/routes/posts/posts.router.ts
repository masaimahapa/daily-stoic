import express from "express";
import { createPost, deletePost, getAllPosts, getPostById, getPostByUserId, updatePost } from "./posts.controller";


export const postsRouter = express.Router();

postsRouter.get("/posts", getAllPosts);
postsRouter.get("/posts/:postId", getPostById);
postsRouter.get("/users/:userId/posts", getPostByUserId);

postsRouter.post("/posts", createPost);
postsRouter.put("/posts/:postId", updatePost);
postsRouter.delete("/posts/:postId", deletePost);

