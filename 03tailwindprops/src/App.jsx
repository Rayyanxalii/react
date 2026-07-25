import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './card'

function App() {

  const display = {
    name: 'Rayyan',
    text: 'This is a Card, and I am doing props implementation'
  }

  return (
    <>
      <h1 className="bg-purple-500 rounded-xl p-4"> Tailwind CSS</h1 >
      <Card obj={display} />
    </>
  )
}

export default App