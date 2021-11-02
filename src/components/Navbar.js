import { ArrowRightIcon } from "@heroicons/react/solid";
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10 absolute">
      <div className="container mx-auto flex flex-wrap p-5 flex-col sm:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Francisco Alderete
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            Past Work
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          <a href="#certifications" className="mr-5 hover:text-white">
            Resume &amp; Certifications
          </a>
            <a href='https://github.com/franalderete7' target='_blank' rel="noopener noreferrer">
            <FaGithub className='ml-5 hover:text-white' ></FaGithub>
            </a>
            <a href='https://twitter.com/franalderete7' target='_blank'rel="noopener noreferrer">
            <FaTwitter className='ml-7 hover:text-white'></FaTwitter>
            </a>
            <a href='https://www.linkedin.com/in/francisco-alderete/' target='_blank' rel="noopener noreferrer">
            <FaLinkedin className='ml-7 hover:text-white'></FaLinkedin>
            </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}
