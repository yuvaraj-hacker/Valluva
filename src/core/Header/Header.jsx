import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Hamburger from "hamburger-react";

function Header() {
  const [isOpen, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);


  const toggleIcons = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <div className="bg-[#025450] fixed w-full top-0 z-50">
        <header className="max-w-[90rem] mx-auto px-5">
          <div className="flex justify-between items-center py-4">


            <div className="flex items-center">
              <img src="/assets/Images/Header/Logo 1.png" alt="logo" className='w-20 h-20' />
              <p className="text-[#FFC906] ml-2 text-xl font-bold">Valluva's</p>
            </div>


            <div className='lg:hidden block'>
              <Hamburger toggled={isOpen} toggle={setOpen} color="#FFFFFF" />
            </div>


            <div className="text-[#FFC906] lg:block hidden">
              <Link
                to="/"
                className="p-3 ps-px sm:px-3 md:py-4 text-sm hover:text-white focus:outline-none focus:text-neutral-300"
                aria-current="page"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="p-3 ps-px sm:px-3 md:py-4 text-sm hover:text-white focus:outline-none focus:text-neutral-300"
              >
                About Us
              </Link>

              <Link
                to='/course'
                className="p-3 ps-px sm:px-3 md:py-4 text-sm hover:text-white focus:outline-none focus:text-neutral-300"

              >
                Courses
              </Link>
              <Link
                className="p-3 ps-px sm:px-3 md:py-4 text-sm hover:text-white focus:outline-none focus:text-neutral-300"
                to='/admission'
              >
                Admission
              </Link>
              <Link
                className="p-3 ps-px sm:px-3 md:py-4 text-sm hover:text-white focus:outline-none focus:text-neutral-300"
                to='/university'
              >
                Universities
              </Link>
              <Link
                className="p-3 ps-px sm:px-3 md:py-4 text-sm hover:text-white focus:outline-none focus:text-neutral-300"
                to='/contact'
              >
                Contact Us
              </Link>
            </div>


            <div className="lg:block hidden">
              <div className='flex justify-evenly items-center w-[13rem] rounded-3xl border border-[#FFC906] h-[3rem] bg-white '>
                <a href='https://www.facebook.com/' target='_blank'>
                  <img className="w-7 h-7" src="/assets/Images/Header/facebook 3.png" alt="Facebook" />
                </a>
                <a href='https://www.instagram.com/accounts/login/?hl=en' target='_blank'>
                  <img className="w-7 h-7" src="/assets/Images/Header/instagram 2.png" alt="Instagram" />
                </a>
                <a href='https://twitter.com/?lang=en' target='_blank'>
                  <img className="w-7 h-7" src="/assets/Images/Header/x 3.png" alt="Twitter/X" />
                </a>
                <a href='https://www.youtube.com/' target='_blank'>
                  <img className="w-7 h-7" src="/assets/Images/Header/youtube 2.png" alt="YouTube" />
                </a>
                <a href='https://in.linkedin.com/' target='_blank'>
                  <img className="w-7 h-7" src="/assets/Images/Header/linkedin 3.png" alt="LinkedIn" />
                </a>
              </div>
            </div>
          
            <button
              className=" lg:hidden block fixed bottom-0 right-0 z-50 p-3 bg-[#FFC906] text-white rounded-full shadow-lg"
              onClick={toggleIcons}
            >
              {isVisible ? "Close" : "Open"}
            </button>

            {isVisible && (
              <div className="lg:hidden fixed right-2 bottom-1/3 z-50">
                <div className="flex flex-col justify-evenly items-center w-[3rem] rounded-3xl border border-[#FFC906] h-auto bg-white p-2 space-y-3">
                  <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                    <img className="w-7 h-7" src="/assets/Images/Header/facebook 3.png" alt="Facebook" />
                  </a>
                  <a href="https://www.instagram.com/accounts/login/?hl=en" target="_blank" rel="noopener noreferrer">
                    <img className="w-7 h-7" src="/assets/Images/Header/instagram 2.png" alt="Instagram" />
                  </a>
                  <a href="https://twitter.com/?lang=en" target="_blank" rel="noopener noreferrer">
                    <img className="w-7 h-7" src="/assets/Images/Header/x 3.png" alt="Twitter/X" />
                  </a>
                  <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                    <img className="w-7 h-7" src="/assets/Images/Header/youtube 2.png" alt="YouTube" />
                  </a>
                  <a href="https://in.linkedin.com/" target="_blank" rel="noopener noreferrer">
                    <img className="w-7 h-7" src="/assets/Images/Header/linkedin 3.png" alt="LinkedIn" />
                  </a>
                </div>
              </div>
            )}

          </div>
        </header>

        {isOpen && (
          <div className="lg:hidden block bg-[#025450] text-[#FFC906] p-5 text-center border ">
            <Link
              to="/"
              className="block py-2 text-lg hover:text-white focus:outline-none focus:text-neutral-300 hover:underline"
              aria-current="page"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>

            <Link
              to="/about"
              className="block py-2 text-lg hover:text-white focus:outline-none focus:text-neutral-300  hover:underline"
              onClick={() => setOpen(false)}
            >
              About Us
            </Link>

            <Link
              to="/course"
              className="block py-2 text-lg hover:text-white focus:outline-none focus:text-neutral-300  hover:underline"
              onClick={() => setOpen(false)}
            >
              Courses
            </Link>

            <Link
              to="/admission"
              className="block py-2 text-lg hover:text-white focus:outline-none focus:text-neutral-300  hover:underline"
              onClick={() => setOpen(false)}
            >
              Admission
            </Link>

            <Link
              to="/university"
              className="block py-2 text-lg hover:text-white focus:outline-none focus:text-neutral-300  hover:underline"
              onClick={() => setOpen(false)}
            >
              Universities
            </Link>

            <Link
              to="/contact"
              className="block py-2 text-lg hover:text-white focus:outline-none focus:text-neutral-300  hover:underline"
              onClick={() => setOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        )}
      </div>


      <div className="h-[5rem]"></div>
    </>
  );
}

export default Header;