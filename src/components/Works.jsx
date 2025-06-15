import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { github } from "../assets";
import { projects } from "../constants";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, name, bool, description, tags, image2, image, source_code_link, source_code }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="w-full p-2 sm:w-1/2 lg:w-1/3" // Shows 1 on mobile, 2 on tablet, 3 on desktop
    >
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl w-full h-full"
      >
        <div className="relative w-full aspect-[16/9]">
          <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl" />
          <div className="absolute inset-0 flex justify-end m-3 gap-2 card-img_hover">
            {bool && (
              <div onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient rounded-full flex justify-center items-center cursor-pointer w-8 h-8 sm:w-10 sm:h-10">
                <img src={github} alt="github" className="w-1/2 h-1/2 object-contain" />
              </div>
            )}
            <div onClick={() => window.open(source_code, "_blank")}
              className="black-gradient rounded-full flex justify-center items-center cursor-pointer w-8 h-8 sm:w-10 sm:h-10">
              <img src={image2} alt="live" className="w-1/2 h-1/2 object-contain" />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[20px] sm:text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <div className="w-full px-4 mx-auto">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-3 max-w-3xl"
      >
        <p className="text-secondary text-xs sm:text-sm md:text-base leading-snug sm:leading-normal md:leading-relaxed break-words whitespace-normal overflow-visible word-break-break-all">
          Following projects showcase my skills and my development from where I
          am now and where I started. It includes my university projects and my
          own self-made projects. This is not about what great things I have
          achieved so far, as that is not much, but this is about the constant
          learning and the process of my leveling up -- "Life is not about
          achievements it is about constant development and improvement".
        </p>
      </motion.div>

      <div className="flex flex-wrap -mx-2 mt-8">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};
export default SectionWrapper(Works, "");