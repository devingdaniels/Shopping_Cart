import React from 'react'
import { Link, Outlet } from 'react-router-dom'


const ShopNav = () => {
  return (
    <>
    <h2>Shop Models</h2>
    <div className='shop-grid-layout'>
      <div className='shop-navigation'>
      <h2>Models</h2>
      <Link to='718'>718</Link>
      <Link to='911'>911</Link>
      <Link to='taycan'>Taycan</Link>
      <Link to='panamera'>Panamera</Link>
      <Link to='macan'>Macan</Link>
      <Link to='cayenne'>Cayenne</Link>
      </div>
      <Outlet/>
      </div>
    </>
  )
}

export default ShopNav
