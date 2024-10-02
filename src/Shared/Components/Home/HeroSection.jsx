import React from 'react';
import CountUp from 'react-countup';

function HeroSection() {
    const duration = 3; 

    return (
        <section className="bg-[url('/assets/Images/HeroSection/bg-0.png')] bg-no-repeat bg-cover bg-center lg:h-[90vh]">
            <div className='max-w-[90rem] mx-auto px-10 flex justify-center items-center h-[75vh]'>
                <div className='grid lg:grid-cols-2 grid-cols-1 items-center lg:gap-14'>
                    <div className='space-y-10'>
                        <div className='space-y-2'>
                            <p className="text-[#FFC906] md:text-7xl text-2xl">Valluva’s</p>
                            <p className="text-white md:text-5xl text-xl">Education Study Centre</p>
                            <div className='w-fit h-fit p-1 border border-[#FFF] rounded-lg'>
                                <p className="text-white">Since 2007</p>
                            </div>
                        </div>
                        <div>
                            <p className='md:text-4xl text-xl text-[#FFC906]'>நேரடி தொலைதூர கல்வி மையம்</p>
                            <p className='text-lg text-white'>A study center that brings together top universities</p>
                        </div>
                    </div>
                    <div className='lg:block hidden'>
                        <img className='w-[600px]' src="/assets/Images/Header/Layer 1.png" alt="Education Center" />
                    </div>
                </div>
            </div>
            <div className='px-5 lg:mt-5'>
                <div className="max-w-[85rem] mx-auto border-4 border-white bg-[url('/assets/Images/Header/topp.png')] bg-cover grid md:grid-cols-4 grid-cols-2 lg:gap-0 gap-1 text-[#025450] md:p-5 p-2 rounded-3xl">
                    <div className="flex flex-col items-center">
                        <h1 className="md:text-5xl text-xl font-bold w-[100px] text-center ">
                            <CountUp end={3800} duration={duration} suffix='+' />
                        </h1>
                        <p className="md:text-base text-sm font-semibold">Students</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h1 className="md:text-5xl text-xl font-bold w-[100px] text-center ">
                            <CountUp end={50} duration={duration}   suffix='+' />
                        </h1>
                        <p className="md:text-base text-sm font-semibold">UG & PG Courses</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h1 className="md:text-5xl text-xl font-bold w-[100px] text-center ">
                            <CountUp end={6} duration={duration}  suffix='+'  />
                        </h1>
                        <p className="md:text-base text-sm font-semibold">University's Tie Up</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h1 className="md:text-5xl text-xl font-bold w-[100px] text-center ">
                            <CountUp end={16} duration={duration}   suffix='+' />
                        </h1>
                        <p className="md:text-base text-sm font-semibold">Years in Education</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
