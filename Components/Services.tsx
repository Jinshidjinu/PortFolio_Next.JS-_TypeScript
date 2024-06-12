import { CodeBracketSquareIcon, CommandLineIcon, RocketLaunchIcon } from '@heroicons/react/16/solid'
import React from 'react'

const Services = () => {
  return (
    <div className='bg-gray-950 pt-[4rem] md:pt-[8rem] pb-[5rem]'>
      <p className='heading'>
        My <span className='text-yellow-400'>Services</span>
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white'>
        <div>
            <div className='bg-red-700 hover:scale-110 transform transition-all duration-300 hover:rotate-6 uppercase font-semibold text-center p-[2rem]'>
               <CodeBracketSquareIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]'/>
               <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>
                Frontend
               </h1>
               <p className='text-[15px] text-white'>
                Loreum, ipsum dolar sit amet consectetur adipisicing elite. Eligendi 
                ipsa varitatis , laborum in quaerat debitis voluptas omnis 
                reprehendrit facere architeto!
               </p>
            </div>
        </div>
        <div>
            <div className='bg-orange-700 hover:scale-110 transform transition-all duration-300 hover:rotate-6 uppercase font-semibold text-center p-[2rem]'>
               <RocketLaunchIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]'/>
               <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>
                Backend
               </h1>
               <p className='text-[15px] text-white'>
                Loreum, ipsum dolar sit amet consectetur adipisicing elite. Eligendi 
                ipsa varitatis , laborum in quaerat debitis voluptas omnis 
                reprehendrit facere architeto!
               </p>
            </div>
        </div>
        <div>
            <div className='bg-sky-700 hover:scale-110 transform transition-all duration-300 hover:rotate-6 uppercase font-semibold text-center p-[2rem]'>
               <CommandLineIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]'/>
               <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>
                Full Stack
               </h1>
               <p className='text-[14px] text-white'>
                Loreum, ipsum dolar sit amet consectetur adipisicing elite. Eligendi 
                ipsa varitatis , laborum in quaerat debitis voluptas omnis 
                reprehendrit facere architeto!
               </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Services