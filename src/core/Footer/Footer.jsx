import React from 'react'

function Footer() {
  return (
    <>
      <section className="bg-[url('/assets/Images/HeroSection/bg-3.png')] h-[50vh] bg-no-repeat mx-auto ">
           <div className=" max-w-[80rem] mx-auto flex justify-evenly ">
             
           </div>


          
      </section>

      <div className='bg-[#FFC906] text-center py-5 font-semibold  gap-1  flex flex-wrap justify-center md:px-0 px-5'> 
        <div className='flex gap-1 text-[#025450]  '>
        Copyright © 2024. All Rights Reserved <span className='md:block hidden'> | </span>
        </div>
        <div className='text-[#025450] '>
          Developed by <span className='text-black hover:underline'><a href='http://arrowthought.com/' target='_blank' rel='noopener noreferrer'>Arrow Thought</a></span>
        </div>
      </div>
    </>
  )
}

export default Footer
