import { XMarkIcon } from '@heroicons/react/16/solid';
import React from 'react';

interface Props {
    nav: boolean;
    closeNav: () => void;
}

const MobileNav: React.FC<Props> = ({ nav, closeNav }) => {
    const navAnimation = nav ? "translate-x-0" : "translate-x-[100%]"; // Adjusted to hide the menu when closed

    return (
        <div className={`fixed ${navAnimation} top-0 left-0 right-0 bottom-0 z-[1000] bg-black transition-transform duration-300`}>
            <div className='w-[100vw] h-[100vh] flex flex-col items-center justify-center gap-4'>
                <div className='nav-link-mobile'>Home</div>
                <div className='nav-link-mobile'>SERVICES</div>
                <div className='nav-link-mobile'>ABOUT</div>
                <div className='nav-link-mobile'>PROJECT</div>
                <div className='nav-link-mobile'>BLOG</div>
                <div className='nav-link-mobile'>CONTACT</div>
            </div>
            <div onClick={closeNav} className='absolute top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-yellow-400 cursor-pointer'>
                <XMarkIcon />
            </div>
        </div>
    );
};

export default MobileNav;
