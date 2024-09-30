import React from 'react'

function About() {
    return (
        <>

            <section className='max-w-[50rem] mx-auto my-20'>
                <div className='text-center space-y-5'>
                    <div className='w-fit h-fit p-1 rounded-2xl bg-[#025450] mx-auto text-white px-5'>
                        <p >Distance Education</p>
                    </div>

                    <p className="text-5xl text-[#FFC906]">Ignite Your Growth With Valluva’s</p>
                    <div className="w-full  bg-[#025450]">

                    </div>
                    <p className="text-[#025450]">
                        “Get career-suitable courses with Assure Support. No need to leave your job, study from your
                        place and earn your degree while working. Open to all working individuals looking for growth.”
                    </p>
                    <div className=" flex  flex-wrap px-5  justify-between text-[#025450] font-bold text-lg">
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
                    <div className=" flex flex-wrap px-5 justify-between text-[#025450] font-bold text-lg">
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
            </section>
        </>
    )
}

export default About
