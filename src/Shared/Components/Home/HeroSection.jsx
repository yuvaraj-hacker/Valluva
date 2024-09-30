import React from 'react'

function HeroSection() {
    return (
        <>
            <section className="bg-[url('/assets/Images/HeroSection/bg-0.png')]  bg-no-repeat  bg-cover bg-center  h-[90vh]">
                <div className='max-w-[90rem] mx-auto px-10   flex justify-center items-center h-[75vh]'>
                    <div className='  grid lg:grid-cols-2 grid-cols-1 items-center gap-14 '>
                        <div className='space-y-10'>
                            <div className='space-y-2'>
                                <p className="text-[#FFC906] text-7xl">Valluva’s</p>
                                <p className="text-white text-5xl">Education Study Centre</p>
                                <div className='w-fit h-fit p-1 border border-[#FFf] rounded-lg'>
                                    <p className="text-white">Since 2007</p>
                                </div>

                            </div>
                            <div>
                                <p className='text-4xl text-[#FFC906]'>நேரடி  தொலைதூர கல்வி மையம் </p>
                                <p className='text-lg text-white'>A study center that brings together top universities </p>
                            </div>
                        </div>
                        <div className='lg:block hidden'>
                            <img className='w-[600px]' src="/assets/Images/Header/Layer 1.png" alt="" />
                        </div>

                    </div>

                </div>

                
                <img className='mx-auto px-5 2xl:max-w-[90rem] xl:max-[60rem] '  src="public/assets/Images/Header/Group 2.png" alt="" />

            </section>
        </>
    )
}

export default HeroSection
