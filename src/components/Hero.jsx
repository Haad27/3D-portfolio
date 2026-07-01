import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'

// Utility to check for WebGL support
// Utility to check for WebGL support more reliably
const isWebGLSupported = () => {
  try {
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    return !!gl;
  } catch (e) {
    return false;
  }
};

// Utility to detect low-performance Android devices
const isLowEndAndroid = () => {
  if (!/Android/i.test(navigator.userAgent)) return false;
  
  // Check for known problematic devices or low RAM
  const isLowRam = navigator.deviceMemory && navigator.deviceMemory < 2;
  const isOldCpu = /Android [1-6]/.test(navigator.userAgent);
  
  return isLowRam || isOldCpu;
};

const Hero = () => {
  const showCanvas = isWebGLSupported() && !isLowEndAndroid();


  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className="w-5 h-5 rounded-full bg-[#915eff]"></div>
          <div className='w-1 sm:h-80 h-40 violet-gradient'></div>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915eff]'>Haad</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am student in GIKI <br className='sm:block hidden' />
            this is start of my sophomore
          </p>
        </div>
      </div>

      {/* Conditionally render canvas or fallback */}
      {showCanvas ? (
        <ComputersCanvas />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center text-white text-lg bg-black/80">
          3D content is not supported on this device.
        </div>
      )}

      {/* Animated scroll-down indicator */}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#work'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
