// "use client";

// import { useEffect, useRef, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// import pro1 from "./pro1.png";
// import pro2 from "./pro2.png";
// import pro3 from "./pro3.png";
// import pro4 from "./pro4.png";
// import pro5 from "./pro5.png";
// import pic from "./pic.jpg";
// import { useRouter } from "next/navigation";
// import LoadingAnimation from "@/app/animation/animation";

// const projects = [
//   {
//     id: 1,
//     title: "Personal Finance and Productivity App",
//     description: "Record and track financial transactions and daily tasks",
//     image: pro1,
//     status: " Completed",
//   },
//   {
//     id: 2,
//     title: "ChatApp ",
//     description: " A real-time chat platform",
//     image: pro2,
//     status: " Completed",
//   },
//   {
//     id: 3,
//     title: "Tropical Storm Damage Detection Model ",
//     description: " Automatically identify and classify hurricane damage",
//     image: pro3,
//     status: " Completed",
//   },
//   {
//     id: 4,
//     title: "Product Scrapper",
//     description:
//       "  Extract product data (name, website, price, link) with 95% accuracy",
//     image: pro4,
//     status: " Completed",
//   },
//   {
//     id: 5,
//     title: "Chess Multiplayer ",
//     description: "  A two-player chess game",
//     image: pro5,
//     status: " Completed",
//   },
// ];

// const aboutContent = [
//   {
//     id: 1,
//     text: "I'm a highly motivated frontend developer with a passion for crafting beautiful and user-friendly web applications. I Done Data Science, but my real passion lies in transforming designs into seamless and engaging user experiences.",
//   },
//   {
//     id: 2,
//     text: "I thrive in fast-paced environments where I can continuously learn and push the boundaries of what's possible with code. My experience building real-time chat applications, data-driven tools, and even a hurricane damage detection model highlights my versatility and eagerness to tackle diverse challenges.",
//   },
//   {
//     id: 3,
//     text: "When I'm not coding, you can find me exploring new technologies, experimenting with creative coding projects, or losing myself in a good book. ",
//   },
// ];
// const fadeInUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
// };

// const staggerChildren = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.5,
//     },
//   },
// };

// const experience = [
//   {
//     id: 1,
//     company: "AWS AI-ML",
//     role: "AWS AI-ML Virtual Internship Certificate",
//   },
//   {
//     id: 2,
//     company: "AWS Cloud",
//     role: "AWS Cloud Foundation Certified",
//   },
//   {
//     id: 3,
//     company: "Cisco PCAP",
//     role: "Cisco PCAP Certified",
//   },
// ];

// const knownForItems = [
//   "User Research",
//   "Product Design",
//   "User Experience Design",
//   "Translating User Needs",
//   "Prototyping",
//   "Bringing ideas to life",
//   "More Personal and Engaging",
// ];

// function HoverWord({ children, className }: any) {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <span
//       className={`inline-block transition-transform duration-200 ${
//         isHovered ? "scale-110 text-blue-900" : ""
//       } ${className}`}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {children}
//     </span>
//   );
// }
// const ProjectCard = ({ project, index }: any) => {
//   const router = useRouter();
//   const controls = useAnimation();
//   const [ref, inView] = useInView({
//     threshold: 0.2,
//     triggerOnce: false,
//   });

//   useEffect(() => {
//     if (inView) {
//       controls.start("visible");
//     } else {
//       controls.start("hidden");
//     }
//   }, [controls, inView]);

//   const cardVariants = {
//     hidden: {
//       opacity: 0,
//       y: 50,
//       transition: { duration: 0.5 },
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.5, delay: index * 0.1 },
//     },
//   };

//   return (
//     <motion.div
//       ref={ref}
//       animate={controls}
//       initial="hidden"
//       variants={cardVariants}
//       className={`project-card ${
//         index % 2 === 0 ? "project-right" : "project-left"
//       }`}
//       onClick={() => {
//         router.push(`./pro${project.id}`);
//       }}
//     >
//       <div className="project-content">
//         <div className="project-image-container">
//           <Image
//             src={project.image}
//             alt={project.title}
//             width={500}
//             height={400}
//             className="project-image"
//             priority
//           />
//           <span className="    project-status ">{project.status}</span>
//         </div>
//         <div className="project-info">
//           <h3 className="project-title">{project.title}</h3>
//           <p className="project-description">{project.description}</p>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default function Content() {
//   const [activeMenu, setActiveMenu] = useState("");
//   const [isSticky, setIsSticky] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);
//   const router = useRouter();
//   const homeRef = useRef(null);
//   const projectsRef = useRef(null);

