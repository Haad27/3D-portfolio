import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  
  second,
  bag,
  nationals,
  GIKI,

  lib,
  award,
  html1,
  css,
  reactjs,
  redux,
  art,
  tailwind,
  nodejs,
  trophy,
  gsap,
  school,
  mernn,
  mongodb,
  image,
  p1,
  p2,
  html,
  git,
  python2,
  figma,
  firebase,
  api,
  flutterflow,
  head,
  docker,
  wordpress,
  meta,
  badminton,
  three,
  data,
  http,
  python1,
  tesla,
  cpp,
  shopify,
  keybaord,
  carrent,
  jobit,
  tripguide,
  threejs,
  awakening,
  cubee,
  food,
  haad,
  hexagon,
  github,
  aws,
  sql,
  vectordatabase,
  rag,
  nextjs,
  alJuthur,
  bayyinahGift,
  pinboard,
  quranHadithLookup,
} from "../assets";

export const navLinks = [
  {
    id: "journey",
    title: "Journey",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "academic",
    title: "Education",
  },
  {
    id: "about",
    title: "Extracurricular",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Currently in 5 Semester of GIKI Gulam Ishaq Khan Institude Of Engineering Sciences",
    icon: GIKI,
  },
  {
    title: "Student Council President in 2022 in college",
    icon: head,
  },
  {
    title: "badminton All Pakistan Collages Winner 2023",
    icon: trophy,
  },
  {
    title: "Played all pakistan National in bamdinton in 2021",
    icon: nationals,
  },
  {
    title: "Matrix from APS nowshera and FSCE from APS Gujrawala",
    icon: bag,
  },
];

const technologies = [
  {
    name: "RAG",
    icon: rag,
  },
  {
    name: "python",
    icon: python2,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "React Three Fiber",
    icon: three,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Vector Database",
    icon: vectordatabase,
  },
];

