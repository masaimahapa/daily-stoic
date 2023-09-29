import { useEffect, useState } from 'react'
import './App.css'
interface Post{
  id: number;
  title: string;
  body: string;
}
function App() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch('/api/posts', {
        method: 'GET', // This is optional for GET requests
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(json => setPosts(json))
}, [])


  return (
    <>
    <div className=''>
      <h1>Hi Champ</h1>
      {posts.map((post) =>{
        return(
          <div key={post.id} className='card w-96 bg-white shadow-xl text-black my-4'>
            <div className='card-body'>
            <h1 className='card-title'>{post.title}</h1>
            <p>{post.body}</p>
              </div>
          </div>
        )
      })}
    </div>
    </>
  )
}

export default App
