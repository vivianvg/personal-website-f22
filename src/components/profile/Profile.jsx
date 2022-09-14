import React from 'react'
import { motion } from "framer-motion"
import "./profile.css";

import profileImage from '../../assets/profile/about-image.png';
import linkedin from '../../assets/icons/linkedin.svg';
import resume from '../../assets/icons/file-text.svg';


const Profile = () => {
  return (
    <div class="profile">
      <div class="profile-container">
      <motion.div
        initial={{ opacity: 0}}
        animate={{opacity: 1 }}
        transition={{duration: 1.5}}
        viewport={{margin: "-10% 0% -35% 0%"}}
        id="profile-bio">
        <p>
          Nice to meet you, my name is Vivian! <br/><br/>

          I am a second year <a target="_blank" href="https://uwaterloo.ca/future-students/programs/computing-and-financial-management">Computing Financial Management</a> student at the University of Waterloo.
          <br /><br />
          With background and passion for finance and computer science, I hope to explore opportunities that develop my expertise in both fields.
          <br /><br /><br/>
          <a class="button" href="https://www.linkedin.com/in/vivianvg/"  target="_blank">LinkedIn</a>


        </p>
      </motion.div>

      </div>






      
    </div >
  )
}

export default Profile