import React from 'react'

const Cart = ({ cars}) => {
  return (
    <div>{cars.map(car => { 
      return <p key={car.id}>{car.name}, {car.price }</p>
    })}</div>
  )
}

export default Cart