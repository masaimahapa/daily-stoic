import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { User } from '../interfaces/user';
import Comment from '../components/comment/comment';

async function getUserProfile(id: string): Promise<User>{
    return fetch(`/api/users/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json());
}


async function getComments(id:string){
    return fetch(`/api/users/${id}/posts`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json());
}

export async function loader({params}){
    const userId = params.userId;
    const user = await getUserProfile(userId);
    const comments = await getComments(userId);
    console.log("comments", comments);
    return {user, comments};
}

export default function UserProfile() {
    const {user, comments} = useLoaderData();
  
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center py-10">
<div>
    <h1>{user.name} </h1>
    <p>{user.email}</p>
    <p>{user.website}</p>
    <p>{user.phone}</p>
</div>

<div>
    <h3>Recent Activity</h3>
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
    );
}