import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl flex flex-col justify-between border border-[#915eff]/10 shadow-[0_0_20px_rgba(0,0,0,0.3)] min-h-[500px]"
      >
        <div>
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <p className="text-secondary text-[15.5px] mt-6 leading-relaxed max-w-md">
            I am always open to discussing new software engineering roles, potential collaborations, or backend/AI agent projects. Feel free to contact me directly!
          </p>
        </div>

        <div className="flex flex-col gap-5 mt-10 mb-6">
          {/* WhatsApp Button */}
          <button
            onClick={() => window.open('https://wa.me/923090852727', '_blank')}
            className="w-full bg-[#090d22] text-white py-4 px-6 rounded-xl font-extrabold border-2 border-[#915eff]/30 hover:scale-[1.02] hover:bg-[#915eff]/10 hover:border-[#915eff] transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.25)] flex items-center justify-center gap-3 cursor-pointer select-none"
          >
            <svg className="w-6 h-6 fill-current text-white shrink-0" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.729-1.447L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.863-9.73.001-2.597-1.006-5.039-2.835-6.87C16.815 2.169 14.39 1.163 11.83 1.163 6.388 1.163 1.96 5.534 1.957 10.9c-.002 1.77.475 3.498 1.385 5.01L2.33 21.75l6.317-1.662zM17.86 14.65c-.32-.16-1.89-.93-2.18-1.04-.3-.1-.51-.16-.73.16-.22.31-.85 1.07-1.04 1.28-.19.22-.38.25-.7.09-.32-.16-1.36-.5-2.59-1.6-1-.89-1.67-1.99-1.87-2.33-.2-.33-.02-.51.14-.67.15-.14.32-.34.49-.5.17-.17.22-.29.33-.48.11-.19.06-.36-.03-.52-.09-.16-.73-1.76-1-2.42-.26-.64-.52-.55-.72-.56-.19-.01-.41-.01-.63-.01-.22 0-.58.08-.88.4-.3.32-1.15 1.13-1.15 2.76s1.19 3.2 1.36 3.43c.17.22 2.33 3.56 5.65 4.99.79.34 1.4.54 1.88.7.8.25 1.52.21 2.09.13.64-.09 1.89-.77 2.15-1.47.26-.7.26-1.3.19-1.42-.07-.13-.26-.21-.58-.37z"/>
            </svg>
            <span>Message on WhatsApp</span>
          </button>

          {/* Call Button */}
          <button
            onClick={() => window.open('tel:+923090852727')}
            className="w-full bg-[#915eff] text-white py-4 px-6 rounded-xl font-extrabold hover:scale-[1.02] hover:bg-[#804dee] transition-all duration-300 shadow-[0_0_15px_rgba(145,94,255,0.3)] flex items-center justify-center gap-3 cursor-pointer select-none"
          >
            <svg className="w-5 h-5 fill-current text-white shrink-0" viewBox="0 0 24 24">
              <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.2a1 1 0 0 0 .25-1.02A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"/>
            </svg>
            <span>Call Me Directly</span>
          </button>

          {/* Email Button */}
          <button
            onClick={() => window.open('mailto:haadmajeedch27@gmail.com')}
            className="w-full bg-transparent text-white border-2 border-[#915eff] py-3.5 px-6 rounded-xl font-bold hover:scale-[1.02] hover:bg-[#915eff]/10 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer select-none"
          >
            <svg className="w-5 h-5 fill-current text-white shrink-0" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            <span>Send an Email</span>
          </button>
        </div>

        <div className="border-t border-secondary/15 pt-4 text-center">
          <span className="text-secondary text-[13px] font-mono">
            Islamabad, Pakistan
          </span>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");