import React from 'react';
import sorasak from '../assets/images/kyoto/sorasak-_UIN-pFfJ7c-unsplash.jpg'

function AboutHero() {
    return (
        <div className='w-full relative h-full'>
            <div className='img w-full h-full bg-cover fixed md:bg-center' alt='Bg'></div>
            <div className='fixed inset-0 bg-gray-900 opacity-70'></div>
            <div className='Container top-32 absoloute grid justify-items-center grid-cols-1 gap-10 md:grid-cols-2'>
                <div className=' h-full text-white flex-col'>
                    <h1 className='font-bold text-base md:text-xl pb-5'>Japan Is beautiful</h1>
                    <p className='font-extralight md:text-[17px] pl-5 md:leading-7'>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever
                        since the 1500s, when an unknown printer took,
                        simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever
                        since the 1500s, when an unknown printer
                    </p>
                </div>
                <img src={sorasak} className='w-[400px] h-[350px] md:w-[500px] md:h-[450px] rounded-3xl drop-shadow-2xl' alt="null"/>
            </div>
        </div>
    )
}

export default AboutHero;