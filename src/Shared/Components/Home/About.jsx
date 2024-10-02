import React from 'react'
import { Link } from 'react-router-dom'

function About() {
    return (
        <>

            <section className='max-w-[55rem] mx-auto md:my-20 my-10 px-5'>
                <div className='text-center space-y-5'>
                    <div className='w-fit h-fit p-1 rounded-2xl bg-[#025450] mx-auto text-white px-5'>
                        <p >Distance Education</p>
                    </div>

                    <p className="md:text-4xl text-2xl font-bold  text-[#FFC906]">Ignite Your Growth With Valluva’s</p>
                    <div className="max-w-[50rem] mx-auto  md:bg-[url('/assets/Images/About/agg.jpg')]   bg-cover rounded-2xl border-[#025450] border-4 bg-center">


                        <div className='grid lg:grid-cols-2'>


                            <div>

                            </div>
                            <div className='md:py-36 py-5 '>
                                <p className="lg:text-4xl text-lg text-[#025450] font-bold mb-5">Explore Our Courses</p>
                                <Link to='/course'>

                                    <button className='rounded-3xl bg-[#025450] lg:text-base hover:text-[#025450] hover:bg-[#FFC906] font-bold text-sm  p-2 px-3 text-white'>
                                        View Courses
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <p className="text-[#025450] md:text-base text-sm lg:px-5">
                        “Get career-suitable courses with Assure Support. No need to leave your job, study from your
                        place and earn your degree while working. Open to all working individuals looking for growth.”
                    </p>
                    <div className='lg:space-y-5 space-y-0'>


                        <div className=" grid md:grid-cols-3 grid-cols-1 px-5  md:justify-between   text-[#025450] font-bold md:text-base text-sm">
                            <div className='flex gap-1 items-center'>
                                <img src="/assets/Images/Header/Pen.png" alt="" />
                                <p className="">Self Learning</p>
                            </div>
                            <div className='flex gap-1 items-center'>
                                <img src="/assets/Images/Header/Pen.png" alt="" />
                                <p className="">One-click Support</p>
                            </div>
                            <div className='flex gap-1 items-center'>
                                <img src="/assets/Images/Header/Pen.png" alt="" />
                                <p className="">India’s Best Universities</p>
                            </div>
                        </div>
                        <div className=" grid md:grid-cols-3 grid-cols-1 px-5  md:justify-between text-[#025450] font-bold md:text-base text-sm">
                            <div className='flex gap-1 items-center'>
                                <img src="/assets/Images/Header/Pen.png" alt="" />
                                <p className="">Unique Coaching Methods</p>
                            </div>
                            <div className='flex gap-1 items-center'>
                                <img src="/assets/Images/Header/Pen.png" alt="" />
                                <p className="">Affordable Fees</p>
                            </div>
                            <div className='flex gap-1 items-center'>
                                <img src="/assets/Images/Header/Pen.png" alt="" />
                                <p className="">Best In TN</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
