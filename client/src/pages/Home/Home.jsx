import React from 'react'
import { Navbar, Post } from '../../componetns'
import { useAuthContext } from '../../context/auth/authContext';

const Home = () => {
  const { currentUser } = useAuthContext().state;
  return (
    <div className='container'>
      <Navbar/>
      <Post/>
      <span className="username">{currentUser}</span>
    </div>
  )
}

export default Home