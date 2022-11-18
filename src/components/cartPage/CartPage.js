import React, { useLayoutEffect, useState } from 'react'
// Components 
import CartItem from './CartItem'


const Cart = ( { cart } ) => {
// HOOKS
  const [subTotal, setSubTotal] = useState(0)

  const getTotal = () => {  
    
  }
useLayoutEffect(() => {
  window.scrollTo({
    top: 0,  
    behavior: 'smooth'
  })
 });
  
  return (
    <>
      <h2>Shopping Cart</h2>
      <div className='cart-container'>
        <div className='cart-checkout-section'>
          <p>Your order qualifies for FREE Shipping. Choose this option at checkout. See details</p>
          <h3>SubTotal ({cart.length} items): ${subTotal}</h3>
          <button className='checkout-button'>Proceed to Checkout</button>
        </div >
        <div className='cart-items-section'>
          {cart.map((item, index) => { 
            return <CartItem car={item} key={index} />
          })}
        </div>
      </div>
     </>
  )
}

export default Cart
