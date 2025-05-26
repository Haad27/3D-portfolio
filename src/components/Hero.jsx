import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'



const Hero = () => {
  return (
    // this section is the one that makes the background full over the screen
    // the div bellow this is use for making the purple dot and the gradient line fading out
    <section className="realtive w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
           <div className = "w-5 h-5 rounded-full bg-[#915eff]"></div>
           <div className='w-1 sm:h-80 h-40 violet-gradient'></div>
        </div>
        {/* this is reponsible for making the text all fancy and good */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#915eff]'>Haad</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>I am learning software development <br className='sm:block hidden'/>and web applications</p>
        </div>
      </div>


        <ComputersCanvas>

        </ComputersCanvas>
    </section>
  )
}

export default Hero