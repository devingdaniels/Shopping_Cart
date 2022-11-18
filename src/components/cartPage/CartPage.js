import React, {useLayoutEffect } from 'react'
// Components 
import CartItem from './CartItem'


const Cart = ({ cart, total, increment, decrement }) => {
  
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
          <h3>SubTotal ({total} items): ${0}</h3>
          <button className='checkout-button'>Proceed to Checkout</button>
        </div >
        <div className='cart-items-section'>
          {cart.map((car, index) => { 
            return <CartItem car={car} increment={ increment } decrement={ decrement } key={index} />
          })}
        </div>
      </div>
     </>
  )
}

export default Cart
