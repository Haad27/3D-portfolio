import {Tilt} from "react-tilt";
import { motion } from "framer-motion";
import {github} from "../assets";
import {projects} from "../constants"
import { styles } from "../styles";

import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
const Works = () => {
  return (
    // as we are wrapping this in sectionwrapper so w ehave to use a empty <> </> a empty fragment
   <>
       <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
   
   </>
  )
}

export default SectionWrapper(Works, "");