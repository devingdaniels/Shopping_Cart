import React from 'react'
import {Link} from 'react-router-dom'
// Icons

function  Navigation() {
  return (
    <nav>        
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/about">About</Link>
    </nav>
  )
}

export default Navigation