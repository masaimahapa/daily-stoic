import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './routes/home.tsx'
import ErrorPage from './routes/error-page.tsx'
import BlogPost, {loader as PostLoader} from './routes/post.tsx'
import AllPosts, {loader as allPostsLoader} from './routes/all-posts.tsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/posts",
    element: <AllPosts />,
    loader: allPostsLoader
  },
  {
    path: "posts/:postId",
    element: <BlogPost />, 
    loader: PostLoader

  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
