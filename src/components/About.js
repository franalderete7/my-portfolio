import React from "react";
import Typewriter from 'typewriter-effect';




export default function About() {
    return (
      <section id="about">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Hi, I'm Francisco.
              <br className="hidden lg:inline-block"/>
              <Typewriter options={{loop:true}} onInit={(typewriter) => {
                typewriter
                .typeString('I love to build amazing apps.')
                .pauseFor(2000)
                .deleteAll()
                .start()
                .deleteAll()
                .start()
              }} 
               />
            </h1>
            <p className="mb-8 mr-14 w-full leading-relaxed">
              I am a Spanish-Argentine full stack web developer. I am currently completing
              a +800-hour full stack development bootcamp at Henry. I enjoy building
              React applications. I also have great interest for the Fintech industry.
            </p>
            <div className="flex justify-center">
              <a
                href="#contact"
                className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                Work With Me
              </a>
              <a
                href="#projects"
                className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                See My Past Work
              </a>
            </div>
          </div>
          <div className="lg:w-max-lg lg:w-lg md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded max-w-sm max-h-60 ml-36"
              alt="hero"
              src="./AvatarMaker.svg"
            />
          </div>
        </div>
      </section>
    );
  }