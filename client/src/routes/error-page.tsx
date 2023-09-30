import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

type Props = {}

export default function ErrorPage({}: Props) {
    const error = useRouteError();

  return (
    // <div>
    //      <h1>Oops!</h1>
    //   <p>Sorry, an unexpected error has occurred.</p>
    //   <p>
    //     <i>{error.statusText || error.message}</i>
    //   </p>
    // </div>

<div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
<div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md text-center">
  <h1 className="text-4xl font-bold mb-4 text-red-500">404</h1>
  <p className="mb-4">
    Oops! The page you're looking for doesn't exist.
  </p>
  <div className="btn btn-primary w-full">
    <Link to={`/`}>
    Go Home
    </Link>
    </div>
</div>
</div>
  )
}