import React from 'react'

import { useLayoutEffect } from 'react'


// Components 
import History from '../components/aboutPage/History'
import Services from '../components/aboutPage/Services'
import FAQ from '../components/aboutPage/FAQ'


const About = () => {

 useLayoutEffect(() => {
     window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
 });
  
  return (
    <div className='about-page-container'>
      <History />
      <Services />
      <FAQ/>
    </div>
  )
}

export default About
