import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <motion.div
        whileInView={{ y: [20, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className='app__navbar-logo'
      >
        <h1><a href="#home">Sa'ge</a></h1>
      </motion.div>
      <ul className="app__navbar-links">
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        {toggle
          ? <HiX color="black" size={27} onClick={() => setToggle(false)} />
          : <HiMenuAlt4 color="black" size={27} onClick={() => setToggle(true)} />}
        {toggle && (
        <motion.div
          whileInView={{ x: [100, 0] }}
          transition={{ duration: 0.85, opacity: [0, 1], ease: 'easeOut' }}
         className="app__navbar-menu_container">


          <ul className="app__navbar-menu_container-links">
            {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
              <li key={item}>
                <a href={`#${item}`}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
          
        </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;