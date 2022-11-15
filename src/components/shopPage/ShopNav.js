import React from 'react'
import { Link, Outlet } from 'react-router-dom'


const ShopNav = () => {
  return (
    <div>
      <Link to='718'>718</Link>
      <Link to='911'>911</Link>
      <Link to='taycan'>Taycan</Link>
      <Link to='panamera'>Panamera</Link>
      <Link to='macan'>Macan</Link>
      <Link to='cayenne'>Cayenne</Link>
      <Outlet/>
    </div>
  )
}

export default ShopNav
