import React from 'react'

import { GrAddCircle } from 'react-icons/gr'

const style = {
    color: 'green'
}

const CartItem = ({ car }) => {
  return (    
        <div className='cart-item'>
            <img src={car.img} alt="" className='cart-item-img' />          
        <div className='cart-item-info'>
            <h3>{car.name}</h3>
            <h5>Delivery: 12-25-2022</h5>
            <h5>Price: {car.price}</h5>
            <GrAddCircle size={30} className='increment-item-button' />
        </div>
        </div>    
  )
}

export default CartItem