//   const knowsRef = useRef(null);
//   const [showMenu, setShowMenu] = useState(false);
//   const [expandedItems, setExpandedItems] = useState<number[]>([]);

//   const [aboutRef, aboutInView] = useInView({
//     triggerOnce: false,
//     threshold: 0.2,
//   });

//   const [showContent, setShowContent] = useState(false);

//   const imageVariants = {
//     hidden: { opacity: 0, x: -100 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { duration: 1.0, ease: "easeOut" },
//     },
//   };

//   const textVariants = {
//     hidden: { opacity: 0, x: 50 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { duration: 1.0, ease: "easeOut" },
//     },
//   };
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 100) {
//         setIsSticky(true);
//       } else {
//         setIsSticky(true);
//       }
//     };
//     setTimeout(() => {
//       setShowMenu(true);
//     }, 100);

//     window.addEventListener("scroll", handleScroll);

//     setTimeout(() => setIsLoading(false), 500);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const toggleItem = (itemId: any) => {
//     setExpandedItems((prevExpanded) =>
//       prevExpanded.includes(itemId)
//         ? prevExpanded.filter((id) => id !== itemId)
//         : [...prevExpanded, itemId]
//     );
//   };

//   const scrollToSection = (ref: any) => {
//     if (ref.current) {
//       const startPosition = window.pageYOffset;
//       const targetPosition = ref.current.offsetTop;
//       const distance = targetPosition - startPosition;
//       const duration = 500;
//       let start = performance.now();

//       const animation = (timestamp: any) => {
//         const progress = timestamp - start;
//         const easeInOutCubic = (t: any) =>
//           t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
//         const easedProgress = easeInOutCubic(progress / duration);
//         window.scrollTo(0, startPosition + distance * easedProgress);

//         if (progress < duration) {
//           window.requestAnimationFrame(animation);
//         }
//       };
//       window.requestAnimationFrame(animation);
//     }
//   };

//   if (isLoading) {
//     return (
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//       ></motion.div>
//     );
//   }

//   const handleLoadingComplete = () => {
//     setShowContent(true);
//   };
//   return (
//     <div className="bg-black min-h-screen">
//       <LoadingAnimation
//         isLoading={isLoading}
//         onLoadingComplete={handleLoadingComplete}
//       />
//       {showContent && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className=" text-white"
//         >
//           <main className="align-middle px-6 md:px-12 lg:px-24 ">
//             <div className="bg-black text-white min-h-screen">
//               <header
//                 className={`flex items-center justify-between p-6 ${
//                   isSticky && showMenu
//                     ? "sticky top-0 z-10 bg-opacity-90 backdrop-blur-sm"
//                     : ""
//                 }`}
//               >
//                 <Link href="/">
//                   <l-cardio
//                     size="40"
//                     stroke="6"
//                     speed="2"
//                     color="white"
//                   ></l-cardio>
//                 </Link>
//                 <nav className="flex items-center space-x-4">
//                   <ul className="flex space-x-4">
//                     {["Home", "Projects", "About", "Knows"].map((item) => (
//                       <li key={item} className="menu-item">
//                         <Link
//                           href={`#${item.toLowerCase()}-section`}
//                           className={`text-white ${
//                             activeMenu === item ? "active" : ""
//                           }`}
//                           onClick={() => {
//                             setActiveMenu(item);
//                             scrollToSection(eval(`${item.toLowerCase()}Ref`));
//                           }}
//                         >
//                           {item}
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 </nav>
//               </header>

//               <section
//                 className="hero-section bg-black text-white flex flex-col justify-center items-center h-screen px-8 lg:px-16"
//                 id="home-section"
//                 ref={homeRef}
//               >
//                 <motion.div
//                   initial={{ opacity: 0, y: 40 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 1 }}
//                   className="header-content text-center"
//                 >
//                   <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
//                     <HoverWord>{"I'm"}</HoverWord>{" "}
//                     <HoverWord className="text-green-500 hover:text-blue-900">
//                       Rajesh
//                     </HoverWord>
//                     , <HoverWord>a</HoverWord>{" "}
//                     <HoverWord>multi-disciplinary</HoverWord>{" "}
//                     <HoverWord>designer</HoverWord>
//                     ,
//                     <br />
//                     <HoverWord>fueled</HoverWord> <HoverWord>by</HoverWord>{" "}
//                     <HoverWord>coffee</HoverWord> <HoverWord>and</HoverWord>{" "}
//                     <HoverWord>curious</HoverWord> <HoverWord>about</HoverWord>{" "}
//                     <HoverWord>everything.</HoverWord>
//                     <br />
//                     <HoverWord>Currently</HoverWord> <HoverWord>at</HoverWord>{" "}
//                     <HoverWord className="text-green-500 hover:text-blue-900">
//                       ReactJs
//                     </HoverWord>
//                     , <HoverWord>previously</HoverWord>{" "}
//                     <HoverWord>at</HoverWord>{" "}
//                     <HoverWord className="text-green-500 hover:text-blue-900">
//                       Python
//                     </HoverWord>
//                     .
//                   </h1>
//                   <div className="flex justify-center items-center text-sm text-gray-400 py-4 space-x-4">
//                     <span>
//                       Hyderabad, India <hr />
//                     </span>
//                     <Link
//                       href="#projects-section"
//                       className={`text-white ${
//                         activeMenu === "Projects" ? "active" : ""
//                       }`}
//                       onClick={() => {
//                         scrollToSection(projectsRef);
//                       }}
//                     >
//                       See Worked Projects
//                     </Link>
//                   </div>
//                 </motion.div>
//               </section>

//               <section
//                 className="projects-section relative"
//                 ref={projectsRef}
//                 id="projects-section"
//               >
//                 <div className="line absolute top-0 left-0 right-0 mx-auto w-5/7 h-px bg-gray-100"></div>

//                 <div className="container">
//                   <div className="parent-container">
//                     <div className="header-container">
//                       <div className="section-title text-4xl font-bold">
//                         Selected works
//                       </div>
//                       <div className="section-title text-2xl font-thin">
//                         {"21'-24'"}
//                       </div>
//                     </div>
//                   </div>
//                   <div className="projects-grid">
//                     {projects.map((project, index) => (
//                       <ProjectCard
//                         key={project.id}
//                         project={project}
//                         index={index}
//                       />
//                     ))}
//                   </div>
//                 </div>
//               </section>

//               <motion.section
//                 className="about-section bg-black text-white py-10 px-6 md:px-12 lg:px-24 relative min-h-screen"
//                 id="about-section"
//                 ref={aboutRef}
//                 initial="hidden"
//                 animate={aboutInView ? "visible" : "hidden"}
//               >
//                 <div className="line absolute top-0 left-0 right-0 mx-auto w-5/7 h-px bg-gray-100"></div>
//                 <div className="container mx-auto">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//                     <motion.div
//                       className="about-text text-left"
//                       variants={imageVariants}
//                     >
//                       <div className="section-title text-4xl font-bold mb-6">
//                         About
//                       </div>
//                       <div className="mx-10">
//                         <Image
//                           src={pic.src}
//                           alt="Rajesh"
//                           width={200}
//                           height={400}
//                           className="profile-image w-full h-auto"
//                         />
//                       </div>
//                     </motion.div>

//                     <motion.div className="experience" variants={textVariants}>
//                       {aboutContent.map((item) => (
//                         <motion.p
//                           key={item.id}
//                           className="text-lg mb-6"
//                           variants={textVariants}
//                         >
//                           {item.text}
//                         </motion.p>
//                       ))}
//                       {experience.map((item) => (
//                         <motion.div
//                           key={item.id}
//                           className="experience-item mb-6"
//                           variants={textVariants}
//                         >
//                           <div
//                             className="flex items-center justify-between cursor-pointer"
//                             onClick={() => toggleItem(item.id)}
//                           >
//                             <h3 className="text-xl font-bold">
//                               {item.company}
//                             </h3>
//                             <span className="text-2xl transition-transform duration-300 transform">
//                               {expandedItems.includes(item.id) ? "-" : "+"}{" "}
//                             </span>
//                           </div>
//                           {expandedItems.includes(item.id) && (
//                             <motion.p
//                               className="text-gray-400 mt-2"
//                               initial={{ opacity: 0, height: 0 }}
//                               animate={{ opacity: 1, height: "auto" }}
//                               exit={{ opacity: 0, height: 0 }}
//                               transition={{ duration: 0.3 }}
//                             >
//                               {item.role}
//                             </motion.p>
//                           )}
//                         </motion.div>
//                       ))}
//                     </motion.div>
//                   </div>
//                 </div>
//               </motion.section>
//               <motion.section
//                 className="about-section bg-black text-white py-8 px-6 md:px-12 lg:px-24 relative min-h-screen"
//                 ref={knowsRef}
//                 id="knows-section"
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: false }}
//                 variants={fadeInUp}
//               >
//                 <div className="line absolute top-0 left-0 right-0 mx-auto w-5/7 h-px bg-gray-100"></div>
//                 <div className="container mx-auto">
//                   <motion.h3
//                     className="known-for-title text-2xl text-gray-400 mb-6"
//                     variants={fadeInUp}
//                   >
//                     What {"I'm"} known for
//                   </motion.h3>
//                   <motion.ul
//                     className="about-text text-right"
//                     variants={staggerChildren}
//                   >
//                     {knownForItems.map((item, index) => (
//                       <motion.li
//                         key={index}
//                         className="known-for-item"
//                         variants={fadeInUp}
//                       >
//                         {item}
//                       </motion.li>
//                     ))}
//                   </motion.ul>
//                 </div>
//               </motion.section>
//             </div>
//             <footer className="bg-black py-10 mt-16 relative">
//               <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 ">
//                 <div className="mb-6 md:mb-0 flex flex-col items-center">
//                   {" "}
//                   {/* Add flex items-center */}
//                   <Link href="/">
//                     <div className="logo-image  w-24">
//                       {" "}
//                       {/* Add a width for the logo */}
//                       <l-cardio
//                         size="40"
//                         stroke="6"
//                         speed="2"
//                         color="white"
//                       ></l-cardio>
//                     </div>
//                   </Link>
//                   <p className="text-gray-400 mt-2">
//                     © 2023 Rajesh. All rights reserved.
//                   </p>
//                 </div>

