import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <div className="px-10 py-20">
      <div className="flex flex-col w-full mb-20 items-center">
        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-black">
          My Projects
        </h1>
        <p className="lg:w-1/2 md:w-2/3 pt-6 pb-5 text-lg md:text-xl text-center">
          Below please find my portfolio showcasing the culmination of my Flatiron School journey, highlighting innovative projects that demonstrate my proficiency in web development and software engineering.
        </p>
      </div>
      <div className="flex flex-wrap -m-4">
        {projects.map((project) => (
          <a
            href={project.link}
            key={project.image}
            className="sm:w-1/2 w-100 p-4">
            <div className="flex relative">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={project.image}
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-black opacity-0 hover:opacity-80">
                <h2 className="tracking-widest text-sm title-font font-medium text-white">
                  {project.subtitle}
                </h2>
                <h1 className="title-font text-lg font-medium text-white mb-3 text-red">
                  {project.title}
                </h1>
                <p className="text-white">{project.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div >
  )
}