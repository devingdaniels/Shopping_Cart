import React from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'


// Porsche Images
import Lot718  from './lot718/Lot718'
import Lot911 from './lot911/Lot911'
import LotTaycan from './lotTaycan/Taycan'

// Components
import Header from './components/Header'
import Navigation from './components/Nav'
import Footer from './components/Footer'

const App = () => {
  return (    
    <div >
      <Header></Header>
      <Navigation></Navigation>
      <Footer></Footer>
    </div>
  )
}

export default App
