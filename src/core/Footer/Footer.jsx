import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <section className="bg-[url('/assets/Images/Footer/fffff.png')] 2xl:h-[65vh]    bg-no-repeat bg-cover bg-center mx-auto">
        <div className="md:space-y-20">

          <div className='px-5 z-50   '>


            <div className="max-w-[85rem] mx-auto bg-[url('/assets/Images/Header/foott2.png')]  border-4 bg-cover md:px-10 p-4 flex-wrap flex justify-between gap-5 items-center text-[#025450] md:p-7 rounded-3xl">
              <div className='space-y-2'>
                <p className="md:text-4xl text-2xl font-bold">Let's ignite your dream to the sky.</p>
                <p className="lg:text-base text-sm">Curious to kindle a fire in you, Get in touch with our experts for your specific needs 🚀</p>
              </div>
              <div className=' md:mx-0   mx-auto'>
                <Link to='/contact'>

                  <button className='p-2 px-3 bg-[#f4e316] text-[#025450] hover:bg-[#025450] hover:text-[#f4e316] rounded-3xl font-bold'>
                    Apply Now
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="max-w-[85rem] mx-auto">

            <footer className=" text-white py-10">
              <div className="max-w-[85rem] mx-auto grid grid-cols-1 lg:grid-cols-7 gap-4 lg:gap-5 px-5">


                <div className="space-y-5 lg:col-span-3">
                  <div className="flex items-center gap-2">
                    <img src="/assets/Images/Header/logo 4.png" alt="Valluva's Logo" className="w-16 " />
                    <img src="/assets/Images/Header/2.png" alt="logo" className='w-28' />
                  </div>
                  <p className='text-justify'>
                    Valluva's (ISO 9001:2015 certified) is a destination for students to search for
                    their demand for quality and recognized academic programs, incepted in 2007.
                    Primarily focuses on assisting working professionals who want to progress through
                    educational advancement.
                  </p>
                  <div className="flex gap-3">
                    <a href='https://www.facebook.com/' target='_blank'>
                      <img className="w-8 h-8" src="/assets/Images/Header/facebook 3.png" alt="Facebook" />
                    </a>
                    <a href='https://www.instagram.com/accounts/login/?hl=en' target='_blank'>
                      <img className="w-8 h-8" src="/assets/Images/Header/instagram 2.png" alt="Instagram" />
                    </a>
                    <a href='https://twitter.com/?lang=en' target='_blank'>
                      <img className="w-8 h-8" src="/assets/Images/Header/x 3.png" alt="Twitter/X" />
                    </a>
                    <a href='https://www.youtube.com/' target='_blank'>
                      <img className="w-8 h-8" src="/assets/Images/Header/youtube 2.png" alt="YouTube" />
                    </a>
                    <a href='https://in.linkedin.com/' target='_blank'>
                      <img className="w-8 h-8" src="/assets/Images/Header/linkedin 3.png" alt="LinkedIn" />
                    </a>
                  </div>
                </div>


                <div className="space-y-5">
                  <p className="text-[#f4e316] text-lg font-bold">Courses</p>
                  <ul className="space-y-2">
                    <div>

                      <Link to='/course'>
                        <li className='hover:underline'>Under Graduate</li>
                      </Link>
                    </div>
                    <div>
                      <Link to='/course'>

                        <li className='hover:underline'>Post Graduate</li>
                      </Link>
                    </div>
                    <div>
                      <Link to='/course'>

                        <li className='hover:underline'>MBA</li>
                      </Link>
                    </div>
                    <div>
                      <Link to='/course'>

                        <li className='hover:underline'>Diploma</li>
                      </Link>
                    </div>
                  </ul>
                </div>


                <div className="space-y-5">
                  <p className="text-[#f4e316] text-lg font-bold">Quick Links</p>
                  <ul className="space-y-2">
                    <div>


                      <Link to='/about'>

                        <li className='hover:underline'>About Us</li>
                      </Link>
                    </div>
                    <div>


                      <Link to='/course'>
                        <li className='hover:underline'>Courses</li>
                      </Link>
                    </div>
                    <div>

                    </div>
                    <Link to='/admission'>
                      <li className='hover:underline'>Admission</li>
                    </Link>

                    <div>


                      <Link to='/university'>

                        <li className='hover:underline'>Universities</li>
                      </Link>
                    </div>
                    <div>


                      <Link to='/contact'>
                        <li className='hover:underline'>Contact Us</li>
                      </Link>
                    </div>
                  </ul>
                </div>


                <div className="space-y-5 lg:col-span-2">
                  <p className="text-[#f4e316] text-lg font-bold">Contact</p>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <img className="w-6 h-5" src="/assets/Images/Contact/locate.png" alt="Location" />
                      <p className="ml-3">
                        No. 24, 1 <sup>st</sup> Floor, Trichy Main Road, <br />
                        Opp. To ES Hospital , <br />
                        Villupuram - 605602.
                      </p>
                    </div>
                    <div className="flex items-center">
                      <img className="w-6 h-5" src="/assets/Images/Contact/Ringer.png" alt="Phone" />
                      <p className="ml-3">+91 7010051075, +91 4146 355730</p>
                    </div>
                    <div className="flex items-center">
                      <img className="w-6 h-5" src="/assets/Images/Contact/Let.png" alt="Email" />
                      <p className="ml-3">valluvasvpm@gmail.com</p>
                    </div>
                    <div className="flex items-center">
                      <img className="w-6 h-5" src="/assets/Images/Contact/Cloc.png" alt="Clock" />
                      <p className="ml-3">Monday to Sunday 9:00 am to 07:00 pm</p>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </div>


        </div>
      </section>


      <div className='bg-[#f4e316] text-center py-5 font-semibold gap-1 flex flex-wrap justify-center md:px-0 px-5'>
        <div className='flex gap-1 text-[#025450]'>
          Copyright © 2024. All Rights Reserved <span className='md:block hidden'>|</span>
        </div>
        <div className='text-[#025450]'>
          Developed by <span className='text-black hover:underline'><a href='https://thirstycrowz.com/' target='_blank' rel='noopener noreferrer'>Thirsty Crowz</a></span>
        </div>
      </div>
    </>
  )
}

export default Footer
