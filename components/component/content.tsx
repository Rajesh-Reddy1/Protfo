"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import img1 from "./img1.jpg";
import img2 from "./img2.png";
import logo from "./image.png";
import { useEffect, useState } from "react";

export function Content() {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);
  const HoverWord = ({ children, className }: any) => {
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
  };
  const projects = [
    {
      id: 1,
      title: "Android Private space",
      description: "Protect your apps from prying eyes",
      image: img1.src,
      status: "🟢 Completed",
    },
    {
      id: 2,
      title: "Platform McKinsey",
      description: "Streamlining FinalDocs submission",
      image: img2.src,
      status: "🟢 Compelted",
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

  const toggleItem = (itemId: number) => {
    setExpandedItems((prevExpanded) =>
      prevExpanded.includes(itemId)
        ? prevExpanded.filter((id) => id !== itemId)
        : [...prevExpanded, itemId]
    );
  };
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
  return (
    <div className="bg-black text-white">
      <main className=" align-middle px-6 md:px-12 lg:px-24">
        <div className="bg-black text-white min-h-screen">
          <header className="flex items-center justify-between p-6">
            <img src={logo.src} className="logo-image" />
            <nav className="flex items-center space-x-4">
              <button className="text-white">
                <MenuIcon className="menu h-6 w-6" />
              </button>
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

                <a href="#selected-works" className="flex items-center group">
                  <span className="group-hover:text-green-400 transition-colors duration-200">
                    See Selected Works
                  </span>
                </a>
              </div>
            </div>
          </section>
        </div>

        <section className="projects-section relative">
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
                      <img
                        src={project.image}
                        alt={project.title}
                        className="project-image"
                      />
                      <span className="project-status">{project.status}</span>
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

        <section className="about-section bg-black text-white py-10 px-6 md:px-12 lg:px-24 relative">
          <div className=" about-section line absolute top-0 left-0 right-0 mx-auto w-5/7 h-px bg-gray-100"></div>
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="about-text text-left">
                <div className="section-title text-4xl font-bold">About</div>
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
                      onClick={() => toggleItem(item.id)} // Toggle expansion
                    >
                      <h3 className="text-xl font-bold">{item.company}</h3>
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

        <section className="known-for-section bg-black text-white py-8 px-6 md:px-12 lg:px-24 relative">
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
        

        <section className="contact-section bg-black text-white py-16 px-6 md:px-12 lg:px-24 relative">
      <div className="container mx-auto">
        <h2 className="contact-title text-3xl font-bold mb-12">
          Reach out for a new project or just say hello
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left Column: Contact Form */}
          <div className="contact-form">
            <h3 className="text-xl font-bold mb-6">Send Us a Message</h3>
            <form>
              <div className="form-field mb-4">
                <label htmlFor="name" className="block text-gray-400">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-gray-800 text-white border border-gray-700 rounded px-4 py-2 focus:outline-none focus:border-green-500"
                  placeholder="Your Name"
                />
              </div>
              <div className="form-field mb-4">
                <label htmlFor="email" className="block text-gray-400">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-gray-800 text-white border border-gray-700 rounded px-4 py-2 focus:outline-none focus:border-green-500"
                  placeholder="Your Email"
                />
              </div>
              <div className="form-field mb-4">
                <label htmlFor="subject" className="block text-gray-400">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full bg-gray-800 text-white border border-gray-700 rounded px-4 py-2 focus:outline-none focus:border-green-500"
                  placeholder="Subject"
                />
              </div>
              <div className="form-field mb-8">
                <label htmlFor="message" className="block text-gray-400">
                  Your Message
                </label>
                <textarea
                  id="message"
                  className="w-full bg-gray-800 text-white border border-gray-700 rounded px-4 py-2 focus:outline-none focus:border-green-500"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                SUBMIT
              </button>
            </form>
          </div>

          {/* Right Column: Contact Info */}
          <div className="contact-info">
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <h4 className="text-gray-400 mb-4">Where to Find Us</h4>
            <p className="text-gray-400 mb-4">
              1600 Amphitheatre Parkway <br />
              Mountain View, CA <br />
              94043 US
            </p>
            <h4 className="text-gray-400 mb-4">Email Us At</h4>
            <p className="text-gray-400 mb-4">
              contact@glintsite.com <br />
              info@glintsite.com
            </p>
            <h4 className="text-gray-400 mb-4">Call Us At</h4>
            <p className="text-gray-400">
              Phone: (+63) 555 1212 <br />
              Mobile: (+63) 555 0100 <br />
              Fax: (+63) 555 0101
            </p>
            {/* Social Media Icons */}
            <div className="social-media mt-4">
              <a href="#" className="text-gray-400">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400">
                <i className="fab fa-behance"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>



    
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
