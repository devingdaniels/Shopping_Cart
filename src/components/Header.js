import React from 'react'
import {Link} from 'react-router-dom'
// Icons
import { FiShoppingCart } from 'react-icons/fi'
import BadgeIcon from './images/badgeIcon.jpg'

function Header({ total }) {
  return (
    <header>
      <div className='badgeContainer'>      
        <img src={BadgeIcon} alt="" className='porscheBadge' />
        <Link to='/'><h1>Porsche</h1></Link>
      </div>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/shop/718">Shop</Link>
        <div>
          <Link to='/cart'><FiShoppingCart className='cartIcon' /></Link>
        </div>
        <span className='header-item-count'>{total}</span>
      </nav>
    </header>
    )
}

export default Header