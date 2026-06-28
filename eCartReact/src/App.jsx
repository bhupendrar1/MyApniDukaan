import './App.css'
import Cart from './component/Cart/Cart'
import Footer from './component/Footer/Footer'
import Home from './component/Home/Home'
import Navbar from './component/Navbar/Navbar'
import ProductDetail from './component/ProductDetail/productDetail'

import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
         <Route path='/detail/:id' element={<ProductDetail />} />

      </Routes>
     <Footer />
    </>
  )
}

export default App
