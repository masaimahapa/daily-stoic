import { Request, Response } from "express";
import * as postsModel from "../../models/posts.model"

export async function getAllPosts(req: Request, res: Response){
    try{
        console.log("using controller")
        const posts = await postsModel.getPosts();
        res.json(posts.data);
    } catch(error){
        console.error("Error getting posts: ", error);
        res.status(500).json({error: "Unable to get posts."})
    }
}