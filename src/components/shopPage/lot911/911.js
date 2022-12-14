import React from 'react'
import { useLayoutEffect } from 'react'
// Unique ID generator
import uniqueID from 'uniqid'
// Components
import ShopItem from '../ShopItem'
// Images
import Carrera from './images/Carrera.png'
import CarreraCab from './images/CarreraCab.png'
import Carrera4 from './images/Carrera4.png'
import CarreraCab4 from './images/CarreraCab4.png'
import CarreraS from './images/CarreraS.png'
import CarreraCabS from './images/CarreraCabS.png'
import Carrera4S from './images/Carrera4S.png'
import CarreraCab4S from './images/CarreraCab4S.png'
import Targa4 from './images/Targa4.png'
import Targa4S from './images/Targa4S.png'
import CarreraGTS from './images/CarreraGTS.png'
import CarreraCabGTS from './images/CarreraCabGTS.png'
import Turbo from './images/Turbo.png'
import TurboS from './images/TurboS.png'
import TurboCab from './images/TurboCab.png'
import TurboCabS from './images/TurboCabS.png'
import GT3 from './images/GT3.png'
import GT3RS from './images/GT3RS.png'
import Classic from './images/Classic.png'


const Models = [
{
    name: '911 Carrera',
    img: Carrera,    
    price: 106100,
    id: uniqueID(),
},
{
    name: '911 Carrera Cabriolet',
    img: CarreraCab,    
    price: 118900,
    id: uniqueID(),
},
{
    name: '911 Carrera 4',
    img: Carrera4,    
    price: 113400,
    id: uniqueID(),
},
{
    name: '911 Carrera 4 Cabriolet',
    img: CarreraCab4,    
    price: 126200,
    id: uniqueID(),
    },
{
    name: '911 Carrera S',
    img: CarreraS,    
    price: 123000,
    id: uniqueID(),
    },
{
    name: '911 Carrera S Cabriolet',
    img: CarreraCabS,    
    price: 135800,
    id: uniqueID(),
},
{
    name: '911 Carrera 4S',
    img: Carrera4S,    
    price: 130300,
    id: uniqueID(),
},
{
    name: '911 Carrera 4S Cabriolet',
    img: CarreraCab4S,    
    price: 143100,
    id: uniqueID(),
    },
{
    name: '911 Targa 4',
    img: Targa4,    
    price: 126200,
    id: uniqueID(),
    },
{
    name: '911 Targa 4S',
    img: Targa4S,    
    price: 143100,
    id: uniqueID(),
    },
{
    name: '911 Carrera GTS',
    img: CarreraGTS,    
    price: 142600,
    id: uniqueID(),
    },
{
    name: '911 Carrera GTS Cabriolet',
    img: CarreraCabGTS,    
    price: 155400,
    id: uniqueID(),
    },
{
    name: '911 Turbo',
    img: Turbo,    
    price: 182900,
    id: uniqueID(),
    },
{
    name: '911 Turbo Cabriolet',
    img: TurboCab,    
    price: 195700,
    id: uniqueID(),
    },
{
    name: '911 Turbo S',
    img: TurboS,    
    price: 216100,
    id: uniqueID(),
    },
{
    name: '911 Turbo S Cabriolet',
    img: TurboCabS,    
    price: 228900,
    id: uniqueID(),
},
{
    name: '911 GT3',
    img: GT3,    
    price: 169700,
    id: uniqueID(),
    },
{
    name: '911 GT3 RS',
    img: GT3RS,    
    price: 223800,
    id: uniqueID(),
    },
{
    name: '911 Sport Classic',
    img: Classic,    
    price: 272300,
    id: uniqueID(),
},
]



const Lot911 = ({ addItem }) => {
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

export default Lot911