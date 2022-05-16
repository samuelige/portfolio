import React from 'react'
import './App.scss';
import { About, Footer, Header, Skill, Testimonial, Work } from './container';
import { Navbar } from './components';


const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Skill />
      <Work />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default App
