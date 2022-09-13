import React from 'react'
import "./timeline.css"
import { motion } from "framer-motion"

import timelineElements from "./timeline_data.js";
import {VerticalTimeline, 
        VerticalTimelineElement,
      } from "react-vertical-timeline-component";
import WorkIcon from "../../assets/miscellaneous/briefcase.svg"
import EcIcon from "../../assets/miscellaneous/heart.svg"

const Timeline = () => {

    return (
    <div class='timeline'>
        {
          timelineElements.map((element) => {
            let isWorkIcon = element.icon === "Work";

            return(
            <motion.div 
              initial={{ opacity: 0}}
              whileInView={{opacity: 1}}
              viewport={{margin: "-10% 0% -35% 0%"}}
              class="timeline-element" id={element.key}>

              <div class="timeline-element-content">
                <p class="vertical-timeline-element-title"><b>{element.org}</b> • {element.title}</p>
                <p class="date">{element.date}</p>
                <p class= "details">{element.detail1}</p>
              </div>

            </motion.div>
            );
          }) 
        }
      </div>
      );
}

  export default Timeline
