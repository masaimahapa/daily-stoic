import React from 'react';
import EditPostForm from '../components/forms/edit-post-form';
import { useLoaderData } from 'react-router-dom';
import { Post } from '../interfaces/post';


async function getPostData(postId: string): Promise<Post>{
    return fetch(`/api/posts/${postId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json());
}

export async function loader(){
    const postId = params.postId;
    const post = await getPostData(postId);
    return {post};
}

const EditPostPage: React.FC = () => {
    const {post} = useLoaderData();
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center py-10">
            <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
                <h1 className="text-3xl font-bold mb-4">Edit Post</h1>
                <EditPostForm initialValues={post}/>
            </div>
        </div>
    );
}

export default EditPostPage;
