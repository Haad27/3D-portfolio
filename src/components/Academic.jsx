import React from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { ragCertificate, r3fCertificate } from '../assets';

const CourseCard = ({ code, name, grade, iconPath, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.08, 0.5)}
    whileHover={{ y: -4, scale: 1.02 }}
    className="bg-tertiary p-4 rounded-xl flex flex-col justify-between h-full border border-[#915eff]/10 hover:border-[#915eff]/50 transition-all duration-300 shadow-md relative overflow-hidden group w-full"
  >
    {/* Hover Sweep Glow */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#915eff]/3 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out z-0" />

    <div className="relative z-10 flex justify-between items-start w-full">
      <div className="w-9 h-9 rounded-lg bg-[#090d22] flex items-center justify-center border border-secondary/15 group-hover:border-[#915eff]/40 transition-colors">
        <svg className="w-4.5 h-4.5 text-[#915eff] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={iconPath} />
        </svg>
      </div>
      <div className="w-7 h-7 rounded-lg bg-[#915eff]/10 border border-[#915eff]/20 flex items-center justify-center font-mono font-extrabold text-[12px] text-[#915eff] shadow-inner group-hover:border-[#915eff] transition-colors shrink-0">
        {grade}
      </div>
    </div>

    <div className="relative z-10 mt-4 flex flex-col">
      <span className="text-secondary font-mono text-[8px] tracking-widest uppercase">{code}</span>
      <h4 className="text-white font-bold text-[13.5px] sm:text-[14px] group-hover:text-[#915eff] transition-colors leading-tight mt-1">
        {name}
      </h4>
    </div>
  </motion.div>
);

const CertCard = ({ title, issuer, image, description, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.15, 0.6)}
    className="w-full"
  >
    <Tilt
      options={{ max: 15, scale: 1.02, speed: 450 }}
      className="bg-tertiary p-4 rounded-xl w-full h-full border border-[#915eff]/10 hover:border-[#915eff]/40 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.2)] flex flex-col justify-between group cursor-pointer"
      onClick={() => window.open(image, '_blank')}
    >
      <div>
        {/* Image wrapper */}
        <div className="relative w-full aspect-[16/11] rounded-lg overflow-hidden mb-4 border border-secondary/20 shadow-inner bg-[#090d22]">
          <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-lg" />
          <div className="absolute inset-0 bg-[#050816]/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <button
              onClick={(e) => {
                e.stopPropagation();
                window.open(image, '_blank');
              }}
              className="bg-[#915eff] text-white py-1.5 px-3 rounded text-[10px] font-bold shadow-[0_0_10px_rgba(145,94,255,0.5)] cursor-pointer"
            >
              Expand
            </button>
          </div>
        </div>

        <div className="px-0.5">
          <span className="text-secondary text-[8.5px] font-bold tracking-[0.15em] uppercase">{issuer}</span>
          <h3 className="text-white font-bold text-[15px] group-hover:text-[#915eff] transition-colors mt-0.5 leading-tight">
            {title}
          </h3>
          <p className="text-secondary text-[11.5px] mt-2 leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      <div className="px-0.5 mt-5">
        <button
          onClick={(e) => {
            e.stopPropagation();
            window.open(image, '_blank');
          }}
          className="w-full py-2 bg-[#090d22] group-hover:bg-[#915eff] border border-[#915eff]/20 group-hover:border-transparent text-white font-bold text-[10px] rounded-lg transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <span>Verify Credentials</span>
          <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
            <path d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
          </svg>
        </button>
      </div>
    </Tilt>
  </motion.div>
);

