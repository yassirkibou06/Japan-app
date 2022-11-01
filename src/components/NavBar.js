import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { HiBars3BottomRight } from 'react-icons/hi2';
import { IoMdContact } from 'react-icons/io';
import { AiOutlineHome } from 'react-icons/ai';
import { FaWpexplorer } from 'react-icons/fa';
import { TiDelete } from 'react-icons/ti';


function NavBar() {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    }
    //* click outside to close ////
    let menuRef = useRef()
    useEffect(() => {
        let handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setNav(false);
            }
        };

        document.addEventListener('mousedown', handler);

        return () => {
            document.removeEventListener('mousedown', handler);
        }
    });
    return (
        <>
            <div className='Container'>
                <div className='flex justify-between items-center '>
                    <h1 className='font-black text-sm tracking-wide'><span className='text-orange'>J</span>apan</h1>
                    <div className='flex justify-center items-center'>
                        <Link to='/Login'>
                            <div className='font-bold text-xs bg-orange py-[7px] px-[18px] md:py-[10px] md:px-[20px] mr-5 rounded-full'>
                                Login In
                            </div>
                        </Link>
                        <div onClick={handleNav}>
                            <HiBars3BottomRight size={30} cursor={'pointer'} className="hover:text-orange" />
                        </div>
                    </div>
                </div>
                {/* sideBar */}
                <div ref={menuRef} className={nav
                    ? 'px-[0px] z-20 fixed top-[0%] right-[0%] h-screen w-30 lg:w-35 bg-sky shadow-2xl peer-focus:right-0 peer:transition duration-500 ease-in-out ctn'
                    : 'fixed top-0 right-[-100%] peer:transition duration-1000 peer-visited:hidden h-screen'}>
                    <ul className='sidBar'>
                        <div onClick={handleNav}>
                            <TiDelete size={25} className="deleteBtn" cursor={'pointer'} />
                        </div>
                        <li>
                            <AiOutlineHome size={20} />
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <IoMdContact size={20} />
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <FaWpexplorer size={20} />
                            <Link to="/city">City</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default NavBar
