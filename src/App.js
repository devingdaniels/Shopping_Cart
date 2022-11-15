// CSS 
import './App.css'

// React libraries 
import React from 'react'
import { Routes, Route } from 'react-router-dom'

// Components
import Header from './components/Header'

// Pages
import HomePage from './pages/HomePage'
import ShopPage from './pages/Shop'
import AboutPage from './pages/About'
import CartPage from './pages/Cart'

const App = () => {
  return ( 
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/shop' element={<ShopPage/>}/>
      <Route path='/about' element={<AboutPage />}/>
      <Route path='/cart' element={<CartPage />}/>
    </Routes>    
    </>
  )
}

export default App
