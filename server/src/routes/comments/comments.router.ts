import express from "express";
import { getAllComments, getCommentsByPostId } from './comments.controller';

export const commentsRouter = express.Router();

commentsRouter.get("/comments", getAllComments);
commentsRouter.get("/posts/:postId/comments", getCommentsByPostId);

