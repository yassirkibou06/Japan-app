import React from 'react';
/*import Gallery from '../DataGalery';*/
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { Navigation, Autoplay, Pagination } from 'swiper';
import List from '../DataGalery'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

function CityContent() {
  return (
    <>
      <div className='w-full h-[120%] m-0'>
        <Swiper
          // install Swiper modules
          modules={[Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          style={{
            "--swiper-navigation-color": "white",
            "--swiper-pagination-color": "#FFF",
            "--swiper-navigation-size": "65px"
          }}
        >
          <div className="absolute z-10 top-[35%] md:left-[85%] left-[75%]">
            <BsArrowLeft className=" swiper-button-prev hover:text-orange" />
          </div>
          {/*  //////image slider/////  */}
          {List.map((item, index) => {
            return (
              <SwiperSlide key={index} className='w-full overflow-hidden'>
                <div className='w-full'>
                  <h1 className='Container tracking-tight absolute top-32 text-lg md:text-[60px] text-white font-bold'>{item.title}</h1>
                  <div className='absolute inset-0 bg-gray-900 opacity-50'></div>
                  <div style={{ backgroundImage: `url(${item.img})` }} className='h-[120%] bg-cover bg-right'>
                    <Swiper
                      // install Swiper modules
                      modules={[Navigation,Pagination]}
                      centeredSlides={true}
                      grabCursor={true}
                      pagination={{
                        clickable: true,
                      }}
                      spaceBetween={0}
                      slidesPerView={4}
                      /*autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                      }}*/
                      navigation={{
                        prevEl: ".swiper-button-prev",
                        nextEl: ".swiper-button-next",
                      }}

                      style={{
                        "--swiper-navigation-color": "white",
                        "--swiper-pagination-color": "#FFF",
                        "--swiper-navigation-size": "65px"
                      }}
                      className='top-[40%] md:top-[35%] right-[50%] w-[210%] md:w-[150%]'
                    >
                      {/*////////// Cards /////////*/}
                      {item.city.map((it, index) => {
                        return (
                          <SwiperSlide key={index} className='pl-5 md:pl-5 pr-5 mt-10'>
                            <div style={{ backgroundImage: `url(${it.img})` }} className='transition duration-500 ease-in hover:scale-105 h-[350px] bg-cover bg-center rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.50)] relative'>
                            <h1 className="transition duration-500 tracking-tight absolute top-[79%] md:top-[78%] leading-5 left-[10%] md:left-[10%] text-[13px] md:text-sm text-white font-bold">{it.title}</h1>
                            <p className='transition duration-500 text-sky absolute top-[89%] md:top-[90%] left-[10%] text-[10px] md:text-xs'>{it.p}</p>
                            </div>
                          </SwiperSlide>
                        )
                      })}
                    </Swiper>
                  </div>
                </div>
                {/************ */}
              </SwiperSlide>
            )
          })}
          <div className="absolute z-10 top-[30%] right-[5%]">
            <BsArrowRight className=" swiper-button-next hover:text-orange" />
          </div>
        </Swiper>
        {/* //////////*/}
      </div>
    </>
  )
}

export default CityContent;