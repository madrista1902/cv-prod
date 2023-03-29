import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithubSquare} from 'react-icons/fa'
import {BsDiscord} from 'react-icons/bs'
const HeaderSocial = () => {
  return (
    <div className='header_social'>
    <a href="https://www.linkedin.com/in/tunisiano-argoubi-326254211/" target=""><BsLinkedin/>Linkedin</a>
    <a href="https://github.com/madrista1902" target=""><FaGithubSquare/>Github</a>
    <a href="https://discord.com/channels/madrista1902#0725" target=""><BsDiscord/>Discord</a>
      
    </div>
  )
}

export default HeaderSocial ;
