import React from 'react'


// Images
import Classic from './screenshot.png'

const Section2HP = () => {
  return (    
    <div className='home-section-2-container'>
       <h2>Featured</h2>
          <div className='feature-container'>
              <div className='feature-item'>
                  <img src={Classic} alt="" className='sectionTwoImage' />
                  
              </div>                                  
            </div>
    </div>  
  )
}

export default Section2HP