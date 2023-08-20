import React from 'react'
import {FaGithub} from 'react-icons/fa'
import {FaTelegram} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://github.com/Begzod2004" target='_blank' rel='noreferrer'><FaGithub /></a>
        <a href="https://t.me/sql_me" target='_blank' rel='noreferrer'><FaTelegram /></a>
        <a href="https://www.instagram.com/begzoddev/" target='_blank' rel='noreferrer'><BsInstagram /></a>
    </div>  
  )
}

export default HeaderSocials