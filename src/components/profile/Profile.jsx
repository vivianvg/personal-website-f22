import React from 'react'
import { motion } from "framer-motion"
import "./profile.css";

import profileImage from '../../assets/profile/website-profile-3.png';
import linkedin from '../../assets/icons/linkedin.svg';
import resume from '../../assets/icons/file-text.svg';


const Profile = () => {
  return (
    <div class="profile">
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
          Across my academics, career, and personal life, I am motivated by a desire to learn and to create.
          This motivation can take the form of <a target="_blank" href="https://github.com/vivianvg">lines of code</a>, <a target="_blank" href="https://www.behance.net/vivianvg">drawings</a>, and more.
          <br /><br /><br/>
          <a class="button">Resume</a>&nbsp;&nbsp;<a class="button">LinkedIn</a>

        </p>
      </motion.div>
          
      <motion.div 
        initial={{ opacity: 0}}
        animate={{opacity: 1 }}
        transition={{duration: 1.5}}
        viewport={{margin: "-100px 0px -80px 0px"}}
        id="profile-image">
        <img src={profileImage} id="profile-image-element"/>
      </motion.div>






      
    </div >
  )
}

export default Profile