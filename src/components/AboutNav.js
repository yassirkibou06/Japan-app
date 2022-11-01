import React from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';


function AboutNav() {
    return (
        <>
            <div className='Container'>
                <div className='flex justify-between items-center '>
                    <h1 className='font-black text-sm tracking-wide'><span className='text-orange'>J</span>apan</h1>
                    <div className='flex justify-center items-center'>
                        <Link to='/'>
                        <div className="bg-sky w-10 h-10 rounded-full flex justify-center items-center transition duration-400 ease-in-out hover:bg-orange hover:drop-shadow-lg ">
                            <AiOutlineHome size={20} cursor={'pointer'} />
                        </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>

    )
}

export default AboutNav;