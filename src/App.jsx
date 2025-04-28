import React from 'react'
import Home from './pages/Home/Home'
import {Routes, Route} from 'react-router-dom'
import Login from './pages/Login/Login'
import Player from './pages/Player/Player'
import { useNavigate } from 'react-router-dom'
import './App.css'
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'
import { auth } from './Firebase'
import { useState } from 'react'
import { useRef } from 'react'
const App = () => {
  const navigate = useNavigate();
  useEffect(() => {

    
   onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log('User is signed in:', user);
        navigate('/');
      } else {
        console.log('No user is signed in.');
        navigate('/login');
      }
    });

  
  }, [])
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/player/:id' element={<Player/>}/>
      </Routes>
    
    </div>
  )
}

export default App
