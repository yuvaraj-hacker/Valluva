import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import '../Home/home.css'
import { Link } from 'react-router-dom';

function HeroSection() {
    const duration = 3;

    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowBanner(true);
            } else {
                setShowBanner(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section className="bg-[url('/assets/Images/HeroSection/bg-0.png')] bg-no-repeat bg-cover bg-center lg:h-[90vh]">
            <div className='max-w-[95rem] mx-auto px-10 flex justify-center items-center lg:h-[75vh] md:h-[65vh] h-[60vh] md:mt-0 mt-2'>
                <div className='grid lg:grid-cols-2 grid-cols-1 items-center gap-5  '>
                    <div className='space-y-10'>
                        <div className='space-y-2'>

                            <img src="/assets/Images/Header/2.png" alt="logo" className='w-full' />
                            <p className="text-white md:text-5xl text-xl typewriter">Education Study Centre</p>
                            <div className='w-fit h-fit p-1 border border-[#FFF] rounded-lg'>
                                <p className=" text-[#f4e316] font-bold">Since 2007</p>
                            </div>
                        </div>
                        <div>
                            <p className='md:text-4xl text-sm font-bold text-[#f4e316] typewriters '>நேரடி தொலைதூர கல்வி மையம்</p>
                            <p className='text-lg text-white'>A study center that brings together top universities</p>
                        </div>
                    </div>
                    <div className=' ml-auto lg:block hidden'>
                        <img className='w-[600px] ' src="/assets/Images/Header/Layer 1.png" alt="Education Center" />

                        {/* <div className="relative flex items-center justify-center  ">
                            <div className="relative z-10 p-8 bg-white  rounded-full">
                                <img
                                    src="/assets/Images/Rotate/Valluvas Logo 1.png"
                                    alt="Center"
                                    className="h-32 w-32"
                                />
                            </div>
                            <div className="absolute w-[590px] h-[590px] rotate-ring">
                                <div className="absolute inset-0 flex items-center justify-center ">
                                    <div className="absolute  top-0 left-44">
                                        <img
                                            src="/assets/Images/Rotate/image-from-rawpixel-id-14691595-png 2.png"
                                            alt="Image 1"
                                            className="h-24 w-24  border border-yellow-300 p-2  bg-white counter-rotate"
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
                        </div> */}
                    </div>
                    <div className="overflow-hidden col-span-2">
                        <div className="whitespace-nowrap p-4 text-center font-bold text-lg md:text-2xl text-[#f4e316] col-span-2 mt-5 z-50 animate-marquee">
                            <div>
                                <span>🎉 Admissions are now OPEN! Apply Today! 🎓</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>



            <div className='px-5 lg:mt-5'>
                <div className="max-w-[85rem] mx-auto border-4 border-white bg-[url('/assets/Images/HeroSection/final-counter.png')] bg-cover grid md:grid-cols-4 grid-cols-2 lg:gap-0 gap-1 text-[#025450] md:p-5 p-2 rounded-3xl">
                    <div className="flex flex-col items-center">
                        <h1 className="md:text-5xl text-xl font-bold w-[100px] text-center ">
                            <CountUp end={3800} duration={duration} suffix='+' />
                        </h1>
                        <p className="md:text-base text-sm font-semibold">Students</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h1 className="md:text-5xl text-xl font-bold w-[100px] text-center ">
                            <CountUp end={50} duration={duration} suffix='+' />
                        </h1>
                        <p className="md:text-base text-sm font-semibold">UG & PG Courses</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h1 className="md:text-5xl text-xl font-bold w-[100px] text-center ">
                            <CountUp end={6} duration={duration} suffix='+' />
                        </h1>
                        <p className="md:text-base text-sm font-semibold">University's Tie Up</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h1 className="md:text-5xl text-xl font-bold w-[100px] text-center ">
                            <CountUp end={16} duration={duration} suffix='+' />
                        </h1>
                        <p className="md:text-base text-sm font-semibold">Years in Education</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
