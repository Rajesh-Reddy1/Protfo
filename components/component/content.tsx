"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import logo from "./logo.png"; 
import img1 from "./img1.jpg";
import img2 from "./img2.png";
import msg from "./image.png"; 

// Define your project data
const projects = [
  {
    id: 1,
    title: "Android Private Space",
    description: "Protect your apps from prying eyes",
    image: img1,
    status: " Completed",
  },
  {
    id: 2,
    title: "Platform McKinsey",
    description: "Streamlining FinalDocs submission",
    image: img2,
    status: " Completed",
  },
];

const aboutContent = [
  {
    id: 1,
    text: "I'm a multi-disciplinary product designer with 6 years of experience based in London. Currently at  leading several high-priority privacy and safety features on Android – the world’s most widely used operating system.",
  },
  {
    id: 2,
    text: "I am driven by curiosity and my mission to design products that balance user experience with business objectives.",
  },
  {
    id: 3,
    text: "Before Google, I worked as a Senior UX Designer at , helping various high-profile clients, from banking, non-profit, retail, energy, and telco, to bring disruptive digital products and services to market and help grow clients' own design teams.",
  },
  {
    id: 4,
    text: "In my downtime, I enjoy exploring new destinations with my trusty camera.",
  },
];

const experience = [
  {
    id: 1,
    company: "Google",
    role: "Interaction Designer",
  },
  {
    id: 2,
    company: "McKinsey & Company",
    role: "Product Design Lead",
  },
];

const knownForItems = [
  "User Research",
  "Product Design",
  "User Experience Design",
  "Design Strategy",
  "Motion Design",
  "High Fidelity Prototyping",
  "Workshop Facilitation",
  "Certified SCRUM Master",
];

