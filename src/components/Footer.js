import React from 'react'
import { Link } from 'react-router-dom'

import { BsLinkedin, BsGithub} from 'react-icons/bs'

function Footer() {  
  return (
    <footer>              
      <div className='joinOurMailingList'>
        <h3>Join our mailing list!</h3>
          <input type="email" placeholder='Email' />
          <button className='subscribe'>Subscribe</button>
        </div>
        <div>
        <h3>Porsche</h3>
        <div className='footer-links'>
          <Link to='/about'>About</Link>
          <Link to='/about'>Donors</Link>
          <Link to='/'>FAQ</Link>
        </div>
      </div>
      <div>
        <h3>Shop</h3>
        <div className='footer-links'>
          <Link to='/shop'>718</Link>
          <Link to='/shop'>911</Link>
          <Link to='/shop'>Taycan</Link>
        </div>
      </div>
      <div>
        <h3>Contact</h3>
        <div className='git-linkedin-container'>
          <a href="https://github.com/devingdaniels" rel="noopener noreferrer" target='_blank'><BsGithub size={20}/></a>
          <a href="https://www.linkedin.com/in/devingdaniels" rel="noopener noreferrer" target='_blank'><BsLinkedin size={20} /></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer