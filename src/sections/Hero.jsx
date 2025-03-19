import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, OrbitControls } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive'
import CanvasLoader from '../components/CanvasLoader'
import Laptop from '../components/Laptop'
import { Leva, useControls } from 'leva'
import ReactLogo from '../components/ReactLogo'
import Headphone from '../components/Headphone'
import Controller from '../components/Controller'
import Herocam from '../components/Herocam'
import Connect from '../components/Connect'
const Hero = () => {

  const isMobile = useMediaQuery({ query: '(max-width: 450px)' })
  const isTablet = useMediaQuery({ query: '(min-width: 451px) and (max-width: 768px)' })
  const isLargeDevice = useMediaQuery({ query: '(min-width: 769px)' })

  return (
    <section className='min-h-screen w-full flex-col relative' id='home'>
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className='sm:text-3xl text-2xl font-medium text-white text-center font-generalsans'>
          Hi, Myself Priyanshu <span className='hands-together'>🙏</span>
        </p>
        <p className='hero_tagline text-gray_gradient'> Self Taught Programmer </p>
      </div>

      <div className='w-full h-full absolute inset-0'>


        <Canvas className='w-full h-full'>
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 10, 30]} />
            <Herocam isMobile={isMobile}>
              {isMobile ? (
                <Laptop
                  position={[0, 7, 0.7]}

                  rotation={[0.6, 0, 0]}

                  scale={[7.5, 7.5, 7.5]}
                />  // mobile devices
              ) : isTablet ? (
                <Laptop
                  position={[-2, 8, 2.1]}

                  rotation={[0.6, 0.4, 0.0]}

                  scale={[9, 9, 9]} />  // tablets
              ) : isLargeDevice ? (
                <Laptop
                  position={[-1.1, 6, -0.9]}

                  rotation={[0.8, 0.4, -0.2]}

                  scale={[10, 10, 10]}
                /> // larger devices (above 1025px)
              ) : null}
            </Herocam>


            <group>
              {/* Headphones  */}
              {isTablet ? (
                <Headphone position={[-10, 4.5, 2.5]} scale={[0.25, 0.25, 0.25]} />
              ) : (
                <Headphone position={[-10, 6, 7]} scale={[0.3, 0.3, 0.3]}
                />
              )}

              {/* ReactLogo  */}
              {isTablet ? (
                <ReactLogo position={[10, 11.5, 2.5]} scale={[0.25, 0.25, 0.25]} />
              ) : (
                <ReactLogo position={[13, 10, 5]} scale={[0.3, 0.3, 0.3]} />
              )}

              {isTablet ? (
                <Controller position={[-10, 16, 2.5]} scale={[0.025, 0.025, 0.025]} />
              ) : (
                <Controller position={[-12, 14, 5]} scale={[0.03, 0.03, 0.03]} />
              )}

            </group>

            <ambientLight intensity={3} />

            <directionalLight position={[10, 10, 10]} intensity={0.5} />



          </Suspense>
        </Canvas>

      </div>

      <div className="absolute bottom-7 -mb-16 left-0 sm:left-2  right-0 w-full z-10 c-space  ">
        <a href="#contact" className='w-fit'>
          <Connect name="Let's Connect " isBeam containerClass="sm:w-fit w-full sm:min-w-96 mb-4" />
          <a href="/updatedCV.pdf" download="Priyanshu_Resume.pdf">
            <Connect name="Download Resume" containerClass="sm:w-fit w-full sm:min-w-96 " />
          </a>

        </a>
      </div>
    </section>
  )
}

export default Hero
