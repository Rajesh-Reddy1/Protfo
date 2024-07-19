"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, MoonIcon, SunIcon, MenuIcon } from "lucide-react";
import logo from "@/app/component/logo.png";
import img1 from "@/app/component/img1.jpg";
// import img2 from "./img2.png";
import msg from "@/app/component/image.png";
import "@/app/globals.css";


export default function Project3() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const projectData = {
    title: "Tropical Storm Damage Detection Model",
    description: "Developed a deep learning model to automatically identify and classify hurricane damage to coastal infrastructure (residential and commercial buildings) from satellite imagery. Utilized a dataset of pre- and post-Hurricane Maria (2017) satellite images to train a YOLO object detection model for accurate damage assessment.",
    client: "Personal Project", 
    industries: "Environmental Science, Data Science",
    services: "Machine Learning (Python, YOLO Algorithm, Labelme)",
    date: "Feb. 2024 – May 2024",
    images: [img1.src], // Placeholder image
    designPrinciples: [
      {
        title: "Accuracy",
        description: "Achieved high accuracy in detecting and classifying hurricane damage using a well-trained YOLO model.",
      },
      {
        title: "Data-Driven",
        description: "Leveraged a comprehensive dataset of satellite images to train the model and ensure its effectiveness.",
      },
      {
        title: "Automation",
        description: "Automated the damage assessment process, saving time and effort compared to manual methods.",
      },
    ],
    designExplorationImages: [logo.src, msg.src], // Example placeholder images
    nextProject: {
      title: "Product Scrapper",
      description: "Developed a web scraping application to extract product data (name, website, price, link) with 95% accuracy. Built a user-friendly interface using Flask for back-end development and HTML for data presentation. Employed Pandas for efficient data analysis and comparison of extracted product information.",
      image: logo.src, // Example placeholder image
    },
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background text-foreground">
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
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
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
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md 
             bg-primary px-4 py-2 text-sm font-medium 
             text-primary-foreground shadow transition-colors 
             hover:bg-primary/90 focus-visible:outline-none 
             focus-visible:ring-1 focus-visible:ring-ring 
             disabled:pointer-events-none disabled:opacity-50 
             dark:bg-primary-500 dark:text-gray-100" // Added dark mode styles
                    prefetch={false}
                  >
                    View Case Study
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Download CV
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted text-foreground">
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
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background text-foreground">
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
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
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
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background text-foreground">
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
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md 
             bg-primary px-4 py-2 text-sm font-medium 
             text-primary-foreground shadow transition-colors 
             hover:bg-primary/90 focus-visible:outline-none 
             focus-visible:ring-1 focus-visible:ring-ring 
             disabled:pointer-events-none disabled:opacity-50 
             dark:bg-primary-500 dark:text-gray-100"
                  >
                    Email Me
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    LinkedIn
                  </Link>
                </div>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <h3 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Next Project
                </h3>
                <Link
                  href="#"
                  className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  prefetch={false}
                >
                  <div className="text-sm font-medium leading-none group-hover:underline">
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
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t shadow-[0_-4px_6px_rgba(0,0,0,0.1)]">
        <p className="text-xs text-muted-foreground">
          © 2024 Rajesh. All rights reserved.
        </p>
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
        <Button
          variant="ghost"
          size="icon"
          className="bg-background text-foreground shadow-lg hover:bg-accent hover:text-accent-foreground"
        >
          <MenuIcon className="size-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>
    </div>
  );
}
