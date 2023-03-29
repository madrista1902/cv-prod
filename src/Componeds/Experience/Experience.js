import React from 'react'
import './Experience.css'
import{BsPatchCheck} from 'react-icons/bs'
const Experience = () => {
  return (
    <section id='experience'>
    <h5>What Skills I Have</h5>
    <h2>My Experience</h2>
    <div className='container experience_container' >
      <div className="experience_frontend">
        <h3>FrontEnd Developpement</h3>
        <div className="experience_content"></div>
        <artice className="experience_details">
        <BsPatchCheck className='experience_details-icon'/>
         <div>
           <h4>HTML</h4>
           <small className='text-light'>Experienced</small>
         </div>
        </artice>
        <artice className="experience_details">
        <BsPatchCheck className='experience_details-icon'/>
        <div>
           <h4>CSS</h4>
           <small className='text-light'>Intermidiate</small>
        </div>
        </artice>
        <artice className="experience_details">
        <BsPatchCheck className='experience_details-icon'/>
        <div>
          <h4>Java Script</h4>
          <small className='text-light'>Experienced</small>
        </div>
        </artice>
        <artice className="experience_details">
        <BsPatchCheck className='experience_details-icon'/>
        <div>
          <h4>Bootstrap</h4>
          <small className='text-light'>Experienced</small>
        </div>
        </artice>
        <artice className="experience_details">
        <BsPatchCheck className='experience_details-icon'/>
        <div>
           <h4>React</h4>
           <small className='text-light'>Experienced</small>
        </div>
        </artice>
        <artice className="experience_details">
        <BsPatchCheck className='experience_details-icon'/>
       <div>
            <h4>Angular</h4>
            <small className='text-light'>Medium</small>
       </div>
        </artice>

      </div>
        
      <div className="experience_backend">
      <h3>BackEnd Developpement</h3>
        <div className="experience_content">
        <artice className="experience_details">
        <BsPatchCheck className='experience_details-icon'/>
        <div>
          <h4>Node JS</h4>
          <small className='text-light'>Experienced</small>
        </div>
        </artice>
        <artice className="experience_details">
        <BsPatchCheck className='experience_details-icon'/>
        <div>
           <h4>Mongo DB</h4>
           <small className='text-light'>Experienced</small>
        </div>
        </artice>
        <artice className="experience_details">
        <BsPatchCheck className='experience_details-icon'/>
        <div>
         <h4>PHP</h4>
         <small className='text-light'>Experienced</small>
        </div>
        </artice>
        <artice className="experience_details">
        <BsPatchCheck className='experience_details-icon'/>
        <div>
          <h4>My SQL</h4>
          <small className='text-light'>Basic</small>
        </div>
        </artice>
        <artice className="experience_details">
        <BsPatchCheck className='experience_details-icon'/>
         <div>
            <h4>Python</h4>
            <small className='text-light'>Basic</small>
         </div>
        </artice>
        
        </div>
      </div>
    </div>

    </section>
  )
}

export default Experience;
