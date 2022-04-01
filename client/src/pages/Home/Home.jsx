import React from 'react'
import { Navbar, Post } from '../../componetns'
import { useAuthContext } from '../../context/auth/authContext';
import { posts } from '../../data'
const Home = () => {
  const { currentUser } = useAuthContext().state;

  return (
    <div className='container'>
      <Navbar/>
      {
        posts.map((post)=>(<Post key={post.id} post={post}/>))
      }
      {/* <span className="username">{currentUser.email}</span> */}
    </div>
  )
}

export default Home