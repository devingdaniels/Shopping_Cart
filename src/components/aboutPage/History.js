import React from 'react'

import PorscheShop from './porsche_in_shop.jpg'

const History = () => {
    return (
      <>
        <h2>Our Story</h2>
        <div className='history-wrapper'>
            <div className='history-text'>
                <h3>History</h3>                
                    <br />
                    <p>
                        During World War II, Volkswagen production turned to the military version of the Volkswagen Beetle, the Kübelwagen, 52,000 produced, and Schwimmwagen, 15,584 produced. Porsche produced several designs for heavy tanks during the war, losing out to Henschel & Son in both contracts that ultimately led to the Tiger I and the Tiger II. However, not all this work was wasted, as the chassis Porsche designed for the Tiger I was used as the base for the Elefant tank destroyer. Porsche also developed the Maus super-heavy tank in the closing stages of the war, producing two prototypes. Ferdinand Porsche's biographer, Fabian Müller, wrote that Porsche had thousands of people forcibly brought to work at their factories during the war. The workers wore the letter "P" on their clothing at all times. It stood not for "Porsche", but for "Poland".
                    </p>
            </div>            
            <img src={ PorscheShop} alt="" className='history-image'/>            
        </div>
    </>
  )
}

export default History