import React, { useState } from 'react';
import { myProjects } from '../Userdata/navlinks';

const Projects = () => {
  const currentProject = myProjects[0];

const[index,setIndex]=useState(0)
  const handleNav=(direction)=>{
    if(direction==="left"){
      setIndex(currentIndex>0 ? currentIndex-1 : 2)
    }
    if(direction==="right"){
      setCurrentIndex(currentIndex<2 ? currentIndex+1 : 0)
    }
  }
  return (
    <section className='c-space my-20'>
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
              {currentProject.tags.map((tag, index) => {
                return (
                  <div key={index} className='tech-logo'>
                    <img src={tag.path} alt={tag.name} className='w-10 h-10 shadow-sm object-contain' />
                  </div>
                );
              })}
            </div>
            <a className='flex items-center gap-2 cursor-pointer text-white-500' href={currentProject.href} target="_blank" rel='noreferrer'>
              <p>Check Live Site</p>
              <img src="/assets/arrow-up.png" alt="Arrow" className='w-5 h-5' />

            </a>
          </div>
          <div className="flex justify-between items-center mt-7">
            <button className='arrow-btn' onClick={()=> handleNav('previous')}></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;