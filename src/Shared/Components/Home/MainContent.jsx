import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

function MainContent() {

  const [courseLevel, setCourseLevel] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');


  const coursesData = {
    UG: ['	B.A. Tamil', '	B.Lit. Tamil', 'B.A. Economics', 'B.A. English', 'B.A. History', 'B.A. Public Administration', '	B.A. Political Science', '	B.B.A.', '	B.Sc. Mathematics', 'B.Sc. Computer Science'],
    PG: ['M.A. Economics', 'M.A. English', 'M.A. Tamil', 'M.A. History', '	M.A. Political Science', '	M.A. Public Administration', '		M.Sc. Mathematics', '	M.Sc. Computer  Science', 'M.Com', 'M.B.A'],
    Diploma: ['Diploma in Computer Science', ''],
  };


  const handleLevelChange = (e) => {
    setCourseLevel(e.target.value);
    setSelectedCourse('');
  };

  const handleCourseChange = (e) => {
    setSelectedCourse(e.target.value);
  };



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
      <section className='max-w-[90rem] mx-auto md:my-20'>
        <div className='space-y-5 '>


          <div className='w-fit h-fit p-1 rounded-2xl bg-[#025450] mx-auto text-white px-5'>
            <p >Learn & Get a Degree from</p>
          </div>

          <p className="md:text-4xl text-base text-[#f4e316] text-center font-bold bg-[#025450] w-fit mx-auto p-2 rounded-3xl">Our University Partners</p>
        </div>

        <div className=' mx-auto mt-10'>
          <div className='grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-10 my-5 px-5'>
            <Link to='course'>
              <div className='relative border p-2 border-[#f4e316] hover:border-none rounded-xl hover:text-white group hover:bg-[#025450] hover:scale-110 duration-200 hover:cursor-pointer'>


                <div className='absolute right-0 top-0 h-full'>
                  <img src="/assets/Images/Header/shadow.png" alt="right-side shadow" className='h-full' />
                </div>


                <img className='mx-auto' src="/assets/Images/Header/image (3).png" alt="university1" />

                <div className='space-y-2 my-5'>
                  <p className="text-center group-hover:text-white lg:text-xl text-[#025450] font-bold">
                    Bharathidasan University,<br /> Trichy
                  </p>
                  <p className="text-center group-hover:text-white">
                    B.A, B.Com, BCA, B.Sc, M.A, M.Com, M.B.A, Executive -M.B.A, M.C.A, M.Sc
                  </p>
                </div>

                <div className='flex gap-3 justify-end'>
                  <p className="text-[#025450] group-hover:text-white">
                    Select Course
                  </p>
                  <img src="/assets/Images/Header/Arrow.png" alt="" />
                </div>
              </div>
            </Link>

            <Link to='course'>
              <div className='border relative p-2 border-[#f4e316] hover:border-none rounded-xl hover:text-white group hover:bg-[#025450]  hover:scale-110 duration-200 hover:cursor-pointer'>

                <div className='absolute right-0 top-0 h-full'>
                  <img src="/assets/Images/Header/shadow.png" alt="right-side shadow" className='h-full' />
                </div>
                <img className='mx-auto' src="/assets/Images/Header/image (4).png" alt="university1" />
                <div className='space-y-2 my-5'>


                  <p className="text-center text-[#025450] group-hover:text-white lg:text-xl font-bold">Madras University,<br />
                    Chennai</p>
                  <p className="text-center group-hover:text-white">B.A, B.Com, B.C.A, B.Sc, M.A, M.Com, M.B.A,
                    Executive -M.B.A, M.C.A, M.Sc</p>
                </div>
                <div className='flex gap-3 justify-end'>
                  <p className=" text-[#025450] group-hover:text-white">Select Course</p>
                  <img src="/assets/Images/Header/Arrow.png" alt="" />
                </div>
              </div>

            </Link>
            <Link to='/course'>
              <div className='border relative p-2 border-[#f4e316] rounded-xl hover:border-none hover:text-white group hover:bg-[#025450] hover:scale-110 duration-200 hover:cursor-pointer'>
                <div className='absolute right-0 top-0 h-full'>
                  <img src="/assets/Images/Header/shadow.png" alt="right-side shadow" className='h-full' />
                </div>
                <img className='mx-auto' src="/assets/Images/Header/image (5).png" alt="university1" />
                <div className='space-y-2 my-5'>


                  <p className="text-center text-[#025450] lg:text-xl group-hover:text-white font-bold">Alagappa University,<br />
                    Karaikudiy</p>
                  <p className="text-center group-hover:text-white">B.A, B.Com, B.C.A, B.Sc, M.A, M.Com, M.B.A,
                    Executive -M.B.A, M.C.A, M.Sc</p>
                </div>
                <div className='flex gap-3 justify-end'>
                  <p className=" text-[#025450] group-hover:text-white">Select Course</p>
                  <img src="/assets/Images/Header/Arrow.png" alt="" />
                </div>
              </div>
            </Link>
            <Link to='/course'>
              <div className='border relative p-2 border-[#f4e316] rounded-xl hover:border-none hover:text-white group hover:bg-[#025450] hover:scale-110 duration-200 hover:cursor-pointer' >
                <div className='absolute right-0 top-0 h-full'>
                  <img src="/assets/Images/Header/shadow.png" alt="right-side shadow" className='h-full' />
                </div>
                <img className='mx-auto' src="/assets/Images/Header/image (6).png" alt="university1" />
                <div className='space-y-2 my-5'>


                  <p className="text-center text-[#025450] lg:text-xl group-hover:text-white font-bold">Manonmaniam Sundaranar
                    University,<br /> Tirunelveli</p>
                  <p className="text-center group-hover:text-white">B.A, B.Com, B.C.A, B.Sc, M.A, M.Com, M.B.A,
                    Executive -M.B.A, M.C.A, M.Sc</p>
                </div>
                <div className='flex gap-3 justify-end'>
                  <p className=" text-[#025450] group-hover:text-white">Select Course</p>
                  <img src="/assets/Images/Header/Arrow.png" alt="" />
                </div>
              </div>
            </Link>
            <Link to='/course'>
              <div className='border relative p-2 border-[#f4e316] rounded-xl hover:border-none hover:text-white group  hover:bg-[#025450] hover:scale-110 duration-200 hover:cursor-pointer'>
                <div className='absolute right-0 top-0 h-full'>
                  <img src="/assets/Images/Header/shadow.png" alt="right-side shadow" className='h-full' />
                </div>
                <img className='mx-auto' src="/assets/Images/Header/image (7).png" alt="university1" />
                <div className='space-y-2 my-5'>


                  <p className="text-center text-[#025450] lg:text-xl group-hover:text-white font-bold">Tamilnadu Open University,<br />
                    Chennai</p>
                  <p className="text-center group-hover:text-white">B.A, B.Com, B.C.A, B.Sc, M.A, M.Com, M.B.A,
                    Executive -M.B.A, M.C.A, M.Sc</p>
                </div>
                <div className='flex gap-3 justify-end'>
                  <p className=" text-[#025450] group-hover:text-white">Select Course</p>
                  <img src="/assets/Images/Header/Arrow.png" alt="" />
                </div>
              </div>
            </Link>
            <Link to='/course'>
              <div className='border relative p-2 border-[#f4e316] rounded-xl hover:border-none hover:text-white group hover:bg-[#025450] hover:scale-110 duration-200 hover:cursor-pointer'>
                <div className='absolute right-0 top-0 h-full'>
                  <img src="/assets/Images/Header/shadow.png" alt="right-side shadow" className='h-full' />
                </div>
                <img className='mx-auto' src="/assets/Images/Header/image (8).png" alt="university1" />
                <div className='space-y-2 my-5'>


                  <p className="text-center text-[#025450]  lg:text-xl group-hover:text-white font-bold">ISBM University,<br />
                    Chhattisgarh</p>
                  <p className="text-center group-hover:text-white">B.A, B.Com, B.C.A, B.Sc, M.A, M.Com, M.B.A,
                    Executive -M.B.A, M.C.A, M.Sc</p>
                </div>
                <div className='flex gap-3 justify-end'>
                  <p className=" text-[#025450] group-hover:text-white">Select Course</p>
                  <img src="/assets/Images/Header/Arrow.png" alt="" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>








      <section className='max-w-[90rem] mx-auto space-y-5 md:my-20 my-10'>
        <div className='w-fit h-fit p-1 rounded-2xl bg-[#f4e316] mx-auto text-black px-5'>
          <p >Why Choose Us</p>
        </div>


        <p className="2xl:text-9xl md:text-5xl text-3xl font-bold text-center anton  text-[#025450]  px-5">Recognized & Accredited</p>

        <div className='flex justify-center flex-wrap gap-4'>


          <img className='h-52' src="/assets/Images/Header/spo1 (1).png" alt="" />
          <img className='h-56' src="/assets/Images/Header/spo1 (2).png" alt="" />
          <img className='h-52' src="/assets/Images/Header/spo1 (3).png" alt="" />
        </div>
      </section>



      <div className=' w-full bg-[#025450]'>
        <section className='max-w-[60rem] mx-auto md:space-y-5 space-y-3 py-10 px-5'>


          <div className='w-fit h-fit p-1 rounded-2xl bg-[#f4e316] mx-auto text-black px-5'>
            <p >Connect With Us</p>
          </div>


          <p className="text-2xl font-bold text-center  text-[#f4e316]  ">Talk To Our Expert</p>
          <p className="lg:text-7xl text-2xl font-bold text-center   text-white  ">Admissions Are Open</p>

          <p className='text-center text-xl text-[#f4e316] '>Join Now 2023-24</p>
          <div className='text-center flex gap-2 justify-center items-center'>

            <img src="/assets/Images/Header/WhatsApp.png" alt="" />
            <p className="text-white md:text-base text-sm">+91 7010051075</p>
          </div>
          <div className='flex gap-2 justify-center items-center '>
            <img src="/assets/Images/Header/Ringer Volume (2).png" alt="" />
            <p className="text-white md:text-base text-sm">+91 7010051075 / 04146 355730</p>
          </div>
          <p className='text-center text-[#f4e316] md:text-base text-sm'>“Empower your future with expert guidance! Let us, the premier distance education center, be your
            partner in discovering The perfect career path, course, and college for you.”</p>












        </section>
        <section className='max-w-[110rem]  mx-auto'>
          <div className='flex justify-center gap-10 items-center px-5'>


            <form className='w-[30rem]  py-5 my-6 rounded-lg bg-[#f4e316] '>
              <p className="text-center text-[#025450] md:text-2xl font-bold md:mb-0 mb-3">GET FREE COUNSELING</p>

              <div className='px-5 space-y-6 '>


                <div>
                  <label className=' text-[#025450] '>
                    Name *
                  </label>
                  <input type="text" placeholder='Enter Full Name' className='w-full p-2 rounded-md' required />
                </div>
                <div>
                  <label className=' text-[#025450] '>
                    Mobile No *
                  </label>
                  <input type="text" placeholder='Enter Your Whatsapp No' className='w-full p-2 rounded-md' required />
                </div>
                <div>

                  <label className=' text-[#025450] '>
                    Email *
                  </label>
                  <input type="text" placeholder='Enter Your Mail' className='w-full p-2 rounded-md' required />
                </div>
                <div className="max-w-md mx-auto space-y-4 h-32">
                  <div>


                    <label className='text-[#025450]'>  Select Course *</label>
                    <select
                      id="course-level"
                      value={courseLevel}
                      onChange={handleLevelChange}
                      className="mt-1 block w-full p-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      required
                    >
                      <option value="" disabled>
                        Select Course Level
                      </option>
                      <option value="UG">UG</option>
                      <option value="PG">PG</option>
                      <option value="PG">MBA</option>
                      <option value="PG">MCA</option>
                      <option value="Diploma">Diploma</option>
                    </select>
                  </div>

                  {courseLevel && (
                    <select
                      id="course"
                      value={selectedCourse}
                      onChange={handleCourseChange}
                      className="mt-1 block w-full p-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      required
                    >
                      <option value="" disabled>
                        Select a Course
                      </option>
                      {coursesData[courseLevel].map((course, index) => (
                        <option key={index} value={course}>
                          {course}
                        </option>
                      ))}
                    </select>
                  )}


                </div>
                <div>
                  <label className=' text-[#025450] '>
                    Message
                  </label>
                  <textarea type="text" placeholder='Enter Your Requirements' className='w-full p-2 rounded-md' rows={4} />
                </div>



                <div className='text-center'>


                  <button className='p-2 px-3 rounded-3xl font-bold bg-white  hover:text-[#f4e316] hover:bg-[#025450]   text-[#025450] '>
                    Enquiry Now
                  </button>
                </div>
              </div>
            </form>
            <div className='lg:block hidden '>
              <img src="/assets/Images/Header/abs.png" alt="contact" />
            </div>
          </div>
        </section>





      </div>


      <section className="max-w-[87rem]  px-5  space-y-5  mx-auto md:my-20 my-10 -z-40">
        <div className="w-fit h-fit p-1 rounded-2xl mx-auto text-[#025450] px-5">
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
        <div className='my-5 relative'>


          <Swiper
            spaceBetween={30}
            slidesPerView={1}

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
                <div className="bg-[#FFF6D3] p-6 shadow-md  space-y-4 text-center rounded-3xl cursor-pointer">
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
      <div className='relative -top-[200px] -mb-64 lg:block hidden flex justify-center -z-20 items-center'>
        <img src="/assets/Images/About/test.png" alt="" className='w-full' />
      </div>
    </>
  )
}

export default MainContent



