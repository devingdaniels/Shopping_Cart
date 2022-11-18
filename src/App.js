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
import CartPage from './components/cartPage/CartPage'

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
  // HOOKS  
  const [cart, setCart] = useState([])

// METHODS 
  const updateCart = (car) => {
    // // Get the ID of the car
    // const id = car.id
    // // Check if car is unique to cart
    // const hasCount = car.hasOwnProperty('count')
    
    // if (cart.some(obj => obj.car.car.id === id)) {
    //   console.log('duplicate car')
    //   // Get the index of the car with that id
    //   const car = cart.find(car => car.id = id)
    //   car.count = car.count + 1
    //   setCart(cart => [...cart])
    // }
    // else {
    // }
    
    setCart(cart => [...cart, car])

    /* 
    1. Check if the car type has already been added to the cart (car.name)
        if (true) --> increase the count on that car type object (don't add duplicate car types)
        else --> add the car object to the cart, and add a count property on object to track count of same-type-cars
    2. 
    */    
  }

  const increment = (car) => { 
    /*
      1. Get the name of the car 
      2. Find car type in the cart
      3. Increment its count property 

    */  
  }

  const decrement = (car) => { 
    /*
      1. Get the name of the car 
      2. Find car type in the cart
      3. Decrement its count property 
        if (count <= 0) --> remove the car type from the cart 

    */
    console.log(car)
  }

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
        <Route path='cart' element={<CartPage cart={cart} increment={ increment } decrement={ decrement } />}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
