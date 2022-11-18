import React from 'react'
import { useLayoutEffect } from 'react'
// Components
import ShopItem from '../ShopItem'
// Unique ID generator
import uniqueID from 'uniqid'
// Images
import Macan from './images/macan.png'
import MacanT from './images/macanT.png'
import MacanS from './images/macanS.png'
import MacanGTS from './images/macanGTS.png'


const Models = [
{
    name: 'Macan',
    img: Macan,    
    price: 57500,
    id: uniqueID(),
  },
{
    name: 'Macan T',
    img: MacanT,    
    price: 63100,
    id: uniqueID(),
  },
{
    name: 'Macan S',
    img: MacanS,    
    price: 68400,
    id: uniqueID(),
  },
{
    name: 'Macan GTS',
    img: MacanGTS,    
    price: 82900,
    id: uniqueID(),
},
]

const LotMacan = ({ addItem }) => {
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

export default LotMacan