import React, { useEffect, useState } from 'react'

function HeroSection() {

    const [studentsCount, setStudentsCount] = useState(0);
    const [coursesCount, setCoursesCount] = useState(0);
    const [universitiesCount, setUniversitiesCount] = useState(0);
    const [yearsCount, setYearsCount] = useState(0);


    const incrementCount = (start, end, setter, duration = 2000) => {
        const range = end - start;
        const stepTime = Math.abs(Math.floor(duration / range));
        let current = start;
        const timer = setInterval(() => {
            current += 1;
            setter(current);
            if (current === end) {
                clearInterval(timer);
            }
        }, stepTime);
    };

    useEffect(() => {

        incrementCount(0, 3800, setStudentsCount, 10000);
        incrementCount(0, 50, setCoursesCount, 2000);
        incrementCount(0, 6, setUniversitiesCount, 2000);
        incrementCount(0, 16, setYearsCount, 2000);
    }, []);


    return (
        <>
            <section className="bg-[url('/assets/Images/HeroSection/bg-0.png')]  bg-no-repeat  bg-cover bg-center  lg:h-[90vh]">
                <div className='max-w-[90rem] mx-auto px-10   flex justify-center items-center lg:h-[75vh] h-[65vh]'>
                    <div className='  grid lg:grid-cols-2 grid-cols-1 items-center lg:gap-14 '>
                        <div className='space-y-10'>
                            <div className='space-y-2'>
                                <p className="text-[#FFC906] md:text-7xl text-4xl">Valluva’s</p>
                                <p className="text-white md:text-5xl text-2xl">Education Study Centre</p>
                                <div className='w-fit h-fit p-1 border border-[#FFf] rounded-lg'>
                                    <p className="text-white">Since 2007</p>
                                </div>

                            </div>
                            <div>
                                <p className='md:text-4xl text-2xl text-[#FFC906]'>நேரடி  தொலைதூர கல்வி மையம் </p>
                                <p className='text-lg text-white'>A study center that brings together top universities </p>
                            </div>
                        </div>
                        <div className='lg:block hidden'>
                            <img className='w-[600px]' src="/assets/Images/Header/Layer 1.png" alt="" />
                        </div>

                    </div>

                </div>
                <div className='px-5 lg:mt-5'>


                    <div className="max-w-[85rem] mx-auto  border-4 border-white bg-[url('/assets/Images/Header/topp.png')] bg-cover  grid lg:grid-cols-4 grid-cols-2 text-[#025450] p-5 rounded-3xl">





                        <div className="flex flex-col items-center">
                            <p className="lg:text-5xl font-bold w-[100px] text-center">{studentsCount}+</p>
                            <p className="lg:text-base text-sm font-semibold">Students</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <p className="lg:text-5xl font-bold w-[100px] text-center">{coursesCount}+</p>
                            <p className="lg:text-base text-sm font-semibold">UG & PG Courses</p>
                        </div>




                        <div className="flex flex-col items-center">
                            <p className="lg:text-5xl font-bold w-[100px] text-center">{universitiesCount}+</p>
                            <p className="lg:text-base text-sm font-semibold">University's Tie Up</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <p className="lg:text-5xl font-bold w-[100px] text-center">{yearsCount}+</p>
                            <p className="lg:text-base text-sm font-semibold">Years in Education</p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSection
