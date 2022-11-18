import React from 'react'
import { useLayoutEffect } from 'react'
// Components
import ShopItem from '../ShopItem'
// Unique ID generator
import uniqueID from 'uniqid'
// Images
import Taycan from './images/Taycan.png'
import TaycanCross4 from './images/TaycanCross4.png'
import Taycan4S from './images/Taycan4S.png'
import TaycanGTS from './images/TaycanGTS.png'
import TaycanTurbo from './images/TaycanTurbo.png'
import TaycanTurboS from './images/TaycanTurboS.png'
import TaycanTurboSCross from './images/TaycanTurboSCross.png'

const Models = [
{
    name: 'Taycan',
    img: Taycan,    
    price: 86700,
    id: uniqueID(),
},
{
    name: 'Taycan 4 Cross Turismo',
    img: TaycanCross4,    
    price: 97700,
    id: uniqueID(),
    },
{
    name: 'Taycan 4S',
    img: Taycan4S,    
    price: 106500,
    id: uniqueID(),
    },
{
    name: 'Taycan GTS',
    img: TaycanGTS,    
    price: 134100,
    id: uniqueID(),
},
{
    name: 'Taycan Turbo',
    img: TaycanTurbo,    
    price: 153300,
    id: uniqueID(),
    },
{
    name: 'Taycan Turbo S',
    img: TaycanTurboS,    
    price: 187400,
    id: uniqueID(),
    },
{
    name: 'Taycan Turbo S Cross Turismo',
    img: TaycanTurboSCross,    
    price: 190000,
    id: uniqueID(),
},
]

const LotTaycan = ({ addItem }) => {
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

export default LotTaycan