const experiences = [
  {
    title: "Python, Kotlin & FlutterFlow",
    company_name: "The beginning of my coding journey",
    icon: python1,
    iconBg: "#383E56",
    date: "2023",
    points: [
      "Started programming with Python and learned the fundamentals of programming.",
      "Explored Object Oriented Programming and built small projects to strengthen my skills.",
      "Learned Kotlin and later moved to FlutterFlow where I built multiple mobile applications.",
      "Gained hands on experience with APIs, UI design, and backend integration.",
    ],
  },
  {
    title: "Joined GIKI",
    company_name: "Building strong computer science fundamentals",
    icon: GIKI,
    iconBg: "#E6DEDD",
    date: "2024",
    points: [
      "Started my Software Engineering degree at GIKI.",
      "Learned C++, Python, data structures, and Object Oriented Programming.",
      "Built academic and personal projects to improve problem solving.",
      "Developed a solid foundation in software engineering principles.",
    ],
  },
  {
    title: "Web Development & Systems Limited Internship",
    company_name: "Turning ideas into real products",
    icon: mernn,
    iconBg: "#383E56",
    date: "2025",
    points: [
      "Completed an internship at Systems Limited and worked with modern web development tools.",
      "Learned React, Next.js, React Three Fiber, Tailwind CSS, and frontend development.",
      "Built responsive websites and full stack applications.",
      "Improved teamwork, project structure, and industry development practices.",
    ],
  },
  {
    title: "Cloud, DevOps & Databases",
    company_name: "Expanding into scalable software engineering",
    icon: docker,
    iconBg: "#E6DEDD",
    date: "2026",
    points: [
      "Learned AWS, Docker, DevOps, Data Structures and Algorithms, and Database Management Systems.",
      "Worked with SQL and MongoDB while building scalable backend applications.",
      "Focused on writing clean, maintainable, and production ready code.",
      "Explored modern deployment and cloud workflows.",
    ],
  },
  {
    title: "Artificial Intelligence",
    company_name: "Building intelligent applications",
    icon: rag,
    iconBg: "#383E56",
    date: "Late 2026",
    points: [
      "Started learning Artificial Intelligence and Large Language Models.",
      "Completed courses on Retrieval Augmented Generation.",
      "Built a complete RAG system from scratch.",
      "Explored Agentic AI and developed AI powered applications.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Haad has an exceptional ability to grasp complex backend concepts quickly. Working with him on software architecture showed me how structured and clean his logical reasoning is.",
    name: "Shayyan Rizwan Yazdani",
    designation: "Software Engineering Student",
    company: "GIKI",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQEbAD08m3qFpg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1725453743709?e=1753920000&v=beta&t=z2eMj1AI6SOedkkSxqjef_Ani6_efTslu5nuyxAeoMM",
  },
  {
    testimonial:
      "Collaborating on web projects, Haad demonstrated a strong work ethic. He pays close attention to detail, styling animations, and layout flows to build interactive frontend products.",
    name: "Bilal Ali",
    designation: "Software Developer",
    company: "SAHB",
    image: image,
  }
];

const projects = [
  {
    name: "Al Juthur",
    description:
      "A production-grade Islamic learning app currently in prototype. It features 120+ Tafsirs, 9+ classical lexicons in English and Arabic, a translation model to translate Arabic Tafsir to English, and a RAG model to answer questions based on classical scholars' reflections.",
    tags: [
      {
        name: "rag",
        color: "blue-text-gradient",
      },
      {
        name: "100 plus tafsir",
        color: "green-text-gradient",
      },
      {
        name: "7 plus lexicon",
        color: "pink-text-gradient",
      },
    ],
    image: alJuthur,
    image2 : http,
    bool : false,
    source_code: "/al-juthur",
  },
  {
    name: "Quran & Hadith Lookup",
    description:
      "A web application that automatically fetches and displays Quranic verses with Arabic text when typing a reference. It includes all Quranic surahs, Hadith collections, and cool Islamic shortcuts. For Windows and Mac.",
    tags: [
      {
        name: "windows and mac application",
        color: "blue-text-gradient",
      },
      {
        name: "shortcuts",
        color: "green-text-gradient",
      },
    ],
    image: quranHadithLookup,
    image2 : http,
    bool : false,
    source_code: "https://quran-hadith-lookup-shortcuts.onrender.com/",
  },
  {
    name: "Juice Zone",
    description:
      "3D animated wesbite for a juice company",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "GSAP",
        color: "green-text-gradient",
      },
      {
        name: "Scroll Trigger",
        color: "pink-text-gradient",
      },
    ],
    image: p1,
    image2 : http,
    bool : true,
    source_code_link: "https://github.com/Haad27/GSAP-Project",
    source_code: "http://lavenderblush-albatross-199600.hostingersite.com",
  },
  {
    name: "Pinboard",
    description:
      "A full-stack online picture sharing platform built using SQL, Next.js, Prisma, and Express for our DBMS 4th semester project.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "sql-prisma",
        color: "green-text-gradient",
      },
      {
        name: "express-node",
        color: "pink-text-gradient",
      },
    ],
    image: pinboard,
    image2 : http,
    bool : false,
    source_code: "https://pinboard-nextjs.vercel.app/",
  },
  {
    name: "Bayyinah Gift",
    description:
      "Connects those who want to share their Bayyinah membership with those who want to receive and create matches in FIFO order.",
    tags: [],
    image: bayyinahGift,
    image2 : http,
    bool : false,
    source_code: "https://bayyinah-sibscription-gift.vercel.app/",
  },
  {
    name: "PsyConnect",
    description:
      "3D animated wesbite for booking sessions",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "GSAP",
        color: "green-text-gradient",
      },
      {
        name: "React three",
        color: "pink-text-gradient",
      },
    ],
    image: p2,
    image2 : http,
    bool : true,
    source_code_link: "https://github.com/Haad27/PsyConnect",
    source_code: "http://mediumseagreen-wolverine-934090.hostingersite.com",
  },
  {
    name: "Awakening",
    description:
      "App-based platform that is a therapy app , it has daily habit tracker , chat for all the clients , daily task and much more my first biggest porject.",
    tags: [
      {
        name: "Flutterflow",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "Quote API",
        color: "pink-text-gradient",
      },
    ],
    image: awakening,
    image2 : http,
    bool : true,
    source_code_link: "https://github.com/Haad27/Awakening",
    source_code: "https://awakeninget.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
