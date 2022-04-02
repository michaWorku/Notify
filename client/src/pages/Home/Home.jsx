import React, { useEffect, useState } from 'react'
import { io } from "socket.io-client";
import { Navbar, Post } from '../../componetns'
import { useAuthContext } from '../../context/auth/authContext';
import { posts } from '../../data'

const Home = () => {
  const { currentUser } = useAuthContext().state;

  const [socket, setSocket] = useState(null)

  useEffect(() => {
    setSocket(io("http://localhost:5000"))
  }, [])
  
  useEffect(() => {
    currentUser && socket?.emit('newUser', currentUser.email)
  }, [socket])

  return (
    <div className='container'>
      <Navbar socket={ socket }/>
      {
        posts.map((post)=>(<Post key={post.id} post={post} socket={ socket }/>))
      }
      <span className="username">{currentUser.email}</span>
    </div>
  )
}

export default Home