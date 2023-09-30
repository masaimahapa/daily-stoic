import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { Link, useLoaderData } from 'react-router-dom';
import Comment from '../components/comment/comment';

type Props = {}

async function getSinglePost(id){
    return fetch(`/api/posts/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json());
}


async function getComments(id){
    http://localhost:8000/api/posts/1/comments
    return fetch(`/api/posts/${id}/comments`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json());
}

export async function loader({params}){
    const postId = params.postId;
    const post = await getSinglePost(postId);
    const comments = await getComments(postId);
    return {post, comments};
}

export default function BlogPost({}: Props) {
    const {post, comments} = useLoaderData();
  
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center py-10">
            <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-2xl">
                <div className="flex items-center mb-6">
                    <AiOutlineUser className="mr-2 w-6 h-6" />
                    <Link to={`/users/${post.userId}`} className="hover:underline">
                        Go to Author
                    </Link>
                </div>
                <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
                <div className="text-gray-700 mb-8">
                    <p>{post.body}</p>
                </div>
                <div>
                    <h3 className='text-2xl font-semibold mb-6'>Comments</h3>
                    <div className="text-gray-700 space-y-4">
                        {
                            comments.map((comment) => {
                                return (
                                    <Comment key={comment.id} {...comment} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
