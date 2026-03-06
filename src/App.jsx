import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '../src/Mobile/Mobile.css'
import { Route, Routes } from 'react-router-dom'
import HomeBody from './Components/HomeBody'

function App() {

  return (
    <Routes>
      <Route path='/' element={<HomeBody />} />
    </Routes>
  )
}

export default App
