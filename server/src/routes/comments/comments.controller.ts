import { Request, Response } from "express";
import * as commentsModel from "../../models/comments.model"

export async function getAllComments(req: Request, res: Response){
    try{
        const comments = await commentsModel.getComments();
        res.json(comments.data);
    } catch(error){
        console.error("Error getting comments: ", error);
        res.status(500).json({error: "Unable to get comments."})
    }
}

export async function getCommentsByPostId(req: Request, res: Response){
    const postId = req.params.postId;
    try{
        const comments = await commentsModel.getCommentsByPostId(postId);
        res.json(comments.data);
    } catch(error){
        console.error("Error getting comments: ", error);
        res.status(500).json({error: "Unable to get comments."})
    }
}