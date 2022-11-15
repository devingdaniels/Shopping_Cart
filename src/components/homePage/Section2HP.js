import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import Fifty from './images/fifty.png'
import GT3RS from './images/GT3RS.png'
import Classic from './images/classic.png'

const Section2HP = () => {
    return (
        <div className='carousel'>
            <Carousel>
                <div>
                <img src={ GT3RS} alt='' className='carouselImage'/>
            <p className="legend">911 GT3 RS<p>From $186,200</p>
            <i>New</i></p>            
                </div>
                <div>
                    <img src={ Fifty } alt='' />
                    <p className="legend">911 Edition 50 Years Porsche Design <p>From $186,200</p></p>
                </div>
                <div>
                    <img src={Classic } alt =''/>
                    <p className="legend">911 Sport Classic <p>From $272,300</p></p>
                </div>
            </Carousel>
        </div>
        );
}

export default Section2HP