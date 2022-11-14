import React from 'react'

import Header from '../components/Header'

import Porsche from '../../src/porsche_main.jpg'

const Home = () => {
  return (
    <div className='homePage'>
      <Header></Header>
      <img src={Porsche} alt="" className='mainPorsche'/>
    </div>
  )
}

export default Home
