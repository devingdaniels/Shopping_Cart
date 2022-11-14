import React from 'react'
import {Link} from 'react-router-dom'
// Icons
import {FiShoppingCart} from 'react-icons/fi'


function Header () {
  return (
    <header>
      <h1>Porsche</h1>
      <nav>        
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/about">About</Link>
        <Link to='/cart'><FiShoppingCart/></Link>
      </nav>
    </header>
    )
}

export default Header