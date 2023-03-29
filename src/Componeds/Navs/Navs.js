import React from 'react'
import './Navs.css'
import{AiOutlineHome} from 'react-icons/ai'
import{CiUser} from 'react-icons/ci'
import{BsBookmarks} from 'react-icons/bs'
import{GrBusinessService} from 'react-icons/gr'
import{TiContacts} from 'react-icons/ti'
import {useState} from 'react'
const Navs = () => {
  const [activeNav, setActiveNav]=useState('#')
  return (
    <nav>
      <a href='#home'
      className={activeNav==='#'? 'active' : ''}><AiOutlineHome/></a>
      <a href='#About' onClick={()=> setActiveNav('#About') }className={activeNav==='#About'? 'active' : ''}><CiUser/></a>
      <a href='#Experience' onClick={()=> setActiveNav('#Experience') }className={activeNav==='#Experience'? 'active' : ''}><BsBookmarks/></a>
      <a href='#Services' onClick={()=> setActiveNav('#Services') }className={activeNav==='#Services'? 'active' : ''}><GrBusinessService/></a>
      <a href='#Contact' onClick={()=> setActiveNav('#ontact') }className={activeNav==='#Contact'? 'active' : ''}><TiContacts/></a>
      
    </nav>
  )
}

export default Navs

