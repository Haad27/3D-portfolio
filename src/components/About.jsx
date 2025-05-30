import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  // Fallback for mobile touch devices
  const isMobile = window.innerWidth <= 768;

  return (
    <motion.div
      variants={!isMobile ? fadeIn("right", "spring", index * 0.5, 0.75) : {}}
      className="w-full xs:min-w-[250px]"
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
          disable: isMobile // Disable tilt on mobile
        }}
        className="green-pink-gradient p-[1px] rounded-[20px] shadow-card w-full"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-4 xs:px-12 min-h-[280px] flex flex-col justify-evenly items-center">
          <img
            src={icon}
            alt={title}
            className="w-16 h-16 object-contain"
            loading="lazy" // Better mobile performance
          />
          <h3 className="text-white text-[18px] xs:text-[20px] font-bold text-center">
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
      <motion.div variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="overflow-visible"
      >
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      
        className="mt-4 text-secondary text-[16px] xs:text-[17px] max-w-3xl leading-[28px] xs:leading-[30px]"
      >
       I'm a dedicated software developer who is leanring  JavaScript, React, Node.js, and
        the MERN stack, with growing expertise in Three.js and Express.js. A passionate 
        problem-solver and quick learner, I thrive on developing practical solutions to 
        real-world challenges through clean, efficient code. Committed to continuous growth,
        I combine technical skills with creative thinking to build impactful applications,
        constantly expanding my knowledge through hands-on projects and persistent
        effort to create meaningful technological solutions.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-4 xs:gap-10 justify-center px-4">
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