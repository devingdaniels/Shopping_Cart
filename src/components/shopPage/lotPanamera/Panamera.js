import React from 'react'
import { useLayoutEffect } from 'react'
// Components
import ShopItem from '../ShopItem'
// Unique ID generator
import uniqueID from 'uniqid'
// Images
import Panamera from './images/panamera.png'
import Panamera4 from './images/panamera4.png'
import Panamera4Sport from './images/panamera4Sport.png'
import Panamera4s from './images/panamera4s.png'
import Panamera4Hybrid from './images/panamera4Hybrid.png'
import Panamera4GTS from './images/panameraGTS.png'
import Panamera4GTSSport from './images/panameraGTSSport.png'
import PanameraTurboS from './images/panameraTurboS.png'
import PanameraTurboSHybrid from './images/panameraTurboSHybrid.png'

const Models = [
  {
    name: 'Panamera',
    img: Panamera,    
    price: '$92,400',
    id: uniqueID(),
},
{
    name: 'Panamera 4',
    img: Panamera4,    
    price: '$97,000',
    id: uniqueID(),
  },
  {
    name: 'Panamera 4 Sport',
    img: Panamera4Sport,    
    price: '$117,000',
    id: uniqueID(),
  },
{
    name: 'Panamera 4 S',
    img: Panamera4s,    
    price: '$110,900',
    id: uniqueID(),
  },
  {
    name: 'Panamera 4 E-Hybrid',
    img: Panamera4Hybrid,    
    price: '$109,000',
    id: uniqueID(),
  },
  {
    name: 'Panamera GTS',
    img: Panamera4GTS,    
    price: '$135,200',
    id: uniqueID(),
  },
  {
    name: 'Panamera GTS Sport Turismo',
    img: Panamera4GTSSport,    
    price: '$141,400',
    id: uniqueID(),
  },
  {
    name: 'Panamera Turbo S',
    img: PanameraTurboS,    
    price: '$186,400',
    id: uniqueID(),
  },
  {
    name: 'Panamera Turbo S E-Hybrid Sport',
    img: PanameraTurboSHybrid,    
    price: '$200,400',
    id: uniqueID(),
  },
  
]

const LotPanamera = ({ addItem }) => {
     useLayoutEffect(() => {
     window.scrollTo({
    top: 0,  
    behavior: 'smooth'
  })
});
   return (
     <div className='shop-items-grid-container'>
        {Models.map(car => {
            return <ShopItem car={car} key={car.id} addItem={ addItem }/>
        })}
    </div> 
  )
}

export default LotPanamera