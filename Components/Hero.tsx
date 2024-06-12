
import React from 'react'
import Particle from '../Components/Particle'
import TextEffect from './TextEffect'
import Image from 'next/image'
import img from '../public/assets/images/jinshi.jpg'
import { ArrowDownTrayIcon, PlayCircleIcon } from '@heroicons/react/16/solid'
const Hero = () => {
  return (
    <div className='h-[88vh] bg-hero mt-[10vh]'>
        <Particle/>

        <div className='w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center'>

          <div>
            <h1 className='text-[35px] md:text-[50px] text-white font-bold'>
                HI, I'M <span className='text-yellow-400'>Jinshid!</span>
            </h1>
            <TextEffect/>
             <p className='mt-[2rem] text-[18px] text-gray-400 text-justify'>
             Self-taught MERN Stack Developer with a proven ability to adapt in both selfstarting and collaborative environments while staying focused on achieving high
             quality results under strict deadlines.
             </p>

             <div className='mt-[2rem] flex flex-col space-y-6 sm:flex sm:flex-row  items-center sm:space-x-6'>

              <button className='px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-sky-300 text-black flex items-center space-x-2'>
                <p>Download CV</p>
                <ArrowDownTrayIcon className='w-[1.6rem] h-[1.7rem] text-black'/>
              </button>

              <button className='flex items-center space-x-2 '>
                <PlayCircleIcon className='w-[4rem] h-[4rem] mb-4 hover:text-yellow-400 transition-all duration-200 text-green-400 '/>
                <p className='text-[20px] font-semibold text-white'>Watch The Video</p>
              </button>
                
             </div>
          </div>
        <div className='w-[500px] hidden bg-orange-600 relative lg:flex items-center rounded-full h-[500px]'>
        
         <Image src={img} alt='user' layout='fill'  className='object-cover rounded-full'/>

        </div>
        </div>
    </div>
  )
}

export default Hero