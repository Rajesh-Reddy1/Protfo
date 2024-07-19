"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, MoonIcon, SunIcon, MenuIcon } from "lucide-react";
import next from "./images/next.png";
import game from "./images/game.png";
import image from "./images/image.png";
import "@/app/globals.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function EmailButton() {
  const [showEmail, setShowEmail] = useState(false);

  const handleClick = () => {
    setShowEmail(true);
  };

  return (
    <div>
      {showEmail ? (
        <span className="inline-flex h-9 items-center justify-center rounded-md 
        bg-primary px-4 py-2 text-sm font-medium 
        text-primary-foreground shadow transition-colors 
        hover:bg-primary/90 focus-visible:outline-none 
        focus-visible:ring-1 focus-visible:ring-ring 
        disabled:pointer-events-none disabled:opacity-50 
        dark:bg-primary-500 dark:text-gray-100">
          mrrajeshreddy1@gmail.com
        </span>
      ) : (
        <button
          onClick={handleClick}
          className="inline-flex h-9 items-center justify-center rounded-md 
          bg-primary px-4 py-2 text-sm font-medium 
          text-primary-foreground shadow transition-colors 
          hover:bg-primary/90 focus-visible:outline-none 
          focus-visible:ring-1 focus-visible:ring-ring 
          disabled:pointer-events-none disabled:opacity-50 
          dark:bg-primary-500 dark:text-gray-100"
        >
          Email Me
        </button>
      )}
    </div>
  );
}

export default function Project1() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const projectData = {
    title: "Chess Multiplayer",
    description: "Developed a two-player chess game, focusing on efficient algorithms and user-friendly interface. Utilized object-oriented programming principles to create modular and reusable code components. Programmed an intuitive graphical user interface (GUI) using Pygame for seamless user interaction.",
    client: "Personal Project", 
    industries: "Game Development",
    services: "Game Development (Python, Pygame)",
    date: "Mar. 2023 – Dec. 2023",
    images: [game.src], 
    designPrinciples: [
      {
        title: "Game Logic",
        description: "Implemented the rules of chess with accurate game logic and move validation.",
      },
      {
        title: "User Interface",
        description: "Developed a visually appealing and user-friendly interface using Pygame for seamless gameplay.",
      },
      {
        title: "Modular Design",
        description: "Utilized object-oriented programming principles to create modular and reusable code components for better maintainability and scalability.",
      },
    ],
    designExplorationImages: [ image.src], // Example placeholder images
    nextProject: {
      title: "ChatApp",
      description: "Designed and deployed a real-time chat platform supporting over 1000 concurrent users. Implemented user authentication and data encryption to ensure secure communication. Leveraged Firebase’s real-time database for instant message delivery and synchronization.",
      image: next.src, 
    }, // No next project in this case
  
  };

  // References and Animations
  const [ref1, inView1] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });
  const [ref2, inView2] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });
  const [ref3, inView3] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });
  const [ref4, inView4] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });
  const [ref5, inView5] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();
  const controls5 = useAnimation();

  useEffect(() => {
    if (inView1) {
      controls1.start("visible");
    } else {
      controls1.start("hidden");
    }
  }, [controls1, inView1]);

  useEffect(() => {
    if (inView2) {
      controls2.start("visible");
    } else {
      controls2.start("hidden");
    }
  }, [controls2, inView2]);

  useEffect(() => {
    if (inView3) {
      controls3.start("visible");
    } else {
      controls3.start("hidden");
    }
  }, [controls3, inView3]);

  useEffect(() => {
    if (inView4) {
      controls4.start("visible");
    } else {
      controls4.start("hidden");
    }
  }, [controls4, inView4]);

  useEffect(() => {
    if (inView5) {
      controls5.start("visible");
    } else {
      controls5.start("hidden");
    }
  }, [controls5, inView5]);

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
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

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className={`flex flex-col min-h-screen ${isDarkMode ? "" : "dark"}`}>
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between bg-background text-foreground">
        <Link
          href="/"
          className="flex items-center justify-center"
          prefetch={false}
        >
          <ArrowLeftIcon className="size-6 mr-2" />
          <span className="sr-only">Back to homepage</span>
        </Link>
        <button
          onClick={() => setIsDarkMode((prev) => !prev)}
          className="inline-flex h-9 items-center justify-center rounded-md bg-muted px-4 text-sm font-medium text-muted-foreground shadow-sm transition-colors hover:bg-muted/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        >
          {isDarkMode ? (
            <MoonIcon className="size-5" />
          ) : (
            <SunIcon className="size-5" />
          )}
          <span className="sr-only">Toggle dark mode</span>
        </button>
      </header>
      <main className="flex-1">
        <motion.section
          ref={ref1}
          animate={controls1}
          initial="hidden"
          variants={projectVariants}
          className="w-full py-12 md:py-24 lg:py-32 bg-background text-foreground"
        >
          <div className="container px-4 md:px-6">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div className="grid gap-6">
                {projectData.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    width="550"
                    height="310"
                    alt="Project Image"
                    className="pro-Image mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                  />
                ))}
              </div>
              <div className="flex flex-col items-start space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Featured Project
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  {projectData.title}
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {projectData.description}
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="https://github.com/Rajesh-Reddy1/Chess-Game-Two-player"
                    className="inline-flex h-9 items-center justify-center rounded-md 
             bg-primary px-4 py-2 text-sm font-medium 
             text-primary-foreground shadow transition-colors 
             hover:bg-primary/90 focus-visible:outline-none 
             focus-visible:ring-1 focus-visible:ring-ring 
             disabled:pointer-events-none disabled:opacity-50 
             dark:bg-primary-500 dark:text-gray-100" // Added dark mode styles
                    prefetch={false}
                  >
                    Visit Now
                  </Link>
                  <Link
                    href="https://drive.google.com/file/d/11paswckZoNXOt3oBO5INXh51QyGhJRZS/view?usp=sharing"
                    className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Download CV
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
        <motion.section
          ref={ref2}
          animate={controls2}
          initial="hidden"
          variants={projectVariants}
          className="w-full py-12 md:py-24 lg:py-32 bg-muted text-foreground"
        >
          <div className="container px-4 md:px-6">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Project Overview
                </h2>
                <div className="grid gap-4 py-6">
                  <div className="grid gap-1">
                    <h3 className="text-lg font-bold">Client</h3>
                    <p className="text-muted-foreground">
                      {projectData.client}
                    </p>
                  </div>
                  <div className="grid gap-1">
                    <h3 className="text-lg font-bold">Industries</h3>
                    <p className="text-muted-foreground">
                      {projectData.industries}
                    </p>
                  </div>
                  <div className="grid gap-1">
                    <h3 className="text-lg font-bold">Services</h3>
                    <p className="text-muted-foreground">
                      {projectData.services}
                    </p>
                  </div>
                  <div className="grid gap-1">
                    <h3 className="text-lg font-bold">Date</h3>
                    <p className="text-muted-foreground">{projectData.date}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <h3 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Project Description
                </h3>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {projectData.description}
                </p>
              </div>
            </div>
          </div>
        </motion.section>
        <motion.section
          ref={ref3}
          animate={controls3}
          initial="hidden"
          variants={projectVariants}
          className="w-full py-12 md:py-24 lg:py-32 bg-background text-foreground"
        >
          <div className="container px-4 md:px-6">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div className="grid gap-6">
                {projectData.designExplorationImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    width="550"
                    height="310"
                    alt="Project Image"
                    className="pro-Image mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                  />
                ))}
              </div>
              <div className="flex flex-col items-start space-y-4">
                <h3 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Design Principles
                </h3>
                <ul className="grid gap-4">
                  {projectData.designPrinciples.map((principle, index) => (
                    <li key={index}>
                      <div className="grid gap-1">
                        <h4 className="text-xl font-bold">{principle.title}</h4>
                        <p className="text-muted-foreground">
                          {principle.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.section>
        <motion.section
          ref={ref4}
          animate={controls4}
          initial="hidden"
          variants={projectVariants}
          className="w-full py-12 md:py-24 lg:py-32 bg-background text-foreground"
        >
          <div className="container px-4 md:px-6">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div className="flex flex-col items-start space-y-4">
                <h3 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  {"Let's Talk"}
                </h3>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {
                    "I'm always excited to discuss new projects and collaborate with talented teams. Feel free to reach out via email or connect with me on LinkedIn."
                  }
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <EmailButton></EmailButton>
                  <Link
                    href="https://www.linkedin.com/in/rajesh-reddy1/"
                    className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    LinkedIn
                  </Link>
                </div>
              </div>
              <div className=" flex flex-col items-start space-y-4">
                <h3 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Next Project
                </h3>
                <Link
                  href="./pro1"
                  className=" group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  prefetch={false}
                >
                  <div className=" text-sm font-medium leading-none group-hover:underline">
                    {projectData.nextProject.title}
                  </div>
                  <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    {projectData.nextProject.description}
                  </div>
                  <img
                    src={projectData.nextProject.image}
                    width="550"
                    height="310"
                    alt="Next Project"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                  />
                </Link>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t shadow-[0_-4px_6px_rgba(0,0,0,0.1)]">
        <p className="text-xs text-muted-foreground">
          © 2024 Rajesh. All rights reserved.
        </p>
        <div className="items-center space-x-4">
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
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Privacy
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Terms
          </Link>
        </nav>
      </footer>
      <div className="fixed bottom-4 right-4">
        
      </div>
    </div>
  );
}