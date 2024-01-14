import { BadgeCheckIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <div className="container px-5 py-10 mx-auto">
      <div className="text-center mb-20">
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-black mb-4">
          My Skills
        </h1>
        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          Explore my repertoire of technical skills, encompassing front-end technologies backed by a solid foundation in back-end database management and routing.
        </p>
      </div>
      <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
        {skills.map((skill) => (
          <div key={skill} className="p-2 sm:w-1/2 w-full">
            <div className="bg-black text-white rounded-full flex p-4">
              <BadgeCheckIcon className="text-gold w-6 h-6 mr-4" />
              <span>
                {skill}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}