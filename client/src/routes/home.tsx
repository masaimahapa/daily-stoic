import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
    <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
      <h1 className="text-3xl font-bold mb-4">Stoic Daily</h1>
      <p className="mb-4">
        Dive deep into Stoic philosophy with daily reflections, challenges, and a vibrant community.
      </p>
      <div className="btn btn-primary w-full">
        <Link to={`/posts`}>
        Get Started
        </Link>
        </div>
    </div>
  </div>
  )
}