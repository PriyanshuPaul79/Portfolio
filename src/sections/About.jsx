import React from 'react'
import Globe from 'react-globe.gl'
import { temp } from 'three/webgpu'

const About = () => {
  return (
    <section className='c-space my-20'>
        <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-1 gap-5 h-full overflow-x-hidden'>
            <div className='col-span-1 xl:row-span-3 '>
                <div className='grid-container'>
                    <img src="/assets/me.jpg" alt="Me" className='w-full sm:h-[276px] h-fit object-contain ' />
                    <div>
                        <p className='grid-headtext '>Hi, myself Priyanshu Paul</p>
                        <p className='grid-subtext '>I am a passionate Frontend Developer. Hurgry for learning new things everyday. AI enthusiast </p>
                    </div>
                </div>
            </div>

            <div className='col-span-1 xl:row-span-3 '>
                <div className="grid-container md:items-center ">
                    <img src="/assets/TS.jpeg" alt="Tech Stack " className='w-full lg:ml-7 sm:w-[276px] h-fit  object-contain ' />
                    <div>
                        <p className="grid-headtext">Tech Stack</p>
                        <p className='grid-subtext'>Have worked with all these tech in projects but proficient with Java, Python, JS with focus on React </p>
                    </div>
                </div>
            </div>


            <div className='col-span-1 xl:row-span-4 '>
                <div className='grid-container'>
                    <div className='rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center  '>
                        <Globe
                        height={326}
                        width={326}
                        backgroundColor='rgba(0,0,0,0)'
                        backgroundImageOpacity={0.5}
                        showAtmosphere
                        showGraticules
                        globeImageUrl={"/assets/earth-night.jpg"}
                        bumpImageUrl={"/assets/earth-topology.png"}
                        labelsData={[{
                            lat: 23.3465,
                            lng: 86.379,
                            text:"Namaste I'm here",
                            color: "white",
                            size:24
                        }]}
                        
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About