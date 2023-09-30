import React from 'react'
import { Link } from 'react-router-dom';
import {AiOutlineTwitter} from 'react-icons/ai';
type Props = {}

export default function Header({}: Props) {
    return (
        <header className="bg-blue-600 text-white shadow p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold">Stoic Daily</Link>
                <nav>
                    <ul className="flex space-x-4">
                        <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
                        <li><Link to="/posts" className="hover:text-gray-300">Posts</Link></li>
                        <li><Link to="/new-post" className="hover:text-gray-300">
                            <AiOutlineTwitter />
                            </Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}