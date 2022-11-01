import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <div className='w-full relative h-screen'>
            <div className='img w-full h-screen bg-cover md:bg-center'>
                <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center'>
                    <h1 className='font-black text-white text-[80px] md:text-[170px] tracking-widest'>JAPAN</h1>
                    <Link to='/city'>
                        <button className=' relative font-semibold text-sml border-2  border-white rounded-full flex items-center justify-center px-12 py-2 md:px-14 overflow-hidden transition duration-200 ease-out group'>
                            <span className='absolute flex justify-center items-center w-full h-full transition-all duration-200 text-white -translate-x-full rounded-full bg-sky bg-opacity-10 backdrop-blur-sm  group-hover:translate-x-0 ease'>
                                <AiOutlineArrowRight size={25} />
                            </span>
                            <span className='absolute flex justify-center items-center text-white w-full h-full transition-all duration-200 transform group-hover:-translate-x-full ease'>
                                Explore
                            </span>
                            <span className='relative invisible'>
                                Explore
                            </span>
                        </button>
                    </Link>
                </div>
                <div className='absolute flex flex-col items-center text-white px-[10px] lg:px-[55px] bottom-5 text-[12px]'>
                    <span className='-rotate-90 font-light'>Follow</span>
                    <span className='border-l-2 h-[100px] text-white mb-1 mt-5'></span>
                    <Link to="https://www.facebook.com/">
                        <FaFacebook size={20} className='hover:text-orange' />
                    </Link>
                    <Link to="https://www.instagram.com/" className="hover:text-orange">
                        <FiInstagram size={20} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero