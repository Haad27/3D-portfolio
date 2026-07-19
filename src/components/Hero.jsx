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
          <h1 className={`${styles.heroHeadText} text-white relative z-10`}>
            Hi, I'm <span className='text-[#915eff]'>Haad</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am student in GIKI <br className='sm:block hidden' />
            this is start of my third year in software engineering
          </p>
          <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-6 relative z-30 w-full max-w-[480px]">
            <button
              onClick={() => window.open('/Haad_Majeed_Resume_2026.pdf', '_blank')}
              style={{ backgroundColor: '#915eff' }}
              className="text-white py-2.5 px-2 sm:py-3 sm:px-6 rounded-xl font-bold text-[10.5px] xs:text-[12px] sm:text-[14px] hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(145,94,255,0.4)] flex items-center justify-center gap-1 sm:gap-2 cursor-pointer select-none"
            >
              <span>View CV</span>
              <svg className="w-3.5 h-3.5 sm:w-5 sm:h-5 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
              </svg>
            </button>
            <button
              onClick={() => window.open('https://www.linkedin.com/in/haad-majeed/', '_blank')}
              style={{ borderColor: '#915eff' }}
              className="bg-transparent text-white border-2 py-2.5 px-2 sm:py-3 sm:px-6 rounded-xl font-bold text-[10.5px] xs:text-[12px] sm:text-[14px] hover:scale-105 hover:bg-[#915eff]/10 transition-all duration-300 flex items-center justify-center gap-1 sm:gap-2 cursor-pointer select-none"
            >
              <span>LinkedIn</span>
              <svg className="w-3.5 h-3.5 sm:w-5 sm:h-5 fill-current text-[#0a66c2] shrink-0" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.8v8.37h2.8v-4.87c0-.26.05-.52.13-.7a.91.91 0 0 1 .82-.6c.58 0 .82.53.82 1.3v4.87h2.81M7.5 7.66a1.66 1.66 0 1 0 0 3.32 1.66 1.66 0 0 0 0-3.32M9 18.5V10.1H6v8.4h3z"/>
              </svg>
            </button>
            <button
              onClick={() => window.open('https://github.com/Haad27', '_blank')}
              style={{ borderColor: '#915eff' }}
              className="bg-transparent text-white border-2 py-2.5 px-2 sm:py-3 sm:px-6 rounded-xl font-bold text-[10.5px] xs:text-[12px] sm:text-[14px] hover:scale-105 hover:bg-[#915eff]/10 transition-all duration-300 flex items-center justify-center gap-1 sm:gap-2 cursor-pointer select-none"
            >
              <span>GitHub</span>
              <svg className="w-3.5 h-3.5 sm:w-5 sm:h-5 fill-current text-white shrink-0" viewBox="0 0 24 24">
                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
              </svg>
            </button>
          </div>
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

      {/* Animated Drag-to-Rotate indicator */}
      {showCanvas && (
        <div className="absolute bottom-[24%] left-[66%] sm:left-[66%] xs:left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 pointer-events-none select-none z-20">
          <motion.div
            animate={{ x: [-10, 10, -10] }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-white opacity-80"
          >
            <svg className="w-7 h-7 fill-none stroke-current stroke-[1.5]" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0-.83-.67-1.5-1.5-1.5S9 10.17 9 11M12 11c0-.83.67-1.5 1.5-1.5S15 10.17 15 11M12 11V7c0-.83-.67-1.5-1.5-1.5S9 6.17 9 7M15 11v-1c0-.83-.67-1.5-1.5-1.5S12 9.17 12 10M9 11v6.5c0 2.48 2.02 4.5 4.5 4.5s4.5-2.02 4.5-4.5V11" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 8L4 11l3 3M17 8l3 3-3 3" />
            </svg>
          </motion.div>
          <span className="text-[#915eff] text-[9.5px] font-bold tracking-widest uppercase">
            Drag to rotate PC
          </span>
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
