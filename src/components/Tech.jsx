import React, { useState, useEffect, useRef } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";

// Lazy wrapper to prevent WebGL context overflow
const LazyBall = ({ icon, name }) => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.05, rootMargin: "100px" } // Load slightly before it enters screen
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className="w-28 h-28 flex items-center justify-center relative">
      {inView ? (
        <BallCanvas icon={icon} />
      ) : (
        // Fallback placeholder: a glowing circle with the tech icon
        <div className="w-24 h-24 rounded-full bg-tertiary flex items-center justify-center border-2 border-secondary/20 shadow-[0_0_15px_rgba(145,94,255,0.15)] hover:border-[#915eff]/50 transition-colors duration-300">
          <img src={icon} alt={name} className="w-12 h-12 object-contain select-none" />
        </div>
      )}
    </div>
  );
};

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Technologies I Know</p>
        <h2 className={styles.sectionHeadText}>Skills</h2>
      </motion.div>
      
      <div className="flex flex-wrap justify-center gap-10 mt-10">
        {technologies.map((technology) => (
          <div className="flex flex-col items-center" key={technology.name}>
            <LazyBall icon={technology.icon} name={technology.name} />
            <p className="text-[#dfd9ff] text-center mt-2 text-xs sm:text-sm font-medium tracking-wider select-none">
              {technology.name}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
