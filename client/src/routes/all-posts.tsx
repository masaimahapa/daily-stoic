import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

async function getPosts(){
    return fetch('/api/posts', {
        method: 'GET',
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

export default function AllPosts() {
    const {posts: allPosts} = useLoaderData();
    const [searchTerm, setSearchTerm] = useState('');
    const [posts, setPosts] = useState(allPosts);
  
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        if (e.target.value) {
            const filteredPosts = allPosts.filter(post => post.title.toLowerCase().includes(e.target.value.toLowerCase()));
            setPosts(filteredPosts);
        } else {
            setPosts(allPosts);
        }
    }
  
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-start items-center py-10 px-4">
            <h1 className="text-4xl font-bold mb-4 w-full max-w-2xl">All Posts</h1>
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search posts..."
                className="w-full max-w-2xl mb-6 px-4 py-2 border rounded-md"
            />
            <div className="flex flex-col space-y-6 w-full max-w-2xl border rounded-xl divide-y">
                {posts.map((post) => (
                    <Link to={`/posts/${post.id}`} key={post.id} className="flex items-start py-4 px-6 hover:bg-gray-50">
                        <div className="flex-grow">
                            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                            <p className="text-gray-700">{post.body}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