function HoverWord({ children, className }: { children: any; className?: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span
      className={`inline-block transition-transform duration-200 ${
        isHovered ? "scale-110 text-blue-900" : ""
      } ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </span>
  );
}

export default function Content() {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [activeMenu, setActiveMenu] = useState("");
  const [isSticky, setIsSticky] = useState(false);

  const projectsRef = useRef(null); // Reference to the Projects section
  const aboutRef = useRef(null); // Reference to the About section
  const knowsRef = useRef(null); // Reference to the Knows section
  const contactRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleItem = (itemId: number) => {
    setExpandedItems((prevExpanded) =>
      prevExpanded.includes(itemId)
        ? prevExpanded.filter((id) => id !== itemId)
        : [...prevExpanded, itemId]
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", { name, email, subject, message });
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };
  const scrollToSection = (ref: React.MutableRefObject<any>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-black text-white">
      <main className="align-middle px-6 md:px-12 lg:px-24">
        <div className="bg-black text-white min-h-screen">
          <header
            className={`flex items-center justify-between p-6 ${
              isSticky ? "sticky top-0 z-10 bg-opacity-90 backdrop-blur-sm" : ""
            }`}
          >
            <Link href="/">
              <Image
                src={logo}
                alt="Logo"
                width={50}
                height={50}
                className="logo-image"
              />
            </Link>
            <nav className="flex items-center space-x-4">
              <ul className="flex space-x-4">
                <li className="menu-item">
                  <Link
                    href="/"
                    className={`text-white ${
                      activeMenu === "Home" ? "active" : ""
                    }`}
                    onClick={() => setActiveMenu("Home")}
                  >
                    Home
                  </Link>
                </li>
                <li className="menu-item">
                <Link
                    href="#" // Link to '#' to prevent default page jump
                    className={`text-white ${
                      activeMenu === "Projects" ? "active" : ""
                    }`}
                    onClick={() => {
                      setActiveMenu("Projects");
                      scrollToSection(projectsRef);
                    }}
                  >
                    Projects
                  </Link>
                </li>
                <li className="menu-item">
                  <Link
                    href="/about"
                    className={`text-white ${
                      activeMenu === "About" ? "active" : ""
                    }`}
                    onClick={() => setActiveMenu("About")}
                  >
                    About
                  </Link>
                </li>
                <li className="menu-item">
                  <Link
                    href="/knows"
                    className={`text-white ${
                      activeMenu === "Knows" ? "active" : ""
                    }`}
                    onClick={() => setActiveMenu("Knows")}
                  >
                    Knows
                  </Link>
                </li>
                <li className="menu-item">
                  <Link
                    href="/contact"
                    className={`text-white ${
                      activeMenu === "Contact" ? "active" : ""
                    }`}
                    onClick={() => setActiveMenu("Contact")}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </header>

          <section className="hero-section bg-black text-white flex flex-col justify-center items-center h-screen px-8 lg:px-16">
            <div className="header-content text-center">
              <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
                <HoverWord>I'm</HoverWord>{" "}
                <HoverWord className="text-green-500 hover:text-red-900">
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
                <HoverWord className="text-green-500 hover:text-red-900">
                  ReactJs
                </HoverWord>
                , <HoverWord>previously</HoverWord> <HoverWord>at</HoverWord>{" "}
                <HoverWord className="text-green-500 hover:text-red-900">
                  Python
                </HoverWord>
                .
              </h1>
              <div className="flex justify-center items-center text-sm text-gray-400 py-4 space-x-4">
                <span>
                  Hyderabad, India <hr></hr>
                </span>
                <a
                  href="#selected-works"
                  className="flex items-center group hover:text-green-400 transition-colors duration-200"
                >
                  See Selected Works
                </a>
              </div>
            </div>
          </section>

          <section className="projects-section relative ref={projectsRef} ">
            <div className=" about-section line absolute top-0 left-0 right-0 mx-auto w-5/7 h-px bg-gray-100"></div>

            <div className="container">
              <div className="parent-container">
                <div className="header-container">
                  <div className="section-title text-4xl font-bold">
                    Selected works
                  </div>
                  <div className="section-title text-2xl font-thin">21'-24'</div>
                </div>
              </div>
              <div className="projects-grid">
                {projects.map((project, index) => (
                  <div
                    key={project.id}
                    className={`project-card ${
                      index % 2 === 0 ? "project-right" : "project-left"
                    }`}
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
                        <span className="project-status">
                          {project.status}
                        </span>
                      </div>
                      <div className="project-info">
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-description">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section
            className="about-section bg-black text-white py-10 px-6 md:px-12 lg:px-24 relative"
          >
            <div className=" about-section line absolute top-0 left-0 right-0 mx-auto w-5/7 h-px bg-gray-100"></div>
            <div className="container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="about-text text-left">
                  <div className="section-title text-4xl font-bold">
                    About
                  </div>
                </div>
                <div className="experience">
                  {aboutContent.map((item) => (
                    <p key={item.id} className="text-lg mb-6">
                      {item.text}
                    </p>
                  ))}
                  {experience.map((item) => (
                    <div key={item.id} className="experience-item mb-6">
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
                        <p className="text-gray-400 mt-2">{item.role}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section
            className="known-for-section bg-black text-white py-8 px-6 md:px-12 lg:px-24 relative"
          >
            <div className=" about-section line absolute top-0 left-0 right-0 mx-auto w-5/7 h-px bg-gray-100"></div>
            <div className="container mx-auto">
              <h3 className="known-for-title text-2xl text-gray-400 mb-6">
                What I'm known for
              </h3>
              <ul className="about-text text-right">
                {knownForItems.map((item, index) => (
                  <li key={index} className="known-for-item">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section
            className="about-section bg-black text-white py-10 px-6 md:px-12 lg:px-24 relative"
          >
            <div className=" about-section line absolute top-0 left-0 right-0 mx-auto w-5/7 h-px bg-gray-100"></div>
            <div className="section-title text-4xl font-bold text-center">
              Contact Us
            </div>
            <div className="section-title text-3xl font-bold text-center">
              Reach out for a new project or just say hello
            </div>
            <div className="container mx-auto">
              <div className="container-contact1">
                <div className="contact1-pic js-tilt" data-tilt="">
                  <Image
                    src={msg}
                    alt="IMG"
                    width={500}
                    height={400}
                    priority
                  />
                </div>
                <form
                  className="contact1-form validate-form"
                  onSubmit={handleSubmit}
                >
                  <span className="contact1-form-title">Get in touch</span>
                  <div
                    className="wrap-input1 validate-input"
                    data-validate="Name is required"
                  >
                    <input
                      className="input1"
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <span className="shadow-input1"></span>
                  </div>
                  <div
                    className="wrap-input1 validate-input"
                    data-validate="Valid email is required: ex@abc.xyz"
                  >
                    <input
                      className="input1"
                      type="text"
                      name="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <span className="shadow-input1"></span>
                  </div>
                  <div
                    className="wrap-input1 validate-input"
                    data-validate="Subject is required"
                  >
                    <input
                      className="input1"
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                    />
                    <span className="shadow-input1"></span>
                  </div>
                  <div
                    className="wrap-input1 validate-input"
                    data-validate="Message is required"
                  >
                    <textarea
                      className="input1"
                      name="message"
                      placeholder="Message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                    <span className="shadow-input1"></span>
                  </div>
                  <div className="container-contact1-form-btn">
                    <button className="contact1-form-btn" type="submit">
                      <span>
                        Send Email
                        <i
                          className="fa fa-long-arrow-right"
                          aria-hidden="true"
                        ></i>
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      </main>
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