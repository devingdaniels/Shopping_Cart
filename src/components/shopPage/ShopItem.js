import React, { useState, useEffect } from "react"



const ShopItem = ({ car, addItem }) => {
  
  const updateCart = (car) => { 
    addItem(car)    
  }


  const [subTotalWithCommas, setWithCommas] = useState(0)

  useEffect(() => { 
    const withCommas = car.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    setWithCommas(withCommas)
  })
  

  return (
    <div className='shop-item'>
      <img src={car.img} alt="" /> 
      <p>{car.name}</p>
      <p>${subTotalWithCommas}</p>
      <button onClick={()=>updateCart(car)} className='add-to-cart'>Add to Cart</button>
    </div>
      
  )
}

export default ShopItem