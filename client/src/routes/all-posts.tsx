import React, { useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom';

type Props = {}

async function getPosts(){
    return           fetch('/api/posts', {
        method: 'GET', // This is optional for GET requests
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json());
}

export async function loader(){
    const posts = await getPosts();
    return {posts};
}


export default function AllPosts({}: Props) {
        // const [posts, setPosts] = useState<Post[]>([]);
        const {posts} = useLoaderData();
      
      
        return (
          <>
          <div className=''>
            <h1>Hi Champ</h1>
            {posts.map((post) =>{
              return(
                <div key={post.id} className='card w-96 bg-white shadow-xl text-black my-4'>
                    <Link to={`/posts/${post.id}`}>
                  <div className='card-body'>
                  <h1 className='card-title'>{post.title}</h1>
                  <p>{post.body}</p>
                    </div>
                    </Link>
                </div>
              )
            })}
          </div>
          </>
        )
      
}