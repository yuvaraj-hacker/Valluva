


import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

function Aboutt() {
  const testimonials = [
    {
      name: 'Vignesh',
      text: "I am studying MBA in productionmanagement at this centerThey give proper study materials and guidance Thank you",
      avatar: '/assets/Images/About/Quotation.png',
      avata: '/assets/Images/About/Graduate (1).png',
      rating: 5,
    },
    {
      name: 'chandru',
      text: "I am studying MBA in productionmanagement at this centerThey give proper study materials and guidance Thank you",
      avatar: '/assets/Images/About/Quotation.png',
      avata: '/assets/Images/About/hhh.png',
      rating: 5,
    },
    {
      name: 'Prabhu',
      text: "They give Good guidelines for selectingdegrees and universities. And fee structuresare less than other institutions in Villupuram.Thank you.",
      avatar: '/assets/Images/About/Quotation.png',
      avata: '/assets/Images/About/Graduate (1).png',
      rating: 5,
    },
    {
      name: 'Vignesh',
      text: "I am studying MBA in productionmanagement at this centerThey give proper study materials and guidance Thank you",
      avatar: '/assets/Images/About/Quotation.png',
      avata: '/assets/Images/About/Graduate (1).png',
      rating: 5,
    },
    {
      name: 'chandru',
      text: "I am studying MBA in productionmanagement at this centerThey give proper study materials and guidance Thank you",
      avatar: '/assets/Images/About/Quotation.png',
      avata: '/assets/Images/About/hhh.png',
      rating: 5,
    },
    {
      name: 'Prabhu',
      text: "They give Good guidelines for selectingdegrees and universities. And fee structuresare less than other institutions in Villupuram.Thank you.",
      avatar: '/assets/Images/About/Quotation.png',
      avata: '/assets/Images/About/Graduate (1).png',
      rating: 5,
    },
  ];

  return (
    <>

      <section className="bg-[url('/assets/Images/Header/Group-3.png')]  bg-no-repeat  bg-cover bg-center  h-[20vh] my-2 ">
        <div className="max-w-[90rem] mx-auto px-10 h-[20vh] items-center grid ">
          <div className="  md:text-5xl text-2xl text-white">About Us</div>
        </div>
      </section>

      <section className="max-w-[87rem]  px-5  md:my-20 mx-auto">
        <div className="grid lg:grid-cols-5 grid-cols-1  items-center">
          <div className="col-span-2 bg-[#025450]  rounded-3xl">
            <div className='flex justify-center flex-col lg:my-14 my-5 text-white space-y-8 items-center'>

              <div className='text-center space-y-2'>


                <img className='mx-auto w-52' src="/assets/Images/About/abb.png" alt="" />
                <p className="text-2xl">Best Distance Education Center In Town!</p>
              </div>
              <p className="">Your Partner In Academic Growth</p>
              <Link to='/contact'>

                <p className="underline hover:text-[#f4e316]"> Get In Touch </p>
              </Link>
            </div>
          </div>
          <div className="col-span-3  border rounded-xl my-5 md:p-10 p-4 space-y-3">
            <p className="text-xl font-bold text-[#025450]">VALUVAS</p>
            <div className="inline-flex items-center rounded-full overflow-hidden">
              <div className="bg-[#f4e316] text-[#025450] px-4 py-2 text-sm font-bold">
                THE BEST
              </div>
              <div className="bg-[#025450] text-white px-4 py-2 text-sm font-bold">
                STUDY CENTER
              </div>
            </div>
            <p className="md:text-lg text-sm text-justify">
              The right course or degree leads to success. Make an informed
              decision with our assistance for a highly sought-after,
              job-oriented program that will propel your success. Poor choices,
              waste time and money.
            </p>
            <div className="flex flex-wrap justify-between text-lg">
              <div className="flex gap-1 items-center">
                <img src="/assets/Images/sign/Warranty.png" alt="" />
                <p className='md:text-base text-sm'>Quality service</p>
              </div>
              <div className="flex gap-1 items-center">
                <img src="/assets/Images/sign/Support.png" alt="" />
                <p className='md:text-base text-sm'>Instant & Assured Support</p>
              </div>
            </div>

            <div className="flex-wrap flex justify-between text-lg">
              <div className="flex gap-1 items-center">
                <img src="/assets/Images/sign/Coach.png" alt="" />
                <p className='md:text-base text-sm'>Experienced instructors</p>
              </div>
              <div className="flex gap-1  items-center">
                <img src="/assets/Images/sign/Cloc.png" className='w-7' alt="" />
                <p className='md:text-base text-sm'>Flexible schedule</p>
              </div>
            </div>
            <Link to='/course'>

              <div className="text-end">
                <button className="border rounded-2xl font-semibold md:text-base text-sm bg-[#f4e316] hover:text-[#f4e316] hover:bg-[#025450] text-[#025450] p-2 px-3 mt-2">
                  View Courses
                </button>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-[87rem]  px-5  mx-auto mb-10 md:my-20 my-5">


        <div className="grid lg:grid-cols-5 grid-cols-1 lg:gap-10  ">
          <div className="md:col-span-2 space-y-2 flex flex-col text-center justify-center  ">
            <img className='mx-auto' src="/assets/Images/About/Mask group.png" alt="" />
            <p className="lg:text-3xl font-semibold">G.Senthil Kumaresan</p>
            <p className="md:text-base text-sm">MBA, M.Phil, MSW, M.COM, LLB, (Ph.D)</p>
          </div>
          <div className="md:col-span-3 space-y-5">
            <div className=" my-5 space-y-2    lg:text-left text-center">
              <p className=" text-[#025450] text-xl font-bold">Message from the</p>
              <div className="inline-flex items-center rounded-full overflow-hidden">
                <div className="bg-[#f4e316] text-[#025450] px-4 py-2 text-sm font-bold">
                  DIRECTOR
                </div>
                <div className="bg-[#025450] text-white px-4 py-2 text-sm font-bold">
                  DESK
                </div>
              </div>
            </div>
            <p className="text-justify md:text-lg text-sm">
              Valluva’s (ISO 9001:2015 certified) is a destination for students
              to search for their demand for quality and recognized academic
              programs, incepted in 2007. Primarily focus is on assisting
              working professionals who want to progress through educational
              advancement.
            </p>
            <div className="flex justify-between md:gap-0 gap-3 flex-wrap items-center">
              <div className="flex gap-1  items-center">
                <img src="/assets/Images/Contact/Ringer.png" className='w-8' alt="" />
                <p className="">+91 7010051075</p>
              </div>
              <div className="flex gap-1 items-center">
                <img src="/assets/Images/Contact/Let.png" className='w-8' alt="" />
                <p className="">info@valluvasedu.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>







      <section className='bg-[#FFF6D3]'>
        <div className='max-w-[87rem]  px-5  mx-auto py-10'>
          <div className='space-y-4'>


            <p className="text-xl font-bold text-[#025450] text-center">Road to success</p>
            <div className="flex justify-center">
              <div className="inline-flex items-center rounded-full overflow-hidden">
                <div className="bg-[#f4e316] text-[#025450]e px-4 py-2 text-sm font-bold">
                  THE THREE
                </div>
                <div className="bg-[#025450] text-white px-4 py-2 text-sm font-bold">
                  STEP RULE
                </div>
              </div>
            </div>

          </div>




          <p className="text-center my-5 md:text-base text-sm">We help you to dive into your academic journey in the three-step simple rule without any hassle and with the best support in the sector.</p>


          <div className='grid lg:grid-cols-6 justify-center'>
            <div className='flex items-center col-span-2'>
              <p className="md:text-[150px] text-[100px] font-bold text-gray-400">01</p>
              <div className='md:ml-0 ml-5'>
                <p className='text-[#025450]'>
                  Choose a University
                </p>
                <p className='text-sm'>
                  Please choose from our wide
                  range with an esteemed
                  partner university.
                </p>
              </div>
            </div>
            <div className='flex items-center col-span-2'>
              <p className="md:text-[150px] text-[100px]  font-bold text-gray-400">02</p>
              <div className=''>
                <p className='text-[#025450]'>
                  Select a Course
                </p>
                <p className='text-sm'>
                  Select from a spectrum
                  of courses suitable
                  to your need.
                </p>
              </div>
            </div>
            <div className='flex items-center col-span-2'>
              <p className="md:text-[150px] text-[100px]  font-bold text-gray-400">03</p>
              <div className=''>
                <p className='text-[#025450]'>
                  Enroll a Degree
                </p>
                <p className='text-sm'>
                  Enroll your choice of
                  course hassle-free
                  with our support.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>


      <div className=" mx-auto  bg-[url('/assets/Images/Header/Group-3.png')]  bg-no-repeat  bg-cover bg-center lg:px-10   mb-20 text-white lg:p-20 p-5">
        <div className=' grid lg:grid-cols-4 grid-cols-2 max-w-[85rem] lg:gap-0 gap-3  mx-auto px-5'>


          <div>
            <p className="lg:text-6xl text-2xl font-bold">3800+</p>
            <p className="lg:text-xl text-sm">Students</p>
          </div>
          <div>
            <p className="lg:text-6xl text-2xl font-bold">50+</p>
            <p className="lg:text-xl text-sm">UG & PG Courses</p>
          </div>
          <div>
            <p className="lg:text-6xl text-2xl font-bold">6+</p>
            <p className="lg:text-xl text-sm">University’s Tie Up</p>
          </div>
          <div>
            <p className="lg:text-6xl text-2xl font-bold">16+</p>
            <p className="lg:text-xl text-sm">Years in Education</p>
          </div>
        </div>
      </div>
      <section className="max-w-[87rem]  px-5  space-y-4  mx-auto my-20">
        <div className="   text-center text-[#025450] px-5">
          <p>Hear From Our</p>
        </div>
        <div className="flex justify-center md:px-0 px-5">
          <div className="inline-flex items-center rounded-full overflow-hidden">
            <div className="bg-[#f4e316] text-[#025450] px-4 py-2 text-sm font-bold">
              HAPPY
            </div>
            <div className="bg-[#025450] text-white px-4 py-2 text-sm font-bold">
              STUDENTS
            </div>
          </div>
        </div>
        <div className='my-5 '>


          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            loop={true}
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-[#FFF6D3] p-6   space-y-4 text-center cursor-pointer">
                  <img
                    className="mx-auto "
                    src={testimonial.avatar}
                    alt={testimonial.name}
                  />
                  <p className="mt-4 md:text-lg text-sm">{testimonial.text}</p>
                  <img
                    className="mx-auto "
                    src={testimonial.avata}

                  />
                  <h3 className="mt-2 font-bold text-xl">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">Alumni Student</p>
                  <div className="mt-2">
                    {'⭐'.repeat(testimonial.rating)}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

    </>
  );
}

export default Aboutt;
