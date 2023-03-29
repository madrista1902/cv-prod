import React from 'react'
import  './Header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocial'
const Header = () => {
  return (
   <header>
    <div className="container header_container">
      <h5>Hello I'm</h5>
      <h1>Riadh Argoubi</h1>
      <h5 className="text-light">FullStack Developper</h5>
      <CTA/>
      <HeaderSocial/>
       <div className='mee' >
       <img src= {ME} alt='about_me' className='mee-imag'/>
       </div>
    </div>
     
     <a href="#Contact" className='scroll_down'>Scroll Down</a>
   </header>
  )
}

export default Header
