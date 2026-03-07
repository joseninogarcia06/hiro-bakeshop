import './App.css'
import '../src/Mobile/Mobile.css'
import '../src/Mobile/LargePhones.css'
import '../src/Mobile/Tablet.css'
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
