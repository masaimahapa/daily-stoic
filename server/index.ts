import express, {Express, Request, Response} from "express";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json())

const API_URL = 'https://jsonplaceholder.typicode.com';

app.get("/api/posts", async (req: Request, res:Response) => {
    try{
        console.log("request made to /posts");
        const response = await axios.get(`${API_URL}/posts`);
        res.json(response.data);
    } catch(error){
        res.status(500).json({ error: "Unable to fetch posts."})
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

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
})