const Academic = () => {
  const courses = [
    { 
      code: "CS-101", 
      name: "Computing and AI", 
      grade: "A", 
      iconPath: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
    },
    { 
      code: "CS-112", 
      name: "Object-Oriented Programming (OOPs)", 
      grade: "A-", 
      iconPath: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" 
    },
    { 
      code: "AI-102-L", 
      name: "Python Programming & Freelancing Essentials", 
      grade: "A-", 
      iconPath: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" 
    },
    { 
      code: "CS-221", 
      name: "Data Structures & Algorithms", 
      grade: "A", 
      iconPath: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" 
    },
    { 
      code: "SE-201",
      name: "Software Engineering",
      grade: "B+",
      iconPath: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065zM15 12a3 3 0 11-6 0 3 3 0 016 0z"
    },
    { 
      code: "SE-211",
      name: "Software Requirement Engineering",
      grade: "B+",
      iconPath: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    },
    { 
      code: "CS-232", 
      name: "Database Management System (DBMS)", 
      grade: "A", 
      iconPath: "M4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.58 4 8 4s8-1.79 8-4M4 7c0-2.21 3.58-4 8-4s8 1.79 8 4m0 5c0 2.21-3.58 4-8 4s-8-1.79-8-4" 
    },
    { 
      code: "DevOps Lab", 
      name: "Development Operations & Pipelines", 
      grade: "A-", 
      iconPath: "M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 8H18.5" 
    },
  ];

  const certificates = [
    {
      title: "Retrieval-Augmented Generation (RAG)",
      issuer: "Coursera Credentials",
      image: ragCertificate,
      description: "Credentials in vector databases, semantic search architectures, chunking, and LLM context loading.",
    },
    {
      title: "Three.js & React Three Fiber",
      issuer: "Three.js Journey",
      image: r3fCertificate,
      description: "Advanced training in creating 3D Web canvases, lighting,GLTF meshes, shaders, and React models.",
    },
  ];

  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My academic path & credentials</p>
        <h2 className={styles.sectionHeadText}>Education & Specializations.</h2>
      </motion.div>

      {/* Desktop-only Layout: lg and wider */}
      <div className="hidden lg:grid grid-cols-12 gap-6 xl:gap-8 mt-12 items-start">
        {/* Left: RAG Certificate */}
        <div className="col-span-3 flex flex-col gap-4">
          <h3 className="text-white text-[19px] font-bold tracking-wider mb-1.5 border-b border-secondary/10 pb-2">
            RAG Specialization
          </h3>
          <CertCard {...certificates[0]} index={0} />
        </div>

        {/* Middle: Coursework Grid */}
        <div className="col-span-6 flex flex-col gap-4">
          <h3 className="text-white text-[19px] font-bold tracking-wider mb-1.5 border-b border-secondary/10 pb-2">
            Relevant Coursework
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {courses.map((course, index) => (
              <CourseCard key={course.code} {...course} index={index} />
            ))}
          </div>
        </div>

        {/* Right: Three.js Certificate */}
        <div className="col-span-3 flex flex-col gap-4">
          <h3 className="text-white text-[19px] font-bold tracking-wider mb-1.5 border-b border-secondary/10 pb-2">
            3D Development
          </h3>
          <CertCard {...certificates[1]} index={1} />
        </div>
      </div>

      {/* Mobile/Tablet Layout: under lg */}
      <div className="flex lg:hidden flex-col gap-12 mt-10">
        {/* Certifications Row: Side-by-side on sm/md and stacked on xs */}
        <div className="flex flex-col gap-4">
          <h3 className="text-white text-[19px] font-bold tracking-wider border-b border-secondary/10 pb-2">
            Professional Certifications
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <CertCard {...certificates[0]} index={0} />
            <CertCard {...certificates[1]} index={1} />
          </div>
        </div>

        {/* Coursework Grid: Grid on sm/md and stacked on xs */}
        <div className="flex flex-col gap-4">
          <h3 className="text-white text-[19px] font-bold tracking-wider border-b border-secondary/10 pb-2">
            Relevant Coursework
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {courses.map((course, index) => (
              <CourseCard key={course.code} {...course} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Academic, "academic");
