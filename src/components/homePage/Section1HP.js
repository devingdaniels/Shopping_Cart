import React from 'react'
import {Link} from 'react-router-dom'

import Porsche1 from './images/porsche1.jpg'
import Porsche2 from './images/porsche2.jpg'

const Section1HP = () => {
  return (    
      <div className='home-section-1-container'>
        <div className='home-section-1-container-item'>
          <img src={Porsche1} alt="" className='home-section-1-image' />
          <div className='home-section-1-text'>
            <q>If one does not fail at times, then one has not challenged himself.</q>
            <cite>~ Ferdinand Porsche</cite>
          </div>          
        </div>
        <div className='home-section-1-container-item'>          
          <div className='home-section-1-text'>
            <h3>Drive Faster. Live Better.</h3>
            <Link to='/shop'><button>Shop Now!</button></Link> 
          </div>
          <img src={Porsche2} alt="" className='home-section-1-image' />
        </div>      
    </div>
  )
}

export default Section1HP