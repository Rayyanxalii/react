import { useState } from 'react'
import './App.css'
import Usercontextprovider from './Context/Usercontextprovider'
import UserContext from './Context/UserContext'
import Login from './Components/login'
import Profile from './Components/profile'

function App() {

  return (
    <>
    <Usercontextprovider>
       <h1>Context API</h1>
       <Login/>
       <Profile/>
    </Usercontextprovider>
     
    </>
  )
}

export default App
