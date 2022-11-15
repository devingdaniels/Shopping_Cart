import React from 'react'

import Section1HP from '../components/homePage/Section1HP'
import Section2HP from '../components/homePage/Section2HP'
import Section3HP from '../components/homePage/Section3HP'

const HomePage = () => {
  return (
    <>
      <Section1HP />      
      <h2>Featured</h2>
      <Section2HP />      
      <Section3HP/>
    </>
  )
}

export default HomePage
