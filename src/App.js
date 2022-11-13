import React from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'


// Porsche Images
import Lot718  from './lot718/Lot718'
import Lot911 from './lot911/Lot911'
import LotTaycan from './lotTaycan/Taycan'

// Components
import Header from './components/Header'
import SiteNav from './components/SiteNav'
import Footer from './components/Footer'
import NotFound from './components/NotFound'

// Pages
import HomePage from './pages/Home'
import ShopPage from './pages/Shop'
import AboutPage from './pages/About'
import CartPage from './pages/Cart'

const App = () => {
  return ( 
    <>
    <Header></Header>
    <SiteNav></SiteNav>
      
    <Routes>      
      <Route path='/' element={<HomePage/>}/>
      <Route path='/shop' element={<ShopPage/>}/>
      <Route path='/about' element={<AboutPage />}/>
      <Route path='/cart' element={<CartPage />}/>
      <Route path='*' element={<NotFound/>}/>  
    </Routes>
      
    <Footer></Footer>
    </>
  )
}

export default App
