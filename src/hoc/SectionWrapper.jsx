import {motion} from "framer-motion"
import { styles } from "../styles"
import {staggerContainer} from "../utils/motion"

// the purpose of this is to bring the working or containers to the middle rather than
// far right of the screen and also to make the animation of the container
export const SectionWrapper = (Component , idname) => 
  function HOC() {
    return (
   <motion.section 
    variants = {staggerContainer()}
    initial = "hidden"
    whileInView="show"
    viewport = {{once:true , amount :0.25}}
    className = {`${styles.padding} max-w-7xl mx-auto relative z-0`} >
   
   <span className="hash-span" id= {idname}>
      &nbsp;
   </span>
   
    <Component />
  
    
   </motion.section>
  )

}
export default SectionWrapper 