import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Image from './components/Image'
const App = () => {
  return (<div className='h-screen w-full flex flex-col justify-center items-center'>
    <Navbar/>
    <Image/>
    </div>
  )
}

export default App
