import express, {Express, Request, Response} from "express";
import dotenv from "dotenv";

import { commentsRouter } from "./routes/comments/comments.router";
import { postsRouter } from "./routes/posts/posts.router";
import { usersRouter } from "./routes/users/users.router";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8000;

app.use(express.json())

app.use("/api", commentsRouter);
app.use("/api", postsRouter);
app.use("/api", usersRouter);

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
})