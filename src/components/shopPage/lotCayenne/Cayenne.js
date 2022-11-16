import React from 'react'
import { useLayoutEffect } from 'react'
// Components
import ShopItem from '../ShopItem'
// Unique ID generator
import uniqueID from 'uniqid'
// Images



const Models = [
{
    name: 'Macan',
    img: 'Macan',    
    price: '$57,500',
    id: uniqueID(),
  },

]

const LotCayenne = () => {
     useLayoutEffect(() => {
    window.scrollTo(0, 0)
});
   return (
     <div className='shop-items-grid-container'>
        {Models.map(car => {
            return <ShopItem car={ car } key={car.id}/>
        })}
    </div> 
  )
}

export default LotCayenne