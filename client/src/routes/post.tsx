import React from 'react'
import { useLoaderData } from 'react-router-dom';
import { Post } from '../interfaces/post';

type Props = {}

async function getSinglePost(id){
    return           fetch(`/api/posts/${id}`, {
        method: 'GET', // This is optional for GET requests
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json());
}

export async function loader({params}){
    const postId = params.postId;
    const post : Post= await getSinglePost(postId);
    return {post};
}

export default function BlogPost({}: Props) {
    const {post}= useLoaderData();
  return (
    <div>
        <h1>{post.title}</h1>

        <div>
            <p>{post.body}</p>
        </div>

    </div>
  )
} 