//                 <div className="flex space-x-4">
//                   <a
//                     href="https://www.linkedin.com/in/rajesh-reddy1/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-gray-400 hover:text-green-400 transition-colors duration-200"
//                   >
//                     LinkedIn
//                   </a>
//                   <a
//                     href="https://github.com/Rajesh-Reddy1"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-gray-400 hover:text-green-400 transition-colors duration-200"
//                   >
//                     GitHub
//                   </a>
//                   <a
//                     href="https://www.instagram.com/_rajeshreddy__/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-gray-400 hover:text-green-400 transition-colors duration-200"
//                   >
//                     Instagram
//                   </a>
//                 </div>
//               </div>
//               <div className="  line absolute top-0 left-0 right-0 mx-auto w-5/7 h-px bg-gray-100"></div>
//             </footer>
//           </main>
//         </motion.div>
//       )}
//     </div>
//   );
// }

// function MenuIcon(props: any) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <line x1="4" x2="20" y1="12" y2="12" />
//       <line x1="4" x2="20" y1="6" y2="6" />
//       <line x1="4" x2="20" y1="18" y2="18" />
//     </svg>
//   );
// }




"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation,  AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { cardio } from 'ldrs'



import pro1 from "./pro1.png";
import pro2 from "./pro2.png";
import pro3 from "./pro3.png";
import pro4 from "./pro4.png";
import pro5 from "./pro5.png";
import pic from "./pic.jpg";
import { useRouter } from "next/navigation";


