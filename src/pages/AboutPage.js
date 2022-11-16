import React from 'react'


// Components 
import History from '../components/aboutPage/History'
import Services from '../components/aboutPage/Services'
import FAQ from '../components/aboutPage/FAQ'


const About = () => {
  return (
    <div className='about-page-container'>
      <History />
      <Services />
      <FAQ/>
    </div>
  )
}

export default About
