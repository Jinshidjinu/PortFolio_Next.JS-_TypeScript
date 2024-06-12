import { Bars3Icon } from '@heroicons/react/16/solid'
import React from 'react'

interface Props {
    openNav : () => void
}

const Nav = ({openNav}:Props)=>  {
  return (
    <div className='w-[100%] fixed z-[10000] top-0 h-[12vh] bg-gray-950  shadow-md ' >
        <div className='flex items-center  justify-between w-[80%]  h-[100%] mx-auto'>
            <h1 className='flex-[0.6] cursor-pointer text-[25px] text-white font-bold '>
             Port

                <span className='text-yellow-400'>folio</span>
            </h1>
            <div className='nav-link' >Home</div>
            <div className='nav-link' >SERVICES</div>
            <div className='nav-link' >ABOUT</div>
            <div className='nav-link' >PROJECT</div>
            <div className='nav-link' >BLOG</div>
            <div className='nav-link' >CONTACT</div>

            <div onClick={openNav}>
             <Bars3Icon className='w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-300'/>
            </div>
        </div>

    </div>
  )
}

export default Nav