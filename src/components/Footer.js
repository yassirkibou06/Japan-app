import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';

function Footer() {
    return (
        <footer className='px-[15px] py-[10px] m-[0px] lg:px-[55px] bg-white-20 flex justify-center items-center flex-col h-[200px] z-20'>
            <div className='mb-3 font-bold text-sky'>
                <ul className='flex'>
                    <li className='hover:text-orange'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='hover:text-orange'>
                        <Link to="/about">About</Link>
                    </li>
                    <li className='hover:text-orange'>
                        <Link to="/city">City</Link>
                    </li>
                </ul>
            </div>
            <div className='flex item-center text-sky'>
                <Link to="https://www.facebook.com/">
                    <FaFacebook size={20} className='hover:text-orange' />
                </Link>
                <Link to="https://www.instagram.com/" className="hover:text-orange">
                    <FiInstagram size={20} />
                </Link>
            </div>
            <p className='text-sky font-normal text-[12px]'>&copy; Copyright 2022 Japan. All rights reserved.</p>
        </footer>
        
    )
}

export default Footer