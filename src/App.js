// CSS 
import './App.css'

// React libraries 
import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'

// Pages
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import AboutPage from './pages/AboutPage'
import CartPage from './pages/CartPage'

// Components
import Header from './components/Header'
import Footer from './components/Footer'
import Lot718 from './components/shopPage/lot718/718'
import Lot911 from './components/shopPage/lot911/911'
import LotTaycan from './components/shopPage/lotTaycan/Taycan'
import LotPanamera from './components/shopPage/lotPanamera/Panamera'
import LotMacan from './components/shopPage/lotMacan/Macan'
import LotCayenne from './components/shopPage/lotCayenne/Cayenne'

const App = () => {
  const [cart, setCart] = useState([])

  const updateCart = (car) => {     
    setCart([...cart, car])
  }

  const decrementItem = (car) => { 
    console.log('decrementItem')
    console.log(car)
    // 
  }

  const incrementItem = (car) => { 
    console.log('incrementItem')
    console.log(car)
  }

  useEffect(() => { 
    console.log(cart)
  }, [cart])

  return ( 
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='shop' element={<ShopPage />}>
          <Route path='718' element={<Lot718 addItem={ updateCart} />}/>
          <Route path='911' element={<Lot911 addItem={ updateCart} />}/>
          <Route path='taycan' element={<LotTaycan addItem={ updateCart} />}/>
          <Route path='panamera' element={<LotPanamera addItem={ updateCart} />} />
          <Route path='macan' element={<LotMacan addItem={ updateCart} />} />
          <Route path='cayenne' element={<LotCayenne addItem={ updateCart}/>}/> 
      </Route>
      <Route path='about' element={<AboutPage />}/>
        <Route path='cart' element={<CartPage cars={cart} increment={ incrementItem } decrement={ decrementItem } />}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
