import React from 'react'
import './App.css'

import {Lot718 } from './lot718/Lot718'

const App = () => {
  return (    
    <div>      
      {Lot718.map(car => { 
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
