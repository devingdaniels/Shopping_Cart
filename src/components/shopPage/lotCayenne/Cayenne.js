import React from 'react'
import { useLayoutEffect } from 'react'
// Components
import ShopItem from '../ShopItem'
// Unique ID generator
import uniqueID from 'uniqid'
// Images
import Cayenne1 from './images/cayenne1.png'
import Cayenne2 from './images/cayenne2.png'
import Cayenne3 from './images/cayenne3.png'
import Cayenne4 from './images/cayenne4.png'
import Cayenne5 from './images/cayenne5.png'

const Models = [
{
    name: 'Cayenne',
    img: Cayenne1,    
    price: '$72,200',
    id: uniqueID(),
  },
  {
    name: 'Cayenne GTS',
    img: Cayenne2,    
    price: '$113,100',
    id: uniqueID(),
  },
  {
    name: 'Cayenne Turbo',
    img: Cayenne3,    
    price: '$135,500',
    id: uniqueID(),
  },
  {
    name: 'Cayenne Turbo S E-Hybrid',
    img: Cayenne4,    
    price: '$171,300',
    id: uniqueID(),
  },
  {
    name: 'Cayenne Turbo GT',
    img: Cayenne5,    
    price: '$188,700',
    id: uniqueID(),
  },
]

const LotCayenne = ({ addItem }) => {
     useLayoutEffect(() => {
      window.scrollTo({
      top: 0,
      behavior: 'smooth'
  })
});
   return (
     <div className='shop-items-grid-container'>
        {Models.map(car => {
            return <ShopItem car={ car } key={car.id} addItem={ addItem }/>
        })}
    </div> 
  )
}

export default LotCayenne