import React from 'react'
import './header.css'
import CTA from './CTA'
import myPhoto from '../../assets/my-img.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header id='header'>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Suroj Sultonov</h1>
        <h5 className='text-light'>Frontend Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="my__photo">
          <img className="my_img" src={myPhoto} alt="my_img" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header