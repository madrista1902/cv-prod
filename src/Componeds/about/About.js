import React from 'react'
import  './About.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscNewFolder} from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className="contanaire about_container">
        <div className="about-me-container">
         <img src= {ME} alt='about_me' className='about_me-imager'/>
        </div>
        <div className="about_content">
        <div className="about_cards">
            <article className="about_card">
             <FaAward className='about_icon' />
              <h5>Experience</h5>
              <small>developpent a lone</small>
            </article>
          </div>
          <div className="about_cards">
            <article className="about_card">
             <FiUsers className='about_icon' />
              <h5>Clients</h5>
              <small>50+ Wordwide</small>
            </article>
          </div><div className="about_cards">
            <article className="about_card">
             <VscNewFolder className='about_icon' />
              <h5>Projects</h5>
              <small>20+ Complited Projects</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure recusandae quis provident? Enim, perferendis blanditiis. Eveniet, quisquam ipsam soluta minima nostrum laboriosam unde fugit cum, nobis vel esse consequatur dignissimos nihil quas accusantium inventore? Reprehenderit obcaecati officia modi unde facere.</p>
          <a href='#Conact' className='btn btn-primary'>Lets Talk</a>
        </div>
          
      </div>
    </section>
  )
}

export default About
