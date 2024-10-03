import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Hamburger from "hamburger-react";

function Header() {
  const [isOpen, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();
  const isActive = (path) => location.pathname === path;




  const toggleIcons = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <div className="bg-[#025450] fixed w-full top-0 z-50">
        <header className="max-w-[94rem] mx-auto px-5">
          <div className="flex justify-between items-center py-4">

            <Link to='/'>

              <div className="flex gap-5 items-center">
                <img src="/assets/Images/Header/logo 4.png" alt="logo" className='w-20' />
                <img src="/assets/Images/Header/2.png" alt="logo" className='w-28' />

              </div>
            </Link>

            <div className='lg:hidden block'>
              <Hamburger toggled={isOpen} toggle={setOpen} color="#FFFFFF" />
            </div>


            <div className="text-[#f4e316] lg:block  hidden">
              <Link
                to="/"
                className={`p-3 ps-px sm:px-3 md:py-4 2xl:text-lg  text-sm hover:text-white focus:outline-none  ${isActive("/") ? "text-white" : "text-[#f4e316]"
                  }`}
                aria-current="page"
              >
                Home
              </Link>

              <Link
                to="/about"
                className={`p-3 ps-px sm:px-3 md:py-4   2xl:text-lg  text-sm hover:text-white focus:outline-none  ${isActive("/about") ? "text-white" : "text-[#f4e316]"
                  }`}
              >
                About Us
              </Link>

              <Link
                to='/course'
                className={`p-3 ps-px sm:px-3 md:py-4  2xl:text-lg  text-sm hover:text-white focus:outline-none ${isActive("/course") ? "text-white" : "text-[#f4e316]"}`}

              >
                Courses
              </Link>
              <Link
                className={`p-3 ps-px sm:px-3 md:py-4   2xl:text-lg  text-sm hover:text-white focus:outline-none ${isActive("/admission") ? "text-white" : "text-[#f4e316]"}`}
                to='/admission'
              >
                Admission
              </Link>
              <Link
                className={`p-3 ps-px sm:px-3 md:py-4  2xl:text-lg  text-sm hover:text-white focus:outline-none ${isActive("/university") ? "text-white" : "text-[#f4e316]"} `}
                to='/university'
              >
                Universities
              </Link>
              <Link
                className={`p-3 ps-px sm:px-3 md:py-4  2xl:text-lg  text-sm hover:text-white focus:outline-none  ${isActive("/contact") ? "text-white" : "text-[#f4e316]"} `}
                to='/contact'
              >
                Contact Us
              </Link>
            </div>


            <div className="lg:block hidden">
              <div className='flex justify-evenly items-center w-[13rem] rounded-3xl border border-[#F4E316] h-[3rem] bg-white '>
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
              className=" lg:hidden block fixed bottom-40 right-0 z-50 p-1 py-2 bg-black text-white rounded-full shadow-lg"
              onClick={toggleIcons}
            >
              {isVisible ? (
                <i className="fas fa-chevron-right"></i>
              ) : (
                <i className="fas fa-chevron-left"></i>
              )}
            </button>

            {isVisible && (
              <div className="lg:hidden fixed right-2 bottom-1/3 z-50">
                <div className="flex flex-col justify-evenly items-center w-[2rem] rounded-3xl border border-[#f4e316] h-auto bg-white p-1 space-y-3">
                  <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                    <img className="w-5 h-5" src="/assets/Images/Header/facebook 3.png" alt="Facebook" />
                  </a>
                  <a href="https://www.instagram.com/accounts/login/?hl=en" target="_blank" rel="noopener noreferrer">
                    <img className="w-5 h-5" src="/assets/Images/Header/instagram 2.png" alt="Instagram" />
                  </a>
                  <a href="https://twitter.com/?lang=en" target="_blank" rel="noopener noreferrer">
                    <img className="w-5 h-5" src="/assets/Images/Header/x 3.png" alt="Twitter/X" />
                  </a>
                  <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                    <img className="w-5 h-5" src="/assets/Images/Header/youtube 2.png" alt="YouTube" />
                  </a>
                  <a href="https://in.linkedin.com/" target="_blank" rel="noopener noreferrer">
                    <img className="w-5 h-5" src="/assets/Images/Header/linkedin 3.png" alt="LinkedIn" />
                  </a>
                </div>
              </div>
            )}


          </div>
        </header>

        {isOpen && (
          <div className="lg:hidden block bg-[#025450] text-[#f4e316] p-5 text-center border ">
            <Link
              to="/"
              className={`block py-2 text-lg hover:text-white focus:outline-none  hover:underline ${isActive("/") ? "text-white" : "text-[#f4e316]"} `}
              aria-current="page"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`block py-2 text-lg hover:text-white focus:outline-none  hover:underline ${isActive("/about") ? "text-white" : "text-[#f4e316]"} `}
              onClick={() => setOpen(false)}
            >
              About Us
            </Link>

            <Link
              to="/course"
              className={`block py-2 text-lg hover:text-white focus:outline-none  hover:underline ${isActive("/course") ? "text-white" : "text-[#f4e316]"} `}
              onClick={() => setOpen(false)}
            >
              Courses
            </Link>

            <Link
              to="/admission"
              className={`block py-2 text-lg hover:text-white focus:outline-none  hover:underline ${isActive("/admission") ? "text-white" : "text-[#f4e316]"} `}
              onClick={() => setOpen(false)}
            >
              Admission
            </Link>

            <Link
              to="/university"
              className={`block py-2 text-lg hover:text-white focus:outline-none  hover:underline ${isActive("/university") ? "text-white" : "text-[#f4e316]"} `}
              onClick={() => setOpen(false)}
            >
              Universities
            </Link>

            <Link
              to="/contact"
              className={`block py-2 text-lg hover:text-white focus:outline-none  hover:underline ${isActive("/contact") ? "text-white" : "text-[#f4e316]"} `}
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