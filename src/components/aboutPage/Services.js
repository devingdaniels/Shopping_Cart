import React from 'react'

import { GiAutoRepair, GiDeliveryDrone } from 'react-icons/gi'
import { FaApplePay } from 'react-icons/fa'


const Services = () => {
  return (
      <>
          <h2>Services</h2>
          <div className='service-wrapper'>
              <div className='service-item'>
                  <GiAutoRepair size={ 60 } />
                  <h4>Service</h4>
                  <p>From servicing and maintenance to expert repair, we take complete care of your Porsche vehicle. And through consultation with your Service Advisor in the Direct Dialog Bay, we take care of your concerns too. </p>
              </div>
              <div className='service-item'>
                  <FaApplePay size={ 60 }/>
                  <h4>Payments</h4>
                  <p>Link your Porsche Financial Services account within My Porsche App, where you can access your billing statements 24/7 from anywhere at anytime, make a one-time payment, or enroll in Auto Pay. </p>
              </div>
              <div className='service-item'>
                  <GiDeliveryDrone size={60} />
                  <h4>Deliveries</h4>
                  <p>The Porsche Experience Center Delivery Program provides customers with a unique opportunity to immerse all of their senses in everything Porsche.</p>
              </div>
          </div>
      </>
  )
}

export default Services