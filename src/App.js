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
  const [totalItems, setTotalItems] = useState(0)

// METHODS 
  const updateCart = (car) => {        
    // Check if car is unique to cart     
    if (car.hasOwnProperty('quantity')) {
      // Increase the quantity prop on car object, update cart
      car.quantity = car.quantity + 1
      setCart(cart => [...cart])
    }
    else {
      // Add quantity prop to car, add car to cart
      car.quantity = 1
      setCart(cart => [...cart, car])
    }    
  }

  const increment = (car) => { 
     // Car exists in the cart, find it
    const existingCar = cart.find(el => el.id === car.id)
    existingCar.quantity = existingCar.quantity + 1

    setCart(cart => [...cart])       
  } 

  const decrement = (car) => { 
    // Car exists in the cart, find it
    const existingCar = cart.find(el => el.id === car.id)
  // Ensure count > 1 before decrementing
    if (existingCar.quantity > 1) {
      existingCar.quantity = existingCar.quantity - 1      
      setCart(cart => [...cart])
    }
    // Remove car from cart
    else { 
      // Remove quantity prop from car
      delete car.quantity
      // Update the new car by remove the car
      const newCart = cart.filter(obj => obj.id !== car.id)   
      // Update state      
      setCart(newCart)
    }    
  }

  const getTotalCartItems = () => {
    if (cart.length !== 0) { 
      const total = cart.reduce((a, b) => ({ quantity: a.quantity + b.quantity }))
      return total.quantity
    }
    return 0
  }


  useEffect(() => { 
    const total = getTotalCartItems()

    setTotalItems(total)
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
        <Route path='cart' element={<CartPage cart={cart} total={ totalItems } increment={ increment } decrement={ decrement } />}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App