const projects = [
  {
    id: 1,
    title: "Personal Finance and Productivity App",
    description: "Record and track financial transactions and daily tasks",
    image: pro1,
    status: " Completed",
  },
  {
    id: 2,
    title: "ChatApp ",
    description: " A real-time chat platform",
    image: pro2,
    status: " Completed",
  },
  {
    id: 3,
    title: "Tropical Storm Damage Detection Model ",
    description: " Automatically identify and classify hurricane damage",
    image: pro3,
    status: " Completed",
  },
  {
    id: 4,
    title: "Product Scrapper",
    description:
      "  Extract product data (name, website, price, link) with 95% accuracy",
    image: pro4,
    status: " Completed",
  },
  {
    id: 5,
    title: "Chess Multiplayer ",
    description: "  A two-player chess game",
    image: pro5,
    status: " Completed",
  },
];

const aboutContent = [
  {
    id: 1,
    text: "I'm a highly motivated frontend developer with a passion for crafting beautiful and user-friendly web applications. I Done Data Science, but my real passion lies in transforming designs into seamless and engaging user experiences.",
  },
  {
    id: 2,
    text: "I thrive in fast-paced environments where I can continuously learn and push the boundaries of what's possible with code. My experience building real-time chat applications, data-driven tools, and even a hurricane damage detection model highlights my versatility and eagerness to tackle diverse challenges.",
  },
  {
    id: 3,
    text: "When I'm not coding, you can find me exploring new technologies, experimenting with creative coding projects, or losing myself in a good book. ",
  },
];
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const experience = [
  {
    id: 1,
    company: "AWS AI-ML",
    role: "AWS AI-ML Virtual Internship Certificate",
  },
  {
    id: 2,
    company: "AWS Cloud",
    role: "AWS Cloud Foundation Certified",
  },
  {
    id: 3,
    company: "Cisco PCAP",
    role: "Cisco PCAP Certified",
  },
];

