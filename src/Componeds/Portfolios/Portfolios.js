import React from 'react'
import  './Portfolios.css'
import IMG0 from './../../assets/portfolio1.jpg'
import IMG1 from './../../assets/portfolio2.jpg'
import IMG2 from './../../assets/portfolio3.jpg'
import IMG3 from './../../assets/portfolio4.jpg'
import IMG4 from './../../assets/portfolio5.png'
import IMG5 from './../../assets/portfolio6.jpg'
const Portfolios = () => {
  return (
    <section id='portfolios'>
      <div className='container portfolios_containe'>
        <article className='portfolios_item'>
          <div className="portfoilios_item-image">
            <img src={IMG0} alt="" />
            </div>
            <h3>This is a Portfolios items title</h3>
            <div className='portfolios_item-cta'>
            <a href="http://github.com" className='btn'>Github</a>
            <a href="https://dribbble.com/search/alien-pixels"  className='btn btn-primary' >Live Demos</a>
            </div>
        </article>
        <article className='portfolios_item'>
          <div className="portfoilios_item-image">
            <img src={IMG1} alt="" />
            </div>
            <h3>This is a Portfolios items title</h3>
            <div className='portfolios_item-cta'>
            <a href="http://github.com" className='btn'>Github</a>
            <a href="https://dribbble.com/search/alien-pixels"  className='btn btn-primary' >Live Demos</a>
            </div>
        </article>
        <article className='portfolios_item'>
          <div className="portfoilios_item-image">
           
            <img src={IMG2} alt="" />
            </div>
            <h3>This is a Portfolios items title</h3>
            <div className='portfolios_item-cta'>
            <a href="http://github.com" className='btn'>Github</a>
            <a href="https://dribbble.com/search/alien-pixels"  className='btn btn-primary' >Live Demos</a>
            </div>
        </article>
        <article className='portfolios_item'>
          <div className="portfoilios_item-image">
           
            <img src={IMG3} alt="" />
            </div>
            <h3>This is a Portfolios items title</h3>
            <div className='portfolios_item-cta'>
            <a href="http://github.com" className='btn'>Github</a>
            <a href="https://dribbble.com/search/alien-pixels"  className='btn btn-primary' >Live Demos</a>
            </div>
        </article>
        <article className='portfolios_item'>
          <div className="portfoilios_item-image">
           
            <img src={IMG4} alt="" />
            </div>
            <h3>This is a Portfolios items title</h3>
            <div className='portfolios_item-cta'>
            <a href="http://github.com" className='btn'>Github</a>
            <a href="https://dribbble.com/search/alien-pixels"  className='btn btn-primary' >Live Demos</a>
            </div>
        </article>
        <article className='portfolios_item'>
          <div className="portfoilios_item-image">
           
            <img src={IMG5} alt="" />
            </div>
            <h3>This is a Portfolios items title</h3>
            <a href="http://github.com" className='btn'>Github</a>
            <a href="https://dribbble.com/search/alien-pixels"  className='btn btn-primary' >Live Demos</a>
         
        </article>
      </div>

    </section>
  )
}

export default Portfolios
