import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  return (
    <motion.div
      variants={!isMobile ? fadeIn("right", "spring", index * 0.25, 0.75) : {}}
      className="w-full max-w-[280px] h-[280px] xs:h-[320px] sm:h-[350px]"
    >
      <Tilt
        options={{
          max: 25,
          scale: 1,
          speed: 450,
          disable: isMobile
        }}
        className="green-pink-gradient p-[1px] rounded-[20px] shadow-card w-full h-full"
      >
        <div className="bg-tertiary rounded-[20px] py-4 px-3 sm:py-5 sm:px-4 h-full flex flex-col justify-evenly items-center border border-white/5 hover:border-white/10 transition-colors">
          <img
            src={icon}
            alt={title}
            className="w-11 h-11 xs:w-16 xs:h-16 object-contain"
            loading="lazy"
          />
          <h3 className="text-white text-[12px] xs:text-[14px] sm:text-[17px] md:text-[18px] font-bold text-center leading-tight">
            {title}
          </h3>
        </div>
      </Tilt>
    </motion.div>
  );
};

const About = () => {
  return (
    <>
      <motion.div 
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="overflow-visible"
      >
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Education & Extracurricular.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="mt-4 text-secondary text-[16px] xs:text-[17px] max-w-3xl leading-[28px] xs:leading-[30px]"
      >
        Below is a summary of my education, honors, and achievements in extracurricular activities completed so far.
      </motion.p>

      {/* Responsive Grid container for all cards */}
      <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 w-full justify-items-center">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            {...service}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");