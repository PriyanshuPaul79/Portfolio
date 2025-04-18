import React, { useState } from 'react';
import { myProjects } from '../Userdata/navlinks';
import { Canvas } from "@react-three/fiber";
import { Center } from "@react-three/drei";
import CanvasLoader from '../components/CanvasLoader';
import { Suspense } from 'react'
import Computer from '../components/Computer';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei'



const projectCount = myProjects.length;
const Projects = () => {
  const [projectIdx, setProjectIdx] = useState(0);
  const currentProject = myProjects[projectIdx];

  const handleNav = (direction) => {
    setProjectIdx((previousIdx) => {
      if (direction === "left") {
        return previousIdx === 0 ? projectCount - 1 : previousIdx - 1;
      } else if (direction === "right") {
        return previousIdx === projectCount - 1 ? 0 : previousIdx + 1;
      }
      return previousIdx;
    });
  };

  return (
    <section className='c-space my-20' id='work'>
      <p className="head-text">My Work</p>
      <div className="grid lg:grid-col-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className='flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200 '>
          <div className='absolute top-0 right-0'>
            <img src={currentProject.spotlight} alt="Spotlight" className='w-full h-96 object-cover rounded-xl' />
          </div>

          <div className='p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg'>
            <img src={currentProject.logo} alt="Logo" className='w-10 h-10 shadow-sm object-contain' />
          </div>

          <div className='flex flex-col gap-5 text-white-600 my-5'>
            <p className='text-white text-2xl font-semibold animatedText '>{currentProject.title}</p>

            <p className='animatedText '>{currentProject.desc} </p>

            <p className='animatedText '>{currentProject.subdesc} </p>
          </div>


          <div className='flex items-center justify-between flex-wrap gap-5'>
            <div className='flex items-center gap-2'>
              {currentProject.tags.map((tag, index) => (
                  <div key={index} className='tech-logo'>
                    <img src={tag.path} alt={tag.name} className='w-10 h-10 shadow-sm object-contain' />
                  </div>
              ))}
            </div>

            
            <a
              className="flex items-center gap-2 cursor-pointer text-white-600 relative z-10"
              href={currentProject.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                if (!currentProject.href) {
                  e.preventDefault(); // Prevents broken links from navigating
                  alert("No live site available!");
                }
              }}>
              <p>Check Live Site</p>
              <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
            </a>
          </div>
          <div className="flex justify-between items-center mt-7">
            <button className='arrow-btn' onClick={() => handleNav('left')}>
              <img src="/assets/left-arrow.png" alt="left arrow" className='w-4 h-4' />
            </button>
            <button className='arrow-btn' onClick={() => handleNav('right')}>
              <img src="/assets/right-arrow.png" alt="right arrow" className='w-4 h-4' />
            </button>
          </div>
        </div>
        <div className="border border-black-300 bg-black-900 rounded-lg min-h-[300px] md:min-h-[500px] w-full">
          <Canvas className='w-full h-full'>
            <ambientLight intensity={Math.PI} />
            <directionalLight position={[10, 10, 5]} />
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <group scale={2.3} position={[0, -3, 0]} rotation={[0, -0.1, 0]}> <Computer texture={currentProject.texture} /> </group>
              </Suspense>
            </Center>
            <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />

          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Projects;