const knownForItems = [
  "User Research",
  "Product Design",
  "User Experience Design",
  "Translating User Needs",
  "Prototyping",
  "Bringing ideas to life",
  "More Personal and Engaging",
];

const LoadingAnimation = ({ isLoading }: { isLoading: boolean }) => {
  if (typeof window !== 'undefined') { 
    cardio.register();
  }
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          className="fixed inset-0 flex items-center justify-center bg-black z-50"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <l-cardio size="80" stroke="6" speed="1" color="white"></l-cardio>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

function HoverWord({ children, className }: any) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span
    className={`inline-block transition-transform duration-200 ${className} hover-word`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </span>
  );
}

const ProjectCard = ({ project, index }: any) => {
  const router = useRouter();
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      transition: { duration: 0.5 },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.1 },
    },
  };

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={cardVariants}
      className={`project-card ${
        index % 2 === 0 ? "project-right" : "project-left"
      }`}
      onClick={() => {
        router.push(`./pro${project.id}`);
      }}
    >
      <div className="project-content">
        <div className="project-image-container">
          <Image
            src={project.image}
            alt={project.title}
            width={500}
            height={400}
            className="project-image"
            priority
          />
          <span className="    project-status ">{project.status}</span>
        </div>
        <div className="project-info">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default function Content() {
  const [activeMenu, setActiveMenu] = useState("");
  const [isSticky, setIsSticky] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const homeRef = useRef(null);
  const projectsRef = useRef(null);

  const knowsRef = useRef(null);
  const [showMenu, setShowMenu] = useState(false);
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const [aboutRef, aboutInView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const [showContent, setShowContent] = useState(false);
  

  const imageVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.0, ease: "easeOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.0, ease: "easeOut" },
    },
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(true);
      }
    };
    setTimeout(() => {
      setShowMenu(true);
    }, 10);

    window.addEventListener("scroll", handleScroll);

    setTimeout(() => setIsLoading(false), 500);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleItem = (itemId: any) => {
    setExpandedItems((prevExpanded) =>
      prevExpanded.includes(itemId)
        ? prevExpanded.filter((id) => id !== itemId)
        : [...prevExpanded, itemId]
    );
  };

  const scrollToSection = (ref: any) => {
    if (ref.current) {
      const startPosition = window.pageYOffset;
      const targetPosition = ref.current.offsetTop;
      const distance = targetPosition - startPosition;
      const duration = 500;
      let start = performance.now();

      const animation = (timestamp: any) => {
        const progress = timestamp - start;
        const easeInOutCubic = (t: any) =>
          t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
        const easedProgress = easeInOutCubic(progress / duration);
        window.scrollTo(0, startPosition + distance * easedProgress);

        if (progress < duration) {
          window.requestAnimationFrame(animation);
        }
      };
      window.requestAnimationFrame(animation);
    }
  };



  return (
    <div className="bg-black min-h-screen">
        <LoadingAnimation isLoading={isLoading} />


        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className=" text-white"
        >
          <main className={`align-middle px-6 md:px-12 lg:px-24
                       ${isLoading ? "opacity-0" : "opacity-100"} 
                       transition-opacity duration-500`}>
            <div className="bg-black text-white min-h-screen">
              <header
                className={`flex items-center justify-between p-6 ${
                  isSticky && showMenu
                    ? "sticky top-0 z-10 bg-opacity-90 backdrop-blur-sm"
                    : ""
                }`}
              >
                <Link href="/">
                  <l-cardio
                    size="40"
                    stroke="6"
                    speed="2"
                    color="white"
                  ></l-cardio>
                </Link>
                <nav className="flex items-center space-x-4">
                  <ul className="flex space-x-4">
                    {["Home", "Projects", "About", "Knows"].map((item) => (
                      <li key={item} className="menu-item">
                        <Link
                          href={`#${item.toLowerCase()}-section`}
                          className={`text-white ${
                            activeMenu === item ? "active" : ""
                          }`}
                          onClick={() => {
                            setActiveMenu(item);
                            scrollToSection(eval(`${item.toLowerCase()}Ref`));
                          }}
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </header>

              <section
                className="hero-section bg-black text-white flex flex-col justify-center items-center h-screen px-8 lg:px-16"
                id="home-section"
                ref={homeRef}
              >
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="header-content text-center"
                >
                  <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
                    <HoverWord>{"I'm"}</HoverWord>{" "}
                    <HoverWord className="text-green-500">
                      Rajesh
                    </HoverWord>
                    , <HoverWord>a</HoverWord>{" "}
                    <HoverWord>multi-disciplinary</HoverWord>{" "}
                    <HoverWord>designer</HoverWord>
                    ,
                    <br />
                    <HoverWord>fueled</HoverWord> <HoverWord>by</HoverWord>{" "}
                    <HoverWord>coffee</HoverWord> <HoverWord>and</HoverWord>{" "}
                    <HoverWord>curious</HoverWord> <HoverWord>about</HoverWord>{" "}
                    <HoverWord>everything.</HoverWord>
                    <br />
                    <HoverWord>Currently</HoverWord> <HoverWord>at</HoverWord>{" "}
                    <HoverWord className="text-green-500">
                      ReactJs
                    </HoverWord>
                    , <HoverWord>previously</HoverWord>{" "}
                    <HoverWord>at</HoverWord>{" "}
                    <HoverWord className="text-green-500">
                      Python
                    </HoverWord>
                    .
                  </h1>
                  <div className="flex justify-center items-center text-sm text-gray-400 py-4 space-x-4">
                    <span>
                      Hyderabad, India <hr />
                    </span>
                    <Link
                      href="#projects-section"
                      className={`menu-item text-white ${
                        activeMenu === "Projects" ? "active" : ""
                      }`}
                      onClick={() => {
                        scrollToSection(projectsRef);
                      }}
                    >
                      See Worked Projects
                    </Link>
                  </div>
                </motion.div>
              </section>

              <section
                className="projects-section relative"
                ref={projectsRef}
                id="projects-section"
              >
                <div className="line absolute top-0 left-0 right-0 mx-auto w-5/7 h-px bg-gray-100"></div>

                <div className="container">
                  <div className="parent-container">
                    <div className="header-container">
                      <div className="section-title text-4xl font-bold">
                        Selected works
                      </div>
                      <div className="section-title text-2xl font-thin">
                        {"21'-24'"}
                      </div>
                    </div>
                  </div>
                  <div className="projects-grid">
                    {projects.map((project, index) => (
                      <ProjectCard
                        key={project.id}
                        project={project}
                        index={index}
                      />
                    ))}
                  </div>
                </div>
              </section>

              <motion.section
                className="about-section bg-black text-white py-10 px-6 md:px-12 lg:px-24 relative min-h-screen"
                id="about-section"
                ref={aboutRef}
                initial="hidden"
                animate={aboutInView ? "visible" : "hidden"}
              >
                <div className="line absolute top-0 left-0 right-0 mx-auto w-5/7 h-px bg-gray-100"></div>
                <div className="container mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <motion.div
                      className="about-text text-left"
                      variants={imageVariants}
                    >
                      <div className="section-title text-4xl font-bold mb-6">
                        About
                      </div>
                      <div className="mx-10">
                        <Image
                          src={pic.src}
                          alt="Rajesh"
                          width={200}
                          height={400}
                          className="profile-image w-full h-auto"
                        />
                      </div>
                    </motion.div>

                    <motion.div className="experience" variants={textVariants}>
                      {aboutContent.map((item) => (
                        <motion.p
                          key={item.id}
                          className="text-lg mb-6"
                          variants={textVariants}
                        >
                          {item.text}
                        </motion.p>
                      ))}
                      {experience.map((item) => (
                        <motion.div
                          key={item.id}
                          className="experience-item mb-6"
                          variants={textVariants}
                        >
                          <div
                            className="flex items-center justify-between cursor-pointer"
                            onClick={() => toggleItem(item.id)}
                          >
                            <h3 className="text-xl font-bold">
                              {item.company}
                            </h3>
                            <span className="text-2xl transition-transform duration-300 transform">
                              {expandedItems.includes(item.id) ? "-" : "+"}{" "}
                            </span>
                          </div>
                          {expandedItems.includes(item.id) && (
                            <motion.p
                              className="text-gray-400 mt-2"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              {item.role}
                            </motion.p>
                          )}
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </motion.section>
              <motion.section
                className="about-section bg-black text-white py-8 px-6 md:px-12 lg:px-24 relative min-h-screen"
                ref={knowsRef}
                id="knows-section"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={fadeInUp}
              >
                <div className="line absolute top-0 left-0 right-0 mx-auto w-5/7 h-px bg-gray-100"></div>
                <div className="container mx-auto">
                  <motion.h3
                    className="known-for-title text-2xl text-gray-400 mb-6"
                    variants={fadeInUp}
                  >
                    What {"I'm"} known for
                  </motion.h3>
                  <motion.ul
                    className="about-text text-right"
                    variants={staggerChildren}
                  >
                    {knownForItems.map((item, index) => (
                      <motion.li
                        key={index}
                        className="known-for-item"
                        variants={fadeInUp}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </motion.section>
            </div>
            <footer className="bg-black py-10 mt-16 relative">
              <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 ">
                <div className="mb-6 md:mb-0 flex flex-col items-center">
                  {" "}
                  {/* Add flex items-center */}
                  <Link href="/">
                    <div className="logo-image  w-24">
                      {" "}
                      {/* Add a width for the logo */}
                      <l-cardio
                        size="40"
                        stroke="6"
                        speed="2"
                        color="white"
                      ></l-cardio>
                    </div>
                  </Link>
                  <p className="text-gray-400 mt-2">
                    © 2023 Rajesh. All rights reserved.
                  </p>
                </div>

                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/rajesh-reddy1/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-green-400 transition-colors duration-200"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/Rajesh-Reddy1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-green-400 transition-colors duration-200"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://www.instagram.com/_rajeshreddy__/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-green-400 transition-colors duration-200"
                  >
                    Instagram
                  </a>
                </div>
              </div>
              <div className="  line absolute top-0 left-0 right-0 mx-auto w-5/7 h-px bg-gray-100"></div>
            </footer>
          </main>
        </motion.div>
        
    </div>
  );
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
