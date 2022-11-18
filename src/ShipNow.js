import React from 'react'
import Confetti from 'react-confetti'

function CompletePurchase(){  

    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
    return (
    <>
        <Confetti
        width={vw}
        height={vh}
            />
        <h2 className='order-confirmed'>Order Received! Thank you for your purchase! </h2>
    </>
  )
  
}

export default CompletePurchase