import './App.css'
import Cart from './component/Cart/Cart'
import Home from './component/Home/Home'
import Navbar from './component/Navbar/Navbar'

import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>

    </>
  )
}

export default App
