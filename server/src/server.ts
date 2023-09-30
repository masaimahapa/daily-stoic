import express, {Express, Request, Response} from "express";
import dotenv from "dotenv";

import { commentsRouter } from "./routes/comments/comments.router";
import { postsRouter } from "./routes/posts/posts.router";
import { usersRouter } from "./routes/users/users.router";

dotenv.config();

export const app: Express = express();
const port = process.env.PORT || 8000;

app.use(express.json())

app.use("/api", commentsRouter);
app.use("/api", postsRouter);
app.use("/api", usersRouter);

if (process.env.NODE_ENV !== 'test') {
    app.listen(port, ()=>{
        console.log(`Server running on port ${port}`);
    })
  }
