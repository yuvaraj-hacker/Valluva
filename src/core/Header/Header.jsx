import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Hamburger from "hamburger-react";

function Header() {
  const [isOpen, setOpen] = useState(false);

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
              <Hamburger toggled={isOpen} toggle={setOpen} />
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
               to='course'
                className="p-3 ps-px sm:px-3 md:py-4 text-sm hover:text-white focus:outline-none focus:text-neutral-300"
                
              >
                Courses
              </Link>
              <Link
                className="p-3 ps-px sm:px-3 md:py-4 text-sm hover:text-white focus:outline-none focus:text-neutral-300"
                to='admission'
              >
                Admission
              </Link>
              <Link
                className="p-3 ps-px sm:px-3 md:py-4 text-sm hover:text-white focus:outline-none focus:text-neutral-300"
                to='university'
              >
                Universities
              </Link>
              <Link
                className="p-3 ps-px sm:px-3 md:py-4 text-sm hover:text-white focus:outline-none focus:text-neutral-300"
                to='contact'
              >
                Contact Us
              </Link>
            </div>

            
            <div className="lg:block hidden">
              <div className='flex justify-evenly items-center w-[13rem] rounded-3xl border border-[#FFC906] h-[3rem] bg-white '>
                <img className="w-7 h-7" src="/assets/Images/Header/facebook 3.png" alt="Facebook" />
                <img className="w-7 h-7" src="/assets/Images/Header/instagram 2.png" alt="Instagram" />
                <img className="w-7 h-7" src="/assets/Images/Header/x 3.png" alt="Twitter/X" />
                <img className="w-7 h-7" src="/assets/Images/Header/youtube 2.png" alt="YouTube" />
                <img className="w-7 h-7" src="/assets/Images/Header/linkedin 3.png" alt="LinkedIn" />
              </div>
            </div>
          </div>
        </header>

        {isOpen && (
          <div className="lg:hidden block bg-[#025450] text-[#FFC906] p-5">
            <Link
              to="/"
              className="block py-2 text-lg hover:text-white focus:outline-none focus:text-neutral-300"
              aria-current="page"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>

            <Link
              to="/about"
              className="block py-2 text-lg hover:text-white focus:outline-none focus:text-neutral-300"
              onClick={() => setOpen(false)}
            >
              About Us
            </Link>

            <a
              href="#"
              className="block py-2 text-lg hover:text-white focus:outline-none focus:text-neutral-300"
              onClick={() => setOpen(false)}
            >
              Courses
            </a>

            <a
              href="#"
              className="block py-2 text-lg hover:text-white focus:outline-none focus:text-neutral-300"
              onClick={() => setOpen(false)}
            >
              Admission
            </a>

            <a
              href="#"
              className="block py-2 text-lg hover:text-white focus:outline-none focus:text-neutral-300"
              onClick={() => setOpen(false)}
            >
              Universities
            </a>

            <a
              href="#"
              className="block py-2 text-lg hover:text-white focus:outline-none focus:text-neutral-300"
              onClick={() => setOpen(false)}
            >
              Contact Us
            </a>
          </div>
        )}
      </div>

    
      <div className="h-[5rem]"></div>
    </>
  );
}

export default Header;
