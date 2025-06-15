import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  const isMobile = window.innerWidth <= 768;

  return (
    <motion.div
      variants={!isMobile ? fadeIn("right", "spring", index * 0.5, 0.75) : {}}
      className="w-[300px] h-[350px]" // Fixed dimensions
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
          disable: isMobile
        }}
        className="green-pink-gradient p-[1px] rounded-[20px] shadow-card w-full h-full"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-4 h-full flex flex-col justify-evenly items-center">
          <img
            src={icon}
            alt={title}
            className="w-16 h-16 object-contain"
            loading="lazy"
          />
          <h3 className="text-white text-[20px] font-bold text-center">
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
        <h2 className={styles.sectionHeadText}>Education & Extracurricular</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="mt-4 text-secondary text-[16px] xs:text-[17px] max-w-3xl leading-[28px] xs:leading-[30px]"
      >
        Below is a summary of my education, honors, and achievements in extracurricular activities completed so far."
      </motion.p>

      <div className="mt-20 flex flex-wrap justify-center gap-6 px-4">
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