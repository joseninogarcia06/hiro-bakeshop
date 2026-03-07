import './App.css'
import '../src/Mobile/Mobile.css'
import '../src/Mobile/LargePhones.css'
import '../src/Mobile/Tablet.css'
import { Route, Routes } from 'react-router-dom'
import HomeBody from './Components/HomeBody'
import DefaultPage from './Components/DefaultPage'
import { OUR_STORY_CONTENT } from './Content/OurStory'
import { useEffect } from 'react'

function App() {

  useEffect(() => {
    document.body.classList.add('body-home-color');
  }, [])

  return (
    <Routes>
      <Route path='/' element={<HomeBody />} />
      <Route path='/our-story' element={<DefaultPage pageTitle="Our Story" content={OUR_STORY_CONTENT} />} />
    </Routes>
  )
}

export default App
