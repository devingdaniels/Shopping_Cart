import React from 'react'

const Cart = ({ cars, increment, decrement }) => {
  
  return (
    <div>{cars.map((car, index) => { 
      return <p
        key={index}> {car.name}, {car.price}
        <button onClick={() => increment(car)}>Add</button>
        <button onClick={() => decrement(car)}>Minus</button>
      </p>      
    })}
      <button>CheckOut</button>
    </div>
  )
}

export default Cart