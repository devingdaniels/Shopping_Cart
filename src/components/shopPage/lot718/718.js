import React from 'react'
import { useLayoutEffect } from 'react'
// Unique ID generator
import uniqueID from 'uniqid'
// Images
import Cayman718 from './images/Cayman718.png'
import Boxster718 from './images/Boxster718.png'
import CaymanS718 from './images/CaymanS718.png'
import BoxsterS718 from './images/BoxsterS718.png' 
import Cayman718GTS from './images/Cayman718GTS.png'
import Boxster718GTS from './images/Boxster718GTS.png'
import Spyder718 from './images/Spyder718.png'
import Cayman718GT4 from './images/Cayman718GT4.png'

import ShopItem from '../ShopItem'


const Models = [{
    name: '718 Cayman',
    img: Cayman718,
    id: uniqueID(),   
    price: 63400    
},
{
    name: '718 Boxster',
    img: Boxster718,    
    id: uniqueID(),
    price: 65500,
},
{
    name: '718 Cayman S',
    img: CaymanS718,
    id: uniqueID(),
    price: 75400
},
{
    name: '718 Boxster S',
    img: BoxsterS718,
    id: uniqueID(),
    price: 77500
},
{
    name: '718 Cayman GTS 4.0',
    img: Cayman718GTS,
    id: uniqueID(),
    price: 90300
},
{
    name: '718 Boxster GTS 4.0',
    img: Boxster718GTS,
    id: uniqueID(),
    price: 92400
},
{
    name: '718 Spyder',
    img: Spyder718,
    id: uniqueID(),
    price: 103400
},
{
    name: '718 Cayman GTR RS',
    img: Cayman718GT4,
    id: uniqueID(),
    price: 149100
},
]



const Lot718 = ({ addItem }) => {

    useLayoutEffect(() => {
    window.scrollTo({
    top: 0,  
    behavior: 'smooth'
  })
});
    return (        
    <div className='shop-items-grid-container'>
        {Models.map(car => {
            return <ShopItem car={car} key={car.id} addItem={ addItem } />
        })}
    </div>    
  )
}

export default Lot718