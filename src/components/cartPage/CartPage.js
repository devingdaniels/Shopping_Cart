import React, {useEffect, useLayoutEffect, useState } from 'react'
// Components 
import CartItem from './CartItem'


const Cart = ({ cart, total, subTotal, increment, decrement }) => {

  const [subTotalWithCommas, setWithCommas] = useState(0)
  
useLayoutEffect(() => {
  window.scrollTo({
    top: 0,  
    behavior: 'smooth'
  })
 });

  useEffect(() => { 
    const withCommas = subTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    setWithCommas(withCommas)
  })
  
  return (
    <>
      <h2>Shopping Cart</h2>
      <div className='cart-container'>
        <div className='cart-checkout-section'>
          <p>Your order qualifies for FREE Shipping. Choose this option at checkout. See details</p>
          <h3>SubTotal ({total} items): ${subTotalWithCommas}</h3>
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
