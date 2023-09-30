import React from 'react';
import CreatePostForm from '../components/forms/create-post-form';


const NewPostPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center py-10">
            <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
                <h1 className="text-3xl font-bold mb-4">Create New Post</h1>
                <CreatePostForm />
            </div>
        </div>
    );
}

export default NewPostPage;
