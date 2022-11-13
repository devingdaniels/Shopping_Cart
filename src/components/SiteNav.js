import React from 'react'
import {Link} from 'react-router-dom'
// Icons
import {FiShoppingCart} from 'react-icons/fi'

function  Navigation() {
  return (
    <nav>        
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/about">About</Link>
      <Link to='/cart'><FiShoppingCart/></Link>
    </nav>
  )
}

export default Navigation