// Comment.tsx
import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';

interface CommentProps {
    id: number;
    postId: number;
    email: string;
    name: string;
    body: string;
}

const Comment: React.FC<CommentProps> = ({ email, name, body }) => {
    return (
        <div className='border-t border-gray-300 p-4'>
            <div className='flex my-4'>
                <AiOutlineUser className="mx-2 w-6 h-6 my-auto text-gray-500" />
                <div className="flex flex-col">
                    <h6 className='text-xs text-gray-500 font-semibold'>
                        <span className='font-bold'>{email}</span> says:
                    </h6>
                    <h6 className='text-sm font-semibold my-2'>{name}</h6>
                </div>
            </div>
            <p className="text-sm">{body}</p>
        </div>
    );
};

export default Comment;
