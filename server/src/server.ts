import express, {Express, Request, Response} from "express";
import dotenv from "dotenv";
import axios from "axios";

import { commentsRouter } from "./routes/comments/comments.router";
import { postsRouter } from "./routes/posts/posts.router";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8000;

app.use(express.json())

app.use("/api", commentsRouter);
app.use("/api", postsRouter);

const API_URL = 'https://jsonplaceholder.typicode.com';

// app.get("/api/posts", async (req: Request, res:Response) => {
//     try{
//         console.log("request made to /posts");
//         console.log(req.query);
//         const {userId} = req.query;
//         let apiURL = `${API_URL}/posts`;
//         if(userId){
//             apiURL += `?userId=${userId}`;
//         }
//         const response = await axios.get(apiURL);
//         res.json(response.data);
//     } catch(error){
//         res.status(500).json({ error: "Unable to fetch posts."})
//     }
// })


app.get("/api/users", async (req: Request, res:Response) => {
    try{
        console.log("request made to /users");
        const {userId} = req.query;
 
        const response = await axios.get(`${API_URL}/users`);
        res.json(response.data);
    } catch(error){
        res.status(500).json({ error: "Unable to fetch users."})
    }
})

app.get("/api/users/:userId", async (req: Request, res:Response) => {
    try{
        console.log("request made to /users/:userId");
        const {userId} = req.params;
 
        const response = await axios.get(`${API_URL}/users/${userId}`);
        res.json(response.data);
    } catch(error){
        res.status(500).json({ error: "Unable to fetch users."})
    }
})

app.get("/api/posts/:postId", async (req: Request, res:Response) => {
    const postId = req.params.postId;
    try{
        console.log("getting post with id: ", postId);
        const response = await axios.get(`${API_URL}/posts/${postId}`);
        res.json(response.data);
    } catch(error){
        res.status(500).json({ error: "Unable to fetch posts."})
    }
})

app.post("/api/posts", async (req: Request, res: Response) => {
    const postData = req.body;
    
    try {
        console.log("Creating a new post: ", postData);
        const response = await axios.post(`${API_URL}/posts`, postData);
        res.json(response.data);
    } catch (error) {
        console.error("Error creating post:", error);
        res.status(500).json({ error: "Unable to create the post." });
    }
});

app.put("/api/posts/:postId", async (req: Request, res: Response) => {
    const postId = req.params.postId;
    const postData = req.body;

    try{
        console.log("Updating post with id: ", postId);
        const response =await axios.put(`${API_URL}/posts/${postId}`, postData);
        res.json(response.data);
    } catch(error){
        console.error("Error updating post: ", error);
        res.status(500).json({error: "Unable to update the post."})
    }
})

app.delete("/api/posts/:postId", async (req: Request, res:Response) =>{
    const postId = req.params.postId;

    try{
        console.log("deleting post with id: ", postId);
        const response = await axios.delete(`${API_URL}/posts/${postId}`);
        res.json(response.data);
    } catch (error){
        console.error("Error deleting post: ", error);
        res.status(500).json({error: "Unable to delete the post."})
    }
})



app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
})