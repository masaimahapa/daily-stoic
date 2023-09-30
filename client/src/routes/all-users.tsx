import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { User } from '../interfaces/user';


async function getAllUsers(): Promise<User>{
    return fetch(`/api/users`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json());
}

export async function loader(){
    const users = await getAllUsers();
    return {users};
}

export default function AllUsers() {
    const {users} = useLoaderData();
    console.log(users)
  
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center py-10">
          
            <div className="w-full max-w-2xl">
                {
                    users.map((user) => {
                        return (
                            <div key={user.id} className="bg-white p-6 rounded-lg shadow-md mb-6">
                                  <Link to={`/users/${user.id}`}>
                                <h1 className="text-2xl font-bold mb-4">{user.name}</h1>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-sm text-gray-600 mb-2"><span className="font-semibold">Email:</span> {user.email}</p>
                                        <p className="text-sm text-gray-600 mb-2"><span className="font-semibold">Phone:</span> {user.phone}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600 mb-2"><span className="font-semibold">Website:</span> <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{user.website}</a></p>
                                        <p className="text-sm text-gray-600"><span className="font-semibold">Company:</span> {user.company.name}</p>
                                    </div>
                                </div>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}