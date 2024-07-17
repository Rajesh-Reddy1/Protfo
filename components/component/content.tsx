"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import img1 from "./img1.jpg";
import img2 from "./img2.png";
import logo from "./image.png";
import { useState } from "react";

export function Content() {
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
        
        <section className="projects-section">
          <div className="container">
            <div className="parent-container">
              <div className="header-container">
                <div className="section-title text-4xl font-bold">Selected works</div>
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
        <section className="my-16">
          <h2 className="text-2xl font-bold">About</h2>
          <p className="mt-4 text-lg">
            I\'m a multi-disciplinary product designer with 6 years of
            experience based in London. Currently at Google leading several
            high-priority privacy and safety features on Android – the world’s
            most widely used operating system.
          </p>
          <p className="mt-4 text-lg">
            I am driven by curiosity and my mission to design products that
            balance user experience with business objectives.
          </p>
          <p className="mt-4 text-lg">
            Before Google, I worked as a Senior UX Designer at McKinsey &
            Company, helping various high-profile clients, from banking
            non-profit, retail, energy, and telco, to bring disruptive digital
            products and services to market and help grow clients' own design
            teams.
          </p>
          <p className="mt-4 text-lg">
            In my downtime, I enjoy exploring new destinations with my trusty
            camera.
          </p>
          <Button className="mt-8">Download CV</Button>
          <img
            src="/placeholder.svg"
            alt="Profile"
            className="mt-8 w-48 h-48 rounded-full"
          />
        </section>
        <section className="my-16">
          <h2 className="text-2xl font-bold">What I'm known for</h2>
          <ul className="mt-4 space-y-2 text-lg">
            <li>User Research</li>
            <li>Product Design</li>
            <li>User Experience Design</li>
            <li>Design Strategy</li>
            <li>Motion Design</li>
            <li>High Fidelity Prototyping</li>
            <li>Workshop Facilitation</li>
            <li>Certified SCRUM Master</li>
          </ul>
        </section>
        <section className="my-16">
          <h2 className="text-2xl font-bold">Coaching</h2>
          <p className="mt-4 text-lg">
            Looking for 1:1 mentoring with your design career?
          </p>
          <p className="mt-4 text-lg">
            I'm here to help! I've helped many people land their first job in UX
            over the years. Maybe you're feeling a bit lost at building your
            portfolio, contemplating a career switch into UX design, or just
            need help with some challenges you're facing at work.
          </p>
          <Button className="mt-8">Book now</Button>
          <div className="mt-8 p-4 bg-gray-800 rounded-lg">
            <p className="text-lg text-gray-400">
              "Dousan is very kind and incredibly generous in sharing his past
              experiences and how he tackled the challenges he faced. He was
              super helpful and gave me some great advice on how to take my
              portfolio and/or the roles I'm applying for."
            </p>
            <p className="mt-4 text-lg font-semibold">- Junior UX Designer</p>
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
