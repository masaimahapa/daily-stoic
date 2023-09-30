import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './routes/home.tsx'
import ErrorPage from './routes/error-page.tsx'
import BlogPost, {loader as PostLoader} from './routes/post.tsx'
import AllPosts, {loader as allPostsLoader} from './routes/all-posts.tsx'
import Layout from './components/Layout/layout.tsx'
import CreatePostForm from './routes/new-post.tsx'
import NewPostPage from './routes/new-post.tsx'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserProfile, {loader as userProfileLoader} from './routes/user-profile.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
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
      },
      {
        path: "new-post",
        element: <NewPostPage />
      },
      {
        path: "/users/:userId",
        element: <UserProfile />,
        loader: userProfileLoader
      }
    ]
  },


  

])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    <ToastContainer />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
