import React from 'react'

const ShopItem = ({ car }) => {
  return (
    <div className='shop-item'>
      <img src={car.img} alt="" /> 
      <p>{car.name}</p>
      <p>{car.price}</p>
      <button>Add to Cart</button>
    </div>
      
  )
}

export default ShopItem