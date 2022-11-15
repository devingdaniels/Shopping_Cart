import React from 'react'
import {Link} from 'react-router-dom'
// Icons
import { FiShoppingCart } from 'react-icons/fi'
import PorscheBadge from '../pages/PorscheBadge.jpg'

function Header () {
  return (
    <header>
      <div className='badgeContainer'>      
        <img src={PorscheBadge} alt="" className='porscheBadge' />
        <Link to='/'><h1>Porsche</h1></Link>
      </div>
      <nav >        
        <Link to="/about">About</Link>
        <Link to="/shop/718">Shop</Link>
        <div><Link to='/cart'><FiShoppingCart className='cartIcon'/></Link></div>        
      </nav>
    </header>
    )
}

export default Header