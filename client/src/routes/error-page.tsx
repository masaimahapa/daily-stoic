import React from 'react'
import { useRouteError } from 'react-router-dom'

type Props = {}

export default function ErrorPage({}: Props) {
    const error = useRouteError();

  return (
    <div>
         <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}