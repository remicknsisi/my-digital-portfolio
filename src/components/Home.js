import React from "react";
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="flex px-10 py-20 flex-col md:flex-row items-center">
      <div className="max-h-full text-center md:text-left md:w-1/2 md:pr-16">
        <h1 className="text-3xl md:text-5xl mb-4 font-medium">
          I'm Sisi. I'm so happy you're here!
        </h1>
        <p className="mb-8 text-left text-lg md:text-xl">
          As a certified software engineer from Flatiron School, I am so excited to transition into the dynamic and rapidly evolving tech industry. Combining my full-stack coding skills with a strong background in both digital marketing and creative endeavors, I am eager to contribute my diverse skill set to tackle challenges and drive innovation in tech.
        </p>
        <div className="flex flex-wrap justify-center md:justify-start">
          <button
            onClick={() => navigate('/contact')}
            className="flex-shrink-0 cursor-pointer text-offWhite bg-red py-2 px-6 hover:bg-black hover:text-white text-lg rounded-full shadow-md">
            Get In Touch
          </button>
          <button
            onClick={() => navigate('/projects')}
            className="flex-shrink-0 cursor-pointer ml-4 text-offWhite bg-red py-2 px-6 hover:bg-black hover:text-white rounded text-lg rounded-full shadow-md">
            See My Work
          </button>
        </div>
      </div>
      <div className="md:w-1/2 p-10">
        <img
          className="max-h-96 md:max-h-full rounded-full border-8 shadow-2xl"
          alt="hero"
          src="./Smakk_Sienna_0566.JPG"
        />
      </div>
    </div>
  )
}