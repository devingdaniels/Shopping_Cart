import React from 'react'
import './App.css'

import Lot718  from './lot718/Lot718'
import Lot911 from './lot911/Lot911'
import LotTaycan from './lotTaycan/Taycan'

const App = () => {
  return (    
    <div className='gridContainer'>      
      {Lot718.map(car => { 
        return (
              <div key={car.id}>
            <img src={car.img} alt="" />
            <h3>{ car.name }</h3>
            <p>{ car.price }</p>
              </div>
        )          
      })}      
      {Lot911.map(car => { 
        return (
              <div key={car.id}>
            <img src={car.img} alt="" />
            <h3>{ car.name }</h3>
            <p>{ car.price }</p>
              </div>
        )          
      })}  
      {LotTaycan.map(car => { 
        return (
              <div key={car.id}>
            <img src={car.img} alt="" />
            <h3>{ car.name }</h3>
            <p>{ car.price }</p>
              </div>
        )          
      })}   
      </div>
  )
}

export default App
