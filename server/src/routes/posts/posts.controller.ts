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

export async function getPostById(req: Request, res: Response){
    const postId = req.params.postId;
    try{
        const post = await postsModel.getPostById(postId);
        res.json(post.data);
    } catch(error){
        console.error("Error getting post: ", error);
        res.status(500).json({error: "Unable to get post."})
    }
}

export async function getPostByUserId(req: Request, res: Response){
    const userId = req.params.userId;
    try{
        const post = await postsModel.getPostsByUserId(userId);
        res.json(post.data);
    } catch(error){
        console.error("Error getting post: ", error);
        res.status(500).json({error: "Unable to get post."})
    }
}



export async function createPost(req: Request, res: Response){
    const postData = req.body;
    try{
        const post = await postsModel.createPost(postData);
        res.json(post.data);
    } catch(error){
        console.error("Error creating post: ", error);
        res.status(500).json({error: "Unable to create post."})
    }
}

export async function updatePost(req: Request, res: Response){
    const postId = req.params.postId;
    const postData = req.body;
    try{
        const post = await postsModel.updatePost(postId, postData);
        res.json(post.data);
    } catch(error){
        console.error("Error updating post: ", error);
        res.status(500).json({error: "Unable to update post."})
    }
}

export async function deletePost(req: Request, res: Response){
    const postId = req.params.postId;
    console.log("deleting post: ", postId)
    try{
        const post = await postsModel.deletePost(postId);
        res.json(post.data);
    } catch(error){
        console.error("Error deleting post: ", error);
        res.status(500).json({error: "Unable to delete post."})
    }
}