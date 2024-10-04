import React, { useState } from 'react';
import '../Rotate/Rotate.css';
// import Swiper from 'swiper';
// import { SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css';
function Rotate() {

    // const [activeIndex, setActiveIndex] = useState(0);

    // const handleSlideChange = (Swiper) => {
    //   setActiveIndex(Swiper.activeIndex);
    // };
    return (
        <>
            <div className="relative flex items-center justify-center h-screen bg-teal-800">
                <div className="relative z-10 p-8 bg-white    rounded-full">
                    <img
                        src="/assets/Images/Rotate/Valluvas Logo 1.png"
                        alt="Center"
                        className="h-32 w-32"
                    />
                </div>
                <div className=' absolute  '>


                    <img className=' counter-rotates w-[400px]' src="/assets/Images/sign/dot 4.png" alt="" />
                </div>
                <div className="absolute w-[590px] h-[590px] rotate-ring">
                    <div className="absolute inset-0 flex items-center justify-center ">
                        <div className="absolute  top-0 left-44">
                            <img
                                src="/assets/Images/Rotate/image-from-rawpixel-id-14691595-png 2.png"
                                alt="Image 1"
                                className="h-24 w-24  border border-yellow-300 p-2  rounded-lg bg-white counter-rotate"
                            />
                        </div>
                        <div className="absolute top-0 right-44">
                            <img
                                src="/assets/Images/Rotate/image-from-rawpixel-id-13020188-png 1.png"
                                alt="Image 2"
                                className="h-24 w-24  border border-yellow-300 p-2 bg-white counter-rotate"
                            />
                        </div>
                        <div className="absolute  bottom-0 left-44">
                            <img
                                src="/assets/Images/Rotate/image 54.png"
                                alt="Image 3"
                                className="h-24 w-24  border border-yellow-300 p-2 bg-white counter-rotate"
                            />
                        </div>
                        <div className="absolute  bottom-0 right-44 ">
                            <img
                                src="/assets/Images/Rotate/image 55.png"
                                alt="Image 4"
                                className="h-24 w-24  border border-yellow-300 p-2  bg-white counter-rotate"
                            />
                        </div>
                        <div className="absolute  bottom-44  right-0">
                            <img
                                src='/assets/Images/Rotate/image 53.png'
                                alt="Image 5"
                                className="h-24 w-24  border border-yellow-300 p-2 bg-white counter-rotate"
                            />
                        </div>
                        <div className="absolute  top-44  right-0">
                            <img
                                src="/assets/Images/Rotate/image 52.png"
                                alt="Image 6"
                                className="h-24 w-24  border border-yellow-300 p-2 bg-white counter-rotate"
                            />
                        </div>
                        <div className="absolute  top-44  left-0">
                            <img
                                src="/assets/Images/Rotate/imaget.png"
                                alt="Image 7"
                                className="h-24 w-24  border border-yellow-300 p-2 bg-white counter-rotate"
                            />
                        </div>
                        <div className="absolute  bottom-44  left-0">
                            <img
                                src="/assets/Images/Rotate/image 51.png"
                                alt="Image 8"
                                className="h-24 w-24  border border-yellow-300 p-2  bg-white counter-rotate"
                            />
                        </div>
                    </div>
                </div>
            </div>



            {/* 

            <Swiper
      slidesPerView={3}
      centeredSlides={true}
      spaceBetween={30}
      onSlideChange={handleSlideChange}
    >
      {[1, 2, 3, 4, 5].map((slide, index) => (
        <SwiperSlide
          key={index}
          className={activeIndex === index ? 'scale-slide' : ''}
        >
          <div className="slide-content">Slide {slide}</div>
        </SwiperSlide>
      ))}
    </Swiper>
 */}






        </>
    );
}
export default Rotate;
