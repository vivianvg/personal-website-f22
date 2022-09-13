import React from 'react'
import "./projects.css"
import { motion } from "framer-motion"

import projectElements from "./projects_data.js";

const Projects = () => {

    return (
    <div class='projects'>
        {
          projectElements.map((element) => {

            return(
            <motion.div 
              initial={{ opacity: 0}}
              whileInView={{opacity: 1}}
              viewport={{margin: "-10% 0% -35% 0%"}}
              class="project-element" id={element.id}>

              <p class="tech-tag">{element.tag1}{element.tag2}{element.tag3}</p>
              <p class="project-title">{element.title}</p>
              <p class="date">{element.date}</p>
              <p>{element.description}</p>

            </motion.div>
            );
          }) 
        }
    </div>
  );
}

export default Projects