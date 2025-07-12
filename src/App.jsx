import React, { useState } from 'react'
import Nav from './components/Nav/Nav'
import Productlist from './components/Productlist/Productlist'
import { CounterProvider } from './context/provider'
import Loading from './components/loading/Loading'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './components/cart/Cart'
import Login from './components/loginForm/Login'
import Register from './components/registerForm/Register'
import ProductDetail from './components/poductdetail/ProductDetail'


function App() {

  const [loading, setLoading] = useState(false)

  return (
    <>
      {loading && <Loading />}
    

      <BrowserRouter>
        <CounterProvider>
          <Nav></Nav>
          <Routes>
            <Route path="/" element={<Productlist setLoading={setLoading}/>}/>
            <Route path="/product/:id" element={<ProductDetail/>}/>
            <Route path="/cart" element={<Cart/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login/>} />
          </Routes>
        </CounterProvider>
      </BrowserRouter>
    </>
  )
}

export default App