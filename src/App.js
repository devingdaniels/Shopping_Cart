// CSS 
import './App.css'

// React libraries 
import React from 'react'
import { Routes, Route } from 'react-router-dom'

// Pages
import HomePage from './pages/HomePage'
import ShopPage from './pages/Shop'
import AboutPage from './pages/About'
import CartPage from './pages/Cart'

// Components
import Header from './components/Header'
import Footer from './components/Footer'
import Lot718 from './components/shopPage/718'
import Lot911 from './components/shopPage/911'
import LotTaycan from './components/shopPage/Taycan'
import LotPanamera from './components/shopPage/Panamera'
import LotMacan from './components/shopPage/Macan'
import LotCayenne from './components/shopPage/Cayenne'

const App = () => {
  return ( 
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='shop' element={<ShopPage />}>
          <Route path='718' element={<Lot718 />}/>
          <Route path='911' element={<Lot911 />}/>
          <Route path='taycan' element={<LotTaycan />}/>
          <Route path='panamera' element={<LotPanamera />} />
          <Route path='macan' element={<LotMacan />} />
          <Route path='cayenne' element={<LotCayenne/>}/> 
      </Route>
      <Route path='about' element={<AboutPage />}/>
      <Route path='cart' element={<CartPage />}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
