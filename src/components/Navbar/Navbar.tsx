import React, { useState } from 'react'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'

import './Navbar.scss'


const Navbar: React.FC = () => {
  const navItems = ['home', 'about', 'work', 'skills', 'testimonial', 'contact'];

  const [toggle, setToogle] = useState(false)

  return (
    <nav className='app__navbar'>
      <motion.div
        whileInView={{ y: [20, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className='app__navbar-logo'
      >
        <h1><a href="#home">Sa'ge</a></h1>
      </motion.div>
      <ul className='app__navbar-links'>
        {
          navItems.map((item, _index) => (
            <li className='app__flex p-text' key={`link-${item}`}>
              <div/>
              <a href={`#${item}`}>{item}</a>
            </li>
          ))
        }
      </ul>

      <div className='app__navbar-menu'>
        <HiMenuAlt4 onClick={() => setToogle(true)}/>

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{duration: 0.85, ease: 'easeInOut'}}>
              <HiX onClick={() => setToogle(false)}/>
              <ul>
                {
                  navItems.map((item, _index) => (
                    <li key={item}>
                      <a href={`#${item}`} onClick={() => setToogle(false)}>{item}</a>
                    </li>
                  ))
                }
              </ul>
              
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar