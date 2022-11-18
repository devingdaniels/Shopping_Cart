import React from 'react'

import { BiPlusCircle , BiMinusCircle} from 'react-icons/bi'


const CartItem = ({ car }) => {
  return (    
        <div className='cart-item'>
            <img src={car.img} alt="" className='cart-item-img' />          
            <div className='cart-item-info'>
                <h3>{car.name}</h3>
                <h5>Delivery: 12-25-2022</h5>
                <h5>Price: {car.price}</h5>        
                <h5>Quantity: {car.count } </h5>        
                <div className='increment-button-container'>
                    <BiMinusCircle size={25} className='decrement-item-button'/>
                    <BiPlusCircle size={25} className='increment-item-button' />
                </div>
            </div>
        </div>
  )
}
export default CartItem