import React from 'react'
import { motion } from "framer-motion"
import "./nav.css";


const Nav = () => {
  return (

    <div class="navigation">


      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        class="middle-block">
        <p class="title">VIVIAN GUO</p>
        <div
          id="navigation-bar">
          <a href="">about</a>&nbsp;•&nbsp;
          <a href="#experiences">experiences</a>&nbsp;•&nbsp;
          <a href="#projects">projects</a>
        </div>
      </motion.div>

      <div class="right-block"></div>



    </div >
  )
}

export default Nav