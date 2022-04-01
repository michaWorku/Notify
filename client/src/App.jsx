import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { io } from "socket.io-client";
import './App.css'
import { useAuthContext } from './context/auth/authContext';
import { Home,  Login} from "./pages";

const App = () => {
  const { currentUser } = useAuthContext().state;

  const [socket, setSocket] = useState(null)

  useEffect(() => {
    setSocket(io("http://localhost:5000"))
  }, [])
  

  const RequireAuth = ({children}) =>{
    return currentUser ? children : <Navigate to='/login'/> 
  }

  return (
    <Router>
      <Routes>
        <Route path="/">
              <Route 
                index 
                element={
                  <RequireAuth>
                    <Home />
                  </RequireAuth>
                  }
              />
              <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App