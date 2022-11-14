import React from 'react'

import Header from '../components/Header'

import Porsche from '../../src/porsche_main.jpg'

const Home = () => {
  return (
    <>
      <div className='home-section-1-container'>
        <div className='home-section-1-container-item'>
          <img src={Porsche} alt="" className='home-section-1-image' />
          <div className='home-section-1-text'>
            <q>If one does not fail at times, then one has not challenged himself.</q>
            <cite>~ Ferdinand Porsche</cite>
          </div>          
        </div>
        <div className='home-section-1-container-item'>          
          <div className='home-section-1-text'>
            <q>If one does not fail at times, then one has not challenged himself.</q>
            <cite>~ Ferdinand Porsche</cite>
          </div>
          <img src={Porsche} alt="" className='home-section-1-image' />
        </div>      
      </div>
    </>
  )
}

export default Home
