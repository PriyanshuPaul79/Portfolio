import React, { useState } from 'react'
import Globe from 'react-globe.gl'
import { temp } from 'three/webgpu'
import Connect from '../components/Connect'

const About = () => {

    const[isCopied,setIsCopied]=useState(false);

    const copyMail=()=>{
        navigator.clipboard.writeText('Priyanshupaul32@gmail.com')
        setIsCopied(true);
        setTimeout(()=>{
            setIsCopied(false)
        },2000)
    }

  return (
    <section className='c-space my-20' id='about'>
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
                    <p className='grid-headtext'>I can work remotely acoss most time zones </p>
                    <p className="grid-subtext">I'm from India, from kolkata</p>
                    <Connect name ='Connect with me' isBeam={true} containerClass='bg-[#ff0066]'/>
                </div>
            </div>


            <div className="xl:col-span-2 xl:row-span-3" > 
                            <div className="grid-container">
                                <img src="/assets/leet.png" className='w-full object-contain ' alt="" />
                                <p className='grid-headtext'>Problem Solving
                                Passionate about algorithmic problem-solving. </p>
                                <p className='grid-subtext'>My problem-solving journey reflects my proficiency in data structures, algorithms, and coding efficiency, helping me sharpen my logical thinking and optimize solutions. I continuously challenge myself with new problems, contests, and real-world coding scenarios to improve my skills.</p>
                            </div>

                        </div>

            <div className="xl:col-span-1 xl:row-span-2">
                <div className="grid-container">
                    <img src="/assets/contactMe.jpg" alt="Contact me"  className='lg:w-full lg:h-full md:h-[126px] md:w-80 sm:h-[276px] sm:w-40   h-fit object-cover sm:object-fill '/>

                    <div className="space-y-2">
                        <p className="grid-subtext text-center"> Contact me </p>
                        <div className='copy-container' onClick={copyMail}>
                            <img src={isCopied ? 'assets/tick.svg' : 'assets/copy.svg' } alt="copy" />
                            <p className='lg:text-2xl md:text-xl font-medium text-grey_gradient text-white '>PriyanshuPaul32@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>

                        

        </div>
    </section>
  )
}

export default About