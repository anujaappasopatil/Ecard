import React, { useState } from 'react'
import Navbarr from './components/Navbarr'
import Product from './components/Product'
import {BrowserRouter as Router ,Routes, Route} from 'react-router-dom'
import Cart from './components/Cart'
import SearchItems from './components/SearchItems'
import ProductDetail from './components/ProductDetail'
import { items } from './components/Data'

const App =() => {
  const [data, setData] = useState([...items])
  const [cart, setCart] = useState([])
  return (
    < >
    <Router>
    <Navbarr cart={cart} setData={setData}/>
    <Routes>
      <Route path='/' element ={  <Product cart={cart} setCart={setCart} items={data} />}/>
      <Route path='/product/:id' element={<ProductDetail  cart={cart} setCart={setCart}/>}/>
      <Route path='/search/:term' element={<SearchItems cart={cart} setCart={setCart} />}/>
      <Route path='/card' element={<Cart cart={cart} setCart={setCart} />}/>
    </Routes>
  
    </Router>
   
    </>
  )
}

export default App