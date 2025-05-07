"use client"
import Image from 'next/image';
import React from 'react';
import projects from '../data/projects.json'

const Projects = ({seeMore}) => {

    const displayedProjects = seeMore === true ? projects : projects.slice(0,3);

    return (  
    <div className='grid gap-10 lg:grid-cols-3 md:gap-20 mt-10 md:mt-20'>
        {displayedProjects.map((project) => (
            <div key={project.id} className="grid grid-cols-1 rounded p-1">
                <div className="flex justify-center items-center">
                    <Image 
                    src={project.imageSrc} 
                    alt={project.name} 
                    className="rounded"
                    width={500}
                    height={500}
                    priority={true}
                    />
                </div>
                
                <div className="flex flex-col justify-center items-start xl:ml-5 mt-4 xl:mt-0">
                    <h3 className="font-bold text-2xl md:text-3xl text-green-800 dark:text-green-500">
                    {project.name}
                    </h3>
                    <p className="font-bold text-lg md:text-2xl mt-1 text-gray-600 dark:text-white">
                    {project.type}
                    </p>
                    <p className="font-bold mt-4 md:mt-5 text-sm text-gray-400 dark:text-white">
                    {project.technologies.map(tech => `• ${tech}`).join(' ')}
                    </p>
                    
                    <a target="_blank" rel="noopener noreferrer" href={project.url}>
                    <button className="flex flex-row text-white group hover:text-green-800 hover:bg-[#FCF7ED] hover:border-green-800 border-2 border-green-800 bg-green-800 font-semibold rounded px-5 py-[10px] mt-6">
                        <span className="mr-4">Visit {project.linktype === "vercel" ? "Page" : "Github"}</span>
                        <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="30" 
                        height="30" 
                        viewBox="0 0 24 24" 
                        className="fill-white group-hover:fill-green-800 dark:fill-green-500 w-[30px] animate-bounce"
                        >
                        <path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path>
                        <path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path>
                        </svg>
                    </button>
                    </a>
                </div>
                
                <hr className="my-6 border-t border-gray-200 dark:border-gray-700" />
            </div>
        ))}
        <br/>
        <hr/>
    </div>
    );
}
 
export default Projects;