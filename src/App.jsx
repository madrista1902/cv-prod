import React from 'react';
import Navs from './Componeds/Navs/Navs';
import  Header  from './Componeds/Header/Header';
import Experience from './Componeds/Experience/Experience';
import Services from './Componeds/Services/Services';
import About from './Componeds/about/About';
import Portfolios from './Componeds/Portfolios/Portfolios';
import Testimonials from './Componeds/Testimonials/Testimonials';
import Contact from './Componeds/Contact/Contact';
import Footer from './Componeds/Footer/Footer';
const App =()=> {
  return (
    <>
      <Header/>
      <Navs/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolios/>
      <Testimonials/>
      <Contact/>
      <Footer/>

    </>
  )
}

export default App
