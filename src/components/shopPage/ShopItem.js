import React from 'react'


const ShopItem = ({ car, addItem }) => {
  
  const updateCart = (car) => { 
    addItem(car)    
  }

  return (
    <div className='shop-item'>
      <img src={car.img} alt="" /> 
      <p>{car.name}</p>
      <p>{car.price}</p>
      <button onClick={()=>updateCart(car)} className='add-to-cart'>Add to Cart</button>
    </div>
      
  )
}

export default ShopItem