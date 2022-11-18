import React from 'react'

import { BiPlusCircle, BiMinusCircle } from 'react-icons/bi'

const CartItem = ({ car, increment, decrement }) => {
    const getDate = () => { 
        // Just for show, not really useful
        const date = new Date()
        const day = date.getDay()
        const month = date.getMonth()
        return `${day}/${month}`        
    }
  return (    
        <div className='cart-item'>
            <img src={car.img} alt="" className='cart-item-img' />          
            <div className='cart-item-info'>
                <h3>{car.name}</h3>
                <h5>Delivery: {getDate()} </h5>
                <h5>Price: {car.price}</h5>        
                <h5>Quantity: {car.quantity} </h5>        
                <div className='increment-button-container'>
                  <BiMinusCircle size={25} onClick={ () => decrement(car) }  className='decrement-item-button'/>
                    <BiPlusCircle size={25} onClick={() => increment(car) } className='increment-item-button' />
                </div>
            </div>
        </div>
  )
}
export default CartItem