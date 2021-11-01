import React from "react";
import { DownloadIcon, DocumentTextIcon } from "@heroicons/react/solid";
import { certifications } from "../data";



export default function ResumeNCertifications() {
  return (
    <section id="certifications">
        <div className="container px-5 py-10 mx-auto text-center mt-20">
          <DownloadIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white -mb-20">
            Resume &amp; Certifications
          </h1>
          <div class="min-w-screen min-h-screen bg-random flex items-center justify-center px-5 -mb-20">
            {certifications.map((certification) => (
              <div class="w- mx-auto rounded-3xl shadow-xl bg-gray-800 mb-10 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:bg-gray-800 hover:scale-110">
                <div class="w-full px-5 pt-8 pb-3">
                  <DocumentTextIcon class="text-8xl text-gray-100 leading-none"/>
                  {/* <div class="rounded-full w-44 h-44 mx-auto border-8 border-gray-300 flex items-center justify-center">
                    <i class="mdi mdi-arrow-down text-8xl text-gray-300 leading-none"></i>
                  </div> */}
                </div>
                <div class="px-5 text-center pb-8 border-b border-gray-300">
                  <h1 class="text-2xl break-all font-light text-white leading-tight text-center">{certification.name}</h1>
                  <p class="text-xs text-white">{certification.description}</p>
                </div>
                <ul>
                  <li class="w-full px-5 py-2 border-b border-gray-300">
                    <div class="w-full flex">
                      <div class="flex-grow text-center m-auto">
                        <h3 class="text-sm text-white leading-tight text-center">{certification.file_name}</h3>
                        <p class="text-xs text-white text-center">{certification.size}</p>
                      </div>
                      <div class="w-8 text-right">
                      <DownloadIcon class="text-blue-500 text-xs"/>
                      </div>
                    </div>
                  </li>
                </ul>
                <div class="w-full px-5 py-5 text-center">
                  <a href={certification.file} download>
                  <button class="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-10 py-2 transition-colors">Download</button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>
  );
}